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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 428.44 ns/iter | 426.62 ns | 569.92 ns | 415.78 ns | 994.42 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.01 µs/iter   | 957.06 ns | 1.57 µs   | 853.87 ns | 1.57 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.41 µs/iter   | 1.42 µs   | 2.14 µs   | 1.28 µs   | 2.14 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 443.11 ns/iter | 446.8 ns  | 470.07 ns | 436.81 ns | 485.94 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 953.88 ns/iter | 907.87 ns | 1.47 µs   | 873.87 ns | 1.47 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.5 µs/iter    | 1.51 µs   | 1.97 µs   | 1.42 µs   | 1.97 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 434.45 ns/iter | 432.77 ns | 492.25 ns | 429.05 ns | 496.62 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.08 µs/iter   | 1.02 µs   | 1.56 µs   | 998.83 ns | 1.56 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.41 µs/iter   | 1.43 µs   | 1.63 µs   | 1.34 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 430.49 ns/iter | 430.77 ns | 438.41 ns | 427.07 ns | 450.85 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.01 µs/iter   | 953.86 ns | 1.52 µs   | 942.29 ns | 1.52 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.4 µs/iter    | 1.41 µs   | 1.56 µs   | 1.33 µs   | 1.56 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 478.19 ns/iter | 478.53 ns | 488.81 ns | 473.67 ns | 491.65 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.05 µs/iter   | 989.86 ns | 1.54 µs   | 965.97 ns | 1.54 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.49 µs/iter   | 1.5 µs    | 1.55 µs   | 1.44 µs   | 1.55 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 468.13 ns/iter | 469.26 ns | 475.97 ns | 462.78 ns | 476.44 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.07 µs/iter   | 1.02 µs   | 1.6 µs    | 975.59 ns | 1.6 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.77 µs/iter   | 1.76 µs   | 3.14 µs   | 1.71 µs   | 3.14 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 443.45 ns/iter | 437.63 ns | 463.54 ns | 432.73 ns | 1.26 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1 µs/iter      | 942.93 ns | 1.5 µs    | 922.5 ns  | 1.5 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.37 µs/iter   | 1.38 µs   | 2.11 µs   | 1.32 µs   | 2.11 µs |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 445.39 ns/iter | 438.06 ns | 853.35 ns | 423.63 ns | 904.35 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.01 µs/iter   | 945.04 ns | 1.49 µs   | 929.22 ns | 1.49 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.37 µs/iter   | 1.39 µs   | 1.4 µs    | 1.33 µs   | 1.4 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 463.59 ns/iter | 466.52 ns | 500.55 ns | 453.23 ns | 552.85 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.02 µs/iter   | 965.3 ns  | 1.49 µs   | 952.07 ns | 1.49 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.41 µs/iter   | 1.43 µs   | 2.09 µs   | 1.33 µs   | 2.09 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.7 µs/iter    | 6.2 µs   | 14.6 µs  | 5.3 µs   | 1.07 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.07 µs/iter  | 19.9 µs  | 127.2 µs | 19.1 µs  | 3.3 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 701.08 µs/iter | 746.9 µs | 957 µs   | 637.8 µs | 1.11 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | -------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.62 µs/iter | 8.8 µs  | 25.4 µs  | 7.9 µs   | 1.53 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.94 µs/iter | 18.1 µs | 125.6 µs | 17.4 µs  | 6.54 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.1 ms/iter   | 1.02 ms | 2.08 ms  | 972.9 µs | 2.11 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99     | Min      | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | ------- | -------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 9.62 µs/iter   | 7.9 µs   | 16.3 µs | 7.3 µs   | 1.16 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.71 µs/iter  | 16.4 µs  | 38.7 µs | 15.7 µs  | 3.24 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 660.75 µs/iter | 611.6 µs | 1.06 ms | 558.5 µs | 1.62 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average       | p75      | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------- | -------- | ------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.03 µs/iter  | 9.37 µs  | 9.5 µs  | 8.33 µs  | 9.5 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.37 µs/iter | 16.4 µs  | 33.6 µs | 15.4 µs  | 179.6 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 660.7 µs/iter | 617.5 µs | 1.51 ms | 585.9 µs | 1.57 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.14 µs/iter   | 8.22 µs  | 8.48 µs  | 7.97 µs  | 8.48 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 20.83 µs/iter  | 19.4 µs  | 115.1 µs | 18.7 µs  | 340.9 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 792.55 µs/iter | 746.7 µs | 1.51 ms  | 717.3 µs | 1.52 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 46.29 µs/iter | 37.4 µs | 370.2 µs | 36 µs   | 839.1 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 52.92 µs/iter | 50.8 µs | 148.2 µs | 49.8 µs | 384.7 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.18 ms/iter  | 1.07 ms | 2.49 ms  | 1.03 ms | 2.51 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average       | p75      | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | -------- | ------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 9.77 µs/iter  | 8.7 µs   | 19.1 µs | 7.3 µs   | 665.3 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.27 µs/iter | 16.4 µs  | 37 µs   | 15.5 µs  | 464.8 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 731.8 µs/iter | 686.2 µs | 1.59 ms | 657.6 µs | 2.1 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary') | 10.09 µs/iter  | 9 µs     | 44.3 µs | 6.4 µs   | 709.9 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.04 µs/iter  | 16.5 µs  | 27.7 µs | 15.5 µs  | 238.7 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 732.93 µs/iter | 685.7 µs | 1.6 ms  | 660.7 µs | 1.64 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 62.81 µs/iter  | 61.4 µs  | 167.9 µs | 60.6 µs  | 212.4 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex') | 322.1 µs/iter  | 321.1 µs | 354.7 µs | 316.2 µs | 1.05 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 759.31 µs/iter | 713.2 µs | 1.62 ms  | 685.9 µs | 1.65 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 358.74 ns/iter | 357.96 ns | 381.42 ns | 352.47 ns | 395.59 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 636.28 ns/iter | 639.29 ns | 848.32 ns | 626.78 ns | 848.32 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.01 µs/iter   | 933.34 ns | 1.57 µs   | 913.35 ns | 1.57 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 456.88 ns/iter | 455.46 ns | 478.15 ns | 451.26 ns | 488.13 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 957.05 ns/iter | 922.36 ns | 1.44 µs   | 806.26 ns | 1.44 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.38 µs/iter   | 1.48 µs   | 1.57 µs   | 1.26 µs   | 1.57 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 358.36 ns/iter | 358.97 ns | 380.79 ns | 351.93 ns | 381.27 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 627.25 ns/iter | 632 ns    | 705.61 ns | 620.19 ns | 705.61 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 983.36 ns/iter | 922.75 ns | 1.43 µs   | 891.64 ns | 1.43 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 431.13 ns/iter | 444.61 ns | 504 ns    | 380.23 ns | 534.24 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 626.04 ns/iter | 631.8 ns  | 675.03 ns | 619.71 ns | 675.03 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 833.26 ns/iter | 776.18 ns | 1.26 µs   | 766.18 ns | 1.26 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 600.51 ns/iter | 601.36 ns | 624.99 ns | 591.98 ns | 624.99 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.02 µs/iter   | 984.67 ns | 1.57 µs   | 879.03 ns | 1.57 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.66 µs/iter   | 1.66 µs   | 1.74 µs   | 1.64 µs   | 1.74 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 593.15 ns/iter | 593.84 ns | 624.61 ns | 585.12 ns | 624.61 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.05 µs/iter   | 991.36 ns | 1.63 µs   | 946.68 ns | 1.63 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.95 µs/iter   | 1.95 µs   | 2.04 µs   | 1.93 µs   | 2.04 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 358.13 ns/iter | 357.64 ns | 385.53 ns | 351.83 ns | 397.08 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 653.95 ns/iter | 658.66 ns | 718.57 ns | 645.63 ns | 718.57 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 974.84 ns/iter | 928.33 ns | 1.45 µs   | 912.18 ns | 1.45 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 360.02 ns/iter | 359.36 ns | 380.23 ns | 354.09 ns | 387.5 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 653.37 ns/iter | 659.78 ns | 663.09 ns | 646.24 ns | 663.09 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 975 ns/iter    | 924.34 ns | 1.43 µs   | 915.98 ns | 1.43 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 576.32 ns/iter | 577.18 ns | 609.77 ns | 567.99 ns | 609.77 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 877.52 ns/iter | 882.89 ns | 1.4 µs    | 757.24 ns | 1.4 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.12 µs   | 1.19 µs   | 1.1 µs    | 1.19 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 7.84 µs/iter | 7.84 µs | 7.97 µs | 7.79 µs | 7.97 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.13 µs/iter | 7.8 µs  | 27.8 µs | 6.9 µs  | 751.9 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.31 ms/iter | 1.21 ms | 3.59 ms | 1.16 ms | 3.71 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 10.17 µs/iter | 8.9 µs  | 28.8 µs | 8.1 µs   | 3.4 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 18.71 µs/iter | 18.2 µs | 29.4 µs | 17.1 µs  | 183.1 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.12 ms/iter  | 1.02 ms | 3.08 ms | 990.9 µs | 3.67 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.1 µs/iter   | 1.11 µs | 1.24 µs | 1.06 µs | 1.24 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 8.88 µs/iter  | 7.8 µs  | 26.8 µs | 7 µs    | 3.07 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.15 µs/iter | 36.5 µs | 66.4 µs | 34.8 µs | 219.2 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 127 ns/iter    | 126.05 ns | 136.7 ns  | 123.03 ns | 146.56 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 374.88 ns/iter | 378.82 ns | 405.61 ns | 367.34 ns | 649.25 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 8.91 µs/iter   | 9.19 µs   | 9.34 µs   | 8.45 µs   | 9.34 µs   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.72 µs/iter  | 3.68 µs | 4.28 µs | 3.64 µs | 4.28 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.34 µs/iter | 15.4 µs | 20.4 µs | 14.2 µs | 328.6 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 24.47 µs/iter | 23.1 µs | 43.7 µs | 22 µs   | 1.04 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.63 ns/iter | 110.72 ns | 120.83 ns | 107.72 ns | 131.53 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.47 µs/iter   | 1.47 µs   | 1.48 µs   | 1.45 µs   | 1.48 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 123.65 µs/iter | 119.6 µs  | 146.2 µs  | 116.3 µs  | 930.2 µs  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 7.85 µs/iter | 7.85 µs | 8.01 µs | 7.78 µs | 8.01 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 8.98 µs/iter | 7.9 µs  | 27.6 µs | 7 µs    | 753.7 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.32 ms/iter | 1.21 ms | 3.64 ms | 1.18 ms | 3.76 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 7.88 µs/iter | 7.9 µs  | 8.08 µs | 7.82 µs | 8.08 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 8.89 µs/iter | 8.96 µs | 9.27 µs | 8.59 µs | 9.27 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.32 ms/iter | 1.21 ms | 3.65 ms | 1.18 ms | 3.66 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 499.45 ns/iter | 503.99 ns | 525.21 ns | 494.22 ns | 587.84 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.71 µs/iter   | 3.96 µs   | 4.6 µs    | 2.89 µs   | 4.6 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 45.54 µs/iter  | 42.6 µs   | 65.9 µs   | 40.7 µs   | 935.5 µs  |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.63 ns/iter | 110.72 ns | 120.83 ns | 107.72 ns | 131.53 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 127 ns/iter    | 126.05 ns | 136.7 ns  | 123.03 ns | 146.56 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 358.13 ns/iter | 357.64 ns | 385.53 ns | 351.83 ns | 397.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 358.36 ns/iter | 358.97 ns | 380.79 ns | 351.93 ns | 381.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 358.74 ns/iter | 357.96 ns | 381.42 ns | 352.47 ns | 395.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 360.02 ns/iter | 359.36 ns | 380.23 ns | 354.09 ns | 387.5 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 374.88 ns/iter | 378.82 ns | 405.61 ns | 367.34 ns | 649.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 428.44 ns/iter | 426.62 ns | 569.92 ns | 415.78 ns | 994.42 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 430.49 ns/iter | 430.77 ns | 438.41 ns | 427.07 ns | 450.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 431.13 ns/iter | 444.61 ns | 504 ns    | 380.23 ns | 534.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 434.45 ns/iter | 432.77 ns | 492.25 ns | 429.05 ns | 496.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 443.11 ns/iter | 446.8 ns  | 470.07 ns | 436.81 ns | 485.94 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 443.45 ns/iter | 437.63 ns | 463.54 ns | 432.73 ns | 1.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 445.39 ns/iter | 438.06 ns | 853.35 ns | 423.63 ns | 904.35 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 456.88 ns/iter | 455.46 ns | 478.15 ns | 451.26 ns | 488.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 463.59 ns/iter | 466.52 ns | 500.55 ns | 453.23 ns | 552.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 468.13 ns/iter | 469.26 ns | 475.97 ns | 462.78 ns | 476.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 478.19 ns/iter | 478.53 ns | 488.81 ns | 473.67 ns | 491.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 499.45 ns/iter | 503.99 ns | 525.21 ns | 494.22 ns | 587.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 576.32 ns/iter | 577.18 ns | 609.77 ns | 567.99 ns | 609.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 593.15 ns/iter | 593.84 ns | 624.61 ns | 585.12 ns | 624.61 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 600.51 ns/iter | 601.36 ns | 624.99 ns | 591.98 ns | 624.99 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 626.04 ns/iter | 631.8 ns  | 675.03 ns | 619.71 ns | 675.03 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 627.25 ns/iter | 632 ns    | 705.61 ns | 620.19 ns | 705.61 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 636.28 ns/iter | 639.29 ns | 848.32 ns | 626.78 ns | 848.32 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 653.37 ns/iter | 659.78 ns | 663.09 ns | 646.24 ns | 663.09 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 653.95 ns/iter | 658.66 ns | 718.57 ns | 645.63 ns | 718.57 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 833.26 ns/iter | 776.18 ns | 1.26 µs   | 766.18 ns | 1.26 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 877.52 ns/iter | 882.89 ns | 1.4 µs    | 757.24 ns | 1.4 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 953.88 ns/iter | 907.87 ns | 1.47 µs   | 873.87 ns | 1.47 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 957.05 ns/iter | 922.36 ns | 1.44 µs   | 806.26 ns | 1.44 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 974.84 ns/iter | 928.33 ns | 1.45 µs   | 912.18 ns | 1.45 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 975 ns/iter    | 924.34 ns | 1.43 µs   | 915.98 ns | 1.43 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 983.36 ns/iter | 922.75 ns | 1.43 µs   | 891.64 ns | 1.43 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1 µs/iter      | 942.93 ns | 1.5 µs    | 922.5 ns  | 1.5 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.01 µs/iter   | 933.34 ns | 1.57 µs   | 913.35 ns | 1.57 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.01 µs/iter   | 945.04 ns | 1.49 µs   | 929.22 ns | 1.49 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.01 µs/iter   | 957.06 ns | 1.57 µs   | 853.87 ns | 1.57 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.01 µs/iter   | 953.86 ns | 1.52 µs   | 942.29 ns | 1.52 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.02 µs/iter   | 984.67 ns | 1.57 µs   | 879.03 ns | 1.57 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.02 µs/iter   | 965.3 ns  | 1.49 µs   | 952.07 ns | 1.49 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.05 µs/iter   | 991.36 ns | 1.63 µs   | 946.68 ns | 1.63 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.05 µs/iter   | 989.86 ns | 1.54 µs   | 965.97 ns | 1.54 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.07 µs/iter   | 1.02 µs   | 1.6 µs    | 975.59 ns | 1.6 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.08 µs/iter   | 1.02 µs   | 1.56 µs   | 998.83 ns | 1.56 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.1 µs/iter    | 1.11 µs   | 1.24 µs   | 1.06 µs   | 1.24 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.12 µs   | 1.19 µs   | 1.1 µs    | 1.19 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.37 µs/iter   | 1.39 µs   | 1.4 µs    | 1.33 µs   | 1.4 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.37 µs/iter   | 1.38 µs   | 2.11 µs   | 1.32 µs   | 2.11 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.38 µs/iter   | 1.48 µs   | 1.57 µs   | 1.26 µs   | 1.57 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.4 µs/iter    | 1.41 µs   | 1.56 µs   | 1.33 µs   | 1.56 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.41 µs/iter   | 1.43 µs   | 2.09 µs   | 1.33 µs   | 2.09 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.41 µs/iter   | 1.42 µs   | 2.14 µs   | 1.28 µs   | 2.14 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.41 µs/iter   | 1.43 µs   | 1.63 µs   | 1.34 µs   | 1.63 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.47 µs/iter   | 1.47 µs   | 1.48 µs   | 1.45 µs   | 1.48 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.49 µs/iter   | 1.5 µs    | 1.55 µs   | 1.44 µs   | 1.55 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.5 µs/iter    | 1.51 µs   | 1.97 µs   | 1.42 µs   | 1.97 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.66 µs/iter   | 1.66 µs   | 1.74 µs   | 1.64 µs   | 1.74 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.77 µs/iter   | 1.76 µs   | 3.14 µs   | 1.71 µs   | 3.14 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.95 µs/iter   | 1.95 µs   | 2.04 µs   | 1.93 µs   | 2.04 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.71 µs/iter   | 3.96 µs   | 4.6 µs    | 2.89 µs   | 4.6 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.72 µs/iter   | 3.68 µs   | 4.28 µs   | 3.64 µs   | 4.28 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.7 µs/iter    | 6.2 µs    | 14.6 µs   | 5.3 µs    | 1.07 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 7.84 µs/iter   | 7.84 µs   | 7.97 µs   | 7.79 µs   | 7.97 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 7.85 µs/iter   | 7.85 µs   | 8.01 µs   | 7.78 µs   | 8.01 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 7.88 µs/iter   | 7.9 µs    | 8.08 µs   | 7.82 µs   | 8.08 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.14 µs/iter   | 8.22 µs   | 8.48 µs   | 7.97 µs   | 8.48 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 8.88 µs/iter   | 7.8 µs    | 26.8 µs   | 7 µs      | 3.07 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 8.89 µs/iter   | 8.96 µs   | 9.27 µs   | 8.59 µs   | 9.27 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 8.91 µs/iter   | 9.19 µs   | 9.34 µs   | 8.45 µs   | 9.34 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 8.98 µs/iter   | 7.9 µs    | 27.6 µs   | 7 µs      | 753.7 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.03 µs/iter   | 9.37 µs   | 9.5 µs    | 8.33 µs   | 9.5 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.13 µs/iter   | 7.8 µs    | 27.8 µs   | 6.9 µs    | 751.9 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 9.62 µs/iter   | 7.9 µs    | 16.3 µs   | 7.3 µs    | 1.16 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 9.77 µs/iter   | 8.7 µs    | 19.1 µs   | 7.3 µs    | 665.3 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 10.09 µs/iter  | 9 µs      | 44.3 µs   | 6.4 µs    | 709.9 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 10.17 µs/iter  | 8.9 µs    | 28.8 µs   | 8.1 µs    | 3.4 ms    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.62 µs/iter  | 8.8 µs    | 25.4 µs   | 7.9 µs    | 1.53 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.34 µs/iter  | 15.4 µs   | 20.4 µs   | 14.2 µs   | 328.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.04 µs/iter  | 16.5 µs   | 27.7 µs   | 15.5 µs   | 238.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.27 µs/iter  | 16.4 µs   | 37 µs     | 15.5 µs   | 464.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.37 µs/iter  | 16.4 µs   | 33.6 µs   | 15.4 µs   | 179.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.71 µs/iter  | 16.4 µs   | 38.7 µs   | 15.7 µs   | 3.24 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 18.71 µs/iter  | 18.2 µs   | 29.4 µs   | 17.1 µs   | 183.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 20.83 µs/iter  | 19.4 µs   | 115.1 µs  | 18.7 µs   | 340.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.94 µs/iter  | 18.1 µs   | 125.6 µs  | 17.4 µs   | 6.54 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.07 µs/iter  | 19.9 µs   | 127.2 µs  | 19.1 µs   | 3.3 ms    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 24.47 µs/iter  | 23.1 µs   | 43.7 µs   | 22 µs     | 1.04 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.15 µs/iter  | 36.5 µs   | 66.4 µs   | 34.8 µs   | 219.2 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 45.54 µs/iter  | 42.6 µs   | 65.9 µs   | 40.7 µs   | 935.5 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 46.29 µs/iter  | 37.4 µs   | 370.2 µs  | 36 µs     | 839.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 52.92 µs/iter  | 50.8 µs   | 148.2 µs  | 49.8 µs   | 384.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 62.81 µs/iter  | 61.4 µs   | 167.9 µs  | 60.6 µs   | 212.4 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 123.65 µs/iter | 119.6 µs  | 146.2 µs  | 116.3 µs  | 930.2 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 322.1 µs/iter  | 321.1 µs  | 354.7 µs  | 316.2 µs  | 1.05 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 660.7 µs/iter  | 617.5 µs  | 1.51 ms   | 585.9 µs  | 1.57 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 660.75 µs/iter | 611.6 µs  | 1.06 ms   | 558.5 µs  | 1.62 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 701.08 µs/iter | 746.9 µs  | 957 µs    | 637.8 µs  | 1.11 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 731.8 µs/iter  | 686.2 µs  | 1.59 ms   | 657.6 µs  | 2.1 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 732.93 µs/iter | 685.7 µs  | 1.6 ms    | 660.7 µs  | 1.64 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 759.31 µs/iter | 713.2 µs  | 1.62 ms   | 685.9 µs  | 1.65 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 792.55 µs/iter | 746.7 µs  | 1.51 ms   | 717.3 µs  | 1.52 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.1 ms/iter    | 1.02 ms   | 2.08 ms   | 972.9 µs  | 2.11 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.12 ms/iter   | 1.02 ms   | 3.08 ms   | 990.9 µs  | 3.67 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.18 ms/iter   | 1.07 ms   | 2.49 ms   | 1.03 ms   | 2.51 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.31 ms/iter   | 1.21 ms   | 3.59 ms   | 1.16 ms   | 3.71 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.32 ms/iter   | 1.21 ms   | 3.65 ms   | 1.18 ms   | 3.66 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.32 ms/iter   | 1.21 ms   | 3.64 ms   | 1.18 ms   | 3.76 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.8 (x64-linux)                  | http      | 91,620.256/rps | 94,914.949 | 97,603.861 | 11,250.051 | 98,894.953 |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | http      | 51,439.94/rps  | 53,808.736 | 54,486.472 | 4,961      | 55,343.894 |
| node v18.7.0 (x64-linux)               | http      | 50,737.732/rps | 52,383.675 | 53,091.365 | 6,022.277  | 53,447.773 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 160.45 ns/iter | 159.88 ns | 202.3 ns  | 153.47 ns | 258.76 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 305.47 ns/iter | 306.6 ns  | 331.04 ns | 298.95 ns | 333.8 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 331.45 ns/iter | 332.47 ns | 359.26 ns | 325.9 ns  | 387.06 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 82.9 ns/iter   | 83.25 ns  | 106.36 ns | 70.58 ns  | 132.55 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.65 ns/iter | 232.23 ns | 250.49 ns | 224.17 ns | 261.18 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.32 ns/iter | 240.88 ns | 255.47 ns | 234.02 ns | 262.36 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 82.9 ns/iter   | 83.25 ns  | 106.36 ns | 70.58 ns  | 132.55 ns |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 160.45 ns/iter | 159.88 ns | 202.3 ns  | 153.47 ns | 258.76 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.65 ns/iter | 232.23 ns | 250.49 ns | 224.17 ns | 261.18 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.32 ns/iter | 240.88 ns | 255.47 ns | 234.02 ns | 262.36 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 305.47 ns/iter | 306.6 ns  | 331.04 ns | 298.95 ns | 333.8 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 331.45 ns/iter | 332.47 ns | 359.26 ns | 325.9 ns  | 387.06 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders" | 33.39 ms/iter  | 33.07 ms  | 36.47 ms  | 32.7 ms   | 36.47 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 102.5 ms/iter  | 104.2 ms  | 104.48 ms | 99 ms     | 104.48 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 228.46 ms/iter | 227.91 ms | 248.78 ms | 222.59 ms | 248.78 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------ | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products" | 96.49 µs/iter  | 95.3 µs  | 113.3 µs | 90.5 µs  | 1.15 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 345.66 µs/iter | 347.7 µs | 392.7 µs | 310.3 µs | 760.9 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 403.1 µs/iter  | 377.5 µs | 431.3 µs | 364.7 µs | 5.9 ms   |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 60 µs/iter     | 60.4 µs  | 74.8 µs  | 54.4 µs  | 465.1 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 173.86 µs/iter | 182.6 µs | 188.8 µs | 150.3 µs | 441.6 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 351.81 µs/iter | 316.8 µs | 525.2 µs | 308.1 µs | 8.94 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 53.17 µs/iter  | 50.2 µs  | 92 µs    | 45.2 µs  | 411.9 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.7 µs/iter  | 113.5 µs | 175.2 µs | 108.6 µs | 588 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 298.88 µs/iter | 281.2 µs | 615.3 µs | 250.9 µs | 3.68 ms  |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 174.98 µs/iter | 175.6 µs | 188.2 µs | 157.8 µs | 634.3 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 532.22 µs/iter | 542.6 µs | 553.9 µs | 445.4 µs | 926.1 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 951.28 µs/iter | 845.1 µs | 6.23 ms  | 825.9 µs | 7.68 ms  |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 53.17 µs/iter  | 50.2 µs   | 92 µs     | 45.2 µs   | 411.9 µs  |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 60 µs/iter     | 60.4 µs   | 74.8 µs   | 54.4 µs   | 465.1 µs  |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products"  | 96.49 µs/iter  | 95.3 µs   | 113.3 µs  | 90.5 µs   | 1.15 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.7 µs/iter  | 113.5 µs  | 175.2 µs  | 108.6 µs  | 588 µs    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 173.86 µs/iter | 182.6 µs  | 188.8 µs  | 150.3 µs  | 441.6 µs  |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 174.98 µs/iter | 175.6 µs  | 188.2 µs  | 157.8 µs  | 634.3 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 298.88 µs/iter | 281.2 µs  | 615.3 µs  | 250.9 µs  | 3.68 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 345.66 µs/iter | 347.7 µs  | 392.7 µs  | 310.3 µs  | 760.9 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 351.81 µs/iter | 316.8 µs  | 525.2 µs  | 308.1 µs  | 8.94 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 403.1 µs/iter  | 377.5 µs  | 431.3 µs  | 364.7 µs  | 5.9 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 532.22 µs/iter | 542.6 µs  | 553.9 µs  | 445.4 µs  | 926.1 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 951.28 µs/iter | 845.1 µs  | 6.23 ms   | 825.9 µs  | 7.68 ms   |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders"    | 33.39 ms/iter  | 33.07 ms  | 36.47 ms  | 32.7 ms   | 36.47 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 102.5 ms/iter  | 104.2 ms  | 104.48 ms | 99 ms     | 104.48 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 228.46 ms/iter | 227.91 ms | 248.78 ms | 222.59 ms | 248.78 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ---------- | -------------- | -------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 492.22 ns/iter | 499.2 ns | 580.93 ns | 445.4 ns | 616.28 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.33 µs/iter   | 1.36 µs  | 1.39 µs   | 1.18 µs  | 1.39 µs   |
| bun 0.1.8 (x64-linux)                  | nanoid(36) | 1.82 µs/iter   | 1.83 µs  | 2.01 µs   | 1.78 µs  | 2.01 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.8 (x64-linux)                  | console.log('hello') | 2.26 µs/iter  | 2.29 µs | 2.51 µs | 1.95 µs | 2.51 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.13 µs/iter  | 4.17 µs | 4.54 µs | 4.02 µs | 4.54 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.01 µs/iter | 11 µs   | 12.7 µs | 6.6 µs  | 1.05 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.17 µs/iter  | 2.2 µs  | 2.31 µs | 1.99 µs | 2.31 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.66 µs/iter  | 8.1 µs  | 11.7 µs | 4.4 µs  | 339 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.07 µs/iter | 16.3 µs | 24.7 µs | 10.9 µs | 362.8 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.17 µs/iter  | 2.2 µs  | 2.31 µs | 1.99 µs | 2.31 µs  |
| bun 0.1.8 (x64-linux)                  | console.log('hello')             | 2.26 µs/iter  | 2.29 µs | 2.51 µs | 1.95 µs | 2.51 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.13 µs/iter  | 4.17 µs | 4.54 µs | 4.02 µs | 4.54 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.66 µs/iter  | 8.1 µs  | 11.7 µs | 4.4 µs  | 339 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.01 µs/iter | 11 µs   | 12.7 µs | 6.6 µs  | 1.05 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.07 µs/iter | 16.3 µs | 24.7 µs | 10.9 µs | 362.8 µs |

