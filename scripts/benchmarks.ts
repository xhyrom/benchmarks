import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

let benchmarks = [];
const findBenchmarks = async(folder) => {
    for await(const file of await (await readdir(folder, { withFileTypes: true })).sort()) {
        if (file.isDirectory()) await findBenchmarks(join(folder, file.name));
        else if (file.name === 'bun.mjs') {
            benchmarks.push(folder);
            break;
        }
    };
}

await findBenchmarks(join(__dirname, '..', 'benchmarks'));
export default benchmarks.map(benchmark => new Object({
    name: benchmark.split('/').pop(),
    path: benchmark
}));

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