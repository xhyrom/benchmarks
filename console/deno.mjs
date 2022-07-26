import { bench, run } from "../node_modules/mitata/src/cli.mjs";
import { save } from "../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("console.log('hello')", () => console.log("hello"));
bench("console.log({ hello: 'object' })", () => console.log({ hello: "object" }));
bench("console.info('hello')", () => console.info("hello"));
bench("console.warn('hello')", () => console.warn("hello"));
bench("console.debug('hello')", () => console.debug("hello"));

await save(await run(), "deno", __dirname);