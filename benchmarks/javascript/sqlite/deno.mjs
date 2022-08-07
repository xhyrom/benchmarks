import { bench, run } from "../../../node_modules/mitata/src/cli.mjs";
import { save } from "../../../scripts/summary.mjs";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("../../utils/northwind-SQLite3/dist/northwind.db");

const __dirname = new URL('.', import.meta.url).pathname;

{
    const sql = db.prepareQuery('SELECT * FROM "Orders"');
    bench('SELECT * FROM "Orders"', () => {
        sql.allEntries();
    })
}

{
    const sql = db.prepareQuery('SELECT * FROM "Products"');
    bench('SELECT * FROM "Products"', () => {
        sql.allEntries();
    })
}

{
    const sql = db.prepareQuery('SELECT * FROM "Suppliers"');
    bench('SELECT * FROM "Suppliers"', () => {
        sql.allEntries();
    })
}

{
    const sql = db.prepareQuery('SELECT * FROM "Employees"');
    bench('SELECT * FROM "Employees"', () => {
        sql.allEntries();
    })
}

{
    const sql = db.prepareQuery('SELECT * FROM "Customers"');
    bench('SELECT * FROM "Customers"', () => {
        sql.allEntries();
    })
}

await save(await run(), "deno", __dirname);
