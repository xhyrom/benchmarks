import { bench, run } from "mitata";
import { save } from "../../scripts/summary.mjs";

bench("JSON.parse('{\"hello\": \"world\"}')", () => JSON.parse("{\"hello\": \"world\"}"));
bench("JSON.stringify({hello: \"world\"})", () => JSON.stringify({ hello: "world" }));

await save(await run(), "bun", __dirname);