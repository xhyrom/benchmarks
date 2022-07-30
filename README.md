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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 428.06 ns/iter | 420.35 ns | 431.09 ns | 462.65 ns | 578.49 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.19 µs/iter   | 895.71 ns | 1.32 µs   | 2.76 µs   | 2.76 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.53 µs/iter   | 1.45 µs   | 1.53 µs   | 2.26 µs   | 2.26 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 462.45 ns/iter | 444.73 ns | 458.9 ns  | 524.03 ns | 1.16 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.11 µs/iter   | 943.28 ns | 977.18 ns | 2.55 µs   | 2.55 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.59 µs/iter   | 1.46 µs   | 1.6 µs    | 2.03 µs   | 2.03 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 433.73 ns/iter | 428.99 ns | 436.07 ns | 453.44 ns | 456.13 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.03 µs/iter   | 927.61 ns | 953.69 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.5 µs/iter    | 1.45 µs   | 1.52 µs   | 1.69 µs   | 1.69 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 439.06 ns/iter | 425.78 ns | 431.42 ns | 919.94 ns | 952.1 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 973.46 ns/iter | 887.58 ns | 907.84 ns | 1.57 µs   | 1.57 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.49 µs/iter   | 1.45 µs   | 1.51 µs   | 1.68 µs   | 1.68 µs  |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 482.56 ns/iter | 472.8 ns  | 478.55 ns | 604 ns  | 646.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.03 µs/iter   | 922.09 ns | 950.41 ns | 1.6 µs  | 1.6 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.59 µs/iter   | 1.54 µs   | 1.6 µs    | 1.79 µs | 1.79 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 469.46 ns/iter | 464.54 ns | 468.74 ns | 482.27 ns | 553.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.15 µs/iter   | 1.04 µs   | 1.09 µs   | 1.77 µs   | 1.77 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.92 µs/iter   | 1.88 µs   | 1.92 µs   | 2.15 µs   | 2.15 µs  |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 432.78 ns/iter | 427.49 ns | 432.85 ns | 449.2 ns | 502.74 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.01 µs/iter   | 911.91 ns | 932.26 ns | 1.6 µs   | 1.6 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.54 µs/iter   | 1.47 µs   | 1.55 µs   | 1.63 µs  | 1.63 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 431.25 ns/iter | 421.19 ns | 433.36 ns | 466.96 ns | 485.29 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.01 µs/iter   | 923.12 ns | 937.45 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.55 µs/iter   | 1.52 µs   | 1.56 µs   | 1.68 µs   | 1.68 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 453.1 ns/iter  | 444.33 ns | 456.96 ns | 461.18 ns | 465.59 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 988.88 ns/iter | 895.36 ns | 912.31 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.53 µs/iter   | 1.47 µs   | 1.55 µs   | 1.66 µs   | 1.66 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.44 µs/iter   | 5.3 µs   | 6.9 µs   | 16.4 µs  | 621 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.89 µs/iter  | 19 µs    | 20.2 µs  | 104.3 µs | 498.7 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 714.91 µs/iter | 649.8 µs | 763.8 µs | 901.2 µs | 1.48 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75      | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------- | -------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.94 µs/iter | 7.8 µs   | 10 µs   | 29.9 µs  | 2.48 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.14 µs/iter | 17.7 µs  | 18.5 µs | 103.3 µs | 173.3 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.13 ms/iter  | 994.9 µs | 1.04 ms | 2.22 ms  | 2.26 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.9 µs/iter    | 7.4 µs   | 8.5 µs   | 15.1 µs | 385.2 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.84 µs/iter  | 15.9 µs  | 16.6 µs  | 41.9 µs | 729.5 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 691.14 µs/iter | 598.5 µs | 638.3 µs | 1.6 ms  | 1.66 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.71 µs/iter   | 8.48 µs  | 8.79 µs  | 9.16 µs | 9.16 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.73 µs/iter  | 15.9 µs  | 16.7 µs  | 34.3 µs | 970.9 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 693.26 µs/iter | 604.9 µs | 644.2 µs | 1.61 ms | 3.1 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 9.19 µs/iter   | 6.9 µs   | 8.7 µs   | 17.9 µs  | 459.9 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.29 µs/iter  | 18.9 µs  | 19.7 µs  | 121.2 µs | 1.15 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 824.11 µs/iter | 738.5 µs | 768.7 µs | 1.62 ms  | 3.69 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.58 µs/iter | 36.3 µs | 38.1 µs | 390.6 µs | 600.9 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 53.66 µs/iter | 49.9 µs | 54.9 µs | 153.6 µs | 488.2 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.21 ms/iter  | 1.06 ms | 1.11 ms | 2.56 ms  | 2.59 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 7.9 µs/iter    | 5.9 µs   | 7.7 µs   | 14.6 µs | 1.43 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.82 µs/iter  | 16 µs    | 17 µs    | 36.2 µs | 487.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 747.17 µs/iter | 674.4 µs | 701.9 µs | 1.65 ms | 1.7 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 7.41 µs/iter   | 7.13 µs  | 7.58 µs  | 7.97 µs | 7.97 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 18.16 µs/iter  | 16.1 µs  | 17.7 µs  | 30.8 µs | 221.5 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 763.06 µs/iter | 676.5 µs | 705.4 µs | 1.67 ms | 4.26 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 65.41 µs/iter  | 61.5 µs  | 63.9 µs  | 186.2 µs | 262.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 330.56 µs/iter | 317.4 µs | 338.1 µs | 368.6 µs | 1.06 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 782.8 µs/iter  | 705.2 µs | 732.1 µs | 1.69 ms  | 3.09 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 358.87 ns/iter | 350.62 ns | 356.96 ns | 398.53 ns | 403.11 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 645.32 ns/iter | 630.19 ns | 646.98 ns | 892.02 ns | 892.02 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 967.21 ns/iter | 862.03 ns | 951.72 ns | 1.51 µs   | 1.51 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 464.1 ns/iter | 455.26 ns | 462.19 ns | 502.22 ns | 503.18 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.05 µs/iter  | 947.79 ns | 965.64 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.46 µs/iter  | 1.31 µs   | 1.55 µs   | 1.74 µs   | 1.74 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 361.07 ns/iter | 351.05 ns | 358.73 ns | 393.73 ns | 531.65 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 634.85 ns/iter | 623.38 ns | 639.63 ns | 962.23 ns | 962.23 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 950.03 ns/iter | 863.09 ns | 876.82 ns | 1.51 µs   | 1.51 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 360.71 ns/iter | 351.23 ns | 359.23 ns | 394.5 ns  | 404.98 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 619.71 ns/iter | 611.55 ns | 628.52 ns | 682.82 ns | 682.82 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 993.64 ns/iter | 890.35 ns | 918.37 ns | 1.54 µs   | 1.54 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 603.53 ns/iter | 592.25 ns | 602.95 ns | 641.24 ns | 641.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.06 µs/iter   | 956.13 ns | 986.83 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.72 µs/iter   | 1.71 µs   | 1.73 µs   | 1.87 µs   | 1.87 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 593.24 ns/iter | 584.31 ns | 592.49 ns | 640.69 ns | 640.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.1 µs/iter    | 995.75 ns | 1.04 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.01 µs/iter   | 1.99 µs   | 2.02 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 357.41 ns/iter | 348.3 ns | 355.35 ns | 386.17 ns | 398.46 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 651.91 ns/iter | 643.1 ns | 660.08 ns | 694.98 ns | 694.98 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 965.37 ns/iter | 867.7 ns | 906.49 ns | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 360.8 ns/iter  | 352.36 ns | 358.79 ns | 396.58 ns | 401.47 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 648.61 ns/iter | 641.25 ns | 657.4 ns  | 660.63 ns | 660.63 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 982.92 ns/iter | 865.95 ns | 944.91 ns | 1.66 µs   | 1.66 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 581.46 ns/iter | 570.33 ns | 581.2 ns  | 627.54 ns | 627.54 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 924.25 ns/iter | 819.48 ns | 867.37 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.13 µs/iter   | 1.11 µs   | 1.14 µs   | 1.21 µs   | 1.21 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.48 µs/iter  | 6.9 µs  | 7.7 µs  | 19.9 µs | 164.1 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 11.45 µs/iter | 7.9 µs  | 10.3 µs | 29.5 µs | 3.96 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.33 ms/iter  | 1.18 ms | 1.22 ms | 3.99 ms | 4.05 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75    | p99     | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------ | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 11.31 µs/iter | 8.1 µs | 10.4 µs | 29.9 µs | 1.8 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 20.85 µs/iter | 18 µs  | 20.1 µs | 52.5 µs | 1.03 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.13 ms/iter  | 1 ms   | 1.04 ms | 3.3 ms  | 3.45 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.2 µs/iter   | 1.11 µs | 1.21 µs | 1.33 µs | 1.33 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 19.81 µs/iter | 11.7 µs | 20.5 µs | 83.2 µs | 1.41 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 38.18 µs/iter | 35.3 µs | 37.3 µs | 71.1 µs | 248 µs  |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 129.05 ns/iter | 125.63 ns | 128.26 ns | 145.33 ns | 155.12 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 374.77 ns/iter | 369.39 ns | 372.44 ns | 393.4 ns  | 396.48 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 19.58 µs/iter  | 11.4 µs   | 20.2 µs   | 83.7 µs   | 1.34 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.7 µs/iter   | 3.66 µs | 3.73 µs | 3.74 µs | 3.74 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.84 µs/iter | 14.5 µs | 15.8 µs | 22.1 µs | 323.3 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.97 µs/iter | 22.3 µs | 24.2 µs | 46.3 µs | 921.9 µs |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.28 ns/iter | 109.55 ns | 112.67 ns | 128.72 ns | 155.58 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.54 µs   | 1.56 µs   | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 123.26 µs/iter | 116.5 µs  | 118.5 µs  | 164.3 µs  | 1.12 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 9.59 µs/iter  | 7.2 µs  | 9.3 µs  | 21.1 µs | 231.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 10.36 µs/iter | 7.7 µs  | 9.4 µs  | 29.9 µs | 1.68 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter  | 1.19 ms | 1.23 ms | 3.88 ms | 3.97 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 9.65 µs/iter | 7.2 µs  | 9.4 µs  | 20.7 µs | 199.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.98 µs/iter | 7.4 µs  | 9.2 µs  | 29.2 µs | 1.45 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.35 ms/iter | 1.19 ms | 1.23 ms | 3.93 ms | 3.97 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 646.69 ns/iter | 641.02 ns | 645.36 ns | 677.26 ns | 677.26 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.07 µs/iter   | 2.77 µs   | 4.41 µs   | 5.78 µs   | 5.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 49.84 µs/iter  | 44.1 µs   | 46 µs     | 71.2 µs   | 1.8 ms    |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.28 ns/iter | 109.55 ns | 112.67 ns | 128.72 ns | 155.58 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 129.05 ns/iter | 125.63 ns | 128.26 ns | 145.33 ns | 155.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 357.41 ns/iter | 348.3 ns  | 355.35 ns | 386.17 ns | 398.46 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 358.87 ns/iter | 350.62 ns | 356.96 ns | 398.53 ns | 403.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 360.71 ns/iter | 351.23 ns | 359.23 ns | 394.5 ns  | 404.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 360.8 ns/iter  | 352.36 ns | 358.79 ns | 396.58 ns | 401.47 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 361.07 ns/iter | 351.05 ns | 358.73 ns | 393.73 ns | 531.65 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 374.77 ns/iter | 369.39 ns | 372.44 ns | 393.4 ns  | 396.48 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 428.06 ns/iter | 420.35 ns | 431.09 ns | 462.65 ns | 578.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 431.25 ns/iter | 421.19 ns | 433.36 ns | 466.96 ns | 485.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 432.78 ns/iter | 427.49 ns | 432.85 ns | 449.2 ns  | 502.74 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 433.73 ns/iter | 428.99 ns | 436.07 ns | 453.44 ns | 456.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 439.06 ns/iter | 425.78 ns | 431.42 ns | 919.94 ns | 952.1 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 453.1 ns/iter  | 444.33 ns | 456.96 ns | 461.18 ns | 465.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 462.45 ns/iter | 444.73 ns | 458.9 ns  | 524.03 ns | 1.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 464.1 ns/iter  | 455.26 ns | 462.19 ns | 502.22 ns | 503.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 469.46 ns/iter | 464.54 ns | 468.74 ns | 482.27 ns | 553.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 482.56 ns/iter | 472.8 ns  | 478.55 ns | 604 ns    | 646.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 581.46 ns/iter | 570.33 ns | 581.2 ns  | 627.54 ns | 627.54 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 593.24 ns/iter | 584.31 ns | 592.49 ns | 640.69 ns | 640.69 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 603.53 ns/iter | 592.25 ns | 602.95 ns | 641.24 ns | 641.24 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 619.71 ns/iter | 611.55 ns | 628.52 ns | 682.82 ns | 682.82 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 634.85 ns/iter | 623.38 ns | 639.63 ns | 962.23 ns | 962.23 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 645.32 ns/iter | 630.19 ns | 646.98 ns | 892.02 ns | 892.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 646.69 ns/iter | 641.02 ns | 645.36 ns | 677.26 ns | 677.26 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 648.61 ns/iter | 641.25 ns | 657.4 ns  | 660.63 ns | 660.63 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 651.91 ns/iter | 643.1 ns  | 660.08 ns | 694.98 ns | 694.98 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 924.25 ns/iter | 819.48 ns | 867.37 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 950.03 ns/iter | 863.09 ns | 876.82 ns | 1.51 µs   | 1.51 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 965.37 ns/iter | 867.7 ns  | 906.49 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 967.21 ns/iter | 862.03 ns | 951.72 ns | 1.51 µs   | 1.51 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 973.46 ns/iter | 887.58 ns | 907.84 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 982.92 ns/iter | 865.95 ns | 944.91 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 988.88 ns/iter | 895.36 ns | 912.31 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 993.64 ns/iter | 890.35 ns | 918.37 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.01 µs/iter   | 923.12 ns | 937.45 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.01 µs/iter   | 911.91 ns | 932.26 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.03 µs/iter   | 927.61 ns | 953.69 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.03 µs/iter   | 922.09 ns | 950.41 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.05 µs/iter   | 947.79 ns | 965.64 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.06 µs/iter   | 956.13 ns | 986.83 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.1 µs/iter    | 995.75 ns | 1.04 µs   | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.11 µs/iter   | 943.28 ns | 977.18 ns | 2.55 µs   | 2.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.13 µs/iter   | 1.11 µs   | 1.14 µs   | 1.21 µs   | 1.21 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.15 µs/iter   | 1.04 µs   | 1.09 µs   | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.19 µs/iter   | 895.71 ns | 1.32 µs   | 2.76 µs   | 2.76 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.2 µs/iter    | 1.11 µs   | 1.21 µs   | 1.33 µs   | 1.33 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.46 µs/iter   | 1.31 µs   | 1.55 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.49 µs/iter   | 1.45 µs   | 1.51 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.5 µs/iter    | 1.45 µs   | 1.52 µs   | 1.69 µs   | 1.69 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.53 µs/iter   | 1.45 µs   | 1.53 µs   | 2.26 µs   | 2.26 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.53 µs/iter   | 1.47 µs   | 1.55 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.54 µs/iter   | 1.47 µs   | 1.55 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.55 µs/iter   | 1.52 µs   | 1.56 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.54 µs   | 1.56 µs   | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.59 µs/iter   | 1.46 µs   | 1.6 µs    | 2.03 µs   | 2.03 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.59 µs/iter   | 1.54 µs   | 1.6 µs    | 1.79 µs   | 1.79 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.72 µs/iter   | 1.71 µs   | 1.73 µs   | 1.87 µs   | 1.87 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.92 µs/iter   | 1.88 µs   | 1.92 µs   | 2.15 µs   | 2.15 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.01 µs/iter   | 1.99 µs   | 2.02 µs   | 2.14 µs   | 2.14 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.7 µs/iter    | 3.66 µs   | 3.73 µs   | 3.74 µs   | 3.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.07 µs/iter   | 2.77 µs   | 4.41 µs   | 5.78 µs   | 5.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 7.41 µs/iter   | 7.13 µs   | 7.58 µs   | 7.97 µs   | 7.97 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.44 µs/iter   | 5.3 µs    | 6.9 µs    | 16.4 µs   | 621 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 7.9 µs/iter    | 5.9 µs    | 7.7 µs    | 14.6 µs   | 1.43 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.48 µs/iter   | 6.9 µs    | 7.7 µs    | 19.9 µs   | 164.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.71 µs/iter   | 8.48 µs   | 8.79 µs   | 9.16 µs   | 9.16 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.9 µs/iter    | 7.4 µs    | 8.5 µs    | 15.1 µs   | 385.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 9.19 µs/iter   | 6.9 µs    | 8.7 µs    | 17.9 µs   | 459.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 9.59 µs/iter   | 7.2 µs    | 9.3 µs    | 21.1 µs   | 231.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 9.65 µs/iter   | 7.2 µs    | 9.4 µs    | 20.7 µs   | 199.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.98 µs/iter   | 7.4 µs    | 9.2 µs    | 29.2 µs   | 1.45 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 10.36 µs/iter  | 7.7 µs    | 9.4 µs    | 29.9 µs   | 1.68 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.94 µs/iter  | 7.8 µs    | 10 µs     | 29.9 µs   | 2.48 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 11.31 µs/iter  | 8.1 µs    | 10.4 µs   | 29.9 µs   | 1.8 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 11.45 µs/iter  | 7.9 µs    | 10.3 µs   | 29.5 µs   | 3.96 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.84 µs/iter  | 14.5 µs   | 15.8 µs   | 22.1 µs   | 323.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.73 µs/iter  | 15.9 µs   | 16.7 µs   | 34.3 µs   | 970.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.82 µs/iter  | 16 µs     | 17 µs     | 36.2 µs   | 487.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.84 µs/iter  | 15.9 µs   | 16.6 µs   | 41.9 µs   | 729.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 18.16 µs/iter  | 16.1 µs   | 17.7 µs   | 30.8 µs   | 221.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 19.58 µs/iter  | 11.4 µs   | 20.2 µs   | 83.7 µs   | 1.34 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 19.81 µs/iter  | 11.7 µs   | 20.5 µs   | 83.2 µs   | 1.41 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.14 µs/iter  | 17.7 µs   | 18.5 µs   | 103.3 µs  | 173.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 20.85 µs/iter  | 18 µs     | 20.1 µs   | 52.5 µs   | 1.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.29 µs/iter  | 18.9 µs   | 19.7 µs   | 121.2 µs  | 1.15 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.89 µs/iter  | 19 µs     | 20.2 µs   | 104.3 µs  | 498.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.97 µs/iter  | 22.3 µs   | 24.2 µs   | 46.3 µs   | 921.9 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 38.18 µs/iter  | 35.3 µs   | 37.3 µs   | 71.1 µs   | 248 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.58 µs/iter  | 36.3 µs   | 38.1 µs   | 390.6 µs  | 600.9 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 49.84 µs/iter  | 44.1 µs   | 46 µs     | 71.2 µs   | 1.8 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 53.66 µs/iter  | 49.9 µs   | 54.9 µs   | 153.6 µs  | 488.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 65.41 µs/iter  | 61.5 µs   | 63.9 µs   | 186.2 µs  | 262.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 123.26 µs/iter | 116.5 µs  | 118.5 µs  | 164.3 µs  | 1.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 330.56 µs/iter | 317.4 µs  | 338.1 µs  | 368.6 µs  | 1.06 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 691.14 µs/iter | 598.5 µs  | 638.3 µs  | 1.6 ms    | 1.66 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 693.26 µs/iter | 604.9 µs  | 644.2 µs  | 1.61 ms   | 3.1 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 714.91 µs/iter | 649.8 µs  | 763.8 µs  | 901.2 µs  | 1.48 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 747.17 µs/iter | 674.4 µs  | 701.9 µs  | 1.65 ms   | 1.7 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 763.06 µs/iter | 676.5 µs  | 705.4 µs  | 1.67 ms   | 4.26 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 782.8 µs/iter  | 705.2 µs  | 732.1 µs  | 1.69 ms   | 3.09 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 824.11 µs/iter | 738.5 µs  | 768.7 µs  | 1.62 ms   | 3.69 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.13 ms/iter   | 994.9 µs  | 1.04 ms   | 2.22 ms   | 2.26 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.13 ms/iter   | 1 ms      | 1.04 ms   | 3.3 ms    | 3.45 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.21 ms/iter   | 1.06 ms   | 1.11 ms   | 2.56 ms   | 2.59 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.33 ms/iter   | 1.18 ms   | 1.22 ms   | 3.99 ms   | 4.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter   | 1.19 ms   | 1.23 ms   | 3.88 ms   | 3.97 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.35 ms/iter   | 1.19 ms   | 1.23 ms   | 3.93 ms   | 3.97 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.5 (x64-linux)                  | http      | 90,599.506/rps | 90,599.506 | 90,599.506 | 90,599.506 | 90,599.506 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 51,766.952/rps | 51,766.952 | 51,766.952 | 51,766.952 | 51,766.952 |
| node v18.7.0 (x64-linux)               | http      | 47,073.967/rps | 47,073.967 | 47,073.967 | 47,073.967 | 47,073.967 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 165.89 ns/iter | 160.21 ns | 163.94 ns | 204.53 ns | 275.26 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.4 ns/iter  | 310.98 ns | 318.92 ns | 348 ns    | 352.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 332.05 ns/iter | 320.21 ns | 329.2 ns  | 444.28 ns | 1.02 µs   |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 236.2 ns/iter  | 225.19 ns | 233.62 ns | 253.37 ns | 952.57 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 259.85 ns/iter | 232.55 ns | 242.11 ns | 1.06 µs   | 1.31 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374.3 ns/iter  | 355.04 ns | 388.27 ns | 409.46 ns | 415.03 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 165.89 ns/iter | 160.21 ns | 163.94 ns | 204.53 ns | 275.26 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 236.2 ns/iter  | 225.19 ns | 233.62 ns | 253.37 ns | 952.57 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 259.85 ns/iter | 232.55 ns | 242.11 ns | 1.06 µs   | 1.31 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.4 ns/iter  | 310.98 ns | 318.92 ns | 348 ns    | 352.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 332.05 ns/iter | 320.21 ns | 329.2 ns  | 444.28 ns | 1.02 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374.3 ns/iter  | 355.04 ns | 388.27 ns | 409.46 ns | 415.03 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average       | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------- | ------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 526.3 ns/iter | 441.23 ns | 522.93 ns | 713.75 ns | 1.89 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.47 µs/iter  | 1.4 µs    | 1.49 µs   | 1.54 µs   | 1.54 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.9 µs/iter   | 1.86 µs   | 1.91 µs   | 2.05 µs   | 2.05 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.2 µs/iter   | 1.85 µs | 2.2 µs  | 3.18 µs | 3.18 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.06 µs/iter  | 3.96 µs | 4.08 µs | 4.44 µs | 4.44 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.74 µs/iter | 6.5 µs  | 11.4 µs | 13.4 µs | 387.4 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 1.92 µs | 2.27 µs | 2.39 µs | 2.39 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.76 µs/iter  | 4.4 µs  | 8.2 µs  | 10.8 µs | 1.25 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.16 µs/iter | 10.8 µs | 17.3 µs | 20.4 µs | 348.9 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.2 µs/iter   | 1.85 µs | 2.2 µs  | 3.18 µs | 3.18 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 1.92 µs | 2.27 µs | 2.39 µs | 2.39 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.06 µs/iter  | 3.96 µs | 4.08 µs | 4.44 µs | 4.44 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.76 µs/iter  | 4.4 µs  | 8.2 µs  | 10.8 µs | 1.25 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.74 µs/iter | 6.5 µs  | 11.4 µs | 13.4 µs | 387.4 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.16 µs/iter | 10.8 µs | 17.3 µs | 20.4 µs | 348.9 µs |

