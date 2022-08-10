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
   - [sqlite](#sqlite)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 465.26 ns/iter | 471.46 ns | 491.61 ns | 455.27 ns | 500.54 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 918.04 ns/iter | 867.11 ns | 1.73 µs   | 796.44 ns | 1.73 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.43 µs/iter   | 1.43 µs   | 2.09 µs   | 1.31 µs   | 2.09 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 474.82 ns/iter | 477.94 ns | 500.71 ns | 466.97 ns | 555.34 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 928.22 ns/iter | 868.38 ns | 1.59 µs   | 817.36 ns | 1.59 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.42 µs/iter   | 1.44 µs   | 1.86 µs   | 1.32 µs   | 1.86 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 467.31 ns/iter | 466.32 ns | 504.49 ns | 461.3 ns  | 511.29 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 951.75 ns/iter | 894.66 ns | 1.53 µs   | 832.34 ns | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.33 µs/iter   | 1.35 µs   | 1.42 µs   | 1.25 µs   | 1.42 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 462.97 ns/iter | 461.74 ns | 491.74 ns | 458.14 ns | 495.35 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 927.42 ns/iter | 869.56 ns | 1.53 µs   | 797.77 ns | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.32 µs/iter   | 1.35 µs   | 1.47 µs   | 1.29 µs   | 1.47 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 493.75 ns/iter | 497.44 ns | 511.36 ns | 487.85 ns | 519.18 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 938.57 ns/iter | 884.26 ns | 1.56 µs   | 830.13 ns | 1.56 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.49 µs/iter   | 1.5 µs    | 1.66 µs   | 1.45 µs   | 1.66 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 484.85 ns/iter | 488.3 ns  | 498.57 ns | 479.3 ns  | 526.93 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 952.7 ns/iter  | 895.47 ns | 1.67 µs   | 823.77 ns | 1.67 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.7 µs/iter    | 1.71 µs   | 1.94 µs   | 1.66 µs   | 1.94 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 465.73 ns/iter | 465.76 ns | 490.36 ns | 460.42 ns | 495.22 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 871.03 ns/iter | 791.05 ns | 1.51 µs   | 775.35 ns | 1.51 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.37 µs/iter   | 1.39 µs   | 1.48 µs   | 1.3 µs    | 1.48 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 466.24 ns/iter | 468.55 ns | 496.26 ns | 452.62 ns | 501.81 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 897.31 ns/iter | 833.65 ns | 1.46 µs   | 780.96 ns | 1.46 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.37 µs/iter   | 1.4 µs    | 1.45 µs   | 1.33 µs   | 1.45 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 480.16 ns/iter | 483.43 ns | 498.58 ns | 469.29 ns | 530.58 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 896.73 ns/iter | 819.54 ns | 1.47 µs   | 806.72 ns | 1.47 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.37 µs/iter   | 1.41 µs   | 1.42 µs   | 1.27 µs   | 1.42 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99     | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | ------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 12.18 µs/iter  | 10.4 µs  | 23.3 µs | 7.4 µs   | 2.73 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.33 µs/iter  | 20.3 µs  | 119 µs  | 19.2 µs  | 907.51 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 799.44 µs/iter | 876.4 µs | 1.04 ms | 714.3 µs | 1.2 ms    |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 14.29 µs/iter | 12.7 µs | 27.8 µs  | 8.5 µs  | 1.31 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.3 µs/iter  | 20.3 µs | 119.1 µs | 19.2 µs | 1.42 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.29 ms/iter  | 1.2 ms  | 2.49 ms  | 1.14 ms | 2.52 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 10.95 µs/iter  | 9.3 µs   | 19.9 µs | 7.5 µs  | 1.26 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.09 µs/iter  | 17.9 µs  | 42.2 µs | 16.6 µs | 231.9 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 755.93 µs/iter | 703.3 µs | 1.63 ms | 672 µs  | 1.89 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 10.28 µs/iter  | 9.2 µs    | 19.2 µs | 7.4 µs  | 1.26 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.95 µs/iter  | 18.1 µs   | 78.6 µs | 16.6 µs | 4.37 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 751.39 µs/iter | 699.11 µs | 1.73 ms | 678 µs  | 2.81 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 10.09 µs/iter  | 9.3 µs    | 17.6 µs  | 7.4 µs   | 839.7 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.54 µs/iter  | 20.5 µs   | 168.5 µs | 18.7 µs  | 3.31 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 947.26 µs/iter | 883.71 µs | 1.66 ms  | 853.9 µs | 8.56 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 52.85 µs/iter | 39.8 µs | 549.6 µs | 37.9 µs | 900.3 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 57.08 µs/iter | 54.2 µs | 209.1 µs | 51.3 µs | 5.42 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.34 ms/iter  | 1.19 ms | 3.16 ms  | 1.15 ms | 3.32 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 16.54 µs/iter  | 16.5 µs  | 31.7 µs | 8.6 µs   | 988.9 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.74 µs/iter  | 19.7 µs  | 42.9 µs | 17 µs    | 3.38 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 748.85 µs/iter | 712.3 µs | 1.38 ms | 687.1 µs | 4.16 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99     | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 17.4 µs/iter   | 16.9 µs  | 32.3 µs | 8.5 µs   | 977.3 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 20.27 µs/iter  | 19.8 µs  | 33.4 µs | 17 µs    | 475.5 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 774.17 µs/iter | 716.5 µs | 1.4 ms  | 685.1 µs | 8.57 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 68.7 µs/iter   | 68.6 µs  | 194.9 µs | 62.6 µs  | 277.2 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 269.25 µs/iter | 267 µs   | 299.2 µs | 263.1 µs | 1.12 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 818.77 µs/iter | 784.3 µs | 1.8 ms   | 722.8 µs | 1.88 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 406.64 ns/iter | 402.9 ns  | 452.92 ns | 396.76 ns | 525.49 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 638.85 ns/iter | 643.65 ns | 783.74 ns | 624.45 ns | 783.74 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 910.75 ns/iter | 844.39 ns | 1.46 µs   | 804.18 ns | 1.46 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 494.59 ns/iter | 494.04 ns | 525.45 ns | 484.51 ns | 527.68 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 893.49 ns/iter | 837.43 ns | 1.59 µs   | 777.77 ns | 1.59 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.37 µs/iter   | 1.49 µs   | 1.67 µs   | 1.2 µs    | 1.67 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 400.74 ns/iter | 398.94 ns | 426.29 ns | 393.28 ns | 428.44 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 632.17 ns/iter | 638.48 ns | 768.6 ns  | 617.8 ns  | 768.6 ns  |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 892.12 ns/iter | 843.94 ns | 1.42 µs   | 801.11 ns | 1.42 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 400.68 ns/iter | 398.6 ns  | 433.41 ns | 393.09 ns | 435.42 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 622.49 ns/iter | 630.92 ns | 679.31 ns | 609.23 ns | 679.31 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 836.96 ns/iter | 771.62 ns | 1.35 µs   | 757.72 ns | 1.35 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 537.5 ns/iter | 536.26 ns | 570.29 ns | 528.91 ns | 577.22 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 942.4 ns/iter | 900.51 ns | 1.59 µs   | 834.2 ns  | 1.59 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.58 µs/iter  | 1.59 µs   | 1.72 µs   | 1.55 µs   | 1.72 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 542.65 ns/iter | 541.44 ns | 571.16 ns | 532.64 ns | 585.62 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 986.03 ns/iter | 904.1 ns  | 1.61 µs   | 884.73 ns | 1.61 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.81 µs/iter   | 1.81 µs   | 1.94 µs   | 1.78 µs   | 1.94 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 405.11 ns/iter | 402.98 ns | 435.17 ns | 395.62 ns | 435.34 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 650.94 ns/iter | 660.52 ns | 733.12 ns | 637.57 ns | 733.12 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 918.13 ns/iter | 865.39 ns | 1.47 µs   | 809.01 ns | 1.47 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 403.88 ns/iter | 402.35 ns | 431.97 ns | 396.28 ns | 497.98 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 648.54 ns/iter | 658 ns    | 664.38 ns | 636.07 ns | 664.38 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 941.83 ns/iter | 919.23 ns | 1.58 µs   | 811.36 ns | 1.58 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 468.43 ns/iter | 473.65 ns | 501.92 ns | 452.11 ns | 504.2 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 856.37 ns/iter | 782.5 ns  | 1.44 µs   | 762.94 ns | 1.44 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.12 µs   | 1.18 µs   | 1.1 µs    | 1.18 µs  |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 12.75 µs/iter | 12.4 µs | 26.2 µs | 9.5 µs  | 242.1 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 13.45 µs/iter | 11.9 µs | 39.9 µs | 6.9 µs  | 2.78 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.51 ms/iter  | 1.37 ms | 4.37 ms | 1.34 ms | 4.47 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75    | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------ | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 14.23 µs/iter | 13 µs  | 32.5 µs | 8.7 µs  | 2.28 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 23.22 µs/iter | 23 µs  | 35.4 µs | 19.8 µs | 277.3 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.31 ms/iter  | 1.2 ms | 3.81 ms | 1.17 ms | 3.83 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.22 µs/iter  | 1.25 µs | 1.31 µs | 1.16 µs | 1.31 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 13.06 µs/iter | 12.1 µs | 31.6 µs | 7.6 µs  | 976.01 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 44.73 µs/iter | 44 µs   | 89.6 µs | 40.8 µs | 277.7 µs  |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 145.18 ns/iter | 143.82 ns | 158 ns   | 140.62 ns | 158.66 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 377.15 ns/iter | 374.65 ns | 407.5 ns | 370.85 ns | 410.63 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 12.8 µs/iter   | 11.7 µs   | 31.8 µs  | 7.6 µs    | 945.81 µs |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.51 µs/iter | 3.52 µs | 3.57 µs | 3.47 µs | 3.57 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 17.3 µs/iter | 17.3 µs | 23.4 µs | 16 µs   | 352.9 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 26.5 µs/iter | 24.7 µs | 45.6 µs | 20.5 µs | 1.07 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 132.71 ns/iter | 131.45 ns | 146.11 ns | 128.17 ns | 152.26 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.38 µs/iter   | 1.39 µs   | 1.42 µs   | 1.35 µs   | 1.42 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.59 µs/iter | 137.1 µs  | 154.2 µs  | 120 µs    | 1.1 ms    |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 12.77 µs/iter | 12.3 µs | 26.8 µs | 9.4 µs  | 508.6 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 13.19 µs/iter | 12.3 µs | 31.3 µs | 7.8 µs  | 2.04 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.54 ms/iter  | 1.41 ms | 4.47 ms | 1.38 ms | 4.58 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 12.92 µs/iter | 12.6 µs | 25.1 µs | 9.3 µs  | 299.4 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 13.72 µs/iter | 12.4 µs | 33.7 µs | 7.7 µs  | 1.2 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.54 ms/iter  | 1.41 ms | 4.42 ms | 1.38 ms | 4.56 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 549.61 ns/iter | 550.84 ns | 567.39 ns | 537.48 ns | 574.9 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.06 µs/iter   | 4.42 µs   | 5.25 µs   | 2.84 µs   | 5.25 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 55.12 µs/iter  | 49.4 µs   | 107.2 µs  | 45.5 µs   | 1.38 ms  |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 132.71 ns/iter | 131.45 ns | 146.11 ns | 128.17 ns | 152.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 145.18 ns/iter | 143.82 ns | 158 ns    | 140.62 ns | 158.66 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 377.15 ns/iter | 374.65 ns | 407.5 ns  | 370.85 ns | 410.63 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 400.68 ns/iter | 398.6 ns  | 433.41 ns | 393.09 ns | 435.42 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 400.74 ns/iter | 398.94 ns | 426.29 ns | 393.28 ns | 428.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 403.88 ns/iter | 402.35 ns | 431.97 ns | 396.28 ns | 497.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 405.11 ns/iter | 402.98 ns | 435.17 ns | 395.62 ns | 435.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 406.64 ns/iter | 402.9 ns  | 452.92 ns | 396.76 ns | 525.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 462.97 ns/iter | 461.74 ns | 491.74 ns | 458.14 ns | 495.35 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 465.26 ns/iter | 471.46 ns | 491.61 ns | 455.27 ns | 500.54 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 465.73 ns/iter | 465.76 ns | 490.36 ns | 460.42 ns | 495.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 466.24 ns/iter | 468.55 ns | 496.26 ns | 452.62 ns | 501.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 467.31 ns/iter | 466.32 ns | 504.49 ns | 461.3 ns  | 511.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 468.43 ns/iter | 473.65 ns | 501.92 ns | 452.11 ns | 504.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 474.82 ns/iter | 477.94 ns | 500.71 ns | 466.97 ns | 555.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 480.16 ns/iter | 483.43 ns | 498.58 ns | 469.29 ns | 530.58 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 484.85 ns/iter | 488.3 ns  | 498.57 ns | 479.3 ns  | 526.93 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 493.75 ns/iter | 497.44 ns | 511.36 ns | 487.85 ns | 519.18 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 494.59 ns/iter | 494.04 ns | 525.45 ns | 484.51 ns | 527.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 537.5 ns/iter  | 536.26 ns | 570.29 ns | 528.91 ns | 577.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 542.65 ns/iter | 541.44 ns | 571.16 ns | 532.64 ns | 585.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 549.61 ns/iter | 550.84 ns | 567.39 ns | 537.48 ns | 574.9 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 622.49 ns/iter | 630.92 ns | 679.31 ns | 609.23 ns | 679.31 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 632.17 ns/iter | 638.48 ns | 768.6 ns  | 617.8 ns  | 768.6 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 638.85 ns/iter | 643.65 ns | 783.74 ns | 624.45 ns | 783.74 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 648.54 ns/iter | 658 ns    | 664.38 ns | 636.07 ns | 664.38 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 650.94 ns/iter | 660.52 ns | 733.12 ns | 637.57 ns | 733.12 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 836.96 ns/iter | 771.62 ns | 1.35 µs   | 757.72 ns | 1.35 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 856.37 ns/iter | 782.5 ns  | 1.44 µs   | 762.94 ns | 1.44 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 871.03 ns/iter | 791.05 ns | 1.51 µs   | 775.35 ns | 1.51 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 892.12 ns/iter | 843.94 ns | 1.42 µs   | 801.11 ns | 1.42 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 893.49 ns/iter | 837.43 ns | 1.59 µs   | 777.77 ns | 1.59 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 896.73 ns/iter | 819.54 ns | 1.47 µs   | 806.72 ns | 1.47 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 897.31 ns/iter | 833.65 ns | 1.46 µs   | 780.96 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 910.75 ns/iter | 844.39 ns | 1.46 µs   | 804.18 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 918.04 ns/iter | 867.11 ns | 1.73 µs   | 796.44 ns | 1.73 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 918.13 ns/iter | 865.39 ns | 1.47 µs   | 809.01 ns | 1.47 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 927.42 ns/iter | 869.56 ns | 1.53 µs   | 797.77 ns | 1.53 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 928.22 ns/iter | 868.38 ns | 1.59 µs   | 817.36 ns | 1.59 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 938.57 ns/iter | 884.26 ns | 1.56 µs   | 830.13 ns | 1.56 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 941.83 ns/iter | 919.23 ns | 1.58 µs   | 811.36 ns | 1.58 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 942.4 ns/iter  | 900.51 ns | 1.59 µs   | 834.2 ns  | 1.59 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 951.75 ns/iter | 894.66 ns | 1.53 µs   | 832.34 ns | 1.53 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 952.7 ns/iter  | 895.47 ns | 1.67 µs   | 823.77 ns | 1.67 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 986.03 ns/iter | 904.1 ns  | 1.61 µs   | 884.73 ns | 1.61 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.12 µs   | 1.18 µs   | 1.1 µs    | 1.18 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.22 µs/iter   | 1.25 µs   | 1.31 µs   | 1.16 µs   | 1.31 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.32 µs/iter   | 1.35 µs   | 1.47 µs   | 1.29 µs   | 1.47 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.33 µs/iter   | 1.35 µs   | 1.42 µs   | 1.25 µs   | 1.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.37 µs/iter   | 1.39 µs   | 1.48 µs   | 1.3 µs    | 1.48 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.37 µs/iter   | 1.41 µs   | 1.42 µs   | 1.27 µs   | 1.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.37 µs/iter   | 1.49 µs   | 1.67 µs   | 1.2 µs    | 1.67 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.37 µs/iter   | 1.4 µs    | 1.45 µs   | 1.33 µs   | 1.45 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.38 µs/iter   | 1.39 µs   | 1.42 µs   | 1.35 µs   | 1.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.42 µs/iter   | 1.44 µs   | 1.86 µs   | 1.32 µs   | 1.86 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.43 µs/iter   | 1.43 µs   | 2.09 µs   | 1.31 µs   | 2.09 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.49 µs/iter   | 1.5 µs    | 1.66 µs   | 1.45 µs   | 1.66 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.58 µs/iter   | 1.59 µs   | 1.72 µs   | 1.55 µs   | 1.72 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.7 µs/iter    | 1.71 µs   | 1.94 µs   | 1.66 µs   | 1.94 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.81 µs/iter   | 1.81 µs   | 1.94 µs   | 1.78 µs   | 1.94 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.51 µs/iter   | 3.52 µs   | 3.57 µs   | 3.47 µs   | 3.57 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.06 µs/iter   | 4.42 µs   | 5.25 µs   | 2.84 µs   | 5.25 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 10.09 µs/iter  | 9.3 µs    | 17.6 µs   | 7.4 µs    | 839.7 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 10.28 µs/iter  | 9.2 µs    | 19.2 µs   | 7.4 µs    | 1.26 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 10.95 µs/iter  | 9.3 µs    | 19.9 µs   | 7.5 µs    | 1.26 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 12.18 µs/iter  | 10.4 µs   | 23.3 µs   | 7.4 µs    | 2.73 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 12.75 µs/iter  | 12.4 µs   | 26.2 µs   | 9.5 µs    | 242.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 12.77 µs/iter  | 12.3 µs   | 26.8 µs   | 9.4 µs    | 508.6 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 12.8 µs/iter   | 11.7 µs   | 31.8 µs   | 7.6 µs    | 945.81 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 12.92 µs/iter  | 12.6 µs   | 25.1 µs   | 9.3 µs    | 299.4 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 13.06 µs/iter  | 12.1 µs   | 31.6 µs   | 7.6 µs    | 976.01 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 13.19 µs/iter  | 12.3 µs   | 31.3 µs   | 7.8 µs    | 2.04 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 13.45 µs/iter  | 11.9 µs   | 39.9 µs   | 6.9 µs    | 2.78 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 13.72 µs/iter  | 12.4 µs   | 33.7 µs   | 7.7 µs    | 1.2 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 14.23 µs/iter  | 13 µs     | 32.5 µs   | 8.7 µs    | 2.28 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 14.29 µs/iter  | 12.7 µs   | 27.8 µs   | 8.5 µs    | 1.31 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 16.54 µs/iter  | 16.5 µs   | 31.7 µs   | 8.6 µs    | 988.9 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 17.3 µs/iter   | 17.3 µs   | 23.4 µs   | 16 µs     | 352.9 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 17.4 µs/iter   | 16.9 µs   | 32.3 µs   | 8.5 µs    | 977.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.09 µs/iter  | 17.9 µs   | 42.2 µs   | 16.6 µs   | 231.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.95 µs/iter  | 18.1 µs   | 78.6 µs   | 16.6 µs   | 4.37 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 20.27 µs/iter  | 19.8 µs   | 33.4 µs   | 17 µs     | 475.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.74 µs/iter  | 19.7 µs   | 42.9 µs   | 17 µs     | 3.38 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.3 µs/iter   | 20.3 µs   | 119.1 µs  | 19.2 µs   | 1.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.33 µs/iter  | 20.3 µs   | 119 µs    | 19.2 µs   | 907.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.54 µs/iter  | 20.5 µs   | 168.5 µs  | 18.7 µs   | 3.31 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 23.22 µs/iter  | 23 µs     | 35.4 µs   | 19.8 µs   | 277.3 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.5 µs/iter   | 24.7 µs   | 45.6 µs   | 20.5 µs   | 1.07 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 44.73 µs/iter  | 44 µs     | 89.6 µs   | 40.8 µs   | 277.7 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 52.85 µs/iter  | 39.8 µs   | 549.6 µs  | 37.9 µs   | 900.3 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 55.12 µs/iter  | 49.4 µs   | 107.2 µs  | 45.5 µs   | 1.38 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 57.08 µs/iter  | 54.2 µs   | 209.1 µs  | 51.3 µs   | 5.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 68.7 µs/iter   | 68.6 µs   | 194.9 µs  | 62.6 µs   | 277.2 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.59 µs/iter | 137.1 µs  | 154.2 µs  | 120 µs    | 1.1 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 269.25 µs/iter | 267 µs    | 299.2 µs  | 263.1 µs  | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 748.85 µs/iter | 712.3 µs  | 1.38 ms   | 687.1 µs  | 4.16 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 751.39 µs/iter | 699.11 µs | 1.73 ms   | 678 µs    | 2.81 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 755.93 µs/iter | 703.3 µs  | 1.63 ms   | 672 µs    | 1.89 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 774.17 µs/iter | 716.5 µs  | 1.4 ms    | 685.1 µs  | 8.57 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 799.44 µs/iter | 876.4 µs  | 1.04 ms   | 714.3 µs  | 1.2 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 818.77 µs/iter | 784.3 µs  | 1.8 ms    | 722.8 µs  | 1.88 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 947.26 µs/iter | 883.71 µs | 1.66 ms   | 853.9 µs  | 8.56 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.29 ms/iter   | 1.2 ms    | 2.49 ms   | 1.14 ms   | 2.52 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.31 ms/iter   | 1.2 ms    | 3.81 ms   | 1.17 ms   | 3.83 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.34 ms/iter   | 1.19 ms   | 3.16 ms   | 1.15 ms   | 3.32 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.51 ms/iter   | 1.37 ms   | 4.37 ms   | 1.34 ms   | 4.47 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.54 ms/iter   | 1.41 ms   | 4.47 ms   | 1.38 ms   | 4.58 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.54 ms/iter   | 1.41 ms   | 4.42 ms   | 1.38 ms   | 4.56 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.7 (x64-linux)                  | http      | 85,887.519/rps | 88,855.266 | 94,537.977 | 10,803.234 | 96,241.704 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 48,268.764/rps | 50,765.414 | 51,466.917 | 4,422.998  | 51,764.161 |
| node v18.7.0 (x64-linux)               | http      | 41,459.554/rps | 42,901.667 | 43,870.11  | 4,951.127  | 44,297.271 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 152.79 ns/iter | 150.17 ns | 202.09 ns | 146.91 ns | 274.32 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.57 ns/iter | 323.34 ns | 345.95 ns | 314.55 ns | 378.69 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 327.3 ns/iter  | 329.89 ns | 351.67 ns | 320.09 ns | 357.53 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 83.14 ns/iter  | 83.08 ns  | 122.49 ns | 68.38 ns  | 131.69 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.19 ns/iter | 240.94 ns | 255.96 ns | 233.05 ns | 262.93 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 247.72 ns/iter | 249 ns    | 263.79 ns | 239.24 ns | 264.51 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 83.14 ns/iter  | 83.08 ns  | 122.49 ns | 68.38 ns  | 131.69 ns |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 152.79 ns/iter | 150.17 ns | 202.09 ns | 146.91 ns | 274.32 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.19 ns/iter | 240.94 ns | 255.96 ns | 233.05 ns | 262.93 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 247.72 ns/iter | 249 ns    | 263.79 ns | 239.24 ns | 264.51 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.57 ns/iter | 323.34 ns | 345.95 ns | 314.55 ns | 378.69 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 327.3 ns/iter  | 329.89 ns | 351.67 ns | 320.09 ns | 357.53 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 34.52 ms/iter  | 34.48 ms  | 38.37 ms  | 33.54 ms  | 38.37 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 100.89 ms/iter | 100.99 ms | 101.08 ms | 100.43 ms | 101.08 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 233.65 ms/iter | 232.66 ms | 257.41 ms | 224.61 ms | 257.41 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------ | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 98.26 µs/iter  | 96.7 µs  | 116.1 µs | 92.4 µs  | 1.33 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 310.85 µs/iter | 310.3 µs | 322.9 µs | 307.1 µs | 829.9 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 427.25 µs/iter | 389.7 µs | 460.4 µs | 374.1 µs | 8.55 ms  |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.11 µs/iter  | 59.9 µs  | 78.4 µs  | 54.2 µs  | 581.4 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.82 µs/iter | 154.5 µs | 163.1 µs | 152.9 µs | 584.1 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 380.02 µs/iter | 337.2 µs | 710.7 µs | 326.7 µs | 7.1 ms   |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 65.81 µs/iter  | 61.4 µs  | 103.4 µs | 46.8 µs  | 581.4 µs  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.16 µs/iter | 111.3 µs | 218 µs   | 98.1 µs  | 721.71 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 341.75 µs/iter | 338 µs   | 1.54 ms  | 277.5 µs | 5.14 ms   |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------- | -------------- | --------- | -------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 176.56 µs/iter | 176.6 µs  | 195.3 µs | 157.6 µs  | 701.7 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 441.75 µs/iter | 441.1 µs  | 454.2 µs | 437.1 µs  | 839.9 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.03 ms/iter   | 900.51 µs | 7.55 ms  | 878.21 µs | 8.28 ms  |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.11 µs/iter  | 59.9 µs   | 78.4 µs   | 54.2 µs   | 581.4 µs  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 65.81 µs/iter  | 61.4 µs   | 103.4 µs  | 46.8 µs   | 581.4 µs  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 98.26 µs/iter  | 96.7 µs   | 116.1 µs  | 92.4 µs   | 1.33 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.16 µs/iter | 111.3 µs  | 218 µs    | 98.1 µs   | 721.71 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.82 µs/iter | 154.5 µs  | 163.1 µs  | 152.9 µs  | 584.1 µs  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 176.56 µs/iter | 176.6 µs  | 195.3 µs  | 157.6 µs  | 701.7 µs  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 310.85 µs/iter | 310.3 µs  | 322.9 µs  | 307.1 µs  | 829.9 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 341.75 µs/iter | 338 µs    | 1.54 ms   | 277.5 µs  | 5.14 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 380.02 µs/iter | 337.2 µs  | 710.7 µs  | 326.7 µs  | 7.1 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 427.25 µs/iter | 389.7 µs  | 460.4 µs  | 374.1 µs  | 8.55 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 441.75 µs/iter | 441.1 µs  | 454.2 µs  | 437.1 µs  | 839.9 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.03 ms/iter   | 900.51 µs | 7.55 ms   | 878.21 µs | 8.28 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 34.52 ms/iter  | 34.48 ms  | 38.37 ms  | 33.54 ms  | 38.37 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 100.89 ms/iter | 100.99 ms | 101.08 ms | 100.43 ms | 101.08 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 233.65 ms/iter | 232.66 ms | 257.41 ms | 224.61 ms | 257.41 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 645.11 ns/iter | 686.37 ns | 833.31 ns | 538.06 ns | 833.31 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.4 µs/iter    | 1.42 µs   | 1.45 µs   | 1.36 µs   | 1.45 µs   |
| bun 0.1.7 (x64-linux)                  | nanoid(36) | 1.78 µs/iter   | 1.78 µs   | 2.01 µs   | 1.74 µs   | 2.01 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min    | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------ | --------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello') | 2.15 µs/iter  | 2.23 µs | 2.28 µs | 1.7 µs | 2.28 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.38 µs/iter  | 6.4 µs  | 9.2 µs  | 2.6 µs | 600.21 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.61 µs/iter | 12.4 µs | 15 µs   | 6.5 µs | 593.11 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.35 µs/iter  | 2.38 µs | 2.53 µs | 2.24 µs | 2.53 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.91 µs/iter  | 8.4 µs  | 12.9 µs | 4.3 µs  | 1.73 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.56 µs/iter | 18.6 µs | 22 µs   | 12 µs   | 1.88 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello')             | 2.15 µs/iter  | 2.23 µs | 2.28 µs | 1.7 µs  | 2.28 µs   |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.35 µs/iter  | 2.38 µs | 2.53 µs | 2.24 µs | 2.53 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.38 µs/iter  | 6.4 µs  | 9.2 µs  | 2.6 µs  | 600.21 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.91 µs/iter  | 8.4 µs  | 12.9 µs | 4.3 µs  | 1.73 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.61 µs/iter | 12.4 µs | 15 µs   | 6.5 µs  | 593.11 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.56 µs/iter | 18.6 µs | 22 µs   | 12 µs   | 1.88 ms   |

