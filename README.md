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
| Runtime                                | Benchmark                              | Average        | p75       | p99      | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | -------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 466.02 ns/iter | 464.27 ns | 685.7 ns | 447.42 ns | 1.03 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 933.64 ns/iter | 862.54 ns | 1.73 µs  | 799.46 ns | 1.73 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.27 µs/iter   | 1.29 µs   | 2.04 µs  | 1.16 µs   | 2.04 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 500.58 ns/iter | 497.94 ns | 599.82 ns | 484.85 ns | 1.2 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 894.26 ns/iter | 835.82 ns | 1.57 µs   | 773.69 ns | 1.57 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.34 µs/iter   | 1.34 µs   | 1.91 µs   | 1.23 µs   | 1.91 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 464.6 ns/iter  | 468.61 ns | 490.27 ns | 457.7 ns  | 506.99 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 989.59 ns/iter | 916.66 ns | 1.63 µs   | 869.06 ns | 1.63 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.24 µs/iter   | 1.26 µs   | 1.36 µs   | 1.12 µs   | 1.36 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 466.7 ns/iter  | 466.31 ns | 491.72 ns | 460.38 ns | 501.43 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 939.84 ns/iter | 868.48 ns | 1.59 µs   | 822.27 ns | 1.59 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.25 µs/iter   | 1.28 µs   | 1.51 µs   | 1.2 µs    | 1.51 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 490.65 ns/iter | 495.21 ns | 505.76 ns | 484.44 ns | 516.44 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64') | 968.92 ns/iter | 909.52 ns | 1.64 µs   | 846.44 ns | 1.64 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.32 µs/iter   | 1.33 µs   | 1.41 µs   | 1.28 µs   | 1.41 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 485.96 ns/iter | 490.28 ns | 524.58 ns | 480.31 ns | 547.04 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 982.95 ns/iter | 922.07 ns | 1.65 µs   | 840.89 ns | 1.65 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.58 µs/iter   | 1.59 µs   | 1.74 µs   | 1.54 µs   | 1.74 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 463.47 ns/iter | 462.63 ns | 488 ns  | 458.45 ns | 491.23 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 927.81 ns/iter | 850.35 ns | 1.58 µs | 828.79 ns | 1.58 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.27 µs/iter   | 1.3 µs    | 1.36 µs | 1.23 µs   | 1.36 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 466.41 ns/iter | 470.43 ns | 510.13 ns | 452.69 ns | 520.37 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary') | 919.86 ns/iter | 849.77 ns | 1.56 µs   | 807.22 ns | 1.56 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.28 µs/iter   | 1.3 µs    | 1.37 µs   | 1.22 µs   | 1.37 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 488.77 ns/iter | 493.06 ns | 511.1 ns | 477.41 ns | 512.08 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex') | 916.56 ns/iter | 847.64 ns | 1.57 µs  | 820.21 ns | 1.57 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.3 µs/iter    | 1.31 µs   | 1.35 µs  | 1.25 µs   | 1.35 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average       | p75       | p99      | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------- | --------- | -------- | --------- | ------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.03 µs/iter | 10.4 µs   | 22.2 µs  | 6.6 µs    | 1.12 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.36 µs/iter | 20.3 µs   | 118.9 µs | 18.3 µs   | 1.19 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 817.2 µs/iter | 907.02 µs | 1.1 ms   | 687.22 µs | 1.25 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15 µs/iter    | 14.5 µs | 32.8 µs  | 8.7 µs  | 941.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.33 µs/iter | 20.3 µs | 118.8 µs | 18 µs   | 208.5 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.33 ms/iter  | 1.24 ms | 2.59 ms  | 1.16 ms | 2.67 ms   |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 11.11 µs/iter  | 10.9 µs   | 20.6 µs | 7.6 µs    | 929.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.67 µs/iter  | 18.4 µs   | 56.5 µs | 16.7 µs   | 1.47 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 804.52 µs/iter | 741.72 µs | 1.72 ms | 698.72 µs | 1.93 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 11.43 µs/iter  | 11.6 µs   | 21.3 µs | 7.6 µs    | 976.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 20.3 µs/iter   | 19.2 µs   | 60.3 µs | 16.7 µs   | 519 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 799.28 µs/iter | 740.72 µs | 1.88 ms | 709.22 µs | 3.5 ms    |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64') | 11.53 µs/iter  | 11 µs     | 21.1 µs  | 7.2 µs    | 924.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.36 µs/iter  | 20.6 µs   | 131.9 µs | 18.7 µs   | 1.39 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 984.86 µs/iter | 919.13 µs | 1.92 ms  | 885.22 µs | 4.17 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | -------- | ------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 53.69 µs/iter | 39.8 µs | 544 µs   | 37.9 µs | 1.08 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 55.57 µs/iter | 54.4 µs | 165.6 µs | 51.5 µs | 273.3 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.4 ms/iter   | 1.28 ms | 2.91 ms  | 1.24 ms | 2.93 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 18.36 µs/iter  | 16.4 µs   | 31.1 µs | 7.5 µs    | 4.31 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 19.74 µs/iter  | 19.1 µs   | 39.5 µs | 15.8 µs   | 541.2 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 855.38 µs/iter | 793.32 µs | 1.94 ms | 765.22 µs | 2.94 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary') | 18.78 µs/iter  | 16.8 µs   | 51.3 µs | 7.6 µs    | 2.1 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 21.71 µs/iter  | 21.3 µs   | 39.8 µs | 17.4 µs   | 289.8 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 870.11 µs/iter | 794.42 µs | 2.03 ms | 762.62 µs | 5.08 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 71.56 µs/iter  | 70.4 µs   | 208.8 µs | 64.8 µs   | 329.3 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex') | 276.21 µs/iter | 270.3 µs  | 445.9 µs | 263.6 µs  | 1.94 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 885.38 µs/iter | 824.92 µs | 1.99 ms  | 792.02 µs | 2.11 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 401.66 ns/iter | 399.23 ns | 433.73 ns | 392.76 ns | 531.86 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 640.1 ns/iter  | 650.26 ns | 772.21 ns | 624.09 ns | 772.21 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 943.63 ns/iter | 926.68 ns | 1.54 µs   | 822.18 ns | 1.54 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 487.91 ns/iter | 487.23 ns | 516.12 ns | 478.06 ns | 517.9 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 852.24 ns/iter | 784.89 ns | 1.48 µs   | 767.33 ns | 1.48 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.26 µs/iter   | 1.39 µs   | 1.54 µs   | 1.07 µs   | 1.54 µs  |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 406.06 ns/iter | 405.75 ns | 439.61 ns | 396 ns    | 443.99 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 628.59 ns/iter | 635.53 ns | 1.12 µs   | 611.93 ns | 1.12 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 903.99 ns/iter | 831.17 ns | 1.54 µs   | 783.24 ns | 1.54 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 399.81 ns/iter | 399.54 ns | 425.37 ns | 392.1 ns  | 433 ns    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 611.02 ns/iter | 622.77 ns | 646.94 ns | 599.22 ns | 646.94 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 884.44 ns/iter | 807.53 ns | 1.48 µs   | 796.14 ns | 1.48 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 498.86 ns/iter | 498.71 ns | 539.72 ns | 478.58 ns | 798.58 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 899.18 ns/iter | 840.77 ns | 1.54 µs   | 788.79 ns | 1.54 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.43 µs/iter   | 1.44 µs   | 1.54 µs   | 1.41 µs   | 1.54 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 530.39 ns/iter | 527.85 ns | 566.54 ns | 521.94 ns | 566.95 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 980.54 ns/iter | 922.5 ns  | 1.69 µs   | 853.46 ns | 1.69 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.74 µs/iter   | 1.75 µs   | 1.85 µs   | 1.72 µs   | 1.85 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 406.87 ns/iter | 404.25 ns | 441.17 ns | 398.46 ns | 441.81 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 648.8 ns/iter  | 658.54 ns | 714.6 ns  | 636.24 ns | 714.6 ns  |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 911.21 ns/iter | 879.88 ns | 1.56 µs   | 789.6 ns  | 1.56 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 408.37 ns/iter | 405.39 ns | 447.59 ns | 401.46 ns | 448.67 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 649.11 ns/iter | 659.98 ns | 691.44 ns | 637.43 ns | 691.44 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 937.56 ns/iter | 868.27 ns | 1.53 µs   | 851.36 ns | 1.53 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 467.57 ns/iter | 469.97 ns | 506.11 ns | 449.93 ns | 509.7 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 882.29 ns/iter | 825.89 ns | 1.54 µs   | 746.83 ns | 1.54 µs  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.12 µs/iter   | 1.13 µs   | 1.16 µs   | 1.1 µs    | 1.16 µs  |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.3 µs/iter  | 12.8 µs | 26.5 µs | 9.8 µs  | 264.9 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 13.83 µs/iter | 12.4 µs | 31.4 µs | 7.5 µs  | 2.01 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.56 ms/iter  | 1.41 ms | 4.6 ms  | 1.37 ms | 4.68 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 14.99 µs/iter | 14.5 µs | 32.1 µs | 9.1 µs  | 5.46 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 24.45 µs/iter | 24 µs   | 37.8 µs | 20.4 µs | 374.3 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.36 ms/iter  | 1.24 ms | 4.08 ms | 1.2 ms  | 4.17 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.28 µs/iter  | 1.3 µs  | 1.5 µs  | 1.21 µs | 1.5 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 14.18 µs/iter | 13 µs   | 34.8 µs | 7.9 µs  | 1.46 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 45.8 µs/iter  | 44.9 µs | 84.2 µs | 41.7 µs | 329.4 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 143.93 ns/iter | 142.76 ns | 160.99 ns | 138.82 ns | 162.58 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 378.63 ns/iter | 376.3 ns  | 403.03 ns | 370.57 ns | 404.04 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 14.6 µs/iter   | 13.4 µs   | 36.4 µs   | 8 µs      | 1.06 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.52 µs/iter | 3.53 µs | 3.59 µs | 3.49 µs | 3.59 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 18.1 µs/iter | 18.1 µs | 24.5 µs | 16.5 µs | 561.11 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 29.8 µs/iter | 28 µs   | 50.3 µs | 23.1 µs | 1.14 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.76 ns/iter | 128.87 ns | 146.03 ns | 124.62 ns | 153.71 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.28 µs/iter   | 1.29 µs   | 1.32 µs   | 1.26 µs   | 1.32 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 127.87 µs/iter | 124.8 µs  | 150.4 µs  | 123 µs    | 1.22 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min    | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------ | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 13.49 µs/iter | 13.1 µs | 26.9 µs | 9.9 µs | 289.11 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 14.32 µs/iter | 12.8 µs | 38.5 µs | 8.1 µs | 1.21 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.58 ms/iter  | 1.44 ms | 4.61 ms | 1.4 ms | 4.69 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min    | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------ | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 13.68 µs/iter | 13.1 µs | 27.8 µs | 9.2 µs | 847.02 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 14.87 µs/iter | 13.3 µs | 47.9 µs | 8.4 µs | 1.28 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.59 ms/iter  | 1.44 ms | 4.63 ms | 1.4 ms | 4.75 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 550.02 ns/iter | 550.04 ns | 572.83 ns | 526.12 ns | 583.94 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.46 µs/iter   | 4.97 µs   | 5.55 µs   | 2.74 µs   | 5.55 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 53.16 µs/iter  | 47.6 µs   | 92.1 µs   | 44.4 µs   | 1.32 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 129.76 ns/iter | 128.87 ns | 146.03 ns | 124.62 ns | 153.71 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 143.93 ns/iter | 142.76 ns | 160.99 ns | 138.82 ns | 162.58 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 378.63 ns/iter | 376.3 ns  | 403.03 ns | 370.57 ns | 404.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 399.81 ns/iter | 399.54 ns | 425.37 ns | 392.1 ns  | 433 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 401.66 ns/iter | 399.23 ns | 433.73 ns | 392.76 ns | 531.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 406.06 ns/iter | 405.75 ns | 439.61 ns | 396 ns    | 443.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 406.87 ns/iter | 404.25 ns | 441.17 ns | 398.46 ns | 441.81 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 408.37 ns/iter | 405.39 ns | 447.59 ns | 401.46 ns | 448.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 463.47 ns/iter | 462.63 ns | 488 ns    | 458.45 ns | 491.23 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 464.6 ns/iter  | 468.61 ns | 490.27 ns | 457.7 ns  | 506.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 466.02 ns/iter | 464.27 ns | 685.7 ns  | 447.42 ns | 1.03 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 466.41 ns/iter | 470.43 ns | 510.13 ns | 452.69 ns | 520.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 466.7 ns/iter  | 466.31 ns | 491.72 ns | 460.38 ns | 501.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 467.57 ns/iter | 469.97 ns | 506.11 ns | 449.93 ns | 509.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 485.96 ns/iter | 490.28 ns | 524.58 ns | 480.31 ns | 547.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 487.91 ns/iter | 487.23 ns | 516.12 ns | 478.06 ns | 517.9 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 488.77 ns/iter | 493.06 ns | 511.1 ns  | 477.41 ns | 512.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 490.65 ns/iter | 495.21 ns | 505.76 ns | 484.44 ns | 516.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 498.86 ns/iter | 498.71 ns | 539.72 ns | 478.58 ns | 798.58 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 500.58 ns/iter | 497.94 ns | 599.82 ns | 484.85 ns | 1.2 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 530.39 ns/iter | 527.85 ns | 566.54 ns | 521.94 ns | 566.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 550.02 ns/iter | 550.04 ns | 572.83 ns | 526.12 ns | 583.94 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 611.02 ns/iter | 622.77 ns | 646.94 ns | 599.22 ns | 646.94 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 628.59 ns/iter | 635.53 ns | 1.12 µs   | 611.93 ns | 1.12 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 640.1 ns/iter  | 650.26 ns | 772.21 ns | 624.09 ns | 772.21 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 648.8 ns/iter  | 658.54 ns | 714.6 ns  | 636.24 ns | 714.6 ns  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 649.11 ns/iter | 659.98 ns | 691.44 ns | 637.43 ns | 691.44 ns |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 852.24 ns/iter | 784.89 ns | 1.48 µs   | 767.33 ns | 1.48 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 882.29 ns/iter | 825.89 ns | 1.54 µs   | 746.83 ns | 1.54 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 884.44 ns/iter | 807.53 ns | 1.48 µs   | 796.14 ns | 1.48 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 894.26 ns/iter | 835.82 ns | 1.57 µs   | 773.69 ns | 1.57 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 899.18 ns/iter | 840.77 ns | 1.54 µs   | 788.79 ns | 1.54 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 903.99 ns/iter | 831.17 ns | 1.54 µs   | 783.24 ns | 1.54 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 911.21 ns/iter | 879.88 ns | 1.56 µs   | 789.6 ns  | 1.56 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 916.56 ns/iter | 847.64 ns | 1.57 µs   | 820.21 ns | 1.57 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 919.86 ns/iter | 849.77 ns | 1.56 µs   | 807.22 ns | 1.56 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 927.81 ns/iter | 850.35 ns | 1.58 µs   | 828.79 ns | 1.58 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 933.64 ns/iter | 862.54 ns | 1.73 µs   | 799.46 ns | 1.73 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 937.56 ns/iter | 868.27 ns | 1.53 µs   | 851.36 ns | 1.53 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 939.84 ns/iter | 868.48 ns | 1.59 µs   | 822.27 ns | 1.59 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 943.63 ns/iter | 926.68 ns | 1.54 µs   | 822.18 ns | 1.54 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 968.92 ns/iter | 909.52 ns | 1.64 µs   | 846.44 ns | 1.64 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 980.54 ns/iter | 922.5 ns  | 1.69 µs   | 853.46 ns | 1.69 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 982.95 ns/iter | 922.07 ns | 1.65 µs   | 840.89 ns | 1.65 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 989.59 ns/iter | 916.66 ns | 1.63 µs   | 869.06 ns | 1.63 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.12 µs/iter   | 1.13 µs   | 1.16 µs   | 1.1 µs    | 1.16 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.24 µs/iter   | 1.26 µs   | 1.36 µs   | 1.12 µs   | 1.36 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.25 µs/iter   | 1.28 µs   | 1.51 µs   | 1.2 µs    | 1.51 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.26 µs/iter   | 1.39 µs   | 1.54 µs   | 1.07 µs   | 1.54 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.27 µs/iter   | 1.29 µs   | 2.04 µs   | 1.16 µs   | 2.04 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.27 µs/iter   | 1.3 µs    | 1.36 µs   | 1.23 µs   | 1.36 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.28 µs/iter   | 1.3 µs    | 1.37 µs   | 1.22 µs   | 1.37 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.28 µs/iter   | 1.29 µs   | 1.32 µs   | 1.26 µs   | 1.32 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.28 µs/iter   | 1.3 µs    | 1.5 µs    | 1.21 µs   | 1.5 µs    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.3 µs/iter    | 1.31 µs   | 1.35 µs   | 1.25 µs   | 1.35 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.32 µs/iter   | 1.33 µs   | 1.41 µs   | 1.28 µs   | 1.41 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.34 µs/iter   | 1.34 µs   | 1.91 µs   | 1.23 µs   | 1.91 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.43 µs/iter   | 1.44 µs   | 1.54 µs   | 1.41 µs   | 1.54 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.58 µs/iter   | 1.59 µs   | 1.74 µs   | 1.54 µs   | 1.74 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.74 µs/iter   | 1.75 µs   | 1.85 µs   | 1.72 µs   | 1.85 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.52 µs/iter   | 3.53 µs   | 3.59 µs   | 3.49 µs   | 3.59 µs   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.46 µs/iter   | 4.97 µs   | 5.55 µs   | 2.74 µs   | 5.55 µs   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.03 µs/iter  | 10.4 µs   | 22.2 µs   | 6.6 µs    | 1.12 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 11.11 µs/iter  | 10.9 µs   | 20.6 µs   | 7.6 µs    | 929.91 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 11.43 µs/iter  | 11.6 µs   | 21.3 µs   | 7.6 µs    | 976.71 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 11.53 µs/iter  | 11 µs     | 21.1 µs   | 7.2 µs    | 924.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.3 µs/iter   | 12.8 µs   | 26.5 µs   | 9.8 µs    | 264.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 13.49 µs/iter  | 13.1 µs   | 26.9 µs   | 9.9 µs    | 289.11 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 13.68 µs/iter  | 13.1 µs   | 27.8 µs   | 9.2 µs    | 847.02 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 13.83 µs/iter  | 12.4 µs   | 31.4 µs   | 7.5 µs    | 2.01 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 14.18 µs/iter  | 13 µs     | 34.8 µs   | 7.9 µs    | 1.46 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 14.32 µs/iter  | 12.8 µs   | 38.5 µs   | 8.1 µs    | 1.21 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 14.6 µs/iter   | 13.4 µs   | 36.4 µs   | 8 µs      | 1.06 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 14.87 µs/iter  | 13.3 µs   | 47.9 µs   | 8.4 µs    | 1.28 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 14.99 µs/iter  | 14.5 µs   | 32.1 µs   | 9.1 µs    | 5.46 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15 µs/iter     | 14.5 µs   | 32.8 µs   | 8.7 µs    | 941.51 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 18.1 µs/iter   | 18.1 µs   | 24.5 µs   | 16.5 µs   | 561.11 µs |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 18.36 µs/iter  | 16.4 µs   | 31.1 µs   | 7.5 µs    | 4.31 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 18.78 µs/iter  | 16.8 µs   | 51.3 µs   | 7.6 µs    | 2.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.67 µs/iter  | 18.4 µs   | 56.5 µs   | 16.7 µs   | 1.47 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 19.74 µs/iter  | 19.1 µs   | 39.5 µs   | 15.8 µs   | 541.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 20.3 µs/iter   | 19.2 µs   | 60.3 µs   | 16.7 µs   | 519 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 21.71 µs/iter  | 21.3 µs   | 39.8 µs   | 17.4 µs   | 289.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.33 µs/iter  | 20.3 µs   | 118.8 µs  | 18 µs     | 208.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.36 µs/iter  | 20.3 µs   | 118.9 µs  | 18.3 µs   | 1.19 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.36 µs/iter  | 20.6 µs   | 131.9 µs  | 18.7 µs   | 1.39 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 24.45 µs/iter  | 24 µs     | 37.8 µs   | 20.4 µs   | 374.3 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 29.8 µs/iter   | 28 µs     | 50.3 µs   | 23.1 µs   | 1.14 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 45.8 µs/iter   | 44.9 µs   | 84.2 µs   | 41.7 µs   | 329.4 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 53.16 µs/iter  | 47.6 µs   | 92.1 µs   | 44.4 µs   | 1.32 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 53.69 µs/iter  | 39.8 µs   | 544 µs    | 37.9 µs   | 1.08 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 55.57 µs/iter  | 54.4 µs   | 165.6 µs  | 51.5 µs   | 273.3 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 71.56 µs/iter  | 70.4 µs   | 208.8 µs  | 64.8 µs   | 329.3 µs  |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 127.87 µs/iter | 124.8 µs  | 150.4 µs  | 123 µs    | 1.22 ms   |
| bun 0.1.8 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 276.21 µs/iter | 270.3 µs  | 445.9 µs  | 263.6 µs  | 1.94 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 799.28 µs/iter | 740.72 µs | 1.88 ms   | 709.22 µs | 3.5 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 804.52 µs/iter | 741.72 µs | 1.72 ms   | 698.72 µs | 1.93 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 817.2 µs/iter  | 907.02 µs | 1.1 ms    | 687.22 µs | 1.25 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 855.38 µs/iter | 793.32 µs | 1.94 ms   | 765.22 µs | 2.94 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 870.11 µs/iter | 794.42 µs | 2.03 ms   | 762.62 µs | 5.08 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 885.38 µs/iter | 824.92 µs | 1.99 ms   | 792.02 µs | 2.11 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 984.86 µs/iter | 919.13 µs | 1.92 ms   | 885.22 µs | 4.17 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.33 ms/iter   | 1.24 ms   | 2.59 ms   | 1.16 ms   | 2.67 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.36 ms/iter   | 1.24 ms   | 4.08 ms   | 1.2 ms    | 4.17 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.4 ms/iter    | 1.28 ms   | 2.91 ms   | 1.24 ms   | 2.93 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.56 ms/iter   | 1.41 ms   | 4.6 ms    | 1.37 ms   | 4.68 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.58 ms/iter   | 1.44 ms   | 4.61 ms   | 1.4 ms    | 4.69 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.59 ms/iter   | 1.44 ms   | 4.63 ms   | 1.4 ms    | 4.75 ms   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.8 (x64-linux)                  | http      | 85,706.535/rps | 90,474.528 | 93,935.884 | 12,050.097 | 96,868.599 |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | http      | 46,656.159/rps | 48,898.899 | 49,571.368 | 4,323.247  | 49,615.617 |
| node v18.7.0 (x64-linux)               | http      | 39,387.718/rps | 41,023.137 | 41,602.704 | 5,155.727  | 42,003.738 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 164.2 ns/iter  | 154.23 ns | 297.25 ns | 150.38 ns | 1.35 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 305.08 ns/iter | 307.92 ns | 332.44 ns | 296.78 ns | 333.85 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 335.27 ns/iter | 337.17 ns | 367.98 ns | 328.06 ns | 394.02 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 94.85 ns/iter  | 94.39 ns  | 155.27 ns | 77.93 ns  | 231.36 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 250.17 ns/iter | 251.59 ns | 264.89 ns | 241.36 ns | 289.75 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 252.05 ns/iter | 256.19 ns | 270.68 ns | 246.47 ns | 277.78 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | JSON.stringify({hello: "world"}) | 94.85 ns/iter  | 94.39 ns  | 155.27 ns | 77.93 ns  | 231.36 ns |
| bun 0.1.8 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 164.2 ns/iter  | 154.23 ns | 297.25 ns | 150.38 ns | 1.35 µs   |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 250.17 ns/iter | 251.59 ns | 264.89 ns | 241.36 ns | 289.75 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 252.05 ns/iter | 256.19 ns | 270.68 ns | 246.47 ns | 277.78 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 305.08 ns/iter | 307.92 ns | 332.44 ns | 296.78 ns | 333.85 ns |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 335.27 ns/iter | 337.17 ns | 367.98 ns | 328.06 ns | 394.02 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders" | 34.71 ms/iter  | 34.32 ms  | 38.33 ms  | 33.83 ms  | 38.33 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 101.62 ms/iter | 101.74 ms | 102.09 ms | 101.38 ms | 102.09 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 223.26 ms/iter | 223.54 ms | 244.77 ms | 214.19 ms | 244.77 ms |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | ------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products" | 97.83 µs/iter | 96.1 µs   | 119.9 µs  | 91.2 µs   | 1.21 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 307.1 µs/iter | 306.7 µs  | 320.1 µs  | 302.7 µs  | 924.81 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 413.1 µs/iter | 373.11 µs | 444.11 µs | 358.71 µs | 8.46 ms   |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | -------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.56 µs/iter  | 60.6 µs   | 80.5 µs   | 54.1 µs  | 628.51 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.04 µs/iter | 153.7 µs  | 163.9 µs  | 151.1 µs | 626.81 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 381.23 µs/iter | 327.51 µs | 648.51 µs | 314.4 µs | 12.32 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99       | Min      | Max       |
| -------------------------------------- | ------------------------- | -------------- | -------- | --------- | -------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 67.64 µs/iter  | 62.9 µs  | 97.5 µs   | 47.2 µs  | 1 ms      |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.55 µs/iter | 111.3 µs | 215.6 µs  | 98 µs    | 824.01 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 340.41 µs/iter | 332.4 µs | 794.91 µs | 269.7 µs | 5.9 ms    |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 178.14 µs/iter | 178.4 µs  | 195.1 µs  | 157.4 µs  | 784.81 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 449.25 µs/iter | 448.61 µs | 466.01 µs | 439.5 µs  | 1.07 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.02 ms/iter   | 858.41 µs | 8.42 ms   | 830.41 µs | 8.65 ms   |


