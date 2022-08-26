import { installed, runCommand } from './utils';
import log, { setLogFilter } from '@paperdave/logger';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

setLogFilter("*");

const languages = readdirSync(join(import.meta.dir, '..', 'benchmarks'), { withFileTypes: true }).filter(f => !f.isDirectory()).map(f => join(join(import.meta.dir, '..', 'benchmarks', f.name)));
const argv = process.argv.slice(2);

for (const language of languages) {
    let content = (await import(language)).default;
    content.environment = content.environment.map(step => ({ ...step, build: step.build || null }))

    log.info(`Installing ${content.language}`);

    for (let step of content.environment) {
        if (step.extend) {
            step = {
                ...content.environment.find(e => e.name === step.extend),
                ...step,
            };
            delete step['extend'];

            const i = content.environment.findIndex(e => e.name === step.name);
            content.environment[i] = step;
        }

        log.info(`Step ${step.name}`);

        const installCheck = installed(step.version);
        if (installCheck && argv[0] !== 'GITHUB_ACTIONS') {
            log.info('Skipping install step');
            log.info(`Founded version: ${installCheck}`);
        } else {
            log.info('Running install step');
            log.debug(runCommand(step.install));

            log.success(`Installed ${step.name}`);
        }
    }

    await Bun.write(join(import.meta.dir, '.cache', 'languages', `${content.ext}.json`), JSON.stringify(content));
    log.success(`${content.language} installed`);
}