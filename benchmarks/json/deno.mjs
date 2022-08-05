import { bench, run } from "../../node_modules/mitata/src/cli.mjs";
import { save } from "../../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("JSON.parse('{\"hello\": \"world\"}')", () => JSON.parse("{\"hello\": \"world\"}"));
bench("JSON.stringify({hello: \"world\"})", () => JSON.stringify({ hello: "world" }));

await save(await run(), "deno", __dirname);
