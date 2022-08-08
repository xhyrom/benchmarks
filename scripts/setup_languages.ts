import { installed, runCommand } from './utils';
//import log, { setLevel } from '@paperdave/logger';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

//setLevel('debug');
const languages = readdirSync(join(import.meta.dir, '..', 'benchmarks'), { withFileTypes: true }).filter(f => !f.isDirectory()).map(f => join(join(import.meta.dir, '..', 'benchmarks', f.name)));

for (const language of languages) {
    const content = (await import(language)).default;
    content.enviroment = content.enviroment.map(step => ({ ...step, build: step.build || null }))

    await Bun.write(join(import.meta.dir, '.cache', 'languages', `${content.ext}.json`), JSON.stringify(content));
    console.info(`Installing ${content.language}`);

    for (const step of content.enviroment) {
        console.info(`Step ${step.name}`);

        const installCheck = installed(step.version);
        if (installCheck) {
            console.info('Skipping install step');
            console.info(`Founded version: ${installCheck}`);
        } else {
            console.info('Running install step');
            console.debug(runCommand(step.install));

            console.log(`Installed ${step.name}`);
        }
    }

    console.log(`${content.language} installed`);
}