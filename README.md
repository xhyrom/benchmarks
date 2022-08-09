*Ran on Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz*

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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 621.03 ns/iter | 616.37 ns | 1.09 µs | 520.59 ns | 1.09 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.4 µs/iter    | 1.47 µs   | 2.29 µs | 1.15 µs   | 2.29 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.71 µs/iter   | 1.74 µs   | 2.6 µs  | 1.42 µs   | 2.6 µs  |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 610.88 ns/iter | 633.93 ns | 747.8 ns | 527.88 ns | 747.8 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.28 µs/iter   | 1.23 µs   | 2.7 µs   | 1 µs      | 2.7 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.92 µs/iter   | 1.95 µs   | 2.86 µs  | 1.67 µs   | 2.86 µs  |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average       | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 643.1 ns/iter | 687.38 ns | 1.29 µs | 537.93 ns | 1.29 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.42 µs/iter  | 1.49 µs   | 2.66 µs | 1.12 µs   | 2.66 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.73 µs/iter  | 1.8 µs    | 2.34 µs | 1.48 µs   | 2.34 µs |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 628.42 ns/iter | 634.99 ns | 1.12 µs | 539.33 ns | 1.12 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.47 µs/iter   | 1.37 µs   | 2.83 µs | 1.16 µs   | 2.83 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.69 µs/iter   | 1.76 µs   | 2.22 µs | 1.46 µs   | 2.22 µs |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 654.67 ns/iter | 681.34 ns | 1.08 µs | 534.36 ns | 1.08 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.58 µs/iter   | 1.55 µs   | 3.22 µs | 1.24 µs   | 3.22 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.79 µs/iter   | 1.82 µs   | 2.34 µs | 1.6 µs    | 2.34 µs |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99     | Min      | Max     |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | ------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 640.19 ns/iter | 652.26 ns | 1.02 µs | 547.7 ns | 1.02 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.52 µs/iter   | 1.6 µs    | 2.86 µs | 1.22 µs  | 2.86 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.26 µs/iter   | 2.3 µs    | 3.35 µs | 1.99 µs  | 3.35 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 594.34 ns/iter | 608.55 ns | 1 µs    | 534.95 ns | 1 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.35 µs/iter   | 1.4 µs    | 2.21 µs | 1.13 µs   | 2.21 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.73 µs/iter   | 1.78 µs   | 1.93 µs | 1.55 µs   | 1.93 µs |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 606.13 ns/iter | 611.4 ns | 883.9 ns | 541.6 ns | 883.9 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.38 µs/iter   | 1.36 µs  | 2.51 µs  | 1.1 µs   | 2.51 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.87 µs/iter   | 1.92 µs  | 2.48 µs  | 1.67 µs  | 2.48 µs  |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 622.17 ns/iter | 632.53 ns | 913.26 ns | 517.14 ns | 913.26 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.34 µs/iter   | 1.31 µs   | 2.23 µs   | 1.12 µs   | 2.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.83 µs/iter   | 1.84 µs   | 2.76 µs   | 1.64 µs   | 2.76 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average       | p75     | p99      | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------- | ------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 21.77 µs/iter | 16.7 µs | 77.1 µs  | 8.7 µs    | 4.49 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 28.4 µs/iter  | 23.8 µs | 154.2 µs | 18.5 µs   | 2.21 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 1.09 ms/iter  | 1.17 ms | 2.65 ms  | 774.51 µs | 3.85 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min     | Max      |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | ------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 23.32 µs/iter | 18.1 µs | 89.6 µs  | 9.9 µs  | 2.09 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 27.98 µs/iter | 23.1 µs | 148.3 µs | 18.3 µs | 4.78 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.53 ms/iter  | 1.44 ms | 3.33 ms  | 1.15 ms | 10.77 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 17.22 µs/iter  | 13.3 µs   | 63.7 µs | 8.4 µs    | 2.28 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 26.79 µs/iter  | 24.4 µs   | 151 µs  | 17.3 µs   | 1.76 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 970.17 µs/iter | 921.71 µs | 2.63 ms | 683.11 µs | 5.23 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 18.73 µs/iter  | 13.4 µs   | 65.9 µs  | 8.7 µs    | 7.18 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 28.21 µs/iter  | 25.1 µs   | 166.3 µs | 17.7 µs   | 2.45 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 939.67 µs/iter | 893.51 µs | 2.62 ms  | 679.01 µs | 3.67 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75     | p99      | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | -------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 23.84 µs/iter | 16.3 µs | 93.2 µs  | 10.8 µs   | 13.62 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 36.34 µs/iter | 32.6 µs | 205.8 µs | 25.4 µs   | 4.24 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.19 ms/iter  | 1.11 ms | 3.31 ms  | 848.81 µs | 8.56 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | --------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 74.03 µs/iter | 57.4 µs | 697.21 µs | 41 µs   | 2.24 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 78.71 µs/iter | 75.5 µs | 273.6 µs  | 57.5 µs | 3.42 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.73 ms/iter  | 1.59 ms | 4.5 ms    | 1.23 ms | 5.29 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average       | p75       | p99      | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 26.01 µs/iter | 23.3 µs   | 90.2 µs  | 9.6 µs    | 2.54 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 27.29 µs/iter | 24.1 µs   | 154.8 µs | 17.6 µs   | 4.75 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 1.01 ms/iter  | 982.21 µs | 2.11 ms  | 793.61 µs | 2.97 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average       | p75       | p99      | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | -------- | --------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 27.42 µs/iter | 24.9 µs   | 98.5 µs  | 10.1 µs   | 1.42 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 27.61 µs/iter | 25.3 µs   | 133.4 µs | 17.6 µs   | 4.47 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 1.04 ms/iter  | 987.51 µs | 2.65 ms  | 737.81 µs | 8.92 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 101.18 µs/iter | 99.4 µs   | 352 µs    | 70.6 µs   | 3.7 ms  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 362.52 µs/iter | 372.1 µs  | 813.61 µs | 276.1 µs  | 3.4 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 1.02 ms/iter   | 985.11 µs | 2.24 ms   | 749.31 µs | 6.06 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 521.27 ns/iter | 529.72 ns | 862.97 ns | 427.98 ns | 1.5 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 894.4 ns/iter  | 884.77 ns | 2.74 µs   | 725.77 ns | 2.74 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.35 µs/iter   | 1.53 µs   | 2.06 µs   | 1.06 µs   | 2.06 µs |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 639.53 ns/iter | 663.05 ns | 817.87 ns | 579.89 ns | 817.87 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.25 µs/iter   | 1.27 µs   | 2.26 µs   | 1.04 µs   | 2.26 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.86 µs/iter   | 2.02 µs   | 2.3 µs    | 1.56 µs   | 2.3 µs    |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 527.51 ns/iter | 535.65 ns | 717.94 ns | 443.56 ns | 1.5 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 836.71 ns/iter | 846.39 ns | 1.92 µs   | 726.74 ns | 1.92 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.28 µs/iter   | 1.21 µs   | 2.12 µs   | 1.07 µs   | 2.12 µs |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 544.38 ns/iter | 553.53 ns | 759.15 ns | 486.54 ns | 908.16 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 832.15 ns/iter | 840.52 ns | 1.37 µs   | 734.36 ns | 1.37 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.28 µs/iter   | 1.25 µs   | 2 µs      | 1.08 µs   | 2 µs      |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 827.76 ns/iter | 846.13 ns | 1.07 µs | 760.55 ns | 1.07 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.41 µs/iter   | 1.38 µs   | 2.27 µs | 1.2 µs    | 2.27 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.99 µs/iter   | 2.04 µs   | 2.34 µs | 1.82 µs   | 2.34 µs |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 741.63 ns/iter | 755.93 ns | 912.19 ns | 674.45 ns | 912.19 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.44 µs/iter   | 1.4 µs    | 2.23 µs   | 1.24 µs   | 2.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.25 µs/iter   | 2.31 µs   | 2.7 µs    | 1.98 µs   | 2.7 µs    |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 642.06 ns/iter | 658.32 ns | 877.1 ns | 583.32 ns | 877.1 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 855.16 ns/iter | 885.11 ns | 1.02 µs  | 767.56 ns | 1.02 µs  |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.23 µs/iter   | 1.18 µs   | 1.94 µs  | 1.07 µs   | 1.94 µs  |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 618.38 ns/iter | 633.48 ns | 1.09 µs | 531.58 ns | 1.09 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 855.8 ns/iter  | 860.07 ns | 1.38 µs | 772.55 ns | 1.38 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.24 µs/iter   | 1.22 µs   | 2.12 µs | 1.07 µs   | 2.12 µs |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 644.84 ns/iter | 658.83 ns | 799.14 ns | 557.88 ns | 799.14 ns |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1.21 µs/iter   | 1.16 µs   | 2.11 µs   | 1.01 µs   | 2.11 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.55 µs/iter   | 1.6 µs    | 2.23 µs   | 1.36 µs   | 2.23 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 17.75 µs/iter | 15.8 µs | 69.2 µs | 9.2 µs  | 3.7 ms  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 23.17 µs/iter | 19.1 µs | 87.3 µs | 8.7 µs  | 7.06 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.78 ms/iter  | 1.69 ms | 5.07 ms | 1.31 ms | 8.84 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 25.47 µs/iter | 18.9 µs | 109.8 µs | 11.5 µs | 8.71 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 32.25 µs/iter | 29.8 µs | 93.9 µs  | 22.9 µs | 4.27 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.59 ms/iter  | 1.49 ms | 4.88 ms  | 1.12 ms | 5.88 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.82 µs/iter  | 1.88 µs | 2.21 µs  | 1.64 µs | 2.21 µs |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 24.3 µs/iter  | 19.7 µs | 90.4 µs  | 11.2 µs | 5.81 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 51.86 µs/iter | 47.6 µs | 132.8 µs | 38.9 µs | 1.57 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 184.91 ns/iter | 195.46 ns | 281.41 ns | 150.98 ns | 293.95 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 515.04 ns/iter | 520.87 ns | 854.1 ns  | 430.53 ns | 1.26 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 22.6 µs/iter   | 19.2 µs   | 80.6 µs   | 10.4 µs   | 3.64 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.97 µs/iter  | 5.03 µs | 5.55 µs  | 4.69 µs | 5.55 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 26.16 µs/iter | 24.4 µs | 72.5 µs  | 18 µs   | 1.47 ms |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 42.88 µs/iter | 38 µs   | 121.6 µs | 29.8 µs | 3.57 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 163.24 ns/iter | 169.62 ns | 266.56 ns | 125.79 ns | 553.58 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.7 µs/iter    | 1.73 µs   | 2.23 µs   | 1.56 µs   | 2.23 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 166.15 µs/iter | 170.4 µs  | 298.1 µs  | 125.8 µs  | 4.6 ms    |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 17.25 µs/iter | 16 µs   | 57.5 µs | 8.8 µs  | 2.5 ms  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 23.62 µs/iter | 19.7 µs | 87.9 µs | 9.7 µs  | 2.57 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.85 ms/iter  | 1.7 ms  | 7.13 ms | 1.32 ms | 9.77 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 17.67 µs/iter | 16.4 µs | 70.9 µs | 9.8 µs  | 3.36 ms |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 23.3 µs/iter  | 19.7 µs | 84.7 µs | 10.7 µs | 3.3 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.75 ms/iter  | 1.66 ms | 5.77 ms | 1.33 ms | 6.21 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 773.35 ns/iter | 788.31 ns | 971.01 ns | 676.47 ns | 971.01 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 6.24 µs/iter   | 7.12 µs   | 7.89 µs   | 4.15 µs   | 7.89 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 76.45 µs/iter  | 74.5 µs   | 553.71 µs | 52.9 µs   | 2.14 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 163.24 ns/iter | 169.62 ns | 266.56 ns | 125.79 ns | 553.58 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 184.91 ns/iter | 195.46 ns | 281.41 ns | 150.98 ns | 293.95 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 515.04 ns/iter | 520.87 ns | 854.1 ns  | 430.53 ns | 1.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 521.27 ns/iter | 529.72 ns | 862.97 ns | 427.98 ns | 1.5 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 527.51 ns/iter | 535.65 ns | 717.94 ns | 443.56 ns | 1.5 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 544.38 ns/iter | 553.53 ns | 759.15 ns | 486.54 ns | 908.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 594.34 ns/iter | 608.55 ns | 1 µs      | 534.95 ns | 1 µs      |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 606.13 ns/iter | 611.4 ns  | 883.9 ns  | 541.6 ns  | 883.9 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 610.88 ns/iter | 633.93 ns | 747.8 ns  | 527.88 ns | 747.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 618.38 ns/iter | 633.48 ns | 1.09 µs   | 531.58 ns | 1.09 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 621.03 ns/iter | 616.37 ns | 1.09 µs   | 520.59 ns | 1.09 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 622.17 ns/iter | 632.53 ns | 913.26 ns | 517.14 ns | 913.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 628.42 ns/iter | 634.99 ns | 1.12 µs   | 539.33 ns | 1.12 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 639.53 ns/iter | 663.05 ns | 817.87 ns | 579.89 ns | 817.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 640.19 ns/iter | 652.26 ns | 1.02 µs   | 547.7 ns  | 1.02 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 642.06 ns/iter | 658.32 ns | 877.1 ns  | 583.32 ns | 877.1 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 643.1 ns/iter  | 687.38 ns | 1.29 µs   | 537.93 ns | 1.29 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 644.84 ns/iter | 658.83 ns | 799.14 ns | 557.88 ns | 799.14 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 654.67 ns/iter | 681.34 ns | 1.08 µs   | 534.36 ns | 1.08 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 741.63 ns/iter | 755.93 ns | 912.19 ns | 674.45 ns | 912.19 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 773.35 ns/iter | 788.31 ns | 971.01 ns | 676.47 ns | 971.01 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 827.76 ns/iter | 846.13 ns | 1.07 µs   | 760.55 ns | 1.07 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 832.15 ns/iter | 840.52 ns | 1.37 µs   | 734.36 ns | 1.37 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 836.71 ns/iter | 846.39 ns | 1.92 µs   | 726.74 ns | 1.92 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 855.16 ns/iter | 885.11 ns | 1.02 µs   | 767.56 ns | 1.02 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 855.8 ns/iter  | 860.07 ns | 1.38 µs   | 772.55 ns | 1.38 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 894.4 ns/iter  | 884.77 ns | 2.74 µs   | 725.77 ns | 2.74 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1.21 µs/iter   | 1.16 µs   | 2.11 µs   | 1.01 µs   | 2.11 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.23 µs/iter   | 1.18 µs   | 1.94 µs   | 1.07 µs   | 1.94 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.24 µs/iter   | 1.22 µs   | 2.12 µs   | 1.07 µs   | 2.12 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.25 µs/iter   | 1.27 µs   | 2.26 µs   | 1.04 µs   | 2.26 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.28 µs/iter   | 1.25 µs   | 2 µs      | 1.08 µs   | 2 µs      |
| bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.28 µs/iter   | 1.21 µs   | 2.12 µs   | 1.07 µs   | 2.12 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.28 µs/iter   | 1.23 µs   | 2.7 µs    | 1 µs      | 2.7 µs    |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.34 µs/iter   | 1.31 µs   | 2.23 µs   | 1.12 µs   | 2.23 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.35 µs/iter   | 1.53 µs   | 2.06 µs   | 1.06 µs   | 2.06 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.35 µs/iter   | 1.4 µs    | 2.21 µs   | 1.13 µs   | 2.21 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.38 µs/iter   | 1.36 µs   | 2.51 µs   | 1.1 µs    | 2.51 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.4 µs/iter    | 1.47 µs   | 2.29 µs   | 1.15 µs   | 2.29 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.41 µs/iter   | 1.38 µs   | 2.27 µs   | 1.2 µs    | 2.27 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.42 µs/iter   | 1.49 µs   | 2.66 µs   | 1.12 µs   | 2.66 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.44 µs/iter   | 1.4 µs    | 2.23 µs   | 1.24 µs   | 2.23 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.47 µs/iter   | 1.37 µs   | 2.83 µs   | 1.16 µs   | 2.83 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.52 µs/iter   | 1.6 µs    | 2.86 µs   | 1.22 µs   | 2.86 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.55 µs/iter   | 1.6 µs    | 2.23 µs   | 1.36 µs   | 2.23 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.58 µs/iter   | 1.55 µs   | 3.22 µs   | 1.24 µs   | 3.22 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.69 µs/iter   | 1.76 µs   | 2.22 µs   | 1.46 µs   | 2.22 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.7 µs/iter    | 1.73 µs   | 2.23 µs   | 1.56 µs   | 2.23 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.71 µs/iter   | 1.74 µs   | 2.6 µs    | 1.42 µs   | 2.6 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.73 µs/iter   | 1.8 µs    | 2.34 µs   | 1.48 µs   | 2.34 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.73 µs/iter   | 1.78 µs   | 1.93 µs   | 1.55 µs   | 1.93 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.79 µs/iter   | 1.82 µs   | 2.34 µs   | 1.6 µs    | 2.34 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.82 µs/iter   | 1.88 µs   | 2.21 µs   | 1.64 µs   | 2.21 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.83 µs/iter   | 1.84 µs   | 2.76 µs   | 1.64 µs   | 2.76 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.86 µs/iter   | 2.02 µs   | 2.3 µs    | 1.56 µs   | 2.3 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.87 µs/iter   | 1.92 µs   | 2.48 µs   | 1.67 µs   | 2.48 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.92 µs/iter   | 1.95 µs   | 2.86 µs   | 1.67 µs   | 2.86 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.99 µs/iter   | 2.04 µs   | 2.34 µs   | 1.82 µs   | 2.34 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.25 µs/iter   | 2.31 µs   | 2.7 µs    | 1.98 µs   | 2.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 2.26 µs/iter   | 2.3 µs    | 3.35 µs   | 1.99 µs   | 3.35 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.97 µs/iter   | 5.03 µs   | 5.55 µs   | 4.69 µs   | 5.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 6.24 µs/iter   | 7.12 µs   | 7.89 µs   | 4.15 µs   | 7.89 µs   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 17.22 µs/iter  | 13.3 µs   | 63.7 µs   | 8.4 µs    | 2.28 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 17.25 µs/iter  | 16 µs     | 57.5 µs   | 8.8 µs    | 2.5 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 17.67 µs/iter  | 16.4 µs   | 70.9 µs   | 9.8 µs    | 3.36 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 17.75 µs/iter  | 15.8 µs   | 69.2 µs   | 9.2 µs    | 3.7 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 18.73 µs/iter  | 13.4 µs   | 65.9 µs   | 8.7 µs    | 7.18 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 21.77 µs/iter  | 16.7 µs   | 77.1 µs   | 8.7 µs    | 4.49 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 22.6 µs/iter   | 19.2 µs   | 80.6 µs   | 10.4 µs   | 3.64 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 23.17 µs/iter  | 19.1 µs   | 87.3 µs   | 8.7 µs    | 7.06 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 23.3 µs/iter   | 19.7 µs   | 84.7 µs   | 10.7 µs   | 3.3 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 23.32 µs/iter  | 18.1 µs   | 89.6 µs   | 9.9 µs    | 2.09 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 23.62 µs/iter  | 19.7 µs   | 87.9 µs   | 9.7 µs    | 2.57 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 23.84 µs/iter  | 16.3 µs   | 93.2 µs   | 10.8 µs   | 13.62 ms  |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 24.3 µs/iter   | 19.7 µs   | 90.4 µs   | 11.2 µs   | 5.81 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 25.47 µs/iter  | 18.9 µs   | 109.8 µs  | 11.5 µs   | 8.71 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 26.01 µs/iter  | 23.3 µs   | 90.2 µs   | 9.6 µs    | 2.54 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.16 µs/iter  | 24.4 µs   | 72.5 µs   | 18 µs     | 1.47 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 26.79 µs/iter  | 24.4 µs   | 151 µs    | 17.3 µs   | 1.76 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 27.29 µs/iter  | 24.1 µs   | 154.8 µs  | 17.6 µs   | 4.75 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 27.42 µs/iter  | 24.9 µs   | 98.5 µs   | 10.1 µs   | 1.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 27.61 µs/iter  | 25.3 µs   | 133.4 µs  | 17.6 µs   | 4.47 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 27.98 µs/iter  | 23.1 µs   | 148.3 µs  | 18.3 µs   | 4.78 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 28.21 µs/iter  | 25.1 µs   | 166.3 µs  | 17.7 µs   | 2.45 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 28.4 µs/iter   | 23.8 µs   | 154.2 µs  | 18.5 µs   | 2.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 32.25 µs/iter  | 29.8 µs   | 93.9 µs   | 22.9 µs   | 4.27 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 36.34 µs/iter  | 32.6 µs   | 205.8 µs  | 25.4 µs   | 4.24 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 42.88 µs/iter  | 38 µs     | 121.6 µs  | 29.8 µs   | 3.57 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 51.86 µs/iter  | 47.6 µs   | 132.8 µs  | 38.9 µs   | 1.57 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 74.03 µs/iter  | 57.4 µs   | 697.21 µs | 41 µs     | 2.24 ms   |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 76.45 µs/iter  | 74.5 µs   | 553.71 µs | 52.9 µs   | 2.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 78.71 µs/iter  | 75.5 µs   | 273.6 µs  | 57.5 µs   | 3.42 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 101.18 µs/iter | 99.4 µs   | 352 µs    | 70.6 µs   | 3.7 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 166.15 µs/iter | 170.4 µs  | 298.1 µs  | 125.8 µs  | 4.6 ms    |
| bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 362.52 µs/iter | 372.1 µs  | 813.61 µs | 276.1 µs  | 3.4 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 939.67 µs/iter | 893.51 µs | 2.62 ms   | 679.01 µs | 3.67 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 970.17 µs/iter | 921.71 µs | 2.63 ms   | 683.11 µs | 5.23 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 1.01 ms/iter   | 982.21 µs | 2.11 ms   | 793.61 µs | 2.97 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 1.02 ms/iter   | 985.11 µs | 2.24 ms   | 749.31 µs | 6.06 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 1.04 ms/iter   | 987.51 µs | 2.65 ms   | 737.81 µs | 8.92 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 1.09 ms/iter   | 1.17 ms   | 2.65 ms   | 774.51 µs | 3.85 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.19 ms/iter   | 1.11 ms   | 3.31 ms   | 848.81 µs | 8.56 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.53 ms/iter   | 1.44 ms   | 3.33 ms   | 1.15 ms   | 10.77 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.59 ms/iter   | 1.49 ms   | 4.88 ms   | 1.12 ms   | 5.88 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.73 ms/iter   | 1.59 ms   | 4.5 ms    | 1.23 ms   | 5.29 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.75 ms/iter   | 1.66 ms   | 5.77 ms   | 1.33 ms   | 6.21 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.78 ms/iter   | 1.69 ms   | 5.07 ms   | 1.31 ms   | 8.84 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.85 ms/iter   | 1.7 ms    | 7.13 ms   | 1.32 ms   | 9.77 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.7 (x64-linux)                  | http      | 62,693.795/rps | 69,060.339 | 74,309.026 | 11,672.825 | 74,849.449 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 30,588.199/rps | 33,493.914 | 35,958.82  | 4,252.428  | 36,533.153 |
| node v18.7.0 (x64-linux)               | http      | 18,328.638/rps | 19,973.354 | 21,191.273 | 2,955.378  | 21,924.626 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 207.56 ns/iter | 205.39 ns | 514.01 ns | 166.76 ns | 668.53 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 434.83 ns/iter | 440.93 ns | 922.22 ns | 373 ns    | 999.79 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 446.08 ns/iter | 452.18 ns | 774.16 ns | 375.53 ns | 869.33 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 125.67 ns/iter | 128.39 ns | 226.76 ns | 98.87 ns  | 448.89 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 330.41 ns/iter | 335.29 ns | 600.17 ns | 274.08 ns | 689.2 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 342.26 ns/iter | 342.68 ns | 630.44 ns | 293.63 ns | 728.26 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 125.67 ns/iter | 128.39 ns | 226.76 ns | 98.87 ns  | 448.89 ns |
| bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 207.56 ns/iter | 205.39 ns | 514.01 ns | 166.76 ns | 668.53 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 330.41 ns/iter | 335.29 ns | 600.17 ns | 274.08 ns | 689.2 ns  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 342.26 ns/iter | 342.68 ns | 630.44 ns | 293.63 ns | 728.26 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 434.83 ns/iter | 440.93 ns | 922.22 ns | 373 ns    | 999.79 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 446.08 ns/iter | 452.18 ns | 774.16 ns | 375.53 ns | 869.33 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 48.83 ms/iter  | 49.84 ms  | 55.92 ms  | 45.82 ms  | 55.92 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 130.44 ms/iter | 133.69 ms | 138.7 ms  | 126.96 ms | 138.7 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 306.61 ms/iter | 307.18 ms | 333.82 ms | 291.42 ms | 333.82 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min      | Max      |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | -------- | -------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 142.86 µs/iter | 145.3 µs  | 301.1 µs  | 100.7 µs | 2.07 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 422.24 µs/iter | 422.1 µs  | 841.31 µs | 301.6 µs | 10.74 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 595.95 µs/iter | 570.81 µs | 1.57 ms   | 425 µs   | 10.96 ms |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99      | Min      | Max     |
| -------------------------------------- | ------------------------- | -------------- | --------- | -------- | -------- | ------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 89.33 µs/iter  | 93.8 µs   | 188.5 µs | 62.6 µs  | 3 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 207.07 µs/iter | 210.4 µs  | 411.7 µs | 153.7 µs | 1.95 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 555.75 µs/iter | 514.31 µs | 1.73 ms  | 382.2 µs | 9.7 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min      | Max     |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | -------- | ------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 99.11 µs/iter  | 101.7 µs  | 335.7 µs  | 62.2 µs  | 1.48 ms |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 180.21 µs/iter | 174.5 µs  | 713.11 µs | 112.9 µs | 7.16 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 515.33 µs/iter | 495.21 µs | 2.47 ms   | 346.7 µs | 9.67 ms |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | -------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 259.52 µs/iter | 264.9 µs  | 505.31 µs | 192.8 µs  | 1.93 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 583.59 µs/iter | 604.11 µs | 1.01 ms   | 457.61 µs | 2.07 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.43 ms/iter   | 1.25 ms   | 9.84 ms   | 934.21 µs | 13.41 ms |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 89.33 µs/iter  | 93.8 µs   | 188.5 µs  | 62.6 µs   | 3 ms      |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 99.11 µs/iter  | 101.7 µs  | 335.7 µs  | 62.2 µs   | 1.48 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 142.86 µs/iter | 145.3 µs  | 301.1 µs  | 100.7 µs  | 2.07 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 180.21 µs/iter | 174.5 µs  | 713.11 µs | 112.9 µs  | 7.16 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 207.07 µs/iter | 210.4 µs  | 411.7 µs  | 153.7 µs  | 1.95 ms   |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 259.52 µs/iter | 264.9 µs  | 505.31 µs | 192.8 µs  | 1.93 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 422.24 µs/iter | 422.1 µs  | 841.31 µs | 301.6 µs  | 10.74 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 515.33 µs/iter | 495.21 µs | 2.47 ms   | 346.7 µs  | 9.67 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 555.75 µs/iter | 514.31 µs | 1.73 ms   | 382.2 µs  | 9.7 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 583.59 µs/iter | 604.11 µs | 1.01 ms   | 457.61 µs | 2.07 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 595.95 µs/iter | 570.81 µs | 1.57 ms   | 425 µs    | 10.96 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.43 ms/iter   | 1.25 ms   | 9.84 ms   | 934.21 µs | 13.41 ms  |
| bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 48.83 ms/iter  | 49.84 ms  | 55.92 ms  | 45.82 ms  | 55.92 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 130.44 ms/iter | 133.69 ms | 138.7 ms  | 126.96 ms | 138.7 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 306.61 ms/iter | 307.18 ms | 333.82 ms | 291.42 ms | 333.82 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 712.93 ns/iter | 723.63 ns | 943.91 ns | 645.61 ns | 943.91 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.85 µs/iter   | 1.93 µs   | 2.34 µs   | 1.7 µs    | 2.34 µs   |
| bun 0.1.7 (x64-linux)                  | nanoid(36) | 2.35 µs/iter   | 2.35 µs   | 3.06 µs   | 2.13 µs   | 3.06 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min    | Max     |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------ | ------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello') | 3.14 µs/iter  | 2.7 µs  | 19.1 µs | 1.5 µs | 6.65 ms |
| node v18.7.0 (x64-linux)               | console.log('hello') | 6.06 µs/iter  | 7.4 µs  | 24.8 µs | 2.4 µs | 8.8 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 17.15 µs/iter | 16.8 µs | 49.6 µs | 7.5 µs | 7.66 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 3.32 µs/iter  | 3.43 µs | 3.81 µs  | 2.93 µs | 3.81 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 12.13 µs/iter | 12.2 µs | 39 µs    | 5.3 µs  | 1.79 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 31.65 µs/iter | 29.3 µs | 109.5 µs | 16.9 µs | 2.99 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- | ------- | ------- |
| bun 0.1.7 (x64-linux)                  | console.log('hello')             | 3.14 µs/iter  | 2.7 µs  | 19.1 µs  | 1.5 µs  | 6.65 ms |
| bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 3.32 µs/iter  | 3.43 µs | 3.81 µs  | 2.93 µs | 3.81 µs |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 6.06 µs/iter  | 7.4 µs  | 24.8 µs  | 2.4 µs  | 8.8 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 12.13 µs/iter | 12.2 µs | 39 µs    | 5.3 µs  | 1.79 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 17.15 µs/iter | 16.8 µs | 49.6 µs  | 7.5 µs  | 7.66 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 31.65 µs/iter | 29.3 µs | 109.5 µs | 16.9 µs | 2.99 ms |

