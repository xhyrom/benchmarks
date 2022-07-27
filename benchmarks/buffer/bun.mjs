import { bench, group, run } from "mitata";
import { save } from "../../scripts/summary.mjs";

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

await save(await run(), "bun", __dirname, ".toString");
