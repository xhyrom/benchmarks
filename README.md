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
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 463.84 ns/iter | 452.29 ns | 470.51 ns | 515.26 ns | 613.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 997.02 ns/iter | 859.05 ns | 940.6 ns  | 1.7 µs    | 1.7 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.38 µs/iter   | 1.3 µs    | 1.39 µs   | 2.24 µs   | 2.24 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 484.26 ns/iter | 472.64 ns | 487.79 ns | 595.49 ns | 642.33 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 947.95 ns/iter | 835.27 ns | 871.26 ns | 1.69 µs   | 1.69 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.39 µs/iter   | 1.29 µs   | 1.4 µs    | 2.07 µs   | 2.07 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 465.5 ns/iter | 459.83 ns | 469.87 ns | 483.31 ns | 485.1 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.06 µs/iter  | 932.72 ns | 976.26 ns | 1.78 µs   | 1.78 µs  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.32 µs/iter  | 1.26 µs   | 1.33 µs   | 1.65 µs   | 1.65 µs  |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 470.99 ns/iter | 464.51 ns | 474.73 ns | 492.72 ns | 497.34 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.03 µs/iter   | 907.39 ns | 932.44 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.29 µs/iter   | 1.25 µs   | 1.31 µs   | 1.52 µs   | 1.52 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 496.15 ns/iter | 489.33 ns | 500.54 ns | 509.74 ns | 510.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.08 µs/iter   | 961.03 ns | 995.25 ns | 1.84 µs   | 1.84 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.37 µs/iter   | 1.32 µs   | 1.39 µs   | 1.49 µs   | 1.49 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 487.66 ns/iter | 480.36 ns | 492.18 ns | 500.04 ns | 501.66 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.11 µs/iter   | 961.87 ns | 1.03 µs   | 1.92 µs   | 1.92 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.72 µs/iter   | 1.65 µs   | 1.79 µs   | 1.89 µs   | 1.89 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 468.53 ns/iter | 462.71 ns | 468.32 ns | 493.23 ns | 496.49 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.09 µs/iter   | 950.82 ns | 1.01 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.34 µs/iter   | 1.29 µs   | 1.36 µs   | 1.39 µs   | 1.39 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 468.32 ns/iter | 455.42 ns | 469.56 ns | 493.76 ns | 513.25 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.09 µs/iter   | 963.06 ns | 994.45 ns | 1.86 µs   | 1.86 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.33 µs/iter   | 1.28 µs   | 1.35 µs   | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 481.65 ns/iter | 469.12 ns | 488.59 ns | 494.08 ns | 497.29 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.04 µs/iter   | 926.5 ns  | 943.93 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.32 µs/iter   | 1.29 µs   | 1.33 µs   | 1.5 µs    | 1.5 µs    |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min     | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 14.28 µs/iter  | 6.7 µs    | 13.5 µs   | 25.5 µs | 1.26 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.34 µs/iter  | 19 µs     | 20.4 µs   | 120 µs  | 218.1 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 817.28 µs/iter | 725.42 µs | 892.12 µs | 1.1 ms  | 1.37 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15.65 µs/iter | 8.2 µs  | 14.6 µs | 34.5 µs  | 1.92 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.64 µs/iter | 17.9 µs | 20.7 µs | 120.7 µs | 712.11 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.34 ms/iter  | 1.18 ms | 1.25 ms | 2.64 ms  | 2.81 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 11.54 µs/iter  | 7 µs      | 11.2 µs   | 19.3 µs | 865.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 20.11 µs/iter  | 15.5 µs   | 18.7 µs   | 61.4 µs | 2.23 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 806.86 µs/iter | 702.22 µs | 750.52 µs | 1.4 ms  | 1.82 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 11.22 µs/iter  | 7 µs      | 11.3 µs   | 19.4 µs | 557.01 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 21.29 µs/iter  | 17.1 µs   | 20.4 µs   | 65.2 µs | 527.81 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 772.96 µs/iter | 661.32 µs | 730.42 µs | 1.51 ms | 2.42 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 12.23 µs/iter | 7.5 µs    | 12.1 µs   | 21.8 µs  | 535.16 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.88 µs/iter | 18.6 µs   | 21.4 µs   | 143.4 µs | 1.01 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 914.1 µs/iter | 839.12 µs | 881.32 µs | 1.51 ms  | 1.57 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | ------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 57.51 µs/iter | 40.7 µs | 44.6 µs | 557.26 µs | 608.87 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 59.36 µs/iter | 52 µs   | 57.3 µs | 200.5 µs  | 348.51 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.4 ms/iter   | 1.21 ms | 1.26 ms | 3.26 ms   | 3.28 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 11.78 µs/iter | 6.8 µs    | 11.7 µs   | 22.1 µs | 1.02 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 21.91 µs/iter | 17.2 µs   | 20.6 µs   | 54.5 µs | 3.71 ms |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 780 µs/iter   | 716.22 µs | 749.02 µs | 1.43 ms | 1.49 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 12.59 µs/iter  | 7 µs      | 12.5 µs   | 26.7 µs | 757.72 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 23.45 µs/iter  | 18.5 µs   | 22.4 µs   | 43.2 µs | 594.61 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 832.74 µs/iter | 720.82 µs | 788.22 µs | 1.91 ms | 2.3 ms    |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 74.2 µs/iter   | 69.1 µs   | 71.8 µs   | 257.91 µs | 373.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 274.32 µs/iter | 262.31 µs | 268.41 µs | 770.12 µs | 1.1 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 891.83 µs/iter | 796.92 µs | 825.32 µs | 2 ms      | 5.45 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 411.62 ns/iter | 401.85 ns | 407.66 ns | 452.01 ns | 477.33 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 642.57 ns/iter | 628.73 ns | 650.94 ns | 792.95 ns | 792.95 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1 µs/iter      | 865.39 ns | 893.5 ns  | 1.7 µs    | 1.7 µs    |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 488.88 ns/iter | 479.53 ns | 485.27 ns | 528.88 ns | 529.86 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 969.63 ns/iter | 866.85 ns | 886.24 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.4 µs/iter    | 1.22 µs   | 1.58 µs   | 1.78 µs   | 1.78 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 407.97 ns/iter | 398.72 ns | 404.87 ns | 446.54 ns | 448.54 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 628.02 ns/iter | 610.88 ns | 635.25 ns | 1.08 µs   | 1.08 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.01 µs/iter   | 886.7 ns  | 911.71 ns | 1.72 µs   | 1.72 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 412.98 ns/iter | 399.68 ns | 406.02 ns | 480.77 ns | 502.55 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 613.86 ns/iter | 601.27 ns | 626.52 ns | 655.51 ns | 655.51 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 944.41 ns/iter | 838.37 ns | 851.9 ns  | 1.65 µs   | 1.65 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 498.52 ns/iter | 476.95 ns | 496.92 ns | 630.62 ns | 721.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 986.02 ns/iter | 872.19 ns | 898.39 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.49 µs/iter   | 1.47 µs   | 1.5 µs    | 1.61 µs   | 1.61 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 503.8 ns/iter | 474.08 ns | 515.72 ns | 565.91 ns | 569.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.06 µs/iter  | 939.1 ns  | 959.48 ns | 1.83 µs   | 1.83 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.74 µs/iter  | 1.72 µs   | 1.76 µs   | 1.88 µs   | 1.88 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 411.82 ns/iter | 400.57 ns | 407.91 ns | 455.01 ns | 455.04 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 649.65 ns/iter | 638.05 ns | 659.56 ns | 704.94 ns | 704.94 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 981.34 ns/iter | 877.27 ns | 892.36 ns | 1.75 µs   | 1.75 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 412.83 ns/iter | 402.92 ns | 409.55 ns | 454.17 ns | 457.04 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 649.88 ns/iter | 639.22 ns | 660.79 ns | 672.64 ns | 672.64 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1 µs/iter      | 876.51 ns | 897.03 ns | 1.74 µs   | 1.74 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 473.48 ns/iter | 457.25 ns | 475.99 ns | 521.29 ns | 536.62 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 948.32 ns/iter | 834.88 ns | 854.35 ns | 1.69 µs   | 1.69 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.09 µs   | 1.12 µs   | 1.17 µs   | 1.17 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.63 µs/iter | 10.1 µs | 13 µs   | 27.2 µs | 291.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 19.6 µs/iter  | 11.2 µs | 17.2 µs | 38.7 µs | 3.09 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.54 ms/iter  | 1.37 ms | 1.4 ms  | 4.53 ms | 4.64 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75    | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------ | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 17.08 µs/iter | 8.6 µs | 15.8 µs | 36.1 µs | 3.08 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 23.92 µs/iter | 20 µs  | 23.3 µs | 37.9 µs | 304.81 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.37 ms/iter  | 1.2 ms | 1.24 ms | 4.02 ms | 4.18 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.3 µs/iter   | 1.21 µs | 1.33 µs | 1.61 µs  | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 28.89 µs/iter | 11 µs   | 26.3 µs | 100.4 µs | 3.35 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 47.65 µs/iter | 42 µs   | 46.5 µs | 83 µs    | 361.01 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 142.71 ns/iter | 137.13 ns | 141.69 ns | 157.67 ns | 160.21 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 388.42 ns/iter | 376.9 ns  | 397.2 ns  | 445.32 ns | 523.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 30.91 µs/iter  | 11.3 µs   | 27.8 µs   | 108.9 µs  | 2.6 ms    |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.49 µs/iter  | 3.47 µs | 3.49 µs | 3.56 µs | 3.56 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 17.93 µs/iter | 16.4 µs | 18 µs   | 24.2 µs | 353.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 31.46 µs/iter | 25.7 µs | 28.9 µs | 53.1 µs | 8.25 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 131.47 ns/iter | 125.03 ns | 130.48 ns | 147.6 ns | 171.08 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.33 µs/iter   | 1.3 µs    | 1.33 µs   | 1.42 µs  | 1.42 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 133.19 µs/iter | 120.1 µs  | 140.4 µs  | 172 µs   | 1.61 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 13.19 µs/iter | 9.4 µs  | 12.9 µs | 26.2 µs | 265.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 16.73 µs/iter | 9.7 µs  | 16.4 µs | 36.8 µs | 2 ms      |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.57 ms/iter  | 1.41 ms | 1.44 ms | 4.57 ms | 4.76 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 12.9 µs/iter  | 9.6 µs  | 12.4 µs | 25.3 µs | 264.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 17.47 µs/iter | 10.9 µs | 16.6 µs | 39.1 µs | 2.35 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.63 ms/iter  | 1.4 ms  | 1.45 ms | 6.95 ms | 8.04 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 547.5 ns/iter | 539.06 ns | 546.19 ns | 570.32 ns | 589.98 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.31 µs/iter  | 3.02 µs   | 4.79 µs   | 5.4 µs    | 5.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 55.73 µs/iter | 48.8 µs   | 50.3 µs   | 122.9 µs  | 1.69 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 131.47 ns/iter | 125.03 ns | 130.48 ns | 147.6 ns  | 171.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 142.71 ns/iter | 137.13 ns | 141.69 ns | 157.67 ns | 160.21 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 388.42 ns/iter | 376.9 ns  | 397.2 ns  | 445.32 ns | 523.69 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 407.97 ns/iter | 398.72 ns | 404.87 ns | 446.54 ns | 448.54 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 411.62 ns/iter | 401.85 ns | 407.66 ns | 452.01 ns | 477.33 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 411.82 ns/iter | 400.57 ns | 407.91 ns | 455.01 ns | 455.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 412.83 ns/iter | 402.92 ns | 409.55 ns | 454.17 ns | 457.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 412.98 ns/iter | 399.68 ns | 406.02 ns | 480.77 ns | 502.55 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 463.84 ns/iter | 452.29 ns | 470.51 ns | 515.26 ns | 613.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 465.5 ns/iter  | 459.83 ns | 469.87 ns | 483.31 ns | 485.1 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 468.32 ns/iter | 455.42 ns | 469.56 ns | 493.76 ns | 513.25 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 468.53 ns/iter | 462.71 ns | 468.32 ns | 493.23 ns | 496.49 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 470.99 ns/iter | 464.51 ns | 474.73 ns | 492.72 ns | 497.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 473.48 ns/iter | 457.25 ns | 475.99 ns | 521.29 ns | 536.62 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 481.65 ns/iter | 469.12 ns | 488.59 ns | 494.08 ns | 497.29 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 484.26 ns/iter | 472.64 ns | 487.79 ns | 595.49 ns | 642.33 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 487.66 ns/iter | 480.36 ns | 492.18 ns | 500.04 ns | 501.66 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 488.88 ns/iter | 479.53 ns | 485.27 ns | 528.88 ns | 529.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 496.15 ns/iter | 489.33 ns | 500.54 ns | 509.74 ns | 510.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 498.52 ns/iter | 476.95 ns | 496.92 ns | 630.62 ns | 721.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 503.8 ns/iter  | 474.08 ns | 515.72 ns | 565.91 ns | 569.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 547.5 ns/iter  | 539.06 ns | 546.19 ns | 570.32 ns | 589.98 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 613.86 ns/iter | 601.27 ns | 626.52 ns | 655.51 ns | 655.51 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 628.02 ns/iter | 610.88 ns | 635.25 ns | 1.08 µs   | 1.08 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 642.57 ns/iter | 628.73 ns | 650.94 ns | 792.95 ns | 792.95 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 649.65 ns/iter | 638.05 ns | 659.56 ns | 704.94 ns | 704.94 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 649.88 ns/iter | 639.22 ns | 660.79 ns | 672.64 ns | 672.64 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 944.41 ns/iter | 838.37 ns | 851.9 ns  | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 947.95 ns/iter | 835.27 ns | 871.26 ns | 1.69 µs   | 1.69 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 948.32 ns/iter | 834.88 ns | 854.35 ns | 1.69 µs   | 1.69 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 969.63 ns/iter | 866.85 ns | 886.24 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 981.34 ns/iter | 877.27 ns | 892.36 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 986.02 ns/iter | 872.19 ns | 898.39 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 997.02 ns/iter | 859.05 ns | 940.6 ns  | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1 µs/iter      | 865.39 ns | 893.5 ns  | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1 µs/iter      | 876.51 ns | 897.03 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.01 µs/iter   | 886.7 ns  | 911.71 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.03 µs/iter   | 907.39 ns | 932.44 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.04 µs/iter   | 926.5 ns  | 943.93 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.06 µs/iter   | 939.1 ns  | 959.48 ns | 1.83 µs   | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.06 µs/iter   | 932.72 ns | 976.26 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.08 µs/iter   | 961.03 ns | 995.25 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.09 µs/iter   | 950.82 ns | 1.01 µs   | 1.89 µs   | 1.89 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.09 µs/iter   | 963.06 ns | 994.45 ns | 1.86 µs   | 1.86 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.09 µs   | 1.12 µs   | 1.17 µs   | 1.17 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.11 µs/iter   | 961.87 ns | 1.03 µs   | 1.92 µs   | 1.92 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.29 µs/iter   | 1.25 µs   | 1.31 µs   | 1.52 µs   | 1.52 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.3 µs/iter    | 1.21 µs   | 1.33 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.32 µs/iter   | 1.26 µs   | 1.33 µs   | 1.65 µs   | 1.65 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.32 µs/iter   | 1.29 µs   | 1.33 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.33 µs/iter   | 1.3 µs    | 1.33 µs   | 1.42 µs   | 1.42 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.33 µs/iter   | 1.28 µs   | 1.35 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.34 µs/iter   | 1.29 µs   | 1.36 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.37 µs/iter   | 1.32 µs   | 1.39 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.38 µs/iter   | 1.3 µs    | 1.39 µs   | 2.24 µs   | 2.24 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.39 µs/iter   | 1.29 µs   | 1.4 µs    | 2.07 µs   | 2.07 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.4 µs/iter    | 1.22 µs   | 1.58 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.49 µs/iter   | 1.47 µs   | 1.5 µs    | 1.61 µs   | 1.61 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.72 µs/iter   | 1.65 µs   | 1.79 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.74 µs/iter   | 1.72 µs   | 1.76 µs   | 1.88 µs   | 1.88 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.49 µs/iter   | 3.47 µs   | 3.49 µs   | 3.56 µs   | 3.56 µs   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.31 µs/iter   | 3.02 µs   | 4.79 µs   | 5.4 µs    | 5.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 11.22 µs/iter  | 7 µs      | 11.3 µs   | 19.4 µs   | 557.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 11.54 µs/iter  | 7 µs      | 11.2 µs   | 19.3 µs   | 865.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 11.78 µs/iter  | 6.8 µs    | 11.7 µs   | 22.1 µs   | 1.02 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 12.23 µs/iter  | 7.5 µs    | 12.1 µs   | 21.8 µs   | 535.16 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 12.59 µs/iter  | 7 µs      | 12.5 µs   | 26.7 µs   | 757.72 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 12.9 µs/iter   | 9.6 µs    | 12.4 µs   | 25.3 µs   | 264.81 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 13.19 µs/iter  | 9.4 µs    | 12.9 µs   | 26.2 µs   | 265.31 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.63 µs/iter  | 10.1 µs   | 13 µs     | 27.2 µs   | 291.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 14.28 µs/iter  | 6.7 µs    | 13.5 µs   | 25.5 µs   | 1.26 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15.65 µs/iter  | 8.2 µs    | 14.6 µs   | 34.5 µs   | 1.92 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 16.73 µs/iter  | 9.7 µs    | 16.4 µs   | 36.8 µs   | 2 ms      |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 17.08 µs/iter  | 8.6 µs    | 15.8 µs   | 36.1 µs   | 3.08 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 17.47 µs/iter  | 10.9 µs   | 16.6 µs   | 39.1 µs   | 2.35 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 17.93 µs/iter  | 16.4 µs   | 18 µs     | 24.2 µs   | 353.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 19.6 µs/iter   | 11.2 µs   | 17.2 µs   | 38.7 µs   | 3.09 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 20.11 µs/iter  | 15.5 µs   | 18.7 µs   | 61.4 µs   | 2.23 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 21.29 µs/iter  | 17.1 µs   | 20.4 µs   | 65.2 µs   | 527.81 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 21.91 µs/iter  | 17.2 µs   | 20.6 µs   | 54.5 µs   | 3.71 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.34 µs/iter  | 19 µs     | 20.4 µs   | 120 µs    | 218.1 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.64 µs/iter  | 17.9 µs   | 20.7 µs   | 120.7 µs  | 712.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.88 µs/iter  | 18.6 µs   | 21.4 µs   | 143.4 µs  | 1.01 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 23.45 µs/iter  | 18.5 µs   | 22.4 µs   | 43.2 µs   | 594.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 23.92 µs/iter  | 20 µs     | 23.3 µs   | 37.9 µs   | 304.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 28.89 µs/iter  | 11 µs     | 26.3 µs   | 100.4 µs  | 3.35 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 30.91 µs/iter  | 11.3 µs   | 27.8 µs   | 108.9 µs  | 2.6 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 31.46 µs/iter  | 25.7 µs   | 28.9 µs   | 53.1 µs   | 8.25 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 47.65 µs/iter  | 42 µs     | 46.5 µs   | 83 µs     | 361.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 55.73 µs/iter  | 48.8 µs   | 50.3 µs   | 122.9 µs  | 1.69 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 57.51 µs/iter  | 40.7 µs   | 44.6 µs   | 557.26 µs | 608.87 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 59.36 µs/iter  | 52 µs     | 57.3 µs   | 200.5 µs  | 348.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 74.2 µs/iter   | 69.1 µs   | 71.8 µs   | 257.91 µs | 373.81 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 133.19 µs/iter | 120.1 µs  | 140.4 µs  | 172 µs    | 1.61 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 274.32 µs/iter | 262.31 µs | 268.41 µs | 770.12 µs | 1.1 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 772.96 µs/iter | 661.32 µs | 730.42 µs | 1.51 ms   | 2.42 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 780 µs/iter    | 716.22 µs | 749.02 µs | 1.43 ms   | 1.49 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 806.86 µs/iter | 702.22 µs | 750.52 µs | 1.4 ms    | 1.82 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 817.28 µs/iter | 725.42 µs | 892.12 µs | 1.1 ms    | 1.37 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 832.74 µs/iter | 720.82 µs | 788.22 µs | 1.91 ms   | 2.3 ms    |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 891.83 µs/iter | 796.92 µs | 825.32 µs | 2 ms      | 5.45 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 914.1 µs/iter  | 839.12 µs | 881.32 µs | 1.51 ms   | 1.57 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.34 ms/iter   | 1.18 ms   | 1.25 ms   | 2.64 ms   | 2.81 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.37 ms/iter   | 1.2 ms    | 1.24 ms   | 4.02 ms   | 4.18 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.4 ms/iter    | 1.21 ms   | 1.26 ms   | 3.26 ms   | 3.28 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.54 ms/iter   | 1.37 ms   | 1.4 ms    | 4.53 ms   | 4.64 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.57 ms/iter   | 1.41 ms   | 1.44 ms   | 4.57 ms   | 4.76 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.63 ms/iter   | 1.4 ms    | 1.45 ms   | 6.95 ms   | 8.04 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.5 (x64-linux)                  | http      | 86,733.665/rps | 10,935.728 | 90,069.939 | 92,096.356 | 95,366.761 |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | http      | 46,988.694/rps | 4,497.705  | 49,576.889 | 50,615.002 | 51,087.522 |
| node v18.7.0 (x64-linux)               | http      | 38,104.697/rps | 6,316.082  | 40,589.881 | 41,768.115 | 42,359.383 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.59 ns/iter | 152.04 ns | 155.98 ns | 208.92 ns | 293.46 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 309.81 ns/iter | 302.93 ns | 312.63 ns | 335.68 ns | 349.74 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 332.27 ns/iter | 316.22 ns | 344.65 ns | 358.93 ns | 377.19 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.16 ns/iter | 233.41 ns | 241.83 ns | 257.75 ns | 265.47 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 249.22 ns/iter | 240.03 ns | 250.14 ns | 266.86 ns | 269.31 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 386.51 ns/iter | 359.62 ns | 385.94 ns | 471.38 ns | 492.6 ns  |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.59 ns/iter | 152.04 ns | 155.98 ns | 208.92 ns | 293.46 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 238.16 ns/iter | 233.41 ns | 241.83 ns | 257.75 ns | 265.47 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 249.22 ns/iter | 240.03 ns | 250.14 ns | 266.86 ns | 269.31 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 309.81 ns/iter | 302.93 ns | 312.63 ns | 335.68 ns | 349.74 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 332.27 ns/iter | 316.22 ns | 344.65 ns | 358.93 ns | 377.19 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 386.51 ns/iter | 359.62 ns | 385.94 ns | 471.38 ns | 492.6 ns  |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 642.15 ns/iter | 537.25 ns | 686.14 ns | 695.78 ns | 695.78 ns |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.48 µs/iter   | 1.31 µs   | 1.51 µs   | 2.18 µs   | 2.18 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.82 µs/iter   | 1.78 µs   | 1.83 µs   | 2.04 µs   | 2.04 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.19 µs/iter  | 1.65 µs | 2.13 µs | 4.69 µs | 4.69 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.39 µs/iter  | 2.6 µs  | 6.3 µs  | 9.2 µs  | 1.32 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.81 µs/iter | 6.5 µs  | 12.3 µs | 15 µs   | 232.83 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 2.03 µs | 2.27 µs | 3.18 µs | 3.18 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7 µs/iter     | 4.5 µs  | 8.4 µs  | 12.6 µs | 1.92 ms  |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.29 µs/iter | 11.6 µs | 18.3 µs | 24.1 µs | 645.4 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.19 µs/iter  | 1.65 µs | 2.13 µs | 4.69 µs | 4.69 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.24 µs/iter  | 2.03 µs | 2.27 µs | 3.18 µs | 3.18 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.39 µs/iter  | 2.6 µs  | 6.3 µs  | 9.2 µs  | 1.32 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7 µs/iter     | 4.5 µs  | 8.4 µs  | 12.6 µs | 1.92 ms   |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.81 µs/iter | 6.5 µs  | 12.3 µs | 15 µs   | 232.83 µs |
| deno 1.24.1 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.29 µs/iter | 11.6 µs | 18.3 µs | 24.1 µs | 645.4 µs  |

