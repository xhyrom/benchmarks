import { join, resolve } from 'path';
import benchmarks from './benchmarks.json';

let markdown = "";

for (const benchmark of benchmarks) {
    const path = resolve('.', benchmark.path, 'outputs');
    const outputs = {
        bun: JSON.parse(await Bun.file(join(path, 'bun.json')).text()),
        deno: JSON.parse(await Bun.file(join(path, 'deno.json')).text()),
        node: JSON.parse(await Bun.file(join(path, 'node.json')).text()),
    }

    console.log(outputs);
}
console.log(benchmarks);