*Runned on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.22 µs/iter  | 2 µs    | 2.38 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.25 µs/iter  | 1.5 µs  | 3.75 ms   |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 4.41 µs/iter  | 2.5 µs  | 11.97 ms  |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.56 µs/iter  | 4 µs    | 2.28 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.76 µs/iter | 6.6 µs  | 370.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.16 µs/iter | 11.7 µs | 386.21 µs |

## Nanoid
| Runtime                                | Benchmark   | Average        | Min      | Max      |
| -------------------------------------- | ----------- | -------------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | generate id | 565.97 ns/iter | 474.1 ns | 716.6 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | generate id | 1.41 µs/iter   | 1.35 µs  | 1.47 µs  |
| bun 0.1.5 (x64-linux)                  | generate id | 1.84 µs/iter   | 1.79 µs  | 2.06 µs  |

## Json
| Runtime                                | Benchmark | Average        | Min       | Max       |
| -------------------------------------- | --------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | parse     | 157.78 ns/iter | 151.78 ns | 382.09 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | stringify | 239.55 ns/iter | 234.75 ns | 262.05 ns |
| node v16.16.0 (x64-linux)              | stringify | 253.62 ns/iter | 242.47 ns | 968.46 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | parse     | 323.56 ns/iter | 316.9 ns  | 387.75 ns |
| node v16.16.0 (x64-linux)              | parse     | 324.32 ns/iter | 313.73 ns | 973.88 ns |
| bun 0.1.5 (x64-linux)                  | stringify | 385.11 ns/iter | 359.14 ns | 476.59 ns |

