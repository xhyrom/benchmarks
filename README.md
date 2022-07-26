*Runned on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.21 µs/iter  | 2.05 µs | 2.37 µs |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 2.02 µs | 2.53 µs |
| node v18.6.0 (x64-linux)               | console.log('hello')             | 3.74 µs/iter  | 2.99 µs | 5.17 µs |
| node v18.6.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.5 µs/iter   | 4.1 µs  | 1.74 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.99 µs/iter | 6.7 µs  | 379 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.49 µs/iter | 11.6 µs | 1.5 ms  |

## Nanoid
| Runtime                                | Benchmark  | Average        | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- |
| node v18.6.0 (x64-linux)               | nanoid(36) | 500.41 ns/iter | 440.49 ns | 622.11 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.43 µs/iter   | 1.35 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.88 µs/iter   | 1.84 µs   | 2.08 µs   |

## Json
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.65 ns/iter | 152.87 ns | 277.71 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.09 ns/iter | 234.46 ns | 269.57 ns |
| node v18.6.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 257.05 ns/iter | 227.14 ns | 1.01 µs   |
| node v18.6.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 304.4 ns/iter  | 296.31 ns | 332.85 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 328.33 ns/iter | 320.97 ns | 424.63 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374.3 ns/iter  | 353.62 ns | 464.81 ns |

