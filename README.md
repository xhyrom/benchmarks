*Ran on Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz*

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
| Runtime                                | Benchmark                              | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 510.69 ns/iter | 529.6 ns | 620.46 ns | 459.48 ns | 629.76 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.08 µs/iter   | 1.05 µs  | 1.79 µs   | 916.32 ns | 1.79 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.41 µs/iter   | 1.43 µs  | 2.41 µs   | 1.24 µs   | 2.41 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 554.82 ns/iter | 557.85 ns | 1.17 µs | 478.86 ns | 1.26 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.02 µs/iter   | 989.22 ns | 1.97 µs | 835.21 ns | 1.97 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.46 µs/iter   | 1.5 µs    | 2.4 µs  | 1.32 µs   | 2.4 µs  |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 546.84 ns/iter | 545.83 ns | 813.24 ns | 478.92 ns | 1.16 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.16 µs/iter   | 1.1 µs    | 2.07 µs   | 975.62 ns | 2.07 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.29 µs/iter   | 1.32 µs   | 1.54 µs   | 1.17 µs   | 1.54 µs |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 548.84 ns/iter | 550.87 ns | 817.81 ns | 480.12 ns | 899.82 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.16 µs/iter   | 1.12 µs   | 1.9 µs    | 956.56 ns | 1.9 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.35 µs/iter   | 1.37 µs   | 1.71 µs   | 1.22 µs   | 1.71 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 578.05 ns/iter | 591.31 ns | 740.55 ns | 500.74 ns | 740.55 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.26 µs/iter   | 1.25 µs   | 2.15 µs   | 1.02 µs   | 2.15 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.44 µs/iter   | 1.47 µs   | 1.85 µs   | 1.27 µs   | 1.85 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 548.16 ns/iter | 563.16 ns | 771.04 ns | 491.82 ns | 786.37 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.24 µs/iter   | 1.24 µs   | 2.06 µs   | 972.18 ns | 2.06 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.85 µs/iter   | 1.86 µs   | 2.24 µs   | 1.66 µs   | 2.24 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 575.69 ns/iter | 576.88 ns | 1.12 µs | 471.99 ns | 1.12 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.04 µs/iter   | 1.01 µs   | 1.76 µs | 852.93 ns | 1.76 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.43 µs/iter   | 1.45 µs   | 2.09 µs | 1.3 µs    | 2.09 µs |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 518.16 ns/iter | 530.74 ns | 615.44 ns | 465.9 ns  | 946.26 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.04 µs/iter   | 1 µs      | 1.79 µs   | 887.41 ns | 1.79 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.45 µs/iter   | 1.49 µs   | 1.62 µs   | 1.34 µs   | 1.62 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 533.5 ns/iter | 549.45 ns | 640.06 ns | 482.45 ns | 703.51 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.07 µs/iter  | 1.04 µs   | 1.83 µs   | 897.53 ns | 1.83 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.58 µs/iter  | 1.59 µs   | 2.06 µs   | 1.39 µs   | 2.06 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 16.41 µs/iter  | 13.9 µs   | 41 µs    | 7.6 µs    | 3.42 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 24.03 µs/iter  | 21.1 µs   | 139.4 µs | 17.8 µs   | 4.36 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 930.79 µs/iter | 983.61 µs | 2.24 ms  | 687.71 µs | 10.27 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 17.33 µs/iter | 14.9 µs | 48.5 µs  | 9.8 µs  | 1.68 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 24.9 µs/iter  | 21.1 µs | 141.6 µs | 17.8 µs | 2.91 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.3 ms/iter   | 1.27 ms | 3.11 ms  | 1.01 ms | 3.93 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.75 µs/iter  | 11.2 µs   | 33.7 µs  | 8.3 µs    | 1.75 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 20.76 µs/iter  | 18.9 µs   | 139.3 µs | 16.3 µs   | 527.11 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 788.89 µs/iter | 756.61 µs | 1.95 ms  | 614.51 µs | 2.3 ms    |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 13.58 µs/iter  | 11.1 µs   | 29.4 µs  | 8.3 µs    | 1.66 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 20.94 µs/iter  | 19.1 µs   | 113.8 µs | 16.3 µs   | 743.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 771.69 µs/iter | 723.91 µs | 2.05 ms  | 625.91 µs | 3.63 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 16.17 µs/iter  | 12.8 µs   | 42.5 µs  | 8.9 µs    | 9.77 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 25.83 µs/iter  | 23.4 µs   | 155.1 µs | 20.7 µs   | 2.12 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 937.48 µs/iter | 896.31 µs | 2 ms     | 762.11 µs | 4.69 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99       | Min     | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | --------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 64.23 µs/iter | 47.8 µs | 545.21 µs | 40.8 µs | 2.26 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 64.29 µs/iter | 60.8 µs | 207.3 µs  | 51.4 µs | 2.86 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.41 ms/iter  | 1.29 ms | 3.45 ms   | 1.12 ms | 10.76 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 22.17 µs/iter  | 20.1 µs   | 113.2 µs | 17.5 µs   | 2.03 ms  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 24.96 µs/iter  | 22.6 µs   | 94.5 µs  | 9.4 µs    | 2.19 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 875.82 µs/iter | 808.11 µs | 2.34 ms  | 715.21 µs | 17.01 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 22.97 µs/iter  | 21.7 µs   | 66.3 µs | 17.3 µs   | 994.11 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 24.72 µs/iter  | 22.9 µs   | 88.6 µs | 9.4 µs    | 1.16 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 850.54 µs/iter | 814.91 µs | 1.71 ms | 719.61 µs | 4.22 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 81.46 µs/iter  | 79.6 µs   | 251.3 µs  | 70.2 µs   | 894.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 309.34 µs/iter | 322.9 µs  | 440.21 µs | 261.8 µs  | 1.34 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 856.92 µs/iter | 819.21 µs | 1.82 ms   | 722.71 µs | 3.55 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 470.76 ns/iter | 485.55 ns | 546.89 ns | 425.3 ns  | 586.38 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 801.78 ns/iter | 764.55 ns | 1.67 µs   | 687.05 ns | 1.67 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.07 µs/iter   | 1.18 µs   | 1.71 µs   | 874.98 ns | 1.71 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average       | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 557.5 ns/iter | 563.7 ns  | 637.07 ns | 489.54 ns | 1.39 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.01 µs/iter  | 977.77 ns | 1.7 µs    | 845.73 ns | 1.7 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.51 µs/iter  | 1.62 µs   | 3.32 µs   | 1.17 µs   | 3.32 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 449.13 ns/iter | 463.92 ns | 506.95 ns | 397.22 ns | 516 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 720.72 ns/iter | 738.01 ns | 1.05 µs   | 634.37 ns | 1.05 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.14 µs/iter   | 1.1 µs    | 1.8 µs    | 953.4 ns  | 1.8 µs  |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 457.74 ns/iter | 471.19 ns | 595.23 ns | 398.83 ns | 772.84 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 709.36 ns/iter | 718.95 ns | 1.17 µs   | 632.57 ns | 1.17 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.09 µs/iter   | 1.03 µs   | 1.74 µs   | 929.83 ns | 1.74 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 719.98 ns/iter | 733.12 ns | 986.54 ns | 653.53 ns | 986.54 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.11 µs/iter   | 1.05 µs   | 1.8 µs    | 929.2 ns  | 1.8 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.63 µs/iter   | 1.67 µs   | 1.85 µs   | 1.52 µs   | 1.85 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 670.61 ns/iter | 676.91 ns | 1.21 µs | 609.07 ns | 1.21 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.13 µs/iter   | 1.08 µs   | 1.86 µs | 949.91 ns | 1.86 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.97 µs/iter   | 2.02 µs   | 2.36 µs | 1.77 µs   | 2.36 µs |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 491.52 ns/iter | 506.3 ns  | 554.3 ns  | 442.65 ns | 558.77 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 754.89 ns/iter | 782.58 ns | 951.87 ns | 677.17 ns | 951.87 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.23 µs/iter   | 1.24 µs   | 3.61 µs   | 950.27 ns | 3.61 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 503.59 ns/iter | 525.46 ns | 565.32 ns | 453.42 ns | 572.47 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 776.91 ns/iter | 792.92 ns | 1.04 µs   | 668.71 ns | 1.04 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.16 µs/iter   | 1.23 µs   | 2.58 µs   | 895.13 ns | 2.58 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 561.85 ns/iter | 576.58 ns | 730.93 ns | 517.99 ns | 730.93 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1 µs/iter      | 957.92 ns | 1.64 µs   | 838.04 ns | 1.64 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.29 µs/iter   | 1.33 µs   | 1.43 µs   | 1.21 µs   | 1.43 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min    | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------ | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.02 µs/iter | 12.2 µs | 36.6 µs | 8.4 µs | 750.31 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 17.46 µs/iter | 15.6 µs | 49.9 µs | 8.5 µs | 2.21 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.62 ms/iter  | 1.46 ms | 5.36 ms | 1.2 ms | 9.04 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 17.08 µs/iter | 14.9 µs | 51.2 µs | 9.7 µs  | 1.15 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 24.6 µs/iter  | 23.3 µs | 62.1 µs | 19 µs   | 5.02 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.32 ms/iter  | 1.24 ms | 4.01 ms | 1.02 ms | 4.58 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.5 µs/iter   | 1.53 µs | 2.06 µs  | 1.33 µs | 2.06 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 35.63 µs/iter | 38.8 µs | 109.8 µs | 14.3 µs | 1.63 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 43.54 µs/iter | 41.8 µs | 109.8 µs | 35.1 µs | 1.33 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 157.21 ns/iter | 165.47 ns | 196.76 ns | 138.96 ns | 228.04 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 439.76 ns/iter | 452.08 ns | 609.12 ns | 383.55 ns | 871.67 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 36.99 µs/iter  | 39.3 µs   | 113 µs    | 13.8 µs   | 3.05 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min    | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------ | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.09 µs/iter  | 4.18 µs | 4.43 µs | 3.9 µs | 4.43 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 20.33 µs/iter | 20 µs   | 36.2 µs | 17 µs  | 2.29 ms |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 35.05 µs/iter | 30.4 µs | 86.2 µs | 24 µs  | 3.29 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 141.05 ns/iter | 148.32 ns | 181.49 ns | 124.83 ns | 186.19 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter   | 1.45 µs   | 1.79 µs   | 1.33 µs   | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 145.78 µs/iter | 148.7 µs  | 285.6 µs  | 119.6 µs  | 1.97 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 14.12 µs/iter | 13.2 µs | 42.2 µs | 8.6 µs  | 1.43 ms |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.48 µs/iter | 15.2 µs | 54.2 µs | 8.9 µs  | 3.57 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.51 ms/iter  | 1.4 ms  | 4.58 ms | 1.21 ms | 6.11 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 13.64 µs/iter | 12.8 µs | 38.4 µs | 8.5 µs  | 420.81 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 17.08 µs/iter | 15.1 µs | 52.2 µs | 9.1 µs  | 1.27 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.49 ms/iter  | 1.4 ms  | 4.58 ms | 1.21 ms | 4.75 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 642.33 ns/iter | 657.13 ns | 833.52 ns | 576.76 ns | 833.52 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.67 µs/iter   | 5.23 µs   | 6.16 µs   | 2.93 µs   | 6.16 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 68.65 µs/iter  | 66.2 µs   | 182.9 µs  | 48.1 µs   | 2.87 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 141.05 ns/iter | 148.32 ns | 181.49 ns | 124.83 ns | 186.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 157.21 ns/iter | 165.47 ns | 196.76 ns | 138.96 ns | 228.04 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 439.76 ns/iter | 452.08 ns | 609.12 ns | 383.55 ns | 871.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 449.13 ns/iter | 463.92 ns | 506.95 ns | 397.22 ns | 516 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 457.74 ns/iter | 471.19 ns | 595.23 ns | 398.83 ns | 772.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 470.76 ns/iter | 485.55 ns | 546.89 ns | 425.3 ns  | 586.38 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 491.52 ns/iter | 506.3 ns  | 554.3 ns  | 442.65 ns | 558.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 503.59 ns/iter | 525.46 ns | 565.32 ns | 453.42 ns | 572.47 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 510.69 ns/iter | 529.6 ns  | 620.46 ns | 459.48 ns | 629.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 518.16 ns/iter | 530.74 ns | 615.44 ns | 465.9 ns  | 946.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 533.5 ns/iter  | 549.45 ns | 640.06 ns | 482.45 ns | 703.51 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 546.84 ns/iter | 545.83 ns | 813.24 ns | 478.92 ns | 1.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 548.16 ns/iter | 563.16 ns | 771.04 ns | 491.82 ns | 786.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 548.84 ns/iter | 550.87 ns | 817.81 ns | 480.12 ns | 899.82 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 554.82 ns/iter | 557.85 ns | 1.17 µs   | 478.86 ns | 1.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 557.5 ns/iter  | 563.7 ns  | 637.07 ns | 489.54 ns | 1.39 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 561.85 ns/iter | 576.58 ns | 730.93 ns | 517.99 ns | 730.93 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 575.69 ns/iter | 576.88 ns | 1.12 µs   | 471.99 ns | 1.12 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 578.05 ns/iter | 591.31 ns | 740.55 ns | 500.74 ns | 740.55 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 642.33 ns/iter | 657.13 ns | 833.52 ns | 576.76 ns | 833.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 670.61 ns/iter | 676.91 ns | 1.21 µs   | 609.07 ns | 1.21 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 709.36 ns/iter | 718.95 ns | 1.17 µs   | 632.57 ns | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 719.98 ns/iter | 733.12 ns | 986.54 ns | 653.53 ns | 986.54 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 720.72 ns/iter | 738.01 ns | 1.05 µs   | 634.37 ns | 1.05 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 754.89 ns/iter | 782.58 ns | 951.87 ns | 677.17 ns | 951.87 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 776.91 ns/iter | 792.92 ns | 1.04 µs   | 668.71 ns | 1.04 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 801.78 ns/iter | 764.55 ns | 1.67 µs   | 687.05 ns | 1.67 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1 µs/iter      | 957.92 ns | 1.64 µs   | 838.04 ns | 1.64 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.01 µs/iter   | 977.77 ns | 1.7 µs    | 845.73 ns | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.02 µs/iter   | 989.22 ns | 1.97 µs   | 835.21 ns | 1.97 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.04 µs/iter   | 1 µs      | 1.79 µs   | 887.41 ns | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.04 µs/iter   | 1.01 µs   | 1.76 µs   | 852.93 ns | 1.76 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.07 µs/iter   | 1.18 µs   | 1.71 µs   | 874.98 ns | 1.71 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.07 µs/iter   | 1.04 µs   | 1.83 µs   | 897.53 ns | 1.83 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.08 µs/iter   | 1.05 µs   | 1.79 µs   | 916.32 ns | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.09 µs/iter   | 1.03 µs   | 1.74 µs   | 929.83 ns | 1.74 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.11 µs/iter   | 1.05 µs   | 1.8 µs    | 929.2 ns  | 1.8 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.13 µs/iter   | 1.08 µs   | 1.86 µs   | 949.91 ns | 1.86 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.14 µs/iter   | 1.1 µs    | 1.8 µs    | 953.4 ns  | 1.8 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.16 µs/iter   | 1.1 µs    | 2.07 µs   | 975.62 ns | 2.07 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.16 µs/iter   | 1.23 µs   | 2.58 µs   | 895.13 ns | 2.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.16 µs/iter   | 1.12 µs   | 1.9 µs    | 956.56 ns | 1.9 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.23 µs/iter   | 1.24 µs   | 3.61 µs   | 950.27 ns | 3.61 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.24 µs/iter   | 1.24 µs   | 2.06 µs   | 972.18 ns | 2.06 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.26 µs/iter   | 1.25 µs   | 2.15 µs   | 1.02 µs   | 2.15 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.29 µs/iter   | 1.33 µs   | 1.43 µs   | 1.21 µs   | 1.43 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.29 µs/iter   | 1.32 µs   | 1.54 µs   | 1.17 µs   | 1.54 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.35 µs/iter   | 1.37 µs   | 1.71 µs   | 1.22 µs   | 1.71 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.41 µs/iter   | 1.45 µs   | 1.79 µs   | 1.33 µs   | 1.79 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.41 µs/iter   | 1.43 µs   | 2.41 µs   | 1.24 µs   | 2.41 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.43 µs/iter   | 1.45 µs   | 2.09 µs   | 1.3 µs    | 2.09 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.44 µs/iter   | 1.47 µs   | 1.85 µs   | 1.27 µs   | 1.85 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.45 µs/iter   | 1.49 µs   | 1.62 µs   | 1.34 µs   | 1.62 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.46 µs/iter   | 1.5 µs    | 2.4 µs    | 1.32 µs   | 2.4 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.5 µs/iter    | 1.53 µs   | 2.06 µs   | 1.33 µs   | 2.06 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.51 µs/iter   | 1.62 µs   | 3.32 µs   | 1.17 µs   | 3.32 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.58 µs/iter   | 1.59 µs   | 2.06 µs   | 1.39 µs   | 2.06 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.63 µs/iter   | 1.67 µs   | 1.85 µs   | 1.52 µs   | 1.85 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.85 µs/iter   | 1.86 µs   | 2.24 µs   | 1.66 µs   | 2.24 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.97 µs/iter   | 2.02 µs   | 2.36 µs   | 1.77 µs   | 2.36 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.09 µs/iter   | 4.18 µs   | 4.43 µs   | 3.9 µs    | 4.43 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.67 µs/iter   | 5.23 µs   | 6.16 µs   | 2.93 µs   | 6.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.02 µs/iter  | 12.2 µs   | 36.6 µs   | 8.4 µs    | 750.31 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 13.58 µs/iter  | 11.1 µs   | 29.4 µs   | 8.3 µs    | 1.66 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 13.64 µs/iter  | 12.8 µs   | 38.4 µs   | 8.5 µs    | 420.81 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.75 µs/iter  | 11.2 µs   | 33.7 µs   | 8.3 µs    | 1.75 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 14.12 µs/iter  | 13.2 µs   | 42.2 µs   | 8.6 µs    | 1.43 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 16.17 µs/iter  | 12.8 µs   | 42.5 µs   | 8.9 µs    | 9.77 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 16.41 µs/iter  | 13.9 µs   | 41 µs     | 7.6 µs    | 3.42 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 17.08 µs/iter  | 15.1 µs   | 52.2 µs   | 9.1 µs    | 1.27 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 17.08 µs/iter  | 14.9 µs   | 51.2 µs   | 9.7 µs    | 1.15 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 17.33 µs/iter  | 14.9 µs   | 48.5 µs   | 9.8 µs    | 1.68 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 17.46 µs/iter  | 15.6 µs   | 49.9 µs   | 8.5 µs    | 2.21 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.48 µs/iter  | 15.2 µs   | 54.2 µs   | 8.9 µs    | 3.57 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 20.33 µs/iter  | 20 µs     | 36.2 µs   | 17 µs     | 2.29 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 20.76 µs/iter  | 18.9 µs   | 139.3 µs  | 16.3 µs   | 527.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 20.94 µs/iter  | 19.1 µs   | 113.8 µs  | 16.3 µs   | 743.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 22.17 µs/iter  | 20.1 µs   | 113.2 µs  | 17.5 µs   | 2.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 22.97 µs/iter  | 21.7 µs   | 66.3 µs   | 17.3 µs   | 994.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 24.03 µs/iter  | 21.1 µs   | 139.4 µs  | 17.8 µs   | 4.36 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 24.6 µs/iter   | 23.3 µs   | 62.1 µs   | 19 µs     | 5.02 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 24.72 µs/iter  | 22.9 µs   | 88.6 µs   | 9.4 µs    | 1.16 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 24.9 µs/iter   | 21.1 µs   | 141.6 µs  | 17.8 µs   | 2.91 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 24.96 µs/iter  | 22.6 µs   | 94.5 µs   | 9.4 µs    | 2.19 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 25.83 µs/iter  | 23.4 µs   | 155.1 µs  | 20.7 µs   | 2.12 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 35.05 µs/iter  | 30.4 µs   | 86.2 µs   | 24 µs     | 3.29 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 35.63 µs/iter  | 38.8 µs   | 109.8 µs  | 14.3 µs   | 1.63 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 36.99 µs/iter  | 39.3 µs   | 113 µs    | 13.8 µs   | 3.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 43.54 µs/iter  | 41.8 µs   | 109.8 µs  | 35.1 µs   | 1.33 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 64.23 µs/iter  | 47.8 µs   | 545.21 µs | 40.8 µs   | 2.26 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 64.29 µs/iter  | 60.8 µs   | 207.3 µs  | 51.4 µs   | 2.86 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 68.65 µs/iter  | 66.2 µs   | 182.9 µs  | 48.1 µs   | 2.87 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 81.46 µs/iter  | 79.6 µs   | 251.3 µs  | 70.2 µs   | 894.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 145.78 µs/iter | 148.7 µs  | 285.6 µs  | 119.6 µs  | 1.97 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 309.34 µs/iter | 322.9 µs  | 440.21 µs | 261.8 µs  | 1.34 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 771.69 µs/iter | 723.91 µs | 2.05 ms   | 625.91 µs | 3.63 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 788.89 µs/iter | 756.61 µs | 1.95 ms   | 614.51 µs | 2.3 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 850.54 µs/iter | 814.91 µs | 1.71 ms   | 719.61 µs | 4.22 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 856.92 µs/iter | 819.21 µs | 1.82 ms   | 722.71 µs | 3.55 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 875.82 µs/iter | 808.11 µs | 2.34 ms   | 715.21 µs | 17.01 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 930.79 µs/iter | 983.61 µs | 2.24 ms   | 687.71 µs | 10.27 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 937.48 µs/iter | 896.31 µs | 2 ms      | 762.11 µs | 4.69 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.3 ms/iter    | 1.27 ms   | 3.11 ms   | 1.01 ms   | 3.93 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.32 ms/iter   | 1.24 ms   | 4.01 ms   | 1.02 ms   | 4.58 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.41 ms/iter   | 1.29 ms   | 3.45 ms   | 1.12 ms   | 10.76 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.49 ms/iter   | 1.4 ms    | 4.58 ms   | 1.21 ms   | 4.75 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.51 ms/iter   | 1.4 ms    | 4.58 ms   | 1.21 ms   | 6.11 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.62 ms/iter   | 1.46 ms   | 5.36 ms   | 1.2 ms    | 9.04 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min       | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | --------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 63,242.39/rps  | 67,405.405 | 72,475.601 | 10,011.2  | 77,075.774 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 34,935.844/rps | 37,401.602 | 40,275.116 | 4,225.291 | 40,966.823 |
| node v18.7.0 (x64-linux)               | http      | 19,502.876/rps | 20,598.419 | 21,591.218 | 2,599.09  | 22,934.123 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 183.37 ns/iter | 186 ns    | 320.79 ns | 153.34 ns | 588.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 371.14 ns/iter | 383.53 ns | 440.19 ns | 336.63 ns | 443.06 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 378.11 ns/iter | 389.87 ns | 484.64 ns | 327.02 ns | 1.09 µs   |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 97.77 ns/iter  | 101.79 ns | 138.12 ns | 74.68 ns  | 318.38 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 281.46 ns/iter | 291.59 ns | 342.29 ns | 251.43 ns | 809.79 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 293.73 ns/iter | 301.03 ns | 380.14 ns | 258.35 ns | 561.31 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 97.77 ns/iter  | 101.79 ns | 138.12 ns | 74.68 ns  | 318.38 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 183.37 ns/iter | 186 ns    | 320.79 ns | 153.34 ns | 588.83 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 281.46 ns/iter | 291.59 ns | 342.29 ns | 251.43 ns | 809.79 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 293.73 ns/iter | 301.03 ns | 380.14 ns | 258.35 ns | 561.31 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 371.14 ns/iter | 383.53 ns | 440.19 ns | 336.63 ns | 443.06 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 378.11 ns/iter | 389.87 ns | 484.64 ns | 327.02 ns | 1.09 µs   |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 695.83 ns/iter | 699.86 ns | 2.12 µs | 613.69 ns | 2.12 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.52 µs/iter   | 1.56 µs   | 1.82 µs | 1.4 µs    | 1.82 µs |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.97 µs/iter   | 2.02 µs   | 2.21 µs | 1.85 µs   | 2.21 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min    | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------ | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.46 µs/iter  | 2.5 µs  | 2.61 µs | 2.3 µs | 2.61 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 5.96 µs/iter  | 7.3 µs  | 14.3 µs | 2.8 µs | 5.55 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 16.85 µs/iter | 17.4 µs | 30.6 µs | 8.3 µs | 690.81 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.72 µs/iter  | 2.79 µs | 3.21 µs | 2.31 µs | 3.21 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 11.12 µs/iter | 11.8 µs | 24.1 µs | 5.4 µs  | 873.11 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.25 µs/iter | 32 µs   | 63.7 µs | 18.1 µs | 1.63 ms   |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.46 µs/iter  | 2.5 µs  | 2.61 µs | 2.3 µs  | 2.61 µs   |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.72 µs/iter  | 2.79 µs | 3.21 µs | 2.31 µs | 3.21 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 5.96 µs/iter  | 7.3 µs  | 14.3 µs | 2.8 µs  | 5.55 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 11.12 µs/iter | 11.8 µs | 24.1 µs | 5.4 µs  | 873.11 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 16.85 µs/iter | 17.4 µs | 30.6 µs | 8.3 µs  | 690.81 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.25 µs/iter | 32 µs   | 63.7 µs | 18.1 µs | 1.63 ms   |

