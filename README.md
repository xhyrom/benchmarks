*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [http](#http)
   - [json](#json)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 406.23 ns/iter (406.225) | 387.9 ns  | 411.01 ns | 429 ns  | 430.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 869.99 ns/iter (869.994) | 726.56 ns | 811.4 ns  | 1.52 µs | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.23 µs/iter (1,231.434) | 1.1 µs    | 1.26 µs   | 1.8 µs  | 1.8 µs    |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 417.66 ns/iter (417.663) | 382.26 ns | 423.37 ns | 471.28 ns | 479.62 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 845.99 ns/iter (845.993) | 722.04 ns | 781.32 ns | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.29 µs/iter (1,286.525) | 1.17 µs   | 1.3 µs    | 1.76 µs   | 1.76 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 401.71 ns/iter (401.711) | 374.7 ns  | 408 ns    | 423.74 ns | 435.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 939.78 ns/iter (939.784) | 802.33 ns | 870.71 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.21 µs/iter (1,214.076) | 1.15 µs   | 1.24 µs   | 1.49 µs   | 1.49 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 402.09 ns/iter (402.087) | 372.06 ns | 409.32 ns | 421.61 ns | 423.05 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 860.89 ns/iter (860.887) | 763.79 ns | 789.35 ns | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.19 µs/iter (1,190.019) | 1.12 µs   | 1.22 µs   | 1.39 µs   | 1.39 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 425.25 ns/iter (425.252) | 396.46 ns | 432.85 ns | 454.19 ns | 466.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 890.17 ns/iter (890.174) | 768.12 ns | 825.96 ns | 1.53 µs   | 1.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.26 µs/iter (1,263.267) | 1.2 µs    | 1.28 µs   | 1.36 µs   | 1.36 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 417.87 ns/iter (417.875) | 389.23 ns | 425.59 ns | 438.96 ns | 439.93 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 935.45 ns/iter (935.447) | 788 ns    | 887.23 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.51 µs/iter (1,509.78)  | 1.45 µs   | 1.52 µs   | 1.75 µs   | 1.75 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 404.79 ns/iter (404.79)  | 377.5 ns  | 410.38 ns | 467.67 ns | 500.75 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 909.72 ns/iter (909.718) | 777.05 ns | 849.98 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.22 µs/iter (1,219.509) | 1.15 µs   | 1.24 µs   | 1.31 µs   | 1.31 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 403.46 ns/iter (403.464) | 369.79 ns | 411.03 ns | 514.33 ns | 545.83 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 891.4 ns/iter (891.402)  | 770.7 ns  | 834.73 ns | 1.56 µs   | 1.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.23 µs/iter (1,232.209) | 1.14 µs   | 1.26 µs   | 1.29 µs   | 1.29 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 417.32 ns/iter (417.322) | 385.9 ns  | 424 ns    | 437.43 ns | 441.81 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 846.01 ns/iter (846.009) | 733.61 ns | 787.98 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.24 µs/iter (1,243.592) | 1.19 µs   | 1.26 µs   | 1.37 µs   | 1.37 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 10.44 µs/iter (10,444)   | 6.2 µs    | 10.3 µs   | 24.4 µs   | 541.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 19.67 µs/iter (19,667)   | 15.9 µs   | 17.8 µs   | 108.9 µs  | 1.18 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 731.22 µs/iter (731,217) | 600.41 µs | 809.51 µs | 986.82 µs | 1.09 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75       | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 12.58 µs/iter (12,578)   | 7 µs      | 12.4 µs | 30.6 µs  | 1.62 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 19.63 µs/iter (19,625)   | 16 µs     | 18 µs   | 109.4 µs | 1.1 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.19 ms/iter (1,187,694) | 980.21 µs | 1.12 ms | 2.37 ms  | 2.48 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 9.15 µs/iter (9,149)     | 5.7 µs    | 9.2 µs    | 21.7 µs | 797.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 16.93 µs/iter (16,925)   | 12.8 µs   | 15.8 µs   | 42.1 µs | 247.5 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 704.48 µs/iter (704,480) | 585.11 µs | 670.21 µs | 1.2 ms  | 1.69 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.19 µs/iter (9,186)     | 5.7 µs    | 9.3 µs    | 21.6 µs | 576.31 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.12 µs/iter (17,120)   | 14 µs     | 15.9 µs   | 41.5 µs | 1.43 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 719.75 µs/iter (719,745) | 608.11 µs | 679.41 µs | 1.68 ms | 2.01 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.28 µs/iter (11,284)   | 6.1 µs    | 11.4 µs   | 24.6 µs  | 1.27 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 19.44 µs/iter (19,439)   | 15.4 µs   | 17.6 µs   | 117.2 µs | 979.91 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 878.87 µs/iter (878,871) | 754.11 µs | 833.31 µs | 1.73 ms  | 1.75 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 49.44 µs/iter (49,436)   | 41.7 µs | 49.1 µs | 93.9 µs   | 586.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 55.53 µs/iter (55,528)   | 33.4 µs | 39.9 µs | 558.71 µs | 8.81 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.24 ms/iter (1,240,389) | 1.03 ms | 1.15 ms | 2.6 ms    | 2.65 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 14.32 µs/iter (14,318)   | 6.2 µs    | 11.2 µs   | 28 µs   | 13.34 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.8 µs/iter (17,802)    | 13.8 µs   | 17.5 µs   | 34.1 µs | 1.02 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 767.95 µs/iter (767,950) | 650.91 µs | 724.61 µs | 1.79 ms | 1.9 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 11.95 µs/iter (11,945)   | 6.3 µs    | 10.7 µs   | 26.3 µs | 10.55 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 18.01 µs/iter (18,013)   | 14 µs     | 17.8 µs   | 33 µs   | 286.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 763.75 µs/iter (763,746) | 650.91 µs | 721.21 µs | 1.76 ms | 1.82 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 60.52 µs/iter (60,519)   | 51.3 µs   | 59.6 µs   | 174.6 µs  | 3.18 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 254.9 µs/iter (254,901)  | 214.1 µs  | 240.5 µs  | 752.31 µs | 4.33 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 832.07 µs/iter (832,066) | 692.91 µs | 787.11 µs | 1.87 ms   | 1.93 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 348.78 ns/iter (348.78)  | 317.75 ns | 352.02 ns | 383.91 ns | 392.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 550.49 ns/iter (550.486) | 509.03 ns | 560.59 ns | 622.75 ns | 661.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 905.32 ns/iter (905.322) | 754.54 ns | 831.99 ns | 1.63 µs   | 1.63 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 435.17 ns/iter (435.17)  | 392.1 ns  | 437.48 ns | 515.99 ns | 963.76 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 884.02 ns/iter (884.022) | 753.86 ns | 808.52 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.19 µs/iter (1,188.472) | 1.01 µs   | 1.34 µs   | 1.48 µs   | 1.48 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 347.82 ns/iter (347.82)  | 319.67 ns | 353.6 ns  | 379.17 ns | 385.52 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 547.97 ns/iter (547.968) | 497.63 ns | 558 ns    | 581.23 ns | 929.5 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 904.74 ns/iter (904.738) | 776.9 ns  | 830.71 ns | 1.58 µs   | 1.58 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 384.94 ns/iter (384.936) | 359.88 ns | 393.18 ns | 412.75 ns | 418.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 535.62 ns/iter (535.624) | 503.5 ns  | 545.86 ns | 565.07 ns | 567.57 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 876.03 ns/iter (876.029) | 738.13 ns | 791.68 ns | 1.57 µs   | 1.57 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 459.94 ns/iter (459.942) | 426.26 ns | 464.42 ns | 490.19 ns | 498.97 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 901.47 ns/iter (901.471) | 766.92 ns | 823.56 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.34 µs/iter (1,337.16)  | 1.28 µs   | 1.36 µs   | 1.4 µs    | 1.4 µs    |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 454.69 ns/iter (454.693) | 422.47 ns | 462.58 ns | 488.64 ns | 497.03 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 975.88 ns/iter (975.884) | 809.32 ns | 888.86 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.5 µs/iter (1,499.115)  | 1.44 µs   | 1.52 µs   | 1.6 µs    | 1.6 µs    |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 350.46 ns/iter (350.458) | 321.14 ns | 354.56 ns | 381.25 ns | 385.11 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 552.57 ns/iter (552.571) | 510.87 ns | 562.14 ns | 607.38 ns | 617.41 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 921.56 ns/iter (921.56)  | 771.62 ns | 836.32 ns | 1.66 µs   | 1.66 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 345.47 ns/iter (345.472) | 320.83 ns | 352.63 ns | 374.51 ns | 390.17 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 569.49 ns/iter (569.491) | 543.19 ns | 578.9 ns  | 605.77 ns | 605.77 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 933.74 ns/iter (933.743) | 785.88 ns | 875.25 ns | 1.71 µs   | 1.71 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 443.77 ns/iter (443.772) | 411.74 ns | 450.26 ns | 481.28 ns | 501.79 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 881.06 ns/iter (881.056) | 731.14 ns | 815.83 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 963.62 ns/iter (963.622) | 913.59 ns | 983.61 ns | 1.01 µs   | 1.01 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 12.38 µs/iter (12,385)   | 8.1 µs  | 12.1 µs | 27.8 µs | 1.4 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 18.07 µs/iter (18,072)   | 7.6 µs  | 16.3 µs | 35.4 µs | 2.93 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.39 ms/iter (1,390,640) | 1.15 ms | 1.27 ms | 4.36 ms | 4.49 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 14.41 µs/iter (14,409)   | 7.9 µs  | 13.9 µs | 33.4 µs | 2.83 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 21.92 µs/iter (21,921)   | 16.8 µs | 21.9 µs | 37.3 µs | 312.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.23 ms/iter (1,226,394) | 1.02 ms | 1.12 ms | 3.87 ms | 3.96 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.14 µs/iter (1,137.019) | 1.02 µs | 1.17 µs | 1.28 µs | 1.28 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 25.18 µs/iter (25,184)   | 9.8 µs  | 22.9 µs | 83.6 µs | 2.22 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 40.9 µs/iter (40,897)    | 33.5 µs | 40.4 µs | 78.6 µs | 327.2 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 125.94 ns/iter (125.944) | 115.8 ns  | 126.41 ns | 142.5 ns  | 163.17 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 330.11 ns/iter (330.105) | 308.18 ns | 332.7 ns  | 368.87 ns | 458.07 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 26.76 µs/iter (26,763)   | 9.8 µs    | 23.4 µs   | 206 µs    | 4.98 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.06 µs/iter (3,061.838) | 2.94 µs | 3.09 µs | 3.27 µs | 3.27 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.29 µs/iter (15,288)   | 13 µs   | 15.3 µs | 27.2 µs | 339.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.62 µs/iter (25,624)   | 18.6 µs | 24.7 µs | 48.8 µs | 1.59 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.52 ns/iter (111.517) | 100.77 ns | 113.3 ns | 126.04 ns | 148.16 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.18 µs/iter (1,181.238) | 1.11 µs   | 1.19 µs  | 1.28 µs   | 1.28 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 114.7 µs/iter (114,704)  | 99.9 µs   | 110.8 µs | 140.1 µs  | 2.14 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 12.46 µs/iter (12,463)   | 8.4 µs  | 12.2 µs | 28 µs   | 232.4 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.9 µs/iter (17,899)    | 9.8 µs  | 16.2 µs | 36.1 µs | 1.29 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.44 ms/iter (1,437,101) | 1.19 ms | 1.31 ms | 4.45 ms | 4.61 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 14.11 µs/iter (14,106)   | 9.7 µs  | 13.3 µs | 29.6 µs | 740.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 17.84 µs/iter (17,842)   | 10.2 µs | 16.2 µs | 35.9 µs | 1.99 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.43 ms/iter (1,430,548) | 1.19 ms | 1.3 ms  | 4.4 ms  | 4.45 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 470.08 ns/iter (470.081) | 433.42 ns | 484.27 ns | 506.66 ns | 532.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.73 µs/iter (3,733.177) | 2.84 µs   | 4.22 µs   | 4.8 µs    | 4.8 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 47.85 µs/iter (47,854)   | 38.3 µs   | 44.4 µs   | 76 µs     | 2.12 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.52 ns/iter (111.517) | 100.77 ns | 113.3 ns  | 126.04 ns | 148.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 125.94 ns/iter (125.944) | 115.8 ns  | 126.41 ns | 142.5 ns  | 163.17 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 330.11 ns/iter (330.105) | 308.18 ns | 332.7 ns  | 368.87 ns | 458.07 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 345.47 ns/iter (345.472) | 320.83 ns | 352.63 ns | 374.51 ns | 390.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 347.82 ns/iter (347.82)  | 319.67 ns | 353.6 ns  | 379.17 ns | 385.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 348.78 ns/iter (348.78)  | 317.75 ns | 352.02 ns | 383.91 ns | 392.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 350.46 ns/iter (350.458) | 321.14 ns | 354.56 ns | 381.25 ns | 385.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 384.94 ns/iter (384.936) | 359.88 ns | 393.18 ns | 412.75 ns | 418.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 401.71 ns/iter (401.711) | 374.7 ns  | 408 ns    | 423.74 ns | 435.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 402.09 ns/iter (402.087) | 372.06 ns | 409.32 ns | 421.61 ns | 423.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 403.46 ns/iter (403.464) | 369.79 ns | 411.03 ns | 514.33 ns | 545.83 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 404.79 ns/iter (404.79)  | 377.5 ns  | 410.38 ns | 467.67 ns | 500.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 406.23 ns/iter (406.225) | 387.9 ns  | 411.01 ns | 429 ns    | 430.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 417.32 ns/iter (417.322) | 385.9 ns  | 424 ns    | 437.43 ns | 441.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 417.66 ns/iter (417.663) | 382.26 ns | 423.37 ns | 471.28 ns | 479.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 417.87 ns/iter (417.875) | 389.23 ns | 425.59 ns | 438.96 ns | 439.93 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 425.25 ns/iter (425.252) | 396.46 ns | 432.85 ns | 454.19 ns | 466.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 435.17 ns/iter (435.17)  | 392.1 ns  | 437.48 ns | 515.99 ns | 963.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 443.77 ns/iter (443.772) | 411.74 ns | 450.26 ns | 481.28 ns | 501.79 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 454.69 ns/iter (454.693) | 422.47 ns | 462.58 ns | 488.64 ns | 497.03 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 459.94 ns/iter (459.942) | 426.26 ns | 464.42 ns | 490.19 ns | 498.97 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 470.08 ns/iter (470.081) | 433.42 ns | 484.27 ns | 506.66 ns | 532.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 535.62 ns/iter (535.624) | 503.5 ns  | 545.86 ns | 565.07 ns | 567.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 547.97 ns/iter (547.968) | 497.63 ns | 558 ns    | 581.23 ns | 929.5 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 550.49 ns/iter (550.486) | 509.03 ns | 560.59 ns | 622.75 ns | 661.19 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 552.57 ns/iter (552.571) | 510.87 ns | 562.14 ns | 607.38 ns | 617.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 569.49 ns/iter (569.491) | 543.19 ns | 578.9 ns  | 605.77 ns | 605.77 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 845.99 ns/iter (845.993) | 722.04 ns | 781.32 ns | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 846.01 ns/iter (846.009) | 733.61 ns | 787.98 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 860.89 ns/iter (860.887) | 763.79 ns | 789.35 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 869.99 ns/iter (869.994) | 726.56 ns | 811.4 ns  | 1.52 µs   | 1.52 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 876.03 ns/iter (876.029) | 738.13 ns | 791.68 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 881.06 ns/iter (881.056) | 731.14 ns | 815.83 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 884.02 ns/iter (884.022) | 753.86 ns | 808.52 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 890.17 ns/iter (890.174) | 768.12 ns | 825.96 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 891.4 ns/iter (891.402)  | 770.7 ns  | 834.73 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 901.47 ns/iter (901.471) | 766.92 ns | 823.56 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 904.74 ns/iter (904.738) | 776.9 ns  | 830.71 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 905.32 ns/iter (905.322) | 754.54 ns | 831.99 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 909.72 ns/iter (909.718) | 777.05 ns | 849.98 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 921.56 ns/iter (921.56)  | 771.62 ns | 836.32 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 933.74 ns/iter (933.743) | 785.88 ns | 875.25 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 935.45 ns/iter (935.447) | 788 ns    | 887.23 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 939.78 ns/iter (939.784) | 802.33 ns | 870.71 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 963.62 ns/iter (963.622) | 913.59 ns | 983.61 ns | 1.01 µs   | 1.01 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 975.88 ns/iter (975.884) | 809.32 ns | 888.86 ns | 1.73 µs   | 1.73 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.14 µs/iter (1,137.019) | 1.02 µs   | 1.17 µs   | 1.28 µs   | 1.28 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.18 µs/iter (1,181.238) | 1.11 µs   | 1.19 µs   | 1.28 µs   | 1.28 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.19 µs/iter (1,188.472) | 1.01 µs   | 1.34 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.19 µs/iter (1,190.019) | 1.12 µs   | 1.22 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.21 µs/iter (1,214.076) | 1.15 µs   | 1.24 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.22 µs/iter (1,219.509) | 1.15 µs   | 1.24 µs   | 1.31 µs   | 1.31 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.23 µs/iter (1,231.434) | 1.1 µs    | 1.26 µs   | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.23 µs/iter (1,232.209) | 1.14 µs   | 1.26 µs   | 1.29 µs   | 1.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.24 µs/iter (1,243.592) | 1.19 µs   | 1.26 µs   | 1.37 µs   | 1.37 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.26 µs/iter (1,263.267) | 1.2 µs    | 1.28 µs   | 1.36 µs   | 1.36 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.29 µs/iter (1,286.525) | 1.17 µs   | 1.3 µs    | 1.76 µs   | 1.76 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.34 µs/iter (1,337.16)  | 1.28 µs   | 1.36 µs   | 1.4 µs    | 1.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.5 µs/iter (1,499.115)  | 1.44 µs   | 1.52 µs   | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.51 µs/iter (1,509.78)  | 1.45 µs   | 1.52 µs   | 1.75 µs   | 1.75 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.06 µs/iter (3,061.838) | 2.94 µs   | 3.09 µs   | 3.27 µs   | 3.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.73 µs/iter (3,733.177) | 2.84 µs   | 4.22 µs   | 4.8 µs    | 4.8 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 9.15 µs/iter (9,149)     | 5.7 µs    | 9.2 µs    | 21.7 µs   | 797.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.19 µs/iter (9,186)     | 5.7 µs    | 9.3 µs    | 21.6 µs   | 576.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 10.44 µs/iter (10,444)   | 6.2 µs    | 10.3 µs   | 24.4 µs   | 541.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.28 µs/iter (11,284)   | 6.1 µs    | 11.4 µs   | 24.6 µs   | 1.27 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 11.95 µs/iter (11,945)   | 6.3 µs    | 10.7 µs   | 26.3 µs   | 10.55 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 12.38 µs/iter (12,385)   | 8.1 µs    | 12.1 µs   | 27.8 µs   | 1.4 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 12.46 µs/iter (12,463)   | 8.4 µs    | 12.2 µs   | 28 µs     | 232.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 12.58 µs/iter (12,578)   | 7 µs      | 12.4 µs   | 30.6 µs   | 1.62 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 14.11 µs/iter (14,106)   | 9.7 µs    | 13.3 µs   | 29.6 µs   | 740.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 14.32 µs/iter (14,318)   | 6.2 µs    | 11.2 µs   | 28 µs     | 13.34 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 14.41 µs/iter (14,409)   | 7.9 µs    | 13.9 µs   | 33.4 µs   | 2.83 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.29 µs/iter (15,288)   | 13 µs     | 15.3 µs   | 27.2 µs   | 339.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 16.93 µs/iter (16,925)   | 12.8 µs   | 15.8 µs   | 42.1 µs   | 247.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.12 µs/iter (17,120)   | 14 µs     | 15.9 µs   | 41.5 µs   | 1.43 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.8 µs/iter (17,802)    | 13.8 µs   | 17.5 µs   | 34.1 µs   | 1.02 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 17.84 µs/iter (17,842)   | 10.2 µs   | 16.2 µs   | 35.9 µs   | 1.99 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.9 µs/iter (17,899)    | 9.8 µs    | 16.2 µs   | 36.1 µs   | 1.29 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 18.01 µs/iter (18,013)   | 14 µs     | 17.8 µs   | 33 µs     | 286.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 18.07 µs/iter (18,072)   | 7.6 µs    | 16.3 µs   | 35.4 µs   | 2.93 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 19.44 µs/iter (19,439)   | 15.4 µs   | 17.6 µs   | 117.2 µs  | 979.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 19.63 µs/iter (19,625)   | 16 µs     | 18 µs     | 109.4 µs  | 1.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 19.67 µs/iter (19,667)   | 15.9 µs   | 17.8 µs   | 108.9 µs  | 1.18 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 21.92 µs/iter (21,921)   | 16.8 µs   | 21.9 µs   | 37.3 µs   | 312.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 25.18 µs/iter (25,184)   | 9.8 µs    | 22.9 µs   | 83.6 µs   | 2.22 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.62 µs/iter (25,624)   | 18.6 µs   | 24.7 µs   | 48.8 µs   | 1.59 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 26.76 µs/iter (26,763)   | 9.8 µs    | 23.4 µs   | 206 µs    | 4.98 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 40.9 µs/iter (40,897)    | 33.5 µs   | 40.4 µs   | 78.6 µs   | 327.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 47.85 µs/iter (47,854)   | 38.3 µs   | 44.4 µs   | 76 µs     | 2.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 49.44 µs/iter (49,436)   | 41.7 µs   | 49.1 µs   | 93.9 µs   | 586.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 55.53 µs/iter (55,528)   | 33.4 µs   | 39.9 µs   | 558.71 µs | 8.81 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 60.52 µs/iter (60,519)   | 51.3 µs   | 59.6 µs   | 174.6 µs  | 3.18 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 114.7 µs/iter (114,704)  | 99.9 µs   | 110.8 µs  | 140.1 µs  | 2.14 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 254.9 µs/iter (254,901)  | 214.1 µs  | 240.5 µs  | 752.31 µs | 4.33 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 704.48 µs/iter (704,480) | 585.11 µs | 670.21 µs | 1.2 ms    | 1.69 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 719.75 µs/iter (719,745) | 608.11 µs | 679.41 µs | 1.68 ms   | 2.01 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 731.22 µs/iter (731,217) | 600.41 µs | 809.51 µs | 986.82 µs | 1.09 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 763.75 µs/iter (763,746) | 650.91 µs | 721.21 µs | 1.76 ms   | 1.82 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 767.95 µs/iter (767,950) | 650.91 µs | 724.61 µs | 1.79 ms   | 1.9 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 832.07 µs/iter (832,066) | 692.91 µs | 787.11 µs | 1.87 ms   | 1.93 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 878.87 µs/iter (878,871) | 754.11 µs | 833.31 µs | 1.73 ms   | 1.75 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.19 ms/iter (1,187,694) | 980.21 µs | 1.12 ms   | 2.37 ms   | 2.48 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.23 ms/iter (1,226,394) | 1.02 ms   | 1.12 ms   | 3.87 ms   | 3.96 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.24 ms/iter (1,240,389) | 1.03 ms   | 1.15 ms   | 2.6 ms    | 2.65 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.39 ms/iter (1,390,640) | 1.15 ms   | 1.27 ms   | 4.36 ms   | 4.49 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.43 ms/iter (1,430,548) | 1.19 ms   | 1.3 ms    | 4.4 ms    | 4.45 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.44 ms/iter (1,437,101) | 1.19 ms   | 1.31 ms   | 4.45 ms   | 4.61 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99       | Min       | Max       |
| -------------------------------------- | --------- | -------------------------- | -------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | http      | 99.64 µs/iter (99,637.185) | 10.56 µs | 103.48 µs | 106.15 µs | 107.18 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 52.26 µs/iter (52,261.264) | 5.14 µs  | 54.96 µs  | 56.43 µs  | 56.88 µs  |
| node v18.7.0 (x64-linux)               | http      | 39.76 µs/iter (39,757.166) | 4.89 µs  | 41.33 µs  | 42.59 µs  | 43.45 µs  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 144.72 ns/iter (144.722) | 123.69 ns | 138.68 ns | 327.34 ns | 1.22 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 278.73 ns/iter (278.731) | 258.72 ns | 283.11 ns | 309.2 ns  | 337.5 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.33 ns/iter (307.329) | 246.56 ns | 277.75 ns | 1.09 µs   | 1.16 µs  |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 206.82 ns/iter (206.817) | 190.4 ns  | 211.94 ns | 222.82 ns | 227.45 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 219.1 ns/iter (219.104)  | 198.87 ns | 222.91 ns | 234.07 ns | 267.35 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 343.79 ns/iter (343.792) | 299.11 ns | 343.76 ns | 420.21 ns | 649.85 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 144.72 ns/iter (144.722) | 123.69 ns | 138.68 ns | 327.34 ns | 1.22 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 206.82 ns/iter (206.817) | 190.4 ns  | 211.94 ns | 222.82 ns | 227.45 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 219.1 ns/iter (219.104)  | 198.87 ns | 222.91 ns | 234.07 ns | 267.35 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 278.73 ns/iter (278.731) | 258.72 ns | 283.11 ns | 309.2 ns  | 337.5 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.33 ns/iter (307.329) | 246.56 ns | 277.75 ns | 1.09 µs   | 1.16 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 343.79 ns/iter (343.792) | 299.11 ns | 343.76 ns | 420.21 ns | 649.85 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 564.5 ns/iter (564.503)  | 441.85 ns | 602.11 ns | 614.68 ns | 614.68 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.25 µs/iter (1,252.197) | 1.09 µs   | 1.29 µs   | 1.33 µs   | 1.33 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.61 µs/iter (1,610.847) | 1.54 µs   | 1.63 µs   | 1.81 µs   | 1.81 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                   | p75     | p99      | Min      | Max      |
| -------------------------------------- | -------------------- | ------------------------- | ------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 1.96 µs/iter (1,955.335)  | 1.71 µs | 1.96 µs  | 3.62 µs  | 3.62 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.1 µs/iter (4,096.153)   | 3.95 µs | 4.07 µs  | 5.64 µs  | 5.64 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.43 µs/iter (10,434.98) | 9.05 µs | 10.61 µs | 10.84 µs | 10.84 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.99 µs/iter (1,994.433) | 1.78 µs | 2.03 µs | 2.14 µs | 2.14 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.22 µs/iter (6,217.71)  | 6.12 µs | 6.23 µs | 6.69 µs | 6.69 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.2 µs/iter (16,197)    | 10.7 µs | 16.3 µs | 27.8 µs | 311.1 µs |


### everything
| Runtime                                | Benchmark                        | Average                   | p75     | p99      | Min      | Max      |
| -------------------------------------- | -------------------------------- | ------------------------- | ------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 1.96 µs/iter (1,955.335)  | 1.71 µs | 1.96 µs  | 3.62 µs  | 3.62 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.99 µs/iter (1,994.433)  | 1.78 µs | 2.03 µs  | 2.14 µs  | 2.14 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.1 µs/iter (4,096.153)   | 3.95 µs | 4.07 µs  | 5.64 µs  | 5.64 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.22 µs/iter (6,217.71)   | 6.12 µs | 6.23 µs  | 6.69 µs  | 6.69 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.43 µs/iter (10,434.98) | 9.05 µs | 10.61 µs | 10.84 µs | 10.84 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.2 µs/iter (16,197)     | 10.7 µs | 16.3 µs  | 27.8 µs  | 311.1 µs |

