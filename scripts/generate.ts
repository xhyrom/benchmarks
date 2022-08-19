import { markdownTable } from 'markdown-table';
import { readdirSync, readFileSync } from 'fs';
import { join, extname } from 'path';
import { NumberType, Tool, toObject, sort, format, getCPU } from './utils';
import { marked } from 'marked';

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

let x = 0;
for (const [benchmarkName, files] of Object.entries(outputs)) {
    let perBenchMarkdown = '';
    let perBenchHead = `<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>\n`;
    
    head += `   - [${benchmarkName}](./${benchmarkName}.md)\n`;

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
            perBenchMarkdown += `### <a name="${benchmarkName}-${group}">${group.replaceAll('-', ' ')}</a>\n\n`;
            head += `      - [${group.replaceAll('-', ' ')}](./${benchmarkName}.md#${benchmarkName}-${group})\n`;
            perBenchHead += `- [${group.replaceAll('-', ' ')}](#${benchmarkName}-${group})\n`;
            size.spaces += 3;
            size.header++;
        };

        for (const language of [...new Set(Object.values(results).map(b => b.language))]) {
            let charts: Record<string, any> = {};
            let tables: Record<string, any[]> = {};
            const hasGroup = group !== 'main';
            head += `${' '.repeat(size.spaces)}- [${language}](./${benchmarkName}.md#${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()})\n`;
            perBenchHead += `${size.spaces === 9 ? '    ' : ''}- [${language}](#${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()})\n`;
            perBenchMarkdown += `${'#'.repeat(size.header)} <a name="${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()}">${language}</a>\n`;
    
            tables[language] = tables[language] || [
                ['Language', 'Average', 'p75', 'p99', 'Min', 'Max']
            ];
            charts[language] = charts[language] || {
                chart: {
                    stacked: true,
                    height: 320,
                    type: 'bar',
                    toolbar: {
                        show: true,
                    },
                    animations: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    bar: {
                      columnWidth: '45%',
                      distributed: true,
                    }
                },
                series: [
                    {
                        name: benchmarkName,
                        data: [],
                    }
                ],
                tooltip: {
                    label: {
                        show: true
                    }
                },
                legend: {
                    show: false,
                },
                stroke: {
                    width: 1,
                    curve: "straight",
                },
                xaxis: {
                    type: 'category'
                },
            }

            for (const bench of Object.values(results)) {

                if (bench.language !== language) continue;
                if (bench.stats.latency && tables[language][0].at(-1) !== 'Latency') tables[language][0].push('Latency');

                //charts[language].xaxis.categories.push(bench.runtime ? `${bench.language} / ${bench.runtime}` : bench.language);
    
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
                charts[language].series[0].data.push({
                    x: bench.runtime ? `${bench.language} / ${bench.runtime}` : bench.language,
                    y: bench.stats.avg,
                });
            }

            const tablesArray = Object.values(tables);
            const chartsArray = Object.values(charts);

            for (let i = 0; i < tablesArray.length; i++) {
                const table = tablesArray[i];
                const chart = chartsArray[i];

                table.sort(sort);
                for (const c of table.slice(1)) c.splice(c.length - 2, 2);

                perBenchMarkdown += '\n' + markdownTable(table) + '\n\n' + [
                    `<div id="chart-${x}"></div>`,
                    `<script>`,
                    `new ApexCharts(document.querySelector('#chart-${x}'), ${JSON.stringify(chart)}).render()`,
                    `</script>`
                ].join('\n') + '\n\n';

                x++;
            }
        }
    }

    await Bun.write(join(import.meta.dir, '..', 'docs', `${benchmarkName}.html`), marked.parse(`${perBenchHead}\n${perBenchMarkdown}`)/*`${perBenchHead}\n${perBenchMarkdown}`*/);
}

await Bun.write(join(import.meta.dir, '..', 'docs', 'README.md'), head);
