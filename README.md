*Runned on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.21 µs/iter  | 1.82 µs | 3.36 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.25 µs/iter  | 2.05 µs | 2.74 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 4.02 µs/iter  | 3.58 µs | 6.69 µs  |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.52 µs/iter  | 4.2 µs  | 1.3 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.57 µs/iter | 6.8 µs  | 378.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.16 µs/iter | 11.5 µs | 302.3 µs |

## Nanoid
| Runtime                                | Benchmark   | Average       | Min       | Max       |
| -------------------------------------- | ----------- | ------------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | generate id | 468.7 ns/iter | 408.46 ns | 634.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | generate id | 1.4 µs/iter   | 1.27 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | generate id | 1.9 µs/iter   | 1.87 µs   | 2.07 µs   |

## Json
| Runtime                                | Benchmark | Average        | Min       | Max       |
| -------------------------------------- | --------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | parse     | 160.44 ns/iter | 154.9 ns  | 300.55 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | stringify | 238.61 ns/iter | 233.37 ns | 296.94 ns |
| node v16.16.0 (x64-linux)              | stringify | 238.94 ns/iter | 231.1 ns  | 328.37 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | parse     | 325.96 ns/iter | 318.15 ns | 530.91 ns |
| node v16.16.0 (x64-linux)              | parse     | 328.46 ns/iter | 320.62 ns | 354.58 ns |
| bun 0.1.5 (x64-linux)                  | stringify | 374.43 ns/iter | 355.15 ns | 416.02 ns |

