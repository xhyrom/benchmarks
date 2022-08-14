import { bench, output } from '../../scripts/tools/server/implementations/js/main.mjs';
import { nanoid } from 'https://deno.land/x/nanoid/mod.ts';

await bench(() => {
    nanoid(36);
});

await output();