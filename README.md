*Ran on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

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
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 425.77 ns/iter | 431.69 ns | 472.11 ns | 416.92 ns | 475.87 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.01 µs/iter   | 958.99 ns | 1.61 µs   | 848.17 ns | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.51 µs/iter   | 1.52 µs   | 2.29 µs   | 1.43 µs   | 2.29 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 445.05 ns/iter | 448.26 ns | 472.18 ns | 438 ns    | 487.09 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 887.2 ns/iter  | 827.8 ns  | 1.43 µs   | 789.17 ns | 1.43 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.58 µs/iter   | 1.6 µs    | 2.17 µs   | 1.47 µs   | 2.17 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 431.18 ns/iter | 430.48 ns | 446.15 ns | 428 ns    | 446.17 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.07 µs/iter   | 1.01 µs   | 1.58 µs   | 993.66 ns | 1.58 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.47 µs/iter   | 1.49 µs   | 1.63 µs   | 1.38 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 430.25 ns/iter | 430.27 ns | 441.11 ns | 426.55 ns | 450.6 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 927.49 ns/iter | 865.01 ns | 1.46 µs   | 846.12 ns | 1.46 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.56 µs/iter   | 1.57 µs   | 1.73 µs   | 1.49 µs   | 1.73 µs  |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 474.03 ns/iter | 475.3 ns | 487.07 ns | 468.99 ns | 501.71 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.08 µs/iter   | 1.01 µs  | 1.59 µs   | 991.07 ns | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.57 µs/iter   | 1.58 µs  | 1.76 µs   | 1.52 µs   | 1.76 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 468.52 ns/iter | 469.9 ns | 483.28 ns | 461.6 ns  | 536.59 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.09 µs/iter   | 1.04 µs  | 1.64 µs   | 982.96 ns | 1.64 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.89 µs/iter   | 1.89 µs  | 2.1 µs    | 1.85 µs   | 2.1 µs    |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 432.57 ns/iter | 433.61 ns | 440.91 ns | 428.13 ns | 441.02 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 979.55 ns/iter | 941.98 ns | 1.47 µs   | 841.24 ns | 1.47 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.51 µs/iter   | 1.52 µs   | 1.61 µs   | 1.45 µs   | 1.61 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 434.7 ns/iter  | 437.07 ns | 460.62 ns | 423.72 ns | 480.45 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 967.65 ns/iter | 934.76 ns | 1.47 µs   | 837.99 ns | 1.47 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.51 µs/iter   | 1.53 µs   | 1.58 µs   | 1.45 µs   | 1.58 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 458.46 ns/iter | 461.93 ns | 465.28 ns | 450.32 ns | 476.38 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 936.09 ns/iter | 882.91 ns | 1.53 µs   | 850.92 ns | 1.53 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.52 µs/iter   | 1.53 µs   | 1.92 µs   | 1.39 µs   | 1.92 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.49 µs/iter   | 6.5 µs   | 17.1 µs  | 5.3 µs   | 1.13 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.67 µs/iter  | 20.1 µs  | 103.6 µs | 19.3 µs  | 767.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 705.44 µs/iter | 757.8 µs | 834.8 µs | 641.4 µs | 1.1 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 9.74 µs/iter  | 8.9 µs  | 23.1 µs  | 7.8 µs    | 805.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 19.92 µs/iter | 18.2 µs | 102.1 µs | 17.5 µs   | 1.38 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.1 ms/iter   | 1.02 ms | 2.13 ms  | 931.41 µs | 8.99 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99     | Min      | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | ------- | -------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.73 µs/iter   | 8.78 µs  | 8.9 µs  | 8.64 µs  | 8.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.87 µs/iter  | 16.5 µs  | 47.5 µs | 15.6 µs  | 3.14 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 633.23 µs/iter | 600.4 µs | 1.16 ms | 555.5 µs | 1.45 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75      | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | ------- | -------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.55 µs/iter   | 9.74 µs  | 9.84 µs | 8.62 µs  | 9.84 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.93 µs/iter  | 16.3 µs  | 42.9 µs | 15.7 µs  | 3.26 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 676.43 µs/iter | 648.4 µs | 1.19 ms | 616.6 µs | 2.67 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.5 µs/iter    | 8.4 µs   | 9.94 µs  | 8.12 µs  | 9.94 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.3 µs/iter   | 19.4 µs  | 146.2 µs | 18.7 µs  | 3.35 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 798.48 µs/iter | 754.6 µs | 1.52 ms  | 725.5 µs | 1.57 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.41 µs/iter | 38.1 µs | 390 µs   | 36.1 µs | 1.22 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.02 µs/iter | 51.3 µs | 183.5 µs | 49.8 µs | 3.42 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.18 ms/iter  | 1.08 ms | 2.49 ms  | 1.04 ms | 2.61 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | ------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 10.46 µs/iter  | 9.4 µs   | 42.3 µs | 6.9 µs  | 874.8 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 19.06 µs/iter  | 16.4 µs  | 36.3 µs | 15.7 µs | 7.08 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 740.04 µs/iter | 696.3 µs | 1.59 ms | 668 µs  | 1.64 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 11.45 µs/iter  | 10.3 µs  | 47 µs   | 7.3 µs   | 1.05 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.23 µs/iter  | 16.6 µs  | 29.7 µs | 15.8 µs  | 241.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 748.03 µs/iter | 692.4 µs | 1.61 ms | 664.1 µs | 4.32 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 63.42 µs/iter  | 61.6 µs   | 169.6 µs | 60.7 µs   | 1.53 ms |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 326.23 µs/iter | 330.4 µs  | 359.2 µs | 317.7 µs  | 1.24 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 763.86 µs/iter | 716.71 µs | 1.64 ms  | 688.21 µs | 2.41 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 356.27 ns/iter | 355.05 ns | 379.3 ns | 350.08 ns | 381.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 658.27 ns/iter | 646.71 ns | 1.85 µs  | 630.89 ns | 1.85 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 980.72 ns/iter | 925.84 ns | 1.62 µs  | 820.83 ns | 1.62 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 455.97 ns/iter | 454.86 ns | 477.48 ns | 449.59 ns | 485.72 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 896.31 ns/iter | 825.27 ns | 1.47 µs   | 814.52 ns | 1.47 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.43 µs/iter   | 1.52 µs   | 1.63 µs   | 1.31 µs   | 1.63 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 357.36 ns/iter | 357.02 ns | 385.43 ns | 350.68 ns | 394.55 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 632.06 ns/iter | 637.44 ns | 773.45 ns | 623.99 ns | 773.45 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 899.34 ns/iter | 842.61 ns | 1.43 µs   | 825.28 ns | 1.43 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 356.48 ns/iter | 355.91 ns | 380.76 ns | 350.69 ns | 393.87 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 619.46 ns/iter | 625.93 ns | 663.46 ns | 612.39 ns | 663.46 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 841.03 ns/iter | 785.77 ns | 1.34 µs   | 772.04 ns | 1.34 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 604.43 ns/iter | 605.5 ns  | 635.84 ns | 594.01 ns | 635.84 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 987.66 ns/iter | 933.62 ns | 1.51 µs   | 837.23 ns | 1.51 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.71 µs/iter   | 1.72 µs   | 1.81 µs   | 1.7 µs    | 1.81 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 592.67 ns/iter | 594.13 ns | 619.95 ns | 584.11 ns | 619.95 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.1 µs/iter    | 1.06 µs   | 1.68 µs   | 902.97 ns | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 2.01 µs   | 2.15 µs   | 1.98 µs   | 2.15 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 356.91 ns/iter | 355.67 ns | 386.26 ns | 350.56 ns | 387.99 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 640.92 ns/iter | 647.13 ns | 690.57 ns | 632.88 ns | 690.57 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 971.36 ns/iter | 931.96 ns | 1.55 µs   | 835.88 ns | 1.55 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 357 ns/iter    | 356.12 ns | 385.46 ns | 351.41 ns | 386.16 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 639.75 ns/iter | 646.56 ns | 651.06 ns | 633.17 ns | 651.06 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 977.03 ns/iter | 924.29 ns | 1.53 µs   | 832.07 ns | 1.53 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 575.13 ns/iter | 574.91 ns | 609.85 ns | 567.61 ns | 609.85 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 859.98 ns/iter | 792.63 ns | 1.39 µs   | 780.77 ns | 1.39 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.12 µs/iter   | 1.13 µs   | 1.19 µs   | 1.1 µs    | 1.19 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.01 µs/iter | 8 µs    | 8.26 µs | 7.96 µs | 8.26 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.01 µs/iter | 7.8 µs  | 27.4 µs | 7 µs    | 756.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.31 ms/iter | 1.21 ms | 3.61 ms | 1.17 ms | 3.91 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 9.97 µs/iter  | 9 µs    | 27.2 µs | 8.1 µs   | 2.35 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 18.93 µs/iter | 18.3 µs | 30.6 µs | 17.6 µs  | 216.8 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.12 ms/iter  | 1.03 ms | 3.19 ms | 998.6 µs | 3.28 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.1 µs/iter   | 1.12 µs | 1.18 µs | 1.07 µs | 1.18 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 19.12 µs/iter | 19.9 µs | 57.9 µs | 11.8 µs | 993.91 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.41 µs/iter | 36.8 µs | 68.5 µs | 34.8 µs | 194.8 µs  |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 127.13 ns/iter | 126.09 ns | 136.57 ns | 123.32 ns | 145.75 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 375.41 ns/iter | 373.75 ns | 388.68 ns | 370.4 ns  | 389.18 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 19.21 µs/iter  | 20.2 µs   | 58.7 µs   | 11.7 µs   | 881.11 µs |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.7 µs/iter   | 3.7 µs  | 3.79 µs | 3.67 µs | 3.79 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.99 µs/iter | 16 µs   | 21.2 µs | 14.9 µs | 387 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 24.83 µs/iter | 23.5 µs | 42.8 µs | 21.9 µs | 1.02 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 115.38 ns/iter | 114.46 ns | 124.55 ns | 111.42 ns | 137.06 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.6 µs/iter    | 1.61 µs   | 1.65 µs   | 1.57 µs   | 1.65 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 121.18 µs/iter | 118.8 µs  | 141.2 µs  | 116.4 µs  | 1.02 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.02 µs/iter | 8.03 µs | 8.24 µs | 7.96 µs | 8.24 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 9.04 µs/iter | 8.2 µs  | 22.8 µs | 7 µs    | 682.5 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.33 ms/iter | 1.23 ms | 3.68 ms | 1.18 ms | 3.81 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.1 µs/iter  | 8.14 µs | 8.23 µs | 8 µs    | 8.23 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 8.84 µs/iter | 7.9 µs  | 25.4 µs | 7 µs    | 650.8 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.33 ms/iter | 1.22 ms | 3.66 ms | 1.18 ms | 3.77 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 496.35 ns/iter | 501.96 ns | 548.57 ns | 489.94 ns | 581.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.67 µs/iter   | 4 µs      | 4.95 µs   | 2.75 µs   | 4.95 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 48.57 µs/iter  | 45.4 µs   | 70.2 µs   | 43.8 µs   | 1.1 ms    |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 115.38 ns/iter | 114.46 ns | 124.55 ns | 111.42 ns | 137.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 127.13 ns/iter | 126.09 ns | 136.57 ns | 123.32 ns | 145.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 356.27 ns/iter | 355.05 ns | 379.3 ns  | 350.08 ns | 381.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 356.48 ns/iter | 355.91 ns | 380.76 ns | 350.69 ns | 393.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 356.91 ns/iter | 355.67 ns | 386.26 ns | 350.56 ns | 387.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 357 ns/iter    | 356.12 ns | 385.46 ns | 351.41 ns | 386.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 357.36 ns/iter | 357.02 ns | 385.43 ns | 350.68 ns | 394.55 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 375.41 ns/iter | 373.75 ns | 388.68 ns | 370.4 ns  | 389.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 425.77 ns/iter | 431.69 ns | 472.11 ns | 416.92 ns | 475.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 430.25 ns/iter | 430.27 ns | 441.11 ns | 426.55 ns | 450.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 431.18 ns/iter | 430.48 ns | 446.15 ns | 428 ns    | 446.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 432.57 ns/iter | 433.61 ns | 440.91 ns | 428.13 ns | 441.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 434.7 ns/iter  | 437.07 ns | 460.62 ns | 423.72 ns | 480.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 445.05 ns/iter | 448.26 ns | 472.18 ns | 438 ns    | 487.09 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 455.97 ns/iter | 454.86 ns | 477.48 ns | 449.59 ns | 485.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 458.46 ns/iter | 461.93 ns | 465.28 ns | 450.32 ns | 476.38 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 468.52 ns/iter | 469.9 ns  | 483.28 ns | 461.6 ns  | 536.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 474.03 ns/iter | 475.3 ns  | 487.07 ns | 468.99 ns | 501.71 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 496.35 ns/iter | 501.96 ns | 548.57 ns | 489.94 ns | 581.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 575.13 ns/iter | 574.91 ns | 609.85 ns | 567.61 ns | 609.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 592.67 ns/iter | 594.13 ns | 619.95 ns | 584.11 ns | 619.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 604.43 ns/iter | 605.5 ns  | 635.84 ns | 594.01 ns | 635.84 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 619.46 ns/iter | 625.93 ns | 663.46 ns | 612.39 ns | 663.46 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 632.06 ns/iter | 637.44 ns | 773.45 ns | 623.99 ns | 773.45 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 639.75 ns/iter | 646.56 ns | 651.06 ns | 633.17 ns | 651.06 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 640.92 ns/iter | 647.13 ns | 690.57 ns | 632.88 ns | 690.57 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 658.27 ns/iter | 646.71 ns | 1.85 µs   | 630.89 ns | 1.85 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 841.03 ns/iter | 785.77 ns | 1.34 µs   | 772.04 ns | 1.34 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 859.98 ns/iter | 792.63 ns | 1.39 µs   | 780.77 ns | 1.39 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 887.2 ns/iter  | 827.8 ns  | 1.43 µs   | 789.17 ns | 1.43 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 896.31 ns/iter | 825.27 ns | 1.47 µs   | 814.52 ns | 1.47 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 899.34 ns/iter | 842.61 ns | 1.43 µs   | 825.28 ns | 1.43 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 927.49 ns/iter | 865.01 ns | 1.46 µs   | 846.12 ns | 1.46 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 936.09 ns/iter | 882.91 ns | 1.53 µs   | 850.92 ns | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 967.65 ns/iter | 934.76 ns | 1.47 µs   | 837.99 ns | 1.47 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 971.36 ns/iter | 931.96 ns | 1.55 µs   | 835.88 ns | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 977.03 ns/iter | 924.29 ns | 1.53 µs   | 832.07 ns | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 979.55 ns/iter | 941.98 ns | 1.47 µs   | 841.24 ns | 1.47 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 980.72 ns/iter | 925.84 ns | 1.62 µs   | 820.83 ns | 1.62 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 987.66 ns/iter | 933.62 ns | 1.51 µs   | 837.23 ns | 1.51 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.01 µs/iter   | 958.99 ns | 1.61 µs   | 848.17 ns | 1.61 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.07 µs/iter   | 1.01 µs   | 1.58 µs   | 993.66 ns | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.08 µs/iter   | 1.01 µs   | 1.59 µs   | 991.07 ns | 1.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.09 µs/iter   | 1.04 µs   | 1.64 µs   | 982.96 ns | 1.64 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.1 µs/iter    | 1.06 µs   | 1.68 µs   | 902.97 ns | 1.68 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.1 µs/iter    | 1.12 µs   | 1.18 µs   | 1.07 µs   | 1.18 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.12 µs/iter   | 1.13 µs   | 1.19 µs   | 1.1 µs    | 1.19 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.43 µs/iter   | 1.52 µs   | 1.63 µs   | 1.31 µs   | 1.63 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.47 µs/iter   | 1.49 µs   | 1.63 µs   | 1.38 µs   | 1.63 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.51 µs/iter   | 1.52 µs   | 1.61 µs   | 1.45 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.51 µs/iter   | 1.53 µs   | 1.58 µs   | 1.45 µs   | 1.58 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.51 µs/iter   | 1.52 µs   | 2.29 µs   | 1.43 µs   | 2.29 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.52 µs/iter   | 1.53 µs   | 1.92 µs   | 1.39 µs   | 1.92 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.56 µs/iter   | 1.57 µs   | 1.73 µs   | 1.49 µs   | 1.73 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.57 µs/iter   | 1.58 µs   | 1.76 µs   | 1.52 µs   | 1.76 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.58 µs/iter   | 1.6 µs    | 2.17 µs   | 1.47 µs   | 2.17 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.6 µs/iter    | 1.61 µs   | 1.65 µs   | 1.57 µs   | 1.65 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.71 µs/iter   | 1.72 µs   | 1.81 µs   | 1.7 µs    | 1.81 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.89 µs/iter   | 1.89 µs   | 2.1 µs    | 1.85 µs   | 2.1 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 2.01 µs   | 2.15 µs   | 1.98 µs   | 2.15 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.67 µs/iter   | 4 µs      | 4.95 µs   | 2.75 µs   | 4.95 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.7 µs/iter    | 3.7 µs    | 3.79 µs   | 3.67 µs   | 3.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.49 µs/iter   | 6.5 µs    | 17.1 µs   | 5.3 µs    | 1.13 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.01 µs/iter   | 8 µs      | 8.26 µs   | 7.96 µs   | 8.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.02 µs/iter   | 8.03 µs   | 8.24 µs   | 7.96 µs   | 8.24 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.1 µs/iter    | 8.14 µs   | 8.23 µs   | 8 µs      | 8.23 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.5 µs/iter    | 8.4 µs    | 9.94 µs   | 8.12 µs   | 9.94 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.73 µs/iter   | 8.78 µs   | 8.9 µs    | 8.64 µs   | 8.9 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 8.84 µs/iter   | 7.9 µs    | 25.4 µs   | 7 µs      | 650.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.01 µs/iter   | 7.8 µs    | 27.4 µs   | 7 µs      | 756.1 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 9.04 µs/iter   | 8.2 µs    | 22.8 µs   | 7 µs      | 682.5 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.55 µs/iter   | 9.74 µs   | 9.84 µs   | 8.62 µs   | 9.84 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 9.74 µs/iter   | 8.9 µs    | 23.1 µs   | 7.8 µs    | 805.01 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 9.97 µs/iter   | 9 µs      | 27.2 µs   | 8.1 µs    | 2.35 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 10.46 µs/iter  | 9.4 µs    | 42.3 µs   | 6.9 µs    | 874.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 11.45 µs/iter  | 10.3 µs   | 47 µs     | 7.3 µs    | 1.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.99 µs/iter  | 16 µs     | 21.2 µs   | 14.9 µs   | 387 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.23 µs/iter  | 16.6 µs   | 29.7 µs   | 15.8 µs   | 241.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.87 µs/iter  | 16.5 µs   | 47.5 µs   | 15.6 µs   | 3.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.93 µs/iter  | 16.3 µs   | 42.9 µs   | 15.7 µs   | 3.26 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 18.93 µs/iter  | 18.3 µs   | 30.6 µs   | 17.6 µs   | 216.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 19.06 µs/iter  | 16.4 µs   | 36.3 µs   | 15.7 µs   | 7.08 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 19.12 µs/iter  | 19.9 µs   | 57.9 µs   | 11.8 µs   | 993.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 19.21 µs/iter  | 20.2 µs   | 58.7 µs   | 11.7 µs   | 881.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 19.92 µs/iter  | 18.2 µs   | 102.1 µs  | 17.5 µs   | 1.38 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.3 µs/iter   | 19.4 µs   | 146.2 µs  | 18.7 µs   | 3.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.67 µs/iter  | 20.1 µs   | 103.6 µs  | 19.3 µs   | 767.1 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 24.83 µs/iter  | 23.5 µs   | 42.8 µs   | 21.9 µs   | 1.02 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.41 µs/iter  | 36.8 µs   | 68.5 µs   | 34.8 µs   | 194.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.41 µs/iter  | 38.1 µs   | 390 µs    | 36.1 µs   | 1.22 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 48.57 µs/iter  | 45.4 µs   | 70.2 µs   | 43.8 µs   | 1.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.02 µs/iter  | 51.3 µs   | 183.5 µs  | 49.8 µs   | 3.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 63.42 µs/iter  | 61.6 µs   | 169.6 µs  | 60.7 µs   | 1.53 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 121.18 µs/iter | 118.8 µs  | 141.2 µs  | 116.4 µs  | 1.02 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 326.23 µs/iter | 330.4 µs  | 359.2 µs  | 317.7 µs  | 1.24 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 633.23 µs/iter | 600.4 µs  | 1.16 ms   | 555.5 µs  | 1.45 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 676.43 µs/iter | 648.4 µs  | 1.19 ms   | 616.6 µs  | 2.67 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 705.44 µs/iter | 757.8 µs  | 834.8 µs  | 641.4 µs  | 1.1 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 740.04 µs/iter | 696.3 µs  | 1.59 ms   | 668 µs    | 1.64 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 748.03 µs/iter | 692.4 µs  | 1.61 ms   | 664.1 µs  | 4.32 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 763.86 µs/iter | 716.71 µs | 1.64 ms   | 688.21 µs | 2.41 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 798.48 µs/iter | 754.6 µs  | 1.52 ms   | 725.5 µs  | 1.57 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.1 ms/iter    | 1.02 ms   | 2.13 ms   | 931.41 µs | 8.99 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.12 ms/iter   | 1.03 ms   | 3.19 ms   | 998.6 µs  | 3.28 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.18 ms/iter   | 1.08 ms   | 2.49 ms   | 1.04 ms   | 2.61 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.31 ms/iter   | 1.21 ms   | 3.61 ms   | 1.17 ms   | 3.91 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.33 ms/iter   | 1.22 ms   | 3.66 ms   | 1.18 ms   | 3.77 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.33 ms/iter   | 1.23 ms   | 3.68 ms   | 1.18 ms   | 3.81 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max         |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ----------- |
| bun 0.1.6 (x64-linux)                  | http      | 93,334.283/rps | 94,291.688 | 98,014.422 | 2,765.933  | 103,561.292 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 52,401.217/rps | 55,018.754 | 55,514.674 | 4,735.175  | 55,733.613  |
| node v18.7.0 (x64-linux)               | http      | 46,822.055/rps | 51,201.482 | 52,060.256 | 10,147.734 | 52,426.625  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 147.89 ns/iter | 145.93 ns | 192.56 ns | 142.53 ns | 245.17 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.51 ns/iter | 319.89 ns | 353.04 ns | 312.41 ns | 673.36 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 323.47 ns/iter | 320.58 ns | 355.34 ns | 317.84 ns | 380.88 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.46 ns/iter  | 75.64 ns  | 100.75 ns | 62.97 ns  | 143.77 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.38 ns/iter | 233.21 ns | 250.69 ns | 224.96 ns | 263.9 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.46 ns/iter | 242.79 ns | 253.44 ns | 234.78 ns | 263.19 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.46 ns/iter  | 75.64 ns  | 100.75 ns | 62.97 ns  | 143.77 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 147.89 ns/iter | 145.93 ns | 192.56 ns | 142.53 ns | 245.17 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.38 ns/iter | 233.21 ns | 250.69 ns | 224.96 ns | 263.9 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.46 ns/iter | 242.79 ns | 253.44 ns | 234.78 ns | 263.19 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.51 ns/iter | 319.89 ns | 353.04 ns | 312.41 ns | 673.36 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 323.47 ns/iter | 320.58 ns | 355.34 ns | 317.84 ns | 380.88 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 523.48 ns/iter | 521.71 ns | 582.34 ns | 445.07 ns | 1.86 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.38 µs/iter   | 1.43 µs   | 1.45 µs   | 1.25 µs   | 1.45 µs |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.95 µs/iter   | 1.95 µs   | 2.08 µs   | 1.92 µs   | 2.08 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.25 µs/iter  | 2.24 µs | 2.87 µs | 2.11 µs | 2.87 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.41 µs/iter  | 5.7 µs  | 8.5 µs  | 2.8 µs  | 8.26 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.23 µs/iter | 11.1 µs | 13 µs   | 6.4 µs  | 509.03 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.16 µs/iter | 2.15 µs | 3.21 µs | 1.93 µs | 3.21 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.75 µs/iter | 8.2 µs  | 11.6 µs | 4.4 µs  | 1.99 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.6 µs/iter | 16.6 µs | 19.9 µs | 11 µs   | 309.92 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.16 µs/iter  | 2.15 µs | 3.21 µs | 1.93 µs | 3.21 µs   |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.25 µs/iter  | 2.24 µs | 2.87 µs | 2.11 µs | 2.87 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.41 µs/iter  | 5.7 µs  | 8.5 µs  | 2.8 µs  | 8.26 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.75 µs/iter  | 8.2 µs  | 11.6 µs | 4.4 µs  | 1.99 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.23 µs/iter | 11.1 µs | 13 µs   | 6.4 µs  | 509.03 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.6 µs/iter  | 16.6 µs | 19.9 µs | 11 µs   | 309.92 µs |

