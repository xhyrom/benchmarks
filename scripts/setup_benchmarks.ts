import { installed, runCommand } from './utils';
import log, { setLevel } from '@paperdave/logger';
import { readdirSync } from 'fs';
import { join } from 'path';

setLevel('debug');

const benchmarks = [];
const getBenchmarks = async(folder: string = join(import.meta.dir, '..', 'benchmarks')) => {
    for await(const file of readdirSync(folder, { withFileTypes: true })) {
        if (file.isDirectory()) await getBenchmarks(join(folder, file.name));
        else if (file.name === '_.toml') {
            benchmarks.push(join(folder, file.name));
            break;
        }
    }
}

await getBenchmarks();

for (const benchmark of benchmarks) {
    const content = (await import(benchmark)).default;
    await Bun.write(join(import.meta.dir, '.cache', 'benchmarks', `${content.name}.json`), JSON.stringify(content));
    
    const installCheck = installed(content.version);
    if (installCheck) {
        log.info(`Skipping install step for ${content.name}`);
        log.info(`Founded version: ${installCheck}`);
    } else {
        log.info(`Installing tools for ${content.name}`);
        log.debug(runCommand(content.install));

        const output = installed(content.version);
        if (!output) log.fail(`Failed to install tools for ${content.name}`);
        else log.success(`Installed tools for ${content.name}, ${output}`);
    }
}