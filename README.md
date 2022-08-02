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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 457.84 ns/iter | 447.81 ns | 463.88 ns | 493.82 ns | 535.17 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 942.23 ns/iter | 808.44 ns | 863.45 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.33 µs/iter   | 1.21 µs   | 1.35 µs   | 2.01 µs   | 2.01 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 485.6 ns/iter  | 470.66 ns | 483.4 ns | 509.05 ns | 1.15 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 859.42 ns/iter | 759.84 ns | 802.1 ns | 1.49 µs   | 1.49 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.39 µs/iter   | 1.26 µs   | 1.4 µs   | 1.97 µs   | 1.97 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 465.57 ns/iter | 458.18 ns | 468.53 ns | 531.46 ns | 589.06 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 950.8 ns/iter  | 848.87 ns | 883.93 ns | 1.56 µs   | 1.56 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.31 µs/iter   | 1.25 µs   | 1.33 µs   | 1.68 µs   | 1.68 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 465.22 ns/iter | 460.62 ns | 465.35 ns | 488.8 ns | 497.25 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 890.28 ns/iter | 798.33 ns | 825.9 ns  | 1.49 µs  | 1.49 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.3 µs/iter    | 1.23 µs   | 1.32 µs   | 1.42 µs  | 1.42 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 492.66 ns/iter | 488.21 ns | 492.28 ns | 512.25 ns | 518.98 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 953.26 ns/iter | 842.49 ns | 888.64 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.4 µs/iter    | 1.35 µs   | 1.42 µs   | 1.51 µs   | 1.51 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 487.67 ns/iter | 483.25 ns | 491.94 ns | 498.38 ns | 501.9 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1 µs/iter      | 851.56 ns | 949.32 ns | 1.61 µs   | 1.61 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.66 µs/iter   | 1.6 µs    | 1.67 µs   | 1.78 µs   | 1.78 µs  |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 468.22 ns/iter | 463.28 ns | 467.63 ns | 499.58 ns | 499.92 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 905.02 ns/iter | 801.39 ns | 833.95 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.34 µs/iter   | 1.27 µs   | 1.36 µs   | 1.45 µs   | 1.45 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 468.59 ns/iter | 455.05 ns | 469.47 ns | 498.78 ns | 513.5 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 903.07 ns/iter | 799.42 ns | 837.51 ns | 1.5 µs    | 1.5 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.35 µs/iter   | 1.31 µs   | 1.38 µs   | 1.43 µs   | 1.43 µs  |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 475.63 ns/iter | 465.69 ns | 479.55 ns | 489.79 ns | 491.98 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 910.91 ns/iter | 816.88 ns | 833.08 ns | 1.5 µs    | 1.5 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.34 µs/iter   | 1.28 µs   | 1.36 µs   | 1.39 µs   | 1.39 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average       | p75       | p99       | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ------------- | --------- | --------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.33 µs/iter | 7.5 µs    | 10.6 µs   | 21.2 µs  | 1.56 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.17 µs/iter | 18 µs     | 20.2 µs   | 119.2 µs | 213.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 806.9 µs/iter | 715.51 µs | 895.11 µs | 1.06 ms  | 1.22 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 13.25 µs/iter | 8.4 µs  | 12.4 µs | 32.1 µs  | 884.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.28 µs/iter | 18 µs   | 20.1 µs | 119.8 µs | 2.67 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.3 ms/iter   | 1.15 ms | 1.22 ms | 2.6 ms   | 2.67 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 10.15 µs/iter  | 7.4 µs    | 9.5 µs    | 18.2 µs | 4.22 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.16 µs/iter  | 16.5 µs   | 17.7 µs   | 49.6 µs | 1.14 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 758.93 µs/iter | 676.51 µs | 712.51 µs | 1.31 ms | 1.35 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 10.36 µs/iter  | 7.3 µs    | 9.8 µs    | 20.9 µs | 2.21 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.02 µs/iter  | 16.2 µs   | 17.8 µs   | 45.9 µs | 348.4 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 793.83 µs/iter | 687.21 µs | 733.81 µs | 1.87 ms | 1.97 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.43 µs/iter  | 7.5 µs    | 11.1 µs   | 22.7 µs  | 780.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.06 µs/iter  | 18.7 µs   | 20.1 µs   | 132.7 µs | 1.73 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 970.23 µs/iter | 883.41 µs | 912.51 µs | 1.84 ms  | 1.88 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.86 µs/iter | 51.2 µs | 53.6 µs | 166 µs    | 293.2 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 54.99 µs/iter | 37.9 µs | 41.6 µs | 561.71 µs | 1.09 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.41 ms/iter  | 1.24 ms | 1.28 ms | 2.91 ms   | 2.93 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 18.67 µs/iter  | 8.6 µs    | 18.4 µs   | 54.9 µs | 1.13 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 19.87 µs/iter  | 16.8 µs   | 18.9 µs   | 53.5 µs | 1.4 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 840.76 µs/iter | 755.81 µs | 784.01 µs | 1.89 ms | 1.95 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 18.92 µs/iter | 9 µs      | 18.9 µs   | 37 µs   | 973.3 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 19.99 µs/iter | 17.1 µs   | 19 µs     | 32.8 µs | 3.44 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 804.5 µs/iter | 709.81 µs | 776.91 µs | 1.85 ms | 1.89 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min      | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 68.76 µs/iter  | 62.6 µs   | 67.1 µs   | 242.5 µs | 1.85 ms |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 270.98 µs/iter | 263.3 µs  | 268.4 µs  | 298.8 µs | 1.18 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 792.38 µs/iter | 735.41 µs | 763.21 µs | 1.39 ms  | 1.43 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 417.16 ns/iter | 392.77 ns | 406.77 ns | 814.18 ns | 1.49 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 643.98 ns/iter | 618.42 ns | 636.6 ns  | 1.39 µs   | 1.39 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 931.66 ns/iter | 797.86 ns | 864.18 ns | 1.66 µs   | 1.66 µs |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 487.18 ns/iter | 477.46 ns | 486.08 ns | 549.64 ns | 574 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 875.59 ns/iter | 773.99 ns | 798.98 ns | 1.48 µs   | 1.48 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.27 µs/iter   | 1.14 µs   | 1.48 µs   | 1.53 µs   | 1.53 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 401.08 ns/iter | 392.11 ns | 398.65 ns | 501.59 ns | 511.97 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 631.88 ns/iter | 608.21 ns | 626.78 ns | 1.32 µs   | 1.32 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 930.09 ns/iter | 835.21 ns | 862.78 ns | 1.56 µs   | 1.56 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 398.95 ns/iter | 390.7 ns  | 398.24 ns | 426.75 ns | 428.86 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 610.28 ns/iter | 599.72 ns | 618.57 ns | 653.17 ns | 653.17 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 901.36 ns/iter | 805.5 ns  | 822.99 ns | 1.5 µs    | 1.5 µs    |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 526.66 ns/iter | 517.55 ns | 525.82 ns | 551.7 ns | 556.79 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 945.04 ns/iter | 850.86 ns | 869.38 ns | 1.55 µs  | 1.55 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.47 µs/iter   | 1.43 µs   | 1.48 µs   | 1.57 µs  | 1.57 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 528.13 ns/iter | 520.57 ns | 527.16 ns | 552.39 ns | 554.89 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.01 µs/iter   | 894.04 ns | 921.75 ns | 1.7 µs    | 1.7 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.76 µs/iter   | 1.73 µs   | 1.77 µs   | 1.88 µs   | 1.88 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 401.3 ns/iter  | 393.98 ns | 399.93 ns | 430.45 ns | 438.77 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 646.41 ns/iter | 635.09 ns | 654.07 ns | 707.25 ns | 707.25 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 901.07 ns/iter | 797.96 ns | 834.96 ns | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 400.02 ns/iter | 393.11 ns | 398.66 ns | 432.51 ns | 466.73 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 647.01 ns/iter | 635.24 ns | 655.9 ns  | 703.92 ns | 703.92 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 921.78 ns/iter | 820.98 ns | 837.48 ns | 1.54 µs   | 1.54 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 513.27 ns/iter | 503.62 ns | 512.75 ns | 546.62 ns | 546.76 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 870.09 ns/iter | 765.81 ns | 797.72 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.1 µs/iter    | 1.09 µs   | 1.11 µs   | 1.17 µs   | 1.17 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 11.64 µs/iter | 9.3 µs  | 11 µs   | 24.9 µs | 255 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 11.94 µs/iter | 7 µs    | 10.8 µs | 30.3 µs | 3.33 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.53 ms/iter  | 1.36 ms | 1.4 ms  | 4.48 ms | 4.66 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 13.34 µs/iter | 8.7 µs  | 12.5 µs | 32.1 µs | 1.05 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 22.26 µs/iter | 19.3 µs | 22.1 µs | 35.3 µs | 311.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.36 ms/iter  | 1.19 ms | 1.23 ms | 4.04 ms | 5.18 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.21 µs/iter  | 1.15 µs | 1.23 µs | 1.31 µs | 1.31 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 27.65 µs/iter | 11.1 µs | 26.8 µs | 93.5 µs | 2.16 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 45.24 µs/iter | 41.2 µs | 44.6 µs | 80.8 µs | 296.7 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 142.6 ns/iter  | 138.27 ns | 141.29 ns | 155.48 ns | 174.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 380.71 ns/iter | 371.1 ns  | 389.16 ns | 421.54 ns | 500.13 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 27.74 µs/iter  | 12 µs     | 28.1 µs   | 78.9 µs   | 1.42 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.5 µs/iter   | 3.48 µs | 3.5 µs  | 3.59 µs | 3.59 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 17.96 µs/iter | 16.2 µs | 17.9 µs | 29.3 µs | 425 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 28.93 µs/iter | 22.8 µs | 27.3 µs | 48.9 µs | 1 ms    |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.2 ns/iter  | 124.17 ns | 128.34 ns | 141.88 ns | 148.49 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.31 µs/iter   | 1.29 µs   | 1.32 µs   | 1.34 µs   | 1.34 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 126.95 µs/iter | 120.2 µs  | 123.8 µs  | 151.4 µs  | 1.18 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 11.71 µs/iter | 9.3 µs  | 11.1 µs | 23.6 µs | 244.8 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 11.75 µs/iter | 7.2 µs  | 10.8 µs | 29.7 µs | 1.1 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.56 ms/iter  | 1.39 ms | 1.43 ms | 4.44 ms | 4.54 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75    | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------ | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 11.63 µs/iter | 7.3 µs | 10.5 µs | 30 µs   | 1.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 12.32 µs/iter | 9.2 µs | 11.4 µs | 32.5 µs | 907.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.58 ms/iter  | 1.4 ms | 1.43 ms | 4.59 ms | 4.91 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 542.59 ns/iter | 526.52 ns | 546.76 ns | 569.69 ns | 585.49 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.87 µs/iter   | 2.96 µs   | 4.06 µs   | 4.82 µs   | 4.82 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 52.66 µs/iter  | 45.6 µs   | 48.9 µs   | 77.6 µs   | 1.09 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.2 ns/iter  | 124.17 ns | 128.34 ns | 141.88 ns | 148.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 142.6 ns/iter  | 138.27 ns | 141.29 ns | 155.48 ns | 174.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 380.71 ns/iter | 371.1 ns  | 389.16 ns | 421.54 ns | 500.13 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 398.95 ns/iter | 390.7 ns  | 398.24 ns | 426.75 ns | 428.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 400.02 ns/iter | 393.11 ns | 398.66 ns | 432.51 ns | 466.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 401.08 ns/iter | 392.11 ns | 398.65 ns | 501.59 ns | 511.97 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 401.3 ns/iter  | 393.98 ns | 399.93 ns | 430.45 ns | 438.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 417.16 ns/iter | 392.77 ns | 406.77 ns | 814.18 ns | 1.49 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 457.84 ns/iter | 447.81 ns | 463.88 ns | 493.82 ns | 535.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 465.22 ns/iter | 460.62 ns | 465.35 ns | 488.8 ns  | 497.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 465.57 ns/iter | 458.18 ns | 468.53 ns | 531.46 ns | 589.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 468.22 ns/iter | 463.28 ns | 467.63 ns | 499.58 ns | 499.92 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 468.59 ns/iter | 455.05 ns | 469.47 ns | 498.78 ns | 513.5 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 475.63 ns/iter | 465.69 ns | 479.55 ns | 489.79 ns | 491.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 485.6 ns/iter  | 470.66 ns | 483.4 ns  | 509.05 ns | 1.15 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 487.18 ns/iter | 477.46 ns | 486.08 ns | 549.64 ns | 574 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 487.67 ns/iter | 483.25 ns | 491.94 ns | 498.38 ns | 501.9 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 492.66 ns/iter | 488.21 ns | 492.28 ns | 512.25 ns | 518.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 513.27 ns/iter | 503.62 ns | 512.75 ns | 546.62 ns | 546.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 526.66 ns/iter | 517.55 ns | 525.82 ns | 551.7 ns  | 556.79 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 528.13 ns/iter | 520.57 ns | 527.16 ns | 552.39 ns | 554.89 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 542.59 ns/iter | 526.52 ns | 546.76 ns | 569.69 ns | 585.49 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 610.28 ns/iter | 599.72 ns | 618.57 ns | 653.17 ns | 653.17 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 631.88 ns/iter | 608.21 ns | 626.78 ns | 1.32 µs   | 1.32 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 643.98 ns/iter | 618.42 ns | 636.6 ns  | 1.39 µs   | 1.39 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 646.41 ns/iter | 635.09 ns | 654.07 ns | 707.25 ns | 707.25 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 647.01 ns/iter | 635.24 ns | 655.9 ns  | 703.92 ns | 703.92 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 859.42 ns/iter | 759.84 ns | 802.1 ns  | 1.49 µs   | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 870.09 ns/iter | 765.81 ns | 797.72 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 875.59 ns/iter | 773.99 ns | 798.98 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 890.28 ns/iter | 798.33 ns | 825.9 ns  | 1.49 µs   | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 901.07 ns/iter | 797.96 ns | 834.96 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 901.36 ns/iter | 805.5 ns  | 822.99 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 903.07 ns/iter | 799.42 ns | 837.51 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 905.02 ns/iter | 801.39 ns | 833.95 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 910.91 ns/iter | 816.88 ns | 833.08 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 921.78 ns/iter | 820.98 ns | 837.48 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 930.09 ns/iter | 835.21 ns | 862.78 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 931.66 ns/iter | 797.86 ns | 864.18 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 942.23 ns/iter | 808.44 ns | 863.45 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 945.04 ns/iter | 850.86 ns | 869.38 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 950.8 ns/iter  | 848.87 ns | 883.93 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 953.26 ns/iter | 842.49 ns | 888.64 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1 µs/iter      | 851.56 ns | 949.32 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.01 µs/iter   | 894.04 ns | 921.75 ns | 1.7 µs    | 1.7 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.1 µs/iter    | 1.09 µs   | 1.11 µs   | 1.17 µs   | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.21 µs/iter   | 1.15 µs   | 1.23 µs   | 1.31 µs   | 1.31 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.27 µs/iter   | 1.14 µs   | 1.48 µs   | 1.53 µs   | 1.53 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.3 µs/iter    | 1.23 µs   | 1.32 µs   | 1.42 µs   | 1.42 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.31 µs/iter   | 1.29 µs   | 1.32 µs   | 1.34 µs   | 1.34 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.31 µs/iter   | 1.25 µs   | 1.33 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.33 µs/iter   | 1.21 µs   | 1.35 µs   | 2.01 µs   | 2.01 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.34 µs/iter   | 1.27 µs   | 1.36 µs   | 1.45 µs   | 1.45 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.34 µs/iter   | 1.28 µs   | 1.36 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.35 µs/iter   | 1.31 µs   | 1.38 µs   | 1.43 µs   | 1.43 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.39 µs/iter   | 1.26 µs   | 1.4 µs    | 1.97 µs   | 1.97 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.4 µs/iter    | 1.35 µs   | 1.42 µs   | 1.51 µs   | 1.51 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.47 µs/iter   | 1.43 µs   | 1.48 µs   | 1.57 µs   | 1.57 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.66 µs/iter   | 1.6 µs    | 1.67 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.76 µs/iter   | 1.73 µs   | 1.77 µs   | 1.88 µs   | 1.88 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.5 µs/iter    | 3.48 µs   | 3.5 µs    | 3.59 µs   | 3.59 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.87 µs/iter   | 2.96 µs   | 4.06 µs   | 4.82 µs   | 4.82 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 10.15 µs/iter  | 7.4 µs    | 9.5 µs    | 18.2 µs   | 4.22 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 10.36 µs/iter  | 7.3 µs    | 9.8 µs    | 20.9 µs   | 2.21 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.33 µs/iter  | 7.5 µs    | 10.6 µs   | 21.2 µs   | 1.56 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.43 µs/iter  | 7.5 µs    | 11.1 µs   | 22.7 µs   | 780.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 11.63 µs/iter  | 7.3 µs    | 10.5 µs   | 30 µs     | 1.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 11.64 µs/iter  | 9.3 µs    | 11 µs     | 24.9 µs   | 255 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 11.71 µs/iter  | 9.3 µs    | 11.1 µs   | 23.6 µs   | 244.8 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 11.75 µs/iter  | 7.2 µs    | 10.8 µs   | 29.7 µs   | 1.1 ms    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 11.94 µs/iter  | 7 µs      | 10.8 µs   | 30.3 µs   | 3.33 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 12.32 µs/iter  | 9.2 µs    | 11.4 µs   | 32.5 µs   | 907.51 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 13.25 µs/iter  | 8.4 µs    | 12.4 µs   | 32.1 µs   | 884.91 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 13.34 µs/iter  | 8.7 µs    | 12.5 µs   | 32.1 µs   | 1.05 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 17.96 µs/iter  | 16.2 µs   | 17.9 µs   | 29.3 µs   | 425 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 18.67 µs/iter  | 8.6 µs    | 18.4 µs   | 54.9 µs   | 1.13 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 18.92 µs/iter  | 9 µs      | 18.9 µs   | 37 µs     | 973.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.02 µs/iter  | 16.2 µs   | 17.8 µs   | 45.9 µs   | 348.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.16 µs/iter  | 16.5 µs   | 17.7 µs   | 49.6 µs   | 1.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 19.87 µs/iter  | 16.8 µs   | 18.9 µs   | 53.5 µs   | 1.4 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 19.99 µs/iter  | 17.1 µs   | 19 µs     | 32.8 µs   | 3.44 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.06 µs/iter  | 18.7 µs   | 20.1 µs   | 132.7 µs  | 1.73 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.17 µs/iter  | 18 µs     | 20.2 µs   | 119.2 µs  | 213.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 22.26 µs/iter  | 19.3 µs   | 22.1 µs   | 35.3 µs   | 311.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.28 µs/iter  | 18 µs     | 20.1 µs   | 119.8 µs  | 2.67 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 27.65 µs/iter  | 11.1 µs   | 26.8 µs   | 93.5 µs   | 2.16 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 27.74 µs/iter  | 12 µs     | 28.1 µs   | 78.9 µs   | 1.42 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 28.93 µs/iter  | 22.8 µs   | 27.3 µs   | 48.9 µs   | 1 ms      |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 45.24 µs/iter  | 41.2 µs   | 44.6 µs   | 80.8 µs   | 296.7 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 52.66 µs/iter  | 45.6 µs   | 48.9 µs   | 77.6 µs   | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.86 µs/iter  | 51.2 µs   | 53.6 µs   | 166 µs    | 293.2 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 54.99 µs/iter  | 37.9 µs   | 41.6 µs   | 561.71 µs | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 68.76 µs/iter  | 62.6 µs   | 67.1 µs   | 242.5 µs  | 1.85 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 126.95 µs/iter | 120.2 µs  | 123.8 µs  | 151.4 µs  | 1.18 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 270.98 µs/iter | 263.3 µs  | 268.4 µs  | 298.8 µs  | 1.18 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 758.93 µs/iter | 676.51 µs | 712.51 µs | 1.31 ms   | 1.35 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 792.38 µs/iter | 735.41 µs | 763.21 µs | 1.39 ms   | 1.43 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 793.83 µs/iter | 687.21 µs | 733.81 µs | 1.87 ms   | 1.97 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 804.5 µs/iter  | 709.81 µs | 776.91 µs | 1.85 ms   | 1.89 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 806.9 µs/iter  | 715.51 µs | 895.11 µs | 1.06 ms   | 1.22 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 840.76 µs/iter | 755.81 µs | 784.01 µs | 1.89 ms   | 1.95 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 970.23 µs/iter | 883.41 µs | 912.51 µs | 1.84 ms   | 1.88 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.3 ms/iter    | 1.15 ms   | 1.22 ms   | 2.6 ms    | 2.67 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.36 ms/iter   | 1.19 ms   | 1.23 ms   | 4.04 ms   | 5.18 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.41 ms/iter   | 1.24 ms   | 1.28 ms   | 2.91 ms   | 2.93 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.53 ms/iter   | 1.36 ms   | 1.4 ms    | 4.48 ms   | 4.66 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.56 ms/iter   | 1.39 ms   | 1.43 ms   | 4.44 ms   | 4.54 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.58 ms/iter   | 1.4 ms    | 1.43 ms   | 4.59 ms   | 4.91 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 85,807.392/rps | 12,782.856 | 90,512.689 | 97,258.556 | 99,004.759 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 47,476.643/rps | 4,467.104  | 49,961.863 | 50,638.981 | 50,803.791 |
| node v18.7.0 (x64-linux)               | http      | 41,154.068/rps | 4,839.471  | 42,553.635 | 43,135.133 | 43,387.548 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 154.91 ns/iter | 143.48 ns | 151.42 ns | 207.56 ns | 523.92 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.66 ns/iter | 312.06 ns | 320.84 ns | 343.14 ns | 353.85 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 322.01 ns/iter | 316.2 ns  | 324.3 ns  | 354.88 ns | 374.14 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 93.93 ns/iter  | 77.79 ns  | 94.04 ns  | 134.04 ns | 140.48 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.67 ns/iter | 233.23 ns | 240.32 ns | 258.85 ns | 291.18 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 250.16 ns/iter | 241.12 ns | 251.51 ns | 263.64 ns | 285.41 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 93.93 ns/iter  | 77.79 ns  | 94.04 ns  | 134.04 ns | 140.48 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 154.91 ns/iter | 143.48 ns | 151.42 ns | 207.56 ns | 523.92 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.67 ns/iter | 233.23 ns | 240.32 ns | 258.85 ns | 291.18 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 250.16 ns/iter | 241.12 ns | 251.51 ns | 263.64 ns | 285.41 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.66 ns/iter | 312.06 ns | 320.84 ns | 343.14 ns | 353.85 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 322.01 ns/iter | 316.2 ns  | 324.3 ns  | 354.88 ns | 374.14 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 642.74 ns/iter | 538.02 ns | 685.54 ns | 696.36 ns | 696.36 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.45 µs/iter   | 1.38 µs   | 1.46 µs   | 1.5 µs    | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.8 µs/iter    | 1.75 µs   | 1.81 µs   | 2.01 µs   | 2.01 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.13 µs/iter  | 1.83 µs | 2.13 µs | 3.05 µs | 3.05 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.28 µs/iter  | 3.96 µs | 4.25 µs | 6.18 µs | 6.18 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.71 µs/iter | 6.4 µs  | 12.1 µs | 14.2 µs | 705.81 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.12 µs/iter  | 1.93 µs | 2.17 µs | 2.26 µs | 2.26 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.32 µs/iter  | 4.5 µs  | 8.6 µs  | 12.7 µs | 5.5 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.76 µs/iter | 11.7 µs | 17.8 µs | 21.2 µs | 802.01 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.12 µs/iter  | 1.93 µs | 2.17 µs | 2.26 µs | 2.26 µs   |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.13 µs/iter  | 1.83 µs | 2.13 µs | 3.05 µs | 3.05 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.28 µs/iter  | 3.96 µs | 4.25 µs | 6.18 µs | 6.18 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.32 µs/iter  | 4.5 µs  | 8.6 µs  | 12.7 µs | 5.5 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.71 µs/iter | 6.4 µs  | 12.1 µs | 14.2 µs | 705.81 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.76 µs/iter | 11.7 µs | 17.8 µs | 21.2 µs | 802.01 µs |

