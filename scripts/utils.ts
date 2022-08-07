import { spawn } from 'bun-utilities/spawn';

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