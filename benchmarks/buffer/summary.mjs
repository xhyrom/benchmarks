import summary from "../../scripts/summary.mjs";
import { join } from "node:path";

const outputBun = JSON.parse(await Bun.file(join(__dirname, "outputs", "bun.json")).text()).benchmarks;
const outputNode = JSON.parse(await Bun.file(join(__dirname, "outputs", "node.json")).text()).benchmarks;
const outputDeno = JSON.parse(await Bun.file(join(__dirname, "outputs", "deno.json")).text()).benchmarks;

await summary(
    [
        "Buffer.from('hello').toString('ascii')",
        "Buffer.from('hello').toString('utf8')",
        "Buffer.from('hello').toString('utf16le')",
        "Buffer.from('hello').toString('ucs2')",
        "Buffer.from('hello').toString('base64')",
        "Buffer.from('hello').toString('base64url')",
        "Buffer.from('hello').toString('latin1')",
        "Buffer.from('hello').toString('binary')",
        "Buffer.from('hello').toString('hex')",
    ], [].concat(outputBun, outputNode, outputDeno)
);
