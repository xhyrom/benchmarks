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
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 468.88 ns/iter | 453.84 ns | 471.02 ns | 531.89 ns | 1.04 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 945.67 ns/iter | 810.04 ns | 881.34 ns | 1.63 µs   | 1.63 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.4 µs/iter    | 1.23 µs   | 1.41 µs   | 2.19 µs   | 2.19 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 485.23 ns/iter | 474.43 ns | 487.91 ns | 576.25 ns | 614.21 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 858.26 ns/iter | 766.73 ns | 790.83 ns | 1.54 µs   | 1.54 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.48 µs/iter   | 1.36 µs   | 1.49 µs   | 1.87 µs   | 1.87 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 487.31 ns/iter | 464.7 ns  | 491.63 ns | 508.8 ns | 701.62 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 982.72 ns/iter | 862.85 ns | 921.12 ns | 1.62 µs  | 1.62 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.4 µs/iter    | 1.31 µs   | 1.42 µs   | 1.7 µs   | 1.7 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 472.99 ns/iter | 463.5 ns  | 476.96 ns | 491.86 ns | 501.54 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 935.46 ns/iter | 834.63 ns | 854.62 ns | 1.59 µs   | 1.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.3 µs/iter    | 1.23 µs   | 1.3 µs    | 2.26 µs   | 2.26 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 496.92 ns/iter | 488.24 ns | 499.51 ns | 513.9 ns | 516.82 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 971.05 ns/iter | 860.72 ns | 906.2 ns  | 1.67 µs  | 1.67 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.39 µs/iter   | 1.32 µs   | 1.38 µs   | 2.32 µs  | 2.32 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 485.47 ns/iter | 478.51 ns | 485.13 ns | 512.24 ns | 513.78 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.02 µs/iter   | 875.98 ns | 967.3 ns  | 1.66 µs   | 1.66 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.72 µs/iter   | 1.63 µs   | 1.7 µs    | 2.87 µs   | 2.87 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 470.03 ns/iter | 464.12 ns | 474.75 ns | 481.96 ns | 482.98 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 911.69 ns/iter | 808.2 ns  | 838.17 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.38 µs/iter   | 1.29 µs   | 1.41 µs   | 2.07 µs   | 2.07 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 470.68 ns/iter | 455.92 ns | 474.86 ns | 505.97 ns | 521.4 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 927.88 ns/iter | 809.91 ns | 853.62 ns | 1.57 µs   | 1.57 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.41 µs/iter   | 1.34 µs   | 1.43 µs   | 1.46 µs   | 1.46 µs  |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 487.39 ns/iter | 471.59 ns | 495.07 ns | 540.22 ns | 557.16 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 936.13 ns/iter | 841.73 ns | 858.99 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.51 µs   | 1.51 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 15.18 µs/iter  | 7.4 µs    | 14.2 µs   | 31.8 µs  | 1.08 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.26 µs/iter  | 18.2 µs   | 20.3 µs   | 117.9 µs | 256.61 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 846.16 µs/iter | 730.41 µs | 854.62 µs | 1.27 ms  | 1.57 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15.46 µs/iter | 8.7 µs  | 14.7 µs | 27.4 µs  | 983.32 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.31 µs/iter | 18.7 µs | 20.2 µs | 118.5 µs | 853.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.37 ms/iter  | 1.18 ms | 1.24 ms | 4 ms     | 4.29 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 12.66 µs/iter  | 7.9 µs    | 12.1 µs   | 23.2 µs | 1.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 20.03 µs/iter  | 15.9 µs   | 19.1 µs   | 56.8 µs | 375.91 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 804.73 µs/iter | 707.71 µs | 741.81 µs | 1.99 ms | 2.07 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 12.6 µs/iter   | 7.9 µs    | 12.1 µs   | 23.1 µs | 1.68 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.88 µs/iter  | 16.7 µs   | 18.7 µs   | 47.8 µs | 1.16 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 799.92 µs/iter | 703.61 µs | 736.61 µs | 1.98 ms | 2.09 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 12.84 µs/iter  | 7.8 µs    | 12 µs     | 22.8 µs  | 1.06 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 24.47 µs/iter  | 19 µs     | 23.7 µs   | 137.6 µs | 466.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 983.47 µs/iter | 883.42 µs | 918.32 µs | 1.98 ms  | 2.01 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 54.8 µs/iter  | 37.9 µs | 41.7 µs | 556.81 µs | 1.17 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 59.11 µs/iter | 53.7 µs | 57.3 µs | 187.7 µs  | 291.11 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.42 ms/iter  | 1.24 ms | 1.29 ms | 2.99 ms   | 3.04 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.8 µs/iter   | 16.4 µs   | 19.9 µs   | 44.4 µs | 728.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 20.84 µs/iter  | 9 µs      | 19.8 µs   | 38.1 µs | 3.64 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 856.07 µs/iter | 761.81 µs | 793.51 µs | 2.04 ms | 2.08 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 22.04 µs/iter  | 17.8 µs   | 21.1 µs   | 41.6 µs | 563.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 22.11 µs/iter  | 9.2 µs    | 19.8 µs   | 55.6 µs | 1.51 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 860.63 µs/iter | 764.21 µs | 795.01 µs | 2.06 ms | 2.13 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 73.6 µs/iter   | 67.3 µs   | 71.6 µs   | 226.5 µs  | 350.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 274.22 µs/iter | 263.2 µs  | 271.9 µs  | 316.01 µs | 1.85 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 891.09 µs/iter | 795.41 µs | 826.62 µs | 2.07 ms   | 2.17 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 405.22 ns/iter | 394.62 ns | 403.36 ns | 443.64 ns | 446.75 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 636.15 ns/iter | 619.65 ns | 648.06 ns | 862.57 ns | 862.57 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 933.03 ns/iter | 800.76 ns | 866.08 ns | 1.59 µs   | 1.59 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 524.4 ns/iter  | 514.14 ns | 521.75 ns | 562.39 ns | 562.51 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 885.96 ns/iter | 785.26 ns | 817.79 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.53 µs/iter   | 1.2 µs    | 1.75 µs   | 1.8 µs    | 1.8 µs    |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 407.27 ns/iter | 398.21 ns | 404.76 ns | 440.62 ns | 442.38 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 641.5 ns/iter  | 620.17 ns | 652.15 ns | 1.14 µs   | 1.14 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 897.77 ns/iter | 799.96 ns | 824.02 ns | 1.58 µs   | 1.58 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 408.42 ns/iter | 398.64 ns | 405.07 ns | 463.61 ns | 468.79 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 616.11 ns/iter | 602.24 ns | 633.35 ns | 653.39 ns | 653.39 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 854.29 ns/iter | 756.42 ns | 776.65 ns | 1.49 µs   | 1.49 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 521.54 ns/iter | 491.43 ns | 530.24 ns | 558.69 ns | 568.3 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 912.78 ns/iter | 812.12 ns | 837.07 ns | 1.55 µs   | 1.55 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.49 µs/iter   | 1.47 µs   | 1.5 µs    | 1.65 µs   | 1.65 µs  |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 517.82 ns/iter | 488.6 ns  | 519.95 ns | 667.52 ns | 687.02 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.01 µs/iter   | 889.98 ns | 912.76 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.73 µs/iter   | 1.71 µs   | 1.74 µs   | 1.89 µs   | 1.89 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 404.98 ns/iter | 395.46 ns | 403.08 ns | 445.54 ns | 453.3 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 651.22 ns/iter | 635.95 ns | 667.56 ns | 714.83 ns | 714.83 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 908.73 ns/iter | 806.42 ns | 824 ns    | 1.55 µs   | 1.55 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 403.27 ns/iter | 394.21 ns | 402.1 ns  | 433.58 ns | 442.11 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 650.03 ns/iter | 638.11 ns | 662.82 ns | 673.07 ns | 673.07 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 894.39 ns/iter | 802.57 ns | 820.8 ns  | 1.5 µs    | 1.5 µs    |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 499.84 ns/iter | 473.26 ns | 503.05 ns | 540.76 ns | 542.24 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 856.48 ns/iter | 762.22 ns | 778.04 ns | 1.53 µs   | 1.53 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.09 µs   | 1.13 µs   | 1.2 µs    | 1.2 µs    |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.61 µs/iter | 9.9 µs  | 13.2 µs | 27.3 µs | 553.51 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 14.82 µs/iter | 8.4 µs  | 13.6 µs | 34.4 µs | 1.15 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.56 ms/iter  | 1.36 ms | 1.41 ms | 4.79 ms | 4.89 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 15.95 µs/iter | 9.1 µs  | 14.8 µs | 34.1 µs | 3.17 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 24.83 µs/iter | 20.7 µs | 24.2 µs | 39.4 µs | 373.71 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.37 ms/iter  | 1.2 ms  | 1.24 ms | 4.22 ms | 4.28 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.33 µs/iter  | 1.26 µs | 1.35 µs | 1.42 µs | 1.42 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 31.68 µs/iter | 11.9 µs | 31.7 µs | 95.2 µs | 1.11 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 46.66 µs/iter | 41.9 µs | 45.7 µs | 81 µs   | 417.31 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 141.4 ns/iter  | 135.82 ns | 140.08 ns | 159.32 ns | 161.76 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 379.33 ns/iter | 369.43 ns | 374.63 ns | 411.02 ns | 501.05 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 30.38 µs/iter  | 11.8 µs   | 30.1 µs   | 88.4 µs   | 1.35 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.52 µs/iter  | 3.5 µs  | 3.52 µs | 3.59 µs | 3.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 18.53 µs/iter | 16.9 µs | 18.5 µs | 25.2 µs | 586.71 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 29.11 µs/iter | 23.5 µs | 27.4 µs | 47.1 µs | 1.13 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.26 ns/iter | 125.03 ns | 129.37 ns | 145.95 ns | 162.63 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.31 µs/iter   | 1.3 µs    | 1.33 µs   | 1.37 µs   | 1.37 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.69 µs/iter | 122.7 µs  | 124.5 µs  | 156.4 µs  | 1.3 ms    |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75    | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------ | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 14.7 µs/iter  | 9.8 µs | 14 µs   | 30.6 µs | 266.8 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 15.87 µs/iter | 9.3 µs | 14.3 µs | 35.9 µs | 1.33 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.6 ms/iter   | 1.4 ms | 1.44 ms | 4.83 ms | 6.08 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 13.7 µs/iter  | 7.4 µs  | 12.3 µs | 33.8 µs | 2.68 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 14.87 µs/iter | 10.7 µs | 14.1 µs | 29.1 µs | 492.9 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.58 ms/iter  | 1.4 ms  | 1.44 ms | 4.66 ms | 4.8 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 541.96 ns/iter | 532.62 ns | 545.56 ns | 596.2 ns | 620.75 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.55 µs/iter   | 2.97 µs   | 5.01 µs   | 5.59 µs  | 5.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 55.18 µs/iter  | 48.1 µs   | 50 µs     | 100.9 µs | 1.22 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.26 ns/iter | 125.03 ns | 129.37 ns | 145.95 ns | 162.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 141.4 ns/iter  | 135.82 ns | 140.08 ns | 159.32 ns | 161.76 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 379.33 ns/iter | 369.43 ns | 374.63 ns | 411.02 ns | 501.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 403.27 ns/iter | 394.21 ns | 402.1 ns  | 433.58 ns | 442.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 404.98 ns/iter | 395.46 ns | 403.08 ns | 445.54 ns | 453.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 405.22 ns/iter | 394.62 ns | 403.36 ns | 443.64 ns | 446.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 407.27 ns/iter | 398.21 ns | 404.76 ns | 440.62 ns | 442.38 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 408.42 ns/iter | 398.64 ns | 405.07 ns | 463.61 ns | 468.79 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 468.88 ns/iter | 453.84 ns | 471.02 ns | 531.89 ns | 1.04 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 470.03 ns/iter | 464.12 ns | 474.75 ns | 481.96 ns | 482.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 470.68 ns/iter | 455.92 ns | 474.86 ns | 505.97 ns | 521.4 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 472.99 ns/iter | 463.5 ns  | 476.96 ns | 491.86 ns | 501.54 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 485.23 ns/iter | 474.43 ns | 487.91 ns | 576.25 ns | 614.21 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 485.47 ns/iter | 478.51 ns | 485.13 ns | 512.24 ns | 513.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 487.31 ns/iter | 464.7 ns  | 491.63 ns | 508.8 ns  | 701.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 487.39 ns/iter | 471.59 ns | 495.07 ns | 540.22 ns | 557.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 496.92 ns/iter | 488.24 ns | 499.51 ns | 513.9 ns  | 516.82 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 499.84 ns/iter | 473.26 ns | 503.05 ns | 540.76 ns | 542.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 517.82 ns/iter | 488.6 ns  | 519.95 ns | 667.52 ns | 687.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 521.54 ns/iter | 491.43 ns | 530.24 ns | 558.69 ns | 568.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 524.4 ns/iter  | 514.14 ns | 521.75 ns | 562.39 ns | 562.51 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 541.96 ns/iter | 532.62 ns | 545.56 ns | 596.2 ns  | 620.75 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 616.11 ns/iter | 602.24 ns | 633.35 ns | 653.39 ns | 653.39 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 636.15 ns/iter | 619.65 ns | 648.06 ns | 862.57 ns | 862.57 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 641.5 ns/iter  | 620.17 ns | 652.15 ns | 1.14 µs   | 1.14 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 650.03 ns/iter | 638.11 ns | 662.82 ns | 673.07 ns | 673.07 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 651.22 ns/iter | 635.95 ns | 667.56 ns | 714.83 ns | 714.83 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 854.29 ns/iter | 756.42 ns | 776.65 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 856.48 ns/iter | 762.22 ns | 778.04 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 858.26 ns/iter | 766.73 ns | 790.83 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 885.96 ns/iter | 785.26 ns | 817.79 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 894.39 ns/iter | 802.57 ns | 820.8 ns  | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 897.77 ns/iter | 799.96 ns | 824.02 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 908.73 ns/iter | 806.42 ns | 824 ns    | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 911.69 ns/iter | 808.2 ns  | 838.17 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 912.78 ns/iter | 812.12 ns | 837.07 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 927.88 ns/iter | 809.91 ns | 853.62 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 933.03 ns/iter | 800.76 ns | 866.08 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 935.46 ns/iter | 834.63 ns | 854.62 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 936.13 ns/iter | 841.73 ns | 858.99 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 945.67 ns/iter | 810.04 ns | 881.34 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 971.05 ns/iter | 860.72 ns | 906.2 ns  | 1.67 µs   | 1.67 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 982.72 ns/iter | 862.85 ns | 921.12 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.01 µs/iter   | 889.98 ns | 912.76 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.02 µs/iter   | 875.98 ns | 967.3 ns  | 1.66 µs   | 1.66 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.09 µs   | 1.13 µs   | 1.2 µs    | 1.2 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.3 µs/iter    | 1.23 µs   | 1.3 µs    | 2.26 µs   | 2.26 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.31 µs/iter   | 1.3 µs    | 1.33 µs   | 1.37 µs   | 1.37 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.33 µs/iter   | 1.26 µs   | 1.35 µs   | 1.42 µs   | 1.42 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.38 µs/iter   | 1.29 µs   | 1.41 µs   | 2.07 µs   | 2.07 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.39 µs/iter   | 1.32 µs   | 1.38 µs   | 2.32 µs   | 2.32 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.4 µs/iter    | 1.31 µs   | 1.42 µs   | 1.7 µs    | 1.7 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.4 µs/iter    | 1.23 µs   | 1.41 µs   | 2.19 µs   | 2.19 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.51 µs   | 1.51 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.41 µs/iter   | 1.34 µs   | 1.43 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.48 µs/iter   | 1.36 µs   | 1.49 µs   | 1.87 µs   | 1.87 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.49 µs/iter   | 1.47 µs   | 1.5 µs    | 1.65 µs   | 1.65 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.53 µs/iter   | 1.2 µs    | 1.75 µs   | 1.8 µs    | 1.8 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.72 µs/iter   | 1.63 µs   | 1.7 µs    | 2.87 µs   | 2.87 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.73 µs/iter   | 1.71 µs   | 1.74 µs   | 1.89 µs   | 1.89 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.52 µs/iter   | 3.5 µs    | 3.52 µs   | 3.59 µs   | 3.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.55 µs/iter   | 2.97 µs   | 5.01 µs   | 5.59 µs   | 5.59 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 12.6 µs/iter   | 7.9 µs    | 12.1 µs   | 23.1 µs   | 1.68 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 12.66 µs/iter  | 7.9 µs    | 12.1 µs   | 23.2 µs   | 1.1 ms    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 12.84 µs/iter  | 7.8 µs    | 12 µs     | 22.8 µs   | 1.06 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.61 µs/iter  | 9.9 µs    | 13.2 µs   | 27.3 µs   | 553.51 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 13.7 µs/iter   | 7.4 µs    | 12.3 µs   | 33.8 µs   | 2.68 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 14.7 µs/iter   | 9.8 µs    | 14 µs     | 30.6 µs   | 266.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 14.82 µs/iter  | 8.4 µs    | 13.6 µs   | 34.4 µs   | 1.15 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 14.87 µs/iter  | 10.7 µs   | 14.1 µs   | 29.1 µs   | 492.9 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 15.18 µs/iter  | 7.4 µs    | 14.2 µs   | 31.8 µs   | 1.08 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15.46 µs/iter  | 8.7 µs    | 14.7 µs   | 27.4 µs   | 983.32 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 15.87 µs/iter  | 9.3 µs    | 14.3 µs   | 35.9 µs   | 1.33 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 15.95 µs/iter  | 9.1 µs    | 14.8 µs   | 34.1 µs   | 3.17 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 18.53 µs/iter  | 16.9 µs   | 18.5 µs   | 25.2 µs   | 586.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.88 µs/iter  | 16.7 µs   | 18.7 µs   | 47.8 µs   | 1.16 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 20.03 µs/iter  | 15.9 µs   | 19.1 µs   | 56.8 µs   | 375.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.8 µs/iter   | 16.4 µs   | 19.9 µs   | 44.4 µs   | 728.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 20.84 µs/iter  | 9 µs      | 19.8 µs   | 38.1 µs   | 3.64 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 22.04 µs/iter  | 17.8 µs   | 21.1 µs   | 41.6 µs   | 563.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 22.11 µs/iter  | 9.2 µs    | 19.8 µs   | 55.6 µs   | 1.51 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.26 µs/iter  | 18.2 µs   | 20.3 µs   | 117.9 µs  | 256.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.31 µs/iter  | 18.7 µs   | 20.2 µs   | 118.5 µs  | 853.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 24.47 µs/iter  | 19 µs     | 23.7 µs   | 137.6 µs  | 466.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 24.83 µs/iter  | 20.7 µs   | 24.2 µs   | 39.4 µs   | 373.71 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 29.11 µs/iter  | 23.5 µs   | 27.4 µs   | 47.1 µs   | 1.13 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 30.38 µs/iter  | 11.8 µs   | 30.1 µs   | 88.4 µs   | 1.35 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 31.68 µs/iter  | 11.9 µs   | 31.7 µs   | 95.2 µs   | 1.11 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 46.66 µs/iter  | 41.9 µs   | 45.7 µs   | 81 µs     | 417.31 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 54.8 µs/iter   | 37.9 µs   | 41.7 µs   | 556.81 µs | 1.17 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 55.18 µs/iter  | 48.1 µs   | 50 µs     | 100.9 µs  | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 59.11 µs/iter  | 53.7 µs   | 57.3 µs   | 187.7 µs  | 291.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 73.6 µs/iter   | 67.3 µs   | 71.6 µs   | 226.5 µs  | 350.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.69 µs/iter | 122.7 µs  | 124.5 µs  | 156.4 µs  | 1.3 ms    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 274.22 µs/iter | 263.2 µs  | 271.9 µs  | 316.01 µs | 1.85 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 799.92 µs/iter | 703.61 µs | 736.61 µs | 1.98 ms   | 2.09 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 804.73 µs/iter | 707.71 µs | 741.81 µs | 1.99 ms   | 2.07 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 846.16 µs/iter | 730.41 µs | 854.62 µs | 1.27 ms   | 1.57 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 856.07 µs/iter | 761.81 µs | 793.51 µs | 2.04 ms   | 2.08 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 860.63 µs/iter | 764.21 µs | 795.01 µs | 2.06 ms   | 2.13 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 891.09 µs/iter | 795.41 µs | 826.62 µs | 2.07 ms   | 2.17 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 983.47 µs/iter | 883.42 µs | 918.32 µs | 1.98 ms   | 2.01 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.37 ms/iter   | 1.2 ms    | 1.24 ms   | 4.22 ms   | 4.28 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.37 ms/iter   | 1.18 ms   | 1.24 ms   | 4 ms      | 4.29 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.42 ms/iter   | 1.24 ms   | 1.29 ms   | 2.99 ms   | 3.04 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.56 ms/iter   | 1.36 ms   | 1.41 ms   | 4.79 ms   | 4.89 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.58 ms/iter   | 1.4 ms    | 1.44 ms   | 4.66 ms   | 4.8 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.6 ms/iter    | 1.4 ms    | 1.44 ms   | 4.83 ms   | 6.08 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 86,504.222/rps | 11,017.611 | 90,135.479 | 92,600.073 | 93,536.813 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 47,345.642/rps | 4,584.49   | 49,968.588 | 50,656.248 | 50,983.417 |
| node v18.7.0 (x64-linux)               | http      | 40,228.488/rps | 4,713.123  | 41,652.063 | 42,425.414 | 42,649.637 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.13 ns/iter | 144.03 ns | 148.32 ns | 211.33 ns | 268.19 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.4 ns/iter  | 305.61 ns | 322.44 ns | 342.67 ns | 346.2 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.71 ns/iter | 314.85 ns | 325.89 ns | 394.64 ns | 558.38 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 86.18 ns/iter  | 69.94 ns  | 86.07 ns  | 126.18 ns | 183.64 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.15 ns/iter | 232.77 ns | 245.33 ns | 263.27 ns | 267.11 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.56 ns/iter | 241.83 ns | 253.99 ns | 277.75 ns | 288.07 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 86.18 ns/iter  | 69.94 ns  | 86.07 ns  | 126.18 ns | 183.64 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.13 ns/iter | 144.03 ns | 148.32 ns | 211.33 ns | 268.19 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.15 ns/iter | 232.77 ns | 245.33 ns | 263.27 ns | 267.11 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.56 ns/iter | 241.83 ns | 253.99 ns | 277.75 ns | 288.07 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.4 ns/iter  | 305.61 ns | 322.44 ns | 342.67 ns | 346.2 ns  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.71 ns/iter | 314.85 ns | 325.89 ns | 394.64 ns | 558.38 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 646.25 ns/iter | 538.75 ns | 689.91 ns | 737.68 ns | 737.68 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.45 µs/iter   | 1.39 µs   | 1.47 µs   | 1.51 µs   | 1.51 µs   |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.82 µs/iter   | 1.79 µs   | 1.83 µs   | 2.1 µs    | 2.1 µs    |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.18 µs/iter  | 1.91 µs | 2.2 µs  | 2.79 µs | 2.79 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.51 µs/iter  | 2.7 µs  | 6.5 µs  | 9.3 µs  | 2.68 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.02 µs/iter | 6.4 µs  | 12.4 µs | 15.4 µs | 706.31 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.19 µs/iter | 1.94 µs | 2.24 µs | 2.29 µs | 2.29 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.33 µs/iter | 4.6 µs  | 8.7 µs  | 13.3 µs | 2.15 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.7 µs/iter | 11.9 µs | 18.9 µs | 28.3 µs | 519.81 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.18 µs/iter  | 1.91 µs | 2.2 µs  | 2.79 µs | 2.79 µs   |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.19 µs/iter  | 1.94 µs | 2.24 µs | 2.29 µs | 2.29 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.51 µs/iter  | 2.7 µs  | 6.5 µs  | 9.3 µs  | 2.68 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.33 µs/iter  | 4.6 µs  | 8.7 µs  | 13.3 µs | 2.15 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.02 µs/iter | 6.4 µs  | 12.4 µs | 15.4 µs | 706.31 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.7 µs/iter  | 11.9 µs | 18.9 µs | 28.3 µs | 519.81 µs |

