import { Database } from 'bun:sqlite';
import { join } from 'path';
import { bench, output } from '../../../scripts/tools/server/implementations/js/main.mjs';

const db = Database.open(join(import.meta.dir, '..', '..', '..', 'files', 'dist', 'northwind.db'));
const sql = db.prepare('SELECT * FROM "Products"');

await bench(() => {
    sql.all();
});

await output();