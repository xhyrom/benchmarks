## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime | Benchmark                        | Average        | Min       | Max      |
| ------- | -------------------------------- | -------------- | --------- | -------- |
| bun     | console.log('hello')             | 922.66 ns/iter | 821.85 ns | 1.35 µs  |
| bun     | console.log({ hello: 'object' }) | 1.54 µs/iter   | 1.36 µs   | 3.74 µs  |
| node    | console.log('hello')             | 7.5 µs/iter    | 1.7 µs    | 1.21 ms  |
| node    | console.log({ hello: 'object' }) | 17.67 µs/iter  | 3.3 µs    | 1.4 ms   |
| deno    | console.log('hello')             | 22.63 µs/iter  | 4.9 µs    | 638.7 µs |
| deno    | console.log({ hello: 'object' }) | 35.38 µs/iter  | 10.1 µs   | 1.83 ms  |

## Nanoid
| Runtime | Benchmark   | Average        | Min       | Max       |
| ------- | ----------- | -------------- | --------- | --------- |
| node    | generate id | 477.49 ns/iter | 387.05 ns | 668.21 ns |
| deno    | generate id | 1.15 µs/iter   | 983.23 ns | 1.52 µs   |
| bun     | generate id | 1.48 µs/iter   | 1.38 µs   | 2.39 µs   |

## Json
| Runtime | Benchmark | Average        | Min       | Max       |
| ------- | --------- | -------------- | --------- | --------- |
| bun     | parse     | 138.17 ns/iter | 116.99 ns | 652.15 ns |
| deno    | stringify | 191.12 ns/iter | 176.19 ns | 358.35 ns |
| node    | stringify | 201.36 ns/iter | 181.46 ns | 749.71 ns |
| node    | parse     | 244.66 ns/iter | 229.14 ns | 341.89 ns |
| deno    | parse     | 250.98 ns/iter | 236.98 ns | 431.23 ns |
| bun     | stringify | 307.99 ns/iter | 268.78 ns | 614.15 ns |

