import { bench, output } from '../../scripts/tools/server/implementations/js/main.mjs';
import { nanoid } from 'nanoid';

await bench(() => {
    nanoid(36);
});

await output();