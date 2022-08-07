import { bench, run } from "mitata";
import { nanoid } from "nanoid";
import { save } from "../../../scripts/summary.mjs";

bench("nanoid(36)", () => nanoid(36));

await save(await run(), "bun", __dirname);
