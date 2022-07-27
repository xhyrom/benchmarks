import { Buffer } from "https://deno.land/std@0.149.0/node/buffer.ts";
import { bench, group, run } from "../../node_modules/mitata/src/cli.mjs";
import { save } from "../../scripts/summary.mjs";

const __dirname = new URL('.', import.meta.url).pathname;

group("encode", () => {
    bench("Buffer.from('hello').toString('ascii')", () => Buffer.from("hello").toString("ascii"));
    bench("Buffer.from('hello').toString('utf8')", () => Buffer.from("hello").toString("utf8"));
    bench("Buffer.from('hello').toString('utf16le')", () => Buffer.from("hello").toString("utf16le"));
    bench("Buffer.from('hello').toString('ucs2')", () => Buffer.from("hello").toString("ucs2"));
    bench("Buffer.from('hello').toString('base64')", () => Buffer.from("hello").toString("base64"));
    bench("Buffer.from('hello').toString('base64url')", () => Buffer.from("hello").toString("base64url"));
    bench("Buffer.from('hello').toString('latin1')", () => Buffer.from("hello").toString("latin1"));
    bench("Buffer.from('hello').toString('binary')", () => Buffer.from("hello").toString("binary"));
    bench("Buffer.from('hello').toString('hex')", () => Buffer.from("hello").toString("hex"));
});

await save(await run(), "deno", __dirname, {
    encode: (name) => name.match(/\.toString\('[aA-zZ0-9]+'\)/)[0],
    decode: (name) => name.match(/\.from\('[aA-zZ0-9]+'\, '[aA-zZ0-9]+'\)/)[0]
});
