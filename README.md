*Runned on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.15 µs/iter  | 2.01 µs | 2.97 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 1.99 µs | 3.18 µs   |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.82 µs/iter  | 4.1 µs  | 1.18 ms   |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 6.82 µs/iter  | 2.5 µs  | 125.77 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.16 µs/iter | 6.8 µs  | 186.9 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.79 µs/iter | 12.2 µs | 440.11 µs |

## Nanoid
| Runtime                                | Benchmark  | Average        | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 584.72 ns/iter | 470.74 ns | 1.96 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.39 µs/iter   | 1.28 µs   | 1.48 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.79 µs/iter   | 1.75 µs   | 2.07 µs |

## Json
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 160.25 ns/iter | 154.11 ns | 342.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.25 ns/iter | 234.72 ns | 276.64 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 251.93 ns/iter | 244.06 ns | 279.17 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 329.59 ns/iter | 318.15 ns | 981.64 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 346.99 ns/iter | 339.47 ns | 406.01 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 382.41 ns/iter | 357.03 ns | 428.19 ns |

