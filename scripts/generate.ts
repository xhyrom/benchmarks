import { exec } from 'bun-utilities/spawn';
import { markdownTable } from 'markdown-table';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const toObject = (array: any[]): Record<string, any[]> => {
    return array.reduce((result, item) => {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
    }, {});
}

const getCPU = () => {
    if (process.platform === 'linux') {
        return exec(['bash', '-c', `lscpu | grep 'Model name' | cut -f 2 -d ":" | awk '{$1=$1}1'`]).stdout.replace(/\n|\r/g, '');
    }

    if (process.platform === 'darwin') {
        return exec(['bash', '-c', `sysctl -n machdep.cpu.brand_string'`]).stdout.replace(/\n|\r/g, '');
    }

    return 'unknown';
}

const formatNumber = (number: number) => {
    return number.toFixed(2).toLocaleString();
}

const duration = (time, locale = 'en-us') => {
    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)} ps`
  
    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)} ns`;
    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)} µs`;
    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)} ms`;
    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)} s`;
    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)} m`;
  
    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)} h`;
}

const sort = (a: any[], b: any[], reverse: boolean = false) => {
    if (reverse) {
        if (a.at(-1) > b.at(-1)) return -1;
        if (a.at(-1) < b.at(-1)) return 1;    
    }

    if (a.at(-1) > b.at(-1)) return 1;
    if (a.at(-1) < b.at(-1)) return -1;
  
    return 0;
}

const outputs = toObject(
    readdirSync(join(import.meta.dir, '.cache', 'outputs'))
        .map(o => ({ [o]: readdirSync(join(import.meta.dir, '.cache', 'outputs', o)) }))
);

interface Benchmark {
    language: string,
    runtime: string,
    stats: {
        avg: number,
        min: number,
        max: number,
        p75: number,
        p99: number,
    }
}

let head = [
    `*Ran on ${getCPU()}*`,
    '',
    '## Table Of Contents',
    '',
    '- Benchmarks',
    ''
].join('\n');
let markdown = '';
for (const [benchmarkName, files] of Object.entries(outputs)) {
    head += `   - [${benchmarkName}](${benchmarkName})\n`;
    markdown += `## ${benchmarkName}\n`;

    const content: Record<string, Benchmark> = {};
    for (const file of files) {
        content[file] = JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, file), { encoding: 'utf-8' }).toString());
    }

    for (const language of [...new Set(Object.values(content).map((b: any) => b.language))]) {
        let tables: Record<string, any[]> = {};
        head += `      - [${language}](${benchmarkName}-${language.toLowerCase()})\n`;
        markdown += `### <a name="${benchmarkName}-${language.toLowerCase()}">${language}</a>\n`;

        tables[language] = tables[language] || [
            ['Language', 'Average', 'p75', 'p99', 'Min', 'Max']
        ];

        for (const [fileName, bench] of Object.entries(content)) {
            if (bench.language !== language) continue;

            tables[language].push([bench.runtime ? `${bench.language} / ${bench.runtime}` : bench.language, bench.stats.avg.toString(), bench.stats.min.toString(), bench.stats.max.toString(), bench.stats['p75'].toString(), bench.stats['p99'].toString(), bench.stats.avg]);
        }

        for (const table of Object.values(tables)) {
            table.sort(sort);
            for (const c of table.slice(1)) c.pop();

            markdown += '\n' + markdownTable(table) + '\n\n';
        }
    }
}

await Bun.write(join(import.meta.dir, '..', 'README.md'), `${head}\n${markdown}`);