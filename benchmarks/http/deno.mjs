import { save } from "../../scripts/summary.mjs";
import { run } from "./customlib.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

const server = Deno.run({
    cmd: ["deno", "run", "--allow-net", "servers/deno.mjs"]
});

await save(await run(), "deno", __dirname);

server.close();