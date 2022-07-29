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
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 551.38 ns/iter (551.378) | 515.75 ns | 563.74 ns | 721.07 ns | 729.01 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.3 µs/iter (1,299.095)  | 1.08 µs   | 1.26 µs   | 2.2 µs    | 2.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.56 µs/iter (1,558.828) | 1.41 µs   | 1.56 µs   | 2.62 µs   | 2.62 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 593.84 ns/iter (593.842) | 543.09 ns | 607.22 ns | 1.38 µs | 1.38 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.22 µs/iter (1,216.915) | 1.03 µs   | 1.15 µs   | 2.05 µs | 2.05 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.65 µs/iter (1,654.242) | 1.49 µs   | 1.62 µs   | 2.86 µs | 2.86 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 552.42 ns/iter (552.423) | 527.31 ns | 570.77 ns | 628.14 ns | 653.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.33 µs/iter (1,332.321) | 1.13 µs   | 1.26 µs   | 2.16 µs   | 2.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.48 µs/iter (1,475.433) | 1.38 µs   | 1.51 µs   | 1.63 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 552.34 ns/iter (552.336) | 525.75 ns | 551.96 ns | 785.64 ns | 824.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.3 µs/iter (1,300.194)  | 1.07 µs   | 1.25 µs   | 2.2 µs    | 2.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.5 µs/iter (1,502.682)  | 1.4 µs    | 1.53 µs   | 1.9 µs    | 1.9 µs    |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 588.27 ns/iter (588.266) | 562.25 ns | 591.11 ns | 853.7 ns | 853.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.4 µs/iter (1,396.835)  | 1.18 µs   | 1.33 µs   | 2.34 µs  | 2.34 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.58 µs/iter (1,576.775) | 1.49 µs   | 1.59 µs   | 1.82 µs  | 1.82 µs  |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99      | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 630.67 ns/iter (630.674) | 554.93 ns | 645.4 ns | 1.28 µs | 1.28 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.44 µs/iter (1,444.44)  | 1.2 µs    | 1.38 µs  | 3.38 µs | 3.38 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.95 µs/iter (1,947.458) | 1.83 µs   | 1.98 µs  | 2.25 µs | 2.25 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 548.29 ns/iter (548.295) | 525.55 ns | 549.07 ns | 619.84 ns | 671.82 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.41 µs/iter (1,410.304) | 1.2 µs    | 1.34 µs   | 3.11 µs   | 3.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.54 µs/iter (1,543.034) | 1.46 µs   | 1.57 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99      | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 555.06 ns/iter (555.064) | 528.66 ns | 558.9 ns | 665.41 ns | 887.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.44 µs/iter (1,442.485) | 1.22 µs   | 1.36 µs  | 2.5 µs    | 2.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.57 µs/iter (1,566.66)  | 1.45 µs   | 1.58 µs  | 2.34 µs   | 2.34 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 599.92 ns/iter (599.923) | 539.06 ns | 607.66 ns | 1.1 µs  | 1.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.36 µs/iter (1,358.018) | 1.15 µs   | 1.29 µs   | 2.13 µs | 2.13 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.57 µs/iter (1,569.861) | 1.46 µs   | 1.58 µs   | 2.29 µs | 2.29 µs |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99     | Min       | Max      |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | ------- | --------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 16.87 µs/iter (16,868)   | 8.4 µs    | 14.5 µs | 41 µs     | 9.56 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 25.42 µs/iter (25,424)   | 20.3 µs   | 22.1 µs | 140.21 µs | 1.78 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 921.12 µs/iter (921,120) | 779.73 µs | 1 ms    | 1.7 ms    | 11.82 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min       | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | --------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 20.17 µs/iter (20,167)   | 10.8 µs | 16.9 µs | 57.2 µs   | 1.58 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 26.39 µs/iter (26,388)   | 20.4 µs | 22.1 µs | 144.41 µs | 2.52 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.35 ms/iter (1,354,767) | 1.13 ms | 1.31 ms | 3.01 ms   | 4.73 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.39 µs/iter (13,394)   | 8.7 µs    | 11.4 µs   | 29.3 µs   | 3 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 22.96 µs/iter (22,957)   | 18.7 µs   | 20 µs     | 147.81 µs | 6.29 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 858.98 µs/iter (858,982) | 699.33 µs | 755.03 µs | 2.24 ms   | 6.95 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 13.43 µs/iter (13,426)   | 8.7 µs    | 11.4 µs   | 33.5 µs   | 2.21 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 23.26 µs/iter (23,261)   | 18.7 µs   | 20.3 µs   | 149.41 µs | 10.34 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 844.59 µs/iter (844,588) | 712.73 µs | 747.93 µs | 2.05 ms   | 11.94 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 15.32 µs/iter (15,325)   | 9.1 µs    | 13.4 µs   | 33.3 µs   | 1.59 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 27.41 µs/iter (27,413)   | 22.3 µs   | 23.9 µs   | 172.81 µs | 3.81 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.01 ms/iter (1,013,016) | 837.03 µs | 903.34 µs | 2.46 ms   | 11.4 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 66 µs/iter (65,995)      | 45.6 µs | 48 µs   | 567.22 µs | 9.15 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 66.01 µs/iter (66,011)   | 58.9 µs | 62 µs   | 228.01 µs | 906.03 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.54 ms/iter (1,540,238) | 1.26 ms | 1.34 ms | 4.02 ms   | 5.91 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 15.36 µs/iter (15,355)   | 8.4 µs    | 14.5 µs   | 37.5 µs   | 5.67 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 22.46 µs/iter (22,461)   | 18.5 µs   | 19.8 µs   | 124.52 µs | 3.96 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 940.86 µs/iter (940,858) | 764.63 µs | 823.83 µs | 1.98 ms   | 17.92 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 15.35 µs/iter (15,352)   | 8.4 µs    | 14.5 µs   | 38 µs    | 969.74 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 25.02 µs/iter (25,018)   | 18.7 µs   | 22.7 µs   | 61.81 µs | 4.14 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 922.09 µs/iter (922,091) | 768.73 µs | 821.93 µs | 1.82 ms  | 11.33 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 85.25 µs/iter (85,251)   | 74.71 µs  | 81.22 µs  | 271.45 µs | 1.04 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 344 µs/iter (343,999)    | 307.11 µs | 332.51 µs | 868.03 µs | 2.15 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 908.56 µs/iter (908,557) | 763.03 µs | 822.2 µs  | 2.19 ms   | 6.44 ms |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 493.99 ns/iter (493.986) | 452.9 ns  | 491.62 ns | 690.31 ns | 1.59 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 798.36 ns/iter (798.361) | 722.88 ns | 815.12 ns | 1.14 µs   | 1.14 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.35 µs/iter (1,354.129) | 1.15 µs   | 1.39 µs   | 2.4 µs    | 2.4 µs  |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 592.93 ns/iter (592.928) | 556.22 ns | 598.24 ns | 1.15 µs | 1.15 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.32 µs/iter (1,322.277) | 1.14 µs   | 1.24 µs   | 2.75 µs | 2.75 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.62 µs/iter (1,620.421) | 1.34 µs   | 1.73 µs   | 2.21 µs | 2.21 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 482.87 ns/iter (482.871) | 453.1 ns  | 499.01 ns | 555.99 ns | 741.26 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 787.18 ns/iter (787.184) | 715.03 ns | 797.65 ns | 1.33 µs   | 1.33 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.5 µs/iter (1,498.231)  | 1.25 µs   | 1.41 µs   | 2.7 µs    | 2.7 µs    |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 476.54 ns/iter (476.544) | 450.81 ns | 487.69 ns | 579.72 ns | 580.76 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 775.08 ns/iter (775.079) | 707.57 ns | 790.99 ns | 1.52 µs   | 1.52 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.35 µs/iter (1,353.869) | 1.19 µs   | 1.29 µs   | 2.29 µs   | 2.29 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 804.61 ns/iter (804.615) | 710.43 ns | 798.14 ns | 1.31 µs | 1.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.35 µs/iter (1,350.761) | 1.15 µs   | 1.34 µs   | 2.16 µs | 2.16 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 2.02 µs/iter (2,024.247) | 1.86 µs   | 2 µs      | 3.11 µs | 3.11 µs |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 736.66 ns/iter (736.661) | 654.88 ns | 740.98 ns | 1.22 µs | 1.22 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.46 µs/iter (1,456.985) | 1.23 µs   | 1.41 µs   | 2.38 µs | 2.38 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.31 µs/iter (2,305.283) | 2.19 µs   | 2.32 µs   | 2.82 µs | 2.82 µs |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 563.66 ns/iter (563.656) | 504.55 ns | 569.56 ns | 1.17 µs | 1.17 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 806.17 ns/iter (806.166) | 741.74 ns | 809.77 ns | 1.7 µs  | 1.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.34 µs/iter (1,337.123) | 1.15 µs   | 1.27 µs   | 2.24 µs | 2.24 µs |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 576.29 ns/iter (576.291) | 519.45 ns | 585.01 ns | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 781.07 ns/iter (781.069) | 744.19 ns | 804.61 ns | 920.77 ns | 920.77 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.42 µs/iter (1,418.388) | 1.21 µs   | 1.31 µs   | 2.74 µs   | 2.74 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | -------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 648.63 ns/iter (648.628) | 577.59 ns | 664.02 ns | 965.3 ns | 965.3 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.38 µs/iter (1,379.73)  | 1.32 µs   | 1.41 µs   | 1.54 µs  | 1.54 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1.43 µs/iter (1,428.973) | 1.13 µs   | 1.44 µs   | 2.5 µs   | 2.5 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 14.78 µs/iter (14,776)   | 9.7 µs  | 13.6 µs | 38.3 µs | 2.36 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 23.45 µs/iter (23,445)   | 11.2 µs | 19.8 µs | 66.8 µs | 4.91 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.57 ms/iter (1,574,095) | 1.34 ms | 1.41 ms | 4.57 ms | 6.06 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 19.37 µs/iter (19,370)   | 11.5 µs | 16.8 µs | 46.3 µs  | 3 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 29.22 µs/iter (29,224)   | 21.2 µs | 26.1 µs | 104.9 µs | 9.82 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.34 ms/iter (1,340,905) | 1.15 ms | 1.21 ms | 4.04 ms  | 4.49 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min       | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.57 µs/iter (1,572.693) | 1.41 µs | 1.59 µs | 2.12 µs   | 2.12 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 37.64 µs/iter (37,636)   | 14.2 µs | 33.7 µs | 180.01 µs | 1.76 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 45.87 µs/iter (45,866)   | 39.8 µs | 42.7 µs | 99.7 µs   | 2.46 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 170.75 ns/iter (170.753) | 158.11 ns | 176.37 ns | 245.61 ns | 326.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 467.84 ns/iter (467.838) | 437.9 ns  | 478.49 ns | 598.67 ns | 628.41 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 36.75 µs/iter (36,754)   | 15.1 µs   | 32 µs     | 172.51 µs | 6.1 ms    |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 4.48 µs/iter (4,477.069) | 4.33 µs | 4.52 µs | 4.99 µs | 4.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 21.81 µs/iter (21,809)   | 18.8 µs | 21.2 µs | 36.3 µs | 917.93 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 35.05 µs/iter (35,051)   | 26.8 µs | 31.4 µs | 74.4 µs | 1.51 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 151.85 ns/iter (151.852) | 136.54 ns | 153.9 ns  | 395.9 ns  | 712.2 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.84 µs/iter (1,836.256) | 1.72 µs   | 1.83 µs   | 2.87 µs   | 2.87 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 153.1 µs/iter (153,103)  | 136.71 µs | 143.31 µs | 512.92 µs | 2.21 ms  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 15.52 µs/iter (15,523)   | 10.1 µs | 14.4 µs | 35.1 µs | 4.28 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 22.81 µs/iter (22,807)   | 10.9 µs | 19.9 µs | 57.4 µs | 1.17 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.59 ms/iter (1,592,485) | 1.37 ms | 1.43 ms | 4.62 ms | 5.73 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 15.3 µs/iter (15,301)    | 10.1 µs | 14.4 µs | 33.2 µs | 2.29 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 22.17 µs/iter (22,168)   | 11.2 µs | 19.6 µs | 61.9 µs | 5.3 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.62 ms/iter (1,615,099) | 1.37 ms | 1.44 ms | 4.74 ms | 5.39 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75      | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | -------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 704.47 ns/iter (704.469) | 652.5 ns | 713.77 ns | 1.46 µs   | 1.46 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 5.04 µs/iter (5,044.463) | 3.41 µs  | 5.65 µs   | 6.74 µs   | 6.74 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 66.45 µs/iter (66,448)   | 53.6 µs  | 60.1 µs   | 133.91 µs | 7.97 ms |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 151.85 ns/iter (151.852) | 136.54 ns | 153.9 ns  | 395.9 ns  | 712.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 170.75 ns/iter (170.753) | 158.11 ns | 176.37 ns | 245.61 ns | 326.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 467.84 ns/iter (467.838) | 437.9 ns  | 478.49 ns | 598.67 ns | 628.41 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 476.54 ns/iter (476.544) | 450.81 ns | 487.69 ns | 579.72 ns | 580.76 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 482.87 ns/iter (482.871) | 453.1 ns  | 499.01 ns | 555.99 ns | 741.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 493.99 ns/iter (493.986) | 452.9 ns  | 491.62 ns | 690.31 ns | 1.59 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 548.29 ns/iter (548.295) | 525.55 ns | 549.07 ns | 619.84 ns | 671.82 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 551.38 ns/iter (551.378) | 515.75 ns | 563.74 ns | 721.07 ns | 729.01 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 552.34 ns/iter (552.336) | 525.75 ns | 551.96 ns | 785.64 ns | 824.31 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 552.42 ns/iter (552.423) | 527.31 ns | 570.77 ns | 628.14 ns | 653.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 555.06 ns/iter (555.064) | 528.66 ns | 558.9 ns  | 665.41 ns | 887.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 563.66 ns/iter (563.656) | 504.55 ns | 569.56 ns | 1.17 µs   | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 576.29 ns/iter (576.291) | 519.45 ns | 585.01 ns | 1.41 µs   | 1.41 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 588.27 ns/iter (588.266) | 562.25 ns | 591.11 ns | 853.7 ns  | 853.7 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 592.93 ns/iter (592.928) | 556.22 ns | 598.24 ns | 1.15 µs   | 1.15 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 593.84 ns/iter (593.842) | 543.09 ns | 607.22 ns | 1.38 µs   | 1.38 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 599.92 ns/iter (599.923) | 539.06 ns | 607.66 ns | 1.1 µs    | 1.1 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 630.67 ns/iter (630.674) | 554.93 ns | 645.4 ns  | 1.28 µs   | 1.28 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 648.63 ns/iter (648.628) | 577.59 ns | 664.02 ns | 965.3 ns  | 965.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 704.47 ns/iter (704.469) | 652.5 ns  | 713.77 ns | 1.46 µs   | 1.46 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 736.66 ns/iter (736.661) | 654.88 ns | 740.98 ns | 1.22 µs   | 1.22 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 775.08 ns/iter (775.079) | 707.57 ns | 790.99 ns | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 781.07 ns/iter (781.069) | 744.19 ns | 804.61 ns | 920.77 ns | 920.77 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 787.18 ns/iter (787.184) | 715.03 ns | 797.65 ns | 1.33 µs   | 1.33 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 798.36 ns/iter (798.361) | 722.88 ns | 815.12 ns | 1.14 µs   | 1.14 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 804.61 ns/iter (804.615) | 710.43 ns | 798.14 ns | 1.31 µs   | 1.31 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 806.17 ns/iter (806.166) | 741.74 ns | 809.77 ns | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 1.22 µs/iter (1,216.915) | 1.03 µs   | 1.15 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.3 µs/iter (1,299.095)  | 1.08 µs   | 1.26 µs   | 2.2 µs    | 2.2 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.3 µs/iter (1,300.194)  | 1.07 µs   | 1.25 µs   | 2.2 µs    | 2.2 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.32 µs/iter (1,322.277) | 1.14 µs   | 1.24 µs   | 2.75 µs   | 2.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.33 µs/iter (1,332.321) | 1.13 µs   | 1.26 µs   | 2.16 µs   | 2.16 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.34 µs/iter (1,337.123) | 1.15 µs   | 1.27 µs   | 2.24 µs   | 2.24 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.35 µs/iter (1,350.761) | 1.15 µs   | 1.34 µs   | 2.16 µs   | 2.16 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.35 µs/iter (1,353.869) | 1.19 µs   | 1.29 µs   | 2.29 µs   | 2.29 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.35 µs/iter (1,354.129) | 1.15 µs   | 1.39 µs   | 2.4 µs    | 2.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 1.36 µs/iter (1,358.018) | 1.15 µs   | 1.29 µs   | 2.13 µs   | 2.13 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.38 µs/iter (1,379.73)  | 1.32 µs   | 1.41 µs   | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.4 µs/iter (1,396.835)  | 1.18 µs   | 1.33 µs   | 2.34 µs   | 2.34 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.41 µs/iter (1,410.304) | 1.2 µs    | 1.34 µs   | 3.11 µs   | 3.11 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.42 µs/iter (1,418.388) | 1.21 µs   | 1.31 µs   | 2.74 µs   | 2.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1.43 µs/iter (1,428.973) | 1.13 µs   | 1.44 µs   | 2.5 µs    | 2.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.44 µs/iter (1,442.485) | 1.22 µs   | 1.36 µs   | 2.5 µs    | 2.5 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.44 µs/iter (1,444.44)  | 1.2 µs    | 1.38 µs   | 3.38 µs   | 3.38 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.46 µs/iter (1,456.985) | 1.23 µs   | 1.41 µs   | 2.38 µs   | 2.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.48 µs/iter (1,475.433) | 1.38 µs   | 1.51 µs   | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.5 µs/iter (1,498.231)  | 1.25 µs   | 1.41 µs   | 2.7 µs    | 2.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.5 µs/iter (1,502.682)  | 1.4 µs    | 1.53 µs   | 1.9 µs    | 1.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.54 µs/iter (1,543.034) | 1.46 µs   | 1.57 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.56 µs/iter (1,558.828) | 1.41 µs   | 1.56 µs   | 2.62 µs   | 2.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.57 µs/iter (1,566.66)  | 1.45 µs   | 1.58 µs   | 2.34 µs   | 2.34 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.57 µs/iter (1,569.861) | 1.46 µs   | 1.58 µs   | 2.29 µs   | 2.29 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.57 µs/iter (1,572.693) | 1.41 µs   | 1.59 µs   | 2.12 µs   | 2.12 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.58 µs/iter (1,576.775) | 1.49 µs   | 1.59 µs   | 1.82 µs   | 1.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.62 µs/iter (1,620.421) | 1.34 µs   | 1.73 µs   | 2.21 µs   | 2.21 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.65 µs/iter (1,654.242) | 1.49 µs   | 1.62 µs   | 2.86 µs   | 2.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.84 µs/iter (1,836.256) | 1.72 µs   | 1.83 µs   | 2.87 µs   | 2.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.95 µs/iter (1,947.458) | 1.83 µs   | 1.98 µs   | 2.25 µs   | 2.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 2.02 µs/iter (2,024.247) | 1.86 µs   | 2 µs      | 3.11 µs   | 3.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.31 µs/iter (2,305.283) | 2.19 µs   | 2.32 µs   | 2.82 µs   | 2.82 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 4.48 µs/iter (4,477.069) | 4.33 µs   | 4.52 µs   | 4.99 µs   | 4.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 5.04 µs/iter (5,044.463) | 3.41 µs   | 5.65 µs   | 6.74 µs   | 6.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.39 µs/iter (13,394)   | 8.7 µs    | 11.4 µs   | 29.3 µs   | 3 ms      |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 13.43 µs/iter (13,426)   | 8.7 µs    | 11.4 µs   | 33.5 µs   | 2.21 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 14.78 µs/iter (14,776)   | 9.7 µs    | 13.6 µs   | 38.3 µs   | 2.36 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 15.3 µs/iter (15,301)    | 10.1 µs   | 14.4 µs   | 33.2 µs   | 2.29 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 15.32 µs/iter (15,325)   | 9.1 µs    | 13.4 µs   | 33.3 µs   | 1.59 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 15.35 µs/iter (15,352)   | 8.4 µs    | 14.5 µs   | 38 µs     | 969.74 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 15.36 µs/iter (15,355)   | 8.4 µs    | 14.5 µs   | 37.5 µs   | 5.67 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 15.52 µs/iter (15,523)   | 10.1 µs   | 14.4 µs   | 35.1 µs   | 4.28 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 16.87 µs/iter (16,868)   | 8.4 µs    | 14.5 µs   | 41 µs     | 9.56 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 19.37 µs/iter (19,370)   | 11.5 µs   | 16.8 µs   | 46.3 µs   | 3 ms      |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 20.17 µs/iter (20,167)   | 10.8 µs   | 16.9 µs   | 57.2 µs   | 1.58 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 21.81 µs/iter (21,809)   | 18.8 µs   | 21.2 µs   | 36.3 µs   | 917.93 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 22.17 µs/iter (22,168)   | 11.2 µs   | 19.6 µs   | 61.9 µs   | 5.3 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 22.46 µs/iter (22,461)   | 18.5 µs   | 19.8 µs   | 124.52 µs | 3.96 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 22.81 µs/iter (22,807)   | 10.9 µs   | 19.9 µs   | 57.4 µs   | 1.17 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 22.96 µs/iter (22,957)   | 18.7 µs   | 20 µs     | 147.81 µs | 6.29 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 23.26 µs/iter (23,261)   | 18.7 µs   | 20.3 µs   | 149.41 µs | 10.34 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 23.45 µs/iter (23,445)   | 11.2 µs   | 19.8 µs   | 66.8 µs   | 4.91 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 25.02 µs/iter (25,018)   | 18.7 µs   | 22.7 µs   | 61.81 µs  | 4.14 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 25.42 µs/iter (25,424)   | 20.3 µs   | 22.1 µs   | 140.21 µs | 1.78 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 26.39 µs/iter (26,388)   | 20.4 µs   | 22.1 µs   | 144.41 µs | 2.52 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 27.41 µs/iter (27,413)   | 22.3 µs   | 23.9 µs   | 172.81 µs | 3.81 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 29.22 µs/iter (29,224)   | 21.2 µs   | 26.1 µs   | 104.9 µs  | 9.82 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 35.05 µs/iter (35,051)   | 26.8 µs   | 31.4 µs   | 74.4 µs   | 1.51 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 36.75 µs/iter (36,754)   | 15.1 µs   | 32 µs     | 172.51 µs | 6.1 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 37.64 µs/iter (37,636)   | 14.2 µs   | 33.7 µs   | 180.01 µs | 1.76 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 45.87 µs/iter (45,866)   | 39.8 µs   | 42.7 µs   | 99.7 µs   | 2.46 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 66 µs/iter (65,995)      | 45.6 µs   | 48 µs     | 567.22 µs | 9.15 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 66.01 µs/iter (66,011)   | 58.9 µs   | 62 µs     | 228.01 µs | 906.03 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 66.45 µs/iter (66,448)   | 53.6 µs   | 60.1 µs   | 133.91 µs | 7.97 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 85.25 µs/iter (85,251)   | 74.71 µs  | 81.22 µs  | 271.45 µs | 1.04 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 153.1 µs/iter (153,103)  | 136.71 µs | 143.31 µs | 512.92 µs | 2.21 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 344 µs/iter (343,999)    | 307.11 µs | 332.51 µs | 868.03 µs | 2.15 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 844.59 µs/iter (844,588) | 712.73 µs | 747.93 µs | 2.05 ms   | 11.94 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 858.98 µs/iter (858,982) | 699.33 µs | 755.03 µs | 2.24 ms   | 6.95 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 908.56 µs/iter (908,557) | 763.03 µs | 822.2 µs  | 2.19 ms   | 6.44 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 921.12 µs/iter (921,120) | 779.73 µs | 1 ms      | 1.7 ms    | 11.82 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 922.09 µs/iter (922,091) | 768.73 µs | 821.93 µs | 1.82 ms   | 11.33 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 940.86 µs/iter (940,858) | 764.63 µs | 823.83 µs | 1.98 ms   | 17.92 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.01 ms/iter (1,013,016) | 837.03 µs | 903.34 µs | 2.46 ms   | 11.4 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.34 ms/iter (1,340,905) | 1.15 ms   | 1.21 ms   | 4.04 ms   | 4.49 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.35 ms/iter (1,354,767) | 1.13 ms   | 1.31 ms   | 3.01 ms   | 4.73 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.54 ms/iter (1,540,238) | 1.26 ms   | 1.34 ms   | 4.02 ms   | 5.91 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.57 ms/iter (1,574,095) | 1.34 ms   | 1.41 ms   | 4.57 ms   | 6.06 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.59 ms/iter (1,592,485) | 1.37 ms   | 1.43 ms   | 4.62 ms   | 5.73 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.62 ms/iter (1,615,099) | 1.37 ms   | 1.44 ms   | 4.74 ms   | 5.39 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                   | p75     | p99      | Min      | Max      |
| -------------------------------------- | --------- | ------------------------- | ------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | http      | 65.01 µs/rps (65,008.683) | 13.2 µs | 72.59 µs | 75.5 µs  | 77.18 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 33.87 µs/rps (33,868.851) | 4.93 µs | 37.02 µs | 38.87 µs | 39.4 µs  |
| node v18.7.0 (x64-linux)               | http      | 18.78 µs/rps (18,784.09)  | 3.02 µs | 20.19 µs | 21.52 µs | 23.08 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 192.6 ns/iter (192.597)  | 173.84 ns | 183.25 ns | 359.82 ns | 839.37 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 398.05 ns/iter (398.048) | 372.13 ns | 394.75 ns | 659.66 ns | 1.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 407.44 ns/iter (407.438) | 386.58 ns | 414.55 ns | 503.35 ns | 560.85 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 304.11 ns/iter (304.107) | 287.97 ns | 305.23 ns | 390.84 ns | 413.81 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 312.54 ns/iter (312.538) | 283.23 ns | 312.71 ns | 475.31 ns | 809 ns    |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 490.42 ns/iter (490.417) | 438.52 ns | 501.51 ns | 636.1 ns  | 1.14 µs   |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 192.6 ns/iter (192.597)  | 173.84 ns | 183.25 ns | 359.82 ns | 839.37 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 304.11 ns/iter (304.107) | 287.97 ns | 305.23 ns | 390.84 ns | 413.81 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 312.54 ns/iter (312.538) | 283.23 ns | 312.71 ns | 475.31 ns | 809 ns    |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 398.05 ns/iter (398.048) | 372.13 ns | 394.75 ns | 659.66 ns | 1.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 407.44 ns/iter (407.438) | 386.58 ns | 414.55 ns | 503.35 ns | 560.85 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 490.42 ns/iter (490.417) | 438.52 ns | 501.51 ns | 636.1 ns  | 1.14 µs   |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 697.05 ns/iter (697.046) | 624.36 ns | 690.04 ns | 1.6 µs  | 1.6 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.63 µs/iter (1,630.93)  | 1.51 µs   | 1.65 µs   | 2.44 µs | 2.44 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.19 µs/iter (2,190.95)  | 2 µs      | 2.15 µs   | 3.74 µs | 3.74 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.42 µs/iter (2,423.142) | 2.08 µs | 2.45 µs | 3.56 µs | 3.56 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 5.75 µs/iter (5,753)     | 2.8 µs  | 7.1 µs  | 13.8 µs | 5.89 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 17.36 µs/iter (17,360)   | 8.5 µs  | 17.8 µs | 30.2 µs | 1.39 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                 | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ----------------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.87 µs/iter (2,865.51) | 2.37 µs | 2.83 µs | 4.31 µs | 4.31 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 12.14 µs/iter (12,145)  | 5.3 µs  | 12.8 µs | 22.5 µs | 4.51 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.55 µs/iter (32,549)  | 18 µs   | 31.9 µs | 50 µs   | 2.84 ms |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.42 µs/iter (2,423.142) | 2.08 µs | 2.45 µs | 3.56 µs | 3.56 µs |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.87 µs/iter (2,865.51)  | 2.37 µs | 2.83 µs | 4.31 µs | 4.31 µs |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 5.75 µs/iter (5,753)     | 2.8 µs  | 7.1 µs  | 13.8 µs | 5.89 ms |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 12.14 µs/iter (12,145)   | 5.3 µs  | 12.8 µs | 22.5 µs | 4.51 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 17.36 µs/iter (17,360)   | 8.5 µs  | 17.8 µs | 30.2 µs | 1.39 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.55 µs/iter (32,549)   | 18 µs   | 31.9 µs | 50 µs   | 2.84 ms |

