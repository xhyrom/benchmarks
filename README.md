Runned on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console
| Runtime | Benchmark                        | Average       | Min     | Max       |
| ------- | -------------------------------- | ------------- | ------- | --------- |
|         | console.log('hello')             | 2.26 µs/iter  | 1.85 µs | 5.1 µs    |
|         | console.log({ hello: 'object' }) | 2.3 µs/iter   | 2.1 µs  | 2.43 µs   |
|         | console.log('hello')             | 4.64 µs/iter  | 2.6 µs  | 8.29 ms   |
|         | console.log({ hello: 'object' }) | 6.93 µs/iter  | 4.2 µs  | 1.22 ms   |
|         | console.log('hello')             | 12.2 µs/iter  | 6.8 µs  | 732.33 µs |
|         | console.log({ hello: 'object' }) | 19.04 µs/iter | 12.2 µs | 1.49 ms   |

## Nanoid
| Runtime | Benchmark   | Average        | Min       | Max     |
| ------- | ----------- | -------------- | --------- | ------- |
|         | generate id | 581.56 ns/iter | 476.48 ns | 1.35 µs |
|         | generate id | 1.38 µs/iter   | 1.24 µs   | 1.47 µs |
|         | generate id | 1.79 µs/iter   | 1.74 µs   | 2.03 µs |

## Json
| Runtime | Benchmark | Average        | Min       | Max       |
| ------- | --------- | -------------- | --------- | --------- |
|         | parse     | 158.49 ns/iter | 152.71 ns | 333.84 ns |
|         | stringify | 238.4 ns/iter  | 234.29 ns | 264.25 ns |
|         | stringify | 249.81 ns/iter | 242.5 ns  | 275.76 ns |
|         | parse     | 317.93 ns/iter | 307.16 ns | 978.29 ns |
|         | parse     | 322.46 ns/iter | 316.51 ns | 377.65 ns |
|         | stringify | 379.97 ns/iter | 355.63 ns | 446.48 ns |

