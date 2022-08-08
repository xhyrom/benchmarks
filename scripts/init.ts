import { mkdirSync } from 'fs';
import { join } from 'path';

try {
    mkdirSync(join(import.meta.dir, 'tools'));
    mkdirSync(join(import.meta.dir, '.cache'));
    mkdirSync(join(import.meta.dir, '.cache', 'benchmarks'));
    mkdirSync(join(import.meta.dir, '.cache', 'languages'));
    mkdirSync(join(import.meta.dir, '.cache', 'outputs'));
    mkdirSync(join(import.meta.dir, '.cache', 'tmp'));
} catch {}