*Ran on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

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
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 563.84 ns/iter | 563.55 ns | 1.26 µs | 542.06 ns | 1.26 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.17 µs/iter   | 1.23 µs   | 1.91 µs | 956.47 ns | 1.91 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.66 µs/iter   | 1.66 µs   | 2.41 µs | 1.51 µs   | 2.41 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 578.8 ns/iter | 583.01 ns | 755.15 ns | 564.14 ns | 755.15 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.01 µs/iter  | 936.26 ns | 1.75 µs   | 893.91 ns | 1.75 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.75 µs/iter  | 1.77 µs   | 2.57 µs   | 1.61 µs   | 2.57 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 560.49 ns/iter | 566.24 ns | 585.34 ns | 552.93 ns | 613.63 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.16 µs/iter   | 1.08 µs   | 1.92 µs   | 1.01 µs   | 1.92 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.6 µs/iter    | 1.62 µs   | 1.97 µs   | 1.52 µs   | 1.97 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 560.65 ns/iter | 565.98 ns | 593.36 ns | 552.91 ns | 596.78 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.1 µs/iter    | 1.01 µs   | 1.8 µs    | 984.71 ns | 1.8 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.59 µs/iter   | 1.61 µs   | 2.01 µs   | 1.51 µs   | 2.01 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 596.37 ns/iter | 601.13 ns | 637.59 ns | 589.11 ns | 637.59 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.15 µs/iter   | 1.07 µs   | 2.03 µs   | 1.02 µs   | 2.03 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.71 µs/iter   | 1.72 µs   | 1.86 µs   | 1.64 µs   | 1.86 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average       | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 586.9 ns/iter | 592.47 ns | 611.17 ns | 579.6 ns | 611.17 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.22 µs/iter  | 1.17 µs   | 2 µs      | 1.02 µs  | 2 µs      |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.01 µs/iter  | 2.02 µs   | 2.23 µs   | 1.97 µs  | 2.23 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 565.27 ns/iter | 571.39 ns | 586.57 ns | 557.6 ns  | 586.57 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.06 µs/iter   | 991.08 ns | 1.7 µs    | 938.61 ns | 1.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.62 µs/iter   | 1.66 µs   | 1.69 µs   | 1.49 µs   | 1.69 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 563.83 ns/iter | 569.43 ns | 594.72 ns | 556.36 ns | 594.72 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.05 µs/iter   | 976.41 ns | 1.78 µs   | 935.86 ns | 1.78 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.63 µs/iter   | 1.67 µs   | 1.79 µs   | 1.55 µs   | 1.79 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 586.09 ns/iter | 591.98 ns | 651.95 ns | 568.19 ns | 651.95 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.07 µs/iter   | 989.8 ns  | 1.75 µs   | 966.3 ns  | 1.75 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.64 µs/iter   | 1.67 µs   | 1.77 µs   | 1.51 µs   | 1.77 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 14.62 µs/iter  | 13.6 µs   | 29.1 µs   | 8.7 µs    | 1.91 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 26.94 µs/iter  | 24.8 µs   | 139.71 µs | 21.9 µs   | 333.03 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 972.59 µs/iter | 954.68 µs | 1.48 ms   | 851.67 µs | 1.71 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | --------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 16.74 µs/iter | 15.2 µs | 36.1 µs   | 10.2 µs | 2.61 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 27.14 µs/iter | 24.7 µs | 140.01 µs | 21.9 µs | 1.69 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.54 ms/iter  | 1.41 ms | 3.18 ms   | 1.36 ms | 3.95 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.35 µs/iter  | 11 µs     | 26.5 µs   | 9 µs      | 5.13 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 25.31 µs/iter  | 23.5 µs   | 136.21 µs | 18.7 µs   | 2.46 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 946.45 µs/iter | 852.47 µs | 2.27 ms   | 769.36 µs | 6.59 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average       | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 13.3 µs/iter  | 11 µs     | 25.9 µs | 9.2 µs    | 1.93 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 24.53 µs/iter | 23.3 µs   | 54.1 µs | 20.7 µs   | 282.42 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 945.5 µs/iter | 864.17 µs | 2.11 ms | 768.97 µs | 12.25 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75     | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 14.06 µs/iter | 11.7 µs | 26.9 µs   | 9.5 µs    | 1.58 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 29.11 µs/iter | 27.2 µs | 167.11 µs | 23.4 µs   | 1.48 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.18 ms/iter  | 1.08 ms | 3.43 ms   | 983.38 µs | 7.35 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | -------- | --------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 64.24 µs/iter | 47.3 µs  | 603.15 µs | 45.5 µs  | 2.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 69.93 µs/iter | 67.51 µs | 218.32 µs | 64.91 µs | 327.03 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.79 ms/iter  | 1.55 ms  | 6.38 ms   | 1.4 ms   | 7.67 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 23.31 µs/iter | 20.2 µs   | 59.1 µs   | 9.8 µs    | 1.79 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 25.27 µs/iter | 23.7 µs   | 105.81 µs | 20.2 µs   | 634.25 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 1 ms/iter     | 917.28 µs | 2.33 ms   | 827.67 µs | 12.12 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average       | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 21.67 µs/iter | 20.3 µs   | 57.2 µs | 10 µs     | 2.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 26.25 µs/iter | 25 µs     | 52.9 µs | 20.6 µs   | 662.55 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 1.04 ms/iter  | 950.58 µs | 2.87 ms | 855.57 µs | 6.33 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 86.97 µs/iter  | 84.41 µs  | 277.52 µs | 80.21 µs  | 348.03 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 327.71 µs/iter | 320.03 µs | 780.87 µs | 315.13 µs | 1.47 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 1.02 ms/iter   | 940.88 µs | 2.44 ms   | 910.78 µs | 2.95 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 488.1 ns/iter  | 501.66 ns | 536.86 ns | 473.19 ns | 552.8 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 795.63 ns/iter | 791.29 ns | 1.72 µs   | 758.42 ns | 1.72 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.08 µs/iter   | 1.1 µs    | 1.72 µs   | 937.49 ns | 1.72 µs  |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 585.34 ns/iter | 582.53 ns | 629.37 ns | 572.63 ns | 629.37 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.02 µs/iter   | 940.6 ns  | 1.72 µs   | 925.71 ns | 1.72 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.66 µs/iter   | 1.74 µs   | 2.13 µs   | 1.42 µs   | 2.13 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 478.51 ns/iter | 475.06 ns | 526.46 ns | 468.24 ns | 566.2 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 747.24 ns/iter | 753.45 ns | 1.3 µs    | 723.47 ns | 1.3 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.11 µs/iter   | 1.02 µs   | 1.84 µs   | 989.08 ns | 1.84 µs  |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 480.48 ns/iter | 477.92 ns | 520.21 ns | 471 ns    | 521.16 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 732.69 ns/iter | 745.12 ns | 812.28 ns | 714.61 ns | 812.28 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.05 µs/iter   | 969.06 ns | 1.7 µs    | 955.32 ns | 1.7 µs    |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 641.45 ns/iter | 638.32 ns | 701.51 ns | 629.47 ns | 701.51 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.07 µs/iter   | 984.65 ns | 1.84 µs   | 955.5 ns  | 1.84 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.86 µs/iter   | 1.87 µs   | 1.99 µs   | 1.82 µs   | 1.99 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 642.04 ns/iter | 639.45 ns | 710.14 ns | 630.07 ns | 710.14 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.15 µs/iter   | 1.06 µs   | 1.88 µs   | 1.03 µs   | 1.88 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.16 µs/iter   | 2.17 µs   | 2.32 µs   | 2.13 µs   | 2.32 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 481.24 ns/iter | 478.67 ns | 523.82 ns | 471.42 ns | 525.59 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 779.26 ns/iter | 790.6 ns  | 873.7 ns  | 760.36 ns | 873.7 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.07 µs/iter   | 980.43 ns | 1.79 µs   | 945.48 ns | 1.79 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 485.1 ns/iter  | 481.67 ns | 525.49 ns | 474.89 ns | 528.45 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 777.31 ns/iter | 792.72 ns | 823.81 ns | 762.54 ns | 823.81 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.08 µs/iter   | 1.01 µs   | 1.74 µs   | 964.56 ns | 1.74 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 597.25 ns/iter | 601.16 ns | 665.19 ns | 566.2 ns  | 665.19 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1.01 µs/iter   | 919.72 ns | 1.7 µs    | 891.06 ns | 1.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.32 µs/iter   | 1.34 µs   | 1.4 µs    | 1.31 µs   | 1.4 µs    |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 16.67 µs/iter | 15 µs   | 37.4 µs | 8.5 µs  | 6.71 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 17.71 µs/iter | 17 µs   | 36.7 µs | 13.4 µs | 355.43 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.78 ms/iter  | 1.62 ms | 5.69 ms | 1.58 ms | 6.64 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 16.74 µs/iter | 15.3 µs | 35.7 µs | 10.8 µs | 1.34 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 31.14 µs/iter | 30.4 µs | 48.2 µs | 26.8 µs | 4.04 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.59 ms/iter  | 1.43 ms | 5.87 ms | 1.39 ms | 5.97 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75      | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------- | -------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.54 µs/iter  | 1.57 µs  | 1.64 µs  | 1.49 µs | 1.64 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 32.83 µs/iter | 34.6 µs  | 98.01 µs | 14.1 µs | 1.17 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 54.6 µs/iter  | 52.91 µs | 91.51 µs | 49.5 µs | 1.86 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 173.53 ns/iter | 171.35 ns | 196.81 ns | 166.51 ns | 199.85 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 452.94 ns/iter | 447.43 ns | 545.62 ns | 442.47 ns | 606.09 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 33.66 µs/iter  | 35.2 µs   | 99.61 µs  | 14.1 µs   | 1.19 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99      | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | -------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.2 µs/iter   | 4.2 µs  | 4.24 µs  | 4.18 µs | 4.24 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 21.26 µs/iter | 21.1 µs | 29.9 µs  | 19.3 µs | 612.85 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 34.53 µs/iter | 31.5 µs | 56.51 µs | 28.4 µs | 1.35 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.72 ns/iter | 154.68 ns | 177.26 ns | 149.52 ns | 192.06 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.61 µs/iter   | 1.63 µs   | 1.7 µs    | 1.56 µs   | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 152.99 µs/iter | 148.21 µs | 182.31 µs | 146.71 µs | 1.42 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.42 µs/iter | 15.6 µs | 39 µs   | 9.7 µs  | 1.22 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 17.86 µs/iter | 17.2 µs | 37.4 µs | 13.6 µs | 2.05 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.88 ms/iter  | 1.66 ms | 6.65 ms | 1.63 ms | 6.68 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 16.87 µs/iter | 15.4 µs | 37.8 µs | 10 µs   | 1.26 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 17.92 µs/iter | 18.4 µs | 34.9 µs | 14.1 µs | 392.83 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.85 ms/iter  | 1.66 ms | 6.66 ms | 1.63 ms | 6.75 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 642.17 ns/iter | 655.57 ns | 708.3 ns  | 629.68 ns | 708.3 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.91 µs/iter   | 5.38 µs   | 6.02 µs   | 3.52 µs   | 6.02 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 64.33 µs/iter  | 58.91 µs  | 116.31 µs | 54.2 µs   | 1.5 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.72 ns/iter | 154.68 ns | 177.26 ns | 149.52 ns | 192.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 173.53 ns/iter | 171.35 ns | 196.81 ns | 166.51 ns | 199.85 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 452.94 ns/iter | 447.43 ns | 545.62 ns | 442.47 ns | 606.09 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 478.51 ns/iter | 475.06 ns | 526.46 ns | 468.24 ns | 566.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 480.48 ns/iter | 477.92 ns | 520.21 ns | 471 ns    | 521.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 481.24 ns/iter | 478.67 ns | 523.82 ns | 471.42 ns | 525.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 485.1 ns/iter  | 481.67 ns | 525.49 ns | 474.89 ns | 528.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 488.1 ns/iter  | 501.66 ns | 536.86 ns | 473.19 ns | 552.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 560.49 ns/iter | 566.24 ns | 585.34 ns | 552.93 ns | 613.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 560.65 ns/iter | 565.98 ns | 593.36 ns | 552.91 ns | 596.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 563.83 ns/iter | 569.43 ns | 594.72 ns | 556.36 ns | 594.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 563.84 ns/iter | 563.55 ns | 1.26 µs   | 542.06 ns | 1.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 565.27 ns/iter | 571.39 ns | 586.57 ns | 557.6 ns  | 586.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 578.8 ns/iter  | 583.01 ns | 755.15 ns | 564.14 ns | 755.15 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 585.34 ns/iter | 582.53 ns | 629.37 ns | 572.63 ns | 629.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 586.09 ns/iter | 591.98 ns | 651.95 ns | 568.19 ns | 651.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 586.9 ns/iter  | 592.47 ns | 611.17 ns | 579.6 ns  | 611.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 596.37 ns/iter | 601.13 ns | 637.59 ns | 589.11 ns | 637.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 597.25 ns/iter | 601.16 ns | 665.19 ns | 566.2 ns  | 665.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 641.45 ns/iter | 638.32 ns | 701.51 ns | 629.47 ns | 701.51 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 642.04 ns/iter | 639.45 ns | 710.14 ns | 630.07 ns | 710.14 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 642.17 ns/iter | 655.57 ns | 708.3 ns  | 629.68 ns | 708.3 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 732.69 ns/iter | 745.12 ns | 812.28 ns | 714.61 ns | 812.28 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 747.24 ns/iter | 753.45 ns | 1.3 µs    | 723.47 ns | 1.3 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 777.31 ns/iter | 792.72 ns | 823.81 ns | 762.54 ns | 823.81 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 779.26 ns/iter | 790.6 ns  | 873.7 ns  | 760.36 ns | 873.7 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 795.63 ns/iter | 791.29 ns | 1.72 µs   | 758.42 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1.01 µs/iter   | 919.72 ns | 1.7 µs    | 891.06 ns | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.01 µs/iter   | 936.26 ns | 1.75 µs   | 893.91 ns | 1.75 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.02 µs/iter   | 940.6 ns  | 1.72 µs   | 925.71 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.05 µs/iter   | 976.41 ns | 1.78 µs   | 935.86 ns | 1.78 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.05 µs/iter   | 969.06 ns | 1.7 µs    | 955.32 ns | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.06 µs/iter   | 991.08 ns | 1.7 µs    | 938.61 ns | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.07 µs/iter   | 989.8 ns  | 1.75 µs   | 966.3 ns  | 1.75 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.07 µs/iter   | 984.65 ns | 1.84 µs   | 955.5 ns  | 1.84 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.07 µs/iter   | 980.43 ns | 1.79 µs   | 945.48 ns | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.08 µs/iter   | 1.1 µs    | 1.72 µs   | 937.49 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.08 µs/iter   | 1.01 µs   | 1.74 µs   | 964.56 ns | 1.74 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.1 µs/iter    | 1.01 µs   | 1.8 µs    | 984.71 ns | 1.8 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.11 µs/iter   | 1.02 µs   | 1.84 µs   | 989.08 ns | 1.84 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.15 µs/iter   | 1.06 µs   | 1.88 µs   | 1.03 µs   | 1.88 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.15 µs/iter   | 1.07 µs   | 2.03 µs   | 1.02 µs   | 2.03 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.16 µs/iter   | 1.08 µs   | 1.92 µs   | 1.01 µs   | 1.92 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.17 µs/iter   | 1.23 µs   | 1.91 µs   | 956.47 ns | 1.91 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.22 µs/iter   | 1.17 µs   | 2 µs      | 1.02 µs   | 2 µs      |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.32 µs/iter   | 1.34 µs   | 1.4 µs    | 1.31 µs   | 1.4 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.54 µs/iter   | 1.57 µs   | 1.64 µs   | 1.49 µs   | 1.64 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.59 µs/iter   | 1.61 µs   | 2.01 µs   | 1.51 µs   | 2.01 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.6 µs/iter    | 1.62 µs   | 1.97 µs   | 1.52 µs   | 1.97 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.61 µs/iter   | 1.63 µs   | 1.7 µs    | 1.56 µs   | 1.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.62 µs/iter   | 1.66 µs   | 1.69 µs   | 1.49 µs   | 1.69 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.63 µs/iter   | 1.67 µs   | 1.79 µs   | 1.55 µs   | 1.79 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.64 µs/iter   | 1.67 µs   | 1.77 µs   | 1.51 µs   | 1.77 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.66 µs/iter   | 1.66 µs   | 2.41 µs   | 1.51 µs   | 2.41 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.66 µs/iter   | 1.74 µs   | 2.13 µs   | 1.42 µs   | 2.13 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.71 µs/iter   | 1.72 µs   | 1.86 µs   | 1.64 µs   | 1.86 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.75 µs/iter   | 1.77 µs   | 2.57 µs   | 1.61 µs   | 2.57 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.86 µs/iter   | 1.87 µs   | 1.99 µs   | 1.82 µs   | 1.99 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 2.01 µs/iter   | 2.02 µs   | 2.23 µs   | 1.97 µs   | 2.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.16 µs/iter   | 2.17 µs   | 2.32 µs   | 2.13 µs   | 2.32 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.2 µs/iter    | 4.2 µs    | 4.24 µs   | 4.18 µs   | 4.24 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.91 µs/iter   | 5.38 µs   | 6.02 µs   | 3.52 µs   | 6.02 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 13.3 µs/iter   | 11 µs     | 25.9 µs   | 9.2 µs    | 1.93 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.35 µs/iter  | 11 µs     | 26.5 µs   | 9 µs      | 5.13 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 14.06 µs/iter  | 11.7 µs   | 26.9 µs   | 9.5 µs    | 1.58 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 14.62 µs/iter  | 13.6 µs   | 29.1 µs   | 8.7 µs    | 1.91 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 16.67 µs/iter  | 15 µs     | 37.4 µs   | 8.5 µs    | 6.71 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 16.74 µs/iter  | 15.2 µs   | 36.1 µs   | 10.2 µs   | 2.61 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 16.74 µs/iter  | 15.3 µs   | 35.7 µs   | 10.8 µs   | 1.34 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 16.87 µs/iter  | 15.4 µs   | 37.8 µs   | 10 µs     | 1.26 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.42 µs/iter  | 15.6 µs   | 39 µs     | 9.7 µs    | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 17.71 µs/iter  | 17 µs     | 36.7 µs   | 13.4 µs   | 355.43 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 17.86 µs/iter  | 17.2 µs   | 37.4 µs   | 13.6 µs   | 2.05 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 17.92 µs/iter  | 18.4 µs   | 34.9 µs   | 14.1 µs   | 392.83 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 21.26 µs/iter  | 21.1 µs   | 29.9 µs   | 19.3 µs   | 612.85 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 21.67 µs/iter  | 20.3 µs   | 57.2 µs   | 10 µs     | 2.21 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 23.31 µs/iter  | 20.2 µs   | 59.1 µs   | 9.8 µs    | 1.79 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 24.53 µs/iter  | 23.3 µs   | 54.1 µs   | 20.7 µs   | 282.42 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 25.27 µs/iter  | 23.7 µs   | 105.81 µs | 20.2 µs   | 634.25 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 25.31 µs/iter  | 23.5 µs   | 136.21 µs | 18.7 µs   | 2.46 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 26.25 µs/iter  | 25 µs     | 52.9 µs   | 20.6 µs   | 662.55 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 26.94 µs/iter  | 24.8 µs   | 139.71 µs | 21.9 µs   | 333.03 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 27.14 µs/iter  | 24.7 µs   | 140.01 µs | 21.9 µs   | 1.69 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 29.11 µs/iter  | 27.2 µs   | 167.11 µs | 23.4 µs   | 1.48 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 31.14 µs/iter  | 30.4 µs   | 48.2 µs   | 26.8 µs   | 4.04 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 32.83 µs/iter  | 34.6 µs   | 98.01 µs  | 14.1 µs   | 1.17 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 33.66 µs/iter  | 35.2 µs   | 99.61 µs  | 14.1 µs   | 1.19 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 34.53 µs/iter  | 31.5 µs   | 56.51 µs  | 28.4 µs   | 1.35 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 54.6 µs/iter   | 52.91 µs  | 91.51 µs  | 49.5 µs   | 1.86 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 64.24 µs/iter  | 47.3 µs   | 603.15 µs | 45.5 µs   | 2.21 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 64.33 µs/iter  | 58.91 µs  | 116.31 µs | 54.2 µs   | 1.5 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 69.93 µs/iter  | 67.51 µs  | 218.32 µs | 64.91 µs  | 327.03 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 86.97 µs/iter  | 84.41 µs  | 277.52 µs | 80.21 µs  | 348.03 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 152.99 µs/iter | 148.21 µs | 182.31 µs | 146.71 µs | 1.42 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 327.71 µs/iter | 320.03 µs | 780.87 µs | 315.13 µs | 1.47 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 945.5 µs/iter  | 864.17 µs | 2.11 ms   | 768.97 µs | 12.25 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 946.45 µs/iter | 852.47 µs | 2.27 ms   | 769.36 µs | 6.59 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 972.59 µs/iter | 954.68 µs | 1.48 ms   | 851.67 µs | 1.71 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 1 ms/iter      | 917.28 µs | 2.33 ms   | 827.67 µs | 12.12 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 1.02 ms/iter   | 940.88 µs | 2.44 ms   | 910.78 µs | 2.95 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 1.04 ms/iter   | 950.58 µs | 2.87 ms   | 855.57 µs | 6.33 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.18 ms/iter   | 1.08 ms   | 3.43 ms   | 983.38 µs | 7.35 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.54 ms/iter   | 1.41 ms   | 3.18 ms   | 1.36 ms   | 3.95 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.59 ms/iter   | 1.43 ms   | 5.87 ms   | 1.39 ms   | 5.97 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.78 ms/iter   | 1.62 ms   | 5.69 ms   | 1.58 ms   | 6.64 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.79 ms/iter   | 1.55 ms   | 6.38 ms   | 1.4 ms    | 7.67 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.85 ms/iter   | 1.66 ms   | 6.66 ms   | 1.63 ms   | 6.75 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.88 ms/iter   | 1.66 ms   | 6.65 ms   | 1.63 ms   | 6.68 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min       | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | --------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 77,404.764/rps | 81,299.221 | 83,754.795 | 9,235.007 | 86,529.187 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 39,185.946/rps | 43,146.63  | 43,955.8   | 5,644.218 | 44,395.651 |
| node v18.7.0 (x64-linux)               | http      | 32,441.334/rps | 34,115.919 | 34,646.327 | 4,574.167 | 35,041.456 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 200.14 ns/iter | 204.53 ns | 369.76 ns | 172.99 ns | 604.28 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 395.26 ns/iter | 386.95 ns | 1.04 µs   | 357.94 ns | 1.24 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 410.83 ns/iter | 410.61 ns | 737.92 ns | 377.86 ns | 790.47 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 107.36 ns/iter | 102.88 ns | 249.33 ns | 83.85 ns  | 459.8 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 308.43 ns/iter | 311.1 ns  | 486.99 ns | 282.1 ns  | 773.51 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 320.43 ns/iter | 318.53 ns | 572.54 ns | 290.33 ns | 975.91 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 107.36 ns/iter | 102.88 ns | 249.33 ns | 83.85 ns  | 459.8 ns  |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 200.14 ns/iter | 204.53 ns | 369.76 ns | 172.99 ns | 604.28 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 308.43 ns/iter | 311.1 ns  | 486.99 ns | 282.1 ns  | 773.51 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 320.43 ns/iter | 318.53 ns | 572.54 ns | 290.33 ns | 975.91 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 395.26 ns/iter | 386.95 ns | 1.04 µs   | 357.94 ns | 1.24 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 410.83 ns/iter | 410.61 ns | 737.92 ns | 377.86 ns | 790.47 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders" | 46.43 ms/iter  | 48 ms     | 52.83 ms  | 43.27 ms  | 52.83 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 121.23 ms/iter | 121.33 ms | 121.64 ms | 120.91 ms | 121.64 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 285.08 ms/iter | 283.55 ms | 318.82 ms | 274.26 ms | 318.82 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products" | 121.35 µs/iter | 118.51 µs | 144.51 µs | 112.91 µs | 1.24 ms |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 370.23 µs/iter | 369.33 µs | 392.33 µs | 364.93 µs | 1.04 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 528.6 µs/iter  | 483.44 µs | 842.87 µs | 460.54 µs | 9.52 ms |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 75.13 µs/iter  | 73.61 µs  | 96.91 µs  | 68.2 µs   | 688.56 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 184.04 µs/iter | 183.31 µs | 197.42 µs | 181.42 µs | 686.56 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 477.61 µs/iter | 420.04 µs | 523.44 µs | 402.13 µs | 13.95 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 78.57 µs/iter  | 72.81 µs  | 113.11 µs | 56.7 µs   | 678.56 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 141.87 µs/iter | 132.11 µs | 283.12 µs | 119.61 µs | 814.27 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 429.74 µs/iter | 411.43 µs | 914.08 µs | 339.63 µs | 11.75 ms  |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 222.53 µs/iter | 222.72 µs | 242.92 µs | 199.12 µs | 798.77 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 536.96 µs/iter | 535.94 µs | 571.65 µs | 527.64 µs | 1.37 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.3 ms/iter    | 1.11 ms   | 9.75 ms   | 1.07 ms   | 11.77 ms  |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 75.13 µs/iter  | 73.61 µs  | 96.91 µs  | 68.2 µs   | 688.56 µs |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 78.57 µs/iter  | 72.81 µs  | 113.11 µs | 56.7 µs   | 678.56 µs |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products"  | 121.35 µs/iter | 118.51 µs | 144.51 µs | 112.91 µs | 1.24 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 141.87 µs/iter | 132.11 µs | 283.12 µs | 119.61 µs | 814.27 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 184.04 µs/iter | 183.31 µs | 197.42 µs | 181.42 µs | 686.56 µs |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 222.53 µs/iter | 222.72 µs | 242.92 µs | 199.12 µs | 798.77 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 370.23 µs/iter | 369.33 µs | 392.33 µs | 364.93 µs | 1.04 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 429.74 µs/iter | 411.43 µs | 914.08 µs | 339.63 µs | 11.75 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 477.61 µs/iter | 420.04 µs | 523.44 µs | 402.13 µs | 13.95 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 528.6 µs/iter  | 483.44 µs | 842.87 µs | 460.54 µs | 9.52 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 536.96 µs/iter | 535.94 µs | 571.65 µs | 527.64 µs | 1.37 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.3 ms/iter    | 1.11 ms   | 9.75 ms   | 1.07 ms   | 11.77 ms  |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders"    | 46.43 ms/iter  | 48 ms     | 52.83 ms  | 43.27 ms  | 52.83 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 121.23 ms/iter | 121.33 ms | 121.64 ms | 120.91 ms | 121.64 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 285.08 ms/iter | 283.55 ms | 318.82 ms | 274.26 ms | 318.82 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 825.91 ns/iter | 865.57 ns | 1.57 µs | 647.18 ns | 1.57 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.64 µs/iter   | 1.66 µs   | 1.81 µs | 1.51 µs   | 1.81 µs |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 2.13 µs/iter   | 2.14 µs   | 2.39 µs | 2.08 µs   | 2.39 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.58 µs/iter  | 2.36 µs | 6.76 µs | 1.87 µs | 6.76 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 5.23 µs/iter  | 7.3 µs  | 10.5 µs | 3.2 µs  | 6.23 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.06 µs/iter | 14 µs   | 16.7 µs | 7.4 µs  | 868.87 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.44 µs/iter  | 2.47 µs | 2.63 µs | 2.31 µs | 2.63 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.5 µs/iter   | 10 µs   | 17 µs   | 5.5 µs  | 1.96 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.51 µs/iter | 21.5 µs | 27.8 µs | 13.5 µs | 703.76 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.44 µs/iter  | 2.47 µs | 2.63 µs | 2.31 µs | 2.63 µs   |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.58 µs/iter  | 2.36 µs | 6.76 µs | 1.87 µs | 6.76 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 5.23 µs/iter  | 7.3 µs  | 10.5 µs | 3.2 µs  | 6.23 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.5 µs/iter   | 10 µs   | 17 µs   | 5.5 µs  | 1.96 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 13.06 µs/iter | 14 µs   | 16.7 µs | 7.4 µs  | 868.87 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.51 µs/iter | 21.5 µs | 27.8 µs | 13.5 µs | 703.76 µs |

