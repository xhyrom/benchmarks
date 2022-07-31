*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 460.37 ns/iter | 449.5 ns  | 468.86 ns | 498.49 ns | 555.56 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 953.41 ns/iter | 840.91 ns | 875.79 ns | 1.82 µs   | 1.82 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.33 µs/iter   | 1.21 µs   | 1.34 µs   | 2.13 µs   | 2.13 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 495.49 ns/iter | 476.68 ns | 490.42 ns | 936.55 ns | 1.17 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 909.88 ns/iter | 817.27 ns | 837.4 ns  | 1.62 µs   | 1.62 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.42 µs/iter   | 1.31 µs   | 1.4 µs    | 2.78 µs   | 2.78 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 469.58 ns/iter | 462.65 ns | 473.88 ns | 498.61 ns | 515.76 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.03 µs/iter   | 921 ns    | 952.08 ns | 1.72 µs   | 1.72 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.3 µs/iter    | 1.25 µs   | 1.32 µs   | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 468.63 ns/iter | 462.85 ns | 474.08 ns | 481.78 ns | 484.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.01 µs/iter   | 887.48 ns | 915.14 ns | 1.71 µs   | 1.71 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.29 µs/iter   | 1.22 µs   | 1.31 µs   | 1.48 µs   | 1.48 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 495.84 ns/iter | 489.05 ns | 501.22 ns | 519.32 ns | 525.53 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.38 µs/iter   | 1.29 µs   | 1.39 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.41 µs/iter   | 925.8 ns  | 1.81 µs   | 2.75 µs   | 2.75 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 491.24 ns/iter | 485.83 ns | 496.85 ns | 506.64 ns | 507.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.02 µs/iter   | 895.44 ns | 964.68 ns | 1.72 µs   | 1.72 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.63 µs/iter   | 1.56 µs   | 1.65 µs   | 1.74 µs   | 1.74 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 468.49 ns/iter | 463.42 ns | 467.47 ns | 499.13 ns | 535.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 997.46 ns/iter | 875.05 ns | 911.48 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.32 µs/iter   | 1.28 µs   | 1.35 µs   | 1.44 µs   | 1.44 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 471.4 ns/iter  | 456.74 ns | 469.91 ns | 525.14 ns | 534.85 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 981.41 ns/iter | 881.52 ns | 905.01 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.33 µs/iter   | 1.29 µs   | 1.35 µs   | 1.38 µs   | 1.38 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 478.34 ns/iter | 468.74 ns | 482.54 ns | 494.13 ns | 494.76 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 976.91 ns/iter | 871.66 ns | 891.58 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.33 µs/iter   | 1.26 µs   | 1.36 µs   | 1.41 µs   | 1.41 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.33 µs/iter  | 6.8 µs   | 11.1 µs  | 22.3 µs  | 910.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.21 µs/iter  | 18.3 µs  | 20.2 µs  | 119.2 µs | 235.3 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 806.32 µs/iter | 710.9 µs | 905.9 µs | 1.07 ms  | 1.21 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 13.13 µs/iter | 8.1 µs  | 12.4 µs | 31.6 µs  | 1.55 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.25 µs/iter | 17.9 µs | 20.2 µs | 119.7 µs | 605.81 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.3 ms/iter   | 1.15 ms | 1.2 ms  | 2.54 ms  | 2.87 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99      | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | -------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 10.09 µs/iter  | 7 µs     | 9 µs     | 16 µs   | 966.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.22 µs/iter  | 15.6 µs  | 17.8 µs  | 56.6 µs | 557.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 749.54 µs/iter | 675.2 µs | 704.9 µs | 1.25 ms | 1.34 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75     | p99      | Min     | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | ------- | -------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.91 µs/iter   | 6.9 µs  | 8.8 µs   | 15.4 µs | 675.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.06 µs/iter  | 16.7 µs | 17.8 µs  | 44.1 µs | 275.4 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 770.02 µs/iter | 681 µs  | 709.1 µs | 1.76 ms | 1.89 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75      | p99     | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | -------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.37 µs/iter | 7.3 µs   | 9.8 µs  | 21.2 µs  | 6.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.95 µs/iter | 18.7 µs  | 19.9 µs | 133.7 µs | 714.01 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 936.6 µs/iter | 852.2 µs | 877 µs  | 1.81 ms  | 1.93 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.97 µs/iter | 51.2 µs | 53.4 µs | 170.2 µs  | 261.2 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 74.09 µs/iter | 40.8 µs | 43 µs   | 561.91 µs | 16.12 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.37 ms/iter  | 1.21 ms | 1.24 ms | 2.9 ms    | 2.92 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 11.39 µs/iter  | 7.2 µs    | 11.1 µs   | 22.7 µs | 557.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.13 µs/iter  | 16.1 µs   | 19.5 µs   | 53.7 µs | 1.9 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 813.99 µs/iter | 734.81 µs | 764.21 µs | 1.75 ms | 1.83 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 10.89 µs/iter  | 7.1 µs    | 10.6 µs   | 20.1 µs | 548.41 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 20.52 µs/iter  | 17.3 µs   | 20.2 µs   | 33.1 µs | 217.5 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 822.83 µs/iter | 695.11 µs | 762.91 µs | 1.76 ms | 5.82 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 69.84 µs/iter  | 63.1 µs   | 69.2 µs   | 208.9 µs | 296 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 271.93 µs/iter | 262.2 µs  | 266.1 µs  | 328.7 µs | 900.41 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 786.28 µs/iter | 724.81 µs | 755.21 µs | 1.43 ms  | 1.76 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 403.63 ns/iter | 396.28 ns | 401.88 ns | 434.49 ns | 486.91 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 649.76 ns/iter | 621.15 ns | 641.64 ns | 2.07 µs   | 2.07 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 961.03 ns/iter | 826.65 ns | 864.61 ns | 1.62 µs   | 1.62 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 487.87 ns/iter | 481.51 ns | 486.06 ns | 518.85 ns | 519.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 946.09 ns/iter | 844.16 ns | 857.41 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.29 µs/iter   | 1.13 µs   | 1.46 µs   | 1.59 µs   | 1.59 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 398.83 ns/iter | 391.38 ns | 396.69 ns | 429.74 ns | 430.19 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 619.37 ns/iter | 607.88 ns | 629.37 ns | 722.2 ns  | 722.2 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 987.29 ns/iter | 851.28 ns | 977.12 ns | 1.89 µs   | 1.89 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 397.96 ns/iter | 391.35 ns | 396.13 ns | 426.33 ns | 428.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 612.29 ns/iter | 599.85 ns | 621.82 ns | 768.29 ns | 768.29 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 946.2 ns/iter  | 830.12 ns | 866.28 ns | 1.67 µs   | 1.67 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 525.41 ns/iter | 516.69 ns | 524.36 ns | 550.63 ns | 553.93 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.08 µs/iter   | 966.46 ns | 986.61 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.49 µs/iter   | 1.46 µs   | 1.5 µs    | 1.58 µs   | 1.58 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 522.33 ns/iter | 509.64 ns | 524.17 ns | 552.39 ns | 563.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.04 µs/iter   | 934.41 ns | 957.68 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.74 µs/iter   | 1.72 µs   | 1.75 µs   | 1.87 µs   | 1.87 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 400.67 ns/iter | 393.18 ns | 399.52 ns | 431.6 ns  | 462.34 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 644.74 ns/iter | 634.93 ns | 653.86 ns | 685.73 ns | 685.73 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 956.45 ns/iter | 850.13 ns | 882.36 ns | 1.65 µs   | 1.65 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 400.63 ns/iter | 393.02 ns | 399.19 ns | 433.6 ns  | 433.67 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 644.21 ns/iter | 635.2 ns  | 653.3 ns  | 660.24 ns | 660.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 946.47 ns/iter | 844.65 ns | 858.39 ns | 1.62 µs   | 1.62 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 503.38 ns/iter | 492.06 ns | 502.79 ns | 540.8 ns | 545.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 902.66 ns/iter | 792.03 ns | 828.61 ns | 1.57 µs  | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.1 µs    | 1.12 µs   | 1.17 µs  | 1.17 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 12.84 µs/iter | 9.5 µs  | 12.5 µs | 25.4 µs | 255.4 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 18.84 µs/iter | 8.9 µs  | 16.9 µs | 36.1 µs | 2.61 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.52 ms/iter  | 1.35 ms | 1.38 ms | 4.54 ms | 4.59 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 12.88 µs/iter | 8.4 µs  | 12 µs   | 32.5 µs | 3.28 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 23.38 µs/iter | 19.8 µs | 23.1 µs | 35.9 µs | 268.8 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.34 ms/iter  | 1.18 ms | 1.21 ms | 4 ms    | 4.27 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.25 µs/iter  | 1.2 µs  | 1.29 µs | 1.37 µs  | 1.37 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 25.32 µs/iter | 10.9 µs | 22 µs   | 107.7 µs | 2.02 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 45 µs/iter    | 41.1 µs | 44.1 µs | 81.1 µs  | 341.2 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 142 ns/iter    | 137.41 ns | 140.62 ns | 154.92 ns | 159.06 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 382.64 ns/iter | 372.55 ns | 391.96 ns | 425.43 ns | 499.08 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 28.21 µs/iter  | 10.9 µs   | 28.2 µs   | 108.9 µs  | 5.34 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.57 µs/iter  | 3.55 µs | 3.57 µs | 3.63 µs | 3.63 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 18.62 µs/iter | 17 µs   | 18.4 µs | 32 µs   | 390 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 27.82 µs/iter | 22.6 µs | 26.3 µs | 48.2 µs | 1.53 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.85 ns/iter | 123.85 ns | 127.72 ns | 143.49 ns | 155.32 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.38 µs/iter   | 1.36 µs   | 1.39 µs   | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 132.63 µs/iter | 120.5 µs  | 140.1 µs  | 160.9 µs  | 1.99 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 13.17 µs/iter | 9.6 µs  | 12.7 µs | 27.3 µs | 1.4 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.4 µs/iter  | 10 µs   | 16.5 µs | 36.1 µs | 1.81 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.55 ms/iter  | 1.38 ms | 1.41 ms | 4.54 ms | 4.61 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 14.47 µs/iter | 9.6 µs  | 14 µs   | 32.1 µs | 915.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 17.88 µs/iter | 10.8 µs | 16.5 µs | 37.6 µs | 2.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.55 ms/iter  | 1.38 ms | 1.41 ms | 4.57 ms | 4.71 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 547.86 ns/iter | 533.2 ns | 546.96 ns | 615.49 ns | 738.28 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.21 µs/iter   | 2.82 µs  | 4.76 µs   | 5.61 µs   | 5.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 54.59 µs/iter  | 46.3 µs  | 49.7 µs   | 96.8 µs   | 2.06 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.85 ns/iter | 123.85 ns | 127.72 ns | 143.49 ns | 155.32 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 142 ns/iter    | 137.41 ns | 140.62 ns | 154.92 ns | 159.06 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 382.64 ns/iter | 372.55 ns | 391.96 ns | 425.43 ns | 499.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 397.96 ns/iter | 391.35 ns | 396.13 ns | 426.33 ns | 428.92 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 398.83 ns/iter | 391.38 ns | 396.69 ns | 429.74 ns | 430.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 400.63 ns/iter | 393.02 ns | 399.19 ns | 433.6 ns  | 433.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 400.67 ns/iter | 393.18 ns | 399.52 ns | 431.6 ns  | 462.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 403.63 ns/iter | 396.28 ns | 401.88 ns | 434.49 ns | 486.91 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 460.37 ns/iter | 449.5 ns  | 468.86 ns | 498.49 ns | 555.56 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 468.49 ns/iter | 463.42 ns | 467.47 ns | 499.13 ns | 535.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 468.63 ns/iter | 462.85 ns | 474.08 ns | 481.78 ns | 484.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 469.58 ns/iter | 462.65 ns | 473.88 ns | 498.61 ns | 515.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 471.4 ns/iter  | 456.74 ns | 469.91 ns | 525.14 ns | 534.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 478.34 ns/iter | 468.74 ns | 482.54 ns | 494.13 ns | 494.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 487.87 ns/iter | 481.51 ns | 486.06 ns | 518.85 ns | 519.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 491.24 ns/iter | 485.83 ns | 496.85 ns | 506.64 ns | 507.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 495.49 ns/iter | 476.68 ns | 490.42 ns | 936.55 ns | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 495.84 ns/iter | 489.05 ns | 501.22 ns | 519.32 ns | 525.53 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 503.38 ns/iter | 492.06 ns | 502.79 ns | 540.8 ns  | 545.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 522.33 ns/iter | 509.64 ns | 524.17 ns | 552.39 ns | 563.69 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 525.41 ns/iter | 516.69 ns | 524.36 ns | 550.63 ns | 553.93 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 547.86 ns/iter | 533.2 ns  | 546.96 ns | 615.49 ns | 738.28 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 612.29 ns/iter | 599.85 ns | 621.82 ns | 768.29 ns | 768.29 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 619.37 ns/iter | 607.88 ns | 629.37 ns | 722.2 ns  | 722.2 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 644.21 ns/iter | 635.2 ns  | 653.3 ns  | 660.24 ns | 660.24 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 644.74 ns/iter | 634.93 ns | 653.86 ns | 685.73 ns | 685.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 649.76 ns/iter | 621.15 ns | 641.64 ns | 2.07 µs   | 2.07 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 902.66 ns/iter | 792.03 ns | 828.61 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 909.88 ns/iter | 817.27 ns | 837.4 ns  | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 946.09 ns/iter | 844.16 ns | 857.41 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 946.2 ns/iter  | 830.12 ns | 866.28 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 946.47 ns/iter | 844.65 ns | 858.39 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 953.41 ns/iter | 840.91 ns | 875.79 ns | 1.82 µs   | 1.82 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 956.45 ns/iter | 850.13 ns | 882.36 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 961.03 ns/iter | 826.65 ns | 864.61 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 976.91 ns/iter | 871.66 ns | 891.58 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 981.41 ns/iter | 881.52 ns | 905.01 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 987.29 ns/iter | 851.28 ns | 977.12 ns | 1.89 µs   | 1.89 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 997.46 ns/iter | 875.05 ns | 911.48 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.01 µs/iter   | 887.48 ns | 915.14 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.02 µs/iter   | 895.44 ns | 964.68 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.03 µs/iter   | 921 ns    | 952.08 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.04 µs/iter   | 934.41 ns | 957.68 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.08 µs/iter   | 966.46 ns | 986.61 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.1 µs    | 1.12 µs   | 1.17 µs   | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.25 µs/iter   | 1.2 µs    | 1.29 µs   | 1.37 µs   | 1.37 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.29 µs/iter   | 1.13 µs   | 1.46 µs   | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.29 µs/iter   | 1.22 µs   | 1.31 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.3 µs/iter    | 1.25 µs   | 1.32 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.32 µs/iter   | 1.28 µs   | 1.35 µs   | 1.44 µs   | 1.44 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.33 µs/iter   | 1.21 µs   | 1.34 µs   | 2.13 µs   | 2.13 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.33 µs/iter   | 1.29 µs   | 1.35 µs   | 1.38 µs   | 1.38 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.33 µs/iter   | 1.26 µs   | 1.36 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.38 µs/iter   | 1.36 µs   | 1.39 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.38 µs/iter   | 1.29 µs   | 1.39 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.41 µs/iter   | 925.8 ns  | 1.81 µs   | 2.75 µs   | 2.75 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.42 µs/iter   | 1.31 µs   | 1.4 µs    | 2.78 µs   | 2.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.49 µs/iter   | 1.46 µs   | 1.5 µs    | 1.58 µs   | 1.58 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.63 µs/iter   | 1.56 µs   | 1.65 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.74 µs/iter   | 1.72 µs   | 1.75 µs   | 1.87 µs   | 1.87 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.57 µs/iter   | 3.55 µs   | 3.57 µs   | 3.63 µs   | 3.63 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.21 µs/iter   | 2.82 µs   | 4.76 µs   | 5.61 µs   | 5.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.91 µs/iter   | 6.9 µs    | 8.8 µs    | 15.4 µs   | 675.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 10.09 µs/iter  | 7 µs      | 9 µs      | 16 µs     | 966.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 10.89 µs/iter  | 7.1 µs    | 10.6 µs   | 20.1 µs   | 548.41 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.33 µs/iter  | 6.8 µs    | 11.1 µs   | 22.3 µs   | 910.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.37 µs/iter  | 7.3 µs    | 9.8 µs    | 21.2 µs   | 6.21 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 11.39 µs/iter  | 7.2 µs    | 11.1 µs   | 22.7 µs   | 557.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 12.84 µs/iter  | 9.5 µs    | 12.5 µs   | 25.4 µs   | 255.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 12.88 µs/iter  | 8.4 µs    | 12 µs     | 32.5 µs   | 3.28 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 13.13 µs/iter  | 8.1 µs    | 12.4 µs   | 31.6 µs   | 1.55 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 13.17 µs/iter  | 9.6 µs    | 12.7 µs   | 27.3 µs   | 1.4 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 14.47 µs/iter  | 9.6 µs    | 14 µs     | 32.1 µs   | 915.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.4 µs/iter   | 10 µs     | 16.5 µs   | 36.1 µs   | 1.81 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 17.88 µs/iter  | 10.8 µs   | 16.5 µs   | 37.6 µs   | 2.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 18.62 µs/iter  | 17 µs     | 18.4 µs   | 32 µs     | 390 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 18.84 µs/iter  | 8.9 µs    | 16.9 µs   | 36.1 µs   | 2.61 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.06 µs/iter  | 16.7 µs   | 17.8 µs   | 44.1 µs   | 275.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.22 µs/iter  | 15.6 µs   | 17.8 µs   | 56.6 µs   | 557.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.13 µs/iter  | 16.1 µs   | 19.5 µs   | 53.7 µs   | 1.9 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 20.52 µs/iter  | 17.3 µs   | 20.2 µs   | 33.1 µs   | 217.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.95 µs/iter  | 18.7 µs   | 19.9 µs   | 133.7 µs  | 714.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.21 µs/iter  | 18.3 µs   | 20.2 µs   | 119.2 µs  | 235.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.25 µs/iter  | 17.9 µs   | 20.2 µs   | 119.7 µs  | 605.81 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 23.38 µs/iter  | 19.8 µs   | 23.1 µs   | 35.9 µs   | 268.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 25.32 µs/iter  | 10.9 µs   | 22 µs     | 107.7 µs  | 2.02 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 27.82 µs/iter  | 22.6 µs   | 26.3 µs   | 48.2 µs   | 1.53 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 28.21 µs/iter  | 10.9 µs   | 28.2 µs   | 108.9 µs  | 5.34 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 45 µs/iter     | 41.1 µs   | 44.1 µs   | 81.1 µs   | 341.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 54.59 µs/iter  | 46.3 µs   | 49.7 µs   | 96.8 µs   | 2.06 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.97 µs/iter  | 51.2 µs   | 53.4 µs   | 170.2 µs  | 261.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 69.84 µs/iter  | 63.1 µs   | 69.2 µs   | 208.9 µs  | 296 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 74.09 µs/iter  | 40.8 µs   | 43 µs     | 561.91 µs | 16.12 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 132.63 µs/iter | 120.5 µs  | 140.1 µs  | 160.9 µs  | 1.99 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 271.93 µs/iter | 262.2 µs  | 266.1 µs  | 328.7 µs  | 900.41 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 749.54 µs/iter | 675.2 µs  | 704.9 µs  | 1.25 ms   | 1.34 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 770.02 µs/iter | 681 µs    | 709.1 µs  | 1.76 ms   | 1.89 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 786.28 µs/iter | 724.81 µs | 755.21 µs | 1.43 ms   | 1.76 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 806.32 µs/iter | 710.9 µs  | 905.9 µs  | 1.07 ms   | 1.21 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 813.99 µs/iter | 734.81 µs | 764.21 µs | 1.75 ms   | 1.83 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 822.83 µs/iter | 695.11 µs | 762.91 µs | 1.76 ms   | 5.82 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 936.6 µs/iter  | 852.2 µs  | 877 µs    | 1.81 ms   | 1.93 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.3 ms/iter    | 1.15 ms   | 1.2 ms    | 2.54 ms   | 2.87 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.34 ms/iter   | 1.18 ms   | 1.21 ms   | 4 ms      | 4.27 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.37 ms/iter   | 1.21 ms   | 1.24 ms   | 2.9 ms    | 2.92 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.52 ms/iter   | 1.35 ms   | 1.38 ms   | 4.54 ms   | 4.59 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.55 ms/iter   | 1.38 ms   | 1.41 ms   | 4.54 ms   | 4.61 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.55 ms/iter   | 1.38 ms   | 1.41 ms   | 4.57 ms   | 4.71 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max         |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ----------- |
| bun 0.1.5 (x64-linux)                  | http      | 87,195.914/rps | 11,811.165 | 90,487.425 | 96,032.919 | 108,245.858 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 47,582.729/rps | 4,727.119  | 50,080.784 | 51,021.226 | 51,409.38   |
| node v18.7.0 (x64-linux)               | http      | 41,412.796/rps | 5,069.491  | 42,834.83  | 43,459.4   | 44,782.794  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 157.97 ns/iter | 151.31 ns | 155.11 ns | 213.97 ns | 309.49 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.59 ns/iter | 301.6 ns  | 310.92 ns | 343.3 ns  | 345.09 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 327.91 ns/iter | 316.1 ns  | 325.2 ns  | 383.63 ns | 418.52 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.76 ns/iter | 233.49 ns | 241.59 ns | 257.68 ns | 266.8 ns  |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 247.67 ns/iter | 238.76 ns | 249.23 ns | 263.02 ns | 274.74 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.7 ns/iter  | 358.1 ns  | 385.32 ns | 461.16 ns | 473.52 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 157.97 ns/iter | 151.31 ns | 155.11 ns | 213.97 ns | 309.49 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.76 ns/iter | 233.49 ns | 241.59 ns | 257.68 ns | 266.8 ns  |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 247.67 ns/iter | 238.76 ns | 249.23 ns | 263.02 ns | 274.74 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.59 ns/iter | 301.6 ns  | 310.92 ns | 343.3 ns  | 345.09 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 327.91 ns/iter | 316.1 ns  | 325.2 ns  | 383.63 ns | 418.52 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.7 ns/iter  | 358.1 ns  | 385.32 ns | 461.16 ns | 473.52 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 643.61 ns/iter | 538.11 ns | 688.18 ns | 699.43 ns | 699.43 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.43 µs/iter   | 1.37 µs   | 1.45 µs   | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.79 µs/iter   | 1.75 µs   | 1.79 µs   | 2.02 µs   | 2.02 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.17 µs/iter  | 1.94 µs | 2.22 µs | 2.28 µs | 2.28 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.74 µs/iter  | 2.8 µs  | 6.8 µs  | 9.5 µs  | 6.74 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.52 µs/iter | 6.3 µs  | 12.2 µs | 14.3 µs | 366.8 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter  | 1.97 µs | 2.32 µs | 2.94 µs | 2.94 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.23 µs/iter  | 4.6 µs  | 8.8 µs  | 13.2 µs | 313.7 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.05 µs/iter | 11.6 µs | 18.1 µs | 22.1 µs | 350.2 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.17 µs/iter  | 1.94 µs | 2.22 µs | 2.28 µs | 2.28 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter  | 1.97 µs | 2.32 µs | 2.94 µs | 2.94 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.74 µs/iter  | 2.8 µs  | 6.8 µs  | 9.5 µs  | 6.74 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.23 µs/iter  | 4.6 µs  | 8.8 µs  | 13.2 µs | 313.7 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.52 µs/iter | 6.3 µs  | 12.2 µs | 14.3 µs | 366.8 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.05 µs/iter | 11.6 µs | 18.1 µs | 22.1 µs | 350.2 µs |

