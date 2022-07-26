import { bench, run } from "../node_modules/mitata/src/cli.mjs";
import { save } from "../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("console.log('hello')", () => console.log("hello"));
bench("console.log({ hello: 'object' })", () => console.log({ hello: "object" }));

await save(await run(), "deno", __dirname);