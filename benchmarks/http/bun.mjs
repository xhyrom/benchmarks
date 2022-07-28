import { save } from "../../scripts/summary.mjs";
import { run } from "./customlib.mjs";
import { exec, execAndDontWait } from "bun-utilities";

execAndDontWait(["bun", "servers/bun.mjs"]);
const rawPid = await exec(["bash", "-c", "ps | grep bun"]);
const splittedPid = rawPid.stdout.split('\n');
const pid = splittedPid[splittedPid.length - 2].split(' ')[0];

await save(await run(), "bun", __dirname);
console.log(pid, splittedPid);
exec(["sudo", "kill", pid]);
