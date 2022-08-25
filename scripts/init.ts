import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

try {
    if (!existsSync(join(import.meta.dir, '.cache'))) mkdirSync(join(import.meta.dir, '.cache'));
    if (!existsSync(join(import.meta.dir, '.cache', 'benchmarks'))) mkdirSync(join(import.meta.dir, '.cache', 'benchmarks'));
    if (!existsSync(join(import.meta.dir, '.cache', 'languages'))) mkdirSync(join(import.meta.dir, '.cache', 'languages'));
    if (!existsSync(join(import.meta.dir, '.cache', 'outputs'))) mkdirSync(join(import.meta.dir, '.cache', 'outputs'));
    if (!existsSync(join(import.meta.dir, '.cache', 'tmp'))) mkdirSync(join(import.meta.dir, '.cache', 'tmp'));
} catch {}