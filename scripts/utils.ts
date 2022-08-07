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

export const save = async(content: string, benchmark: string, name: string, tool: 'oha' | 'hyperfire'): Promise<void> => {
    const parsed = JSON.parse(content);

    try { mkdirSync(join(import.meta.dir, '.cache', 'outputs', benchmark)) } catch {};
    await Bun.write(
        join(import.meta.dir, '.cache', 'outputs', benchmark, `${name}.json`),
        JSON.stringify({
            summary: {
                stats: {
                    avg: tool === 'oha' ? parsed.average : parsed.results[0].mean,
                    min: tool === 'oha' ? parsed.slowest : parsed.results[0].min,
                    max: tool === 'oha' ? parsed.fastest : parsed.results[0].max,
                    p75: tool === 'oha' ? parsed.latencyDistribution['p75'] : parsed.results[0].times[74],
                    p99: tool === 'oha' ? parsed.latencyDistribution['p99'] : parsed.results[0].times[98],
                }
            }
        })
    );
}

const argv = process.argv.slice(2);

if (argv[0] == 'save') await save(argv[1], argv[2], argv[3], argv[4] as any)