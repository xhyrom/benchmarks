import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { join } from "https://deno.land/std@0.127.0/path/mod.ts";
import { bench, output } from '../../../scripts/tools/server/implementations/js/main.mjs';

const db = new DB(join(new URL('.', import.meta.url).pathname, '..', '..', '..', 'files', 'dist', 'northwind.db'));
const sql = db.prepareQuery('SELECT * FROM "Orders"');

await bench(() => {
    sql.allEntries();
});

await output();