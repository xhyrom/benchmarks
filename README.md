*Runned on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime                                | Benchmark                        | Average       | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.35 µs/iter  | 1.5 µs  | 271.1 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.42 µs/iter  | 2.1 µs  | 3.71 µs   |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 4.35 µs/iter  | 2.5 µs  | 9.43 ms   |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 6.58 µs/iter  | 4 µs    | 2.7 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.65 µs/iter | 6.6 µs  | 384.8 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.52 µs/iter | 11.8 µs | 416.42 µs |

## Nanoid
| Runtime                                | Benchmark   | Average        | Min       | Max       |
| -------------------------------------- | ----------- | -------------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | generate id | 570.23 ns/iter | 476.58 ns | 757.75 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | generate id | 1.39 µs/iter   | 1.25 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | generate id | 1.8 µs/iter    | 1.75 µs   | 2.03 µs   |

## Json
| Runtime                                | Benchmark | Average        | Min       | Max       |
| -------------------------------------- | --------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | parse     | 172.92 ns/iter | 165.37 ns | 435.64 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | stringify | 238.56 ns/iter | 234.06 ns | 270.13 ns |
| node v16.16.0 (x64-linux)              | stringify | 252.42 ns/iter | 241.23 ns | 969.09 ns |
| node v16.16.0 (x64-linux)              | parse     | 315.08 ns/iter | 306.12 ns | 512.9 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | parse     | 319.87 ns/iter | 313.7 ns  | 379.87 ns |
| bun 0.1.5 (x64-linux)                  | stringify | 383.21 ns/iter | 355.23 ns | 467.4 ns  |

