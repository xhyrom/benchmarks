import { bench, run } from "mitata";
import { save } from "../summary.mjs";

bench("console.log('hello')", () => console.log("hello"));
bench("console.log({ hello: 'object' })", () => console.log({ hello: "object" }));

save(await run(), "bun", __dirname);