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
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 430.66 ns/iter | 429 ns    | 546.37 ns | 416.65 ns | 1.01 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 960.75 ns/iter | 954.53 ns | 1.61 µs   | 853.41 ns | 1.61 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.53 µs/iter   | 1.54 µs   | 2.18 µs   | 1.42 µs   | 2.18 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 443.33 ns/iter | 446.96 ns | 462.69 ns | 437.15 ns | 509.53 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 871.73 ns/iter | 817.51 ns | 1.42 µs   | 791.83 ns | 1.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.61 µs/iter   | 1.63 µs   | 2.11 µs   | 1.53 µs   | 2.11 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 430.81 ns/iter | 430.7 ns  | 444.92 ns | 426.26 ns | 447.18 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 998.54 ns/iter | 952.88 ns | 1.54 µs   | 893.84 ns | 1.54 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.5 µs/iter    | 1.52 µs   | 1.86 µs   | 1.45 µs   | 1.86 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 432.23 ns/iter | 432.74 ns | 447.37 ns | 427.53 ns | 493.04 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 979.93 ns/iter | 983.82 ns | 1.55 µs   | 845.47 ns | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.5 µs/iter    | 1.51 µs   | 1.69 µs   | 1.45 µs   | 1.69 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 474.24 ns/iter | 475.32 ns | 487.89 ns | 469.5 ns | 488.46 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 980.75 ns/iter | 910.18 ns | 1.59 µs   | 884.8 ns | 1.59 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.61 µs/iter   | 1.61 µs   | 1.69 µs   | 1.56 µs  | 1.69 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 465 ns/iter    | 466.16 ns | 473.16 ns | 460.99 ns | 478.45 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 992.74 ns/iter | 936.53 ns | 1.5 µs    | 890.96 ns | 1.5 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.92 µs/iter   | 1.92 µs   | 2.16 µs   | 1.86 µs   | 2.16 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 432.99 ns/iter | 434.12 ns | 443.18 ns | 428.48 ns | 443.27 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 917.14 ns/iter | 855.19 ns | 1.44 µs   | 841.76 ns | 1.44 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.54 µs/iter   | 1.56 µs   | 1.65 µs   | 1.46 µs   | 1.65 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 438.29 ns/iter | 445.13 ns | 477.81 ns | 421.82 ns | 488.81 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 915.8 ns/iter  | 846.12 ns | 1.42 µs   | 835.06 ns | 1.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.55 µs/iter   | 1.57 µs   | 1.66 µs   | 1.51 µs   | 1.66 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 462.72 ns/iter | 466.44 ns | 473.41 ns | 453.67 ns | 474.22 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 934.51 ns/iter | 869.75 ns | 1.44 µs   | 861.24 ns | 1.44 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.57 µs/iter   | 1.58 µs   | 1.66 µs   | 1.51 µs   | 1.66 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.57 µs/iter   | 6.8 µs    | 12.4 µs   | 5.3 µs    | 2.06 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.82 µs/iter  | 20.3 µs   | 103.1 µs  | 19.3 µs   | 206.4 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 707.03 µs/iter | 760.19 µs | 849.89 µs | 640.99 µs | 1.12 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min       | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.41 µs/iter | 9.7 µs  | 28.2 µs  | 7.9 µs    | 3.02 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.38 µs/iter | 18.5 µs | 101.5 µs | 17.6 µs   | 3.58 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.13 ms/iter  | 1.04 ms | 2.21 ms  | 982.18 µs | 2.3 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.9 µs/iter    | 9.06 µs   | 9.49 µs | 8.61 µs   | 9.49 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.98 µs/iter  | 16.9 µs   | 48.9 µs | 15.9 µs   | 1.05 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 660.85 µs/iter | 624.29 µs | 1.14 ms | 564.79 µs | 1.51 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.81 µs/iter   | 8.92 µs   | 9.45 µs | 8.52 µs   | 9.45 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.87 µs/iter  | 16.7 µs   | 44.8 µs | 15.9 µs   | 980.08 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 655.84 µs/iter | 629.39 µs | 1.25 ms | 581.39 µs | 1.37 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.71 µs/iter   | 8.8 µs    | 9.5 µs   | 8.24 µs   | 9.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.06 µs/iter  | 20.1 µs   | 118.4 µs | 18.8 µs   | 8.31 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 788.45 µs/iter | 758.59 µs | 1.29 ms  | 724.29 µs | 1.32 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | --------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 48.88 µs/iter | 39.2 µs | 389.69 µs | 36.1 µs | 6.81 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.88 µs/iter | 54.9 µs | 155.5 µs  | 50.1 µs | 2.46 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.24 ms/iter  | 1.09 ms | 2.85 ms   | 1.06 ms | 6.09 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 10.79 µs/iter  | 10.2 µs   | 19.4 µs | 7.2 µs    | 1.25 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 18.21 µs/iter  | 17.6 µs   | 35.9 µs | 15.7 µs   | 480.49 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 716.98 µs/iter | 689.19 µs | 1.29 ms | 654.09 µs | 1.96 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 10.66 µs/iter  | 10 µs     | 19.5 µs | 6.4 µs    | 724.49 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 18.21 µs/iter  | 17.8 µs   | 29.8 µs | 16 µs     | 195.4 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 745.73 µs/iter | 700.09 µs | 1.67 ms | 664.99 µs | 3.14 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 64.55 µs/iter  | 63.3 µs   | 177.1 µs  | 61.3 µs   | 223.9 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 325.84 µs/iter | 328.6 µs  | 357.69 µs | 317.3 µs  | 1.41 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 776.87 µs/iter | 727.09 µs | 1.72 ms   | 696.89 µs | 1.77 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 358 ns/iter    | 356.56 ns | 387.37 ns | 349.84 ns | 387.63 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 646.72 ns/iter | 653.13 ns | 789.36 ns | 634.68 ns | 789.36 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 989.28 ns/iter | 938.66 ns | 1.52 µs   | 840.46 ns | 1.52 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 459.96 ns/iter | 457.75 ns | 496.51 ns | 452.43 ns | 498.97 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 879.56 ns/iter | 825.57 ns | 1.4 µs    | 805.18 ns | 1.4 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.6 µs/iter    | 1.72 µs   | 1.96 µs   | 1.43 µs   | 1.96 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 359.88 ns/iter | 358.68 ns | 400.74 ns | 351.64 ns | 420.92 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 632.45 ns/iter | 640.47 ns | 720.91 ns | 621.98 ns | 720.91 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 908.71 ns/iter | 849.51 ns | 1.37 µs   | 829.55 ns | 1.37 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 446.44 ns/iter | 467.23 ns | 514.6 ns  | 400.43 ns | 516.28 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 620.15 ns/iter | 629.71 ns | 672.89 ns | 611.33 ns | 672.89 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 850.49 ns/iter | 790.37 ns | 1.32 µs   | 780.67 ns | 1.32 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 471.33 ns/iter | 474.57 ns | 564.62 ns | 453.74 ns | 578.78 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 916.51 ns/iter | 853.23 ns | 1.43 µs   | 838.88 ns | 1.43 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.72 µs/iter   | 1.72 µs   | 1.81 µs   | 1.7 µs    | 1.81 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 474.74 ns/iter | 477.69 ns | 525.66 ns | 456.79 ns | 526.62 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 978.59 ns/iter | 925.89 ns | 1.49 µs   | 893.23 ns | 1.49 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 2.01 µs   | 2.12 µs   | 1.98 µs   | 2.12 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 360.72 ns/iter | 359.24 ns | 391.65 ns | 350.37 ns | 397.24 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 658.86 ns/iter | 667.45 ns | 707.39 ns | 649.37 ns | 707.39 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 913.5 ns/iter  | 873.33 ns | 1.43 µs   | 822.82 ns | 1.43 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 355.74 ns/iter | 354.21 ns | 393.87 ns | 347.95 ns | 394.73 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 656.55 ns/iter | 666.35 ns | 672.51 ns | 648.54 ns | 672.51 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 935 ns/iter    | 927.24 ns | 1.46 µs   | 829.43 ns | 1.46 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 455.12 ns/iter | 455.9 ns  | 516.81 ns | 439.22 ns | 518.25 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 855.8 ns/iter  | 789.88 ns | 1.35 µs   | 782.82 ns | 1.35 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.14 µs/iter   | 1.15 µs   | 1.21 µs   | 1.12 µs   | 1.21 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.46 µs/iter | 7.8 µs  | 18.8 µs | 6.8 µs  | 199.7 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.46 µs/iter | 8.3 µs  | 27.5 µs | 6.9 µs  | 2.73 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.33 ms/iter | 1.21 ms | 3.91 ms | 1.17 ms | 4.01 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 10.65 µs/iter | 9.6 µs  | 29 µs   | 8 µs      | 3.67 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 20.26 µs/iter | 19.9 µs | 32.3 µs | 17.7 µs   | 266.4 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.15 ms/iter  | 1.04 ms | 3.47 ms | 999.48 µs | 5.23 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.25 µs/iter  | 1.27 µs | 1.41 µs | 1.2 µs  | 1.41 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 9.94 µs/iter  | 8.9 µs  | 28.4 µs | 7.1 µs  | 2.43 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 38.83 µs/iter | 37.9 µs | 67.7 µs | 35.5 µs | 285.89 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 128.8 ns/iter  | 127.88 ns | 141.5 ns | 124.3 ns  | 153.68 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 370.22 ns/iter | 380.18 ns | 408.2 ns | 359.88 ns | 500.87 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 9.55 µs/iter   | 9.71 µs   | 10.32 µs | 9.05 µs   | 10.32 µs  |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.72 µs/iter  | 3.73 µs | 3.78 µs | 3.7 µs  | 3.78 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.86 µs/iter | 15.8 µs | 21.9 µs | 14.4 µs | 303 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.59 µs/iter | 24.1 µs | 44.6 µs | 22.2 µs | 1.33 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.08 ns/iter | 112.12 ns | 124.46 ns | 109.27 ns | 128.48 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter   | 1.45 µs   | 1.55 µs   | 1.34 µs   | 1.55 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 125.22 µs/iter | 127.4 µs  | 153.4 µs  | 117.2 µs  | 1.2 ms    |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.75 µs/iter  | 8.2 µs  | 20.1 µs | 6.8 µs  | 791.99 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 10.18 µs/iter | 9.3 µs  | 28.4 µs | 7.1 µs  | 886.79 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter  | 1.23 ms | 3.9 ms  | 1.19 ms | 3.93 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 9.55 µs/iter | 9.3 µs  | 21.6 µs | 7 µs    | 406.59 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.84 µs/iter | 8.8 µs  | 28.2 µs | 7 µs    | 1.27 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.35 ms/iter | 1.23 ms | 3.88 ms | 1.18 ms | 3.98 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 504.71 ns/iter | 505.51 ns | 536.65 ns | 498.36 ns | 542.42 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.4 µs/iter    | 4.84 µs   | 5.74 µs   | 3.5 µs    | 5.74 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 49.81 µs/iter  | 45.9 µs   | 73.8 µs   | 44.2 µs   | 1.19 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.08 ns/iter | 112.12 ns | 124.46 ns | 109.27 ns | 128.48 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 128.8 ns/iter  | 127.88 ns | 141.5 ns  | 124.3 ns  | 153.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 355.74 ns/iter | 354.21 ns | 393.87 ns | 347.95 ns | 394.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 358 ns/iter    | 356.56 ns | 387.37 ns | 349.84 ns | 387.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 359.88 ns/iter | 358.68 ns | 400.74 ns | 351.64 ns | 420.92 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 360.72 ns/iter | 359.24 ns | 391.65 ns | 350.37 ns | 397.24 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 370.22 ns/iter | 380.18 ns | 408.2 ns  | 359.88 ns | 500.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 430.66 ns/iter | 429 ns    | 546.37 ns | 416.65 ns | 1.01 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 430.81 ns/iter | 430.7 ns  | 444.92 ns | 426.26 ns | 447.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 432.23 ns/iter | 432.74 ns | 447.37 ns | 427.53 ns | 493.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 432.99 ns/iter | 434.12 ns | 443.18 ns | 428.48 ns | 443.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 438.29 ns/iter | 445.13 ns | 477.81 ns | 421.82 ns | 488.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 443.33 ns/iter | 446.96 ns | 462.69 ns | 437.15 ns | 509.53 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 446.44 ns/iter | 467.23 ns | 514.6 ns  | 400.43 ns | 516.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 455.12 ns/iter | 455.9 ns  | 516.81 ns | 439.22 ns | 518.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 459.96 ns/iter | 457.75 ns | 496.51 ns | 452.43 ns | 498.97 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 462.72 ns/iter | 466.44 ns | 473.41 ns | 453.67 ns | 474.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 465 ns/iter    | 466.16 ns | 473.16 ns | 460.99 ns | 478.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 471.33 ns/iter | 474.57 ns | 564.62 ns | 453.74 ns | 578.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 474.24 ns/iter | 475.32 ns | 487.89 ns | 469.5 ns  | 488.46 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 474.74 ns/iter | 477.69 ns | 525.66 ns | 456.79 ns | 526.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 504.71 ns/iter | 505.51 ns | 536.65 ns | 498.36 ns | 542.42 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 620.15 ns/iter | 629.71 ns | 672.89 ns | 611.33 ns | 672.89 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 632.45 ns/iter | 640.47 ns | 720.91 ns | 621.98 ns | 720.91 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 646.72 ns/iter | 653.13 ns | 789.36 ns | 634.68 ns | 789.36 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 656.55 ns/iter | 666.35 ns | 672.51 ns | 648.54 ns | 672.51 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 658.86 ns/iter | 667.45 ns | 707.39 ns | 649.37 ns | 707.39 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 850.49 ns/iter | 790.37 ns | 1.32 µs   | 780.67 ns | 1.32 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 855.8 ns/iter  | 789.88 ns | 1.35 µs   | 782.82 ns | 1.35 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 871.73 ns/iter | 817.51 ns | 1.42 µs   | 791.83 ns | 1.42 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 879.56 ns/iter | 825.57 ns | 1.4 µs    | 805.18 ns | 1.4 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 908.71 ns/iter | 849.51 ns | 1.37 µs   | 829.55 ns | 1.37 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 913.5 ns/iter  | 873.33 ns | 1.43 µs   | 822.82 ns | 1.43 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 915.8 ns/iter  | 846.12 ns | 1.42 µs   | 835.06 ns | 1.42 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 916.51 ns/iter | 853.23 ns | 1.43 µs   | 838.88 ns | 1.43 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 917.14 ns/iter | 855.19 ns | 1.44 µs   | 841.76 ns | 1.44 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 934.51 ns/iter | 869.75 ns | 1.44 µs   | 861.24 ns | 1.44 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 935 ns/iter    | 927.24 ns | 1.46 µs   | 829.43 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 960.75 ns/iter | 954.53 ns | 1.61 µs   | 853.41 ns | 1.61 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 978.59 ns/iter | 925.89 ns | 1.49 µs   | 893.23 ns | 1.49 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 979.93 ns/iter | 983.82 ns | 1.55 µs   | 845.47 ns | 1.55 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 980.75 ns/iter | 910.18 ns | 1.59 µs   | 884.8 ns  | 1.59 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 989.28 ns/iter | 938.66 ns | 1.52 µs   | 840.46 ns | 1.52 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 992.74 ns/iter | 936.53 ns | 1.5 µs    | 890.96 ns | 1.5 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 998.54 ns/iter | 952.88 ns | 1.54 µs   | 893.84 ns | 1.54 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.14 µs/iter   | 1.15 µs   | 1.21 µs   | 1.12 µs   | 1.21 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.25 µs/iter   | 1.27 µs   | 1.41 µs   | 1.2 µs    | 1.41 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter   | 1.45 µs   | 1.55 µs   | 1.34 µs   | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.5 µs/iter    | 1.51 µs   | 1.69 µs   | 1.45 µs   | 1.69 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.5 µs/iter    | 1.52 µs   | 1.86 µs   | 1.45 µs   | 1.86 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.53 µs/iter   | 1.54 µs   | 2.18 µs   | 1.42 µs   | 2.18 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.54 µs/iter   | 1.56 µs   | 1.65 µs   | 1.46 µs   | 1.65 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.55 µs/iter   | 1.57 µs   | 1.66 µs   | 1.51 µs   | 1.66 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.57 µs/iter   | 1.58 µs   | 1.66 µs   | 1.51 µs   | 1.66 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.6 µs/iter    | 1.72 µs   | 1.96 µs   | 1.43 µs   | 1.96 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.61 µs/iter   | 1.61 µs   | 1.69 µs   | 1.56 µs   | 1.69 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.61 µs/iter   | 1.63 µs   | 2.11 µs   | 1.53 µs   | 2.11 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.72 µs/iter   | 1.72 µs   | 1.81 µs   | 1.7 µs    | 1.81 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.92 µs/iter   | 1.92 µs   | 2.16 µs   | 1.86 µs   | 2.16 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 2.01 µs   | 2.12 µs   | 1.98 µs   | 2.12 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.72 µs/iter   | 3.73 µs   | 3.78 µs   | 3.7 µs    | 3.78 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.4 µs/iter    | 4.84 µs   | 5.74 µs   | 3.5 µs    | 5.74 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.57 µs/iter   | 6.8 µs    | 12.4 µs   | 5.3 µs    | 2.06 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.46 µs/iter   | 7.8 µs    | 18.8 µs   | 6.8 µs    | 199.7 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.71 µs/iter   | 8.8 µs    | 9.5 µs    | 8.24 µs   | 9.5 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.75 µs/iter   | 8.2 µs    | 20.1 µs   | 6.8 µs    | 791.99 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.81 µs/iter   | 8.92 µs   | 9.45 µs   | 8.52 µs   | 9.45 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.9 µs/iter    | 9.06 µs   | 9.49 µs   | 8.61 µs   | 9.49 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.46 µs/iter   | 8.3 µs    | 27.5 µs   | 6.9 µs    | 2.73 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 9.55 µs/iter   | 9.71 µs   | 10.32 µs  | 9.05 µs   | 10.32 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 9.55 µs/iter   | 9.3 µs    | 21.6 µs   | 7 µs      | 406.59 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.84 µs/iter   | 8.8 µs    | 28.2 µs   | 7 µs      | 1.27 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 9.94 µs/iter   | 8.9 µs    | 28.4 µs   | 7.1 µs    | 2.43 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 10.18 µs/iter  | 9.3 µs    | 28.4 µs   | 7.1 µs    | 886.79 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.41 µs/iter  | 9.7 µs    | 28.2 µs   | 7.9 µs    | 3.02 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 10.65 µs/iter  | 9.6 µs    | 29 µs     | 8 µs      | 3.67 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 10.66 µs/iter  | 10 µs     | 19.5 µs   | 6.4 µs    | 724.49 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 10.79 µs/iter  | 10.2 µs   | 19.4 µs   | 7.2 µs    | 1.25 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.86 µs/iter  | 15.8 µs   | 21.9 µs   | 14.4 µs   | 303 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.87 µs/iter  | 16.7 µs   | 44.8 µs   | 15.9 µs   | 980.08 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.98 µs/iter  | 16.9 µs   | 48.9 µs   | 15.9 µs   | 1.05 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 18.21 µs/iter  | 17.8 µs   | 29.8 µs   | 16 µs     | 195.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 18.21 µs/iter  | 17.6 µs   | 35.9 µs   | 15.7 µs   | 480.49 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 20.26 µs/iter  | 19.9 µs   | 32.3 µs   | 17.7 µs   | 266.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.38 µs/iter  | 18.5 µs   | 101.5 µs  | 17.6 µs   | 3.58 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.82 µs/iter  | 20.3 µs   | 103.1 µs  | 19.3 µs   | 206.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.06 µs/iter  | 20.1 µs   | 118.4 µs  | 18.8 µs   | 8.31 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.59 µs/iter  | 24.1 µs   | 44.6 µs   | 22.2 µs   | 1.33 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 38.83 µs/iter  | 37.9 µs   | 67.7 µs   | 35.5 µs   | 285.89 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 48.88 µs/iter  | 39.2 µs   | 389.69 µs | 36.1 µs   | 6.81 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 49.81 µs/iter  | 45.9 µs   | 73.8 µs   | 44.2 µs   | 1.19 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.88 µs/iter  | 54.9 µs   | 155.5 µs  | 50.1 µs   | 2.46 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 64.55 µs/iter  | 63.3 µs   | 177.1 µs  | 61.3 µs   | 223.9 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 125.22 µs/iter | 127.4 µs  | 153.4 µs  | 117.2 µs  | 1.2 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 325.84 µs/iter | 328.6 µs  | 357.69 µs | 317.3 µs  | 1.41 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 655.84 µs/iter | 629.39 µs | 1.25 ms   | 581.39 µs | 1.37 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 660.85 µs/iter | 624.29 µs | 1.14 ms   | 564.79 µs | 1.51 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 707.03 µs/iter | 760.19 µs | 849.89 µs | 640.99 µs | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 716.98 µs/iter | 689.19 µs | 1.29 ms   | 654.09 µs | 1.96 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 745.73 µs/iter | 700.09 µs | 1.67 ms   | 664.99 µs | 3.14 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 776.87 µs/iter | 727.09 µs | 1.72 ms   | 696.89 µs | 1.77 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 788.45 µs/iter | 758.59 µs | 1.29 ms   | 724.29 µs | 1.32 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.13 ms/iter   | 1.04 ms   | 2.21 ms   | 982.18 µs | 2.3 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.15 ms/iter   | 1.04 ms   | 3.47 ms   | 999.48 µs | 5.23 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.24 ms/iter   | 1.09 ms   | 2.85 ms   | 1.06 ms   | 6.09 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.33 ms/iter   | 1.21 ms   | 3.91 ms   | 1.17 ms   | 4.01 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter   | 1.23 ms   | 3.9 ms    | 1.19 ms   | 3.93 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.35 ms/iter   | 1.23 ms   | 3.88 ms   | 1.18 ms   | 3.98 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max         |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ----------- |
| bun 0.1.7 (x64-linux)                  | http      | 91,190.469/rps | 94,122.784 | 97,648.13  | 13,815.534 | 257,074.365 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 52,349.375/rps | 54,793.887 | 55,378.368 | 4,632.719  | 56,130.986  |
| node v18.7.0 (x64-linux)               | http      | 48,058.628/rps | 49,595.019 | 50,304.636 | 5,836.646  | 50,799.067  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 153.37 ns/iter | 152.02 ns | 200.71 ns | 145.95 ns | 264.61 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 326.62 ns/iter | 326.11 ns | 411.96 ns | 316.06 ns | 441.31 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 331.35 ns/iter | 323.08 ns | 379.35 ns | 318.83 ns | 1.28 µs   |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 76.17 ns/iter  | 76.49 ns | 103.18 ns | 63.48 ns  | 112.34 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 235.45 ns/iter | 236.2 ns | 252.52 ns | 227.1 ns  | 276.34 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 235.57 ns/iter | 238.9 ns | 252.3 ns  | 230.73 ns | 260.64 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 76.17 ns/iter  | 76.49 ns  | 103.18 ns | 63.48 ns  | 112.34 ns |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 153.37 ns/iter | 152.02 ns | 200.71 ns | 145.95 ns | 264.61 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 235.45 ns/iter | 236.2 ns  | 252.52 ns | 227.1 ns  | 276.34 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 235.57 ns/iter | 238.9 ns  | 252.3 ns  | 230.73 ns | 260.64 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 326.62 ns/iter | 326.11 ns | 411.96 ns | 316.06 ns | 441.31 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 331.35 ns/iter | 323.08 ns | 379.35 ns | 318.83 ns | 1.28 µs   |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 34.34 ms/iter  | 34.03 ms  | 37.24 ms  | 33.53 ms  | 37.24 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 98.96 ms/iter  | 99.04 ms  | 99.64 ms  | 98.59 ms  | 99.64 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 244.07 ms/iter | 245.31 ms | 261.77 ms | 236.35 ms | 261.77 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 99.27 µs/iter  | 98.3 µs   | 116.3 µs  | 93.1 µs   | 1.56 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 314.81 µs/iter | 313.89 µs | 327.19 µs | 311.3 µs  | 874.19 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 416.86 µs/iter | 386.89 µs | 465.39 µs | 375.19 µs | 6.35 ms   |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.76 µs/iter  | 62.1 µs   | 76.5 µs   | 55 µs     | 474.59 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 157.59 µs/iter | 158.8 µs  | 165.7 µs  | 154.7 µs  | 507.89 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 365.4 µs/iter  | 333.29 µs | 575.39 µs | 323.69 µs | 6.12 ms   |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 55.95 µs/iter  | 52.3 µs  | 94.6 µs  | 44.8 µs  | 499.99 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 107.09 µs/iter | 101.9 µs | 172.9 µs | 97 µs    | 685.99 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 320.66 µs/iter | 298.5 µs | 1.68 ms  | 260.3 µs | 6.29 ms   |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 177.06 µs/iter | 178.1 µs  | 194.4 µs  | 158.7 µs  | 643.69 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 450.79 µs/iter | 453.19 µs | 466.09 µs | 431.89 µs | 1.01 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1 ms/iter      | 891.09 µs | 6.57 ms   | 870.89 µs | 6.88 ms   |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 55.95 µs/iter  | 52.3 µs   | 94.6 µs   | 44.8 µs   | 499.99 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.76 µs/iter  | 62.1 µs   | 76.5 µs   | 55 µs     | 474.59 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 99.27 µs/iter  | 98.3 µs   | 116.3 µs  | 93.1 µs   | 1.56 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 107.09 µs/iter | 101.9 µs  | 172.9 µs  | 97 µs     | 685.99 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 157.59 µs/iter | 158.8 µs  | 165.7 µs  | 154.7 µs  | 507.89 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 177.06 µs/iter | 178.1 µs  | 194.4 µs  | 158.7 µs  | 643.69 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 314.81 µs/iter | 313.89 µs | 327.19 µs | 311.3 µs  | 874.19 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 320.66 µs/iter | 298.5 µs  | 1.68 ms   | 260.3 µs  | 6.29 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 365.4 µs/iter  | 333.29 µs | 575.39 µs | 323.69 µs | 6.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 416.86 µs/iter | 386.89 µs | 465.39 µs | 375.19 µs | 6.35 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 450.79 µs/iter | 453.19 µs | 466.09 µs | 431.89 µs | 1.01 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1 ms/iter      | 891.09 µs | 6.57 ms   | 870.89 µs | 6.88 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 34.34 ms/iter  | 34.03 ms  | 37.24 ms  | 33.53 ms  | 37.24 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 98.96 ms/iter  | 99.04 ms  | 99.64 ms  | 98.59 ms  | 99.64 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 244.07 ms/iter | 245.31 ms | 261.77 ms | 236.35 ms | 261.77 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 504.09 ns/iter | 510.05 ns | 599.19 ns | 444.14 ns | 688.44 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.44 µs/iter   | 1.46 µs   | 1.49 µs   | 1.35 µs   | 1.49 µs   |
| bun 0.1.7 (x64-linux)                  | nanoid(36) | 1.89 µs/iter   | 1.89 µs   | 2.04 µs   | 1.85 µs   | 2.04 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello') | 3.92 µs/iter  | 5.97 µs | 9.28 µs | 1.92 µs | 9.28 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 7.48 µs/iter  | 7.1 µs  | 10 µs   | 6.6 µs  | 4.06 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.96 µs/iter | 11.7 µs | 13.2 µs | 6.7 µs  | 425.99 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 5.05 µs/iter  | 5.6 µs  | 5.64 µs | 2.2 µs  | 5.64 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.97 µs/iter  | 8.2 µs  | 13.1 µs | 4.5 µs  | 6.57 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.22 µs/iter | 17.2 µs | 20.2 µs | 11.3 µs | 1.61 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello')             | 3.92 µs/iter  | 5.97 µs | 9.28 µs | 1.92 µs | 9.28 µs   |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 5.05 µs/iter  | 5.6 µs  | 5.64 µs | 2.2 µs  | 5.64 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.97 µs/iter  | 8.2 µs  | 13.1 µs | 4.5 µs  | 6.57 ms   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 7.48 µs/iter  | 7.1 µs  | 10 µs   | 6.6 µs  | 4.06 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.96 µs/iter | 11.7 µs | 13.2 µs | 6.7 µs  | 425.99 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.22 µs/iter | 17.2 µs | 20.2 µs | 11.3 µs | 1.61 ms   |

