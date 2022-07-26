## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime | Benchmark                        | Average        | Min       | Max      |
| ------- | -------------------------------- | -------------- | --------- | -------- |
| bun     | console.log('hello')             | 948.36 ns/iter | 846.15 ns | 1.37 µs  |
| bun     | console.log({ hello: 'object' }) | 1.65 µs/iter   | 1.42 µs   | 1.99 µs  |
| node    | console.log('hello')             | 6.49 µs/iter   | 1.8 µs    | 1.06 ms  |
| node    | console.log({ hello: 'object' }) | 18.74 µs/iter  | 3.4 µs    | 1.16 ms  |
| deno    | console.log('hello')             | 23.55 µs/iter  | 5 µs      | 709.3 µs |
| deno    | console.log({ hello: 'object' }) | 35.63 µs/iter  | 9.7 µs    | 1.88 ms  |

## Nanoid
| Runtime | Benchmark   | Average        | Min       | Max     |
| ------- | ----------- | -------------- | --------- | ------- |
| node    | generate id | 486.91 ns/iter | 380.25 ns | 1.59 µs |
| deno    | generate id | 1.13 µs/iter   | 989.01 ns | 1.56 µs |
| bun     | generate id | 1.51 µs/iter   | 1.4 µs    | 2.01 µs |

## Json
| Runtime | Benchmark | Average        | Min       | Max       |
| ------- | --------- | -------------- | --------- | --------- |
| bun     | parse     | 143.84 ns/iter | 117.69 ns | 569.9 ns  |
| deno    | stringify | 194.07 ns/iter | 177.28 ns | 345.23 ns |
| node    | stringify | 206.01 ns/iter | 181.92 ns | 404.48 ns |
| deno    | parse     | 253.04 ns/iter | 236.53 ns | 403.98 ns |
| node    | parse     | 287.23 ns/iter | 234.94 ns | 480.89 ns |
| bun     | stringify | 358.96 ns/iter | 278.8 ns  | 656.95 ns |

