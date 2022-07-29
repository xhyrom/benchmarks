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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 466.2 ns/iter (466.2)    | 454.43 ns | 477.63 ns | 528.71 ns | 580.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.03 µs/iter (1,033.219) | 899.63 ns | 960.87 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.33 µs/iter (1,332.267) | 1.18 µs   | 1.35 µs   | 2.16 µs   | 2.16 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 484.2 ns/iter (484.204)  | 468.32 ns | 481.15 ns | 688.52 ns | 1.15 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 973.67 ns/iter (973.667) | 851.37 ns | 894.27 ns | 1.72 µs   | 1.72 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.42 µs/iter (1,423.902) | 1.33 µs   | 1.44 µs   | 1.78 µs   | 1.78 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 464.5 ns/iter (464.504)  | 458.6 ns  | 469.44 ns | 489.44 ns | 494.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.12 µs/iter (1,118.075) | 966.44 ns | 992.07 ns | 2.62 µs   | 2.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.29 µs/iter (1,293.731) | 1.24 µs   | 1.31 µs   | 1.68 µs   | 1.68 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 466.56 ns/iter (466.565) | 459.78 ns | 465.68 ns | 495.57 ns | 566.07 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.04 µs/iter (1,036.62)  | 870.55 ns | 910.37 ns | 3.19 µs   | 3.19 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.28 µs/iter (1,278.999) | 1.19 µs   | 1.3 µs    | 1.6 µs    | 1.6 µs    |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 496.06 ns/iter (496.063) | 490.97 ns | 496.12 ns | 508.46 ns | 512.34 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.07 µs/iter (1,074.73)  | 958.88 ns | 983.47 ns | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.44 µs/iter (1,437.069) | 1.32 µs   | 1.44 µs   | 2.23 µs   | 2.23 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 490.69 ns/iter (490.688) | 483.97 ns | 489.52 ns | 525.78 ns | 653.3 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.11 µs/iter (1,110.644) | 963.68 ns | 1.03 µs   | 1.82 µs   | 1.82 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.82 µs/iter (1,816.303) | 1.62 µs   | 1.79 µs   | 3.35 µs   | 3.35 µs  |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 479.19 ns/iter (479.195) | 463.18 ns | 469.88 ns | 972.37 ns | 1.17 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.06 µs/iter (1,060.69)  | 949.08 ns | 973.72 ns | 1.85 µs   | 1.85 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.24 µs/iter (1,236.855) | 1.19 µs   | 1.25 µs   | 1.79 µs   | 1.79 µs |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 470.94 ns/iter (470.941) | 457.34 ns | 471.28 ns | 523.15 ns | 532.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.07 µs/iter (1,066.523) | 957.42 ns | 981.34 ns | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.25 µs/iter (1,254.603) | 1.21 µs   | 1.27 µs   | 1.58 µs   | 1.58 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 478.27 ns/iter (478.266) | 467.28 ns | 481.55 ns | 514.78 ns | 528.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 996.75 ns/iter (996.747) | 888.98 ns | 907.25 ns | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.3 µs/iter (1,303.569)  | 1.19 µs   | 1.33 µs   | 2.35 µs   | 2.35 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                 | p75       | p99       | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ----------------------- | --------- | --------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.21 µs/iter (11,213)  | 6.8 µs    | 11 µs     | 22 µs    | 3 ms     |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.54 µs/iter (22,541)  | 18.6 µs   | 20.6 µs   | 120.6 µs | 214.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 822.5 µs/iter (822,500) | 731.11 µs | 902.71 µs | 1.07 ms  | 1.23 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 13.85 µs/iter (13,850)   | 8.4 µs  | 13.5 µs | 33.6 µs  | 2.89 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.72 µs/iter (22,723)   | 18.2 µs | 20.6 µs | 121.4 µs | 939.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.32 ms/iter (1,323,595) | 1.16 ms | 1.24 ms | 2.55 ms  | 2.73 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 10.01 µs/iter (10,011)   | 6.9 µs    | 9.9 µs    | 17.3 µs | 776.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.66 µs/iter (19,658)   | 17 µs     | 18.2 µs   | 57.2 µs | 325.9 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 807.11 µs/iter (807,109) | 719.61 µs | 758.41 µs | 1.37 ms | 1.47 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.78 µs/iter (9,776)     | 6.8 µs    | 9.7 µs    | 16.3 µs | 557.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.41 µs/iter (19,406)   | 16.9 µs   | 18.1 µs   | 45.8 µs | 251.9 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 826.66 µs/iter (826,658) | 724.01 µs | 759.71 µs | 1.99 ms | 2.07 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.38 µs/iter (11,381)   | 7.2 µs    | 11.4 µs   | 20.8 µs  | 549.41 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.02 µs/iter (22,021)   | 18.9 µs   | 20.1 µs   | 133.8 µs | 762.41 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 990.88 µs/iter (990,879) | 896.61 µs | 930.41 µs | 1.92 ms  | 1.97 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 55.23 µs/iter (55,232)   | 51.4 µs | 53.4 µs | 168.6 µs  | 531.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 57.57 µs/iter (57,570)   | 40.7 µs | 44.6 µs | 561.51 µs | 1.12 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.41 ms/iter (1,409,473) | 1.24 ms | 1.28 ms | 2.94 ms   | 3.13 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                 | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ----------------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 11.37 µs/iter (11,366)  | 7.1 µs    | 11.2 µs   | 21.7 µs | 553.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.31 µs/iter (20,312)  | 16.3 µs   | 19.7 µs   | 38.4 µs | 539.81 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 859.1 µs/iter (859,100) | 768.71 µs | 801.01 µs | 1.89 ms | 1.95 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 11.35 µs/iter (11,350)   | 7 µs      | 11.2 µs   | 20.8 µs | 1.19 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 19.93 µs/iter (19,929)   | 17.4 µs   | 19.4 µs   | 33.7 µs | 288.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 857.85 µs/iter (857,847) | 769.11 µs | 800.51 µs | 1.94 ms | 2.27 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 67.2 µs/iter (67,197)    | 63 µs     | 66.2 µs   | 195 µs    | 243.5 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 274.18 µs/iter (274,175) | 262.31 µs | 268.41 µs | 752.42 µs | 1 ms     |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 926.84 µs/iter (926,840) | 807.11 µs | 873.41 µs | 1.99 ms   | 2.3 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 405.58 ns/iter (405.582) | 398.68 ns | 403.94 ns | 433.78 ns | 439.32 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 630.6 ns/iter (630.596)  | 617.79 ns | 637.93 ns | 749.54 ns | 749.54 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.02 µs/iter (1,021.013) | 890.56 ns | 939.86 ns | 1.79 µs   | 1.79 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 489.41 ns/iter (489.409) | 480.92 ns | 488.24 ns | 515.28 ns | 519.51 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 983.97 ns/iter (983.965) | 881.29 ns | 902.74 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.37 µs/iter (1,368.164) | 1.17 µs   | 1.51 µs   | 1.68 µs   | 1.68 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 400.07 ns/iter (400.069) | 392.98 ns | 399.06 ns | 424.5 ns | 424.78 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 626.59 ns/iter (626.593) | 610.92 ns | 632.95 ns | 1.03 µs  | 1.03 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.01 µs/iter (1,014.225) | 894.64 ns | 924.61 ns | 1.7 µs   | 1.7 µs    |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 402.13 ns/iter (402.128) | 394.68 ns | 400.68 ns | 435.87 ns | 448.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 609.76 ns/iter (609.763) | 598.95 ns | 620.25 ns | 663.48 ns | 663.48 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 946.19 ns/iter (946.189) | 841.21 ns | 858.38 ns | 1.64 µs   | 1.64 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                 | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ----------------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 544.8 ns/iter (544.799) | 532.53 ns | 544.91 ns | 570.54 ns | 570.82 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1 µs/iter (1,000.053)   | 892.41 ns | 917.5 ns  | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.5 µs/iter (1,498.074) | 1.48 µs   | 1.51 µs   | 1.58 µs   | 1.58 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 532 ns/iter (532.004)    | 516.56 ns | 532.73 ns | 560.15 ns | 564.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.08 µs/iter (1,078.301) | 956.94 ns | 986.61 ns | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.76 µs/iter (1,762.136) | 1.74 µs   | 1.78 µs   | 1.89 µs   | 1.89 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 403.22 ns/iter (403.217) | 394.45 ns | 401.73 ns | 434.44 ns | 437.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 646.21 ns/iter (646.207) | 632.87 ns | 657.37 ns | 698.84 ns | 698.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.01 µs/iter (1,008.046) | 896.28 ns | 922.29 ns | 1.78 µs   | 1.78 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 404.81 ns/iter (404.812) | 396.55 ns | 403.86 ns | 432.33 ns | 432.74 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 706.06 ns/iter (706.062) | 695.14 ns | 716.13 ns | 729.89 ns | 729.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.01 µs/iter (1,008.587) | 893.69 ns | 917.2 ns  | 1.76 µs   | 1.76 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 509.44 ns/iter (509.438) | 499.23 ns | 509.1 ns  | 540.36 ns | 540.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 947.4 ns/iter (947.403)  | 837.56 ns | 856.35 ns | 1.66 µs   | 1.66 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.16 µs/iter (1,157.065) | 1.14 µs   | 1.17 µs   | 1.21 µs   | 1.21 µs  |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 12.69 µs/iter (12,689)   | 9.7 µs  | 12.2 µs | 26.2 µs | 247.7 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 18.57 µs/iter (18,570)   | 9.1 µs  | 16.9 µs | 34.9 µs | 3.72 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.55 ms/iter (1,554,988) | 1.34 ms | 1.41 ms | 4.56 ms | 9.97 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75    | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------ | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 13.7 µs/iter (13,699)    | 8.5 µs | 13.3 µs | 34 µs   | 2.84 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 23.08 µs/iter (23,084)   | 20 µs  | 22.7 µs | 36.3 µs | 286.4 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.37 ms/iter (1,372,840) | 1.2 ms | 1.24 ms | 4.04 ms | 4.32 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.24 µs/iter (1,243.698) | 1.18 µs | 1.28 µs | 1.36 µs | 1.36 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 23.39 µs/iter (23,393)   | 10.7 µs | 21.4 µs | 78.7 µs | 2.02 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 46.19 µs/iter (46,192)   | 41.4 µs | 45.6 µs | 83.1 µs | 310.4 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 140.85 ns/iter (140.848) | 135.81 ns | 139.71 ns | 154.03 ns | 157.2 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 379.94 ns/iter (379.936) | 369.84 ns | 388.8 ns  | 421.32 ns | 514.04 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 26.14 µs/iter (26,142)   | 11.5 µs   | 23 µs     | 227.2 µs  | 1.89 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.55 µs/iter (3,552.521) | 3.54 µs | 3.56 µs | 3.6 µs  | 3.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 17.73 µs/iter (17,727)   | 16.1 µs | 17.6 µs | 30.4 µs | 439.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 28 µs/iter (27,999)      | 22.4 µs | 26.6 µs | 49.8 µs | 1.55 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.68 ns/iter (128.676) | 123.44 ns | 127.88 ns | 142.65 ns | 162.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.37 µs/iter (1,374.406) | 1.35 µs   | 1.38 µs   | 1.41 µs   | 1.41 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 131.2 µs/iter (131,197)  | 121.7 µs  | 133.3 µs  | 167.6 µs  | 1.58 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 13.05 µs/iter (13,048)   | 9.8 µs  | 12.5 µs | 29.2 µs | 926.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.61 µs/iter (17,615)   | 10.4 µs | 16.6 µs | 37.4 µs | 901.71 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.58 ms/iter (1,579,516) | 1.41 ms | 1.44 ms | 4.52 ms | 4.65 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 13.85 µs/iter (13,845)   | 9.6 µs  | 13.7 µs | 32.7 µs | 927.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 17.83 µs/iter (17,832)   | 10.3 µs | 16.5 µs | 44.3 µs | 2.33 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.58 ms/iter (1,582,950) | 1.4 ms  | 1.44 ms | 4.59 ms | 4.72 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 541.33 ns/iter (541.326) | 535.1 ns | 539.24 ns | 572.88 ns | 584.06 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.13 µs/iter (4,134.14)  | 2.93 µs  | 4.59 µs   | 5.36 µs   | 5.36 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 53.46 µs/iter (53,456)   | 45.8 µs  | 49.6 µs   | 93.3 µs   | 1.27 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.68 ns/iter (128.676) | 123.44 ns | 127.88 ns | 142.65 ns | 162.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 140.85 ns/iter (140.848) | 135.81 ns | 139.71 ns | 154.03 ns | 157.2 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 379.94 ns/iter (379.936) | 369.84 ns | 388.8 ns  | 421.32 ns | 514.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 400.07 ns/iter (400.069) | 392.98 ns | 399.06 ns | 424.5 ns  | 424.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 402.13 ns/iter (402.128) | 394.68 ns | 400.68 ns | 435.87 ns | 448.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 403.22 ns/iter (403.217) | 394.45 ns | 401.73 ns | 434.44 ns | 437.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 404.81 ns/iter (404.812) | 396.55 ns | 403.86 ns | 432.33 ns | 432.74 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 405.58 ns/iter (405.582) | 398.68 ns | 403.94 ns | 433.78 ns | 439.32 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 464.5 ns/iter (464.504)  | 458.6 ns  | 469.44 ns | 489.44 ns | 494.89 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 466.2 ns/iter (466.2)    | 454.43 ns | 477.63 ns | 528.71 ns | 580.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 466.56 ns/iter (466.565) | 459.78 ns | 465.68 ns | 495.57 ns | 566.07 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 470.94 ns/iter (470.941) | 457.34 ns | 471.28 ns | 523.15 ns | 532.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 478.27 ns/iter (478.266) | 467.28 ns | 481.55 ns | 514.78 ns | 528.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 479.19 ns/iter (479.195) | 463.18 ns | 469.88 ns | 972.37 ns | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 484.2 ns/iter (484.204)  | 468.32 ns | 481.15 ns | 688.52 ns | 1.15 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 489.41 ns/iter (489.409) | 480.92 ns | 488.24 ns | 515.28 ns | 519.51 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 490.69 ns/iter (490.688) | 483.97 ns | 489.52 ns | 525.78 ns | 653.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 496.06 ns/iter (496.063) | 490.97 ns | 496.12 ns | 508.46 ns | 512.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 509.44 ns/iter (509.438) | 499.23 ns | 509.1 ns  | 540.36 ns | 540.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 532 ns/iter (532.004)    | 516.56 ns | 532.73 ns | 560.15 ns | 564.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 541.33 ns/iter (541.326) | 535.1 ns  | 539.24 ns | 572.88 ns | 584.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 544.8 ns/iter (544.799)  | 532.53 ns | 544.91 ns | 570.54 ns | 570.82 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 609.76 ns/iter (609.763) | 598.95 ns | 620.25 ns | 663.48 ns | 663.48 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 626.59 ns/iter (626.593) | 610.92 ns | 632.95 ns | 1.03 µs   | 1.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 630.6 ns/iter (630.596)  | 617.79 ns | 637.93 ns | 749.54 ns | 749.54 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 646.21 ns/iter (646.207) | 632.87 ns | 657.37 ns | 698.84 ns | 698.84 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 706.06 ns/iter (706.062) | 695.14 ns | 716.13 ns | 729.89 ns | 729.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 946.19 ns/iter (946.189) | 841.21 ns | 858.38 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 947.4 ns/iter (947.403)  | 837.56 ns | 856.35 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 973.67 ns/iter (973.667) | 851.37 ns | 894.27 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 983.97 ns/iter (983.965) | 881.29 ns | 902.74 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 996.75 ns/iter (996.747) | 888.98 ns | 907.25 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1 µs/iter (1,000.053)    | 892.41 ns | 917.5 ns  | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.01 µs/iter (1,008.046) | 896.28 ns | 922.29 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.01 µs/iter (1,008.587) | 893.69 ns | 917.2 ns  | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.01 µs/iter (1,014.225) | 894.64 ns | 924.61 ns | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.02 µs/iter (1,021.013) | 890.56 ns | 939.86 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.03 µs/iter (1,033.219) | 899.63 ns | 960.87 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.04 µs/iter (1,036.62)  | 870.55 ns | 910.37 ns | 3.19 µs   | 3.19 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.06 µs/iter (1,060.69)  | 949.08 ns | 973.72 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.07 µs/iter (1,066.523) | 957.42 ns | 981.34 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.07 µs/iter (1,074.73)  | 958.88 ns | 983.47 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.08 µs/iter (1,078.301) | 956.94 ns | 986.61 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.11 µs/iter (1,110.644) | 963.68 ns | 1.03 µs   | 1.82 µs   | 1.82 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.12 µs/iter (1,118.075) | 966.44 ns | 992.07 ns | 2.62 µs   | 2.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.16 µs/iter (1,157.065) | 1.14 µs   | 1.17 µs   | 1.21 µs   | 1.21 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.24 µs/iter (1,236.855) | 1.19 µs   | 1.25 µs   | 1.79 µs   | 1.79 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.24 µs/iter (1,243.698) | 1.18 µs   | 1.28 µs   | 1.36 µs   | 1.36 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.25 µs/iter (1,254.603) | 1.21 µs   | 1.27 µs   | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.28 µs/iter (1,278.999) | 1.19 µs   | 1.3 µs    | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.29 µs/iter (1,293.731) | 1.24 µs   | 1.31 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.3 µs/iter (1,303.569)  | 1.19 µs   | 1.33 µs   | 2.35 µs   | 2.35 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.33 µs/iter (1,332.267) | 1.18 µs   | 1.35 µs   | 2.16 µs   | 2.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.37 µs/iter (1,368.164) | 1.17 µs   | 1.51 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.37 µs/iter (1,374.406) | 1.35 µs   | 1.38 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.42 µs/iter (1,423.902) | 1.33 µs   | 1.44 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.44 µs/iter (1,437.069) | 1.32 µs   | 1.44 µs   | 2.23 µs   | 2.23 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.5 µs/iter (1,498.074)  | 1.48 µs   | 1.51 µs   | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.76 µs/iter (1,762.136) | 1.74 µs   | 1.78 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.82 µs/iter (1,816.303) | 1.62 µs   | 1.79 µs   | 3.35 µs   | 3.35 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.55 µs/iter (3,552.521) | 3.54 µs   | 3.56 µs   | 3.6 µs    | 3.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.13 µs/iter (4,134.14)  | 2.93 µs   | 4.59 µs   | 5.36 µs   | 5.36 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.78 µs/iter (9,776)     | 6.8 µs    | 9.7 µs    | 16.3 µs   | 557.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 10.01 µs/iter (10,011)   | 6.9 µs    | 9.9 µs    | 17.3 µs   | 776.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.21 µs/iter (11,213)   | 6.8 µs    | 11 µs     | 22 µs     | 3 ms      |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 11.35 µs/iter (11,350)   | 7 µs      | 11.2 µs   | 20.8 µs   | 1.19 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 11.37 µs/iter (11,366)   | 7.1 µs    | 11.2 µs   | 21.7 µs   | 553.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.38 µs/iter (11,381)   | 7.2 µs    | 11.4 µs   | 20.8 µs   | 549.41 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 12.69 µs/iter (12,689)   | 9.7 µs    | 12.2 µs   | 26.2 µs   | 247.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 13.05 µs/iter (13,048)   | 9.8 µs    | 12.5 µs   | 29.2 µs   | 926.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 13.7 µs/iter (13,699)    | 8.5 µs    | 13.3 µs   | 34 µs     | 2.84 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 13.85 µs/iter (13,845)   | 9.6 µs    | 13.7 µs   | 32.7 µs   | 927.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 13.85 µs/iter (13,850)   | 8.4 µs    | 13.5 µs   | 33.6 µs   | 2.89 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.61 µs/iter (17,615)   | 10.4 µs   | 16.6 µs   | 37.4 µs   | 901.71 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 17.73 µs/iter (17,727)   | 16.1 µs   | 17.6 µs   | 30.4 µs   | 439.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 17.83 µs/iter (17,832)   | 10.3 µs   | 16.5 µs   | 44.3 µs   | 2.33 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 18.57 µs/iter (18,570)   | 9.1 µs    | 16.9 µs   | 34.9 µs   | 3.72 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.41 µs/iter (19,406)   | 16.9 µs   | 18.1 µs   | 45.8 µs   | 251.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.66 µs/iter (19,658)   | 17 µs     | 18.2 µs   | 57.2 µs   | 325.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 19.93 µs/iter (19,929)   | 17.4 µs   | 19.4 µs   | 33.7 µs   | 288.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.31 µs/iter (20,312)   | 16.3 µs   | 19.7 µs   | 38.4 µs   | 539.81 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.02 µs/iter (22,021)   | 18.9 µs   | 20.1 µs   | 133.8 µs  | 762.41 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.54 µs/iter (22,541)   | 18.6 µs   | 20.6 µs   | 120.6 µs  | 214.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.72 µs/iter (22,723)   | 18.2 µs   | 20.6 µs   | 121.4 µs  | 939.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 23.08 µs/iter (23,084)   | 20 µs     | 22.7 µs   | 36.3 µs   | 286.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 23.39 µs/iter (23,393)   | 10.7 µs   | 21.4 µs   | 78.7 µs   | 2.02 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 26.14 µs/iter (26,142)   | 11.5 µs   | 23 µs     | 227.2 µs  | 1.89 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 28 µs/iter (27,999)      | 22.4 µs   | 26.6 µs   | 49.8 µs   | 1.55 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 46.19 µs/iter (46,192)   | 41.4 µs   | 45.6 µs   | 83.1 µs   | 310.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 53.46 µs/iter (53,456)   | 45.8 µs   | 49.6 µs   | 93.3 µs   | 1.27 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 55.23 µs/iter (55,232)   | 51.4 µs   | 53.4 µs   | 168.6 µs  | 531.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 57.57 µs/iter (57,570)   | 40.7 µs   | 44.6 µs   | 561.51 µs | 1.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 67.2 µs/iter (67,197)    | 63 µs     | 66.2 µs   | 195 µs    | 243.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 131.2 µs/iter (131,197)  | 121.7 µs  | 133.3 µs  | 167.6 µs  | 1.58 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 274.18 µs/iter (274,175) | 262.31 µs | 268.41 µs | 752.42 µs | 1 ms      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 807.11 µs/iter (807,109) | 719.61 µs | 758.41 µs | 1.37 ms   | 1.47 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 822.5 µs/iter (822,500)  | 731.11 µs | 902.71 µs | 1.07 ms   | 1.23 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 826.66 µs/iter (826,658) | 724.01 µs | 759.71 µs | 1.99 ms   | 2.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 857.85 µs/iter (857,847) | 769.11 µs | 800.51 µs | 1.94 ms   | 2.27 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 859.1 µs/iter (859,100)  | 768.71 µs | 801.01 µs | 1.89 ms   | 1.95 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 926.84 µs/iter (926,840) | 807.11 µs | 873.41 µs | 1.99 ms   | 2.3 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 990.88 µs/iter (990,879) | 896.61 µs | 930.41 µs | 1.92 ms   | 1.97 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.32 ms/iter (1,323,595) | 1.16 ms   | 1.24 ms   | 2.55 ms   | 2.73 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.37 ms/iter (1,372,840) | 1.2 ms    | 1.24 ms   | 4.04 ms   | 4.32 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.41 ms/iter (1,409,473) | 1.24 ms   | 1.28 ms   | 2.94 ms   | 3.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.55 ms/iter (1,554,988) | 1.34 ms   | 1.41 ms   | 4.56 ms   | 9.97 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.58 ms/iter (1,579,516) | 1.41 ms   | 1.44 ms   | 4.52 ms   | 4.65 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.58 ms/iter (1,582,950) | 1.4 ms    | 1.44 ms   | 4.59 ms   | 4.72 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                   | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------- | ------------------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | http      | 86.39 µs/rps (86,387.134) | 11.48 µs | 89.89 µs | 92.11 µs | 94.67 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 47.67 µs/rps (47,671.06)  | 4.28 µs  | 50.02 µs | 50.93 µs | 51.28 µs |
| node v18.7.0 (x64-linux)               | http      | 42.2 µs/rps (42,204.524)  | 4.98 µs  | 43.71 µs | 44.72 µs | 45.39 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 157.81 ns/iter (157.806) | 151.66 ns | 154.5 ns  | 215.25 ns | 379.73 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.23 ns/iter (307.234) | 301.21 ns | 309.88 ns | 331.35 ns | 335.71 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.34 ns/iter (321.342) | 315.95 ns | 324.01 ns | 353 ns    | 384.91 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.73 ns/iter (238.727) | 234.04 ns | 241.86 ns | 258.65 ns | 264.58 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 249.38 ns/iter (249.385) | 240.51 ns | 250.83 ns | 263.44 ns | 279.18 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 385.2 ns/iter (385.203)  | 358.21 ns | 385.62 ns | 463.63 ns | 482.43 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 157.81 ns/iter (157.806) | 151.66 ns | 154.5 ns  | 215.25 ns | 379.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.73 ns/iter (238.727) | 234.04 ns | 241.86 ns | 258.65 ns | 264.58 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 249.38 ns/iter (249.385) | 240.51 ns | 250.83 ns | 263.44 ns | 279.18 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.23 ns/iter (307.234) | 301.21 ns | 309.88 ns | 331.35 ns | 335.71 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.34 ns/iter (321.342) | 315.95 ns | 324.01 ns | 353 ns    | 384.91 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 385.2 ns/iter (385.203)  | 358.21 ns | 385.62 ns | 463.63 ns | 482.43 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 646.3 ns/iter (646.301)  | 540.96 ns | 687.94 ns | 705.35 ns | 705.35 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.41 µs/iter (1,412.751) | 1.36 µs   | 1.43 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.83 µs/iter (1,831.102) | 1.78 µs   | 1.82 µs   | 2.1 µs    | 2.1 µs    |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.21 µs/iter (2,207.147) | 1.91 µs | 2.25 µs | 2.78 µs | 2.78 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.58 µs/iter (4,583)     | 2.6 µs  | 6.5 µs  | 9.5 µs  | 3.15 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.09 µs/iter (12,090)   | 6.8 µs  | 12.5 µs | 14.9 µs | 369.61 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter (2,271.971) | 2.05 µs | 2.3 µs  | 2.82 µs | 2.82 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.12 µs/iter (7,121)     | 4.5 µs  | 8.5 µs  | 12.7 µs | 2.06 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19 µs/iter (19,000)      | 12.2 µs | 18.9 µs | 23 µs   | 378.91 µs |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.21 µs/iter (2,207.147) | 1.91 µs | 2.25 µs | 2.78 µs | 2.78 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter (2,271.971) | 2.05 µs | 2.3 µs  | 2.82 µs | 2.82 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.58 µs/iter (4,583)     | 2.6 µs  | 6.5 µs  | 9.5 µs  | 3.15 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.12 µs/iter (7,121)     | 4.5 µs  | 8.5 µs  | 12.7 µs | 2.06 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.09 µs/iter (12,090)   | 6.8 µs  | 12.5 µs | 14.9 µs | 369.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19 µs/iter (19,000)      | 12.2 µs | 18.9 µs | 23 µs   | 378.91 µs |

