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
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min      | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 427.56 ns/iter | 418.44 ns | 429.4 ns | 470.7 ns | 549.43 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1 µs/iter      | 843.33 ns | 981.9 ns | 1.57 µs  | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.49 µs/iter   | 1.39 µs   | 1.5 µs   | 2.23 µs  | 2.23 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 441.91 ns/iter | 435.54 ns | 444.97 ns | 463.97 ns | 549.28 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 888.29 ns/iter | 779.24 ns | 895.62 ns | 1.42 µs   | 1.42 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.58 µs/iter   | 1.45 µs   | 1.61 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 429.38 ns/iter | 425.41 ns | 428.94 ns | 444.88 ns | 456.33 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.05 µs/iter   | 891.35 ns | 1.03 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.34 µs/iter   | 1.26 µs   | 1.35 µs   | 1.72 µs   | 1.72 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 429.44 ns/iter | 426.13 ns | 429.39 ns | 441.45 ns | 449.19 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.01 µs/iter   | 850.33 ns | 978.34 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.31 µs/iter   | 1.18 µs   | 1.33 µs   | 1.65 µs   | 1.65 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 476.24 ns/iter | 472.37 ns | 477.16 ns | 486.08 ns | 486.75 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.11 µs/iter   | 992.9 ns  | 1.06 µs   | 1.71 µs   | 1.71 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.55 µs   | 1.55 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average       | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 492.9 ns/iter | 464.96 ns | 473.24 ns | 917.34 ns | 1.7 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.1 µs/iter   | 984.01 ns | 1.06 µs   | 1.65 µs   | 1.65 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.85 µs/iter  | 1.74 µs   | 1.86 µs   | 2.07 µs   | 2.07 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 433.66 ns/iter | 429.58 ns | 434.06 ns | 441.8 ns | 448.81 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 971.72 ns/iter | 832.96 ns | 955.39 ns | 1.53 µs  | 1.53 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.35 µs/iter   | 1.26 µs   | 1.37 µs   | 1.49 µs  | 1.49 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 433.07 ns/iter | 424.3 ns | 435.41 ns | 458.47 ns | 466.13 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.02 µs/iter   | 927.7 ns | 956.48 ns | 1.52 µs   | 1.52 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.35 µs/iter   | 1.26 µs  | 1.37 µs   | 1.74 µs   | 1.74 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 458.27 ns/iter | 449.03 ns | 460.89 ns | 469.28 ns | 571.83 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 985.26 ns/iter | 855.27 ns | 965.65 ns | 1.49 µs   | 1.49 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.42 µs/iter   | 1.31 µs   | 1.45 µs   | 1.61 µs   | 1.61 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average       | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.22 µs/iter  | 5.3 µs   | 6.5 µs   | 11.5 µs  | 679.4 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.53 µs/iter | 19.1 µs  | 20 µs    | 102.7 µs | 193.3 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 735.3 µs/iter | 644.4 µs | 704.8 µs | 1.13 ms  | 1.61 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75       | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------- | --------- | ------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 9.95 µs/iter  | 7.7 µs    | 9.1 µs  | 27.8 µs  | 628.3 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 19.87 µs/iter | 17.3 µs   | 18.1 µs | 101.5 µs | 1.1 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.12 ms/iter  | 995.09 µs | 1.02 ms | 3.16 ms  | 3.32 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average       | p75     | p99      | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | -------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.88 µs/iter  | 7.4 µs  | 8.2 µs   | 13.1 µs | 943.49 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.57 µs/iter | 15.5 µs | 16.4 µs  | 37.9 µs | 309.6 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 673.7 µs/iter | 595 µs  | 628.3 µs | 1.57 ms | 1.62 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75      | p99      | Min     | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | -------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.82 µs/iter   | 7.3 µs   | 8.1 µs   | 13.3 µs | 606.19 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.49 µs/iter  | 15.8 µs  | 16.5 µs  | 31.8 µs | 190.4 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 672.06 µs/iter | 589.8 µs | 625.3 µs | 1.56 ms | 1.61 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75      | p99       | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | --------- | -------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.44 µs/iter   | 6.8 µs   | 7.7 µs    | 14.3 µs  | 1.22 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.06 µs/iter  | 18.7 µs  | 19.5 µs   | 117.3 µs | 1.01 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 800.21 µs/iter | 723.4 µs | 751.89 µs | 1.56 ms  | 1.59 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.29 µs/iter | 36.1 µs | 38.1 µs | 378.69 µs | 830.09 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 53.23 µs/iter | 49.9 µs | 51.3 µs | 151.7 µs  | 237.5 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.19 ms/iter  | 1.05 ms | 1.08 ms | 2.51 ms   | 2.54 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | --------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 11.32 µs/iter  | 7.3 µs   | 10.4 µs   | 46.2 µs | 950.19 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.71 µs/iter  | 15.5 µs  | 17 µs     | 35.7 µs | 493.5 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 739.77 µs/iter | 668.1 µs | 694.79 µs | 1.63 ms | 1.68 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average       | p75       | p99      | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | -------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 11 µs/iter    | 7.4 µs    | 10.3 µs  | 22.4 µs | 658.99 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 17.26 µs/iter | 15.7 µs   | 16.7 µs  | 28 µs   | 209.8 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 735.7 µs/iter | 665.29 µs | 690.1 µs | 1.62 ms | 1.66 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 63.85 µs/iter  | 60.9 µs   | 62.6 µs  | 174.6 µs  | 328.1 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 325.92 µs/iter | 317.69 µs | 328 µs   | 356.49 µs | 1.16 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 767.73 µs/iter | 693.29 µs | 722.6 µs | 1.67 ms   | 1.71 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 357.38 ns/iter | 349.05 ns | 355.31 ns | 408.56 ns | 408.86 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 643.03 ns/iter | 631.74 ns | 647.19 ns | 815.4 ns  | 815.4 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.02 µs/iter   | 914.85 ns | 953.24 ns | 1.55 µs   | 1.55 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 460.36 ns/iter | 453.06 ns | 458.87 ns | 492.07 ns | 494.85 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 941.52 ns/iter | 806.68 ns | 909.03 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.43 µs/iter   | 1.3 µs    | 1.54 µs   | 1.6 µs    | 1.6 µs    |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 357.04 ns/iter | 350.46 ns | 356.36 ns | 382.85 ns | 386.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 631.59 ns/iter | 623 ns    | 636.72 ns | 804.47 ns | 804.47 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.03 µs/iter   | 878.73 ns | 1.02 µs   | 1.56 µs   | 1.56 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 370.79 ns/iter | 348.57 ns | 366.98 ns | 486.07 ns | 506.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 626.22 ns/iter | 618.66 ns | 633.51 ns | 682.7 ns  | 682.7 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 921.5 ns/iter  | 834.57 ns | 846.67 ns | 1.55 µs   | 1.55 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min      | Max      |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 574.33 ns/iter | 509.09 ns | 589.28 ns | 619.7 ns | 619.7 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.08 µs/iter   | 999.35 ns | 1.02 µs   | 1.58 µs  | 1.58 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.72 µs/iter   | 1.65 µs   | 1.73 µs   | 1.79 µs  | 1.79 µs  |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 497.13 ns/iter | 458.33 ns | 509.36 ns | 563.39 ns | 569.47 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.1 µs/iter    | 1.01 µs   | 1.04 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 1.98 µs   | 2.01 µs   | 2.13 µs   | 2.13 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 359.06 ns/iter | 351.8 ns  | 356.84 ns | 395.99 ns | 398.02 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 655.92 ns/iter | 648.58 ns | 662.55 ns | 697.77 ns | 697.77 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1 µs/iter      | 912.42 ns | 936.49 ns | 1.51 µs   | 1.51 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 361.54 ns/iter | 353.61 ns | 359.96 ns | 394.82 ns | 399.67 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 654.54 ns/iter | 647.5 ns  | 662.22 ns | 666.91 ns | 666.91 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 998.23 ns/iter | 916.83 ns | 934.15 ns | 1.49 µs   | 1.49 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 485.47 ns/iter | 443.37 ns | 498.46 ns | 553.01 ns | 556.04 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 879.03 ns/iter | 774.53 ns | 875.31 ns | 1.4 µs    | 1.4 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.12 µs/iter   | 1.1 µs    | 1.13 µs   | 1.19 µs   | 1.19 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.55 µs/iter | 6.7 µs  | 7.8 µs  | 19.9 µs | 4.04 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.85 µs/iter | 7 µs    | 8.7 µs  | 28.3 µs | 986.19 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.34 ms/iter | 1.17 ms | 1.21 ms | 3.72 ms | 3.86 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75       | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 10.64 µs/iter | 8.1 µs    | 9.7 µs  | 28.8 µs | 808.29 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 19.9 µs/iter  | 17.5 µs   | 19.5 µs | 31.6 µs | 187 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.12 ms/iter  | 997.39 µs | 1.03 ms | 3.25 ms | 3.41 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.17 µs/iter  | 1.1 µs  | 1.19 µs | 1.24 µs | 1.24 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 20.57 µs/iter | 11.8 µs | 22.2 µs | 60.1 µs | 821.79 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.41 µs/iter | 35 µs   | 36.8 µs | 66.1 µs | 257.2 µs  |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 127.51 ns/iter | 123.36 ns | 126.9 ns  | 141.11 ns | 149.77 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 368.11 ns/iter | 362.65 ns | 365.65 ns | 388.95 ns | 483.2 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 20.48 µs/iter  | 11.6 µs   | 22 µs     | 60.3 µs   | 838.1 µs  |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.48 µs/iter  | 3.45 µs | 3.48 µs | 3.61 µs | 3.61 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.4 µs/iter  | 14.3 µs | 15.4 µs | 20 µs   | 334.6 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 26.61 µs/iter | 22 µs   | 24.4 µs | 69.9 µs | 1.3 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 110.2 ns/iter  | 105.75 ns | 109.53 ns | 120.97 ns | 125.16 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.53 µs/iter   | 1.37 µs   | 1.54 µs   | 1.59 µs   | 1.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 122.15 µs/iter | 117 µs    | 118.8 µs  | 145.6 µs  | 971.39 µs |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.3 µs/iter  | 8.06 µs | 8.35 µs | 9.2 µs  | 9.2 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 9.57 µs/iter | 7.1 µs  | 8.5 µs  | 28.2 µs | 882.59 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter | 1.19 ms | 1.22 ms | 3.81 ms | 4.01 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.69 µs/iter | 6.7 µs  | 8.1 µs  | 22.9 µs | 832.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.59 µs/iter | 6.9 µs  | 8.6 µs  | 28.2 µs | 868.39 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.32 ms/iter | 1.19 ms | 1.22 ms | 3.73 ms | 3.83 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average       | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 505.5 ns/iter | 494.73 ns | 502.6 ns | 584.77 ns | 606.09 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.79 µs/iter  | 2.94 µs   | 4.03 µs  | 4.63 µs   | 4.63 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 48.98 µs/iter | 44 µs     | 45.8 µs  | 71.3 µs   | 1 ms      |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 110.2 ns/iter  | 105.75 ns | 109.53 ns | 120.97 ns | 125.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 127.51 ns/iter | 123.36 ns | 126.9 ns  | 141.11 ns | 149.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 357.04 ns/iter | 350.46 ns | 356.36 ns | 382.85 ns | 386.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 357.38 ns/iter | 349.05 ns | 355.31 ns | 408.56 ns | 408.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 359.06 ns/iter | 351.8 ns  | 356.84 ns | 395.99 ns | 398.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 361.54 ns/iter | 353.61 ns | 359.96 ns | 394.82 ns | 399.67 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 368.11 ns/iter | 362.65 ns | 365.65 ns | 388.95 ns | 483.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 370.79 ns/iter | 348.57 ns | 366.98 ns | 486.07 ns | 506.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 427.56 ns/iter | 418.44 ns | 429.4 ns  | 470.7 ns  | 549.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 429.38 ns/iter | 425.41 ns | 428.94 ns | 444.88 ns | 456.33 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 429.44 ns/iter | 426.13 ns | 429.39 ns | 441.45 ns | 449.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 433.07 ns/iter | 424.3 ns  | 435.41 ns | 458.47 ns | 466.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 433.66 ns/iter | 429.58 ns | 434.06 ns | 441.8 ns  | 448.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 441.91 ns/iter | 435.54 ns | 444.97 ns | 463.97 ns | 549.28 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 458.27 ns/iter | 449.03 ns | 460.89 ns | 469.28 ns | 571.83 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 460.36 ns/iter | 453.06 ns | 458.87 ns | 492.07 ns | 494.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 476.24 ns/iter | 472.37 ns | 477.16 ns | 486.08 ns | 486.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 485.47 ns/iter | 443.37 ns | 498.46 ns | 553.01 ns | 556.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 492.9 ns/iter  | 464.96 ns | 473.24 ns | 917.34 ns | 1.7 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 497.13 ns/iter | 458.33 ns | 509.36 ns | 563.39 ns | 569.47 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 505.5 ns/iter  | 494.73 ns | 502.6 ns  | 584.77 ns | 606.09 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 574.33 ns/iter | 509.09 ns | 589.28 ns | 619.7 ns  | 619.7 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 626.22 ns/iter | 618.66 ns | 633.51 ns | 682.7 ns  | 682.7 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 631.59 ns/iter | 623 ns    | 636.72 ns | 804.47 ns | 804.47 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 643.03 ns/iter | 631.74 ns | 647.19 ns | 815.4 ns  | 815.4 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 654.54 ns/iter | 647.5 ns  | 662.22 ns | 666.91 ns | 666.91 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 655.92 ns/iter | 648.58 ns | 662.55 ns | 697.77 ns | 697.77 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 879.03 ns/iter | 774.53 ns | 875.31 ns | 1.4 µs    | 1.4 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 888.29 ns/iter | 779.24 ns | 895.62 ns | 1.42 µs   | 1.42 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 921.5 ns/iter  | 834.57 ns | 846.67 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 941.52 ns/iter | 806.68 ns | 909.03 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 971.72 ns/iter | 832.96 ns | 955.39 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 985.26 ns/iter | 855.27 ns | 965.65 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 998.23 ns/iter | 916.83 ns | 934.15 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1 µs/iter      | 843.33 ns | 981.9 ns  | 1.57 µs   | 1.57 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1 µs/iter      | 912.42 ns | 936.49 ns | 1.51 µs   | 1.51 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.01 µs/iter   | 850.33 ns | 978.34 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.02 µs/iter   | 914.85 ns | 953.24 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.02 µs/iter   | 927.7 ns  | 956.48 ns | 1.52 µs   | 1.52 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.03 µs/iter   | 878.73 ns | 1.02 µs   | 1.56 µs   | 1.56 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.05 µs/iter   | 891.35 ns | 1.03 µs   | 1.67 µs   | 1.67 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.08 µs/iter   | 999.35 ns | 1.02 µs   | 1.58 µs   | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.1 µs/iter    | 1.01 µs   | 1.04 µs   | 1.61 µs   | 1.61 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.1 µs/iter    | 984.01 ns | 1.06 µs   | 1.65 µs   | 1.65 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.11 µs/iter   | 992.9 ns  | 1.06 µs   | 1.71 µs   | 1.71 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.12 µs/iter   | 1.1 µs    | 1.13 µs   | 1.19 µs   | 1.19 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.17 µs/iter   | 1.1 µs    | 1.19 µs   | 1.24 µs   | 1.24 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.31 µs/iter   | 1.18 µs   | 1.33 µs   | 1.65 µs   | 1.65 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.34 µs/iter   | 1.26 µs   | 1.35 µs   | 1.72 µs   | 1.72 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.35 µs/iter   | 1.26 µs   | 1.37 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.35 µs/iter   | 1.26 µs   | 1.37 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.55 µs   | 1.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.42 µs/iter   | 1.31 µs   | 1.45 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.43 µs/iter   | 1.3 µs    | 1.54 µs   | 1.6 µs    | 1.6 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.49 µs/iter   | 1.39 µs   | 1.5 µs    | 2.23 µs   | 2.23 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.53 µs/iter   | 1.37 µs   | 1.54 µs   | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.58 µs/iter   | 1.45 µs   | 1.61 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.72 µs/iter   | 1.65 µs   | 1.73 µs   | 1.79 µs   | 1.79 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.85 µs/iter   | 1.74 µs   | 1.86 µs   | 2.07 µs   | 2.07 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 1.98 µs   | 2.01 µs   | 2.13 µs   | 2.13 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.48 µs/iter   | 3.45 µs   | 3.48 µs   | 3.61 µs   | 3.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.79 µs/iter   | 2.94 µs   | 4.03 µs   | 4.63 µs   | 4.63 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.22 µs/iter   | 5.3 µs    | 6.5 µs    | 11.5 µs   | 679.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.3 µs/iter    | 8.06 µs   | 8.35 µs   | 9.2 µs    | 9.2 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.44 µs/iter   | 6.8 µs    | 7.7 µs    | 14.3 µs   | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.55 µs/iter   | 6.7 µs    | 7.8 µs    | 19.9 µs   | 4.04 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.69 µs/iter   | 6.7 µs    | 8.1 µs    | 22.9 µs   | 832.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.82 µs/iter   | 7.3 µs    | 8.1 µs    | 13.3 µs   | 606.19 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.88 µs/iter   | 7.4 µs    | 8.2 µs    | 13.1 µs   | 943.49 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 9.57 µs/iter   | 7.1 µs    | 8.5 µs    | 28.2 µs   | 882.59 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.59 µs/iter   | 6.9 µs    | 8.6 µs    | 28.2 µs   | 868.39 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.85 µs/iter   | 7 µs      | 8.7 µs    | 28.3 µs   | 986.19 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 9.95 µs/iter   | 7.7 µs    | 9.1 µs    | 27.8 µs   | 628.3 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 10.64 µs/iter  | 8.1 µs    | 9.7 µs    | 28.8 µs   | 808.29 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 11 µs/iter     | 7.4 µs    | 10.3 µs   | 22.4 µs   | 658.99 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 11.32 µs/iter  | 7.3 µs    | 10.4 µs   | 46.2 µs   | 950.19 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.4 µs/iter   | 14.3 µs   | 15.4 µs   | 20 µs     | 334.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 17.26 µs/iter  | 15.7 µs   | 16.7 µs   | 28 µs     | 209.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.49 µs/iter  | 15.8 µs   | 16.5 µs   | 31.8 µs   | 190.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.57 µs/iter  | 15.5 µs   | 16.4 µs   | 37.9 µs   | 309.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.71 µs/iter  | 15.5 µs   | 17 µs     | 35.7 µs   | 493.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 19.87 µs/iter  | 17.3 µs   | 18.1 µs   | 101.5 µs  | 1.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 19.9 µs/iter   | 17.5 µs   | 19.5 µs   | 31.6 µs   | 187 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 20.48 µs/iter  | 11.6 µs   | 22 µs     | 60.3 µs   | 838.1 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 20.57 µs/iter  | 11.8 µs   | 22.2 µs   | 60.1 µs   | 821.79 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.06 µs/iter  | 18.7 µs   | 19.5 µs   | 117.3 µs  | 1.01 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.53 µs/iter  | 19.1 µs   | 20 µs     | 102.7 µs  | 193.3 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.61 µs/iter  | 22 µs     | 24.4 µs   | 69.9 µs   | 1.3 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.41 µs/iter  | 35 µs     | 36.8 µs   | 66.1 µs   | 257.2 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.29 µs/iter  | 36.1 µs   | 38.1 µs   | 378.69 µs | 830.09 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 48.98 µs/iter  | 44 µs     | 45.8 µs   | 71.3 µs   | 1 ms      |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 53.23 µs/iter  | 49.9 µs   | 51.3 µs   | 151.7 µs  | 237.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 63.85 µs/iter  | 60.9 µs   | 62.6 µs   | 174.6 µs  | 328.1 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 122.15 µs/iter | 117 µs    | 118.8 µs  | 145.6 µs  | 971.39 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 325.92 µs/iter | 317.69 µs | 328 µs    | 356.49 µs | 1.16 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 672.06 µs/iter | 589.8 µs  | 625.3 µs  | 1.56 ms   | 1.61 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 673.7 µs/iter  | 595 µs    | 628.3 µs  | 1.57 ms   | 1.62 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 735.3 µs/iter  | 644.4 µs  | 704.8 µs  | 1.13 ms   | 1.61 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 735.7 µs/iter  | 665.29 µs | 690.1 µs  | 1.62 ms   | 1.66 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 739.77 µs/iter | 668.1 µs  | 694.79 µs | 1.63 ms   | 1.68 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 767.73 µs/iter | 693.29 µs | 722.6 µs  | 1.67 ms   | 1.71 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 800.21 µs/iter | 723.4 µs  | 751.89 µs | 1.56 ms   | 1.59 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.12 ms/iter   | 997.39 µs | 1.03 ms   | 3.25 ms   | 3.41 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.12 ms/iter   | 995.09 µs | 1.02 ms   | 3.16 ms   | 3.32 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.19 ms/iter   | 1.05 ms   | 1.08 ms   | 2.51 ms   | 2.54 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.32 ms/iter   | 1.19 ms   | 1.22 ms   | 3.73 ms   | 3.83 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.34 ms/iter   | 1.17 ms   | 1.21 ms   | 3.72 ms   | 3.86 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter   | 1.19 ms   | 1.22 ms   | 3.81 ms   | 4.01 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max         |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ----------- |
| bun 0.1.6 (x64-linux)                  | http      | 90,943.896/rps | 11,898.579 | 94,106.145 | 98,796.218 | 106,550.772 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 51,949.371/rps | 4,808.762  | 54,516.934 | 55,091.251 | 55,208.204  |
| node v18.7.0 (x64-linux)               | http      | 49,115.739/rps | 5,843.5    | 50,732.045 | 51,491.844 | 51,857.993  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 149.47 ns/iter | 143.71 ns | 147.66 ns | 187.51 ns | 281.31 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 312.89 ns/iter | 306.37 ns | 314.11 ns | 336.71 ns | 341.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 330.89 ns/iter | 325.37 ns | 327.91 ns | 363.65 ns | 386.79 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.42 ns/iter  | 63.01 ns  | 75.61 ns  | 99.48 ns  | 145.11 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.86 ns/iter | 224.3 ns  | 232.6 ns  | 250.39 ns | 255.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.76 ns/iter | 232.73 ns | 240.86 ns | 256.61 ns | 259.51 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 75.42 ns/iter  | 63.01 ns  | 75.61 ns  | 99.48 ns  | 145.11 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 149.47 ns/iter | 143.71 ns | 147.66 ns | 187.51 ns | 281.31 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.86 ns/iter | 224.3 ns  | 232.6 ns  | 250.39 ns | 255.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.76 ns/iter | 232.73 ns | 240.86 ns | 256.61 ns | 259.51 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 312.89 ns/iter | 306.37 ns | 314.11 ns | 336.71 ns | 341.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 330.89 ns/iter | 325.37 ns | 327.91 ns | 363.65 ns | 386.79 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 504.78 ns/iter | 442.06 ns | 511.14 ns | 683.92 ns | 799.06 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.38 µs/iter   | 1.29 µs   | 1.41 µs   | 1.58 µs   | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.91 µs/iter   | 1.82 µs   | 1.91 µs   | 2.25 µs   | 2.25 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99      | Min      | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.45 µs/iter  | 2.03 µs | 2.27 µs  | 5.79 µs  | 5.79 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.46 µs/iter  | 2.7 µs  | 6.1 µs   | 8.4 µs   | 7.4 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.76 µs/iter | 9.6 µs  | 10.91 µs | 11.32 µs | 11.32 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.19 µs/iter  | 2.01 µs | 2.23 µs | 2.49 µs | 2.49 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.71 µs/iter  | 4.5 µs  | 8.3 µs  | 10.8 µs | 1.27 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.52 µs/iter | 10.8 µs | 16.6 µs | 20.3 µs | 4.05 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99      | Min      | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.19 µs/iter  | 2.01 µs | 2.23 µs  | 2.49 µs  | 2.49 µs  |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.45 µs/iter  | 2.03 µs | 2.27 µs  | 5.79 µs  | 5.79 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.46 µs/iter  | 2.7 µs  | 6.1 µs   | 8.4 µs   | 7.4 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.71 µs/iter  | 4.5 µs  | 8.3 µs   | 10.8 µs  | 1.27 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.76 µs/iter | 9.6 µs  | 10.91 µs | 11.32 µs | 11.32 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.52 µs/iter | 10.8 µs | 16.6 µs  | 20.3 µs  | 4.05 ms  |

