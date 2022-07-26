## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime | Benchmark                        | Average       | Min     | Max      |
| ------- | -------------------------------- | ------------- | ------- | -------- |
| bun     | console.log({ hello: 'object' }) | 2.28 µs/iter  | 2.04 µs | 2.53 µs  |
| bun     | console.log('hello')             | 2.6 µs/iter   | 1.7 µs  | 439.7 µs |
| node    | console.log('hello')             | 4.5 µs/iter   | 2.5 µs  | 10.28 ms |
| node    | console.log({ hello: 'object' }) | 6.77 µs/iter  | 4.3 µs  | 1.09 ms  |
| deno    | console.log('hello')             | 11.69 µs/iter | 7 µs    | 474.1 µs |
| deno    | console.log({ hello: 'object' }) | 18.15 µs/iter | 11.8 µs | 454.6 µs |

## Nanoid
| Runtime | Benchmark   | Average        | Min       | Max     |
| ------- | ----------- | -------------- | --------- | ------- |
| node    | generate id | 506.85 ns/iter | 410.85 ns | 1.92 µs |
| deno    | generate id | 1.56 µs/iter   | 1.38 µs   | 1.69 µs |
| bun     | generate id | 1.93 µs/iter   | 1.88 µs   | 2.15 µs |

## Json
| Runtime | Benchmark | Average        | Min       | Max       |
| ------- | --------- | -------------- | --------- | --------- |
| bun     | parse     | 161.4 ns/iter  | 155.02 ns | 278.61 ns |
| deno    | stringify | 239.57 ns/iter | 232.01 ns | 272.76 ns |
| node    | stringify | 242.54 ns/iter | 232.63 ns | 266.45 ns |
| node    | parse     | 318.59 ns/iter | 308.92 ns | 356.77 ns |
| deno    | parse     | 324.58 ns/iter | 317.64 ns | 393.5 ns  |
| bun     | stringify | 380.27 ns/iter | 356.34 ns | 471.83 ns |

