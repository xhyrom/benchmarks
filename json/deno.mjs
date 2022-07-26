import { bench, run } from "../node_modules/mitata/src/cli.mjs";
import { save } from "../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("parse", () => JSON.parse("{\"hello\": \"world\"}"));
bench("stringify", () => JSON.stringify({ hello: "world" }));

await save(await run(), "deno", __dirname);