### everything
| Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Suppliers" | 60.56 µs/iter  | 60.6 µs   | 80.5 µs   | 54.1 µs   | 628.51 µs |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Employees" | 67.64 µs/iter  | 62.9 µs   | 97.5 µs   | 47.2 µs   | 1 ms      |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Products"  | 97.83 µs/iter  | 96.1 µs   | 119.9 µs  | 91.2 µs   | 1.21 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 117.55 µs/iter | 111.3 µs  | 215.6 µs  | 98 µs     | 824.01 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 154.04 µs/iter | 153.7 µs  | 163.9 µs  | 151.1 µs  | 626.81 µs |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Customers" | 178.14 µs/iter | 178.4 µs  | 195.1 µs  | 157.4 µs  | 784.81 µs |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 307.1 µs/iter  | 306.7 µs  | 320.1 µs  | 302.7 µs  | 924.81 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 340.41 µs/iter | 332.4 µs  | 794.91 µs | 269.7 µs  | 5.9 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 381.23 µs/iter | 327.51 µs | 648.51 µs | 314.4 µs  | 12.32 ms  |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 413.1 µs/iter  | 373.11 µs | 444.11 µs | 358.71 µs | 8.46 ms   |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 449.25 µs/iter | 448.61 µs | 466.01 µs | 439.5 µs  | 1.07 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 1.02 ms/iter   | 858.41 µs | 8.42 ms   | 830.41 µs | 8.65 ms   |
| bun 0.1.8 (x64-linux)                  | SELECT * FROM "Orders"    | 34.71 ms/iter  | 34.32 ms  | 38.33 ms  | 33.83 ms  | 38.33 ms  |
| node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 101.62 ms/iter | 101.74 ms | 102.09 ms | 101.38 ms | 102.09 ms |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 223.26 ms/iter | 223.54 ms | 244.77 ms | 214.19 ms | 244.77 ms |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99     | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 644.52 ns/iter | 670.48 ns | 1.96 µs | 527.76 ns | 1.96 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.37 µs/iter   | 1.38 µs   | 2.18 µs | 1.18 µs   | 2.18 µs |
| bun 0.1.8 (x64-linux)                  | nanoid(36) | 1.8 µs/iter    | 1.8 µs    | 2.04 µs | 1.76 µs   | 2.04 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | console.log('hello') | 2.12 µs/iter  | 2.14 µs | 2.4 µs  | 1.61 µs | 2.4 µs    |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.48 µs/iter  | 6.5 µs  | 9.4 µs  | 2.6 µs  | 2.77 ms   |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.54 µs/iter | 12.1 µs | 14.8 µs | 6.3 µs  | 404.31 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.18 µs/iter  | 2.22 µs | 2.27 µs | 1.95 µs | 2.27 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.39 µs/iter  | 8.9 µs  | 13.1 µs | 4.4 µs  | 1.7 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.21 µs/iter | 18.1 µs | 23.5 µs | 11.5 µs | 987.71 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.8 (x64-linux)                  | console.log('hello')             | 2.12 µs/iter  | 2.14 µs | 2.4 µs  | 1.61 µs | 2.4 µs    |
| bun 0.1.8 (x64-linux)                  | console.log({ hello: 'object' }) | 2.18 µs/iter  | 2.22 µs | 2.27 µs | 1.95 µs | 2.27 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.48 µs/iter  | 6.5 µs  | 9.4 µs  | 2.6 µs  | 2.77 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.39 µs/iter  | 8.9 µs  | 13.1 µs | 4.4 µs  | 1.7 ms    |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.54 µs/iter | 12.1 µs | 14.8 µs | 6.3 µs  | 404.31 µs |
| deno 1.24.3 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.21 µs/iter | 18.1 µs | 23.5 µs | 11.5 µs | 987.71 µs |

