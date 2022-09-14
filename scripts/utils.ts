import { spawn } from 'bun-utilities/spawn.js';
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

export const toObject = (array: any[]): Record<string, any[]> => {
    return array.reduce((result, item) => {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
    }, {});
}

export const getCPU = () => {
    if (process.platform === 'linux') {
        return runCommand(`lscpu | grep 'Model name' | cut -f 2 -d ":" | awk '{$1=$1}1'`).replace(/\n|\r/g, '');
    }

    if (process.platform === 'darwin') {
        return runCommand("sysctl -n machdep.cpu.brand_string").replace(/\n|\r/g, '');
    }

    return 'unknown';
}

/** Get X commits from repository */
export const getLatestCommits = async(repo: string = 'xhyrom/benchmarks', per_page: number = 19): Promise<string[]> => {
    const commits = await (await fetch(`https://api.github.com/repos/${repo}/commits?per_page=${per_page}`, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    })).json();

    return (commits as any).map(c => c.sha.slice(0, 7));
}

export const getFileContentFromCommit = async(
    commit: string, 
    file: string,
    repo: string = 'xhyrom/benchmarks'
): Promise<{
    stats: {
        avg: number;
    };
}> => {
    const res = await fetch(encodeURI(`https://raw.githubusercontent.com/${repo}/${commit}/scripts/.cache/outputs/${file}`));
    if (!res.ok) return {"stats": {"avg": 0}};
    
    const content = await res.json();

    return content as any;
}

export const format = (time: number, tool: Tool, type?: NumberType | '', locale = 'en-us') => {
    type = type || '';
    
    if (!['oha', 'bombardier'].some(t => tool === t)) {
        if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
        if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
        if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
        if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
        if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
        if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
      
        return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
    }
    
    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
}

export const sort = (a: any[], b: any[]) => {
    const reverse = ['bombardier', 'oha'].some(t => a.find(e => e === t))
    if (reverse) {
        if (a.at(-1) > b.at(-1)) return -1;
        if (a.at(-1) < b.at(-1)) return 1;    
    }

    if (a.at(-1) > b.at(-1)) return 1;
    if (a.at(-1) < b.at(-1)) return -1;
  
    return 0;
}

export type Tool = 'oha' | 'bombardier' | 'hyperfine' | 'server';
export type NumberType = '/iter' | '/rps';
export const save = async(
    content: string,
    benchmark: string,
    name: string,
    tool: Tool,
    language: string,
    versionCommand: string,
    type: NumberType,
    runtime?: string,
    additionalInfo?: string,
): Promise<void> => {
    const parsed = JSON.parse(content);

    let path = join(import.meta.dir, '.cache', 'outputs');
    for (const benchPath of benchmark.split('/')) {
        path = join(path, benchPath);
        try { mkdirSync(path) } catch {};
    }

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
                version: `${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})`,
                additionalInfo: additionalInfo !== 'null' ? additionalInfo : null,
                runtime: runtime !== 'null' ? runtime : null,
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
                    latency: parsed.result.latency.mean * 1000,
                },
                language,
                tool,
                type,
                version: `${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})`,
                additionalInfo: additionalInfo !== 'null' ? additionalInfo : null,
                runtime: runtime !== 'null' ? runtime : null,
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
                version: `${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})`,
                additionalInfo: additionalInfo !== 'null' ? additionalInfo : null,
                runtime: runtime !== 'null' ? runtime : null,
            });
            break;
        }
        case 'server': {
            output = JSON.stringify({
                stats: {
                    ...parsed,
                    latency: null,
                },
                language,
                tool,
                type,
                version: `${installed(`${versionCommand} | grep -m1 "" | perl -pe '($_)=/([0-9]+([.][0-9]+)+)/'`)} (${process.arch}-${process.platform})`,
                additionalInfo: additionalInfo !== 'null' ? additionalInfo : null,
                runtime: runtime !== 'null' ? runtime : null,
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

if (argv[0] == 'save') await save(argv[1], argv[2], argv[3], argv[4] as any, argv[5], argv[6], argv[7] as any, argv[8], argv[9]);