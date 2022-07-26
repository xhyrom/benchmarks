## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime | Benchmark                        | Average       | Min     | Max      |
| ------- | -------------------------------- | ------------- | ------- | -------- |
| bun     | console.log({ hello: 'object' }) | 2.03 µs/iter  | 1.74 µs | 2.42 µs  |
| bun     | console.log('hello')             | 2.45 µs/iter  | 1.83 µs | 6.88 µs  |
| node    | console.log('hello')             | 3.97 µs/iter  | 2.3 µs  | 9.09 ms  |
| node    | console.log({ hello: 'object' }) | 5.99 µs/iter  | 3.6 µs  | 1.11 ms  |
| deno    | console.log('hello')             | 10.68 µs/iter | 6.1 µs  | 450.9 µs |
| deno    | console.log({ hello: 'object' }) | 17.48 µs/iter | 11.1 µs | 450.8 µs |

## Nanoid
| Runtime | Benchmark   | Average        | Min       | Max      |
| ------- | ----------- | -------------- | --------- | -------- |
| node    | generate id | 505.87 ns/iter | 421.22 ns | 627.9 ns |
| deno    | generate id | 1.51 µs/iter   | 1.37 µs   | 1.6 µs   |
| bun     | generate id | 1.62 µs/iter   | 1.58 µs   | 1.88 µs  |

## Json
| Runtime | Benchmark | Average        | Min       | Max       |
| ------- | --------- | -------------- | --------- | --------- |
| bun     | parse     | 158.45 ns/iter | 152.26 ns | 287.02 ns |
| deno    | stringify | 242.61 ns/iter | 236.12 ns | 269.21 ns |
| node    | stringify | 253.97 ns/iter | 243.03 ns | 276.34 ns |
| node    | parse     | 317.27 ns/iter | 306.99 ns | 356.33 ns |
| deno    | parse     | 330.12 ns/iter | 322.22 ns | 397.16 ns |
| bun     | stringify | 388.84 ns/iter | 357.55 ns | 545.63 ns |

