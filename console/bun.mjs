import { bench, run } from "mitata";
import { save } from "../scripts/summary.mjs";

bench("console.log('hello')", () => console.log("hello"));
bench("console.log({ hello: 'object' })", () => console.log({ hello: "object" }));
bench("console.info('hello')", () => console.info("hello"));
bench("console.warn('hello')", () => console.warn("hello"));
bench("console.debug('hello')", () => console.debug("hello"));

await save(await run(), "bun", __dirname);