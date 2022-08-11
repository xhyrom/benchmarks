import { installed, runCommand } from './utils';
import log, { setLevel } from './tools/paperdave-logger';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

setLevel('debug');
const languages = readdirSync(join(import.meta.dir, '..', 'benchmarks'), { withFileTypes: true }).filter(f => !f.isDirectory()).map(f => join(join(import.meta.dir, '..', 'benchmarks', f.name)));

for (const language of languages) {
    const content = (await import(language)).default;
    content.enviroment = content.enviroment.map(step => ({ ...step, build: step.build || null }))

    await Bun.write(join(import.meta.dir, '.cache', 'languages', `${content.ext}.json`), JSON.stringify(content));
    log.info(`Installing ${content.language}`);

    for (const step of content.enviroment) {
        log.info(`Step ${step.name}`);

        const installCheck = installed(step.version);
        if (installCheck) {
            log.info('Skipping install step');
            log.info(`Founded version: ${installCheck}`);
        } else {
            log.info('Running install step');
            log.debug(runCommand(step.install));

            log.success(`Installed ${step.name}`);
        }
    }

    log.success(`${content.language} installed`);
}