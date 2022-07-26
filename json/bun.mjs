import { bench, run } from "mitata";
import { save } from "../scripts/summary.mjs";

bench("parse", () => JSON.parse("{\"hello\": \"world\"}"));
bench("stringify", () => JSON.stringify({ hello: "world" }));

await save(await run(), "bun", __dirname);