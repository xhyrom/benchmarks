import { bench, run } from "mitata";
import { save } from "../../scripts/summary.mjs";
import { Database } from "bun:sqlite";

const db = Database.open("../../utils/northwind-SQLite3/dist/northwind.db");

{
    const sql = db.prepare('SELECT * FROM "Orders"');
    bench('SELECT * FROM "Orders"', () => {
        sql.all();
    })
}

{
    const sql = db.prepare('SELECT * FROM "Products"');
    bench('SELECT * FROM "Products"', () => {
        sql.all();
    })
}

{
    const sql = db.prepare('SELECT * FROM "Suppliers"');
    bench('SELECT * FROM "Suppliers"', () => {
        sql.all();
    })
}

{
    const sql = db.prepare('SELECT * FROM "Employees"');
    bench('SELECT * FROM "Employees"', () => {
        sql.all();
    })
}

{
    const sql = db.prepare('SELECT * FROM "Customers"');
    bench('SELECT * FROM "Customers"', () => {
        sql.all();
    })
}

await save(await run(), "bun", __dirname);
