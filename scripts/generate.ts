import { markdownTable } from 'markdown-table';
import { readdirSync, readFileSync } from 'fs';
import { join, extname } from 'path';
import { NumberType, Tool, toObject, sort, format, getCPU } from './utils';

const outputs = toObject(
    readdirSync(join(import.meta.dir, '.cache', 'outputs'))
        .map(o => {
            const path = join(import.meta.dir, '.cache', 'outputs', o);

            const content = readdirSync(path);
            if (content.every(e => extname(e) === '')) {
                return { [o]: content.map(c => ({ [c]: readdirSync(join(path, c)) })) };
            }

            return { [o]: content };
        })
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
    markdown += `## ${benchmarkName}\n\n`;

    const content: Record<string, Record<string, Benchmark>> = {};
    for (const file of files) {
        if (typeof file === 'object') {
            for (const [name, files2] of Object.entries(file)) {
                content[name] = content[name] || {};
                for (const file2 of files2 as any) {
                    content[name][file2] = JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, name, file2), { encoding: 'utf-8' }).toString());
                }
            }

        } else {
            content['main'] = content['main'] || {};
            content['main'][file] = JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, file), { encoding: 'utf-8' }).toString());
        }
    }

    for (const [group, results] of Object.entries(content)) {
        let size = {
            spaces: 6,
            header: 3,
        };
        if (group !== 'main') {
            markdown += `### <a name="${benchmarkName}-${group}">${group.replaceAll('-', ' ')}</a>\n\n`
            head += `      - [${group.replaceAll('-', ' ')}](#${benchmarkName}-${group})\n`;
            size.spaces += 3;
            size.header++;
        };

        for (const language of [...new Set(Object.values(results).map(b => b.language))]) {
            let tables: Record<string, any[]> = {};
            const hasGroup = group !== 'main';
            head += `${' '.repeat(size.spaces)}- [${language}](#${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()})\n`;
            markdown += `${'#'.repeat(size.header)} <a name="${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()}">${language}</a>\n`;
    
            tables[language] = tables[language] || [
                ['Language', 'Average', 'p75', 'p99', 'Min', 'Max']
            ];

            for (const bench of Object.values(results)) {

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
}

await Bun.write(join(import.meta.dir, '..', 'README.md'), `${head}\n${markdown}`);