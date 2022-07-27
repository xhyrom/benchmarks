*Runned on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.23 µs/iter  | 1.86 µs | 2.81 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.31 µs/iter  | 1.84 µs | 8.48 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.77 µs/iter  | 2.7 µs  | 8.18 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.38 µs/iter  | 4.6 µs  | 1.39 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.01 µs/iter | 6.8 µs  | 413.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.81 µs/iter | 12.2 µs | 467.41 µs |

## Nanoid
| Runtime                                | Benchmark  | Average        | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 646.55 ns/iter | 532.98 ns | 1.94 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.43 µs/iter   | 1.37 µs   | 1.5 µs  |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.85 µs/iter   | 1.8 µs    | 2.07 µs |

## Json
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.46 ns/iter | 153.05 ns | 363.09 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.59 ns/iter | 235.13 ns | 273.93 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.17 ns/iter | 239.17 ns | 267.47 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 310.12 ns/iter | 303.32 ns | 346.21 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 327.77 ns/iter | 320.53 ns | 388.66 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 382.96 ns/iter | 355.86 ns | 497.66 ns |

