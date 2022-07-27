import { bench, run } from "mitata";
import { nanoid } from "nanoid";
import { save } from "../../../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

bench("nanoid(36)", () => nanoid(36));

await save(await run(), "node", __dirname);