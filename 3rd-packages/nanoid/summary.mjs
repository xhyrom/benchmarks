import summary from "../../scripts/summary.mjs";
import { join } from "node:path";

const outputBun = JSON.parse(await Bun.file(join(__dirname, "outputs", "bun.json")).text()).benchmarks.map(b => {
    return { ...b, name: `[bun] ${b.name}`, id: b.name };
});
const outputNode = JSON.parse(await Bun.file(join(__dirname, "outputs", "node.json")).text()).benchmarks.map(b => {
    return { ...b, name: `[node] ${b.name}`, id: b.name };
});
const outputDeno = JSON.parse(await Bun.file(join(__dirname, "outputs", "deno.json")).text()).benchmarks.map(b => {
    return { ...b, name: `[deno] ${b.name}`, id: b.name };
});

await summary(
    [
        "nanoid(36)",
    ], [].concat(outputBun, outputNode, outputDeno)
);
