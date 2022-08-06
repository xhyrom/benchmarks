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
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 581.89 ns/iter | 586.75 ns | 873.75 ns | 543.94 ns | 873.75 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.2 µs/iter    | 1.22 µs   | 2.33 µs   | 968.45 ns | 2.33 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.71 µs/iter   | 1.72 µs   | 2.64 µs   | 1.52 µs   | 2.64 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 616.36 ns/iter | 615.39 ns | 1.25 µs | 567.07 ns | 1.25 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.18 µs/iter   | 1.2 µs    | 2.25 µs | 915.85 ns | 2.25 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.75 µs/iter   | 1.74 µs   | 3.02 µs | 1.6 µs    | 3.02 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 573.78 ns/iter | 579.66 ns | 692.48 ns | 528.64 ns | 692.48 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.28 µs/iter   | 1.3 µs    | 2.19 µs   | 1.04 µs   | 2.19 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.56 µs/iter   | 1.57 µs   | 2.9 µs    | 1.48 µs   | 2.9 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 562.17 ns/iter | 565.14 ns | 699.45 ns | 534.22 ns | 699.45 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.16 µs/iter   | 1.06 µs   | 2.11 µs   | 991.39 ns | 2.11 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.57 µs/iter   | 1.58 µs   | 2.76 µs   | 1.47 µs   | 2.76 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 588.57 ns/iter | 592.99 ns | 614.16 ns | 562.4 ns | 614.16 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.18 µs/iter   | 1.09 µs   | 1.99 µs   | 1.02 µs  | 1.99 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.65 µs/iter   | 1.64 µs   | 3.06 µs   | 1.53 µs  | 3.06 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 587.52 ns/iter | 592.05 ns | 614.92 ns | 564.68 ns | 614.92 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.18 µs/iter   | 1.13 µs   | 1.96 µs   | 1.01 µs   | 1.96 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.03 µs/iter   | 2.06 µs   | 3.24 µs   | 1.86 µs   | 3.24 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 567.89 ns/iter | 569.71 ns | 610.67 ns | 542.53 ns | 610.67 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.04 µs/iter   | 985.48 ns | 1.72 µs   | 908.97 ns | 1.72 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.67 µs/iter   | 1.7 µs    | 1.74 µs   | 1.59 µs   | 1.74 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 569.04 ns/iter | 572.47 ns | 599.08 ns | 533.95 ns | 599.08 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.08 µs/iter   | 994.24 ns | 1.78 µs   | 945.53 ns | 1.78 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.67 µs/iter   | 1.69 µs   | 1.74 µs   | 1.6 µs    | 1.74 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 586.44 ns/iter | 592.55 ns | 660.38 ns | 554.87 ns | 660.38 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.07 µs/iter   | 987.05 ns | 1.78 µs   | 970.65 ns | 1.78 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.68 µs/iter   | 1.7 µs    | 1.83 µs   | 1.57 µs   | 1.83 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75     | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | ------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 15.94 µs/iter  | 14.5 µs | 31.6 µs   | 8.7 µs    | 1.18 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 28.71 µs/iter  | 26.4 µs | 150.31 µs | 22.3 µs   | 286.92 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 954.07 µs/iter | 1.03 ms | 1.26 ms   | 804.35 µs | 1.41 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | --------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 17.06 µs/iter | 15.6 µs | 35.3 µs   | 10.2 µs | 1.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 28.46 µs/iter | 26.3 µs | 146.51 µs | 22.1 µs | 653.14 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.55 ms/iter  | 1.44 ms | 3.12 ms   | 1.3 ms  | 3.58 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 12.56 µs/iter  | 11.5 µs   | 24.9 µs   | 8.8 µs    | 1.07 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 26.09 µs/iter  | 24.4 µs   | 101.11 µs | 19.4 µs   | 2.07 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 902.27 µs/iter | 839.25 µs | 1.58 ms   | 759.05 µs | 2.03 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 12.63 µs/iter  | 11.4 µs   | 26.1 µs | 9.1 µs    | 1.78 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 26.47 µs/iter  | 24.8 µs   | 54.6 µs | 21.6 µs   | 325.22 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 919.82 µs/iter | 839.25 µs | 2.4 ms  | 757.45 µs | 2.48 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75     | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 14.11 µs/iter | 12 µs   | 26.7 µs   | 9.3 µs    | 1.55 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 30.82 µs/iter | 29 µs   | 171.11 µs | 23.7 µs   | 955.06 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.12 ms/iter  | 1.05 ms | 2.38 ms   | 955.16 µs | 3.07 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75      | p99       | Min     | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | -------- | --------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 70.83 µs/iter | 47.6 µs  | 620.74 µs | 45.6 µs | 10.01 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 71.22 µs/iter | 68.31 µs | 248.51 µs | 62.2 µs | 386.92 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.62 ms/iter  | 1.46 ms  | 3.5 ms    | 1.33 ms | 4.17 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 26.32 µs/iter  | 21 µs     | 65.1 µs | 10.3 µs   | 5.78 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 26.61 µs/iter  | 24.8 µs   | 83 µs   | 21.2 µs   | 664.44 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 972.75 µs/iter | 901.46 µs | 2.44 ms | 817.95 µs | 2.68 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 26.91 µs/iter  | 21.3 µs   | 63.3 µs | 12.4 µs   | 7.55 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 27.38 µs/iter  | 26.2 µs   | 64.4 µs | 21.9 µs   | 651.44 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 995.94 µs/iter | 932.16 µs | 2.46 ms | 742.95 µs | 2.87 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 87.42 µs/iter  | 84.5 µs   | 298.12 µs | 77.31 µs  | 466.33 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 361.81 µs/iter | 333.12 µs | 1.41 ms   | 315.62 µs | 4.03 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 1.02 ms/iter   | 946.86 µs | 2.52 ms   | 863.45 µs | 2.76 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 484.58 ns/iter | 480.85 ns | 526.66 ns | 471.35 ns | 612.58 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 781.84 ns/iter | 778.86 ns | 1.53 µs   | 703.3 ns  | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.11 µs/iter   | 1.11 µs   | 1.79 µs   | 943.67 ns | 1.79 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 584.41 ns/iter | 582.16 ns | 619.64 ns | 573.03 ns | 619.64 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.06 µs/iter   | 972.31 ns | 1.78 µs   | 920.19 ns | 1.78 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.81 µs/iter   | 1.9 µs    | 2.42 µs   | 1.47 µs   | 2.42 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 481.48 ns/iter | 479.74 ns | 520.46 ns | 465.03 ns | 529.57 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 762.27 ns/iter | 766.53 ns | 1.02 µs   | 704.46 ns | 1.02 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.04 µs/iter   | 960.92 ns | 1.74 µs   | 940.82 ns | 1.74 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 485.73 ns/iter | 480.54 ns | 560.94 ns | 471.57 ns | 562.87 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 751.97 ns/iter | 768.21 ns | 986.43 ns | 700.78 ns | 986.43 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 999.83 ns/iter | 906.97 ns | 1.72 µs   | 888.07 ns | 1.72 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 612.73 ns/iter | 627.23 ns | 711.57 ns | 564.35 ns | 711.57 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.06 µs/iter   | 981.95 ns | 1.79 µs   | 954.47 ns | 1.79 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.99 µs/iter   | 1.99 µs   | 2.52 µs   | 1.86 µs   | 2.52 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 601.79 ns/iter | 612.29 ns | 734.45 ns | 567.36 ns | 734.45 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.15 µs/iter   | 1.06 µs   | 1.91 µs   | 1.04 µs   | 1.91 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.27 µs/iter   | 2.3 µs    | 2.56 µs   | 2.16 µs   | 2.56 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 483.29 ns/iter | 480.4 ns  | 526.38 ns | 461.49 ns | 552.07 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 798.2 ns/iter  | 797.92 ns | 1.42 µs   | 738.86 ns | 1.42 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.06 µs/iter   | 981.29 ns | 1.72 µs   | 955.06 ns | 1.72 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 485.53 ns/iter | 483.14 ns | 532.04 ns | 462.79 ns | 538.11 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 797.69 ns/iter | 798.19 ns | 1.53 µs   | 741.69 ns | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.04 µs/iter   | 955.32 ns | 1.76 µs   | 941.19 ns | 1.76 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 563.43 ns/iter | 569.03 ns | 623 ns  | 527.36 ns | 623 ns  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 996.73 ns/iter | 918.65 ns | 1.83 µs | 888.57 ns | 1.83 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.39 µs/iter   | 1.42 µs   | 1.74 µs | 1.3 µs    | 1.74 µs |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 18.11 µs/iter | 16.3 µs | 39.6 µs | 11.2 µs | 1.23 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 18.33 µs/iter | 17.9 µs | 37.7 µs | 14.2 µs | 333.92 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.88 ms/iter  | 1.69 ms | 5.47 ms | 1.45 ms | 11.1 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 17.77 µs/iter | 15.9 µs | 37.7 µs | 12 µs   | 2.82 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 31.77 µs/iter | 31 µs   | 51.3 µs | 25.9 µs | 418.83 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.59 ms/iter  | 1.48 ms | 4.78 ms | 1.25 ms | 5.11 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.59 µs/iter  | 1.62 µs | 1.76 µs   | 1.52 µs | 1.76 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 32.78 µs/iter | 31.9 µs | 98.51 µs  | 14 µs   | 1.74 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 55.13 µs/iter | 52.6 µs | 113.71 µs | 46.2 µs | 573.53 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 173.56 ns/iter | 171.61 ns | 197.31 ns | 156.79 ns | 204.86 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 483.4 ns/iter  | 490.87 ns | 725.93 ns | 441.51 ns | 844.59 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 32.47 µs/iter  | 31.4 µs   | 96.51 µs  | 13.9 µs   | 1.74 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.18 µs/iter  | 4.19 µs | 4.31 µs | 4.09 µs | 4.31 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 22.64 µs/iter | 22 µs   | 49 µs   | 18.9 µs | 633.34 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 33.84 µs/iter | 31.5 µs | 56.1 µs | 27.6 µs | 1.21 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 158.38 ns/iter | 156.71 ns | 179.71 ns | 137.61 ns | 199.27 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.82 µs/iter   | 1.81 µs   | 2.94 µs   | 1.7 µs    | 2.94 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.68 µs/iter | 165.21 µs | 193.71 µs | 136.51 µs | 1.25 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 17.82 µs/iter | 16 µs   | 39.8 µs | 9.3 µs  | 1.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 18.02 µs/iter | 16.9 µs | 35.6 µs | 14.1 µs | 366.52 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.99 ms/iter  | 1.75 ms | 6.71 ms | 1.55 ms | 7.56 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 17.98 µs/iter | 16.8 µs | 36 µs   | 14.2 µs | 328.82 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 18.28 µs/iter | 16.2 µs | 40.4 µs | 11 µs   | 1.33 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.94 ms/iter  | 1.75 ms | 6.72 ms | 1.54 ms | 7.36 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 651.03 ns/iter | 652.99 ns | 698.32 ns | 615.67 ns | 698.32 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 5.32 µs/iter   | 5.85 µs   | 6.68 µs   | 3.84 µs   | 6.68 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 64.69 µs/iter  | 59 µs     | 120.91 µs | 55.1 µs   | 1.35 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 158.38 ns/iter | 156.71 ns | 179.71 ns | 137.61 ns | 199.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 173.56 ns/iter | 171.61 ns | 197.31 ns | 156.79 ns | 204.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 481.48 ns/iter | 479.74 ns | 520.46 ns | 465.03 ns | 529.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 483.29 ns/iter | 480.4 ns  | 526.38 ns | 461.49 ns | 552.07 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 483.4 ns/iter  | 490.87 ns | 725.93 ns | 441.51 ns | 844.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 484.58 ns/iter | 480.85 ns | 526.66 ns | 471.35 ns | 612.58 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 485.53 ns/iter | 483.14 ns | 532.04 ns | 462.79 ns | 538.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 485.73 ns/iter | 480.54 ns | 560.94 ns | 471.57 ns | 562.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 562.17 ns/iter | 565.14 ns | 699.45 ns | 534.22 ns | 699.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 563.43 ns/iter | 569.03 ns | 623 ns    | 527.36 ns | 623 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 567.89 ns/iter | 569.71 ns | 610.67 ns | 542.53 ns | 610.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 569.04 ns/iter | 572.47 ns | 599.08 ns | 533.95 ns | 599.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 573.78 ns/iter | 579.66 ns | 692.48 ns | 528.64 ns | 692.48 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 581.89 ns/iter | 586.75 ns | 873.75 ns | 543.94 ns | 873.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 584.41 ns/iter | 582.16 ns | 619.64 ns | 573.03 ns | 619.64 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 586.44 ns/iter | 592.55 ns | 660.38 ns | 554.87 ns | 660.38 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 587.52 ns/iter | 592.05 ns | 614.92 ns | 564.68 ns | 614.92 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 588.57 ns/iter | 592.99 ns | 614.16 ns | 562.4 ns  | 614.16 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 601.79 ns/iter | 612.29 ns | 734.45 ns | 567.36 ns | 734.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 612.73 ns/iter | 627.23 ns | 711.57 ns | 564.35 ns | 711.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 616.36 ns/iter | 615.39 ns | 1.25 µs   | 567.07 ns | 1.25 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 651.03 ns/iter | 652.99 ns | 698.32 ns | 615.67 ns | 698.32 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 751.97 ns/iter | 768.21 ns | 986.43 ns | 700.78 ns | 986.43 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 762.27 ns/iter | 766.53 ns | 1.02 µs   | 704.46 ns | 1.02 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 781.84 ns/iter | 778.86 ns | 1.53 µs   | 703.3 ns  | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 797.69 ns/iter | 798.19 ns | 1.53 µs   | 741.69 ns | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 798.2 ns/iter  | 797.92 ns | 1.42 µs   | 738.86 ns | 1.42 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 996.73 ns/iter | 918.65 ns | 1.83 µs   | 888.57 ns | 1.83 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 999.83 ns/iter | 906.97 ns | 1.72 µs   | 888.07 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.04 µs/iter   | 955.32 ns | 1.76 µs   | 941.19 ns | 1.76 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.04 µs/iter   | 985.48 ns | 1.72 µs   | 908.97 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.04 µs/iter   | 960.92 ns | 1.74 µs   | 940.82 ns | 1.74 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.06 µs/iter   | 972.31 ns | 1.78 µs   | 920.19 ns | 1.78 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.06 µs/iter   | 981.95 ns | 1.79 µs   | 954.47 ns | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.06 µs/iter   | 981.29 ns | 1.72 µs   | 955.06 ns | 1.72 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.07 µs/iter   | 987.05 ns | 1.78 µs   | 970.65 ns | 1.78 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.08 µs/iter   | 994.24 ns | 1.78 µs   | 945.53 ns | 1.78 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.11 µs/iter   | 1.11 µs   | 1.79 µs   | 943.67 ns | 1.79 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.15 µs/iter   | 1.06 µs   | 1.91 µs   | 1.04 µs   | 1.91 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.16 µs/iter   | 1.06 µs   | 2.11 µs   | 991.39 ns | 2.11 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.18 µs/iter   | 1.13 µs   | 1.96 µs   | 1.01 µs   | 1.96 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.18 µs/iter   | 1.09 µs   | 1.99 µs   | 1.02 µs   | 1.99 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.18 µs/iter   | 1.2 µs    | 2.25 µs   | 915.85 ns | 2.25 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.2 µs/iter    | 1.22 µs   | 2.33 µs   | 968.45 ns | 2.33 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.28 µs/iter   | 1.3 µs    | 2.19 µs   | 1.04 µs   | 2.19 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.39 µs/iter   | 1.42 µs   | 1.74 µs   | 1.3 µs    | 1.74 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.56 µs/iter   | 1.57 µs   | 2.9 µs    | 1.48 µs   | 2.9 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.57 µs/iter   | 1.58 µs   | 2.76 µs   | 1.47 µs   | 2.76 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.59 µs/iter   | 1.62 µs   | 1.76 µs   | 1.52 µs   | 1.76 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.65 µs/iter   | 1.64 µs   | 3.06 µs   | 1.53 µs   | 3.06 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.67 µs/iter   | 1.69 µs   | 1.74 µs   | 1.6 µs    | 1.74 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.67 µs/iter   | 1.7 µs    | 1.74 µs   | 1.59 µs   | 1.74 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.68 µs/iter   | 1.7 µs    | 1.83 µs   | 1.57 µs   | 1.83 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.71 µs/iter   | 1.72 µs   | 2.64 µs   | 1.52 µs   | 2.64 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.75 µs/iter   | 1.74 µs   | 3.02 µs   | 1.6 µs    | 3.02 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.81 µs/iter   | 1.9 µs    | 2.42 µs   | 1.47 µs   | 2.42 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.82 µs/iter   | 1.81 µs   | 2.94 µs   | 1.7 µs    | 2.94 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.99 µs/iter   | 1.99 µs   | 2.52 µs   | 1.86 µs   | 2.52 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 2.03 µs/iter   | 2.06 µs   | 3.24 µs   | 1.86 µs   | 3.24 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.27 µs/iter   | 2.3 µs    | 2.56 µs   | 2.16 µs   | 2.56 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.18 µs/iter   | 4.19 µs   | 4.31 µs   | 4.09 µs   | 4.31 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 5.32 µs/iter   | 5.85 µs   | 6.68 µs   | 3.84 µs   | 6.68 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 12.56 µs/iter  | 11.5 µs   | 24.9 µs   | 8.8 µs    | 1.07 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 12.63 µs/iter  | 11.4 µs   | 26.1 µs   | 9.1 µs    | 1.78 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 14.11 µs/iter  | 12 µs     | 26.7 µs   | 9.3 µs    | 1.55 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 15.94 µs/iter  | 14.5 µs   | 31.6 µs   | 8.7 µs    | 1.18 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 17.06 µs/iter  | 15.6 µs   | 35.3 µs   | 10.2 µs   | 1.09 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 17.77 µs/iter  | 15.9 µs   | 37.7 µs   | 12 µs     | 2.82 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 17.82 µs/iter  | 16 µs     | 39.8 µs   | 9.3 µs    | 1.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 17.98 µs/iter  | 16.8 µs   | 36 µs     | 14.2 µs   | 328.82 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 18.02 µs/iter  | 16.9 µs   | 35.6 µs   | 14.1 µs   | 366.52 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 18.11 µs/iter  | 16.3 µs   | 39.6 µs   | 11.2 µs   | 1.23 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 18.28 µs/iter  | 16.2 µs   | 40.4 µs   | 11 µs     | 1.33 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 18.33 µs/iter  | 17.9 µs   | 37.7 µs   | 14.2 µs   | 333.92 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 22.64 µs/iter  | 22 µs     | 49 µs     | 18.9 µs   | 633.34 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 26.09 µs/iter  | 24.4 µs   | 101.11 µs | 19.4 µs   | 2.07 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 26.32 µs/iter  | 21 µs     | 65.1 µs   | 10.3 µs   | 5.78 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 26.47 µs/iter  | 24.8 µs   | 54.6 µs   | 21.6 µs   | 325.22 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 26.61 µs/iter  | 24.8 µs   | 83 µs     | 21.2 µs   | 664.44 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 26.91 µs/iter  | 21.3 µs   | 63.3 µs   | 12.4 µs   | 7.55 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 27.38 µs/iter  | 26.2 µs   | 64.4 µs   | 21.9 µs   | 651.44 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 28.46 µs/iter  | 26.3 µs   | 146.51 µs | 22.1 µs   | 653.14 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 28.71 µs/iter  | 26.4 µs   | 150.31 µs | 22.3 µs   | 286.92 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 30.82 µs/iter  | 29 µs     | 171.11 µs | 23.7 µs   | 955.06 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 31.77 µs/iter  | 31 µs     | 51.3 µs   | 25.9 µs   | 418.83 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 32.47 µs/iter  | 31.4 µs   | 96.51 µs  | 13.9 µs   | 1.74 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 32.78 µs/iter  | 31.9 µs   | 98.51 µs  | 14 µs     | 1.74 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 33.84 µs/iter  | 31.5 µs   | 56.1 µs   | 27.6 µs   | 1.21 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 55.13 µs/iter  | 52.6 µs   | 113.71 µs | 46.2 µs   | 573.53 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 64.69 µs/iter  | 59 µs     | 120.91 µs | 55.1 µs   | 1.35 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 70.83 µs/iter  | 47.6 µs   | 620.74 µs | 45.6 µs   | 10.01 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 71.22 µs/iter  | 68.31 µs  | 248.51 µs | 62.2 µs   | 386.92 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 87.42 µs/iter  | 84.5 µs   | 298.12 µs | 77.31 µs  | 466.33 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 156.68 µs/iter | 165.21 µs | 193.71 µs | 136.51 µs | 1.25 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 361.81 µs/iter | 333.12 µs | 1.41 ms   | 315.62 µs | 4.03 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 902.27 µs/iter | 839.25 µs | 1.58 ms   | 759.05 µs | 2.03 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 919.82 µs/iter | 839.25 µs | 2.4 ms    | 757.45 µs | 2.48 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 954.07 µs/iter | 1.03 ms   | 1.26 ms   | 804.35 µs | 1.41 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 972.75 µs/iter | 901.46 µs | 2.44 ms   | 817.95 µs | 2.68 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 995.94 µs/iter | 932.16 µs | 2.46 ms   | 742.95 µs | 2.87 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 1.02 ms/iter   | 946.86 µs | 2.52 ms   | 863.45 µs | 2.76 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.12 ms/iter   | 1.05 ms   | 2.38 ms   | 955.16 µs | 3.07 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.55 ms/iter   | 1.44 ms   | 3.12 ms   | 1.3 ms    | 3.58 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.59 ms/iter   | 1.48 ms   | 4.78 ms   | 1.25 ms   | 5.11 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.62 ms/iter   | 1.46 ms   | 3.5 ms    | 1.33 ms   | 4.17 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.88 ms/iter   | 1.69 ms   | 5.47 ms   | 1.45 ms   | 11.1 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.94 ms/iter   | 1.75 ms   | 6.72 ms   | 1.54 ms   | 7.36 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.99 ms/iter   | 1.75 ms   | 6.71 ms   | 1.55 ms   | 7.56 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 74,764.659/rps | 79,254.098 | 81,519.016 | 11,883.118 | 180,657.05 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 37,275.61/rps  | 41,154.234 | 42,901.255 | 4,918.256  | 43,206.327 |
| node v18.7.0 (x64-linux)               | http      | 31,877.675/rps | 34,398.711 | 35,484.615 | 4,865.8    | 35,685.704 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 187.6 ns/iter  | 187.79 ns | 273.55 ns | 165.18 ns | 369.36 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 393.58 ns/iter | 394.63 ns | 703.54 ns | 362.81 ns | 880.29 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 408.14 ns/iter | 414.43 ns | 549.88 ns | 386.97 ns | 554.45 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 107.42 ns/iter | 105.27 ns | 194.13 ns | 83.67 ns  | 315.42 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 303.74 ns/iter | 308.22 ns | 507.85 ns | 281.47 ns | 595.14 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 322.75 ns/iter | 318.38 ns | 761.2 ns  | 289.14 ns | 1.18 µs   |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 107.42 ns/iter | 105.27 ns | 194.13 ns | 83.67 ns  | 315.42 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 187.6 ns/iter  | 187.79 ns | 273.55 ns | 165.18 ns | 369.36 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 303.74 ns/iter | 308.22 ns | 507.85 ns | 281.47 ns | 595.14 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 322.75 ns/iter | 318.38 ns | 761.2 ns  | 289.14 ns | 1.18 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 393.58 ns/iter | 394.63 ns | 703.54 ns | 362.81 ns | 880.29 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 408.14 ns/iter | 414.43 ns | 549.88 ns | 386.97 ns | 554.45 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ---------------------- | -------------- | --------- | -------- | --------- | -------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders" | 43.87 ms/iter  | 43.67 ms  | 48.63 ms | 42.78 ms  | 48.63 ms |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 128.48 ms/iter | 131.61 ms | 133.8 ms | 124.07 ms | 133.8 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 276.87 ms/iter | 276.16 ms | 303.5 ms | 264.94 ms | 303.5 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products" | 122.3 µs/iter  | 119.61 µs | 149.11 µs | 106.31 µs | 1.3 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 392.3 µs/iter  | 373.62 µs | 1.01 ms   | 355.92 µs | 1.65 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 510.37 µs/iter | 464.53 µs | 820.65 µs | 436.23 µs | 9.77 ms |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 75.5 µs/iter   | 81.2 µs   | 99.81 µs  | 67.8 µs   | 840.55 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 198.42 µs/iter | 186.21 µs | 494.93 µs | 181.91 µs | 4.34 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 460.82 µs/iter | 407.82 µs | 566.24 µs | 390.82 µs | 10.19 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | ------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 80.82 µs/iter  | 74.4 µs   | 119.01 µs | 58.5 µs   | 1.14 ms |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 153.37 µs/iter | 135.31 µs | 455.23 µs | 127.01 µs | 4.28 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 429.73 µs/iter | 411.43 µs | 2.13 ms   | 333.82 µs | 8.74 ms |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 224.31 µs/iter | 224.11 µs | 254.01 µs | 200.31 µs | 825.35 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 532.02 µs/iter | 531.23 µs | 562.33 µs | 522.43 µs | 1.19 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.23 ms/iter   | 1.08 ms   | 9.01 ms   | 1.04 ms   | 10.96 ms  |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 75.5 µs/iter   | 81.2 µs   | 99.81 µs  | 67.8 µs   | 840.55 µs |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 80.82 µs/iter  | 74.4 µs   | 119.01 µs | 58.5 µs   | 1.14 ms   |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products"  | 122.3 µs/iter  | 119.61 µs | 149.11 µs | 106.31 µs | 1.3 ms    |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 153.37 µs/iter | 135.31 µs | 455.23 µs | 127.01 µs | 4.28 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 198.42 µs/iter | 186.21 µs | 494.93 µs | 181.91 µs | 4.34 ms   |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 224.31 µs/iter | 224.11 µs | 254.01 µs | 200.31 µs | 825.35 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 392.3 µs/iter  | 373.62 µs | 1.01 ms   | 355.92 µs | 1.65 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 429.73 µs/iter | 411.43 µs | 2.13 ms   | 333.82 µs | 8.74 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 460.82 µs/iter | 407.82 µs | 566.24 µs | 390.82 µs | 10.19 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 510.37 µs/iter | 464.53 µs | 820.65 µs | 436.23 µs | 9.77 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 532.02 µs/iter | 531.23 µs | 562.33 µs | 522.43 µs | 1.19 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.23 ms/iter   | 1.08 ms   | 9.01 ms   | 1.04 ms   | 10.96 ms  |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders"    | 43.87 ms/iter  | 43.67 ms  | 48.63 ms  | 42.78 ms  | 48.63 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 128.48 ms/iter | 131.61 ms | 133.8 ms  | 124.07 ms | 133.8 ms  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 276.87 ms/iter | 276.16 ms | 303.5 ms  | 264.94 ms | 303.5 ms  |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average       | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------- | ------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 812.6 ns/iter | 852.03 ns | 1.22 µs | 640.71 ns | 1.22 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.68 µs/iter  | 1.71 µs   | 1.82 µs | 1.56 µs   | 1.82 µs |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 2.27 µs/iter  | 2.33 µs   | 2.88 µs | 2.13 µs   | 2.88 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min    | Max     |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------ | ------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.85 µs/iter  | 2.6 µs  | 11.4 µs | 1.6 µs | 2.48 ms |
| node v18.7.0 (x64-linux)               | console.log('hello') | 5.11 µs/iter  | 6.9 µs  | 11.8 µs | 2.4 µs | 9.83 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.92 µs/iter | 13.9 µs | 25.1 µs | 7.4 µs | 3.01 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.93 µs/iter  | 2.75 µs | 7.19 µs | 2.36 µs | 7.19 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.25 µs/iter  | 9.7 µs  | 16 µs   | 5 µs    | 2.02 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 23.84 µs/iter | 21.7 µs | 68.9 µs | 13.8 µs | 4.44 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.85 µs/iter  | 2.6 µs  | 11.4 µs | 1.6 µs  | 2.48 ms |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.93 µs/iter  | 2.75 µs | 7.19 µs | 2.36 µs | 7.19 µs |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 5.11 µs/iter  | 6.9 µs  | 11.8 µs | 2.4 µs  | 9.83 ms |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.25 µs/iter  | 9.7 µs  | 16 µs   | 5 µs    | 2.02 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 13.92 µs/iter | 13.9 µs | 25.1 µs | 7.4 µs  | 3.01 ms |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 23.84 µs/iter | 21.7 µs | 68.9 µs | 13.8 µs | 4.44 ms |

