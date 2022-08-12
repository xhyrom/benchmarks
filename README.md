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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 576.01 ns/iter | 574.03 ns | 1.24 µs | 511.45 ns | 1.24 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.09 µs/iter   | 1.03 µs   | 1.83 µs | 950.32 ns | 1.83 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.52 µs/iter   | 1.54 µs   | 2.42 µs | 1.38 µs   | 2.42 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 587.16 ns/iter | 587.24 ns | 1.06 µs | 544.23 ns | 1.06 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 980.21 ns/iter | 915.45 ns | 1.7 µs  | 828.5 ns  | 1.7 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.6 µs/iter    | 1.61 µs   | 2.5 µs  | 1.48 µs   | 2.5 µs  |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 553.27 ns/iter | 557.1 ns | 581.23 ns | 524.45 ns | 583.11 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.11 µs/iter   | 1.03 µs  | 1.82 µs   | 966.32 ns | 1.82 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.5 µs/iter    | 1.52 µs  | 1.92 µs   | 1.4 µs    | 1.92 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 555.49 ns/iter | 557.6 ns  | 571.08 ns | 525.48 ns | 575.5 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.06 µs/iter   | 987.01 ns | 1.73 µs   | 919.88 ns | 1.73 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.52 µs/iter   | 1.54 µs   | 1.95 µs   | 1.43 µs   | 1.95 µs  |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 594.07 ns/iter | 597.82 ns | 630.2 ns | 581.3 ns  | 630.2 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.11 µs/iter   | 1.03 µs   | 1.88 µs  | 967.15 ns | 1.88 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.59 µs/iter   | 1.61 µs   | 1.82 µs  | 1.4 µs    | 1.82 µs  |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 579.73 ns/iter | 587.01 ns | 607.18 ns | 547.42 ns | 607.18 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.14 µs/iter   | 1.08 µs   | 1.81 µs   | 978.37 ns | 1.81 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.88 µs/iter   | 1.9 µs    | 2.2 µs    | 1.79 µs   | 2.2 µs    |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 561.43 ns/iter | 566.11 ns | 577.93 ns | 554.55 ns | 579.06 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.03 µs/iter   | 956.32 ns | 1.73 µs   | 889.64 ns | 1.73 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.54 µs/iter   | 1.57 µs   | 1.65 µs   | 1.45 µs   | 1.65 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 572.38 ns/iter | 578.17 ns | 599.18 ns | 558.93 ns | 599.18 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.08 µs/iter   | 998.19 ns | 1.71 µs   | 951.24 ns | 1.71 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.53 µs/iter   | 1.56 µs   | 1.68 µs   | 1.45 µs   | 1.68 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average      | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------ | ------------ | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 580 ns/iter  | 585.16 ns | 633.1 ns | 563.79 ns | 633.1 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.08 µs/iter | 1 µs      | 1.79 µs  | 930.44 ns | 1.79 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.51 µs/iter | 1.55 µs   | 1.69 µs  | 1.35 µs   | 1.69 µs  |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75     | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | ------- | --------- | --------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 13.45 µs/iter  | 11.3 µs | 26.7 µs   | 7.6 µs    | 3.05 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 26.86 µs/iter  | 24.5 µs | 140.91 µs | 21.7 µs   | 1.12 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 940.73 µs/iter | 1.03 ms | 1.4 ms    | 712.06 µs | 1.51 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | --------- | ------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 16.68 µs/iter | 15.3 µs | 37.3 µs   | 10.5 µs | 4.03 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 27.7 µs/iter  | 24.5 µs | 146.11 µs | 22.4 µs | 8.42 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.53 ms/iter  | 1.44 ms | 2.98 ms   | 1.27 ms | 3.27 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 11.97 µs/iter  | 11 µs     | 25.9 µs   | 7.9 µs    | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 23.51 µs/iter  | 21.9 µs   | 103.81 µs | 19.4 µs   | 656.65 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 916.95 µs/iter | 847.87 µs | 1.55 ms   | 760.46 µs | 3.13 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 11.87 µs/iter  | 10.9 µs   | 26.1 µs | 7.7 µs    | 1.05 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 23.09 µs/iter  | 21.7 µs   | 55.9 µs | 19.3 µs   | 266.42 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 917.69 µs/iter | 847.97 µs | 2.11 ms | 749.46 µs | 2.23 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75     | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.15 µs/iter | 10.1 µs | 25.3 µs   | 6.2 µs    | 1.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 26.83 µs/iter | 24.8 µs | 171.31 µs | 22.4 µs   | 505.24 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.11 ms/iter  | 1.06 ms | 2.03 ms   | 947.28 µs | 2.05 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75      | p99       | Min     | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | -------- | --------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 62.04 µs/iter | 47.1 µs  | 615.35 µs | 37.1 µs | 1.6 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 67.28 µs/iter | 65.11 µs | 214.92 µs | 62.2 µs | 316.43 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.62 ms/iter  | 1.44 ms  | 3.71 ms   | 1.26 ms | 10.59 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 19.82 µs/iter  | 18.7 µs   | 62.2 µs  | 9.7 µs    | 1.48 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 23.98 µs/iter  | 22.6 µs   | 67.81 µs | 19 µs     | 635.75 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 891.79 µs/iter | 858.47 µs | 1.66 ms  | 736.06 µs | 1.96 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary') | 20.48 µs/iter  | 19.3 µs   | 43.9 µs | 10.4 µs   | 2.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 24.79 µs/iter  | 24.1 µs   | 39.9 µs | 20.7 µs   | 340.33 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 960.17 µs/iter | 900.87 µs | 2.36 ms | 726.76 µs | 2.59 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 84.9 µs/iter   | 83.01 µs  | 254.22 µs | 78.81 µs  | 448.64 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex') | 324.88 µs/iter | 323.83 µs | 398.83 µs | 315.23 µs | 1.74 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 1.01 ms/iter   | 943.08 µs | 2.44 ms   | 853.97 µs | 2.71 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 481.19 ns/iter | 479.35 ns | 507.07 ns | 470.05 ns | 508.22 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 738.67 ns/iter | 747.43 ns | 1.05 µs   | 630.07 ns | 1.05 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.05 µs/iter   | 981.37 ns | 1.69 µs   | 868.14 ns | 1.69 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 586.51 ns/iter | 585.82 ns | 624.29 ns | 539.59 ns | 624.29 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 981.91 ns/iter | 925.58 ns | 1.67 µs   | 789.44 ns | 1.67 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.46 µs/iter   | 1.65 µs   | 1.85 µs   | 1.23 µs   | 1.85 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 480.41 ns/iter | 478.88 ns | 521.35 ns | 445.72 ns | 558.11 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 717.09 ns/iter | 734 ns    | 824.62 ns | 569.42 ns | 824.62 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.03 µs/iter   | 942.85 ns | 1.68 µs   | 884.75 ns | 1.68 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 534.56 ns/iter | 542.22 ns | 556.35 ns | 496.33 ns | 578.88 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 716.5 ns/iter  | 727.63 ns | 828.33 ns | 627.57 ns | 828.33 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 965.08 ns/iter | 893.99 ns | 1.61 µs   | 828.27 ns | 1.61 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 621.55 ns/iter | 626.86 ns | 668.11 ns | 544.49 ns | 668.11 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.04 µs/iter   | 961.47 ns | 1.96 µs   | 883 ns    | 1.96 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.69 µs/iter   | 1.72 µs   | 1.9 µs    | 1.6 µs    | 1.9 µs    |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 578.91 ns/iter | 583.37 ns | 665.31 ns | 545.16 ns | 665.31 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.1 µs/iter    | 1.01 µs   | 1.78 µs   | 941.39 ns | 1.78 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2 µs/iter      | 2.03 µs   | 2.2 µs    | 1.88 µs   | 2.2 µs    |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 480.33 ns/iter | 479.71 ns | 511.58 ns | 447.84 ns | 519.14 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 753.54 ns/iter | 766.84 ns | 851.04 ns | 693.35 ns | 851.04 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 996.98 ns/iter | 975.46 ns | 1.68 µs   | 761.2 ns  | 1.68 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 477.77 ns/iter | 479.31 ns | 518.2 ns  | 420.54 ns | 519.8 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 691.51 ns/iter | 735.21 ns | 782.72 ns | 532.53 ns | 782.72 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.02 µs/iter   | 974.61 ns | 1.74 µs   | 791.05 ns | 1.74 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 555.05 ns/iter | 557.63 ns | 595.69 ns | 539.17 ns | 608.78 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 956.88 ns/iter | 888.74 ns | 1.6 µs    | 752.51 ns | 1.6 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.32 µs/iter   | 1.33 µs   | 1.36 µs   | 1.26 µs   | 1.36 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 15.43 µs/iter | 14.7 µs | 33.6 µs | 11.4 µs | 348.13 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 16.75 µs/iter | 14.9 µs | 37.1 µs | 9.7 µs  | 4.5 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.82 ms/iter  | 1.63 ms | 6.65 ms | 1.36 ms | 6.66 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 16.64 µs/iter | 15.2 µs | 37.6 µs | 10.9 µs | 1.07 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 28.4 µs/iter  | 27.9 µs | 43.4 µs | 23.8 µs | 321.63 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.56 ms/iter  | 1.44 ms | 5.27 ms | 1.09 ms | 5.95 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.48 µs/iter  | 1.49 µs | 1.61 µs   | 1.41 µs | 1.61 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 17.83 µs/iter | 16 µs   | 56.51 µs  | 10.1 µs | 5.63 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 53.11 µs/iter | 52.5 µs | 102.31 µs | 40.6 µs | 388.62 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 167.99 ns/iter | 168.02 ns | 186.15 ns | 137.18 ns | 192.33 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 445.42 ns/iter | 451.26 ns | 575.98 ns | 361.19 ns | 600.72 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 16.98 µs/iter  | 15.4 µs   | 53.41 µs  | 10.1 µs   | 1.29 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.2 µs/iter  | 4.23 µs | 4.32 µs | 4.02 µs | 4.32 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 21.2 µs/iter | 21.2 µs | 35.7 µs | 16.3 µs | 1.61 ms |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 33.4 µs/iter | 31.7 µs | 61.2 µs | 20.4 µs | 1.62 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.08 ns/iter | 154.86 ns | 175.59 ns | 128.17 ns | 188.5 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.58 µs   | 1.62 µs   | 1.4 µs    | 1.62 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 155.75 µs/iter | 157.81 µs | 195.12 µs | 120.31 µs | 1.31 ms  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 15.57 µs/iter | 14.8 µs | 30.7 µs | 11.8 µs | 374.23 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.4 µs/iter  | 16 µs   | 53.7 µs | 11.1 µs | 1.21 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.82 ms/iter  | 1.66 ms | 6.29 ms | 1.25 ms | 6.49 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 16.03 µs/iter | 15.4 µs | 31 µs   | 11.9 µs | 328.93 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 18.84 µs/iter | 17.1 µs | 56.7 µs | 10.8 µs | 1.85 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.81 ms/iter  | 1.67 ms | 5.58 ms | 1.37 ms | 6.59 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 656.41 ns/iter | 662.61 ns | 718.25 ns | 611.18 ns | 718.25 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.75 µs/iter   | 5.28 µs   | 5.96 µs   | 3.53 µs   | 5.96 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 63.16 µs/iter  | 56.6 µs   | 112.31 µs | 54.91 µs  | 1.46 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.08 ns/iter | 154.86 ns | 175.59 ns | 128.17 ns | 188.5 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 167.99 ns/iter | 168.02 ns | 186.15 ns | 137.18 ns | 192.33 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 445.42 ns/iter | 451.26 ns | 575.98 ns | 361.19 ns | 600.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 477.77 ns/iter | 479.31 ns | 518.2 ns  | 420.54 ns | 519.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 480.33 ns/iter | 479.71 ns | 511.58 ns | 447.84 ns | 519.14 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 480.41 ns/iter | 478.88 ns | 521.35 ns | 445.72 ns | 558.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 481.19 ns/iter | 479.35 ns | 507.07 ns | 470.05 ns | 508.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 534.56 ns/iter | 542.22 ns | 556.35 ns | 496.33 ns | 578.88 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 553.27 ns/iter | 557.1 ns  | 581.23 ns | 524.45 ns | 583.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 555.05 ns/iter | 557.63 ns | 595.69 ns | 539.17 ns | 608.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 555.49 ns/iter | 557.6 ns  | 571.08 ns | 525.48 ns | 575.5 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 561.43 ns/iter | 566.11 ns | 577.93 ns | 554.55 ns | 579.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 572.38 ns/iter | 578.17 ns | 599.18 ns | 558.93 ns | 599.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 576.01 ns/iter | 574.03 ns | 1.24 µs   | 511.45 ns | 1.24 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 578.91 ns/iter | 583.37 ns | 665.31 ns | 545.16 ns | 665.31 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 579.73 ns/iter | 587.01 ns | 607.18 ns | 547.42 ns | 607.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 580 ns/iter    | 585.16 ns | 633.1 ns  | 563.79 ns | 633.1 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 586.51 ns/iter | 585.82 ns | 624.29 ns | 539.59 ns | 624.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 587.16 ns/iter | 587.24 ns | 1.06 µs   | 544.23 ns | 1.06 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 594.07 ns/iter | 597.82 ns | 630.2 ns  | 581.3 ns  | 630.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 621.55 ns/iter | 626.86 ns | 668.11 ns | 544.49 ns | 668.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 656.41 ns/iter | 662.61 ns | 718.25 ns | 611.18 ns | 718.25 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 691.51 ns/iter | 735.21 ns | 782.72 ns | 532.53 ns | 782.72 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 716.5 ns/iter  | 727.63 ns | 828.33 ns | 627.57 ns | 828.33 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 717.09 ns/iter | 734 ns    | 824.62 ns | 569.42 ns | 824.62 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 738.67 ns/iter | 747.43 ns | 1.05 µs   | 630.07 ns | 1.05 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 753.54 ns/iter | 766.84 ns | 851.04 ns | 693.35 ns | 851.04 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 956.88 ns/iter | 888.74 ns | 1.6 µs    | 752.51 ns | 1.6 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 965.08 ns/iter | 893.99 ns | 1.61 µs   | 828.27 ns | 1.61 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 980.21 ns/iter | 915.45 ns | 1.7 µs    | 828.5 ns  | 1.7 µs    |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 981.91 ns/iter | 925.58 ns | 1.67 µs   | 789.44 ns | 1.67 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 996.98 ns/iter | 975.46 ns | 1.68 µs   | 761.2 ns  | 1.68 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.02 µs/iter   | 974.61 ns | 1.74 µs   | 791.05 ns | 1.74 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.03 µs/iter   | 942.85 ns | 1.68 µs   | 884.75 ns | 1.68 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.03 µs/iter   | 956.32 ns | 1.73 µs   | 889.64 ns | 1.73 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.04 µs/iter   | 961.47 ns | 1.96 µs   | 883 ns    | 1.96 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.05 µs/iter   | 981.37 ns | 1.69 µs   | 868.14 ns | 1.69 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.06 µs/iter   | 987.01 ns | 1.73 µs   | 919.88 ns | 1.73 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.08 µs/iter   | 1 µs      | 1.79 µs   | 930.44 ns | 1.79 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.08 µs/iter   | 998.19 ns | 1.71 µs   | 951.24 ns | 1.71 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.09 µs/iter   | 1.03 µs   | 1.83 µs   | 950.32 ns | 1.83 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.1 µs/iter    | 1.01 µs   | 1.78 µs   | 941.39 ns | 1.78 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.11 µs/iter   | 1.03 µs   | 1.82 µs   | 966.32 ns | 1.82 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.11 µs/iter   | 1.03 µs   | 1.88 µs   | 967.15 ns | 1.88 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.14 µs/iter   | 1.08 µs   | 1.81 µs   | 978.37 ns | 1.81 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.32 µs/iter   | 1.33 µs   | 1.36 µs   | 1.26 µs   | 1.36 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.46 µs/iter   | 1.65 µs   | 1.85 µs   | 1.23 µs   | 1.85 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.48 µs/iter   | 1.49 µs   | 1.61 µs   | 1.41 µs   | 1.61 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.5 µs/iter    | 1.52 µs   | 1.92 µs   | 1.4 µs    | 1.92 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.51 µs/iter   | 1.55 µs   | 1.69 µs   | 1.35 µs   | 1.69 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.52 µs/iter   | 1.54 µs   | 2.42 µs   | 1.38 µs   | 2.42 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.52 µs/iter   | 1.54 µs   | 1.95 µs   | 1.43 µs   | 1.95 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.53 µs/iter   | 1.56 µs   | 1.68 µs   | 1.45 µs   | 1.68 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.54 µs/iter   | 1.57 µs   | 1.65 µs   | 1.45 µs   | 1.65 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.55 µs/iter   | 1.58 µs   | 1.62 µs   | 1.4 µs    | 1.62 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.59 µs/iter   | 1.61 µs   | 1.82 µs   | 1.4 µs    | 1.82 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.6 µs/iter    | 1.61 µs   | 2.5 µs    | 1.48 µs   | 2.5 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.69 µs/iter   | 1.72 µs   | 1.9 µs    | 1.6 µs    | 1.9 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.88 µs/iter   | 1.9 µs    | 2.2 µs    | 1.79 µs   | 2.2 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2 µs/iter      | 2.03 µs   | 2.2 µs    | 1.88 µs   | 2.2 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.2 µs/iter    | 4.23 µs   | 4.32 µs   | 4.02 µs   | 4.32 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.75 µs/iter   | 5.28 µs   | 5.96 µs   | 3.53 µs   | 5.96 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.15 µs/iter  | 10.1 µs   | 25.3 µs   | 6.2 µs    | 1.42 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 11.87 µs/iter  | 10.9 µs   | 26.1 µs   | 7.7 µs    | 1.05 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 11.97 µs/iter  | 11 µs     | 25.9 µs   | 7.9 µs    | 1.09 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 13.45 µs/iter  | 11.3 µs   | 26.7 µs   | 7.6 µs    | 3.05 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 15.43 µs/iter  | 14.7 µs   | 33.6 µs   | 11.4 µs   | 348.13 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 15.57 µs/iter  | 14.8 µs   | 30.7 µs   | 11.8 µs   | 374.23 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 16.03 µs/iter  | 15.4 µs   | 31 µs     | 11.9 µs   | 328.93 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 16.64 µs/iter  | 15.2 µs   | 37.6 µs   | 10.9 µs   | 1.07 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 16.68 µs/iter  | 15.3 µs   | 37.3 µs   | 10.5 µs   | 4.03 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 16.75 µs/iter  | 14.9 µs   | 37.1 µs   | 9.7 µs    | 4.5 ms    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 16.98 µs/iter  | 15.4 µs   | 53.41 µs  | 10.1 µs   | 1.29 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.4 µs/iter   | 16 µs     | 53.7 µs   | 11.1 µs   | 1.21 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 17.83 µs/iter  | 16 µs     | 56.51 µs  | 10.1 µs   | 5.63 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 18.84 µs/iter  | 17.1 µs   | 56.7 µs   | 10.8 µs   | 1.85 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 19.82 µs/iter  | 18.7 µs   | 62.2 µs   | 9.7 µs    | 1.48 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 20.48 µs/iter  | 19.3 µs   | 43.9 µs   | 10.4 µs   | 2.21 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 21.2 µs/iter   | 21.2 µs   | 35.7 µs   | 16.3 µs   | 1.61 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 23.09 µs/iter  | 21.7 µs   | 55.9 µs   | 19.3 µs   | 266.42 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 23.51 µs/iter  | 21.9 µs   | 103.81 µs | 19.4 µs   | 656.65 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 23.98 µs/iter  | 22.6 µs   | 67.81 µs  | 19 µs     | 635.75 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 24.79 µs/iter  | 24.1 µs   | 39.9 µs   | 20.7 µs   | 340.33 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 26.83 µs/iter  | 24.8 µs   | 171.31 µs | 22.4 µs   | 505.24 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 26.86 µs/iter  | 24.5 µs   | 140.91 µs | 21.7 µs   | 1.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 27.7 µs/iter   | 24.5 µs   | 146.11 µs | 22.4 µs   | 8.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 28.4 µs/iter   | 27.9 µs   | 43.4 µs   | 23.8 µs   | 321.63 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 33.4 µs/iter   | 31.7 µs   | 61.2 µs   | 20.4 µs   | 1.62 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 53.11 µs/iter  | 52.5 µs   | 102.31 µs | 40.6 µs   | 388.62 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 62.04 µs/iter  | 47.1 µs   | 615.35 µs | 37.1 µs   | 1.6 ms    |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 63.16 µs/iter  | 56.6 µs   | 112.31 µs | 54.91 µs  | 1.46 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 67.28 µs/iter  | 65.11 µs  | 214.92 µs | 62.2 µs   | 316.43 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 84.9 µs/iter   | 83.01 µs  | 254.22 µs | 78.81 µs  | 448.64 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 155.75 µs/iter | 157.81 µs | 195.12 µs | 120.31 µs | 1.31 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 324.88 µs/iter | 323.83 µs | 398.83 µs | 315.23 µs | 1.74 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 891.79 µs/iter | 858.47 µs | 1.66 ms   | 736.06 µs | 1.96 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 916.95 µs/iter | 847.87 µs | 1.55 ms   | 760.46 µs | 3.13 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 917.69 µs/iter | 847.97 µs | 2.11 ms   | 749.46 µs | 2.23 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 940.73 µs/iter | 1.03 ms   | 1.4 ms    | 712.06 µs | 1.51 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 960.17 µs/iter | 900.87 µs | 2.36 ms   | 726.76 µs | 2.59 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 1.01 ms/iter   | 943.08 µs | 2.44 ms   | 853.97 µs | 2.71 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.11 ms/iter   | 1.06 ms   | 2.03 ms   | 947.28 µs | 2.05 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.53 ms/iter   | 1.44 ms   | 2.98 ms   | 1.27 ms   | 3.27 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.56 ms/iter   | 1.44 ms   | 5.27 ms   | 1.09 ms   | 5.95 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.62 ms/iter   | 1.44 ms   | 3.71 ms   | 1.26 ms   | 10.59 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.81 ms/iter   | 1.67 ms   | 5.58 ms   | 1.37 ms   | 6.59 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.82 ms/iter   | 1.63 ms   | 6.65 ms   | 1.36 ms   | 6.66 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.82 ms/iter   | 1.66 ms   | 6.29 ms   | 1.25 ms   | 6.49 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.8 (x64-linux)                  | http      | 77,997.252/rps | 81,331.163 | 86,029.314 | 11,240.883 | 87,202.491 |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | http      | 40,090.177/rps | 42,481.594 | 43,396.966 | 4,256.027  | 44,264.993 |
| node v18.7.0 (x64-linux)               | http      | 34,623.71/rps  | 35,913.368 | 37,038.651 | 4,523.17   | 37,665.211 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 192.24 ns/iter | 190.11 ns | 251.49 ns | 151.04 ns | 322.59 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 361.41 ns/iter | 372.08 ns | 398.57 ns | 299.99 ns | 401.78 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 386.94 ns/iter | 390.62 ns | 429.44 ns | 341.56 ns | 444.47 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 98.1 ns/iter   | 98.38 ns  | 140.76 ns | 77.54 ns  | 152.77 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 287.35 ns/iter | 292.28 ns | 315.16 ns | 268.46 ns | 321.07 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 299.77 ns/iter | 303.09 ns | 330.78 ns | 264.74 ns | 347.1 ns  |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 98.1 ns/iter   | 98.38 ns  | 140.76 ns | 77.54 ns  | 152.77 ns |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 192.24 ns/iter | 190.11 ns | 251.49 ns | 151.04 ns | 322.59 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 287.35 ns/iter | 292.28 ns | 315.16 ns | 268.46 ns | 321.07 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 299.77 ns/iter | 303.09 ns | 330.78 ns | 264.74 ns | 347.1 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 361.41 ns/iter | 372.08 ns | 398.57 ns | 299.99 ns | 401.78 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 386.94 ns/iter | 390.62 ns | 429.44 ns | 341.56 ns | 444.47 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders" | 41.1 ms/iter   | 41.54 ms  | 45.96 ms  | 39.76 ms  | 45.96 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 119.98 ms/iter | 120.12 ms | 120.4 ms  | 119.53 ms | 120.4 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 262.75 ms/iter | 265.5 ms  | 278.21 ms | 251.11 ms | 278.21 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products" | 116.15 µs/iter | 115.31 µs | 142.91 µs | 88.81 µs  | 1.37 ms |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 367.83 µs/iter | 367.83 µs | 381.33 µs | 361.73 µs | 1.08 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 486.98 µs/iter | 452.43 µs | 541.74 µs | 354.73 µs | 9.23 ms |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 70.98 µs/iter  | 74.31 µs  | 96.61 µs  | 52.4 µs   | 689.56 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 184.81 µs/iter | 184.31 µs | 197.61 µs | 169.21 µs | 693.46 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 442.96 µs/iter | 394.63 µs | 867.57 µs | 274.12 µs | 8.98 ms   |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 76.35 µs/iter  | 71.11 µs  | 115.71 µs | 51.6 µs   | 1.09 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 139.15 µs/iter | 131.81 µs | 263.42 µs | 102.81 µs | 867.07 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 406.78 µs/iter | 400.13 µs | 2.1 ms    | 267.32 µs | 6.32 ms   |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 210.09 µs/iter | 210.32 µs | 232.32 µs | 178.01 µs | 854.87 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 536.17 µs/iter | 535.94 µs | 557.75 µs | 491.54 µs | 1.23 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.16 ms/iter   | 1.02 ms   | 8.99 ms   | 917.37 µs | 9.93 ms   |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 70.98 µs/iter  | 74.31 µs  | 96.61 µs  | 52.4 µs   | 689.56 µs |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 76.35 µs/iter  | 71.11 µs  | 115.71 µs | 51.6 µs   | 1.09 ms   |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products"  | 116.15 µs/iter | 115.31 µs | 142.91 µs | 88.81 µs  | 1.37 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 139.15 µs/iter | 131.81 µs | 263.42 µs | 102.81 µs | 867.07 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 184.81 µs/iter | 184.31 µs | 197.61 µs | 169.21 µs | 693.46 µs |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 210.09 µs/iter | 210.32 µs | 232.32 µs | 178.01 µs | 854.87 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 367.83 µs/iter | 367.83 µs | 381.33 µs | 361.73 µs | 1.08 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 406.78 µs/iter | 400.13 µs | 2.1 ms    | 267.32 µs | 6.32 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 442.96 µs/iter | 394.63 µs | 867.57 µs | 274.12 µs | 8.98 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 486.98 µs/iter | 452.43 µs | 541.74 µs | 354.73 µs | 9.23 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 536.17 µs/iter | 535.94 µs | 557.75 µs | 491.54 µs | 1.23 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.16 ms/iter   | 1.02 ms   | 8.99 ms   | 917.37 µs | 9.93 ms   |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders"    | 41.1 ms/iter   | 41.54 ms  | 45.96 ms  | 39.76 ms  | 45.96 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 119.98 ms/iter | 120.12 ms | 120.4 ms  | 119.53 ms | 120.4 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 262.75 ms/iter | 265.5 ms  | 278.21 ms | 251.11 ms | 278.21 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 766.06 ns/iter | 822.23 ns | 1 µs    | 619.51 ns | 1 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.67 µs/iter   | 1.76 µs   | 1.79 µs | 1.47 µs   | 1.79 µs |
| bun 0.1.8 (x64-linux)                  | nanoid(36) | 2.11 µs/iter   | 2.12 µs   | 2.51 µs | 2.01 µs   | 2.51 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | console.log('hello') | 2.42 µs/iter  | 2.34 µs | 5.19 µs | 2 µs    | 5.19 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.63 µs/iter  | 4.55 µs | 6.72 µs | 4.03 µs | 6.72 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.81 µs/iter | 14 µs   | 19.1 µs | 6.8 µs  | 776.57 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min    | Max     |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------ | ------- |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.63 µs/iter | 2.58 µs | 4.3 µs  | 1.9 µs | 4.3 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.08 µs/iter | 9.7 µs  | 14.9 µs | 4.6 µs | 4.08 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.1 µs/iter | 21.2 µs | 31.6 µs | 12 µs  | 2.25 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | console.log('hello')             | 2.42 µs/iter  | 2.34 µs | 5.19 µs | 2 µs    | 5.19 µs   |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.63 µs/iter  | 2.58 µs | 4.3 µs  | 1.9 µs  | 4.3 µs    |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.63 µs/iter  | 4.55 µs | 6.72 µs | 4.03 µs | 6.72 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.08 µs/iter  | 9.7 µs  | 14.9 µs | 4.6 µs  | 4.08 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.81 µs/iter | 14 µs   | 19.1 µs | 6.8 µs  | 776.57 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.1 µs/iter  | 21.2 µs | 31.6 µs | 12 µs   | 2.25 ms   |

