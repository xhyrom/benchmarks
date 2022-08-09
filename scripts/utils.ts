import { spawn } from 'bun-utilities/spawn';
import { mkdirSync } from 'fs';
import { join } from 'path';

export const runCommand = (command: string): string => {
    const run = spawn('bash', ['-c', command]);
    return run.stdout || run.stderr;
}

export const runWithoutContainer = (command: string, args: string[]): string => {
    const run = spawn(command, args);
    return run.stdout || run.stderr;
}

export const installed = (command: string): string | null => {
    const run = runCommand(command);
    if (run.toLocaleLowerCase().includes('command not found') || run.toLowerCase().includes('no such file or directory')) return null;

    return run.split('\n')[0];
}

export type Tool = 'oha' | 'bombardier' | 'hyperfine';
export type NumberType = '/iter' | '/rps';
export const save = async(
    content: string,
    benchmark: string,
    name: string,
    tool: Tool,
    language: string,
    versionCommand: string,
    type: NumberType,
    runtime?: string
): Promise<void> => {
    const parsed = JSON.parse(content);
    try { mkdirSync(join(import.meta.dir, '.cache', 'outputs', benchmark)) } catch {};

    let output = '';

    switch (tool) {
        case 'oha': {
            // Must wait for https://github.com/hatoo/oha/issues/177
            output = JSON.stringify({
                stats: {
                    avg: parsed.summary.average,
                    min: parsed.summary.slowest,
                    max: parsed.summary.fastest,
                    p75: parsed.latencyDistribution['p75'],
                    p99: parsed.latencyDistribution['p99'],
                    latency: parsed.summary.average,
                },
                language,
                tool,
                type,
                runtime: runtime !== 'null' ? `${runtime} ${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})` : null,
            });
            break;
        }
        case 'bombardier': {
            output = JSON.stringify({
                stats: {
                    avg: parsed.result.rps.mean,
                    min: parsed.result.rps.stddev,
                    max: parsed.result.rps.max,
                    p75: parsed.result.rps.percentiles['75'],
                    p99: parsed.result.rps.percentiles['99'],
                    latency: parsed.result.latency.mean,
                },
                language,
                tool,
                type,
                runtime: runtime !== 'null' ? `${runtime} ${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})` : null,
            });
            break;
        }
        case 'hyperfine': {
            output = JSON.stringify({
                stats: {
                    avg: parsed.results[0].mean * 1000000000,
                    min: parsed.results[0].min * 1000000000,
                    max: parsed.results[0].max * 1000000000,
                    p75: parsed.results[0].times[74] * 1000000000,
                    p99: parsed.results[0].times[98] * 1000000000,
                    latency: null,
                },
                language,
                tool,
                type,
                runtime: runtime !== 'null' ? `${runtime} ${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})` : null,
            });
            break;
        }
    }

    await Bun.write(
        join(import.meta.dir, '.cache', 'outputs', benchmark, `${name}.json`),
        output,
    );
}

const argv = process.argv.slice(2);

if (argv[0] == 'save') await save(argv[1], argv[2], argv[3], argv[4] as any, argv[5], argv[6], argv[7] as any, argv[8])