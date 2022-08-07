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
   - [sqlite](#sqlite)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 426.83 ns/iter | 429.17 ns | 451.83 ns | 418.89 ns | 555.28 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 958.51 ns/iter | 937.78 ns | 1.6 µs    | 851.81 ns | 1.6 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.52 µs/iter   | 1.53 µs   | 2.23 µs   | 1.41 µs   | 2.23 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 444.93 ns/iter | 448.4 ns  | 463.19 ns | 438.85 ns | 482.17 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 903.05 ns/iter | 913.52 ns | 1.56 µs   | 787.59 ns | 1.56 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.57 µs/iter   | 1.57 µs   | 2.17 µs   | 1.46 µs   | 2.17 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 426.92 ns/iter | 427.14 ns | 439.88 ns | 423.11 ns | 443.57 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter   | 1 µs      | 1.58 µs   | 903.79 ns | 1.58 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.48 µs/iter   | 1.49 µs   | 1.65 µs   | 1.41 µs   | 1.65 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 425.33 ns/iter | 425.05 ns | 442.51 ns | 421.14 ns | 445.05 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 981.45 ns/iter | 960.23 ns | 1.56 µs   | 856.44 ns | 1.56 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.48 µs/iter   | 1.48 µs   | 1.8 µs    | 1.44 µs   | 1.8 µs    |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 475.13 ns/iter | 475.33 ns | 484.85 ns | 470.93 ns | 488.22 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 989 ns/iter    | 960.68 ns | 1.56 µs   | 886.2 ns  | 1.56 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.54 µs/iter   | 1.53 µs   | 2.55 µs   | 1.46 µs   | 2.55 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 467.54 ns/iter | 468.04 ns | 476.82 ns | 462.72 ns | 482.48 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.05 µs/iter   | 1.02 µs   | 1.62 µs   | 895.86 ns | 1.62 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.89 µs/iter   | 1.87 µs   | 3.11 µs   | 1.82 µs   | 3.11 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 433.11 ns/iter | 433.02 ns | 442.44 ns | 429.04 ns | 447.43 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 934.99 ns/iter | 901.49 ns | 1.44 µs   | 837.36 ns | 1.44 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.47 µs/iter   | 1.47 µs   | 2.21 µs   | 1.41 µs   | 2.21 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 433.25 ns/iter | 435.48 ns | 469.52 ns | 422.87 ns | 479.59 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 933.46 ns/iter | 886.09 ns | 1.48 µs   | 839.95 ns | 1.48 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.49 µs/iter   | 1.51 µs   | 1.8 µs    | 1.43 µs   | 1.8 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 458.48 ns/iter | 461.03 ns | 486.65 ns | 448.72 ns | 525.7 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 968.95 ns/iter | 922.21 ns | 1.86 µs   | 858.99 ns | 1.86 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.53 µs/iter   | 1.54 µs   | 1.63 µs   | 1.47 µs   | 1.63 µs  |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 8.7 µs/iter    | 6.8 µs    | 15.9 µs   | 5.2 µs    | 7.45 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.72 µs/iter  | 20.1 µs   | 103.8 µs  | 19 µs     | 185.9 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 705.58 µs/iter | 757.29 µs | 844.39 µs | 640.89 µs | 1.12 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min       | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 11.67 µs/iter | 9.8 µs  | 28.4 µs  | 7.9 µs    | 1.44 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 19.92 µs/iter | 18.2 µs | 102.3 µs | 17.5 µs   | 1.14 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.12 ms/iter  | 1.03 ms | 2.14 ms  | 985.69 µs | 2.2 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 9.3 µs/iter    | 8.4 µs    | 15.7 µs | 7.4 µs    | 1.17 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.77 µs/iter  | 16.6 µs   | 52.9 µs | 15.5 µs   | 628 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 687.62 µs/iter | 634.59 µs | 1.54 ms | 597.29 µs | 1.63 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75      | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.26 µs/iter   | 8.3 µs   | 19 µs   | 7.2 µs    | 901.49 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.52 µs/iter  | 16.5 µs  | 31.9 µs | 15.7 µs   | 1.23 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 677.68 µs/iter | 630.1 µs | 1.57 ms | 595.79 µs | 2.94 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.28 µs/iter   | 8.35 µs   | 8.67 µs | 8.07 µs   | 8.67 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.13 µs/iter  | 19.5 µs   | 117 µs  | 18.8 µs   | 748.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 806.28 µs/iter | 757.09 µs | 1.56 ms | 727.69 µs | 3.59 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 48.4 µs/iter  | 39.4 µs | 397 µs   | 36.1 µs | 981.79 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 53.07 µs/iter | 51.5 µs | 150.4 µs | 49.9 µs | 211 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.2 ms/iter   | 1.09 ms | 2.53 ms  | 1.05 ms | 2.55 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 10.67 µs/iter  | 9.9 µs    | 23.7 µs | 7.2 µs    | 684.79 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.93 µs/iter  | 17.2 µs   | 36.4 µs | 15.6 µs   | 468.1 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 745.57 µs/iter | 697.99 µs | 1.67 ms | 671.39 µs | 1.71 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 11.12 µs/iter  | 10.1 µs   | 26.7 µs | 7.2 µs    | 1.03 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.88 µs/iter  | 17.5 µs   | 28.8 µs | 15.9 µs   | 228 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 757.29 µs/iter | 698.29 µs | 1.67 ms | 668.89 µs | 4.03 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 64.33 µs/iter  | 63 µs     | 178.4 µs | 61 µs     | 264.9 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 328.07 µs/iter | 332.6 µs  | 387.4 µs | 317.6 µs  | 1.08 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 777.12 µs/iter | 727.39 µs | 1.7 ms   | 697.29 µs | 3 ms     |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 359.52 ns/iter | 357.44 ns | 385.35 ns | 352.92 ns | 387.92 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 647.65 ns/iter | 648.01 ns | 927.4 ns  | 631.76 ns | 927.4 ns  |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 961.6 ns/iter  | 934.7 ns  | 1.47 µs   | 822.52 ns | 1.47 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 463.13 ns/iter | 456.86 ns | 571.67 ns | 451.57 ns | 618.74 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 905.45 ns/iter | 881.16 ns | 1.44 µs   | 803.98 ns | 1.44 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.44 µs/iter   | 1.54 µs   | 1.67 µs   | 1.31 µs   | 1.67 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 357.56 ns/iter | 355.66 ns | 387.97 ns | 349.98 ns | 392.86 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 627.61 ns/iter | 635.13 ns | 680.18 ns | 620.02 ns | 680.18 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 904.19 ns/iter | 842.53 ns | 1.38 µs   | 829.8 ns  | 1.38 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 358.75 ns/iter | 357.26 ns | 388.53 ns | 352.56 ns | 388.98 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 622.82 ns/iter | 628.51 ns | 844.31 ns | 612.9 ns  | 844.31 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 846.76 ns/iter | 789.38 ns | 1.29 µs   | 776.31 ns | 1.29 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 598.31 ns/iter | 599.59 ns | 636.94 ns | 577.43 ns | 636.94 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 918.23 ns/iter | 859.56 ns | 1.46 µs   | 841.43 ns | 1.46 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.75 µs/iter   | 1.76 µs   | 1.84 µs   | 1.74 µs   | 1.84 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 565.46 ns/iter | 565.53 ns | 600.18 ns | 557.47 ns | 600.18 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 972.73 ns/iter | 906.7 ns  | 1.5 µs    | 887.8 ns  | 1.5 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 2.01 µs   | 2.14 µs   | 1.98 µs   | 2.14 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 355.12 ns/iter | 353.51 ns | 388.97 ns | 349.19 ns | 397.46 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 648.82 ns/iter | 656 ns    | 699.99 ns | 637.82 ns | 699.99 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 932.37 ns/iter | 913.17 ns | 1.46 µs   | 834.56 ns | 1.46 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 356.36 ns/iter | 355.45 ns | 381.94 ns | 351.08 ns | 385.8 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 646 ns/iter    | 652.65 ns | 660.78 ns | 637.36 ns | 660.78 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 930.85 ns/iter | 927.03 ns | 1.38 µs   | 834.54 ns | 1.38 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 553.82 ns/iter | 553.05 ns | 580.09 ns | 546.29 ns | 585.02 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 857.32 ns/iter | 788.33 ns | 1.39 µs   | 771.17 ns | 1.39 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.15 µs/iter   | 1.15 µs   | 1.26 µs   | 1.13 µs   | 1.26 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.18 µs/iter | 7.4 µs  | 18.3 µs | 6.8 µs  | 411.8 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 10 µs/iter   | 8.7 µs  | 28.4 µs | 7.1 µs  | 1.73 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.32 ms/iter | 1.21 ms | 3.72 ms | 1.18 ms | 3.79 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 11.29 µs/iter | 10.2 µs | 29.6 µs | 8.2 µs    | 3.03 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 18.97 µs/iter | 18.4 µs | 30.5 µs | 17.2 µs   | 234 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.12 ms/iter  | 1.03 ms | 3.2 ms  | 997.49 µs | 3.38 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.14 µs/iter  | 1.14 µs | 1.63 µs | 1.09 µs | 1.63 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 9.55 µs/iter  | 8.4 µs  | 28.2 µs | 7 µs    | 759.79 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.77 µs/iter | 37 µs   | 70 µs   | 35.1 µs | 258 µs    |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 127.71 ns/iter | 126.72 ns | 137.62 ns | 123.99 ns | 142.37 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 367.15 ns/iter | 365.27 ns | 381.26 ns | 362.05 ns | 389.17 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 9.84 µs/iter   | 8.9 µs    | 28.2 µs   | 7 µs      | 671.19 µs |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.71 µs/iter  | 3.71 µs | 3.76 µs | 3.67 µs | 3.76 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.42 µs/iter | 15.5 µs | 20.4 µs | 14.3 µs | 347.5 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.6 µs/iter  | 24.1 µs | 44.6 µs | 22.1 µs | 1.12 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.77 ns/iter | 113.05 ns | 123.2 ns | 109.93 ns | 126.16 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.56 µs   | 1.58 µs  | 1.52 µs   | 1.58 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 121.68 µs/iter | 118.7 µs  | 146.1 µs | 117.2 µs  | 4.09 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.16 µs/iter | 8.23 µs | 8.5 µs  | 8.01 µs | 8.5 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 9.24 µs/iter | 8.1 µs  | 27.7 µs | 7.1 µs  | 725.39 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.33 ms/iter | 1.22 ms | 3.71 ms | 1.18 ms | 3.75 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.23 µs/iter | 8.25 µs | 8.83 µs | 8.05 µs | 8.83 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.59 µs/iter | 8.4 µs  | 28.3 µs | 7.1 µs  | 1.08 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.33 ms/iter | 1.22 ms | 3.72 ms | 1.19 ms | 3.74 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 494.03 ns/iter | 495.17 ns | 520.63 ns | 488.43 ns | 526.96 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.68 µs/iter   | 4.02 µs   | 4.9 µs    | 2.68 µs   | 4.9 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 49.67 µs/iter  | 45.9 µs   | 74.6 µs   | 44.1 µs   | 972.89 µs |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.77 ns/iter | 113.05 ns | 123.2 ns  | 109.93 ns | 126.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 127.71 ns/iter | 126.72 ns | 137.62 ns | 123.99 ns | 142.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 355.12 ns/iter | 353.51 ns | 388.97 ns | 349.19 ns | 397.46 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 356.36 ns/iter | 355.45 ns | 381.94 ns | 351.08 ns | 385.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 357.56 ns/iter | 355.66 ns | 387.97 ns | 349.98 ns | 392.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 358.75 ns/iter | 357.26 ns | 388.53 ns | 352.56 ns | 388.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 359.52 ns/iter | 357.44 ns | 385.35 ns | 352.92 ns | 387.92 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 367.15 ns/iter | 365.27 ns | 381.26 ns | 362.05 ns | 389.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 425.33 ns/iter | 425.05 ns | 442.51 ns | 421.14 ns | 445.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 426.83 ns/iter | 429.17 ns | 451.83 ns | 418.89 ns | 555.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 426.92 ns/iter | 427.14 ns | 439.88 ns | 423.11 ns | 443.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 433.11 ns/iter | 433.02 ns | 442.44 ns | 429.04 ns | 447.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 433.25 ns/iter | 435.48 ns | 469.52 ns | 422.87 ns | 479.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 444.93 ns/iter | 448.4 ns  | 463.19 ns | 438.85 ns | 482.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 458.48 ns/iter | 461.03 ns | 486.65 ns | 448.72 ns | 525.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 463.13 ns/iter | 456.86 ns | 571.67 ns | 451.57 ns | 618.74 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 467.54 ns/iter | 468.04 ns | 476.82 ns | 462.72 ns | 482.48 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 475.13 ns/iter | 475.33 ns | 484.85 ns | 470.93 ns | 488.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 494.03 ns/iter | 495.17 ns | 520.63 ns | 488.43 ns | 526.96 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 553.82 ns/iter | 553.05 ns | 580.09 ns | 546.29 ns | 585.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 565.46 ns/iter | 565.53 ns | 600.18 ns | 557.47 ns | 600.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 598.31 ns/iter | 599.59 ns | 636.94 ns | 577.43 ns | 636.94 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 622.82 ns/iter | 628.51 ns | 844.31 ns | 612.9 ns  | 844.31 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 627.61 ns/iter | 635.13 ns | 680.18 ns | 620.02 ns | 680.18 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 646 ns/iter    | 652.65 ns | 660.78 ns | 637.36 ns | 660.78 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 647.65 ns/iter | 648.01 ns | 927.4 ns  | 631.76 ns | 927.4 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 648.82 ns/iter | 656 ns    | 699.99 ns | 637.82 ns | 699.99 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 846.76 ns/iter | 789.38 ns | 1.29 µs   | 776.31 ns | 1.29 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 857.32 ns/iter | 788.33 ns | 1.39 µs   | 771.17 ns | 1.39 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 903.05 ns/iter | 913.52 ns | 1.56 µs   | 787.59 ns | 1.56 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 904.19 ns/iter | 842.53 ns | 1.38 µs   | 829.8 ns  | 1.38 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 905.45 ns/iter | 881.16 ns | 1.44 µs   | 803.98 ns | 1.44 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 918.23 ns/iter | 859.56 ns | 1.46 µs   | 841.43 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 930.85 ns/iter | 927.03 ns | 1.38 µs   | 834.54 ns | 1.38 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 932.37 ns/iter | 913.17 ns | 1.46 µs   | 834.56 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 933.46 ns/iter | 886.09 ns | 1.48 µs   | 839.95 ns | 1.48 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 934.99 ns/iter | 901.49 ns | 1.44 µs   | 837.36 ns | 1.44 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 958.51 ns/iter | 937.78 ns | 1.6 µs    | 851.81 ns | 1.6 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 961.6 ns/iter  | 934.7 ns  | 1.47 µs   | 822.52 ns | 1.47 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 968.95 ns/iter | 922.21 ns | 1.86 µs   | 858.99 ns | 1.86 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 972.73 ns/iter | 906.7 ns  | 1.5 µs    | 887.8 ns  | 1.5 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 981.45 ns/iter | 960.23 ns | 1.56 µs   | 856.44 ns | 1.56 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 989 ns/iter    | 960.68 ns | 1.56 µs   | 886.2 ns  | 1.56 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.04 µs/iter   | 1 µs      | 1.58 µs   | 903.79 ns | 1.58 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.05 µs/iter   | 1.02 µs   | 1.62 µs   | 895.86 ns | 1.62 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.14 µs/iter   | 1.14 µs   | 1.63 µs   | 1.09 µs   | 1.63 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.15 µs/iter   | 1.15 µs   | 1.26 µs   | 1.13 µs   | 1.26 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.44 µs/iter   | 1.54 µs   | 1.67 µs   | 1.31 µs   | 1.67 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.47 µs/iter   | 1.47 µs   | 2.21 µs   | 1.41 µs   | 2.21 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.48 µs/iter   | 1.49 µs   | 1.65 µs   | 1.41 µs   | 1.65 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.48 µs/iter   | 1.48 µs   | 1.8 µs    | 1.44 µs   | 1.8 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.49 µs/iter   | 1.51 µs   | 1.8 µs    | 1.43 µs   | 1.8 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.52 µs/iter   | 1.53 µs   | 2.23 µs   | 1.41 µs   | 2.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.53 µs/iter   | 1.54 µs   | 1.63 µs   | 1.47 µs   | 1.63 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.54 µs/iter   | 1.53 µs   | 2.55 µs   | 1.46 µs   | 2.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.56 µs   | 1.58 µs   | 1.52 µs   | 1.58 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.57 µs/iter   | 1.57 µs   | 2.17 µs   | 1.46 µs   | 2.17 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.75 µs/iter   | 1.76 µs   | 1.84 µs   | 1.74 µs   | 1.84 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.89 µs/iter   | 1.87 µs   | 3.11 µs   | 1.82 µs   | 3.11 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 2.01 µs   | 2.14 µs   | 1.98 µs   | 2.14 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.68 µs/iter   | 4.02 µs   | 4.9 µs    | 2.68 µs   | 4.9 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.71 µs/iter   | 3.71 µs   | 3.76 µs   | 3.67 µs   | 3.76 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.16 µs/iter   | 8.23 µs   | 8.5 µs    | 8.01 µs   | 8.5 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.18 µs/iter   | 7.4 µs    | 18.3 µs   | 6.8 µs    | 411.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.23 µs/iter   | 8.25 µs   | 8.83 µs   | 8.05 µs   | 8.83 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.28 µs/iter   | 8.35 µs   | 8.67 µs   | 8.07 µs   | 8.67 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 8.7 µs/iter    | 6.8 µs    | 15.9 µs   | 5.2 µs    | 7.45 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 9.24 µs/iter   | 8.1 µs    | 27.7 µs   | 7.1 µs    | 725.39 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.26 µs/iter   | 8.3 µs    | 19 µs     | 7.2 µs    | 901.49 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 9.3 µs/iter    | 8.4 µs    | 15.7 µs   | 7.4 µs    | 1.17 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 9.55 µs/iter   | 8.4 µs    | 28.2 µs   | 7 µs      | 759.79 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.59 µs/iter   | 8.4 µs    | 28.3 µs   | 7.1 µs    | 1.08 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 9.84 µs/iter   | 8.9 µs    | 28.2 µs   | 7 µs      | 671.19 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 10 µs/iter     | 8.7 µs    | 28.4 µs   | 7.1 µs    | 1.73 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 10.67 µs/iter  | 9.9 µs    | 23.7 µs   | 7.2 µs    | 684.79 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 11.12 µs/iter  | 10.1 µs   | 26.7 µs   | 7.2 µs    | 1.03 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 11.29 µs/iter  | 10.2 µs   | 29.6 µs   | 8.2 µs    | 3.03 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 11.67 µs/iter  | 9.8 µs    | 28.4 µs   | 7.9 µs    | 1.44 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.42 µs/iter  | 15.5 µs   | 20.4 µs   | 14.3 µs   | 347.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.52 µs/iter  | 16.5 µs   | 31.9 µs   | 15.7 µs   | 1.23 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.77 µs/iter  | 16.6 µs   | 52.9 µs   | 15.5 µs   | 628 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.88 µs/iter  | 17.5 µs   | 28.8 µs   | 15.9 µs   | 228 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.93 µs/iter  | 17.2 µs   | 36.4 µs   | 15.6 µs   | 468.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 18.97 µs/iter  | 18.4 µs   | 30.5 µs   | 17.2 µs   | 234 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 19.92 µs/iter  | 18.2 µs   | 102.3 µs  | 17.5 µs   | 1.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.13 µs/iter  | 19.5 µs   | 117 µs    | 18.8 µs   | 748.09 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.72 µs/iter  | 20.1 µs   | 103.8 µs  | 19 µs     | 185.9 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.6 µs/iter   | 24.1 µs   | 44.6 µs   | 22.1 µs   | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.77 µs/iter  | 37 µs     | 70 µs     | 35.1 µs   | 258 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 48.4 µs/iter   | 39.4 µs   | 397 µs    | 36.1 µs   | 981.79 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 49.67 µs/iter  | 45.9 µs   | 74.6 µs   | 44.1 µs   | 972.89 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 53.07 µs/iter  | 51.5 µs   | 150.4 µs  | 49.9 µs   | 211 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 64.33 µs/iter  | 63 µs     | 178.4 µs  | 61 µs     | 264.9 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 121.68 µs/iter | 118.7 µs  | 146.1 µs  | 117.2 µs  | 4.09 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 328.07 µs/iter | 332.6 µs  | 387.4 µs  | 317.6 µs  | 1.08 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 677.68 µs/iter | 630.1 µs  | 1.57 ms   | 595.79 µs | 2.94 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 687.62 µs/iter | 634.59 µs | 1.54 ms   | 597.29 µs | 1.63 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 705.58 µs/iter | 757.29 µs | 844.39 µs | 640.89 µs | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 745.57 µs/iter | 697.99 µs | 1.67 ms   | 671.39 µs | 1.71 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 757.29 µs/iter | 698.29 µs | 1.67 ms   | 668.89 µs | 4.03 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 777.12 µs/iter | 727.39 µs | 1.7 ms    | 697.29 µs | 3 ms      |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 806.28 µs/iter | 757.09 µs | 1.56 ms   | 727.69 µs | 3.59 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.12 ms/iter   | 1.03 ms   | 2.14 ms   | 985.69 µs | 2.2 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.12 ms/iter   | 1.03 ms   | 3.2 ms    | 997.49 µs | 3.38 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.2 ms/iter    | 1.09 ms   | 2.53 ms   | 1.05 ms   | 2.55 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.32 ms/iter   | 1.21 ms   | 3.72 ms   | 1.18 ms   | 3.79 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.33 ms/iter   | 1.22 ms   | 3.71 ms   | 1.18 ms   | 3.75 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.33 ms/iter   | 1.22 ms   | 3.72 ms   | 1.19 ms   | 3.74 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.7 (x64-linux)                  | http      | 90,819.573/rps | 94,224.357 | 96,824.778 | 11,874.418 | 104,547.94 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 51,889.454/rps | 54,400.868 | 54,875.718 | 5,014.061  | 54,911.748 |
| node v18.7.0 (x64-linux)               | http      | 49,730.475/rps | 51,702.09  | 52,266.81  | 6,385.352  | 52,881.642 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.7 ns/iter  | 150.87 ns | 187.17 ns | 144.66 ns | 263.37 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.65 ns/iter | 309.84 ns | 337.38 ns | 301.86 ns | 338.23 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.37 ns/iter | 321.78 ns | 356.49 ns | 318.37 ns | 377.05 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.42 ns/iter  | 75.74 ns  | 102.07 ns | 63.06 ns  | 110.37 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.86 ns/iter | 233.61 ns | 251.87 ns | 224.89 ns | 254.53 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.47 ns/iter | 240.36 ns | 254.58 ns | 232.25 ns | 266.17 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.42 ns/iter  | 75.74 ns  | 102.07 ns | 63.06 ns  | 110.37 ns |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.7 ns/iter  | 150.87 ns | 187.17 ns | 144.66 ns | 263.37 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.86 ns/iter | 233.61 ns | 251.87 ns | 224.89 ns | 254.53 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.47 ns/iter | 240.36 ns | 254.58 ns | 232.25 ns | 266.17 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.65 ns/iter | 309.84 ns | 337.38 ns | 301.86 ns | 338.23 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.37 ns/iter | 321.78 ns | 356.49 ns | 318.37 ns | 377.05 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 33.65 ms/iter  | 33.52 ms  | 36.76 ms  | 32.77 ms  | 36.76 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 99.48 ms/iter  | 99.74 ms  | 100.2 ms  | 98.41 ms  | 100.2 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 244.59 ms/iter | 244.56 ms | 252.97 ms | 238.45 ms | 252.97 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75      | p99      | Min      | Max       |
| -------------------------------------- | ------------------------ | -------------- | -------- | -------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 98.21 µs/iter  | 96.9 µs  | 115 µs   | 92.1 µs  | 1.3 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 307.29 µs/iter | 312.5 µs | 320.5 µs | 294.9 µs | 838.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 420.35 µs/iter | 388.1 µs | 460.3 µs | 374.5 µs | 8.94 ms   |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | --------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.42 µs/iter  | 63.1 µs  | 77.1 µs   | 54.5 µs  | 542.2 µs  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 156.01 µs/iter | 155.9 µs | 164.1 µs  | 150 µs   | 525.79 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 382.63 µs/iter | 336.5 µs | 621.09 µs | 325.2 µs | 14.92 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | --------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 55.84 µs/iter  | 52.9 µs  | 82.9 µs   | 44.2 µs  | 769.09 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 108.12 µs/iter | 102.6 µs | 178.1 µs  | 98 µs    | 594.19 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 313.18 µs/iter | 291.7 µs | 679.19 µs | 258.5 µs | 5.46 ms   |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 175.03 µs/iter | 175.7 µs  | 191.3 µs  | 156.9 µs  | 696.59 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 444.1 µs/iter  | 444.19 µs | 466.19 µs | 436.1 µs  | 911.49 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1 ms/iter      | 880.19 µs | 6.46 ms   | 859.09 µs | 8.36 ms   |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 55.84 µs/iter  | 52.9 µs   | 82.9 µs   | 44.2 µs   | 769.09 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.42 µs/iter  | 63.1 µs   | 77.1 µs   | 54.5 µs   | 542.2 µs  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 98.21 µs/iter  | 96.9 µs   | 115 µs    | 92.1 µs   | 1.3 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 108.12 µs/iter | 102.6 µs  | 178.1 µs  | 98 µs     | 594.19 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 156.01 µs/iter | 155.9 µs  | 164.1 µs  | 150 µs    | 525.79 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 175.03 µs/iter | 175.7 µs  | 191.3 µs  | 156.9 µs  | 696.59 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 307.29 µs/iter | 312.5 µs  | 320.5 µs  | 294.9 µs  | 838.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 313.18 µs/iter | 291.7 µs  | 679.19 µs | 258.5 µs  | 5.46 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 382.63 µs/iter | 336.5 µs  | 621.09 µs | 325.2 µs  | 14.92 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 420.35 µs/iter | 388.1 µs  | 460.3 µs  | 374.5 µs  | 8.94 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 444.1 µs/iter  | 444.19 µs | 466.19 µs | 436.1 µs  | 911.49 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1 ms/iter      | 880.19 µs | 6.46 ms   | 859.09 µs | 8.36 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 33.65 ms/iter  | 33.52 ms  | 36.76 ms  | 32.77 ms  | 36.76 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 99.48 ms/iter  | 99.74 ms  | 100.2 ms  | 98.41 ms  | 100.2 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 244.59 ms/iter | 244.56 ms | 252.97 ms | 238.45 ms | 252.97 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 492.15 ns/iter | 498.66 ns | 586.09 ns | 441.23 ns | 699.6 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.41 µs/iter   | 1.45 µs   | 1.51 µs   | 1.27 µs   | 1.51 µs  |
| bun 0.1.7 (x64-linux)                  | nanoid(36) | 1.92 µs/iter   | 1.93 µs   | 2.05 µs   | 1.88 µs   | 2.05 µs  |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello') | 2.21 µs/iter  | 2.23 µs | 2.26 µs | 2.12 µs | 2.26 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.04 µs/iter  | 4.05 µs | 4.47 µs | 3.95 µs | 4.47 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.76 µs/iter | 11.4 µs | 13.1 µs | 6.7 µs  | 381.8 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.46 µs/iter | 2.29 µs | 5.65 µs | 2.03 µs | 5.65 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter | 8.1 µs  | 11.8 µs | 4.4 µs  | 279.7 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.9 µs/iter | 16.9 µs | 20.1 µs | 11.3 µs | 310.6 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello')             | 2.21 µs/iter  | 2.23 µs | 2.26 µs | 2.12 µs | 2.26 µs  |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.46 µs/iter  | 2.29 µs | 5.65 µs | 2.03 µs | 5.65 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.04 µs/iter  | 4.05 µs | 4.47 µs | 3.95 µs | 4.47 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter  | 8.1 µs  | 11.8 µs | 4.4 µs  | 279.7 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.76 µs/iter | 11.4 µs | 13.1 µs | 6.7 µs  | 381.8 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.9 µs/iter  | 16.9 µs | 20.1 µs | 11.3 µs | 310.6 µs |

