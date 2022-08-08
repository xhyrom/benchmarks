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
| Runtime                                | Benchmark                              | Average        | p75      | p99       | Min       | Max      |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 428.22 ns/iter | 430.6 ns | 452.04 ns | 419.76 ns | 623.8 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 937.98 ns/iter | 874.6 ns | 1.53 µs   | 850.29 ns | 1.53 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.55 µs/iter   | 1.57 µs  | 2.32 µs   | 1.44 µs   | 2.32 µs  |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 453.92 ns/iter | 451.67 ns | 488.62 ns | 441.06 ns | 1.16 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 870.63 ns/iter | 821.35 ns | 1.42 µs   | 787.73 ns | 1.42 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.62 µs/iter   | 1.63 µs   | 2.06 µs   | 1.51 µs   | 2.06 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 430.99 ns/iter | 431.17 ns | 453.92 ns | 425.94 ns | 462.94 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 989.37 ns/iter | 933.81 ns | 1.53 µs   | 889.69 ns | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.52 µs/iter   | 1.54 µs   | 1.63 µs   | 1.44 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 427.26 ns/iter | 427.04 ns | 437.08 ns | 423.63 ns | 442.68 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 934.17 ns/iter | 864.78 ns | 1.8 µs    | 844.28 ns | 1.8 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.51 µs/iter   | 1.52 µs   | 1.72 µs   | 1.45 µs   | 1.72 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 473.21 ns/iter | 473.29 ns | 483.07 ns | 469.9 ns  | 487.49 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 961.84 ns/iter | 901.28 ns | 1.5 µs    | 877.27 ns | 1.5 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.61 µs/iter   | 1.61 µs   | 1.72 µs   | 1.58 µs   | 1.72 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 466.24 ns/iter | 466.3 ns  | 478.92 ns | 462.49 ns | 481.22 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 987.36 ns/iter | 939.39 ns | 1.55 µs   | 892.72 ns | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.92 µs/iter   | 1.92 µs   | 2.1 µs    | 1.89 µs   | 2.1 µs    |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 430.58 ns/iter | 430.55 ns | 441.67 ns | 426.3 ns  | 443.56 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 912.87 ns/iter | 853.76 ns | 1.47 µs   | 834.82 ns | 1.47 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.56 µs/iter   | 1.57 µs   | 1.65 µs   | 1.47 µs   | 1.65 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 515.92 ns/iter | 539.55 ns | 558.08 ns | 423.63 ns | 559.06 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 937.62 ns/iter | 928.75 ns | 1.46 µs   | 834.37 ns | 1.46 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.56 µs/iter   | 1.58 µs   | 1.69 µs   | 1.53 µs   | 1.69 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 457.31 ns/iter | 460.85 ns | 466.44 ns | 449.51 ns | 469.07 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 937.56 ns/iter | 876.52 ns | 1.45 µs   | 857.51 ns | 1.45 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.57 µs/iter   | 1.59 µs   | 1.71 µs   | 1.52 µs   | 1.71 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.2 µs/iter    | 6.4 µs    | 11.5 µs   | 5.3 µs    | 692.89 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.78 µs/iter  | 20.2 µs   | 103.9 µs  | 19.4 µs   | 211.1 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 707.69 µs/iter | 765.39 µs | 889.49 µs | 625.49 µs | 1.19 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75       | p99      | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | --------- | -------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 10.22 µs/iter | 9.4 µs    | 27.9 µs  | 7.7 µs    | 808.79 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.04 µs/iter | 18.3 µs   | 101.8 µs | 17.6 µs   | 1.54 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.05 ms/iter  | 992.89 µs | 1.69 ms  | 935.79 µs | 4.94 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min      | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.9 µs/iter    | 8.2 µs    | 13.2 µs | 7.3 µs   | 632.69 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.78 µs/iter  | 16.6 µs   | 38.2 µs | 15.9 µs  | 307.2 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 638.12 µs/iter | 605.09 µs | 1.16 ms | 567.6 µs | 1.47 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min      | Max      |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.98 µs/iter   | 9.15 µs   | 10.24 µs | 8.56 µs  | 10.24 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.84 µs/iter  | 16.6 µs   | 37.9 µs  | 15.9 µs  | 3.48 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 639.91 µs/iter | 609.69 µs | 1.2 ms   | 580.5 µs | 2.64 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75       | p99      | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.4 µs/iter   | 8.42 µs   | 9.1 µs   | 8.15 µs   | 9.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.32 µs/iter | 19.7 µs   | 118.2 µs | 18.8 µs   | 1.22 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 765.8 µs/iter | 734.19 µs | 1.22 ms  | 710.29 µs | 3.33 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.77 µs/iter | 38.9 µs | 386.2 µs | 36.1 µs | 894.59 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 54.95 µs/iter | 55.2 µs | 157.2 µs | 49.8 µs | 1.09 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.2 ms/iter   | 1.1 ms  | 2.71 ms  | 1.04 ms | 2.79 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 10.29 µs/iter  | 9.3 µs    | 18.1 µs | 7.2 µs    | 726.09 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.86 µs/iter  | 16.9 µs   | 36.4 µs | 16 µs     | 490.19 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 759.54 µs/iter | 699.89 µs | 1.66 ms | 677.09 µs | 4.08 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 10.35 µs/iter  | 9.4 µs    | 16.9 µs | 7.2 µs    | 1.76 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 18.07 µs/iter  | 17.1 µs   | 30.6 µs | 16 µs     | 4.76 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 753.08 µs/iter | 702.29 µs | 1.67 ms | 678.19 µs | 1.98 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 63.65 µs/iter  | 62.3 µs   | 172.5 µs | 60.9 µs   | 232.6 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 326.47 µs/iter | 329.4 µs  | 364.4 µs | 317.8 µs  | 1.12 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 770.56 µs/iter | 720.79 µs | 1.68 ms  | 696.09 µs | 3.11 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 356.98 ns/iter | 355.44 ns | 385.95 ns | 348.95 ns | 395.22 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 642.24 ns/iter | 646.33 ns | 795.51 ns | 630.17 ns | 795.51 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1 µs/iter      | 951.25 ns | 1.57 µs   | 888.89 ns | 1.57 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 457.48 ns/iter | 455.8 ns  | 484.35 ns | 451.99 ns | 485.4 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 883.6 ns/iter  | 822.88 ns | 1.4 µs    | 809.38 ns | 1.4 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.47 µs/iter   | 1.54 µs   | 1.76 µs   | 1.33 µs   | 1.76 µs  |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 356.03 ns/iter | 356.06 ns | 387.52 ns | 349.33 ns | 388.84 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 627.12 ns/iter | 633.36 ns | 754.89 ns | 617.68 ns | 754.89 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 988.13 ns/iter | 941.46 ns | 1.45 µs   | 833.67 ns | 1.45 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 356.89 ns/iter | 357.21 ns | 396.31 ns | 349.88 ns | 399.05 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 706.57 ns/iter | 780.83 ns | 800 ns    | 609.22 ns | 800 ns    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 847.58 ns/iter | 787.82 ns | 1.32 µs   | 776.85 ns | 1.32 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 603.39 ns/iter | 603.08 ns | 629.54 ns | 591.36 ns | 629.54 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 968.16 ns/iter | 942.78 ns | 1.51 µs   | 843.62 ns | 1.51 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.75 µs/iter   | 1.75 µs   | 2.29 µs   | 1.71 µs   | 2.29 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 559.05 ns/iter | 568.91 ns | 595.78 ns | 470.86 ns | 605.84 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.02 µs/iter   | 984.71 ns | 1.55 µs   | 895.6 ns  | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.04 µs/iter   | 2.05 µs   | 2.25 µs   | 2.01 µs   | 2.25 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 355.31 ns/iter | 352.87 ns | 398.58 ns | 347.5 ns  | 403.3 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 643.12 ns/iter | 650.96 ns | 689.76 ns | 634.37 ns | 689.76 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 973.14 ns/iter | 936.17 ns | 1.45 µs   | 830.9 ns  | 1.45 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 359.11 ns/iter | 358.36 ns | 388.3 ns  | 352.24 ns | 389.26 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 640.41 ns/iter | 648.45 ns | 654.83 ns | 632.5 ns  | 654.83 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 977.37 ns/iter | 935.2 ns  | 1.48 µs   | 831.06 ns | 1.48 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 440.67 ns/iter | 445.3 ns  | 497.04 ns | 420.27 ns | 500.19 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 850.04 ns/iter | 787.48 ns | 1.36 µs   | 766.58 ns | 1.36 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.13 µs/iter   | 1.13 µs   | 1.21 µs   | 1.11 µs   | 1.21 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.21 µs/iter | 7.5 µs  | 18.5 µs | 6.7 µs  | 197.4 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.39 µs/iter | 8.3 µs  | 26.3 µs | 6.8 µs  | 1.17 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.32 ms/iter | 1.21 ms | 3.72 ms | 1.17 ms | 3.87 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 10.72 µs/iter | 10 µs   | 28.4 µs | 8 µs    | 1.12 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 19.3 µs/iter  | 18.8 µs | 31 µs   | 17.7 µs | 249.2 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.12 ms/iter  | 1.03 ms | 3.28 ms | 1 ms    | 3.39 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.15 µs/iter  | 1.17 µs | 1.23 µs | 1.09 µs | 1.23 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 9.38 µs/iter  | 8.3 µs  | 27.3 µs | 7.1 µs  | 2.55 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.78 µs/iter | 37.1 µs | 63.7 µs | 35.1 µs | 218.9 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 128.62 ns/iter | 127.76 ns | 138.96 ns | 123.89 ns | 143.6 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 365.5 ns/iter  | 364.26 ns | 381.17 ns | 360.06 ns | 382.6 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 9.32 µs/iter   | 9.42 µs   | 9.75 µs   | 8.9 µs    | 9.75 µs  |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.72 µs/iter  | 3.72 µs | 3.77 µs | 3.7 µs  | 3.77 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.6 µs/iter  | 15.7 µs | 20.8 µs | 14.4 µs | 350.6 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 26.49 µs/iter | 24.3 µs | 45.8 µs | 22.2 µs | 1.33 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 116.12 ns/iter | 115.08 ns | 126.42 ns | 112.76 ns | 140.35 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.56 µs/iter   | 1.57 µs   | 1.62 µs   | 1.54 µs   | 1.62 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 125.38 µs/iter | 133.3 µs  | 151.19 µs | 117.4 µs  | 1.05 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.17 µs/iter | 8.21 µs | 8.46 µs | 8.04 µs | 8.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 9.53 µs/iter | 8.4 µs  | 28 µs   | 7.1 µs  | 847.07 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter | 1.23 ms | 3.77 ms | 1.19 ms | 3.84 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.18 µs/iter | 8.19 µs | 8.35 µs | 8.09 µs | 8.35 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 9.37 µs/iter | 8.5 µs  | 27.4 µs | 7 µs    | 775.27 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.33 ms/iter | 1.22 ms | 3.73 ms | 1.18 ms | 3.86 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 510.88 ns/iter | 509.5 ns | 530.75 ns | 497.76 ns | 539.56 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.96 µs/iter   | 4.35 µs  | 4.79 µs   | 2.79 µs   | 4.79 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 48.71 µs/iter  | 45.7 µs  | 70.2 µs   | 43.9 µs   | 1.19 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 116.12 ns/iter | 115.08 ns | 126.42 ns | 112.76 ns | 140.35 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 128.62 ns/iter | 127.76 ns | 138.96 ns | 123.89 ns | 143.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 355.31 ns/iter | 352.87 ns | 398.58 ns | 347.5 ns  | 403.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 356.03 ns/iter | 356.06 ns | 387.52 ns | 349.33 ns | 388.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 356.89 ns/iter | 357.21 ns | 396.31 ns | 349.88 ns | 399.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 356.98 ns/iter | 355.44 ns | 385.95 ns | 348.95 ns | 395.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 359.11 ns/iter | 358.36 ns | 388.3 ns  | 352.24 ns | 389.26 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 365.5 ns/iter  | 364.26 ns | 381.17 ns | 360.06 ns | 382.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 427.26 ns/iter | 427.04 ns | 437.08 ns | 423.63 ns | 442.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 428.22 ns/iter | 430.6 ns  | 452.04 ns | 419.76 ns | 623.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 430.58 ns/iter | 430.55 ns | 441.67 ns | 426.3 ns  | 443.56 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 430.99 ns/iter | 431.17 ns | 453.92 ns | 425.94 ns | 462.94 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 440.67 ns/iter | 445.3 ns  | 497.04 ns | 420.27 ns | 500.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 453.92 ns/iter | 451.67 ns | 488.62 ns | 441.06 ns | 1.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 457.31 ns/iter | 460.85 ns | 466.44 ns | 449.51 ns | 469.07 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 457.48 ns/iter | 455.8 ns  | 484.35 ns | 451.99 ns | 485.4 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 466.24 ns/iter | 466.3 ns  | 478.92 ns | 462.49 ns | 481.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 473.21 ns/iter | 473.29 ns | 483.07 ns | 469.9 ns  | 487.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 510.88 ns/iter | 509.5 ns  | 530.75 ns | 497.76 ns | 539.56 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 515.92 ns/iter | 539.55 ns | 558.08 ns | 423.63 ns | 559.06 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 559.05 ns/iter | 568.91 ns | 595.78 ns | 470.86 ns | 605.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 603.39 ns/iter | 603.08 ns | 629.54 ns | 591.36 ns | 629.54 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 627.12 ns/iter | 633.36 ns | 754.89 ns | 617.68 ns | 754.89 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 640.41 ns/iter | 648.45 ns | 654.83 ns | 632.5 ns  | 654.83 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 642.24 ns/iter | 646.33 ns | 795.51 ns | 630.17 ns | 795.51 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 643.12 ns/iter | 650.96 ns | 689.76 ns | 634.37 ns | 689.76 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 706.57 ns/iter | 780.83 ns | 800 ns    | 609.22 ns | 800 ns    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 847.58 ns/iter | 787.82 ns | 1.32 µs   | 776.85 ns | 1.32 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 850.04 ns/iter | 787.48 ns | 1.36 µs   | 766.58 ns | 1.36 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 870.63 ns/iter | 821.35 ns | 1.42 µs   | 787.73 ns | 1.42 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 883.6 ns/iter  | 822.88 ns | 1.4 µs    | 809.38 ns | 1.4 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 912.87 ns/iter | 853.76 ns | 1.47 µs   | 834.82 ns | 1.47 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 934.17 ns/iter | 864.78 ns | 1.8 µs    | 844.28 ns | 1.8 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 937.56 ns/iter | 876.52 ns | 1.45 µs   | 857.51 ns | 1.45 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 937.62 ns/iter | 928.75 ns | 1.46 µs   | 834.37 ns | 1.46 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 937.98 ns/iter | 874.6 ns  | 1.53 µs   | 850.29 ns | 1.53 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 961.84 ns/iter | 901.28 ns | 1.5 µs    | 877.27 ns | 1.5 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 968.16 ns/iter | 942.78 ns | 1.51 µs   | 843.62 ns | 1.51 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 973.14 ns/iter | 936.17 ns | 1.45 µs   | 830.9 ns  | 1.45 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 977.37 ns/iter | 935.2 ns  | 1.48 µs   | 831.06 ns | 1.48 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 987.36 ns/iter | 939.39 ns | 1.55 µs   | 892.72 ns | 1.55 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 988.13 ns/iter | 941.46 ns | 1.45 µs   | 833.67 ns | 1.45 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 989.37 ns/iter | 933.81 ns | 1.53 µs   | 889.69 ns | 1.53 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1 µs/iter      | 951.25 ns | 1.57 µs   | 888.89 ns | 1.57 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.02 µs/iter   | 984.71 ns | 1.55 µs   | 895.6 ns  | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.13 µs/iter   | 1.13 µs   | 1.21 µs   | 1.11 µs   | 1.21 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.15 µs/iter   | 1.17 µs   | 1.23 µs   | 1.09 µs   | 1.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.47 µs/iter   | 1.54 µs   | 1.76 µs   | 1.33 µs   | 1.76 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.51 µs/iter   | 1.52 µs   | 1.72 µs   | 1.45 µs   | 1.72 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.52 µs/iter   | 1.54 µs   | 1.63 µs   | 1.44 µs   | 1.63 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.55 µs/iter   | 1.57 µs   | 2.32 µs   | 1.44 µs   | 2.32 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.56 µs/iter   | 1.57 µs   | 1.65 µs   | 1.47 µs   | 1.65 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.56 µs/iter   | 1.58 µs   | 1.69 µs   | 1.53 µs   | 1.69 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.56 µs/iter   | 1.57 µs   | 1.62 µs   | 1.54 µs   | 1.62 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.57 µs/iter   | 1.59 µs   | 1.71 µs   | 1.52 µs   | 1.71 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.61 µs/iter   | 1.61 µs   | 1.72 µs   | 1.58 µs   | 1.72 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.62 µs/iter   | 1.63 µs   | 2.06 µs   | 1.51 µs   | 2.06 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.75 µs/iter   | 1.75 µs   | 2.29 µs   | 1.71 µs   | 2.29 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.92 µs/iter   | 1.92 µs   | 2.1 µs    | 1.89 µs   | 2.1 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.04 µs/iter   | 2.05 µs   | 2.25 µs   | 2.01 µs   | 2.25 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.72 µs/iter   | 3.72 µs   | 3.77 µs   | 3.7 µs    | 3.77 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.96 µs/iter   | 4.35 µs   | 4.79 µs   | 2.79 µs   | 4.79 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.2 µs/iter    | 6.4 µs    | 11.5 µs   | 5.3 µs    | 692.89 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.17 µs/iter   | 8.21 µs   | 8.46 µs   | 8.04 µs   | 8.46 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.18 µs/iter   | 8.19 µs   | 8.35 µs   | 8.09 µs   | 8.35 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.21 µs/iter   | 7.5 µs    | 18.5 µs   | 6.7 µs    | 197.4 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.4 µs/iter    | 8.42 µs   | 9.1 µs    | 8.15 µs   | 9.1 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.9 µs/iter    | 8.2 µs    | 13.2 µs   | 7.3 µs    | 632.69 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.98 µs/iter   | 9.15 µs   | 10.24 µs  | 8.56 µs   | 10.24 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 9.32 µs/iter   | 9.42 µs   | 9.75 µs   | 8.9 µs    | 9.75 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 9.37 µs/iter   | 8.5 µs    | 27.4 µs   | 7 µs      | 775.27 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 9.38 µs/iter   | 8.3 µs    | 27.3 µs   | 7.1 µs    | 2.55 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.39 µs/iter   | 8.3 µs    | 26.3 µs   | 6.8 µs    | 1.17 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 9.53 µs/iter   | 8.4 µs    | 28 µs     | 7.1 µs    | 847.07 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 10.22 µs/iter  | 9.4 µs    | 27.9 µs   | 7.7 µs    | 808.79 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 10.29 µs/iter  | 9.3 µs    | 18.1 µs   | 7.2 µs    | 726.09 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 10.35 µs/iter  | 9.4 µs    | 16.9 µs   | 7.2 µs    | 1.76 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 10.72 µs/iter  | 10 µs     | 28.4 µs   | 8 µs      | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.6 µs/iter   | 15.7 µs   | 20.8 µs   | 14.4 µs   | 350.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.78 µs/iter  | 16.6 µs   | 38.2 µs   | 15.9 µs   | 307.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.84 µs/iter  | 16.6 µs   | 37.9 µs   | 15.9 µs   | 3.48 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.86 µs/iter  | 16.9 µs   | 36.4 µs   | 16 µs     | 490.19 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 18.07 µs/iter  | 17.1 µs   | 30.6 µs   | 16 µs     | 4.76 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 19.3 µs/iter   | 18.8 µs   | 31 µs     | 17.7 µs   | 249.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.04 µs/iter  | 18.3 µs   | 101.8 µs  | 17.6 µs   | 1.54 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.32 µs/iter  | 19.7 µs   | 118.2 µs  | 18.8 µs   | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.78 µs/iter  | 20.2 µs   | 103.9 µs  | 19.4 µs   | 211.1 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.49 µs/iter  | 24.3 µs   | 45.8 µs   | 22.2 µs   | 1.33 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.78 µs/iter  | 37.1 µs   | 63.7 µs   | 35.1 µs   | 218.9 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.77 µs/iter  | 38.9 µs   | 386.2 µs  | 36.1 µs   | 894.59 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 48.71 µs/iter  | 45.7 µs   | 70.2 µs   | 43.9 µs   | 1.19 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 54.95 µs/iter  | 55.2 µs   | 157.2 µs  | 49.8 µs   | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 63.65 µs/iter  | 62.3 µs   | 172.5 µs  | 60.9 µs   | 232.6 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 125.38 µs/iter | 133.3 µs  | 151.19 µs | 117.4 µs  | 1.05 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 326.47 µs/iter | 329.4 µs  | 364.4 µs  | 317.8 µs  | 1.12 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 638.12 µs/iter | 605.09 µs | 1.16 ms   | 567.6 µs  | 1.47 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 639.91 µs/iter | 609.69 µs | 1.2 ms    | 580.5 µs  | 2.64 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 707.69 µs/iter | 765.39 µs | 889.49 µs | 625.49 µs | 1.19 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 753.08 µs/iter | 702.29 µs | 1.67 ms   | 678.19 µs | 1.98 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 759.54 µs/iter | 699.89 µs | 1.66 ms   | 677.09 µs | 4.08 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 765.8 µs/iter  | 734.19 µs | 1.22 ms   | 710.29 µs | 3.33 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 770.56 µs/iter | 720.79 µs | 1.68 ms   | 696.09 µs | 3.11 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.05 ms/iter   | 992.89 µs | 1.69 ms   | 935.79 µs | 4.94 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.12 ms/iter   | 1.03 ms   | 3.28 ms   | 1 ms      | 3.39 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.2 ms/iter    | 1.1 ms    | 2.71 ms   | 1.04 ms   | 2.79 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.32 ms/iter   | 1.21 ms   | 3.72 ms   | 1.17 ms   | 3.87 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.33 ms/iter   | 1.22 ms   | 3.73 ms   | 1.18 ms   | 3.86 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter   | 1.23 ms   | 3.77 ms   | 1.19 ms   | 3.84 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max         |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ----------- |
| bun 0.1.7 (x64-linux)                  | http      | 90,916.491/rps | 93,966.451 | 97,347.499 | 13,361.773 | 246,003.973 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 52,101.708/rps | 54,532.029 | 55,159.727 | 4,737.371  | 55,940.164  |
| node v18.7.0 (x64-linux)               | http      | 48,804.839/rps | 50,448.82  | 51,259.789 | 5,969.405  | 51,601.058  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 156.07 ns/iter | 154.59 ns | 198.27 ns | 149.59 ns | 291.44 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.98 ns/iter | 308.36 ns | 411 ns    | 300.63 ns | 950.52 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 326.95 ns/iter | 324.3 ns  | 363.06 ns | 321.21 ns | 382.63 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 85.83 ns/iter | 85.71 ns  | 110.73 ns | 72.58 ns  | 156.99 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 235 ns/iter   | 238.29 ns | 251.54 ns | 230.38 ns | 258.43 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 235.9 ns/iter | 237.07 ns | 250.67 ns | 228.42 ns | 254.5 ns  |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 85.83 ns/iter  | 85.71 ns  | 110.73 ns | 72.58 ns  | 156.99 ns |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 156.07 ns/iter | 154.59 ns | 198.27 ns | 149.59 ns | 291.44 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 235 ns/iter    | 238.29 ns | 251.54 ns | 230.38 ns | 258.43 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 235.9 ns/iter  | 237.07 ns | 250.67 ns | 228.42 ns | 254.5 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.98 ns/iter | 308.36 ns | 411 ns    | 300.63 ns | 950.52 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 326.95 ns/iter | 324.3 ns  | 363.06 ns | 321.21 ns | 382.63 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | ------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 33.71 ms/iter | 33.42 ms  | 36.79 ms  | 33 ms     | 36.79 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 98.98 ms/iter | 99.07 ms  | 99.66 ms  | 98.67 ms  | 99.66 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 248.4 ms/iter | 249.93 ms | 269.24 ms | 241.58 ms | 269.24 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------ | -------------- | -------- | --------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 98.03 µs/iter  | 96.9 µs  | 116.3 µs  | 92 µs    | 1.17 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 315.02 µs/iter | 314.4 µs | 333.8 µs  | 311 µs   | 800.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 421.34 µs/iter | 392.7 µs | 463.89 µs | 380.7 µs | 6.29 ms   |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | --------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 59.69 µs/iter  | 59.3 µs  | 74.3 µs   | 54.3 µs  | 547.2 µs  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.15 µs/iter | 153.6 µs | 166.9 µs  | 151.9 µs | 497.99 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 372.23 µs/iter | 337.8 µs | 548.19 µs | 327 µs   | 9.43 ms   |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 53.76 µs/iter  | 51 µs    | 77.5 µs  | 43.2 µs  | 706.29 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 107.98 µs/iter | 102.6 µs | 176.3 µs | 98 µs    | 1.65 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 319.62 µs/iter | 296.7 µs | 1.7 ms   | 261.8 µs | 5.85 ms   |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 174.91 µs/iter | 175.5 µs  | 190 µs    | 157.6 µs  | 686.49 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 460.66 µs/iter | 452.1 µs  | 522.89 µs | 446.19 µs | 4.55 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.01 ms/iter   | 893.69 µs | 6.47 ms   | 871.49 µs | 7.17 ms   |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 53.76 µs/iter  | 51 µs     | 77.5 µs   | 43.2 µs   | 706.29 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 59.69 µs/iter  | 59.3 µs   | 74.3 µs   | 54.3 µs   | 547.2 µs  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 98.03 µs/iter  | 96.9 µs   | 116.3 µs  | 92 µs     | 1.17 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 107.98 µs/iter | 102.6 µs  | 176.3 µs  | 98 µs     | 1.65 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.15 µs/iter | 153.6 µs  | 166.9 µs  | 151.9 µs  | 497.99 µs |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 174.91 µs/iter | 175.5 µs  | 190 µs    | 157.6 µs  | 686.49 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 315.02 µs/iter | 314.4 µs  | 333.8 µs  | 311 µs    | 800.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 319.62 µs/iter | 296.7 µs  | 1.7 ms    | 261.8 µs  | 5.85 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 372.23 µs/iter | 337.8 µs  | 548.19 µs | 327 µs    | 9.43 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 421.34 µs/iter | 392.7 µs  | 463.89 µs | 380.7 µs  | 6.29 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 460.66 µs/iter | 452.1 µs  | 522.89 µs | 446.19 µs | 4.55 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.01 ms/iter   | 893.69 µs | 6.47 ms   | 871.49 µs | 7.17 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 33.71 ms/iter  | 33.42 ms  | 36.79 ms  | 33 ms     | 36.79 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 98.98 ms/iter  | 99.07 ms  | 99.66 ms  | 98.67 ms  | 99.66 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 248.4 ms/iter  | 249.93 ms | 269.24 ms | 241.58 ms | 269.24 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 520.72 ns/iter | 518.87 ns | 667.55 ns | 437.58 ns | 1.89 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.4 µs/iter    | 1.44 µs   | 1.49 µs   | 1.26 µs   | 1.49 µs |
| bun 0.1.7 (x64-linux)                  | nanoid(36) | 1.88 µs/iter   | 1.88 µs   | 2 µs      | 1.84 µs   | 2 µs    |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------ | ------- | ------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello') | 2.33 µs/iter | 2.27 µs | 5.09 µs | 1.9 µs  | 5.09 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.14 µs/iter | 4.08 µs | 6.31 µs | 3.97 µs | 6.31 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.6 µs/iter | 11.5 µs | 13.1 µs | 6.5 µs  | 332.7 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.32 µs/iter  | 2.23 µs | 3.58 µs | 1.92 µs | 3.58 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter  | 8 µs    | 11.6 µs | 4.3 µs  | 881.99 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.92 µs/iter | 17 µs   | 20.3 µs | 11.1 µs | 327 µs    |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 2.32 µs/iter  | 2.23 µs | 3.58 µs | 1.92 µs | 3.58 µs   |
| bun 0.1.7 (x64-linux)                  | console.log('hello')             | 2.33 µs/iter  | 2.27 µs | 5.09 µs | 1.9 µs  | 5.09 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.14 µs/iter  | 4.08 µs | 6.31 µs | 3.97 µs | 6.31 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter  | 8 µs    | 11.6 µs | 4.3 µs  | 881.99 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.6 µs/iter  | 11.5 µs | 13.1 µs | 6.5 µs  | 332.7 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.92 µs/iter | 17 µs   | 20.3 µs | 11.1 µs | 327 µs    |

