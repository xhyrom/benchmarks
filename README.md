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
| Runtime                                | Benchmark                              | Average                  | p75       | p99      | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 573.5 ns/iter (573.503)  | 514.85 ns | 558.7 ns | 1.65 µs | 1.65 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.24 µs/iter (1,243.992) | 1.05 µs   | 1.21 µs  | 2.09 µs | 2.09 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.56 µs/iter (1,555.523) | 1.4 µs    | 1.59 µs  | 2.58 µs | 2.58 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 585.98 ns/iter (585.985) | 541.26 ns | 589.83 ns | 1.07 µs | 1.07 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.18 µs/iter (1,184.168) | 1.02 µs   | 1.12 µs   | 2.05 µs | 2.05 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.6 µs/iter (1,599.348)  | 1.42 µs   | 1.6 µs    | 2.68 µs | 2.68 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 559.28 ns/iter (559.275) | 527.26 ns | 568.99 ns | 675.04 ns | 678.11 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.32 µs/iter (1,321.22)  | 1.12 µs   | 1.25 µs   | 2.1 µs    | 2.1 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.55 µs/iter (1,545.756) | 1.37 µs   | 1.55 µs   | 2.34 µs   | 2.34 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 570.57 ns/iter (570.574) | 528.23 ns | 571.66 ns | 764.45 ns | 764.45 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.35 µs/iter (1,354.931) | 1.12 µs   | 1.27 µs   | 2.49 µs   | 2.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.55 µs/iter (1,549.397) | 1.4 µs    | 1.57 µs   | 2.13 µs   | 2.13 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 615.36 ns/iter (615.362) | 568.04 ns | 609.49 ns | 1.26 µs | 1.26 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.43 µs/iter (1,426.272) | 1.19 µs   | 1.35 µs   | 2.96 µs | 2.96 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.71 µs/iter (1,708.496) | 1.49 µs   | 1.73 µs   | 2.61 µs | 2.61 µs |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 605.72 ns/iter (605.722) | 556.15 ns | 605.66 ns | 1.09 µs | 1.09 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.41 µs/iter (1,414.41)  | 1.19 µs   | 1.38 µs   | 2.3 µs  | 2.3 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.02 µs/iter (2,024.782) | 1.9 µs    | 2.05 µs   | 2.75 µs | 2.75 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 554.35 ns/iter (554.352) | 525.53 ns | 562.08 ns | 652.98 ns | 673.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.35 µs/iter (1,348.05)  | 1.12 µs   | 1.3 µs    | 2.32 µs   | 2.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.56 µs/iter (1,561.031) | 1.39 µs   | 1.59 µs   | 2.59 µs   | 2.59 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                 | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ----------------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 562.1 ns/iter (562.099) | 527.55 ns | 564.95 ns | 778.45 ns | 844.68 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.43 µs/iter (1,426.87) | 1.2 µs    | 1.41 µs   | 2.54 µs   | 2.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.52 µs/iter (1,524.54) | 1.41 µs   | 1.57 µs   | 1.75 µs   | 1.75 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 585.34 ns/iter (585.337) | 540.95 ns | 589.72 ns | 1.04 µs | 1.04 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.37 µs/iter (1,371.402) | 1.17 µs   | 1.32 µs   | 2.19 µs | 2.19 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.55 µs/iter (1,551.862) | 1.44 µs   | 1.59 µs   | 2.06 µs | 2.06 µs |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 16.68 µs/iter (16,676)   | 8.5 µs    | 14.4 µs   | 46.6 µs  | 2.99 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 25.48 µs/iter (25,483)   | 19.9 µs   | 22.2 µs   | 138.5 µs | 5.01 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 897.53 µs/iter (897,531) | 755.31 µs | 981.41 µs | 1.87 ms  | 3.34 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 21.27 µs/iter (21,267)   | 11.2 µs | 16.4 µs | 64.1 µs  | 8.07 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 30.01 µs/iter (30,012)   | 20.3 µs | 22.7 µs | 167.4 µs | 7.83 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.33 ms/iter (1,325,864) | 1.03 ms | 1.27 ms | 3.46 ms  | 6.55 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                 | p75       | p99       | Min      | Max      |
| -------------------------------------- | ----------------------------------------- | ----------------------- | --------- | --------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.64 µs/iter (13,645)  | 8.5 µs    | 11.7 µs   | 37.6 µs  | 5.54 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 25.28 µs/iter (25,277)  | 18.6 µs   | 22.6 µs   | 154.9 µs | 4.16 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 793.1 µs/iter (793,101) | 656.61 µs | 747.51 µs | 1.51 ms  | 11.17 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 14.17 µs/iter (14,171)   | 8.4 µs    | 11.7 µs   | 40.7 µs  | 6.56 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 24.63 µs/iter (24,627)   | 18.5 µs   | 21.5 µs   | 158.6 µs | 4.29 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 851.63 µs/iter (851,635) | 661.41 µs | 773.51 µs | 2.16 ms  | 6.81 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 16.32 µs/iter (16,316)   | 9.1 µs    | 13.8 µs   | 51.4 µs  | 4.81 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 28.07 µs/iter (28,072)   | 22.5 µs   | 24.5 µs   | 175.8 µs | 3.22 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.01 ms/iter (1,014,445) | 856.61 µs | 953.81 µs | 2.09 ms  | 4.53 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                 | p75     | p99     | Min      | Max     |
| -------------------------------------- | ------------------------------------------- | ----------------------- | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 66.39 µs/iter (66,387)  | 45.1 µs | 48.3 µs | 548.9 µs | 4.53 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 74 µs/iter (74,001)     | 59.6 µs | 64.8 µs | 280.6 µs | 6.9 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.6 ms/iter (1,596,088) | 1.28 ms | 1.4 ms  | 4.29 ms  | 4.32 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                | p75       | p99       | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | ---------------------- | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 16.68 µs/iter (16,676) | 8.3 µs    | 14.4 µs   | 50 µs    | 4.35 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 25.09 µs/iter (25,095) | 18.3 µs   | 22.1 µs   | 160.4 µs | 4.28 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 995 µs/iter (995,004)  | 793.61 µs | 920.41 µs | 2.64 ms  | 5.81 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 16.18 µs/iter (16,175)   | 8.3 µs    | 14.3 µs   | 55 µs    | 5.25 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 25.55 µs/iter (25,546)   | 18.8 µs   | 23.3 µs   | 150.3 µs | 1.4 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 963.19 µs/iter (963,187) | 791.41 µs | 844.71 µs | 2.42 ms  | 11.55 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 91.26 µs/iter (91,262)   | 77.4 µs   | 82.3 µs   | 320.7 µs  | 5.67 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 354.76 µs/iter (354,761) | 298 µs    | 337.4 µs  | 898.01 µs | 4.46 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 929.3 µs/iter (929,302)  | 790.71 µs | 834.71 µs | 2.22 ms   | 4.23 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 488.16 ns/iter (488.163) | 452.11 ns | 500.62 ns | 667.12 ns | 737.94 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 816.51 ns/iter (816.512) | 733.89 ns | 804.26 ns | 1.42 µs   | 1.42 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.35 µs/iter (1,353.665) | 1.1 µs    | 1.35 µs   | 2.5 µs    | 2.5 µs    |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 602.92 ns/iter (602.921) | 557.66 ns | 600.71 ns | 1.12 µs | 1.12 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.27 µs/iter (1,271.975) | 1.11 µs   | 1.19 µs   | 2.13 µs | 2.13 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.81 µs/iter (1,809.288) | 1.4 µs    | 1.99 µs   | 2.67 µs | 2.67 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 495.81 ns/iter (495.811) | 455.17 ns | 495.62 ns | 743.11 ns | 1.52 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 814.24 ns/iter (814.235) | 727.93 ns | 830.23 ns | 1.19 µs   | 1.19 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.31 µs/iter (1,309.357) | 1.1 µs    | 1.25 µs   | 2.49 µs   | 2.49 µs |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 534.98 ns/iter (534.983) | 489.33 ns | 538.14 ns | 647.54 ns | 748.5 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 755.48 ns/iter (755.475) | 708.67 ns | 769.78 ns | 876.57 ns | 876.57 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.31 µs/iter (1,309.174) | 1.06 µs   | 1.25 µs   | 2.86 µs   | 2.86 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 835.63 ns/iter (835.63)  | 768.14 ns | 852.54 ns | 1.02 µs | 1.02 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.52 µs/iter (1,520.891) | 1.24 µs   | 1.53 µs   | 2.63 µs | 2.63 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 2.02 µs/iter (2,024.999) | 1.95 µs   | 2.07 µs   | 2.2 µs  | 2.2 µs  |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 750.37 ns/iter (750.374) | 678.79 ns | 739.35 ns | 1.37 µs | 1.37 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.43 µs/iter (1,425.506) | 1.19 µs   | 1.38 µs   | 2.45 µs | 2.45 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.39 µs/iter (2,386.633) | 2.27 µs   | 2.45 µs   | 2.66 µs | 2.66 µs |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 580.24 ns/iter (580.24)  | 518.53 ns | 576.56 ns | 1.22 µs | 1.22 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 810.52 ns/iter (810.518) | 758.04 ns | 824.49 ns | 1.06 µs | 1.06 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.3 µs/iter (1,303.941)  | 1.12 µs   | 1.24 µs   | 2.21 µs | 2.21 µs |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 569.21 ns/iter (569.211) | 509.68 ns | 570.62 ns | 1.16 µs | 1.16 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 822.16 ns/iter (822.156) | 753.95 ns | 817.6 ns  | 1.63 µs | 1.63 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.28 µs/iter (1,279.593) | 1.08 µs   | 1.21 µs   | 2.86 µs | 2.86 µs |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75      | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------- | ------------------------ | -------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 665.75 ns/iter (665.749) | 619.7 ns | 673.96 ns | 1.08 µs | 1.08 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1.3 µs/iter (1,302.908)  | 1.03 µs  | 1.38 µs   | 2.51 µs | 2.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.41 µs/iter (1,408.941) | 1.31 µs  | 1.41 µs   | 1.75 µs | 1.75 µs |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                 | p75     | p99     | Min      | Max     |
| -------------------------------------- | ----------------------------------------- | ----------------------- | ------- | ------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 16.89 µs/iter (16,888)  | 10.4 µs | 15.5 µs | 49.5 µs  | 6.87 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 25.68 µs/iter (25,683)  | 11 µs   | 19.2 µs | 120.9 µs | 4.14 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.6 ms/iter (1,604,028) | 1.33 ms | 1.45 ms | 4.9 ms   | 7 ms    |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                 | p75     | p99     | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | ----------------------- | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 19.96 µs/iter (19,959)  | 10.7 µs | 16.4 µs | 74.9 µs  | 3.57 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 32.02 µs/iter (32,021)  | 23.7 µs | 28.5 µs | 137.1 µs | 3.82 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.4 ms/iter (1,395,718) | 1.15 ms | 1.26 ms | 4.27 ms  | 5.17 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.62 µs/iter (1,617.338) | 1.48 µs | 1.63 µs | 2.38 µs  | 2.38 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 33.94 µs/iter (33,939)   | 15.1 µs | 30 µs   | 120 µs   | 1.76 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 46.74 µs/iter (46,743)   | 39.5 µs | 43.2 µs | 109.7 µs | 2.16 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 175.44 ns/iter (175.437) | 161.63 ns | 183.51 ns | 288.44 ns | 293.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 493.86 ns/iter (493.859) | 440.37 ns | 492.51 ns | 1.15 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 36.46 µs/iter (36,460)   | 15 µs     | 30.5 µs   | 141.3 µs  | 5.54 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.72 µs/iter (4,722.623) | 4.43 µs | 4.86 µs | 5.62 µs | 5.62 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 22.32 µs/iter (22,323)   | 18.8 µs | 21.5 µs | 39.1 µs | 2.12 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 35.76 µs/iter (35,759)   | 28.9 µs | 31.4 µs | 89.6 µs | 6.57 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 157.23 ns/iter (157.235) | 143.71 ns | 164.19 ns | 271.8 ns | 355.78 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.74 µs/iter (1,736.173) | 1.66 µs   | 1.76 µs   | 1.93 µs  | 1.93 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 155.97 µs/iter (155,975) | 132.7 µs  | 149.7 µs  | 343.1 µs | 5.86 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 16.03 µs/iter (16,030)   | 10.5 µs | 14.8 µs | 38.6 µs | 3.61 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 23.24 µs/iter (23,240)   | 13.6 µs | 19.3 µs | 61.7 µs | 8.02 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.61 ms/iter (1,609,435) | 1.36 ms | 1.49 ms | 4.62 ms | 5.05 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 16.01 µs/iter (16,011)   | 10.3 µs | 14.8 µs | 41.5 µs | 1.34 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 22.91 µs/iter (22,914)   | 12.4 µs | 19.1 µs | 69.9 µs | 8.07 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.61 ms/iter (1,609,414) | 1.36 ms | 1.47 ms | 4.52 ms | 5.84 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 712.21 ns/iter (712.209) | 671.3 ns | 719.34 ns | 922.86 ns | 922.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 5.38 µs/iter (5,382.193) | 3.54 µs  | 5.91 µs   | 6.91 µs   | 6.91 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 67.8 µs/iter (67,796)    | 53 µs    | 60.2 µs   | 180.9 µs  | 2.46 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 157.23 ns/iter (157.235) | 143.71 ns | 164.19 ns | 271.8 ns  | 355.78 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 175.44 ns/iter (175.437) | 161.63 ns | 183.51 ns | 288.44 ns | 293.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 488.16 ns/iter (488.163) | 452.11 ns | 500.62 ns | 667.12 ns | 737.94 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 493.86 ns/iter (493.859) | 440.37 ns | 492.51 ns | 1.15 µs   | 1.49 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 495.81 ns/iter (495.811) | 455.17 ns | 495.62 ns | 743.11 ns | 1.52 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 534.98 ns/iter (534.983) | 489.33 ns | 538.14 ns | 647.54 ns | 748.5 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 554.35 ns/iter (554.352) | 525.53 ns | 562.08 ns | 652.98 ns | 673.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 559.28 ns/iter (559.275) | 527.26 ns | 568.99 ns | 675.04 ns | 678.11 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 562.1 ns/iter (562.099)  | 527.55 ns | 564.95 ns | 778.45 ns | 844.68 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 569.21 ns/iter (569.211) | 509.68 ns | 570.62 ns | 1.16 µs   | 1.16 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 570.57 ns/iter (570.574) | 528.23 ns | 571.66 ns | 764.45 ns | 764.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 573.5 ns/iter (573.503)  | 514.85 ns | 558.7 ns  | 1.65 µs   | 1.65 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 580.24 ns/iter (580.24)  | 518.53 ns | 576.56 ns | 1.22 µs   | 1.22 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 585.34 ns/iter (585.337) | 540.95 ns | 589.72 ns | 1.04 µs   | 1.04 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 585.98 ns/iter (585.985) | 541.26 ns | 589.83 ns | 1.07 µs   | 1.07 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 602.92 ns/iter (602.921) | 557.66 ns | 600.71 ns | 1.12 µs   | 1.12 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 605.72 ns/iter (605.722) | 556.15 ns | 605.66 ns | 1.09 µs   | 1.09 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 615.36 ns/iter (615.362) | 568.04 ns | 609.49 ns | 1.26 µs   | 1.26 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 665.75 ns/iter (665.749) | 619.7 ns  | 673.96 ns | 1.08 µs   | 1.08 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 712.21 ns/iter (712.209) | 671.3 ns  | 719.34 ns | 922.86 ns | 922.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 750.37 ns/iter (750.374) | 678.79 ns | 739.35 ns | 1.37 µs   | 1.37 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 755.48 ns/iter (755.475) | 708.67 ns | 769.78 ns | 876.57 ns | 876.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 810.52 ns/iter (810.518) | 758.04 ns | 824.49 ns | 1.06 µs   | 1.06 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 814.24 ns/iter (814.235) | 727.93 ns | 830.23 ns | 1.19 µs   | 1.19 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 816.51 ns/iter (816.512) | 733.89 ns | 804.26 ns | 1.42 µs   | 1.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 822.16 ns/iter (822.156) | 753.95 ns | 817.6 ns  | 1.63 µs   | 1.63 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 835.63 ns/iter (835.63)  | 768.14 ns | 852.54 ns | 1.02 µs   | 1.02 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.18 µs/iter (1,184.168) | 1.02 µs   | 1.12 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.24 µs/iter (1,243.992) | 1.05 µs   | 1.21 µs   | 2.09 µs   | 2.09 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.27 µs/iter (1,271.975) | 1.11 µs   | 1.19 µs   | 2.13 µs   | 2.13 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.28 µs/iter (1,279.593) | 1.08 µs   | 1.21 µs   | 2.86 µs   | 2.86 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1.3 µs/iter (1,302.908)  | 1.03 µs   | 1.38 µs   | 2.51 µs   | 2.51 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.3 µs/iter (1,303.941)  | 1.12 µs   | 1.24 µs   | 2.21 µs   | 2.21 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.31 µs/iter (1,309.174) | 1.06 µs   | 1.25 µs   | 2.86 µs   | 2.86 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.31 µs/iter (1,309.357) | 1.1 µs    | 1.25 µs   | 2.49 µs   | 2.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.32 µs/iter (1,321.22)  | 1.12 µs   | 1.25 µs   | 2.1 µs    | 2.1 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.35 µs/iter (1,348.05)  | 1.12 µs   | 1.3 µs    | 2.32 µs   | 2.32 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.35 µs/iter (1,353.665) | 1.1 µs    | 1.35 µs   | 2.5 µs    | 2.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.35 µs/iter (1,354.931) | 1.12 µs   | 1.27 µs   | 2.49 µs   | 2.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.37 µs/iter (1,371.402) | 1.17 µs   | 1.32 µs   | 2.19 µs   | 2.19 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.41 µs/iter (1,408.941) | 1.31 µs   | 1.41 µs   | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.41 µs/iter (1,414.41)  | 1.19 µs   | 1.38 µs   | 2.3 µs    | 2.3 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.43 µs/iter (1,425.506) | 1.19 µs   | 1.38 µs   | 2.45 µs   | 2.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.43 µs/iter (1,426.272) | 1.19 µs   | 1.35 µs   | 2.96 µs   | 2.96 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.43 µs/iter (1,426.87)  | 1.2 µs    | 1.41 µs   | 2.54 µs   | 2.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.52 µs/iter (1,520.891) | 1.24 µs   | 1.53 µs   | 2.63 µs   | 2.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.52 µs/iter (1,524.54)  | 1.41 µs   | 1.57 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.55 µs/iter (1,545.756) | 1.37 µs   | 1.55 µs   | 2.34 µs   | 2.34 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.55 µs/iter (1,549.397) | 1.4 µs    | 1.57 µs   | 2.13 µs   | 2.13 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.55 µs/iter (1,551.862) | 1.44 µs   | 1.59 µs   | 2.06 µs   | 2.06 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.56 µs/iter (1,555.523) | 1.4 µs    | 1.59 µs   | 2.58 µs   | 2.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.56 µs/iter (1,561.031) | 1.39 µs   | 1.59 µs   | 2.59 µs   | 2.59 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.6 µs/iter (1,599.348)  | 1.42 µs   | 1.6 µs    | 2.68 µs   | 2.68 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.62 µs/iter (1,617.338) | 1.48 µs   | 1.63 µs   | 2.38 µs   | 2.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.71 µs/iter (1,708.496) | 1.49 µs   | 1.73 µs   | 2.61 µs   | 2.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.74 µs/iter (1,736.173) | 1.66 µs   | 1.76 µs   | 1.93 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.81 µs/iter (1,809.288) | 1.4 µs    | 1.99 µs   | 2.67 µs   | 2.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 2.02 µs/iter (2,024.782) | 1.9 µs    | 2.05 µs   | 2.75 µs   | 2.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 2.02 µs/iter (2,024.999) | 1.95 µs   | 2.07 µs   | 2.2 µs    | 2.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.39 µs/iter (2,386.633) | 2.27 µs   | 2.45 µs   | 2.66 µs   | 2.66 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.72 µs/iter (4,722.623) | 4.43 µs   | 4.86 µs   | 5.62 µs   | 5.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 5.38 µs/iter (5,382.193) | 3.54 µs   | 5.91 µs   | 6.91 µs   | 6.91 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.64 µs/iter (13,645)   | 8.5 µs    | 11.7 µs   | 37.6 µs   | 5.54 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 14.17 µs/iter (14,171)   | 8.4 µs    | 11.7 µs   | 40.7 µs   | 6.56 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 16.01 µs/iter (16,011)   | 10.3 µs   | 14.8 µs   | 41.5 µs   | 1.34 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 16.03 µs/iter (16,030)   | 10.5 µs   | 14.8 µs   | 38.6 µs   | 3.61 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 16.18 µs/iter (16,175)   | 8.3 µs    | 14.3 µs   | 55 µs     | 5.25 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 16.32 µs/iter (16,316)   | 9.1 µs    | 13.8 µs   | 51.4 µs   | 4.81 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 16.68 µs/iter (16,676)   | 8.5 µs    | 14.4 µs   | 46.6 µs   | 2.99 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 16.68 µs/iter (16,676)   | 8.3 µs    | 14.4 µs   | 50 µs     | 4.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 16.89 µs/iter (16,888)   | 10.4 µs   | 15.5 µs   | 49.5 µs   | 6.87 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 19.96 µs/iter (19,959)   | 10.7 µs   | 16.4 µs   | 74.9 µs   | 3.57 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 21.27 µs/iter (21,267)   | 11.2 µs   | 16.4 µs   | 64.1 µs   | 8.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 22.32 µs/iter (22,323)   | 18.8 µs   | 21.5 µs   | 39.1 µs   | 2.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 22.91 µs/iter (22,914)   | 12.4 µs   | 19.1 µs   | 69.9 µs   | 8.07 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 23.24 µs/iter (23,240)   | 13.6 µs   | 19.3 µs   | 61.7 µs   | 8.02 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 24.63 µs/iter (24,627)   | 18.5 µs   | 21.5 µs   | 158.6 µs  | 4.29 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 25.09 µs/iter (25,095)   | 18.3 µs   | 22.1 µs   | 160.4 µs  | 4.28 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 25.28 µs/iter (25,277)   | 18.6 µs   | 22.6 µs   | 154.9 µs  | 4.16 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 25.48 µs/iter (25,483)   | 19.9 µs   | 22.2 µs   | 138.5 µs  | 5.01 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 25.55 µs/iter (25,546)   | 18.8 µs   | 23.3 µs   | 150.3 µs  | 1.4 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 25.68 µs/iter (25,683)   | 11 µs     | 19.2 µs   | 120.9 µs  | 4.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 28.07 µs/iter (28,072)   | 22.5 µs   | 24.5 µs   | 175.8 µs  | 3.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 30.01 µs/iter (30,012)   | 20.3 µs   | 22.7 µs   | 167.4 µs  | 7.83 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 32.02 µs/iter (32,021)   | 23.7 µs   | 28.5 µs   | 137.1 µs  | 3.82 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 33.94 µs/iter (33,939)   | 15.1 µs   | 30 µs     | 120 µs    | 1.76 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 35.76 µs/iter (35,759)   | 28.9 µs   | 31.4 µs   | 89.6 µs   | 6.57 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 36.46 µs/iter (36,460)   | 15 µs     | 30.5 µs   | 141.3 µs  | 5.54 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 46.74 µs/iter (46,743)   | 39.5 µs   | 43.2 µs   | 109.7 µs  | 2.16 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 66.39 µs/iter (66,387)   | 45.1 µs   | 48.3 µs   | 548.9 µs  | 4.53 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 67.8 µs/iter (67,796)    | 53 µs     | 60.2 µs   | 180.9 µs  | 2.46 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 74 µs/iter (74,001)      | 59.6 µs   | 64.8 µs   | 280.6 µs  | 6.9 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 91.26 µs/iter (91,262)   | 77.4 µs   | 82.3 µs   | 320.7 µs  | 5.67 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 155.97 µs/iter (155,975) | 132.7 µs  | 149.7 µs  | 343.1 µs  | 5.86 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 354.76 µs/iter (354,761) | 298 µs    | 337.4 µs  | 898.01 µs | 4.46 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 793.1 µs/iter (793,101)  | 656.61 µs | 747.51 µs | 1.51 ms   | 11.17 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 851.63 µs/iter (851,635) | 661.41 µs | 773.51 µs | 2.16 ms   | 6.81 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 897.53 µs/iter (897,531) | 755.31 µs | 981.41 µs | 1.87 ms   | 3.34 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 929.3 µs/iter (929,302)  | 790.71 µs | 834.71 µs | 2.22 ms   | 4.23 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 963.19 µs/iter (963,187) | 791.41 µs | 844.71 µs | 2.42 ms   | 11.55 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 995 µs/iter (995,004)    | 793.61 µs | 920.41 µs | 2.64 ms   | 5.81 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.01 ms/iter (1,014,445) | 856.61 µs | 953.81 µs | 2.09 ms   | 4.53 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.33 ms/iter (1,325,864) | 1.03 ms   | 1.27 ms   | 3.46 ms   | 6.55 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.4 ms/iter (1,395,718)  | 1.15 ms   | 1.26 ms   | 4.27 ms   | 5.17 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.6 ms/iter (1,596,088)  | 1.28 ms   | 1.4 ms    | 4.29 ms   | 4.32 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.6 ms/iter (1,604,028)  | 1.33 ms   | 1.45 ms   | 4.9 ms    | 7 ms      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.61 ms/iter (1,609,414) | 1.36 ms   | 1.47 ms   | 4.52 ms   | 5.84 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.61 ms/iter (1,609,435) | 1.36 ms   | 1.49 ms   | 4.62 ms   | 5.05 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------- | -------------------------- | -------- | -------- | -------- | -------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 68.77 µs/iter (68,770.192) | 9.82 µs  | 74.52 µs | 79.16 µs | 79.62 µs |
| node v18.7.0 (x64-linux)               | http      | 68.02 µs/iter (68,018.197) | 9.89 µs  | 74.05 µs | 77.29 µs | 78.67 µs |
| bun 0.1.5 (x64-linux)                  | http      | 65.63 µs/iter (65,634.274) | 14.11 µs | 74.24 µs | 77.73 µs | 78.69 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 193.52 ns/iter (193.52)  | 174.17 ns | 188.78 ns | 375.92 ns | 817.4 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 398.57 ns/iter (398.568) | 371.37 ns | 409.8 ns  | 504.34 ns | 536.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 407.52 ns/iter (407.523) | 384.57 ns | 412.85 ns | 530.66 ns | 650.33 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 307.68 ns/iter (307.675) | 284.5 ns  | 310.88 ns | 435.17 ns | 495.33 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 315.08 ns/iter (315.081) | 289.17 ns | 312.73 ns | 513.25 ns | 1.21 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 490.48 ns/iter (490.485) | 439.85 ns | 507.48 ns | 613.68 ns | 675.17 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 193.52 ns/iter (193.52)  | 174.17 ns | 188.78 ns | 375.92 ns | 817.4 ns  |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 307.68 ns/iter (307.675) | 284.5 ns  | 310.88 ns | 435.17 ns | 495.33 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 315.08 ns/iter (315.081) | 289.17 ns | 312.73 ns | 513.25 ns | 1.21 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 398.57 ns/iter (398.568) | 371.37 ns | 409.8 ns  | 504.34 ns | 536.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 407.52 ns/iter (407.523) | 384.57 ns | 412.85 ns | 530.66 ns | 650.33 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 490.48 ns/iter (490.485) | 439.85 ns | 507.48 ns | 613.68 ns | 675.17 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 692.44 ns/iter (692.437) | 634.51 ns | 695.74 ns | 1.13 µs | 1.13 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.57 µs/iter (1,568.389) | 1.44 µs   | 1.61 µs   | 2.24 µs | 2.24 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.2 µs/iter (2,202.829)  | 2.06 µs   | 2.28 µs   | 2.74 µs | 2.74 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.41 µs/iter (2,413.222) | 2.13 µs | 2.46 µs | 2.86 µs | 2.86 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 6.38 µs/iter (6,380)     | 2.8 µs  | 7.6 µs  | 13.2 µs | 7.71 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 18.05 µs/iter (18,053)   | 8.9 µs  | 18.1 µs | 31.1 µs | 2.08 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                 | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ----------------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.74 µs/iter (2,741.31) | 2.47 µs | 2.81 µs | 3.04 µs | 3.04 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.53 µs/iter (10,533)  | 5 µs    | 11.7 µs | 22.4 µs | 4.28 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 34.86 µs/iter (34,862)  | 19.9 µs | 33.3 µs | 98.4 µs | 2.25 ms |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.41 µs/iter (2,413.222) | 2.13 µs | 2.46 µs | 2.86 µs | 2.86 µs |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.74 µs/iter (2,741.31)  | 2.47 µs | 2.81 µs | 3.04 µs | 3.04 µs |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 6.38 µs/iter (6,380)     | 2.8 µs  | 7.6 µs  | 13.2 µs | 7.71 ms |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.53 µs/iter (10,533)   | 5 µs    | 11.7 µs | 22.4 µs | 4.28 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 18.05 µs/iter (18,053)   | 8.9 µs  | 18.1 µs | 31.1 µs | 2.08 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 34.86 µs/iter (34,862)   | 19.9 µs | 33.3 µs | 98.4 µs | 2.25 ms |

