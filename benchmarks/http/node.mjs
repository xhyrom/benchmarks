import { save } from "../../scripts/summary.mjs";
import { run } from "./customlib.mjs";
import { spawn } from "node:child_process";

const __dirname = new URL('.', import.meta.url).pathname;

const server = spawn("node", ["servers/node.mjs"]);

await save(await run(), "node", __dirname);

server.kill();