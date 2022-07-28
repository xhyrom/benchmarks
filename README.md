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
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 425.98 ns/iter (425.975) | 417.31 ns | 430.15 ns | 460.57 ns | 466.57 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.01 µs/iter (1,006.111) | 896.2 ns  | 943.68 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.52 µs/iter (1,517.236) | 1.43 µs   | 1.52 µs   | 2.22 µs   | 2.22 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 450.02 ns/iter (450.016) | 442.65 ns | 452.79 ns | 475.97 ns | 528.23 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.04 µs/iter (1,043.4)   | 953.24 ns | 977.26 ns | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.59 µs/iter (1,587.692) | 1.46 µs   | 1.59 µs   | 2.21 µs   | 2.21 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 432.8 ns/iter (432.796)  | 428.55 ns | 433.7 ns  | 443.1 ns | 450.15 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter (1,044.675) | 946.7 ns  | 974.92 ns | 1.67 µs  | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.5 µs/iter (1,501.241)  | 1.46 µs   | 1.51 µs   | 1.9 µs   | 1.9 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 431.61 ns/iter (431.607) | 426.07 ns | 432.65 ns | 453.79 ns | 456 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 981.02 ns/iter (981.018) | 895.71 ns | 915.76 ns | 1.56 µs   | 1.56 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.48 µs/iter (1,483.505) | 1.4 µs    | 1.5 µs    | 1.66 µs   | 1.66 µs |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 479.55 ns/iter (479.545) | 473.8 ns  | 480.29 ns | 493.83 ns | 494.01 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.03 µs/iter (1,030.825) | 935.05 ns | 958.47 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.58 µs/iter (1,576.399) | 1.5 µs    | 1.58 µs   | 1.75 µs   | 1.75 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 470.11 ns/iter (470.111) | 464.88 ns | 470.71 ns | 486.44 ns | 487.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.07 µs/iter (1,073.061) | 950.06 ns | 1.01 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.9 µs/iter (1,901.288)  | 1.86 µs   | 1.91 µs   | 2.06 µs   | 2.06 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 437.08 ns/iter (437.075) | 431.65 ns | 437.73 ns | 449.38 ns | 452.79 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.02 µs/iter (1,018.632) | 927.14 ns | 949.73 ns | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.53 µs/iter (1,532.96)  | 1.48 µs   | 1.55 µs   | 1.61 µs   | 1.61 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 432.99 ns/iter (432.993) | 421.15 ns | 435.71 ns | 475.12 ns | 477.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.02 µs/iter (1,021.383) | 926.17 ns | 955.44 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.52 µs/iter (1,522.502) | 1.46 µs   | 1.55 µs   | 1.67 µs   | 1.67 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 467.24 ns/iter (467.245) | 454.97 ns | 469.42 ns | 535.98 ns | 552.36 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1 µs/iter (1,001.337)    | 904.67 ns | 925.61 ns | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.54 µs/iter (1,539.573) | 1.45 µs   | 1.56 µs   | 1.69 µs   | 1.69 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 7.41 µs/iter (7,412)     | 5.4 µs   | 6.9 µs   | 12.4 µs  | 650.2 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.74 µs/iter (21,742)   | 19.1 µs  | 20.1 µs  | 104.8 µs | 450.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 710.31 µs/iter (710,312) | 643.9 µs | 758.7 µs | 859.2 µs | 1.13 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75      | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------------------ | -------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 11.02 µs/iter (11,017)   | 8.1 µs   | 10.2 µs | 29.7 µs  | 4.46 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 19.89 µs/iter (19,885)   | 17 µs    | 18.2 µs | 102.7 µs | 700.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.12 ms/iter (1,121,594) | 995.3 µs | 1.04 ms | 2.15 ms  | 2.24 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 9.26 µs/iter (9,263)     | 7.4 µs   | 9 µs     | 14.7 µs | 469.5 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 17.58 µs/iter (17,584)   | 15.8 µs  | 16.5 µs  | 37.7 µs | 314.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 687.37 µs/iter (687,374) | 591.9 µs | 631.4 µs | 1.13 ms | 1.71 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | -------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 9.36 µs/iter (9,363)     | 7.4 µs   | 9.1 µs   | 14.7 µs | 424.1 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.62 µs/iter (17,617)   | 15.8 µs  | 16.6 µs  | 31.7 µs | 195.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 684.87 µs/iter (684,871) | 599.8 µs | 637.2 µs | 1.6 ms  | 1.64 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75     | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 9.77 µs/iter (9,771)     | 7 µs    | 9.4 µs   | 17.5 µs | 399.8 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 21.05 µs/iter (21,051)   | 18.7 µs | 19.6 µs  | 119 µs  | 230.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 829.36 µs/iter (829,364) | 736 µs  | 774.4 µs | 1.55 ms | 7.56 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 48.62 µs/iter (48,615)   | 36.5 µs | 38.3 µs | 400.8 µs | 1.15 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 53.55 µs/iter (53,547)   | 49.9 µs | 52.3 µs | 153.8 µs | 226.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.24 ms/iter (1,235,224) | 1.06 ms | 1.1 ms  | 2.88 ms  | 2.93 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 8.11 µs/iter (8,109)     | 5.8 µs   | 6.9 µs   | 12.6 µs | 946.4 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.71 µs/iter (17,710)   | 15.7 µs  | 16.7 µs  | 38.7 µs | 1.37 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 724.99 µs/iter (724,988) | 656.2 µs | 694.1 µs | 1.32 ms | 1.66 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 8.27 µs/iter (8,267.978) | 7.77 µs  | 8.44 µs  | 8.99 µs | 8.99 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 19.18 µs/iter (19,175)   | 15.9 µs  | 19 µs    | 31.5 µs | 231.9 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 720.48 µs/iter (720,481) | 656.2 µs | 691.7 µs | 1.33 ms | 1.36 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 66.64 µs/iter (66,644)   | 62.9 µs  | 64.9 µs  | 205 µs   | 323.1 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 326.12 µs/iter (326,122) | 318.2 µs | 330.1 µs | 356.9 µs | 883 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 776.66 µs/iter (776,663) | 689.3 µs | 726.3 µs | 1.61 ms  | 7.99 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 366.41 ns/iter (366.412) | 357.25 ns | 366.37 ns | 395.05 ns | 395.75 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 651.41 ns/iter (651.405) | 632.68 ns | 651.46 ns | 1.13 µs   | 1.13 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 985.26 ns/iter (985.261) | 868.53 ns | 999.03 ns | 1.63 µs   | 1.63 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 462.31 ns/iter (462.307) | 453.78 ns | 461.27 ns | 487.8 ns | 491.23 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.04 µs/iter (1,039.272) | 946.59 ns | 970.86 ns | 1.57 µs  | 1.57 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.52 µs/iter (1,516.179) | 1.35 µs   | 1.57 µs   | 1.79 µs  | 1.79 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 365.38 ns/iter (365.384) | 356.66 ns | 363.82 ns | 401.63 ns | 403.98 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 635.36 ns/iter (635.357) | 624.59 ns | 643.71 ns | 741.82 ns | 741.82 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.03 µs/iter (1,027.246) | 931.99 ns | 968.23 ns | 1.62 µs   | 1.62 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 521.25 ns/iter (521.249) | 461.72 ns | 533.37 ns | 566.13 ns | 612.82 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 622.59 ns/iter (622.591) | 614.19 ns | 630.86 ns | 675.89 ns | 675.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 959.72 ns/iter (959.724) | 877.92 ns | 903.78 ns | 1.5 µs    | 1.5 µs    |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 568.43 ns/iter (568.428) | 534.42 ns | 570.48 ns | 602.84 ns | 602.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.05 µs/iter (1,047.078) | 906.22 ns | 985.14 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.73 µs/iter (1,732.848) | 1.71 µs   | 1.74 µs   | 1.83 µs   | 1.83 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 461.29 ns/iter (461.287) | 442.14 ns | 465.74 ns | 526.66 ns | 535.95 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.04 µs/iter (1,041.391) | 941.31 ns | 978.53 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.04 µs/iter (2,038.511) | 2 µs      | 2.05 µs   | 2.17 µs   | 2.17 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 362.47 ns/iter (362.47)  | 354.2 ns  | 362.9 ns  | 394.96 ns | 405.78 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 648.51 ns/iter (648.508) | 638.25 ns | 656.23 ns | 717.66 ns | 717.66 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 967.33 ns/iter (967.326) | 876.37 ns | 908.65 ns | 1.54 µs   | 1.54 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 366.64 ns/iter (366.639) | 358.31 ns | 365.97 ns | 407.55 ns | 407.68 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 647.66 ns/iter (647.658) | 637.77 ns | 655.43 ns | 673.26 ns | 673.26 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 973.85 ns/iter (973.851) | 879.27 ns | 904.26 ns | 1.53 µs   | 1.53 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 443.98 ns/iter (443.98)  | 421.98 ns | 452.09 ns | 487.45 ns | 487.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 912.97 ns/iter (912.969) | 821.88 ns | 853.17 ns | 1.49 µs   | 1.49 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.15 µs/iter (1,148.85)  | 1.14 µs   | 1.16 µs   | 1.22 µs   | 1.22 µs  |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.6 µs/iter (8,597)      | 6.7 µs  | 8.1 µs  | 19.6 µs | 2.52 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 10.53 µs/iter (10,527)   | 7.6 µs  | 9.9 µs  | 28.7 µs | 2.58 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.33 ms/iter (1,327,030) | 1.17 ms | 1.22 ms | 3.82 ms | 3.88 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 11.91 µs/iter (11,915)   | 8 µs    | 10.9 µs | 30.8 µs | 2.85 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 19.95 µs/iter (19,952)   | 17.5 µs | 19.7 µs | 32.9 µs | 1.61 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.15 ms/iter (1,145,328) | 1 ms    | 1.04 ms | 3.35 ms | 3.64 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.22 µs/iter (1,216.572) | 1.13 µs | 1.23 µs | 1.31 µs | 1.31 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 21.35 µs/iter (21,350)   | 11.6 µs | 22.3 µs | 65.2 µs | 2.16 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 38.65 µs/iter (38,649)   | 35.5 µs | 37.7 µs | 67.1 µs | 418.6 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 130.08 ns/iter (130.076) | 125.25 ns | 129.1 ns  | 142.71 ns | 155.09 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 377.54 ns/iter (377.536) | 366.1 ns  | 388.69 ns | 435.59 ns | 513.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 20.61 µs/iter (20,612)   | 11.5 µs   | 22 µs     | 64.6 µs   | 1.6 ms    |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.74 µs/iter (3,743.418) | 3.71 µs | 3.72 µs | 4.32 µs | 4.32 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.76 µs/iter (15,760)   | 14.4 µs | 15.7 µs | 21.7 µs | 477.2 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 26.18 µs/iter (26,180)   | 22 µs   | 24.3 µs | 45.8 µs | 3.31 ms  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99      | Min      | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | -------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 116.16 ns/iter (116.161) | 112.53 ns | 115.1 ns | 127.2 ns | 136.74 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.57 µs/iter (1,573.844) | 1.56 µs   | 1.59 µs  | 1.61 µs  | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 124.93 µs/iter (124,932) | 116.4 µs  | 133.8 µs | 152.6 µs | 1.15 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.19 µs/iter (8,194.88)  | 8.03 µs | 8.23 µs | 8.54 µs | 8.54 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 10.24 µs/iter (10,239)   | 7.5 µs  | 9.3 µs  | 30 µs   | 1.39 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.34 ms/iter (1,341,768) | 1.18 ms | 1.23 ms | 3.9 ms  | 4.03 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.26 µs/iter (8,260.22)  | 8.04 µs | 8.29 µs | 8.63 µs | 8.63 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 10.58 µs/iter (10,582)   | 7.7 µs  | 10 µs   | 29.7 µs | 3.53 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.35 ms/iter (1,345,148) | 1.18 ms | 1.23 ms | 3.82 ms | 3.94 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 502.47 ns/iter (502.468) | 497.47 ns | 501.59 ns | 517.48 ns | 521.84 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.5 µs/iter (4,500.58)   | 3.11 µs   | 5.07 µs   | 6.29 µs   | 6.29 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 50.07 µs/iter (50,074)   | 44.1 µs   | 46.1 µs   | 73.8 µs   | 1.63 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 116.16 ns/iter (116.161) | 112.53 ns | 115.1 ns  | 127.2 ns  | 136.74 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 130.08 ns/iter (130.076) | 125.25 ns | 129.1 ns  | 142.71 ns | 155.09 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 362.47 ns/iter (362.47)  | 354.2 ns  | 362.9 ns  | 394.96 ns | 405.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 365.38 ns/iter (365.384) | 356.66 ns | 363.82 ns | 401.63 ns | 403.98 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 366.41 ns/iter (366.412) | 357.25 ns | 366.37 ns | 395.05 ns | 395.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 366.64 ns/iter (366.639) | 358.31 ns | 365.97 ns | 407.55 ns | 407.68 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 377.54 ns/iter (377.536) | 366.1 ns  | 388.69 ns | 435.59 ns | 513.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 425.98 ns/iter (425.975) | 417.31 ns | 430.15 ns | 460.57 ns | 466.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 431.61 ns/iter (431.607) | 426.07 ns | 432.65 ns | 453.79 ns | 456 ns    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 432.8 ns/iter (432.796)  | 428.55 ns | 433.7 ns  | 443.1 ns  | 450.15 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 432.99 ns/iter (432.993) | 421.15 ns | 435.71 ns | 475.12 ns | 477.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 437.08 ns/iter (437.075) | 431.65 ns | 437.73 ns | 449.38 ns | 452.79 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 443.98 ns/iter (443.98)  | 421.98 ns | 452.09 ns | 487.45 ns | 487.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 450.02 ns/iter (450.016) | 442.65 ns | 452.79 ns | 475.97 ns | 528.23 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 461.29 ns/iter (461.287) | 442.14 ns | 465.74 ns | 526.66 ns | 535.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 462.31 ns/iter (462.307) | 453.78 ns | 461.27 ns | 487.8 ns  | 491.23 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 467.24 ns/iter (467.245) | 454.97 ns | 469.42 ns | 535.98 ns | 552.36 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 470.11 ns/iter (470.111) | 464.88 ns | 470.71 ns | 486.44 ns | 487.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 479.55 ns/iter (479.545) | 473.8 ns  | 480.29 ns | 493.83 ns | 494.01 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 502.47 ns/iter (502.468) | 497.47 ns | 501.59 ns | 517.48 ns | 521.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 521.25 ns/iter (521.249) | 461.72 ns | 533.37 ns | 566.13 ns | 612.82 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 568.43 ns/iter (568.428) | 534.42 ns | 570.48 ns | 602.84 ns | 602.84 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 622.59 ns/iter (622.591) | 614.19 ns | 630.86 ns | 675.89 ns | 675.89 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 635.36 ns/iter (635.357) | 624.59 ns | 643.71 ns | 741.82 ns | 741.82 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 647.66 ns/iter (647.658) | 637.77 ns | 655.43 ns | 673.26 ns | 673.26 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 648.51 ns/iter (648.508) | 638.25 ns | 656.23 ns | 717.66 ns | 717.66 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 651.41 ns/iter (651.405) | 632.68 ns | 651.46 ns | 1.13 µs   | 1.13 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 912.97 ns/iter (912.969) | 821.88 ns | 853.17 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 959.72 ns/iter (959.724) | 877.92 ns | 903.78 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 967.33 ns/iter (967.326) | 876.37 ns | 908.65 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 973.85 ns/iter (973.851) | 879.27 ns | 904.26 ns | 1.53 µs   | 1.53 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 981.02 ns/iter (981.018) | 895.71 ns | 915.76 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 985.26 ns/iter (985.261) | 868.53 ns | 999.03 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1 µs/iter (1,001.337)    | 904.67 ns | 925.61 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.01 µs/iter (1,006.111) | 896.2 ns  | 943.68 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.02 µs/iter (1,018.632) | 927.14 ns | 949.73 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.02 µs/iter (1,021.383) | 926.17 ns | 955.44 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.03 µs/iter (1,027.246) | 931.99 ns | 968.23 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.03 µs/iter (1,030.825) | 935.05 ns | 958.47 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.04 µs/iter (1,039.272) | 946.59 ns | 970.86 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.04 µs/iter (1,041.391) | 941.31 ns | 978.53 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.04 µs/iter (1,043.4)   | 953.24 ns | 977.26 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.04 µs/iter (1,044.675) | 946.7 ns  | 974.92 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.05 µs/iter (1,047.078) | 906.22 ns | 985.14 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.07 µs/iter (1,073.061) | 950.06 ns | 1.01 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.15 µs/iter (1,148.85)  | 1.14 µs   | 1.16 µs   | 1.22 µs   | 1.22 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.22 µs/iter (1,216.572) | 1.13 µs   | 1.23 µs   | 1.31 µs   | 1.31 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.48 µs/iter (1,483.505) | 1.4 µs    | 1.5 µs    | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.5 µs/iter (1,501.241)  | 1.46 µs   | 1.51 µs   | 1.9 µs    | 1.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.52 µs/iter (1,516.179) | 1.35 µs   | 1.57 µs   | 1.79 µs   | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.52 µs/iter (1,517.236) | 1.43 µs   | 1.52 µs   | 2.22 µs   | 2.22 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.52 µs/iter (1,522.502) | 1.46 µs   | 1.55 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.53 µs/iter (1,532.96)  | 1.48 µs   | 1.55 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.54 µs/iter (1,539.573) | 1.45 µs   | 1.56 µs   | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.57 µs/iter (1,573.844) | 1.56 µs   | 1.59 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.58 µs/iter (1,576.399) | 1.5 µs    | 1.58 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.59 µs/iter (1,587.692) | 1.46 µs   | 1.59 µs   | 2.21 µs   | 2.21 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.73 µs/iter (1,732.848) | 1.71 µs   | 1.74 µs   | 1.83 µs   | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.9 µs/iter (1,901.288)  | 1.86 µs   | 1.91 µs   | 2.06 µs   | 2.06 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.04 µs/iter (2,038.511) | 2 µs      | 2.05 µs   | 2.17 µs   | 2.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.74 µs/iter (3,743.418) | 3.71 µs   | 3.72 µs   | 4.32 µs   | 4.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.5 µs/iter (4,500.58)   | 3.11 µs   | 5.07 µs   | 6.29 µs   | 6.29 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 7.41 µs/iter (7,412)     | 5.4 µs    | 6.9 µs    | 12.4 µs   | 650.2 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 8.11 µs/iter (8,109)     | 5.8 µs    | 6.9 µs    | 12.6 µs   | 946.4 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.19 µs/iter (8,194.88)  | 8.03 µs   | 8.23 µs   | 8.54 µs   | 8.54 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.26 µs/iter (8,260.22)  | 8.04 µs   | 8.29 µs   | 8.63 µs   | 8.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 8.27 µs/iter (8,267.978) | 7.77 µs   | 8.44 µs   | 8.99 µs   | 8.99 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.6 µs/iter (8,597)      | 6.7 µs    | 8.1 µs    | 19.6 µs   | 2.52 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 9.26 µs/iter (9,263)     | 7.4 µs    | 9 µs      | 14.7 µs   | 469.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 9.36 µs/iter (9,363)     | 7.4 µs    | 9.1 µs    | 14.7 µs   | 424.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 9.77 µs/iter (9,771)     | 7 µs      | 9.4 µs    | 17.5 µs   | 399.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 10.24 µs/iter (10,239)   | 7.5 µs    | 9.3 µs    | 30 µs     | 1.39 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 10.53 µs/iter (10,527)   | 7.6 µs    | 9.9 µs    | 28.7 µs   | 2.58 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 10.58 µs/iter (10,582)   | 7.7 µs    | 10 µs     | 29.7 µs   | 3.53 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 11.02 µs/iter (11,017)   | 8.1 µs    | 10.2 µs   | 29.7 µs   | 4.46 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 11.91 µs/iter (11,915)   | 8 µs      | 10.9 µs   | 30.8 µs   | 2.85 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.76 µs/iter (15,760)   | 14.4 µs   | 15.7 µs   | 21.7 µs   | 477.2 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 17.58 µs/iter (17,584)   | 15.8 µs   | 16.5 µs   | 37.7 µs   | 314.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.62 µs/iter (17,617)   | 15.8 µs   | 16.6 µs   | 31.7 µs   | 195.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.71 µs/iter (17,710)   | 15.7 µs   | 16.7 µs   | 38.7 µs   | 1.37 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 19.18 µs/iter (19,175)   | 15.9 µs   | 19 µs     | 31.5 µs   | 231.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 19.89 µs/iter (19,885)   | 17 µs     | 18.2 µs   | 102.7 µs  | 700.5 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 19.95 µs/iter (19,952)   | 17.5 µs   | 19.7 µs   | 32.9 µs   | 1.61 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 20.61 µs/iter (20,612)   | 11.5 µs   | 22 µs     | 64.6 µs   | 1.6 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 21.05 µs/iter (21,051)   | 18.7 µs   | 19.6 µs   | 119 µs    | 230.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 21.35 µs/iter (21,350)   | 11.6 µs   | 22.3 µs   | 65.2 µs   | 2.16 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.74 µs/iter (21,742)   | 19.1 µs   | 20.1 µs   | 104.8 µs  | 450.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.18 µs/iter (26,180)   | 22 µs     | 24.3 µs   | 45.8 µs   | 3.31 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 38.65 µs/iter (38,649)   | 35.5 µs   | 37.7 µs   | 67.1 µs   | 418.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 48.62 µs/iter (48,615)   | 36.5 µs   | 38.3 µs   | 400.8 µs  | 1.15 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 50.07 µs/iter (50,074)   | 44.1 µs   | 46.1 µs   | 73.8 µs   | 1.63 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 53.55 µs/iter (53,547)   | 49.9 µs   | 52.3 µs   | 153.8 µs  | 226.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 66.64 µs/iter (66,644)   | 62.9 µs   | 64.9 µs   | 205 µs    | 323.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 124.93 µs/iter (124,932) | 116.4 µs  | 133.8 µs  | 152.6 µs  | 1.15 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 326.12 µs/iter (326,122) | 318.2 µs  | 330.1 µs  | 356.9 µs  | 883 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 684.87 µs/iter (684,871) | 599.8 µs  | 637.2 µs  | 1.6 ms    | 1.64 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 687.37 µs/iter (687,374) | 591.9 µs  | 631.4 µs  | 1.13 ms   | 1.71 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 710.31 µs/iter (710,312) | 643.9 µs  | 758.7 µs  | 859.2 µs  | 1.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 720.48 µs/iter (720,481) | 656.2 µs  | 691.7 µs  | 1.33 ms   | 1.36 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 724.99 µs/iter (724,988) | 656.2 µs  | 694.1 µs  | 1.32 ms   | 1.66 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 776.66 µs/iter (776,663) | 689.3 µs  | 726.3 µs  | 1.61 ms   | 7.99 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 829.36 µs/iter (829,364) | 736 µs    | 774.4 µs  | 1.55 ms   | 7.56 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.12 ms/iter (1,121,594) | 995.3 µs  | 1.04 ms   | 2.15 ms   | 2.24 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.15 ms/iter (1,145,328) | 1 ms      | 1.04 ms   | 3.35 ms   | 3.64 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.24 ms/iter (1,235,224) | 1.06 ms   | 1.1 ms    | 2.88 ms   | 2.93 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.33 ms/iter (1,327,030) | 1.17 ms   | 1.22 ms   | 3.82 ms   | 3.88 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.34 ms/iter (1,341,768) | 1.18 ms   | 1.23 ms   | 3.9 ms    | 4.03 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.35 ms/iter (1,345,148) | 1.18 ms   | 1.23 ms   | 3.82 ms   | 3.94 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99      | Min      | Max       |
| -------------------------------------- | --------- | -------------------------- | -------- | -------- | -------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 92.27 µs/iter (92,272.722) | 3.88 µs  | 93.38 µs | 96.18 µs | 100.02 µs |
| node v18.7.0 (x64-linux)               | http      | 91.47 µs/iter (91,471.52)  | 5.96 µs  | 92.49 µs | 96.24 µs | 170.56 µs |
| bun 0.1.5 (x64-linux)                  | http      | 88.94 µs/iter (88,937.231) | 12.27 µs | 92.94 µs | 96.45 µs | 97.91 µs  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.35 ns/iter (159.346) | 152.63 ns | 156.84 ns | 209.36 ns | 282.8 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 319.98 ns/iter (319.982) | 311.18 ns | 320.04 ns | 352.87 ns | 500.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 328 ns/iter (328.002)    | 322.33 ns | 325.97 ns | 360.67 ns | 387.66 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 234.69 ns/iter (234.686) | 226.73 ns | 235.45 ns | 256.63 ns | 266.01 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 236.83 ns/iter (236.826) | 232.11 ns | 239.48 ns | 254.11 ns | 260.81 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.44 ns/iter (375.44)  | 353.63 ns | 386.64 ns | 446.01 ns | 453.68 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.35 ns/iter (159.346) | 152.63 ns | 156.84 ns | 209.36 ns | 282.8 ns  |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 234.69 ns/iter (234.686) | 226.73 ns | 235.45 ns | 256.63 ns | 266.01 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 236.83 ns/iter (236.826) | 232.11 ns | 239.48 ns | 254.11 ns | 260.81 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 319.98 ns/iter (319.982) | 311.18 ns | 320.04 ns | 352.87 ns | 500.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 328 ns/iter (328.002)    | 322.33 ns | 325.97 ns | 360.67 ns | 387.66 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.44 ns/iter (375.44)  | 353.63 ns | 386.64 ns | 446.01 ns | 453.68 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                 | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ----------------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 504.2 ns/iter (504.197) | 451.81 ns | 511.36 ns | 574.93 ns | 663.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.39 µs/iter (1,387.17) | 1.26 µs   | 1.42 µs   | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.88 µs/iter (1,876.24) | 1.84 µs   | 1.88 µs   | 2.06 µs   | 2.06 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.19 µs/iter (2,188.99)  | 1.95 µs | 2.21 µs | 2.9 µs  | 2.9 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.17 µs/iter (4,165.901) | 3.95 µs | 4.13 µs | 5.47 µs | 5.47 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.74 µs/iter (10,739)   | 6.7 µs  | 11.5 µs | 13.6 µs | 462.6 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.25 µs/iter (2,245.251) | 2.1 µs  | 2.27 µs | 2.38 µs | 2.38 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.84 µs/iter (6,836)     | 4.4 µs  | 8.3 µs  | 11.1 µs | 1.17 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.32 µs/iter (17,324)   | 11.2 µs | 17.4 µs | 20.7 µs | 539 µs  |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.19 µs/iter (2,188.99)  | 1.95 µs | 2.21 µs | 2.9 µs  | 2.9 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.25 µs/iter (2,245.251) | 2.1 µs  | 2.27 µs | 2.38 µs | 2.38 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.17 µs/iter (4,165.901) | 3.95 µs | 4.13 µs | 5.47 µs | 5.47 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.84 µs/iter (6,836)     | 4.4 µs  | 8.3 µs  | 11.1 µs | 1.17 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.74 µs/iter (10,739)   | 6.7 µs  | 11.5 µs | 13.6 µs | 462.6 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.32 µs/iter (17,324)   | 11.2 µs | 17.4 µs | 20.7 µs | 539 µs   |

