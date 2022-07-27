import summary from "../../scripts/summary.mjs";
import { join } from "node:path";

const outputBun = JSON.parse(await Bun.file(join(__dirname, "outputs", "bun.json")).text()).benchmarks;
const outputNode = JSON.parse(await Bun.file(join(__dirname, "outputs", "node.json")).text()).benchmarks;
const outputDeno = JSON.parse(await Bun.file(join(__dirname, "outputs", "deno.json")).text()).benchmarks;

await summary(
    [
        "JSON.parse('{\"hello\": \"world\"}')",
        "JSON.stringify({hello: \"world\"})"
    ], [].concat(outputBun, outputNode, outputDeno)
);