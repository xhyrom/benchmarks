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
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 434.29 ns/iter | 419.85 ns | 432.5 ns | 577.81 ns | 1.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.08 µs/iter   | 907.05 ns | 1.01 µs  | 1.67 µs   | 1.67 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.44 µs/iter   | 1.31 µs   | 1.48 µs  | 2.2 µs    | 2.2 µs  |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 445.8 ns/iter | 436.95 ns | 448.95 ns | 488.02 ns | 555.95 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.02 µs/iter  | 927.69 ns | 959.56 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.51 µs/iter  | 1.36 µs   | 1.57 µs   | 2.22 µs   | 2.22 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 430.78 ns/iter | 424.66 ns | 431.5 ns | 449.84 ns | 474.39 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter   | 949.23 ns | 972.2 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.39 µs/iter   | 1.32 µs   | 1.4 µs   | 1.7 µs    | 1.7 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 432.31 ns/iter | 426 ns    | 433.92 ns | 446.26 ns | 450.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 991.29 ns/iter | 893.76 ns | 916.38 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.34 µs/iter   | 1.26 µs   | 1.35 µs   | 1.47 µs   | 1.47 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 478.14 ns/iter | 474.11 ns | 477.82 ns | 489.71 ns | 533.23 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.02 µs/iter   | 926.28 ns | 970.69 ns | 1.66 µs   | 1.66 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.46 µs/iter   | 1.4 µs    | 1.48 µs   | 1.61 µs   | 1.61 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 469.08 ns/iter | 465.48 ns | 468.92 ns | 484.15 ns | 499.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.17 µs/iter   | 1.05 µs   | 1.1 µs    | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.81 µs/iter   | 1.71 µs   | 1.83 µs   | 2.12 µs   | 2.12 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 437.05 ns/iter | 433.54 ns | 436.58 ns | 449.75 ns | 453.53 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.01 µs/iter   | 922 ns    | 947.28 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.41 µs/iter   | 1.33 µs   | 1.44 µs   | 1.56 µs   | 1.56 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 437.53 ns/iter | 425.26 ns | 438.42 ns | 467.92 ns | 481.46 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.03 µs/iter   | 925.98 ns | 954.31 ns | 1.62 µs   | 1.62 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.41 µs/iter   | 1.3 µs    | 1.44 µs   | 1.57 µs   | 1.57 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 460.32 ns/iter | 452.42 ns | 464.28 ns | 468.31 ns | 469.28 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 982.93 ns/iter | 902.05 ns | 918.26 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.42 µs/iter   | 1.37 µs   | 1.43 µs   | 1.67 µs   | 1.67 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75     | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | ------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.45 µs/iter   | 5.4 µs  | 7 µs     | 13 µs    | 727.2 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.79 µs/iter  | 19.4 µs | 20.1 µs  | 103.7 µs | 1.06 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 710.69 µs/iter | 648 µs  | 761.4 µs | 863.2 µs | 1.11 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75      | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.77 µs/iter | 8.1 µs   | 10 µs   | 29.4 µs  | 2.7 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.02 µs/iter | 17.2 µs  | 18.3 µs | 102.9 µs | 1.09 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.13 ms/iter  | 995.6 µs | 1.04 ms | 2.19 ms  | 2.45 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 9.03 µs/iter   | 7.4 µs   | 8.7 µs  | 14.7 µs | 377.9 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.74 µs/iter  | 15.9 µs  | 16.6 µs | 51.7 µs | 858.4 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 683.87 µs/iter | 590.7 µs | 629 µs  | 1.12 ms | 1.71 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | ------- | -------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.71 µs/iter   | 8.43 µs | 8.78 µs  | 9.19 µs | 9.19 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.75 µs/iter  | 15.4 µs | 16.6 µs  | 43 µs   | 396 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 682.03 µs/iter | 599 µs  | 635.1 µs | 1.59 ms | 1.67 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.92 µs/iter   | 7 µs     | 8.5 µs   | 14.7 µs  | 399.4 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.12 µs/iter  | 18.7 µs  | 19.6 µs  | 119.6 µs | 998.9 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 810.97 µs/iter | 731.1 µs | 763.5 µs | 1.59 ms  | 1.62 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.26 µs/iter | 36.4 µs | 38.1 µs | 382.2 µs | 820.7 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.55 µs/iter | 50 µs   | 52.7 µs | 152.2 µs | 6.39 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.26 ms/iter  | 1.04 ms | 1.1 ms  | 3.31 ms  | 3.46 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 7.46 µs/iter  | 6.98 µs | 7.63 µs | 7.84 µs | 7.84 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.59 µs/iter | 15.6 µs | 17.1 µs | 29.9 µs | 262.4 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 718.6 µs/iter | 653 µs  | 692 µs  | 1.29 ms | 1.36 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 7.26 µs/iter   | 7.08 µs  | 7.4 µs   | 7.6 µs  | 7.6 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.69 µs/iter  | 15.6 µs  | 17.3 µs  | 29.8 µs | 718.2 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 715.26 µs/iter | 653.8 µs | 688.6 µs | 1.27 ms | 1.45 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 65.02 µs/iter  | 61 µs    | 63.6 µs  | 181.4 µs | 554.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 328.16 µs/iter | 317 µs   | 332.6 µs | 372.7 µs | 929.5 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 739.67 µs/iter | 676.8 µs | 714 µs   | 1.33 ms  | 1.35 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 365.77 ns/iter | 350.93 ns | 356.89 ns | 877.36 ns | 1.05 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 647.43 ns/iter | 620.37 ns | 639.93 ns | 1.39 µs   | 1.39 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 976.31 ns/iter | 874.96 ns | 906.36 ns | 1.53 µs   | 1.53 µs |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 458.92 ns/iter | 453 ns    | 457.26 ns | 484.32 ns | 487.49 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.04 µs/iter   | 949.65 ns | 966.19 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.36 µs/iter   | 1.19 µs   | 1.5 µs    | 1.67 µs   | 1.67 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 354.97 ns/iter | 348.04 ns | 353.79 ns | 377.01 ns | 379.59 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 630.35 ns/iter | 621.58 ns | 639.35 ns | 696.67 ns | 696.67 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.03 µs/iter   | 940.79 ns | 958.35 ns | 1.57 µs   | 1.57 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 357.05 ns/iter | 350.24 ns | 355.87 ns | 386.1 ns  | 386.6 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 621.25 ns/iter | 612.93 ns | 630.79 ns | 667.61 ns | 667.61 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 970.42 ns/iter | 887.38 ns | 898.82 ns | 1.49 µs   | 1.49 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 591.25 ns/iter | 578.3 ns | 591.69 ns | 625.68 ns | 625.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.04 µs/iter   | 953.2 ns | 986.25 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.69 µs/iter   | 1.55 µs  | 1.71 µs   | 1.75 µs   | 1.75 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 593.46 ns/iter | 582.78 ns | 592.89 ns | 628.91 ns | 628.91 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.06 µs/iter   | 948.42 ns | 990.63 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 1.98 µs   | 2 µs      | 2.16 µs   | 2.16 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 358.14 ns/iter | 351.63 ns | 356.98 ns | 384.33 ns | 407.4 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 641.67 ns/iter | 632.32 ns | 651.5 ns  | 696.99 ns | 696.99 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 994.43 ns/iter | 882.39 ns | 962.71 ns | 1.63 µs   | 1.63 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 355.54 ns/iter | 349.71 ns | 353.7 ns  | 385.74 ns | 386.23 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 642.85 ns/iter | 634.57 ns | 653.28 ns | 657.57 ns | 657.57 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 981.13 ns/iter | 878.17 ns | 905.18 ns | 1.62 µs   | 1.62 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 553.13 ns/iter | 545.01 ns | 551.48 ns | 584.93 ns | 585.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 909.78 ns/iter | 826.66 ns | 839.02 ns | 1.45 µs   | 1.45 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.13 µs/iter   | 1.11 µs   | 1.14 µs   | 1.21 µs   | 1.21 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8 µs/iter     | 7.9 µs  | 8.04 µs | 8.32 µs | 8.32 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 10.75 µs/iter | 7.7 µs  | 9.8 µs  | 28.6 µs | 3.58 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.33 ms/iter  | 1.17 ms | 1.22 ms | 3.85 ms | 3.9 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 11.16 µs/iter | 8.1 µs  | 10.3 µs | 29.9 µs | 1.46 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 19.27 µs/iter | 17.1 µs | 18.8 µs | 31.2 µs | 348.9 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.14 ms/iter  | 1.01 ms | 1.04 ms | 3.36 ms | 3.9 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.16 µs/iter  | 1.08 µs | 1.19 µs | 1.4 µs   | 1.4 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 23.41 µs/iter | 11.3 µs | 18 µs   | 178.3 µs | 2.83 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 38.18 µs/iter | 35.3 µs | 37.3 µs | 66.2 µs  | 248.5 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 130.65 ns/iter | 126.75 ns | 129.7 ns  | 142.2 ns  | 150.59 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 369.57 ns/iter | 360.95 ns | 379.51 ns | 416.56 ns | 517.65 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 21.93 µs/iter  | 11 µs     | 17.4 µs   | 176.5 µs  | 2.51 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.73 µs/iter  | 3.71 µs | 3.72 µs | 3.95 µs | 3.95 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.67 µs/iter | 14.2 µs | 15.7 µs | 21.4 µs | 413.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.93 µs/iter | 21.9 µs | 24.2 µs | 45.7 µs | 1.38 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 108.02 ns/iter | 102.71 ns | 107.06 ns | 118.73 ns | 145.36 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.54 µs/iter   | 1.51 µs   | 1.54 µs   | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 124.86 µs/iter | 116.1 µs  | 126.7 µs  | 153.9 µs  | 2.24 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.13 µs/iter  | 7.95 µs | 8.22 µs | 8.53 µs | 8.53 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 10.51 µs/iter | 7.7 µs  | 9.6 µs  | 29.7 µs | 1.41 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter  | 1.19 ms | 1.23 ms | 3.93 ms | 4.03 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.18 µs/iter | 8.03 µs | 8.22 µs | 8.42 µs | 8.42 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 10.6 µs/iter | 7.6 µs  | 9.7 µs  | 30.2 µs | 1.88 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.35 ms/iter | 1.19 ms | 1.23 ms | 3.9 ms  | 4.01 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 527.33 ns/iter | 496.57 ns | 541.98 ns | 615.64 ns | 620.84 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.47 µs/iter   | 3.18 µs   | 4.9 µs    | 6.01 µs   | 6.01 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 50.16 µs/iter  | 43.9 µs   | 46 µs     | 76.7 µs   | 1.88 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 108.02 ns/iter | 102.71 ns | 107.06 ns | 118.73 ns | 145.36 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 130.65 ns/iter | 126.75 ns | 129.7 ns  | 142.2 ns  | 150.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 354.97 ns/iter | 348.04 ns | 353.79 ns | 377.01 ns | 379.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 355.54 ns/iter | 349.71 ns | 353.7 ns  | 385.74 ns | 386.23 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 357.05 ns/iter | 350.24 ns | 355.87 ns | 386.1 ns  | 386.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 358.14 ns/iter | 351.63 ns | 356.98 ns | 384.33 ns | 407.4 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 365.77 ns/iter | 350.93 ns | 356.89 ns | 877.36 ns | 1.05 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 369.57 ns/iter | 360.95 ns | 379.51 ns | 416.56 ns | 517.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 430.78 ns/iter | 424.66 ns | 431.5 ns  | 449.84 ns | 474.39 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 432.31 ns/iter | 426 ns    | 433.92 ns | 446.26 ns | 450.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 434.29 ns/iter | 419.85 ns | 432.5 ns  | 577.81 ns | 1.01 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 437.05 ns/iter | 433.54 ns | 436.58 ns | 449.75 ns | 453.53 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 437.53 ns/iter | 425.26 ns | 438.42 ns | 467.92 ns | 481.46 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 445.8 ns/iter  | 436.95 ns | 448.95 ns | 488.02 ns | 555.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 458.92 ns/iter | 453 ns    | 457.26 ns | 484.32 ns | 487.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 460.32 ns/iter | 452.42 ns | 464.28 ns | 468.31 ns | 469.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 469.08 ns/iter | 465.48 ns | 468.92 ns | 484.15 ns | 499.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 478.14 ns/iter | 474.11 ns | 477.82 ns | 489.71 ns | 533.23 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 527.33 ns/iter | 496.57 ns | 541.98 ns | 615.64 ns | 620.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 553.13 ns/iter | 545.01 ns | 551.48 ns | 584.93 ns | 585.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 591.25 ns/iter | 578.3 ns  | 591.69 ns | 625.68 ns | 625.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 593.46 ns/iter | 582.78 ns | 592.89 ns | 628.91 ns | 628.91 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 621.25 ns/iter | 612.93 ns | 630.79 ns | 667.61 ns | 667.61 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 630.35 ns/iter | 621.58 ns | 639.35 ns | 696.67 ns | 696.67 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 641.67 ns/iter | 632.32 ns | 651.5 ns  | 696.99 ns | 696.99 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 642.85 ns/iter | 634.57 ns | 653.28 ns | 657.57 ns | 657.57 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 647.43 ns/iter | 620.37 ns | 639.93 ns | 1.39 µs   | 1.39 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 909.78 ns/iter | 826.66 ns | 839.02 ns | 1.45 µs   | 1.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 970.42 ns/iter | 887.38 ns | 898.82 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 976.31 ns/iter | 874.96 ns | 906.36 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 981.13 ns/iter | 878.17 ns | 905.18 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 982.93 ns/iter | 902.05 ns | 918.26 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 991.29 ns/iter | 893.76 ns | 916.38 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 994.43 ns/iter | 882.39 ns | 962.71 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.01 µs/iter   | 922 ns    | 947.28 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.02 µs/iter   | 927.69 ns | 959.56 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.02 µs/iter   | 926.28 ns | 970.69 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.03 µs/iter   | 925.98 ns | 954.31 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.03 µs/iter   | 940.79 ns | 958.35 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.04 µs/iter   | 949.65 ns | 966.19 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.04 µs/iter   | 949.23 ns | 972.2 ns  | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.04 µs/iter   | 953.2 ns  | 986.25 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.06 µs/iter   | 948.42 ns | 990.63 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.08 µs/iter   | 907.05 ns | 1.01 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.13 µs/iter   | 1.11 µs   | 1.14 µs   | 1.21 µs   | 1.21 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.16 µs/iter   | 1.08 µs   | 1.19 µs   | 1.4 µs    | 1.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.17 µs/iter   | 1.05 µs   | 1.1 µs    | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.34 µs/iter   | 1.26 µs   | 1.35 µs   | 1.47 µs   | 1.47 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.36 µs/iter   | 1.19 µs   | 1.5 µs    | 1.67 µs   | 1.67 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.39 µs/iter   | 1.32 µs   | 1.4 µs    | 1.7 µs    | 1.7 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.41 µs/iter   | 1.3 µs    | 1.44 µs   | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.41 µs/iter   | 1.33 µs   | 1.44 µs   | 1.56 µs   | 1.56 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.42 µs/iter   | 1.37 µs   | 1.43 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.44 µs/iter   | 1.31 µs   | 1.48 µs   | 2.2 µs    | 2.2 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.46 µs/iter   | 1.4 µs    | 1.48 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.51 µs/iter   | 1.36 µs   | 1.57 µs   | 2.22 µs   | 2.22 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.54 µs/iter   | 1.51 µs   | 1.54 µs   | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.69 µs/iter   | 1.55 µs   | 1.71 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.81 µs/iter   | 1.71 µs   | 1.83 µs   | 2.12 µs   | 2.12 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 1.98 µs   | 2 µs      | 2.16 µs   | 2.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.73 µs/iter   | 3.71 µs   | 3.72 µs   | 3.95 µs   | 3.95 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.47 µs/iter   | 3.18 µs   | 4.9 µs    | 6.01 µs   | 6.01 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 7.26 µs/iter   | 7.08 µs   | 7.4 µs    | 7.6 µs    | 7.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.45 µs/iter   | 5.4 µs    | 7 µs      | 13 µs     | 727.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 7.46 µs/iter   | 6.98 µs   | 7.63 µs   | 7.84 µs   | 7.84 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8 µs/iter      | 7.9 µs    | 8.04 µs   | 8.32 µs   | 8.32 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.13 µs/iter   | 7.95 µs   | 8.22 µs   | 8.53 µs   | 8.53 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.18 µs/iter   | 8.03 µs   | 8.22 µs   | 8.42 µs   | 8.42 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.71 µs/iter   | 8.43 µs   | 8.78 µs   | 9.19 µs   | 9.19 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.92 µs/iter   | 7 µs      | 8.5 µs    | 14.7 µs   | 399.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 9.03 µs/iter   | 7.4 µs    | 8.7 µs    | 14.7 µs   | 377.9 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 10.51 µs/iter  | 7.7 µs    | 9.6 µs    | 29.7 µs   | 1.41 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 10.6 µs/iter   | 7.6 µs    | 9.7 µs    | 30.2 µs   | 1.88 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 10.75 µs/iter  | 7.7 µs    | 9.8 µs    | 28.6 µs   | 3.58 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.77 µs/iter  | 8.1 µs    | 10 µs     | 29.4 µs   | 2.7 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 11.16 µs/iter  | 8.1 µs    | 10.3 µs   | 29.9 µs   | 1.46 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.67 µs/iter  | 14.2 µs   | 15.7 µs   | 21.4 µs   | 413.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.59 µs/iter  | 15.6 µs   | 17.1 µs   | 29.9 µs   | 262.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.69 µs/iter  | 15.6 µs   | 17.3 µs   | 29.8 µs   | 718.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.74 µs/iter  | 15.9 µs   | 16.6 µs   | 51.7 µs   | 858.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.75 µs/iter  | 15.4 µs   | 16.6 µs   | 43 µs     | 396 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 19.27 µs/iter  | 17.1 µs   | 18.8 µs   | 31.2 µs   | 348.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.02 µs/iter  | 17.2 µs   | 18.3 µs   | 102.9 µs  | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.12 µs/iter  | 18.7 µs   | 19.6 µs   | 119.6 µs  | 998.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.79 µs/iter  | 19.4 µs   | 20.1 µs   | 103.7 µs  | 1.06 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 21.93 µs/iter  | 11 µs     | 17.4 µs   | 176.5 µs  | 2.51 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 23.41 µs/iter  | 11.3 µs   | 18 µs     | 178.3 µs  | 2.83 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.93 µs/iter  | 21.9 µs   | 24.2 µs   | 45.7 µs   | 1.38 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 38.18 µs/iter  | 35.3 µs   | 37.3 µs   | 66.2 µs   | 248.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.26 µs/iter  | 36.4 µs   | 38.1 µs   | 382.2 µs  | 820.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 50.16 µs/iter  | 43.9 µs   | 46 µs     | 76.7 µs   | 1.88 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.55 µs/iter  | 50 µs     | 52.7 µs   | 152.2 µs  | 6.39 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 65.02 µs/iter  | 61 µs     | 63.6 µs   | 181.4 µs  | 554.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 124.86 µs/iter | 116.1 µs  | 126.7 µs  | 153.9 µs  | 2.24 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 328.16 µs/iter | 317 µs    | 332.6 µs  | 372.7 µs  | 929.5 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 682.03 µs/iter | 599 µs    | 635.1 µs  | 1.59 ms   | 1.67 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 683.87 µs/iter | 590.7 µs  | 629 µs    | 1.12 ms   | 1.71 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 710.69 µs/iter | 648 µs    | 761.4 µs  | 863.2 µs  | 1.11 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 715.26 µs/iter | 653.8 µs  | 688.6 µs  | 1.27 ms   | 1.45 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 718.6 µs/iter  | 653 µs    | 692 µs    | 1.29 ms   | 1.36 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 739.67 µs/iter | 676.8 µs  | 714 µs    | 1.33 ms   | 1.35 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 810.97 µs/iter | 731.1 µs  | 763.5 µs  | 1.59 ms   | 1.62 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.13 ms/iter   | 995.6 µs  | 1.04 ms   | 2.19 ms   | 2.45 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.14 ms/iter   | 1.01 ms   | 1.04 ms   | 3.36 ms   | 3.9 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.26 ms/iter   | 1.04 ms   | 1.1 ms    | 3.31 ms   | 3.46 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.33 ms/iter   | 1.17 ms   | 1.22 ms   | 3.85 ms   | 3.9 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter   | 1.19 ms   | 1.23 ms   | 3.93 ms   | 4.03 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.35 ms/iter   | 1.19 ms   | 1.23 ms   | 3.9 ms    | 4.01 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.5 (x64-linux)                  | http      | 90,876.604/rps | 90,876.604 | 90,876.604 | 90,876.604 | 90,876.604 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 51,900.972/rps | 51,900.972 | 51,900.972 | 51,900.972 | 51,900.972 |
| node v18.7.0 (x64-linux)               | http      | 48,146.553/rps | 48,146.553 | 48,146.553 | 48,146.553 | 48,146.553 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 163.06 ns/iter | 157.52 ns | 161.1 ns  | 194.81 ns | 276.61 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 320.21 ns/iter | 313.25 ns | 320.97 ns | 347.8 ns  | 352.78 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.25 ns/iter | 318.68 ns | 321.85 ns | 359.5 ns  | 390.09 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.26 ns/iter | 224.47 ns | 232.98 ns | 250.72 ns | 256.95 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.47 ns/iter | 232.79 ns | 240.2 ns  | 257.75 ns | 260.24 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.12 ns/iter | 356.73 ns | 389.24 ns | 411.18 ns | 424.52 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 163.06 ns/iter | 157.52 ns | 161.1 ns  | 194.81 ns | 276.61 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.26 ns/iter | 224.47 ns | 232.98 ns | 250.72 ns | 256.95 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.47 ns/iter | 232.79 ns | 240.2 ns  | 257.75 ns | 260.24 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 320.21 ns/iter | 313.25 ns | 320.97 ns | 347.8 ns  | 352.78 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.25 ns/iter | 318.68 ns | 321.85 ns | 359.5 ns  | 390.09 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.12 ns/iter | 356.73 ns | 389.24 ns | 411.18 ns | 424.52 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 520.69 ns/iter | 438.06 ns | 519.71 ns | 622.07 ns | 1.89 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.42 µs/iter   | 1.36 µs   | 1.44 µs   | 1.46 µs   | 1.46 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.87 µs/iter   | 1.83 µs   | 1.87 µs   | 2.03 µs   | 2.03 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75    | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------ | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.42 µs/iter  | 1.6 µs | 2.4 µs  | 6.5 µs  | 739.9 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 7.56 µs/iter  | 6.6 µs | 7 µs    | 10.1 µs | 8.87 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.55 µs/iter | 6.4 µs | 11.3 µs | 13.3 µs | 392.5 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3 µs/iter     | 2.02 µs | 2.45 µs | 5.56 µs | 5.56 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.3 µs/iter   | 8.4 µs  | 9.1 µs  | 13.2 µs | 330.6 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.83 µs/iter | 11 µs   | 16.8 µs | 20.5 µs | 335 µs   |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.42 µs/iter  | 1.6 µs  | 2.4 µs  | 6.5 µs  | 739.9 µs |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3 µs/iter     | 2.02 µs | 2.45 µs | 5.56 µs | 5.56 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 7.56 µs/iter  | 6.6 µs  | 7 µs    | 10.1 µs | 8.87 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.3 µs/iter   | 8.4 µs  | 9.1 µs  | 13.2 µs | 330.6 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.55 µs/iter | 6.4 µs  | 11.3 µs | 13.3 µs | 392.5 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.83 µs/iter | 11 µs   | 16.8 µs | 20.5 µs | 335 µs   |

