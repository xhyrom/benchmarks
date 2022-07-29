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
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 423.19 ns/iter | 414.98 ns | 425.93 ns | 449.7 ns | 519.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.01 µs/iter   | 890.07 ns | 1.01 µs   | 1.64 µs  | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.54 µs/iter   | 1.41 µs   | 1.57 µs   | 2.34 µs  | 2.34 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 445.21 ns/iter | 437.69 ns | 448.37 ns | 494.25 ns | 500.1 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.03 µs/iter   | 942.54 ns | 967.5 ns  | 1.61 µs   | 1.61 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.64 µs/iter   | 1.49 µs   | 1.66 µs   | 2.06 µs   | 2.06 µs  |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 430.65 ns/iter | 426.78 ns | 431.36 ns | 441.97 ns | 447.63 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter   | 933.83 ns | 960.15 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.43 µs/iter   | 1.32 µs   | 1.43 µs   | 1.93 µs   | 1.93 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 429.97 ns/iter | 425.2 ns  | 430.06 ns | 443.81 ns | 456.72 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 968.94 ns/iter | 887.51 ns | 900.89 ns | 1.53 µs   | 1.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.33 µs/iter   | 1.28 µs   | 1.34 µs   | 1.94 µs   | 1.94 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 479.75 ns/iter | 475.51 ns | 480.71 ns | 489.26 ns | 489.29 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.02 µs/iter   | 922.89 ns | 954.92 ns | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.57 µs/iter   | 1.46 µs   | 1.57 µs   | 2.82 µs   | 2.82 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 474.03 ns/iter | 468.37 ns | 474.08 ns | 512.15 ns | 547.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.09 µs/iter   | 950.85 ns | 1.07 µs   | 1.7 µs    | 1.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.95 µs/iter   | 1.89 µs   | 1.94 µs   | 3.06 µs   | 3.06 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 433.82 ns/iter | 429.81 ns | 434.13 ns | 449.47 ns | 452.77 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.13 µs/iter   | 1.02 µs   | 1.06 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.46 µs/iter   | 1.34 µs   | 1.49 µs   | 2.27 µs   | 2.27 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 432.99 ns/iter | 423.25 ns | 435.64 ns | 468.22 ns | 483.13 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.03 µs/iter   | 928.12 ns | 957.94 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.48 µs/iter   | 1.41 µs   | 1.49 µs   | 1.63 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 463.02 ns/iter | 453.95 ns | 467.02 ns | 474.26 ns | 479.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1 µs/iter      | 898.86 ns | 934.49 ns | 1.95 µs   | 1.95 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.46 µs/iter   | 1.41 µs   | 1.48 µs   | 1.66 µs   | 1.66 µs  |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 8.51 µs/iter   | 5.4 µs   | 6.9 µs   | 16.3 µs  | 10.98 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.77 µs/iter  | 19.3 µs  | 20.2 µs  | 103.4 µs | 179.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 706.59 µs/iter | 643.8 µs | 762.1 µs | 857.5 µs | 1.12 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75      | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.88 µs/iter | 7.8 µs   | 10 µs   | 29.5 µs  | 3.76 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.16 µs/iter | 17.7 µs  | 18.4 µs | 101.9 µs | 2.05 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.12 ms/iter  | 989.5 µs | 1.03 ms | 2.14 ms  | 2.22 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.79 µs/iter   | 7.4 µs   | 8.3 µs   | 14.6 µs | 633 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.6 µs/iter   | 15.7 µs  | 16.6 µs  | 32 µs   | 222.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 673.94 µs/iter | 584.2 µs | 621.2 µs | 1.11 ms | 1.62 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average      | p75      | p99      | Min     | Max      |
| -------------------------------------- | -------------------------------------- | ------------ | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.83 µs/iter | 7.3 µs   | 8.3 µs   | 13.3 µs | 1.42 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.6 µs/iter | 15.6 µs  | 16.6 µs  | 32.6 µs | 187.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 676 µs/iter  | 594.4 µs | 630.9 µs | 1.57 ms | 1.63 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 9.07 µs/iter   | 6.9 µs   | 8.7 µs   | 16.2 µs  | 383.2 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.03 µs/iter  | 18.9 µs  | 19.5 µs  | 118.1 µs | 764.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 799.68 µs/iter | 724.9 µs | 753.8 µs | 1.55 ms  | 1.58 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.56 µs/iter | 36.2 µs | 38.2 µs | 388.7 µs | 764.7 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 53.37 µs/iter | 49.9 µs | 51.2 µs | 150.8 µs | 481.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.21 ms/iter  | 1.07 ms | 1.1 ms  | 2.53 ms  | 2.56 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 7.39 µs/iter   | 5.9 µs   | 6.8 µs   | 12.5 µs | 725.4 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.68 µs/iter  | 15.8 µs  | 16.8 µs  | 36.9 µs | 488.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 738.34 µs/iter | 668.4 µs | 693.6 µs | 1.64 ms | 1.66 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 7.49 µs/iter   | 7.19 µs  | 7.62 µs  | 8.1 µs  | 8.1 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.22 µs/iter  | 15.9 µs  | 16.6 µs  | 28.9 µs | 273.6 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 740.46 µs/iter | 666.6 µs | 694.9 µs | 1.63 ms | 1.68 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 63.24 µs/iter  | 60.8 µs  | 61.8 µs  | 171.7 µs | 206.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 326.33 µs/iter | 318.1 µs | 329.8 µs | 352.9 µs | 822.1 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 770.29 µs/iter | 690.9 µs | 723.2 µs | 1.68 ms  | 1.93 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 358.81 ns/iter | 351.25 ns | 358.12 ns | 393.78 ns | 394.04 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 633.16 ns/iter | 622 ns    | 637.27 ns | 825.37 ns | 825.37 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.07 µs/iter   | 967.41 ns | 993.41 ns | 1.65 µs   | 1.65 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 457.04 ns/iter | 451.26 ns | 456.55 ns | 477.8 ns | 480.26 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.04 µs/iter   | 944.36 ns | 966.53 ns | 1.56 µs  | 1.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.52 µs/iter   | 1.38 µs   | 1.62 µs   | 1.74 µs  | 1.74 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 355.57 ns/iter | 348.9 ns  | 355.33 ns | 384.55 ns | 386.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 629.19 ns/iter | 619.54 ns | 633.72 ns | 806.79 ns | 806.79 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 947.84 ns/iter | 864.48 ns | 876.61 ns | 1.48 µs   | 1.48 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 387.94 ns/iter | 354.88 ns | 399.42 ns | 531.52 ns | 534.81 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 623.31 ns/iter | 614.76 ns | 631.13 ns | 684.5 ns  | 684.5 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.01 µs/iter   | 924.25 ns | 936.92 ns | 1.53 µs   | 1.53 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 465.29 ns/iter | 436.23 ns | 482.26 ns | 557.05 ns | 562.25 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.01 µs/iter   | 931.12 ns | 944.13 ns | 1.56 µs   | 1.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.73 µs/iter   | 1.72 µs   | 1.74 µs   | 1.86 µs   | 1.86 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 462.56 ns/iter | 437.48 ns | 467.15 ns | 568.26 ns | 580.21 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.02 µs/iter   | 937.74 ns | 962.57 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.01 µs/iter   | 1.99 µs   | 2.01 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 355.32 ns/iter | 349.29 ns | 354.06 ns | 381.6 ns  | 383.63 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 649.66 ns/iter | 640.51 ns | 657.21 ns | 696.32 ns | 696.32 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 949.09 ns/iter | 867.13 ns | 880.41 ns | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 358.59 ns/iter | 351.99 ns | 357.71 ns | 388.49 ns | 391.59 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 650.07 ns/iter | 641.85 ns | 656.84 ns | 665.17 ns | 665.17 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 961.17 ns/iter | 868.5 ns  | 904.05 ns | 1.49 µs   | 1.49 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 444.24 ns/iter | 417.44 ns | 458.56 ns | 533.8 ns | 534.86 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 907.57 ns/iter | 817 ns    | 832.3 ns  | 1.45 µs  | 1.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.14 µs/iter   | 1.13 µs   | 1.15 µs   | 1.2 µs   | 1.2 µs    |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.1 µs/iter   | 7.99 µs | 8.13 µs | 8.41 µs | 8.41 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 10.66 µs/iter | 7.8 µs  | 9.8 µs  | 28.6 µs | 3.59 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.32 ms/iter  | 1.17 ms | 1.21 ms | 3.72 ms | 3.78 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75      | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | -------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 10.37 µs/iter | 7.9 µs   | 9.8 µs  | 28.2 µs | 1.32 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 19.36 µs/iter | 17.8 µs  | 18.8 µs | 31.3 µs | 216.4 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.13 ms/iter  | 992.7 µs | 1.03 ms | 3.22 ms | 3.53 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min       | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.11 µs/iter  | 1.07 µs | 1.13 µs | 1.19 µs   | 1.19 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 22.81 µs/iter | 11.3 µs | 19.2 µs | 282.49 µs | 2.01 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 38.11 µs/iter | 35.1 µs | 37.3 µs | 68.8 µs   | 257.6 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 127.75 ns/iter | 123.7 ns  | 126.76 ns | 138.1 ns  | 169.29 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 366.3 ns/iter  | 358.45 ns | 373.08 ns | 396.95 ns | 516.94 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 19.64 µs/iter  | 11.4 µs   | 18.7 µs   | 140.2 µs  | 1.32 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.75 µs/iter  | 3.66 µs | 3.68 µs | 4.63 µs | 4.63 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.49 µs/iter | 14.3 µs | 15.5 µs | 20.5 µs | 388.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 24.46 µs/iter | 21.9 µs | 23.5 µs | 43.8 µs | 1.16 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 112.62 ns/iter | 108.99 ns | 111.55 ns | 122.89 ns | 129.95 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.59 µs/iter   | 1.58 µs   | 1.6 µs    | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 122.5 µs/iter  | 116 µs    | 118.2 µs  | 153.8 µs  | 852.9 µs  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.18 µs/iter | 7.97 µs | 8.25 µs | 8.45 µs | 8.45 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 9.71 µs/iter | 7.4 µs  | 8.8 µs  | 29.1 µs | 1.45 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.33 ms/iter | 1.18 ms | 1.23 ms | 3.72 ms | 3.77 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.22 µs/iter | 8.15 µs | 8.24 µs | 8.4 µs  | 8.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.56 µs/iter | 7.4 µs  | 8.6 µs  | 28.9 µs | 1.59 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.33 ms/iter | 1.18 ms | 1.23 ms | 3.75 ms | 3.99 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 497.64 ns/iter | 492.63 ns | 500.26 ns | 510.31 ns | 518.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.13 µs/iter   | 3.01 µs   | 4.53 µs   | 5.44 µs   | 5.44 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 49.03 µs/iter  | 44 µs     | 45.9 µs   | 72.1 µs   | 1.23 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 112.62 ns/iter | 108.99 ns | 111.55 ns | 122.89 ns | 129.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 127.75 ns/iter | 123.7 ns  | 126.76 ns | 138.1 ns  | 169.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 355.32 ns/iter | 349.29 ns | 354.06 ns | 381.6 ns  | 383.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 355.57 ns/iter | 348.9 ns  | 355.33 ns | 384.55 ns | 386.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 358.59 ns/iter | 351.99 ns | 357.71 ns | 388.49 ns | 391.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 358.81 ns/iter | 351.25 ns | 358.12 ns | 393.78 ns | 394.04 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 366.3 ns/iter  | 358.45 ns | 373.08 ns | 396.95 ns | 516.94 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 387.94 ns/iter | 354.88 ns | 399.42 ns | 531.52 ns | 534.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 423.19 ns/iter | 414.98 ns | 425.93 ns | 449.7 ns  | 519.69 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 429.97 ns/iter | 425.2 ns  | 430.06 ns | 443.81 ns | 456.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 430.65 ns/iter | 426.78 ns | 431.36 ns | 441.97 ns | 447.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 432.99 ns/iter | 423.25 ns | 435.64 ns | 468.22 ns | 483.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 433.82 ns/iter | 429.81 ns | 434.13 ns | 449.47 ns | 452.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 444.24 ns/iter | 417.44 ns | 458.56 ns | 533.8 ns  | 534.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 445.21 ns/iter | 437.69 ns | 448.37 ns | 494.25 ns | 500.1 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 457.04 ns/iter | 451.26 ns | 456.55 ns | 477.8 ns  | 480.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 462.56 ns/iter | 437.48 ns | 467.15 ns | 568.26 ns | 580.21 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 463.02 ns/iter | 453.95 ns | 467.02 ns | 474.26 ns | 479.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 465.29 ns/iter | 436.23 ns | 482.26 ns | 557.05 ns | 562.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 474.03 ns/iter | 468.37 ns | 474.08 ns | 512.15 ns | 547.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 479.75 ns/iter | 475.51 ns | 480.71 ns | 489.26 ns | 489.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 497.64 ns/iter | 492.63 ns | 500.26 ns | 510.31 ns | 518.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 623.31 ns/iter | 614.76 ns | 631.13 ns | 684.5 ns  | 684.5 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 629.19 ns/iter | 619.54 ns | 633.72 ns | 806.79 ns | 806.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 633.16 ns/iter | 622 ns    | 637.27 ns | 825.37 ns | 825.37 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 649.66 ns/iter | 640.51 ns | 657.21 ns | 696.32 ns | 696.32 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 650.07 ns/iter | 641.85 ns | 656.84 ns | 665.17 ns | 665.17 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 907.57 ns/iter | 817 ns    | 832.3 ns  | 1.45 µs   | 1.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 947.84 ns/iter | 864.48 ns | 876.61 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 949.09 ns/iter | 867.13 ns | 880.41 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 961.17 ns/iter | 868.5 ns  | 904.05 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 968.94 ns/iter | 887.51 ns | 900.89 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1 µs/iter      | 898.86 ns | 934.49 ns | 1.95 µs   | 1.95 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.01 µs/iter   | 924.25 ns | 936.92 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.01 µs/iter   | 890.07 ns | 1.01 µs   | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.01 µs/iter   | 931.12 ns | 944.13 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.02 µs/iter   | 922.89 ns | 954.92 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.02 µs/iter   | 937.74 ns | 962.57 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.03 µs/iter   | 928.12 ns | 957.94 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.03 µs/iter   | 942.54 ns | 967.5 ns  | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.04 µs/iter   | 933.83 ns | 960.15 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.04 µs/iter   | 944.36 ns | 966.53 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.07 µs/iter   | 967.41 ns | 993.41 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.09 µs/iter   | 950.85 ns | 1.07 µs   | 1.7 µs    | 1.7 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.11 µs/iter   | 1.07 µs   | 1.13 µs   | 1.19 µs   | 1.19 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.13 µs/iter   | 1.02 µs   | 1.06 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.14 µs/iter   | 1.13 µs   | 1.15 µs   | 1.2 µs    | 1.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.33 µs/iter   | 1.28 µs   | 1.34 µs   | 1.94 µs   | 1.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.43 µs/iter   | 1.32 µs   | 1.43 µs   | 1.93 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.46 µs/iter   | 1.34 µs   | 1.49 µs   | 2.27 µs   | 2.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.46 µs/iter   | 1.41 µs   | 1.48 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.48 µs/iter   | 1.41 µs   | 1.49 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.52 µs/iter   | 1.38 µs   | 1.62 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.54 µs/iter   | 1.41 µs   | 1.57 µs   | 2.34 µs   | 2.34 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.57 µs/iter   | 1.46 µs   | 1.57 µs   | 2.82 µs   | 2.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.59 µs/iter   | 1.58 µs   | 1.6 µs    | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.64 µs/iter   | 1.49 µs   | 1.66 µs   | 2.06 µs   | 2.06 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.73 µs/iter   | 1.72 µs   | 1.74 µs   | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.95 µs/iter   | 1.89 µs   | 1.94 µs   | 3.06 µs   | 3.06 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.01 µs/iter   | 1.99 µs   | 2.01 µs   | 2.14 µs   | 2.14 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.75 µs/iter   | 3.66 µs   | 3.68 µs   | 4.63 µs   | 4.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.13 µs/iter   | 3.01 µs   | 4.53 µs   | 5.44 µs   | 5.44 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 7.39 µs/iter   | 5.9 µs    | 6.8 µs    | 12.5 µs   | 725.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 7.49 µs/iter   | 7.19 µs   | 7.62 µs   | 8.1 µs    | 8.1 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.1 µs/iter    | 7.99 µs   | 8.13 µs   | 8.41 µs   | 8.41 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.18 µs/iter   | 7.97 µs   | 8.25 µs   | 8.45 µs   | 8.45 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.22 µs/iter   | 8.15 µs   | 8.24 µs   | 8.4 µs    | 8.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 8.51 µs/iter   | 5.4 µs    | 6.9 µs    | 16.3 µs   | 10.98 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.79 µs/iter   | 7.4 µs    | 8.3 µs    | 14.6 µs   | 633 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.83 µs/iter   | 7.3 µs    | 8.3 µs    | 13.3 µs   | 1.42 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 9.07 µs/iter   | 6.9 µs    | 8.7 µs    | 16.2 µs   | 383.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.56 µs/iter   | 7.4 µs    | 8.6 µs    | 28.9 µs   | 1.59 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 9.71 µs/iter   | 7.4 µs    | 8.8 µs    | 29.1 µs   | 1.45 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 10.37 µs/iter  | 7.9 µs    | 9.8 µs    | 28.2 µs   | 1.32 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 10.66 µs/iter  | 7.8 µs    | 9.8 µs    | 28.6 µs   | 3.59 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.88 µs/iter  | 7.8 µs    | 10 µs     | 29.5 µs   | 3.76 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.49 µs/iter  | 14.3 µs   | 15.5 µs   | 20.5 µs   | 388.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.22 µs/iter  | 15.9 µs   | 16.6 µs   | 28.9 µs   | 273.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.6 µs/iter   | 15.6 µs   | 16.6 µs   | 32.6 µs   | 187.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.6 µs/iter   | 15.7 µs   | 16.6 µs   | 32 µs     | 222.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.68 µs/iter  | 15.8 µs   | 16.8 µs   | 36.9 µs   | 488.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 19.36 µs/iter  | 17.8 µs   | 18.8 µs   | 31.3 µs   | 216.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 19.64 µs/iter  | 11.4 µs   | 18.7 µs   | 140.2 µs  | 1.32 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.16 µs/iter  | 17.7 µs   | 18.4 µs   | 101.9 µs  | 2.05 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.03 µs/iter  | 18.9 µs   | 19.5 µs   | 118.1 µs  | 764.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.77 µs/iter  | 19.3 µs   | 20.2 µs   | 103.4 µs  | 179.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 22.81 µs/iter  | 11.3 µs   | 19.2 µs   | 282.49 µs | 2.01 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 24.46 µs/iter  | 21.9 µs   | 23.5 µs   | 43.8 µs   | 1.16 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 38.11 µs/iter  | 35.1 µs   | 37.3 µs   | 68.8 µs   | 257.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.56 µs/iter  | 36.2 µs   | 38.2 µs   | 388.7 µs  | 764.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 49.03 µs/iter  | 44 µs     | 45.9 µs   | 72.1 µs   | 1.23 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 53.37 µs/iter  | 49.9 µs   | 51.2 µs   | 150.8 µs  | 481.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 63.24 µs/iter  | 60.8 µs   | 61.8 µs   | 171.7 µs  | 206.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 122.5 µs/iter  | 116 µs    | 118.2 µs  | 153.8 µs  | 852.9 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 326.33 µs/iter | 318.1 µs  | 329.8 µs  | 352.9 µs  | 822.1 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 673.94 µs/iter | 584.2 µs  | 621.2 µs  | 1.11 ms   | 1.62 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 676 µs/iter    | 594.4 µs  | 630.9 µs  | 1.57 ms   | 1.63 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 706.59 µs/iter | 643.8 µs  | 762.1 µs  | 857.5 µs  | 1.12 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 738.34 µs/iter | 668.4 µs  | 693.6 µs  | 1.64 ms   | 1.66 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 740.46 µs/iter | 666.6 µs  | 694.9 µs  | 1.63 ms   | 1.68 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 770.29 µs/iter | 690.9 µs  | 723.2 µs  | 1.68 ms   | 1.93 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 799.68 µs/iter | 724.9 µs  | 753.8 µs  | 1.55 ms   | 1.58 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.12 ms/iter   | 989.5 µs  | 1.03 ms   | 2.14 ms   | 2.22 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.13 ms/iter   | 992.7 µs  | 1.03 ms   | 3.22 ms   | 3.53 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.21 ms/iter   | 1.07 ms   | 1.1 ms    | 2.53 ms   | 2.56 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.32 ms/iter   | 1.17 ms   | 1.21 ms   | 3.72 ms   | 3.78 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.33 ms/iter   | 1.18 ms   | 1.23 ms   | 3.72 ms   | 3.77 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.33 ms/iter   | 1.18 ms   | 1.23 ms   | 3.75 ms   | 3.99 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.5 (x64-linux)                  | http      | 90,489.433/rps | 90,489.433 | 90,489.433 | 90,489.433 | 90,489.433 |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 51,883.101/rps | 51,883.101 | 51,883.101 | 51,883.101 | 51,883.101 |
| node v18.7.0 (x64-linux)               | http      | 48,574.061/rps | 48,574.061 | 48,574.061 | 48,574.061 | 48,574.061 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.13 ns/iter | 153.47 ns | 157.73 ns | 194.02 ns | 316.85 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 323.06 ns/iter | 316.23 ns | 323.8 ns  | 353.04 ns | 363.12 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 323.18 ns/iter | 317.62 ns | 321.42 ns | 354.55 ns | 376.46 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 233.01 ns/iter | 225.12 ns | 233.75 ns | 252.99 ns | 254.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 236.31 ns/iter | 231.73 ns | 239.38 ns | 253.61 ns | 261.66 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 373.66 ns/iter | 354.68 ns | 375.94 ns | 426.28 ns | 451 ns    |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.13 ns/iter | 153.47 ns | 157.73 ns | 194.02 ns | 316.85 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 233.01 ns/iter | 225.12 ns | 233.75 ns | 252.99 ns | 254.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 236.31 ns/iter | 231.73 ns | 239.38 ns | 253.61 ns | 261.66 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 323.06 ns/iter | 316.23 ns | 323.8 ns  | 353.04 ns | 363.12 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 323.18 ns/iter | 317.62 ns | 321.42 ns | 354.55 ns | 376.46 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 373.66 ns/iter | 354.68 ns | 375.94 ns | 426.28 ns | 451 ns    |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 499.13 ns/iter | 443.19 ns | 507.03 ns | 603.22 ns | 669.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.43 µs/iter   | 1.34 µs   | 1.46 µs   | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.96 µs/iter   | 1.88 µs   | 1.94 µs   | 2.51 µs   | 2.51 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max    |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | ------ |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.2 µs/iter   | 2.03 µs | 2.22 µs | 2.4 µs  | 2.4 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.08 µs/iter  | 3.97 µs | 4.1 µs  | 4.5 µs  | 4.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.45 µs/iter | 6.5 µs  | 12.1 µs | 13.7 µs | 1.8 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.31 µs/iter  | 2 µs    | 2.3 µs  | 4.48 µs | 4.48 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.64 µs/iter  | 4.4 µs  | 8.7 µs  | 11.9 µs | 3.09 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.53 µs/iter | 16.1 µs | 18.2 µs | 24.5 µs | 8.71 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.2 µs/iter   | 2.03 µs | 2.22 µs | 2.4 µs  | 2.4 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.31 µs/iter  | 2 µs    | 2.3 µs  | 4.48 µs | 4.48 µs |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.08 µs/iter  | 3.97 µs | 4.1 µs  | 4.5 µs  | 4.5 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.64 µs/iter  | 4.4 µs  | 8.7 µs  | 11.9 µs | 3.09 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.45 µs/iter | 6.5 µs  | 12.1 µs | 13.7 µs | 1.8 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.53 µs/iter | 16.1 µs | 18.2 µs | 24.5 µs | 8.71 ms |

