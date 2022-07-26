*Runned on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.21 µs/iter  | 2.01 µs | 2.92 µs  |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.33 µs/iter  | 2.04 µs | 6.99 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 4.24 µs/iter  | 2.6 µs  | 6.25 ms  |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.47 µs/iter  | 4.3 µs  | 2.9 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.64 µs/iter | 6.5 µs  | 368.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.15 µs/iter | 11.5 µs | 383.5 µs |

## Nanoid
| Runtime                                | Benchmark   | Average       | Min       | Max       |
| -------------------------------------- | ----------- | ------------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | generate id | 468.9 ns/iter | 410.65 ns | 596.95 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | generate id | 1.41 µs/iter  | 1.33 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | generate id | 1.93 µs/iter  | 1.85 µs   | 2.13 µs   |

## Json
| Runtime                                | Benchmark | Average        | Min       | Max       |
| -------------------------------------- | --------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | parse     | 158.68 ns/iter | 152.9 ns  | 300.78 ns |
| node v16.16.0 (x64-linux)              | stringify | 240.98 ns/iter | 230.82 ns | 958.94 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | stringify | 242.88 ns/iter | 235.92 ns | 303.12 ns |
| node v16.16.0 (x64-linux)              | parse     | 323.08 ns/iter | 313.82 ns | 367.97 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | parse     | 327.28 ns/iter | 320.68 ns | 379.05 ns |
| bun 0.1.5 (x64-linux)                  | stringify | 371.64 ns/iter | 352.72 ns | 461.11 ns |

