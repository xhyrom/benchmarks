import summary from "../../scripts/summary.mjs";
import { join } from "node:path";

const outputBun = JSON.parse(await Bun.file(join(__dirname, "outputs", "bun.json")).text()).benchmarks;
const outputNode = JSON.parse(await Bun.file(join(__dirname, "outputs", "node.json")).text()).benchmarks;
const outputDeno = JSON.parse(await Bun.file(join(__dirname, "outputs", "deno.json")).text()).benchmarks;

await summary(
    [
        // encode short
        "Buffer.from('hello').toString('ascii')",
        "Buffer.from('hello').toString('utf8')",
        "Buffer.from('hello').toString('utf16le')",
        "Buffer.from('hello').toString('ucs2')",
        "Buffer.from('hello').toString('base64')",
        "Buffer.from('hello').toString('base64url')",
        "Buffer.from('hello').toString('latin1')",
        "Buffer.from('hello').toString('binary')",
        "Buffer.from('hello').toString('hex')",
        // encode long
        "Buffer.from(longText).toString('ascii')",
        "Buffer.from(longText).toString('utf8')",
        "Buffer.from(longText).toString('utf16le')",
        "Buffer.from(longText).toString('ucs2')",
        "Buffer.from(longText).toString('base64')",
        "Buffer.from(longText).toString('base64url')",
        "Buffer.from(longText).toString('latin1')",
        "Buffer.from(longText).toString('binary')",
        "Buffer.from(longText).toString('hex')",
        // decode short
        "Buffer.from('hello', 'ascii').toString()",
        "Buffer.from('hello', 'utf8').toString()",
        "Buffer.from('敨汬', 'utf16le').toString()",
        "Buffer.from('敨汬', 'ucs2').toString()",
        "Buffer.from('aGVsbG8=', 'base64').toString()",
        "Buffer.from('aGVsbG8', 'base64url').toString()",
        "Buffer.from('hello', 'latin1').toString()",
        "Buffer.from('hello', 'binary').toString()",
        "Buffer.from('68656c6c6f', 'hex').toString()",
        // decode long
        "Buffer.from(longText, 'ascii').toString()",
        "Buffer.from(longText, 'utf8').toString()",
        "Buffer.from(longTextBuffer4, 'utf16le').toString()",
        "Buffer.from(longTextBuffer3, 'ucs2').toString()",
        "Buffer.from(longTextBuffer0, 'base64').toString()",
        "Buffer.from(longTextBuffer1, 'base64url').toString()",
        "Buffer.from(longText, 'latin1').toString()",
        "Buffer.from(longText, 'binary').toString()",
        "Buffer.from(longTextBuffer2, 'hex').toString()",
    ], [].concat(outputBun, outputNode, outputDeno)
);
