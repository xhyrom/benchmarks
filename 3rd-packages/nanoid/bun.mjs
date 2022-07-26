import { bench, run } from "mitata";
import { nanoid } from "nanoid";
import { save } from "../../summary.mjs";

bench("generate id", () => nanoid(36));

save(await run(), "bun", __dirname);