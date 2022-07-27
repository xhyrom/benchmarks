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

group("decode", () => {
    bench("Buffer.from('hello', 'ascii').toString()", () => Buffer.from("hello", "ascii").toString());
    bench("Buffer.from('hello', 'utf8').toString()", () => Buffer.from("hello", "utf-8").toString());
    bench("Buffer.from('敨汬', 'utf16le').toString()", () => Buffer.from("敨汬", "utf16le").toString());
    bench("Buffer.from('敨汬', 'ucs2').toString()", () => Buffer.from("敨汬", "ucs2").toString());
    bench("Buffer.from('aGVsbG8=', 'base64').toString()", () => Buffer.from("aGVsbG8=", "base64").toString());
    bench("Buffer.from('aGVsbG8', 'base64url').toString()", () => Buffer.from("aGVsbG8", "base64url").toString());
    bench("Buffer.from('hello', 'latin1').toString()", () => Buffer.from("hello", "latin1").toString());
    bench("Buffer.from('hello', 'binary').toString()", () => Buffer.from("hello", "binary").toString());
    bench("Buffer.from('68656c6c6f', 'hex').toString()", () => Buffer.from("68656c6c6f", "hex").toString());
});

await save(await run(), "bun", __dirname, {
    encode: (name) => name.match(/\.toString\('[aA-zZ0-9]+'\)/)?.[0] || name,
    decode: (name) => name.match(/\.from\('(.*?)+'\, '[aA-zZ0-9]+'\)/)?.[0] || name,
});
