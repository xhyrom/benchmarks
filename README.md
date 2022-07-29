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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 471.55 ns/iter (471.553) | 456.42 ns | 478.09 ns | 515.21 ns | 593.15 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.04 µs/iter (1,040.268) | 867.43 ns | 987.77 ns | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.51 µs/iter (1,507.904) | 1.36 µs   | 1.52 µs   | 2.38 µs   | 2.38 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 495.86 ns/iter (495.864) | 476.31 ns | 497.53 ns | 529.06 ns | 1.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 970.21 ns/iter (970.213) | 843.6 ns  | 897.33 ns | 1.81 µs   | 1.81 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.62 µs/iter (1,621.324) | 1.43 µs   | 1.64 µs   | 2.43 µs   | 2.43 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 475.4 ns/iter (475.402)  | 466.87 ns | 480.64 ns | 500.24 ns | 518.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.06 µs/iter (1,059.875) | 920.66 ns | 970.79 ns | 1.95 µs   | 1.95 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.53 µs/iter (1,532.536) | 1.44 µs   | 1.56 µs   | 2.11 µs   | 2.11 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 477.27 ns/iter (477.267) | 465.54 ns | 481.63 ns | 536.41 ns | 548.67 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.07 µs/iter (1,065.265) | 920.19 ns | 961.42 ns | 1.94 µs   | 1.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.5 µs/iter (1,503.829)  | 1.42 µs   | 1.53 µs   | 1.67 µs   | 1.67 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 498.71 ns/iter (498.705) | 490.24 ns | 499.61 ns | 527.78 ns | 528.78 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.14 µs/iter (1,142.948) | 966.27 ns | 1.04 µs   | 2.09 µs   | 2.09 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.58 µs/iter (1,582.789) | 1.48 µs   | 1.6 µs    | 1.69 µs   | 1.69 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 493.92 ns/iter (493.923) | 486.1 ns  | 494.62 ns | 527.27 ns | 595.33 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.14 µs/iter (1,141.613) | 966.23 ns | 1.05 µs   | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.93 µs/iter (1,933.374) | 1.77 µs   | 1.97 µs   | 2.44 µs   | 2.44 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 473.4 ns/iter (473.403)  | 465.69 ns | 475.8 ns  | 498.86 ns | 502.25 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.07 µs/iter (1,069.456) | 928.98 ns | 972.99 ns | 1.94 µs   | 1.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.56 µs/iter (1,557.17)  | 1.39 µs   | 1.56 µs   | 2.85 µs   | 2.85 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 475.83 ns/iter (475.833) | 456.88 ns | 482.29 ns | 499.13 ns | 513.28 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.09 µs/iter (1,090.767) | 931.78 ns | 979.1 ns  | 2.02 µs   | 2.02 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.56 µs/iter (1,556.317) | 1.39 µs   | 1.6 µs    | 2.05 µs   | 2.05 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 487.57 ns/iter (487.574) | 469.29 ns | 494.73 ns | 511.71 ns | 512.02 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.02 µs/iter (1,023.273) | 898.69 ns | 934.46 ns | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.6 µs/iter (1,603.43)   | 1.46 µs   | 1.63 µs   | 2.53 µs   | 2.53 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                 | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ----------------------- | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 16.2 µs/iter (16,197)   | 6.9 µs    | 15.3 µs   | 36.2 µs  | 795.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 24.95 µs/iter (24,947)  | 19.6 µs   | 23.2 µs   | 129.8 µs | 944.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 901.7 µs/iter (901,704) | 775.52 µs | 971.61 µs | 1.25 ms  | 1.27 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 18.17 µs/iter (18,172)   | 9 µs    | 16.8 µs | 44.2 µs  | 2.49 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 24.52 µs/iter (24,522)   | 19.2 µs | 22.6 µs | 126.4 µs | 894.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.42 ms/iter (1,417,821) | 1.21 ms | 1.31 ms | 2.97 ms  | 3.11 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.67 µs/iter (13,671)   | 8.2 µs    | 13.3 µs   | 27.5 µs | 1.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 23.77 µs/iter (23,766)   | 17.9 µs   | 22.4 µs   | 73.6 µs | 547.31 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 853.27 µs/iter (853,275) | 732.12 µs | 789.62 µs | 1.58 ms | 1.61 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 13.7 µs/iter (13,702)    | 8.2 µs    | 13.3 µs   | 29.3 µs | 1.86 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 23.22 µs/iter (23,221)   | 17.8 µs   | 22 µs     | 55.1 µs | 596.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 858.16 µs/iter (858,159) | 728.02 µs | 786.92 µs | 2.15 ms | 2.33 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 14.98 µs/iter (14,985)   | 8.9 µs    | 14.3 µs   | 34.6 µs  | 702.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 28.67 µs/iter (28,674)   | 21.3 µs   | 27.7 µs   | 156.8 µs | 1.22 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.04 ms/iter (1,038,457) | 911.32 µs | 966.92 µs | 2.22 ms  | 2.3 ms    |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 59.7 µs/iter (59,697)    | 41.3 µs | 45.3 µs | 609.11 µs | 700.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 61.4 µs/iter (61,404)    | 56.2 µs | 58.5 µs | 238.7 µs  | 572.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.47 ms/iter (1,467,442) | 1.26 ms | 1.34 ms | 3.13 ms   | 3.21 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 16.41 µs/iter (16,409)   | 9.1 µs    | 15.6 µs   | 35.8 µs | 708.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 23.29 µs/iter (23,292)   | 18.3 µs   | 21.9 µs   | 52.3 µs | 317 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 902.15 µs/iter (902,153) | 778.62 µs | 831.92 µs | 2.28 ms | 2.32 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 16.39 µs/iter (16,395)   | 7.6 µs    | 15.5 µs   | 36.1 µs | 1.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 25.1 µs/iter (25,098)    | 19 µs     | 24.1 µs   | 53.5 µs | 648.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 895.93 µs/iter (895,932) | 784.81 µs | 826.41 µs | 2.23 ms | 2.4 ms    |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 76.18 µs/iter (76,177)   | 70.1 µs   | 73.1 µs   | 335.1 µs | 400 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 277.51 µs/iter (277,511) | 263.7 µs  | 270.4 µs  | 368.3 µs | 1.13 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 927.47 µs/iter (927,468) | 818.81 µs | 856.81 µs | 2.27 ms  | 2.32 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 406.27 ns/iter (406.265) | 394.95 ns | 402.79 ns | 455.98 ns | 456.17 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 651.58 ns/iter (651.579) | 630.49 ns | 668.31 ns | 849.37 ns | 849.37 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.01 µs/iter (1,008.692) | 869.02 ns | 893.55 ns | 1.92 µs   | 1.92 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 498.23 ns/iter (498.234) | 486.61 ns | 495.89 ns | 544.81 ns | 546.47 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.02 µs/iter (1,020.234) | 892.29 ns | 911.38 ns | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.62 µs/iter (1,623.675) | 1.21 µs   | 1.76 µs   | 2.01 µs   | 2.01 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 405.37 ns/iter (405.367) | 394.52 ns | 403.21 ns | 447.95 ns | 450.13 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 639.1 ns/iter (639.105)  | 616.57 ns | 651.65 ns | 1.05 µs   | 1.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.09 µs/iter (1,094.653) | 968.36 ns | 993.58 ns | 1.89 µs   | 1.89 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 407.47 ns/iter (407.471) | 395.93 ns | 404.35 ns | 451.8 ns  | 451.99 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 627.68 ns/iter (627.683) | 609.66 ns | 646.76 ns | 702.36 ns | 702.36 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.04 µs/iter (1,036.025) | 922.11 ns | 941.35 ns | 1.81 µs   | 1.81 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 505.33 ns/iter (505.327) | 469.89 ns | 521.22 ns | 562.97 ns | 571.43 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.04 µs/iter (1,044.671) | 916.6 ns  | 954.12 ns | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.65 µs/iter (1,654.175) | 1.63 µs   | 1.67 µs   | 1.78 µs   | 1.78 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 481.38 ns/iter (481.375) | 465.71 ns | 481.21 ns | 530.63 ns | 531.37 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.12 µs/iter (1,119.065) | 980.55 ns | 1 µs      | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.92 µs/iter (1,921.512) | 1.89 µs   | 1.93 µs   | 2.09 µs   | 2.09 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 407.43 ns/iter (407.426) | 394.85 ns | 402.85 ns | 449.51 ns | 576.56 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 662.43 ns/iter (662.432) | 645.26 ns | 681.2 ns  | 701.07 ns | 701.07 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.01 µs/iter (1,007.062) | 878 ns    | 897.55 ns | 1.84 µs   | 1.84 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 419.13 ns/iter (419.132) | 409.08 ns | 416.56 ns | 462.73 ns | 462.87 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 662.79 ns/iter (662.793) | 646.79 ns | 681.9 ns  | 687.35 ns | 687.35 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.04 µs/iter (1,042.412) | 923.33 ns | 939.01 ns | 1.86 µs   | 1.86 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 477.79 ns/iter (477.793) | 451.34 ns | 489.35 ns | 536.09 ns | 537.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 964.3 ns/iter (964.299)  | 832.56 ns | 859.97 ns | 1.76 µs   | 1.76 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.13 µs/iter (1,127.727) | 1.1 µs    | 1.15 µs   | 1.18 µs   | 1.18 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 17.7 µs/iter (17,697)    | 12.4 µs | 16.9 µs | 41.2 µs | 448.5 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 21.09 µs/iter (21,089)   | 9.2 µs  | 18 µs   | 52.8 µs | 6.11 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.62 ms/iter (1,617,709) | 1.39 ms | 1.46 ms | 5.04 ms | 5.24 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 18.34 µs/iter (18,339)   | 12.6 µs | 16.8 µs | 43.1 µs | 1.39 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 29.32 µs/iter (29,325)   | 22.3 µs | 28.1 µs | 56.4 µs | 410.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.42 ms/iter (1,418,029) | 1.22 ms | 1.28 ms | 4.44 ms | 4.83 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.65 µs/iter (1,645.321) | 1.58 µs | 1.67 µs | 1.77 µs  | 1.77 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.65 µs/iter (37,651)   | 12.1 µs | 31.6 µs | 144.9 µs | 9.38 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 48.41 µs/iter (48,405)   | 42 µs   | 47 µs   | 83.2 µs  | 490.7 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 171.74 ns/iter (171.745) | 161.09 ns | 169.02 ns | 200.02 ns | 210.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 398.79 ns/iter (398.786) | 368.68 ns | 406.09 ns | 468.58 ns | 571.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 35.3 µs/iter (35,298)    | 14 µs     | 31.1 µs   | 125.9 µs  | 1.46 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.58 µs/iter (3,579.718) | 3.54 µs | 3.58 µs | 3.65 µs | 3.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 18.93 µs/iter (18,927)   | 16.6 µs | 19 µs   | 28.6 µs | 702.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 32.36 µs/iter (32,360)   | 26.2 µs | 29.7 µs | 67 µs   | 1.66 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 137.63 ns/iter (137.627) | 127.71 ns | 135.09 ns | 170 ns   | 191.42 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.43 µs/iter (1,426.712) | 1.41 µs   | 1.44 µs   | 1.49 µs  | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 133.56 µs/iter (133,559) | 123.1 µs  | 141 µs    | 171.8 µs | 1.79 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 18.47 µs/iter (18,474)   | 12.9 µs | 17.6 µs | 42.7 µs | 418 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 20.42 µs/iter (20,419)   | 12 µs   | 17.8 µs | 53.1 µs | 2.71 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.63 ms/iter (1,631,588) | 1.43 ms | 1.48 ms | 5.04 ms | 5.48 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 18.7 µs/iter (18,705)    | 13.2 µs | 17.7 µs | 43.2 µs | 447.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 19.49 µs/iter (19,488)   | 12 µs   | 17.7 µs | 48.6 µs | 4.68 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.63 ms/iter (1,634,846) | 1.43 ms | 1.48 ms | 5.05 ms | 5.12 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 557.25 ns/iter (557.249) | 535.52 ns | 566.04 ns | 602.79 ns | 611.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 5.22 µs/iter (5,217.282) | 3.49 µs   | 5.74 µs   | 6.1 µs    | 6.1 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 53.8 µs/iter (53,799)    | 47.5 µs   | 50.4 µs   | 83.1 µs   | 1.64 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 137.63 ns/iter (137.627) | 127.71 ns | 135.09 ns | 170 ns    | 191.42 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 171.74 ns/iter (171.745) | 161.09 ns | 169.02 ns | 200.02 ns | 210.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 398.79 ns/iter (398.786) | 368.68 ns | 406.09 ns | 468.58 ns | 571.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 405.37 ns/iter (405.367) | 394.52 ns | 403.21 ns | 447.95 ns | 450.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 406.27 ns/iter (406.265) | 394.95 ns | 402.79 ns | 455.98 ns | 456.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 407.43 ns/iter (407.426) | 394.85 ns | 402.85 ns | 449.51 ns | 576.56 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 407.47 ns/iter (407.471) | 395.93 ns | 404.35 ns | 451.8 ns  | 451.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 419.13 ns/iter (419.132) | 409.08 ns | 416.56 ns | 462.73 ns | 462.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 471.55 ns/iter (471.553) | 456.42 ns | 478.09 ns | 515.21 ns | 593.15 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 473.4 ns/iter (473.403)  | 465.69 ns | 475.8 ns  | 498.86 ns | 502.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 475.4 ns/iter (475.402)  | 466.87 ns | 480.64 ns | 500.24 ns | 518.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 475.83 ns/iter (475.833) | 456.88 ns | 482.29 ns | 499.13 ns | 513.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 477.27 ns/iter (477.267) | 465.54 ns | 481.63 ns | 536.41 ns | 548.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 477.79 ns/iter (477.793) | 451.34 ns | 489.35 ns | 536.09 ns | 537.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 481.38 ns/iter (481.375) | 465.71 ns | 481.21 ns | 530.63 ns | 531.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 487.57 ns/iter (487.574) | 469.29 ns | 494.73 ns | 511.71 ns | 512.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 493.92 ns/iter (493.923) | 486.1 ns  | 494.62 ns | 527.27 ns | 595.33 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 495.86 ns/iter (495.864) | 476.31 ns | 497.53 ns | 529.06 ns | 1.2 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 498.23 ns/iter (498.234) | 486.61 ns | 495.89 ns | 544.81 ns | 546.47 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 498.71 ns/iter (498.705) | 490.24 ns | 499.61 ns | 527.78 ns | 528.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 505.33 ns/iter (505.327) | 469.89 ns | 521.22 ns | 562.97 ns | 571.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 557.25 ns/iter (557.249) | 535.52 ns | 566.04 ns | 602.79 ns | 611.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 627.68 ns/iter (627.683) | 609.66 ns | 646.76 ns | 702.36 ns | 702.36 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 639.1 ns/iter (639.105)  | 616.57 ns | 651.65 ns | 1.05 µs   | 1.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 651.58 ns/iter (651.579) | 630.49 ns | 668.31 ns | 849.37 ns | 849.37 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 662.43 ns/iter (662.432) | 645.26 ns | 681.2 ns  | 701.07 ns | 701.07 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 662.79 ns/iter (662.793) | 646.79 ns | 681.9 ns  | 687.35 ns | 687.35 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 964.3 ns/iter (964.299)  | 832.56 ns | 859.97 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 970.21 ns/iter (970.213) | 843.6 ns  | 897.33 ns | 1.81 µs   | 1.81 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.01 µs/iter (1,007.062) | 878 ns    | 897.55 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.01 µs/iter (1,008.692) | 869.02 ns | 893.55 ns | 1.92 µs   | 1.92 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.02 µs/iter (1,020.234) | 892.29 ns | 911.38 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.02 µs/iter (1,023.273) | 898.69 ns | 934.46 ns | 1.87 µs   | 1.87 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.04 µs/iter (1,036.025) | 922.11 ns | 941.35 ns | 1.81 µs   | 1.81 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.04 µs/iter (1,040.268) | 867.43 ns | 987.77 ns | 1.87 µs   | 1.87 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.04 µs/iter (1,042.412) | 923.33 ns | 939.01 ns | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.04 µs/iter (1,044.671) | 916.6 ns  | 954.12 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.06 µs/iter (1,059.875) | 920.66 ns | 970.79 ns | 1.95 µs   | 1.95 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.07 µs/iter (1,065.265) | 920.19 ns | 961.42 ns | 1.94 µs   | 1.94 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.07 µs/iter (1,069.456) | 928.98 ns | 972.99 ns | 1.94 µs   | 1.94 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.09 µs/iter (1,090.767) | 931.78 ns | 979.1 ns  | 2.02 µs   | 2.02 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.09 µs/iter (1,094.653) | 968.36 ns | 993.58 ns | 1.89 µs   | 1.89 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.12 µs/iter (1,119.065) | 980.55 ns | 1 µs      | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.13 µs/iter (1,127.727) | 1.1 µs    | 1.15 µs   | 1.18 µs   | 1.18 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.14 µs/iter (1,141.613) | 966.23 ns | 1.05 µs   | 2.03 µs   | 2.03 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.14 µs/iter (1,142.948) | 966.27 ns | 1.04 µs   | 2.09 µs   | 2.09 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.43 µs/iter (1,426.712) | 1.41 µs   | 1.44 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.5 µs/iter (1,503.829)  | 1.42 µs   | 1.53 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.51 µs/iter (1,507.904) | 1.36 µs   | 1.52 µs   | 2.38 µs   | 2.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.53 µs/iter (1,532.536) | 1.44 µs   | 1.56 µs   | 2.11 µs   | 2.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.56 µs/iter (1,556.317) | 1.39 µs   | 1.6 µs    | 2.05 µs   | 2.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.56 µs/iter (1,557.17)  | 1.39 µs   | 1.56 µs   | 2.85 µs   | 2.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.58 µs/iter (1,582.789) | 1.48 µs   | 1.6 µs    | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.6 µs/iter (1,603.43)   | 1.46 µs   | 1.63 µs   | 2.53 µs   | 2.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.62 µs/iter (1,621.324) | 1.43 µs   | 1.64 µs   | 2.43 µs   | 2.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.62 µs/iter (1,623.675) | 1.21 µs   | 1.76 µs   | 2.01 µs   | 2.01 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.65 µs/iter (1,645.321) | 1.58 µs   | 1.67 µs   | 1.77 µs   | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.65 µs/iter (1,654.175) | 1.63 µs   | 1.67 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.92 µs/iter (1,921.512) | 1.89 µs   | 1.93 µs   | 2.09 µs   | 2.09 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.93 µs/iter (1,933.374) | 1.77 µs   | 1.97 µs   | 2.44 µs   | 2.44 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.58 µs/iter (3,579.718) | 3.54 µs   | 3.58 µs   | 3.65 µs   | 3.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 5.22 µs/iter (5,217.282) | 3.49 µs   | 5.74 µs   | 6.1 µs    | 6.1 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.67 µs/iter (13,671)   | 8.2 µs    | 13.3 µs   | 27.5 µs   | 1.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 13.7 µs/iter (13,702)    | 8.2 µs    | 13.3 µs   | 29.3 µs   | 1.86 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 14.98 µs/iter (14,985)   | 8.9 µs    | 14.3 µs   | 34.6 µs   | 702.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 16.2 µs/iter (16,197)    | 6.9 µs    | 15.3 µs   | 36.2 µs   | 795.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 16.39 µs/iter (16,395)   | 7.6 µs    | 15.5 µs   | 36.1 µs   | 1.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 16.41 µs/iter (16,409)   | 9.1 µs    | 15.6 µs   | 35.8 µs   | 708.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 17.7 µs/iter (17,697)    | 12.4 µs   | 16.9 µs   | 41.2 µs   | 448.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 18.17 µs/iter (18,172)   | 9 µs      | 16.8 µs   | 44.2 µs   | 2.49 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 18.34 µs/iter (18,339)   | 12.6 µs   | 16.8 µs   | 43.1 µs   | 1.39 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 18.47 µs/iter (18,474)   | 12.9 µs   | 17.6 µs   | 42.7 µs   | 418 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 18.7 µs/iter (18,705)    | 13.2 µs   | 17.7 µs   | 43.2 µs   | 447.81 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 18.93 µs/iter (18,927)   | 16.6 µs   | 19 µs     | 28.6 µs   | 702.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 19.49 µs/iter (19,488)   | 12 µs     | 17.7 µs   | 48.6 µs   | 4.68 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 20.42 µs/iter (20,419)   | 12 µs     | 17.8 µs   | 53.1 µs   | 2.71 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 21.09 µs/iter (21,089)   | 9.2 µs    | 18 µs     | 52.8 µs   | 6.11 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 23.22 µs/iter (23,221)   | 17.8 µs   | 22 µs     | 55.1 µs   | 596.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 23.29 µs/iter (23,292)   | 18.3 µs   | 21.9 µs   | 52.3 µs   | 317 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 23.77 µs/iter (23,766)   | 17.9 µs   | 22.4 µs   | 73.6 µs   | 547.31 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 24.52 µs/iter (24,522)   | 19.2 µs   | 22.6 µs   | 126.4 µs  | 894.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 24.95 µs/iter (24,947)   | 19.6 µs   | 23.2 µs   | 129.8 µs  | 944.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 25.1 µs/iter (25,098)    | 19 µs     | 24.1 µs   | 53.5 µs   | 648.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 28.67 µs/iter (28,674)   | 21.3 µs   | 27.7 µs   | 156.8 µs  | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 29.32 µs/iter (29,325)   | 22.3 µs   | 28.1 µs   | 56.4 µs   | 410.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 32.36 µs/iter (32,360)   | 26.2 µs   | 29.7 µs   | 67 µs     | 1.66 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 35.3 µs/iter (35,298)    | 14 µs     | 31.1 µs   | 125.9 µs  | 1.46 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.65 µs/iter (37,651)   | 12.1 µs   | 31.6 µs   | 144.9 µs  | 9.38 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 48.41 µs/iter (48,405)   | 42 µs     | 47 µs     | 83.2 µs   | 490.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 53.8 µs/iter (53,799)    | 47.5 µs   | 50.4 µs   | 83.1 µs   | 1.64 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 59.7 µs/iter (59,697)    | 41.3 µs   | 45.3 µs   | 609.11 µs | 700.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 61.4 µs/iter (61,404)    | 56.2 µs   | 58.5 µs   | 238.7 µs  | 572.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 76.18 µs/iter (76,177)   | 70.1 µs   | 73.1 µs   | 335.1 µs  | 400 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 133.56 µs/iter (133,559) | 123.1 µs  | 141 µs    | 171.8 µs  | 1.79 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 277.51 µs/iter (277,511) | 263.7 µs  | 270.4 µs  | 368.3 µs  | 1.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 853.27 µs/iter (853,275) | 732.12 µs | 789.62 µs | 1.58 ms   | 1.61 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 858.16 µs/iter (858,159) | 728.02 µs | 786.92 µs | 2.15 ms   | 2.33 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 895.93 µs/iter (895,932) | 784.81 µs | 826.41 µs | 2.23 ms   | 2.4 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 901.7 µs/iter (901,704)  | 775.52 µs | 971.61 µs | 1.25 ms   | 1.27 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 902.15 µs/iter (902,153) | 778.62 µs | 831.92 µs | 2.28 ms   | 2.32 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 927.47 µs/iter (927,468) | 818.81 µs | 856.81 µs | 2.27 ms   | 2.32 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.04 ms/iter (1,038,457) | 911.32 µs | 966.92 µs | 2.22 ms   | 2.3 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.42 ms/iter (1,417,821) | 1.21 ms   | 1.31 ms   | 2.97 ms   | 3.11 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.42 ms/iter (1,418,029) | 1.22 ms   | 1.28 ms   | 4.44 ms   | 4.83 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.47 ms/iter (1,467,442) | 1.26 ms   | 1.34 ms   | 3.13 ms   | 3.21 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.62 ms/iter (1,617,709) | 1.39 ms   | 1.46 ms   | 5.04 ms   | 5.24 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.63 ms/iter (1,631,588) | 1.43 ms   | 1.48 ms   | 5.04 ms   | 5.48 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.63 ms/iter (1,634,846) | 1.43 ms   | 1.48 ms   | 5.05 ms   | 5.12 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------- | -------------------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | http      | 81.48 µs/iter (81,477.031) | 11.23 µs | 85.21 µs | 87.29 µs | 88.29 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 45.96 µs/iter (45,957.406) | 4.53 µs  | 48.57 µs | 49.27 µs | 49.54 µs |
| node v18.7.0 (x64-linux)               | http      | 37.47 µs/iter (37,473.75)  | 4.64 µs  | 38.95 µs | 39.95 µs | 40.67 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 161.19 ns/iter (161.186) | 154.08 ns | 158.27 ns | 216.06 ns | 307.96 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.4 ns/iter (315.405)  | 304.66 ns | 323.58 ns | 346.04 ns | 351.92 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.5 ns/iter (324.504)  | 316.25 ns | 326.81 ns | 372.82 ns | 392.57 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 245.06 ns/iter (245.056) | 235.86 ns | 253.53 ns | 279.33 ns | 303.93 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 257.98 ns/iter (257.979) | 241.25 ns | 257.11 ns | 275.32 ns | 981.69 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 386.53 ns/iter (386.533) | 356.99 ns | 389.19 ns | 473.3 ns  | 485.05 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 161.19 ns/iter (161.186) | 154.08 ns | 158.27 ns | 216.06 ns | 307.96 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 245.06 ns/iter (245.056) | 235.86 ns | 253.53 ns | 279.33 ns | 303.93 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 257.98 ns/iter (257.979) | 241.25 ns | 257.11 ns | 275.32 ns | 981.69 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.4 ns/iter (315.405)  | 304.66 ns | 323.58 ns | 346.04 ns | 351.92 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.5 ns/iter (324.504)  | 316.25 ns | 326.81 ns | 372.82 ns | 392.57 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 386.53 ns/iter (386.533) | 356.99 ns | 389.19 ns | 473.3 ns  | 485.05 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 650.23 ns/iter (650.233) | 538.48 ns | 693.72 ns | 744.16 ns | 744.16 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.54 µs/iter (1,542.803) | 1.42 µs   | 1.58 µs   | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.87 µs/iter (1,870.667) | 1.82 µs   | 1.88 µs   | 2.13 µs   | 2.13 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75    | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------------------ | ------ | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.19 µs/iter (2,187.787) | 1.7 µs | 2.24 µs | 2.29 µs | 2.29 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.72 µs/iter (4,718)     | 2.6 µs | 6.7 µs  | 9.8 µs  | 5.18 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.89 µs/iter (13,894)   | 7.7 µs | 13.9 µs | 18.1 µs | 1.89 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.37 µs/iter (2,368.408) | 1.99 µs | 2.38 µs | 4 µs    | 4 µs      |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.91 µs/iter (9,912)     | 4.6 µs  | 10 µs   | 13.6 µs | 4.12 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.31 µs/iter (19,307)   | 12.3 µs | 19.2 µs | 25.8 µs | 534.41 µs |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.19 µs/iter (2,187.787) | 1.7 µs  | 2.24 µs | 2.29 µs | 2.29 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.37 µs/iter (2,368.408) | 1.99 µs | 2.38 µs | 4 µs    | 4 µs      |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.72 µs/iter (4,718)     | 2.6 µs  | 6.7 µs  | 9.8 µs  | 5.18 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.91 µs/iter (9,912)     | 4.6 µs  | 10 µs   | 13.6 µs | 4.12 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 13.89 µs/iter (13,894)   | 7.7 µs  | 13.9 µs | 18.1 µs | 1.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.31 µs/iter (19,307)   | 12.3 µs | 19.2 µs | 25.8 µs | 534.41 µs |

