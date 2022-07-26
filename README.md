*Runned on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.22 µs/iter  | 2.11 µs | 2.52 µs |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.34 µs/iter  | 2.03 µs | 5.25 µs |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 4.29 µs/iter  | 2.6 µs  | 5.71 ms |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.52 µs/iter  | 4.3 µs  | 3.66 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.96 µs/iter | 6.8 µs  | 1.48 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.45 µs/iter | 11.5 µs | 1.43 ms |

## Nanoid
| Runtime                                | Benchmark   | Average        | Min       | Max       |
| -------------------------------------- | ----------- | -------------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | generate id | 472.48 ns/iter | 409.99 ns | 771.32 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | generate id | 1.42 µs/iter   | 1.34 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | generate id | 1.83 µs/iter   | 1.8 µs    | 2 µs      |

## Json
| Runtime                                | Benchmark | Average        | Min       | Max       |
| -------------------------------------- | --------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | parse     | 165.39 ns/iter | 153.74 ns | 1.13 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | stringify | 236.52 ns/iter | 231.94 ns | 262.05 ns |
| node v16.16.0 (x64-linux)              | stringify | 238.31 ns/iter | 231.79 ns | 256.25 ns |
| node v16.16.0 (x64-linux)              | parse     | 315.15 ns/iter | 307.83 ns | 345.44 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | parse     | 323.28 ns/iter | 317.43 ns | 376.25 ns |
| bun 0.1.5 (x64-linux)                  | stringify | 376.6 ns/iter  | 352.64 ns | 670.44 ns |

