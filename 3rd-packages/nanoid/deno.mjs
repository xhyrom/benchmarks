import { bench, run } from "../../node_modules/mitata/src/cli.mjs";
import { nanoid } from "https://deno.land/x/nanoid/mod.ts"
import { save } from "../../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("generate id", () => nanoid(36));

await save(await run(), "deno", __dirname);