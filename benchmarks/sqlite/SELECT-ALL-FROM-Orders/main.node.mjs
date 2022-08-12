import { join } from 'path';
import { createRequire } from 'node:module';
import { bench, output } from '../../../scripts/tools/server/implementations/js/main.mjs';

const require = createRequire(import.meta.url);

const db = require("better-sqlite3")(join(new URL('.', import.meta.url).pathname, '..', '..', '..', 'files', 'dist', 'northwind.db'));
const sql = db.prepare('SELECT * FROM "Orders"');

await bench(() => {
    sql.all();
});

await output();