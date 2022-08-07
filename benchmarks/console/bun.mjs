import { bench, run } from "mitata";
import { save } from "../../scripts/summary.mjs";

bench("console.log('hello')", () => console.log("hello"));
bench("console.log({ hello: 'object' })", () => console.log({ hello: "object" }));

await save(await run(), "bun", __dirname);
