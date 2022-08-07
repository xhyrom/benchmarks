import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const groupBy = <T>(array: T[], predicate: (v: T) => string) =>
  array.reduce((acc, value) => {
    (acc[predicate(value)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
const __dirname = new URL('.', import.meta.url).pathname;

let benchmarks = [];
const findBenchmarks = async(folder) => {
    for await(const file of await (await readdir(folder, { withFileTypes: true })).sort()) {
        if (file.isDirectory() && file.name === 'servers') continue;
        
        if (file.isDirectory()) await findBenchmarks(join(folder, file.name));
        else if (file.name === 'bun.mjs' || file.name === 'custom.mjs') {
            benchmarks.push({
                folder: folder,
                language: folder.replace(join(__dirname, '..', 'benchmarks'), '').split('/')[1]
            });
            break;
        }
    };
}

await findBenchmarks(join(__dirname, '..', 'benchmarks'));
benchmarks = benchmarks.map((benchmark) => {
    return {
        name: benchmark.folder.split('/').pop(),
        path: benchmark.folder,
        groups: [...new Set(JSON.parse(readFileSync(join(benchmark.folder, 'outputs', 'bun.json'), { encoding: `utf-8` }).toString()).benchmarks.map(b => b.group))],
        category: benchmark.folder.split('/').slice(0, -1).pop() != benchmark.language ? benchmark.folder.split('/').slice(0, -1).pop() : null,
        language: benchmark.language
    }
})

export default groupBy(benchmarks, ({ language }) => language);

/*export default [
    {
        'name': 'console',
        'path': 'console/'
    },
    {
        'name': 'nanoid',
        'category': '3rd package',
        'path': '3rd-packages/nanoid/'
    },
    {
        'name': 'json',
        'path': 'json/'
    },
    {
        'name': 'buffer',
        'path': 'buffer/'
    }
]*/
