import { markdownTable } from 'markdown-table';
import { duration } from '../node_modules/mitata/reporter/fmt.mjs';
import benchmarks from './benchmarks.json';
import { join, resolve } from 'path';
import { exec } from 'bun-utilities';

let head = [
    '## Table Of Contents',
    '',
    '- Benchmarks',
    ''
].join('\n');

let markdown = '';

for (const benchmark of benchmarks) {
    head += `   - [${benchmark.name}](#${benchmark.name})\n`;
    markdown += `## ${benchmark.name.at(0).toUpperCase() + benchmark.name.slice(1)}\n`;

    let table = [
        ['Runtime', 'Benchmark', 'Average', 'Min', 'Max']
    ];

    const path = resolve('.', benchmark.path, 'outputs');
    const outputs = {
        bun: JSON.parse(await Bun.file(join(path, 'bun.json')).text()),
        deno: JSON.parse(await Bun.file(join(path, 'deno.json')).text()),
        node: JSON.parse(await Bun.file(join(path, 'node.json')).text()),
    }

    for (const [key, value] of Object.entries(outputs)) {
        for (const b of value.benchmarks) {
            table.push([key, b.name, `${duration(b.stats.avg)}/iter`, duration(b.stats.min), duration(b.stats.max), b.stats.avg]);
        }
    }

    table.sort((a, b) => {
        if (a[5] > b[5]) return 1;
        if (a[5] < b[5]) return -1;
      
        return 0;
    });

    for (const b of table.slice(1)) b.pop();

    markdown += `${markdownTable(table)}\n\n`;
}

Bun.write('./README.md', `${head}\n${markdown}`);

exec(['git', 'add', '.']);
exec(['git', 'commit', '-m', 'Update benchmarks 🚀']);
exec(['git', 'push']);