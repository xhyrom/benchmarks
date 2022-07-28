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
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 461.7 ns/iter (461.702)  | 452.2 ns  | 467.77 ns | 502.97 ns | 548.05 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 973.36 ns/iter (973.355) | 839.96 ns | 901.72 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.42 µs/iter (1,416.234) | 1.29 µs   | 1.43 µs   | 2.15 µs   | 2.15 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 483.89 ns/iter (483.887) | 474.79 ns | 486.41 ns | 519.89 ns | 655.28 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 942.48 ns/iter (942.484) | 831.98 ns | 861.78 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.44 µs/iter (1,437.806) | 1.31 µs   | 1.46 µs   | 1.98 µs   | 1.98 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 468.82 ns/iter (468.818) | 463.83 ns | 469.1 ns  | 485.35 ns | 487.62 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter (1,044.827) | 933.83 ns | 965.15 ns | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.36 µs/iter (1,355.801) | 1.29 µs   | 1.37 µs   | 1.41 µs   | 1.41 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 468.07 ns/iter (468.072) | 461.17 ns | 468.93 ns | 496.16 ns | 500.02 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 963.66 ns/iter (963.658) | 855.3 ns  | 875.73 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.33 µs/iter (1,326.959) | 1.24 µs   | 1.35 µs   | 1.59 µs   | 1.59 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 496.04 ns/iter (496.039) | 489.11 ns | 498.21 ns | 514.39 ns | 532.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.01 µs/iter (1,005.104) | 882.9 ns  | 918.83 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.39 µs/iter (1,390.606) | 1.28 µs   | 1.41 µs   | 1.52 µs   | 1.52 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 485.82 ns/iter (485.823) | 480.8 ns  | 486.85 ns | 501.61 ns | 515.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.03 µs/iter (1,033.434) | 897.98 ns | 965.11 ns | 1.76 µs   | 1.76 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.74 µs/iter (1,739.937) | 1.62 µs   | 1.78 µs   | 1.89 µs   | 1.89 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99      | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 471.02 ns/iter (471.025) | 465.39 ns | 475.4 ns | 491.12 ns | 499.98 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 991.21 ns/iter (991.206) | 874.24 ns | 902.1 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.36 µs/iter (1,361.464) | 1.26 µs   | 1.39 µs  | 1.44 µs   | 1.44 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 471.16 ns/iter (471.158) | 458.58 ns | 476.5 ns  | 499.29 ns | 531.01 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.01 µs/iter (1,010.576) | 908.17 ns | 934.33 ns | 1.71 µs   | 1.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.36 µs/iter (1,357.501) | 1.29 µs   | 1.39 µs   | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 485.86 ns/iter (485.857) | 473.14 ns | 489.83 ns | 506.94 ns | 513.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 958.16 ns/iter (958.162) | 848.39 ns | 875.44 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.38 µs/iter (1,384.588) | 1.31 µs   | 1.41 µs   | 1.47 µs   | 1.47 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.43 µs/iter (11,433)   | 6.8 µs    | 11 µs     | 21.1 µs  | 1.26 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.45 µs/iter (22,451)   | 19 µs     | 20.5 µs   | 119.1 µs | 1.44 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 805.71 µs/iter (805,714) | 717.01 µs | 891.21 µs | 1.06 ms  | 1.21 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 14.57 µs/iter (14,569)   | 8.3 µs  | 13.1 µs | 32.3 µs  | 1.4 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.5 µs/iter (22,500)    | 18.7 µs | 20.6 µs | 120.1 µs | 428.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.31 ms/iter (1,309,527) | 1.16 ms | 1.21 ms | 2.53 ms  | 2.63 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 10.39 µs/iter (10,395)   | 7.2 µs    | 9.3 µs    | 16 µs   | 706.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 20.03 µs/iter (20,028)   | 17 µs     | 19.1 µs   | 47 µs   | 261 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 771.14 µs/iter (771,145) | 679.91 µs | 710.81 µs | 1.72 ms | 1.91 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 10.29 µs/iter (10,287)   | 7 µs      | 9.2 µs    | 15.8 µs | 722.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 20.26 µs/iter (20,257)   | 16.7 µs   | 18.8 µs   | 46.8 µs | 4.45 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 764.82 µs/iter (764,823) | 683.31 µs | 708.91 µs | 1.84 ms | 3.41 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 10.28 µs/iter (10,284)   | 7.3 µs    | 9.7 µs    | 19.1 µs  | 739.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 23.41 µs/iter (23,405)   | 18.9 µs   | 21.7 µs   | 147.4 µs | 4.94 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 953.49 µs/iter (953,486) | 821.31 µs | 874.21 µs | 1.86 ms  | 11.28 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 56.12 µs/iter (56,116)   | 40.8 µs | 42.8 µs | 553.21 µs | 678.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 58.22 µs/iter (58,221)   | 52.6 µs | 55.9 µs | 216.5 µs  | 3.34 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.37 ms/iter (1,367,155) | 1.17 ms | 1.21 ms | 3.24 ms   | 3.48 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 11.82 µs/iter (11,819)   | 7.1 µs    | 11.6 µs   | 21.5 µs | 666.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.93 µs/iter (20,928)   | 16.9 µs   | 19.2 µs   | 55.2 µs | 5.35 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 786.17 µs/iter (786,172) | 701.61 µs | 745.51 µs | 1.51 ms | 4.22 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 12.3 µs/iter (12,297)    | 7.1 µs    | 12 µs     | 22 µs   | 999.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 21.85 µs/iter (21,846)   | 18.2 µs   | 20.7 µs   | 36.4 µs | 3.3 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 794.65 µs/iter (794,653) | 696.81 µs | 734.21 µs | 1.45 ms | 15.19 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 72.53 µs/iter (72,527)   | 64.6 µs   | 70.7 µs   | 217 µs   | 319.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 272.01 µs/iter (272,009) | 262.4 µs  | 265.8 µs  | 337.5 µs | 951.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 839.63 µs/iter (839,633) | 747.11 µs | 794.91 µs | 1.86 ms  | 1.96 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 404.71 ns/iter (404.708) | 396.87 ns | 401.64 ns | 442.51 ns | 465.27 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 628.84 ns/iter (628.842) | 611.65 ns | 639.57 ns | 795.28 ns | 795.28 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 951.55 ns/iter (951.55)  | 833.09 ns | 872.12 ns | 1.78 µs   | 1.78 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 488.82 ns/iter (488.822) | 479.54 ns | 486.02 ns | 519.62 ns | 528.49 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 963.39 ns/iter (963.393) | 853.02 ns | 871.61 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.41 µs/iter (1,406.438) | 1.2 µs    | 1.51 µs   | 1.76 µs   | 1.76 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 399.85 ns/iter (399.851) | 391.03 ns | 397.75 ns | 436.83 ns | 438 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 622.51 ns/iter (622.506) | 605.58 ns | 631.41 ns | 1.07 µs   | 1.07 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 952.7 ns/iter (952.7)    | 846.22 ns | 865.18 ns | 1.63 µs   | 1.63 µs |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 406.77 ns/iter (406.771) | 392.55 ns | 407.98 ns | 463.05 ns | 475.34 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 605.36 ns/iter (605.356) | 594.43 ns | 618.93 ns | 633.22 ns | 633.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 945.78 ns/iter (945.777) | 836.85 ns | 857.51 ns | 1.62 µs   | 1.62 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 488.02 ns/iter (488.022) | 470.22 ns | 490.94 ns | 531.18 ns | 547.45 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 988.37 ns/iter (988.375) | 873.35 ns | 893.75 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.54 µs/iter (1,539.74)  | 1.52 µs   | 1.55 µs   | 1.64 µs   | 1.64 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 483.98 ns/iter (483.983) | 462.23 ns | 495.94 ns | 536.18 ns | 543.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.05 µs/iter (1,046.552) | 937.13 ns | 956.06 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.8 µs/iter (1,799.199)  | 1.78 µs   | 1.81 µs   | 1.97 µs   | 1.97 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 402.34 ns/iter (402.341) | 394.56 ns | 399.82 ns | 437.65 ns | 438.08 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 635.79 ns/iter (635.791) | 624.64 ns | 647.5 ns  | 675.89 ns | 675.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 978.61 ns/iter (978.609) | 866.63 ns | 882.83 ns | 1.7 µs    | 1.7 µs    |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 404.92 ns/iter (404.924) | 395.86 ns | 402.55 ns | 440.64 ns | 441.16 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 636.29 ns/iter (636.287) | 626.11 ns | 648.28 ns | 655.78 ns | 655.78 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 944.34 ns/iter (944.344) | 838.01 ns | 850.19 ns | 1.66 µs   | 1.66 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 470.21 ns/iter (470.214) | 449.48 ns | 479.3 ns  | 513.28 ns | 522.96 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 900.83 ns/iter (900.834) | 794.74 ns | 812.79 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.1 µs/iter (1,095.823)  | 1.08 µs   | 1.11 µs   | 1.18 µs   | 1.18 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.84 µs/iter (13,838)   | 10.1 µs | 13.2 µs | 27.7 µs | 300.3 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 19.46 µs/iter (19,461)   | 8.5 µs  | 17.2 µs | 39.5 µs | 6.22 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.51 ms/iter (1,507,469) | 1.34 ms | 1.38 ms | 4.4 ms  | 4.71 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 15.66 µs/iter (15,657)   | 8.6 µs  | 14 µs   | 33.4 µs | 1.01 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 24.76 µs/iter (24,762)   | 20.9 µs | 24.1 µs | 38.3 µs | 297.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.32 ms/iter (1,321,016) | 1.18 ms | 1.21 ms | 3.87 ms | 4.41 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.27 µs/iter (1,274.812) | 1.2 µs  | 1.3 µs  | 1.36 µs  | 1.36 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 29.84 µs/iter (29,843)   | 10.9 µs | 25.3 µs | 101.8 µs | 2.12 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 44.87 µs/iter (44,866)   | 41.2 µs | 44.2 µs | 76.5 µs  | 286.8 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 140.94 ns/iter (140.936) | 135.52 ns | 139.29 ns | 155.29 ns | 159.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 377.98 ns/iter (377.982) | 369.28 ns | 374.58 ns | 404.09 ns | 415.65 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 31.83 µs/iter (31,834)   | 11 µs     | 26.1 µs   | 231.8 µs  | 3.1 ms    |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                 | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ----------------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.48 µs/iter (3,480.14) | 3.43 µs | 3.48 µs | 3.58 µs | 3.58 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 17.36 µs/iter (17,365)  | 15.9 µs | 17.4 µs | 23.6 µs | 410 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 29.47 µs/iter (29,473)  | 24.5 µs | 27.4 µs | 49.7 µs | 1.39 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.25 ns/iter (129.245) | 123.88 ns | 127.91 ns | 144.86 ns | 147.8 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter (1,405.218) | 1.38 µs   | 1.42 µs   | 1.46 µs   | 1.46 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.05 µs/iter (130,047) | 123 µs    | 124.8 µs  | 164.3 µs  | 1.63 ms  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 14.04 µs/iter (14,042)   | 10.3 µs | 13.3 µs | 27.8 µs | 486.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 18.94 µs/iter (18,939)   | 11.3 µs | 17.1 µs | 38 µs   | 1.81 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.55 ms/iter (1,549,610) | 1.38 ms | 1.41 ms | 4.49 ms | 4.54 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 14.11 µs/iter (14,106)   | 10.4 µs | 13.4 µs | 28.1 µs | 279.2 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 18.39 µs/iter (18,388)   | 11.6 µs | 16.9 µs | 37 µs   | 1.45 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.55 ms/iter (1,553,779) | 1.38 ms | 1.41 ms | 4.53 ms | 4.62 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 534.31 ns/iter (534.306) | 526.05 ns | 531.93 ns | 563.31 ns | 575.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.55 µs/iter (4,546.808) | 3.32 µs   | 5.06 µs   | 5.74 µs   | 5.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 53.53 µs/iter (53,530)   | 47.5 µs   | 49.8 µs   | 73.3 µs   | 1.67 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.25 ns/iter (129.245) | 123.88 ns | 127.91 ns | 144.86 ns | 147.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 140.94 ns/iter (140.936) | 135.52 ns | 139.29 ns | 155.29 ns | 159.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 377.98 ns/iter (377.982) | 369.28 ns | 374.58 ns | 404.09 ns | 415.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 399.85 ns/iter (399.851) | 391.03 ns | 397.75 ns | 436.83 ns | 438 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 402.34 ns/iter (402.341) | 394.56 ns | 399.82 ns | 437.65 ns | 438.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 404.71 ns/iter (404.708) | 396.87 ns | 401.64 ns | 442.51 ns | 465.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 404.92 ns/iter (404.924) | 395.86 ns | 402.55 ns | 440.64 ns | 441.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 406.77 ns/iter (406.771) | 392.55 ns | 407.98 ns | 463.05 ns | 475.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 461.7 ns/iter (461.702)  | 452.2 ns  | 467.77 ns | 502.97 ns | 548.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 468.07 ns/iter (468.072) | 461.17 ns | 468.93 ns | 496.16 ns | 500.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 468.82 ns/iter (468.818) | 463.83 ns | 469.1 ns  | 485.35 ns | 487.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 470.21 ns/iter (470.214) | 449.48 ns | 479.3 ns  | 513.28 ns | 522.96 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 471.02 ns/iter (471.025) | 465.39 ns | 475.4 ns  | 491.12 ns | 499.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 471.16 ns/iter (471.158) | 458.58 ns | 476.5 ns  | 499.29 ns | 531.01 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 483.89 ns/iter (483.887) | 474.79 ns | 486.41 ns | 519.89 ns | 655.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 483.98 ns/iter (483.983) | 462.23 ns | 495.94 ns | 536.18 ns | 543.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 485.82 ns/iter (485.823) | 480.8 ns  | 486.85 ns | 501.61 ns | 515.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 485.86 ns/iter (485.857) | 473.14 ns | 489.83 ns | 506.94 ns | 513.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 488.02 ns/iter (488.022) | 470.22 ns | 490.94 ns | 531.18 ns | 547.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 488.82 ns/iter (488.822) | 479.54 ns | 486.02 ns | 519.62 ns | 528.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 496.04 ns/iter (496.039) | 489.11 ns | 498.21 ns | 514.39 ns | 532.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 534.31 ns/iter (534.306) | 526.05 ns | 531.93 ns | 563.31 ns | 575.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 605.36 ns/iter (605.356) | 594.43 ns | 618.93 ns | 633.22 ns | 633.22 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 622.51 ns/iter (622.506) | 605.58 ns | 631.41 ns | 1.07 µs   | 1.07 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 628.84 ns/iter (628.842) | 611.65 ns | 639.57 ns | 795.28 ns | 795.28 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 635.79 ns/iter (635.791) | 624.64 ns | 647.5 ns  | 675.89 ns | 675.89 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 636.29 ns/iter (636.287) | 626.11 ns | 648.28 ns | 655.78 ns | 655.78 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 900.83 ns/iter (900.834) | 794.74 ns | 812.79 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 942.48 ns/iter (942.484) | 831.98 ns | 861.78 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 944.34 ns/iter (944.344) | 838.01 ns | 850.19 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 945.78 ns/iter (945.777) | 836.85 ns | 857.51 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 951.55 ns/iter (951.55)  | 833.09 ns | 872.12 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 952.7 ns/iter (952.7)    | 846.22 ns | 865.18 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 958.16 ns/iter (958.162) | 848.39 ns | 875.44 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 963.39 ns/iter (963.393) | 853.02 ns | 871.61 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 963.66 ns/iter (963.658) | 855.3 ns  | 875.73 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 973.36 ns/iter (973.355) | 839.96 ns | 901.72 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 978.61 ns/iter (978.609) | 866.63 ns | 882.83 ns | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 988.37 ns/iter (988.375) | 873.35 ns | 893.75 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 991.21 ns/iter (991.206) | 874.24 ns | 902.1 ns  | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.01 µs/iter (1,005.104) | 882.9 ns  | 918.83 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.01 µs/iter (1,010.576) | 908.17 ns | 934.33 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.03 µs/iter (1,033.434) | 897.98 ns | 965.11 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.04 µs/iter (1,044.827) | 933.83 ns | 965.15 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.05 µs/iter (1,046.552) | 937.13 ns | 956.06 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.1 µs/iter (1,095.823)  | 1.08 µs   | 1.11 µs   | 1.18 µs   | 1.18 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.27 µs/iter (1,274.812) | 1.2 µs    | 1.3 µs    | 1.36 µs   | 1.36 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.33 µs/iter (1,326.959) | 1.24 µs   | 1.35 µs   | 1.59 µs   | 1.59 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.36 µs/iter (1,355.801) | 1.29 µs   | 1.37 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.36 µs/iter (1,357.501) | 1.29 µs   | 1.39 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.36 µs/iter (1,361.464) | 1.26 µs   | 1.39 µs   | 1.44 µs   | 1.44 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.38 µs/iter (1,384.588) | 1.31 µs   | 1.41 µs   | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.39 µs/iter (1,390.606) | 1.28 µs   | 1.41 µs   | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter (1,405.218) | 1.38 µs   | 1.42 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.41 µs/iter (1,406.438) | 1.2 µs    | 1.51 µs   | 1.76 µs   | 1.76 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.42 µs/iter (1,416.234) | 1.29 µs   | 1.43 µs   | 2.15 µs   | 2.15 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.44 µs/iter (1,437.806) | 1.31 µs   | 1.46 µs   | 1.98 µs   | 1.98 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.54 µs/iter (1,539.74)  | 1.52 µs   | 1.55 µs   | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.74 µs/iter (1,739.937) | 1.62 µs   | 1.78 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.8 µs/iter (1,799.199)  | 1.78 µs   | 1.81 µs   | 1.97 µs   | 1.97 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.48 µs/iter (3,480.14)  | 3.43 µs   | 3.48 µs   | 3.58 µs   | 3.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.55 µs/iter (4,546.808) | 3.32 µs   | 5.06 µs   | 5.74 µs   | 5.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 10.28 µs/iter (10,284)   | 7.3 µs    | 9.7 µs    | 19.1 µs   | 739.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 10.29 µs/iter (10,287)   | 7 µs      | 9.2 µs    | 15.8 µs   | 722.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 10.39 µs/iter (10,395)   | 7.2 µs    | 9.3 µs    | 16 µs     | 706.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.43 µs/iter (11,433)   | 6.8 µs    | 11 µs     | 21.1 µs   | 1.26 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 11.82 µs/iter (11,819)   | 7.1 µs    | 11.6 µs   | 21.5 µs   | 666.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 12.3 µs/iter (12,297)    | 7.1 µs    | 12 µs     | 22 µs     | 999.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.84 µs/iter (13,838)   | 10.1 µs   | 13.2 µs   | 27.7 µs   | 300.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 14.04 µs/iter (14,042)   | 10.3 µs   | 13.3 µs   | 27.8 µs   | 486.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 14.11 µs/iter (14,106)   | 10.4 µs   | 13.4 µs   | 28.1 µs   | 279.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 14.57 µs/iter (14,569)   | 8.3 µs    | 13.1 µs   | 32.3 µs   | 1.4 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 15.66 µs/iter (15,657)   | 8.6 µs    | 14 µs     | 33.4 µs   | 1.01 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 17.36 µs/iter (17,365)   | 15.9 µs   | 17.4 µs   | 23.6 µs   | 410 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 18.39 µs/iter (18,388)   | 11.6 µs   | 16.9 µs   | 37 µs     | 1.45 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 18.94 µs/iter (18,939)   | 11.3 µs   | 17.1 µs   | 38 µs     | 1.81 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 19.46 µs/iter (19,461)   | 8.5 µs    | 17.2 µs   | 39.5 µs   | 6.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 20.03 µs/iter (20,028)   | 17 µs     | 19.1 µs   | 47 µs     | 261 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 20.26 µs/iter (20,257)   | 16.7 µs   | 18.8 µs   | 46.8 µs   | 4.45 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.93 µs/iter (20,928)   | 16.9 µs   | 19.2 µs   | 55.2 µs   | 5.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 21.85 µs/iter (21,846)   | 18.2 µs   | 20.7 µs   | 36.4 µs   | 3.3 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.45 µs/iter (22,451)   | 19 µs     | 20.5 µs   | 119.1 µs  | 1.44 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.5 µs/iter (22,500)    | 18.7 µs   | 20.6 µs   | 120.1 µs  | 428.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 23.41 µs/iter (23,405)   | 18.9 µs   | 21.7 µs   | 147.4 µs  | 4.94 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 24.76 µs/iter (24,762)   | 20.9 µs   | 24.1 µs   | 38.3 µs   | 297.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 29.47 µs/iter (29,473)   | 24.5 µs   | 27.4 µs   | 49.7 µs   | 1.39 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 29.84 µs/iter (29,843)   | 10.9 µs   | 25.3 µs   | 101.8 µs  | 2.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 31.83 µs/iter (31,834)   | 11 µs     | 26.1 µs   | 231.8 µs  | 3.1 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 44.87 µs/iter (44,866)   | 41.2 µs   | 44.2 µs   | 76.5 µs   | 286.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 53.53 µs/iter (53,530)   | 47.5 µs   | 49.8 µs   | 73.3 µs   | 1.67 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 56.12 µs/iter (56,116)   | 40.8 µs   | 42.8 µs   | 553.21 µs | 678.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 58.22 µs/iter (58,221)   | 52.6 µs   | 55.9 µs   | 216.5 µs  | 3.34 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 72.53 µs/iter (72,527)   | 64.6 µs   | 70.7 µs   | 217 µs    | 319.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.05 µs/iter (130,047) | 123 µs    | 124.8 µs  | 164.3 µs  | 1.63 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 272.01 µs/iter (272,009) | 262.4 µs  | 265.8 µs  | 337.5 µs  | 951.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 764.82 µs/iter (764,823) | 683.31 µs | 708.91 µs | 1.84 ms   | 3.41 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 771.14 µs/iter (771,145) | 679.91 µs | 710.81 µs | 1.72 ms   | 1.91 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 786.17 µs/iter (786,172) | 701.61 µs | 745.51 µs | 1.51 ms   | 4.22 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 794.65 µs/iter (794,653) | 696.81 µs | 734.21 µs | 1.45 ms   | 15.19 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 805.71 µs/iter (805,714) | 717.01 µs | 891.21 µs | 1.06 ms   | 1.21 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 839.63 µs/iter (839,633) | 747.11 µs | 794.91 µs | 1.86 ms   | 1.96 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 953.49 µs/iter (953,486) | 821.31 µs | 874.21 µs | 1.86 ms   | 11.28 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.31 ms/iter (1,309,527) | 1.16 ms   | 1.21 ms   | 2.53 ms   | 2.63 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.32 ms/iter (1,321,016) | 1.18 ms   | 1.21 ms   | 3.87 ms   | 4.41 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.37 ms/iter (1,367,155) | 1.17 ms   | 1.21 ms   | 3.24 ms   | 3.48 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.51 ms/iter (1,507,469) | 1.34 ms   | 1.38 ms   | 4.4 ms    | 4.71 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.55 ms/iter (1,549,610) | 1.38 ms   | 1.41 ms   | 4.49 ms   | 4.54 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.55 ms/iter (1,553,779) | 1.38 ms   | 1.41 ms   | 4.53 ms   | 4.62 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------- | -------------------------- | -------- | -------- | -------- | -------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 88.14 µs/iter (88,144.537) | 4.11 µs  | 89.12 µs | 96 µs    | 96.87 µs |
| node v18.7.0 (x64-linux)               | http      | 87.58 µs/iter (87,584.66)  | 6.43 µs  | 89.03 µs | 92.29 µs | 96.35 µs |
| bun 0.1.5 (x64-linux)                  | http      | 86.18 µs/iter (86,184.472) | 10.57 µs | 89.18 µs | 95.87 µs | 97.28 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 164.33 ns/iter (164.334) | 157.17 ns | 162.67 ns | 222.63 ns | 286.97 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 309.24 ns/iter (309.243) | 296.58 ns | 306.95 ns | 350.6 ns  | 937.21 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.13 ns/iter (321.129) | 314.33 ns | 324.59 ns | 352.19 ns | 387.94 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.04 ns/iter (240.037) | 234.54 ns | 244.33 ns | 255.93 ns | 264.08 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.26 ns/iter (248.262) | 239.72 ns | 249.64 ns | 263.65 ns | 265.64 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 381.98 ns/iter (381.985) | 355.5 ns  | 406.58 ns | 428.31 ns | 469.99 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 164.33 ns/iter (164.334) | 157.17 ns | 162.67 ns | 222.63 ns | 286.97 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.04 ns/iter (240.037) | 234.54 ns | 244.33 ns | 255.93 ns | 264.08 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.26 ns/iter (248.262) | 239.72 ns | 249.64 ns | 263.65 ns | 265.64 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 309.24 ns/iter (309.243) | 296.58 ns | 306.95 ns | 350.6 ns  | 937.21 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.13 ns/iter (321.129) | 314.33 ns | 324.59 ns | 352.19 ns | 387.94 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 381.98 ns/iter (381.985) | 355.5 ns  | 406.58 ns | 428.31 ns | 469.99 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 642.82 ns/iter (642.815) | 538.16 ns | 685.51 ns | 700.42 ns | 700.42 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.4 µs/iter (1,402.808)  | 1.33 µs   | 1.42 µs   | 1.52 µs   | 1.52 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.81 µs/iter (1,813.135) | 1.78 µs   | 1.81 µs   | 2.03 µs   | 2.03 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.19 µs/iter (2,185.745) | 2.04 µs | 2.22 µs | 2.26 µs | 2.26 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.64 µs/iter (4,638)     | 2.6 µs  | 6.5 µs  | 9.3 µs  | 5.84 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.85 µs/iter (11,850)   | 6.6 µs  | 12.2 µs | 17 µs   | 1.01 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.28 µs/iter (2,277.973) | 2.06 µs | 2.28 µs | 3.18 µs | 3.18 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.31 µs/iter (7,307)     | 4.6 µs  | 8.6 µs  | 13.1 µs | 2.25 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.69 µs/iter (18,690)   | 12.1 µs | 18.6 µs | 24.6 µs | 479.2 µs |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.19 µs/iter (2,185.745) | 2.04 µs | 2.22 µs | 2.26 µs | 2.26 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.28 µs/iter (2,277.973) | 2.06 µs | 2.28 µs | 3.18 µs | 3.18 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.64 µs/iter (4,638)     | 2.6 µs  | 6.5 µs  | 9.3 µs  | 5.84 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.31 µs/iter (7,307)     | 4.6 µs  | 8.6 µs  | 13.1 µs | 2.25 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.85 µs/iter (11,850)   | 6.6 µs  | 12.2 µs | 17 µs   | 1.01 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.69 µs/iter (18,690)   | 12.1 µs | 18.6 µs | 24.6 µs | 479.2 µs |

