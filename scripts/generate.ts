import { exec } from 'bun-utilities/spawn';
import { markdownTable } from 'markdown-table';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { NumberType, Tool } from './utils';

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

const format = (time: number, tool: Tool, type?: NumberType | '', locale = 'en-us') => {
    type = type || '';
    
    if (tool === 'hyperfine') {
        if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`
  
        if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
        if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
        if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
        if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
        if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
      
        return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
    }
    
    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
}

const sort = (a: any[], b: any[]) => {
    const reverse = ['bombardier', 'oha'].some(t => a.find(e => e === t))
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
    language: string;
    runtime: string | null;
    tool: Tool;
    type: NumberType;
    stats: {
        avg: number;
        min: number;
        max: number;
        p75: number;
        p99: number;
        latency: number;
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
    head += `   - [${benchmarkName}](#${benchmarkName})\n`;
    markdown += `## ${benchmarkName}\n`;

    const content: Record<string, Benchmark> = {};
    for (const file of files) {
        content[file] = JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, file), { encoding: 'utf-8' }).toString());
    }

    for (const language of [...new Set(Object.values(content).map((b: any) => b.language))]) {
        let tables: Record<string, any[]> = {};
        head += `      - [${language}](#${benchmarkName}-${language.toLowerCase()})\n`;
        markdown += `### <a name="${benchmarkName}-${language.toLowerCase()}">${language}</a>\n`;

        tables[language] = tables[language] || [
            ['Language', 'Average', 'p75', 'p99', 'Min', 'Max']
        ];

        for (const bench of Object.values(content)) {
            if (bench.language !== language) continue;
            if (bench.stats.latency && tables[language][0].at(-1) !== 'Latency') tables[language][0].push('Latency');

            const forPush = [
                bench.runtime ? `${bench.language} / ${bench.runtime}` : bench.language,
                format(bench.stats.avg, bench.tool, bench.type),
                format(bench.stats.min, bench.tool),
                format(bench.stats.max, bench.tool),
                format(bench.stats['p75'], bench.tool),
                format(bench.stats['p99'], bench.tool)
            ];

            if (bench.stats.latency) forPush.push(format(bench.stats.latency, 'hyperfine'));
            forPush.push(bench.tool);
            // @ts-expect-error for sorting
            forPush.push(bench.stats.avg);

            tables[language].push(forPush);
        }

        for (const table of Object.values(tables)) {
            table.sort(sort);
            for (const c of table.slice(1)) c.splice(c.length - 2, 2);

            markdown += '\n' + markdownTable(table) + '\n\n';
        }
    }
}

await Bun.write(join(import.meta.dir, '..', 'README.md'), `${head}\n${markdown}`);