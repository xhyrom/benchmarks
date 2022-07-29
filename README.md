*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [json](#json)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 466.77 ns/iter (466.773) | 452.5 ns  | 465.76 ns | 603.31 ns | 1.02 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 876.22 ns/iter (876.22)  | 774.71 ns | 809.81 ns | 1.72 µs   | 1.72 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.34 µs/iter (1,339.31)  | 1.22 µs   | 1.36 µs   | 2.1 µs    | 2.1 µs  |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 479.79 ns/iter (479.787) | 471.57 ns | 483.13 ns | 510.76 ns | 536.64 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 824.47 ns/iter (824.468) | 733.15 ns | 759.25 ns | 1.43 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.4 µs/iter (1,401.405)  | 1.33 µs   | 1.41 µs   | 1.93 µs   | 1.93 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 467.51 ns/iter (467.506) | 461.5 ns  | 471.52 ns | 495.55 ns | 525.92 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 912.1 ns/iter (912.103)  | 819.62 ns | 844.29 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.31 µs/iter (1,313.102) | 1.26 µs   | 1.34 µs   | 1.61 µs   | 1.61 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 466.99 ns/iter (466.986) | 462.74 ns | 471.18 ns | 490.34 ns | 494.36 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 860.84 ns/iter (860.836) | 775.98 ns | 795.35 ns | 1.42 µs   | 1.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.31 µs/iter (1,305.043) | 1.23 µs   | 1.33 µs   | 1.47 µs   | 1.47 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 495.22 ns/iter (495.219) | 490.28 ns | 499.96 ns | 511.14 ns | 519.04 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 906.9 ns/iter (906.9)    | 806.73 ns | 827.08 ns | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.4 µs/iter (1,400.384)  | 1.35 µs   | 1.41 µs   | 1.44 µs   | 1.44 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 489.54 ns/iter (489.54)  | 483.68 ns | 490.28 ns | 505.92 ns | 514.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 940.5 ns/iter (940.497)  | 812.98 ns | 882.93 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.65 µs/iter (1,653.873) | 1.61 µs   | 1.67 µs   | 1.83 µs   | 1.83 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 472.94 ns/iter (472.944) | 467.3 ns  | 476.6 ns  | 485.33 ns | 489.17 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 909.48 ns/iter (909.476) | 809.14 ns | 838.99 ns | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.34 µs/iter (1,342.561) | 1.26 µs   | 1.37 µs   | 1.43 µs   | 1.43 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 474.37 ns/iter (474.369) | 460.78 ns | 475.13 ns | 508.11 ns | 536.53 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 964.7 ns/iter (964.703)  | 871.52 ns | 891.63 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.35 µs/iter (1,346.051) | 1.28 µs   | 1.37 µs   | 1.42 µs   | 1.42 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 523.65 ns/iter (523.65)  | 513.23 ns | 527.62 ns | 538.17 ns | 538.51 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 882.33 ns/iter (882.328) | 790.13 ns | 826.95 ns | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.41 µs/iter (1,410.549) | 1.37 µs   | 1.43 µs   | 1.49 µs   | 1.49 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 9.29 µs/iter (9,290)     | 6.4 µs    | 8.7 µs    | 16.5 µs  | 4.06 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 21.91 µs/iter (21,912)   | 17 µs     | 20 µs     | 118.9 µs | 2.48 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 809.84 µs/iter (809,841) | 715.31 µs | 782.01 µs | 1.22 ms  | 1.4 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                 | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ----------------------- | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 11.16 µs/iter (11,160)  | 7.2 µs  | 10.7 µs | 29 µs    | 2 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 20.22 µs/iter (20,221)  | 17.1 µs | 17.9 µs | 131.4 µs | 2.99 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.3 ms/iter (1,304,715) | 1.15 ms | 1.2 ms  | 3.43 ms  | 3.84 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 8.34 µs/iter (8,338)     | 6.1 µs    | 7.9 µs    | 18 µs   | 528.23 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 18.6 µs/iter (18,600)    | 14.4 µs   | 15.8 µs   | 48.1 µs | 13.62 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 772.39 µs/iter (772,395) | 681.81 µs | 708.81 µs | 1.7 ms  | 9.59 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 8.06 µs/iter (8,056.924) | 7.9 µs    | 8.11 µs   | 8.43 µs | 8.43 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 17.13 µs/iter (17,126)   | 14.6 µs   | 15.7 µs   | 30.2 µs | 2.88 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 764.53 µs/iter (764,532) | 638.41 µs | 708.71 µs | 1.68 ms | 6.89 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 8.77 µs/iter (8,773)     | 6.5 µs    | 8.1 µs    | 15.3 µs  | 533.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 19.48 µs/iter (19,485)   | 16.2 µs   | 17.4 µs   | 119.6 µs | 2.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 855.38 µs/iter (855,379) | 796.41 µs | 824.92 µs | 1.34 ms  | 1.43 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 47.67 µs/iter (47,674)   | 44.2 µs | 46 µs   | 146.2 µs  | 578.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 50.77 µs/iter (50,771)   | 36.2 µs | 38.1 µs | 532.11 µs | 961.02 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.31 ms/iter (1,310,289) | 1.13 ms | 1.17 ms | 3.06 ms   | 3.12 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 9.96 µs/iter (9,958)     | 6.3 µs    | 9.9 µs    | 18.2 µs | 1.64 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 17.87 µs/iter (17,870)   | 15.1 µs   | 17.3 µs   | 35.7 µs | 1.13 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 802.28 µs/iter (802,278) | 729.41 µs | 749.51 µs | 1.76 ms | 1.83 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 9.7 µs/iter (9,699)      | 6.2 µs    | 9.7 µs    | 17.5 µs | 474.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 18.35 µs/iter (18,350)   | 15.3 µs   | 18.1 µs   | 32.3 µs | 251.91 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 802.41 µs/iter (802,413) | 728.31 µs | 750.21 µs | 1.76 ms | 1.82 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 60.47 µs/iter (60,471)   | 55.7 µs   | 59.7 µs   | 174.5 µs | 227 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 237.28 µs/iter (237,281) | 231.9 µs  | 235.5 µs  | 263.6 µs | 705.21 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 841.04 µs/iter (841,042) | 764.11 µs | 787.12 µs | 1.81 ms  | 1.84 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 356.5 ns/iter (356.495)  | 349.62 ns | 354.97 ns | 410.42 ns | 433.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 551.22 ns/iter (551.219) | 525.44 ns | 554.9 ns  | 576.79 ns | 992.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 966.1 ns/iter (966.104)  | 853.05 ns | 890.91 ns | 1.56 µs   | 1.56 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 428.43 ns/iter (428.428) | 422.48 ns | 427.25 ns | 449.96 ns | 450.99 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 928.12 ns/iter (928.123) | 838.14 ns | 855.15 ns | 1.51 µs   | 1.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.18 µs/iter (1,181.675) | 1.03 µs   | 1.32 µs   | 1.43 µs   | 1.43 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 359.19 ns/iter (359.19)  | 353.42 ns | 358.58 ns | 381.25 ns | 387.72 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 547.02 ns/iter (547.021) | 526.63 ns | 548.6 ns  | 557.47 ns | 1.02 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.02 µs/iter (1,021.686) | 922.94 ns | 943.85 ns | 1.61 µs   | 1.61 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 369.2 ns/iter (369.196)  | 348.37 ns | 384.83 ns | 414.59 ns | 432.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 534.87 ns/iter (534.865) | 527.28 ns | 541.59 ns | 549.83 ns | 557.8 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 952.98 ns/iter (952.979) | 866.3 ns  | 878.12 ns | 1.53 µs   | 1.53 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 428.84 ns/iter (428.841) | 414.95 ns | 432.3 ns  | 460.2 ns | 467.67 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.03 µs/iter (1,031.119) | 934.57 ns | 947.79 ns | 1.6 µs   | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.32 µs/iter (1,323.551) | 1.29 µs   | 1.33 µs   | 1.38 µs  | 1.38 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 432.71 ns/iter (432.71)  | 413.42 ns | 442.6 ns  | 467.29 ns | 474.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.02 µs/iter (1,019.544) | 920.09 ns | 934.11 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.54 µs/iter (1,543.333) | 1.53 µs   | 1.55 µs   | 1.64 µs   | 1.64 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 356.49 ns/iter (356.49)  | 344.71 ns | 355.74 ns | 377.96 ns | 379.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 566.83 ns/iter (566.831) | 558.6 ns  | 572.62 ns | 621.7 ns  | 621.7 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 946.29 ns/iter (946.291) | 847.15 ns | 865.48 ns | 1.54 µs   | 1.54 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 357.02 ns/iter (357.017) | 350.81 ns | 355.73 ns | 382.42 ns | 382.44 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 565.39 ns/iter (565.392) | 549.23 ns | 574.14 ns | 581.34 ns | 581.34 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 972.85 ns/iter (972.855) | 849.64 ns | 957.19 ns | 1.65 µs   | 1.65 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 410.08 ns/iter (410.08)  | 399.16 ns | 411.9 ns  | 440.83 ns | 453.65 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 907.14 ns/iter (907.136) | 803.72 ns | 822.07 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 963.01 ns/iter (963.008) | 947.89 ns | 970.99 ns | 994.17 ns | 994.17 ns |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75    | p99     | Min     | Max     |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------ | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 11.38 µs/iter (11,384)   | 8.6 µs | 11.2 µs | 22.8 µs | 1.11 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 16.92 µs/iter (16,920)   | 8.7 µs | 16 µs   | 35.6 µs | 3.79 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.36 ms/iter (1,362,988) | 1.2 ms | 1.23 ms | 4.11 ms | 4.27 ms |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 12.07 µs/iter (12,069)   | 7.9 µs  | 11.5 µs | 31.5 µs | 1.12 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 20.68 µs/iter (20,675)   | 17.5 µs | 20.6 µs | 32.3 µs | 189.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.19 ms/iter (1,193,749) | 1.05 ms | 1.08 ms | 3.63 ms | 3.79 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min       | Max      |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.12 µs/iter (1,121.534) | 1.09 µs | 1.14 µs | 1.21 µs   | 1.21 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 32.56 µs/iter (32,559)   | 10.3 µs | 23.3 µs | 406.61 µs | 1.07 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 39.24 µs/iter (39,241)   | 35.7 µs | 38.6 µs | 72.3 µs   | 279.7 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 124.63 ns/iter (124.628) | 120.72 ns | 123.19 ns | 135.81 ns | 139.3 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 330.66 ns/iter (330.66)  | 324.22 ns | 328.47 ns | 370 ns    | 448.15 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 30.48 µs/iter (30,481)   | 10.8 µs   | 22.3 µs   | 340.01 µs | 1.46 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.05 µs/iter (3,052.897) | 3.04 µs | 3.06 µs | 3.14 µs | 3.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.85 µs/iter (15,853)   | 14.6 µs | 15.8 µs | 21.3 µs | 469.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 26.61 µs/iter (26,610)   | 21.9 µs | 25.3 µs | 46.5 µs | 1.45 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.48 ns/iter (113.483) | 109.47 ns | 112.27 ns | 124.28 ns | 129.74 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.19 µs/iter (1,188.492) | 1.17 µs   | 1.2 µs    | 1.22 µs   | 1.22 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.38 µs/iter (128,378) | 119.7 µs  | 123.9 µs  | 155.2 µs  | 1.29 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 11.92 µs/iter (11,916)   | 8.5 µs  | 11.7 µs | 24.1 µs | 616.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 15.3 µs/iter (15,299)    | 8.7 µs  | 14.4 µs | 34.4 µs | 1.51 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.41 ms/iter (1,413,898) | 1.24 ms | 1.27 ms | 4.2 ms  | 4.52 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 13.52 µs/iter (13,519)   | 8.7 µs  | 13 µs   | 29.2 µs | 1.19 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 13.91 µs/iter (13,910)   | 8.4 µs  | 13 µs   | 32.5 µs | 1.36 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.39 ms/iter (1,394,979) | 1.24 ms | 1.26 ms | 4.19 ms | 4.25 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 489.47 ns/iter (489.467) | 469.61 ns | 488.8 ns | 525.62 ns | 531.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.54 µs/iter (3,543.97)  | 2.72 µs   | 3.92 µs  | 4.6 µs    | 4.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 52.45 µs/iter (52,448)   | 45.2 µs   | 48.7 µs  | 80.1 µs   | 1.63 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 113.48 ns/iter (113.483) | 109.47 ns | 112.27 ns | 124.28 ns | 129.74 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 124.63 ns/iter (124.628) | 120.72 ns | 123.19 ns | 135.81 ns | 139.3 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 330.66 ns/iter (330.66)  | 324.22 ns | 328.47 ns | 370 ns    | 448.15 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 356.49 ns/iter (356.49)  | 344.71 ns | 355.74 ns | 377.96 ns | 379.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 356.5 ns/iter (356.495)  | 349.62 ns | 354.97 ns | 410.42 ns | 433.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 357.02 ns/iter (357.017) | 350.81 ns | 355.73 ns | 382.42 ns | 382.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 359.19 ns/iter (359.19)  | 353.42 ns | 358.58 ns | 381.25 ns | 387.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 369.2 ns/iter (369.196)  | 348.37 ns | 384.83 ns | 414.59 ns | 432.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 410.08 ns/iter (410.08)  | 399.16 ns | 411.9 ns  | 440.83 ns | 453.65 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 428.43 ns/iter (428.428) | 422.48 ns | 427.25 ns | 449.96 ns | 450.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 428.84 ns/iter (428.841) | 414.95 ns | 432.3 ns  | 460.2 ns  | 467.67 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 432.71 ns/iter (432.71)  | 413.42 ns | 442.6 ns  | 467.29 ns | 474.12 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 466.77 ns/iter (466.773) | 452.5 ns  | 465.76 ns | 603.31 ns | 1.02 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 466.99 ns/iter (466.986) | 462.74 ns | 471.18 ns | 490.34 ns | 494.36 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 467.51 ns/iter (467.506) | 461.5 ns  | 471.52 ns | 495.55 ns | 525.92 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 472.94 ns/iter (472.944) | 467.3 ns  | 476.6 ns  | 485.33 ns | 489.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 474.37 ns/iter (474.369) | 460.78 ns | 475.13 ns | 508.11 ns | 536.53 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 479.79 ns/iter (479.787) | 471.57 ns | 483.13 ns | 510.76 ns | 536.64 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 489.47 ns/iter (489.467) | 469.61 ns | 488.8 ns  | 525.62 ns | 531.15 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 489.54 ns/iter (489.54)  | 483.68 ns | 490.28 ns | 505.92 ns | 514.87 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 495.22 ns/iter (495.219) | 490.28 ns | 499.96 ns | 511.14 ns | 519.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 523.65 ns/iter (523.65)  | 513.23 ns | 527.62 ns | 538.17 ns | 538.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 534.87 ns/iter (534.865) | 527.28 ns | 541.59 ns | 549.83 ns | 557.8 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 547.02 ns/iter (547.021) | 526.63 ns | 548.6 ns  | 557.47 ns | 1.02 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 551.22 ns/iter (551.219) | 525.44 ns | 554.9 ns  | 576.79 ns | 992.84 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 565.39 ns/iter (565.392) | 549.23 ns | 574.14 ns | 581.34 ns | 581.34 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 566.83 ns/iter (566.831) | 558.6 ns  | 572.62 ns | 621.7 ns  | 621.7 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 824.47 ns/iter (824.468) | 733.15 ns | 759.25 ns | 1.43 µs   | 1.43 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 860.84 ns/iter (860.836) | 775.98 ns | 795.35 ns | 1.42 µs   | 1.42 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 876.22 ns/iter (876.22)  | 774.71 ns | 809.81 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 882.33 ns/iter (882.328) | 790.13 ns | 826.95 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 906.9 ns/iter (906.9)    | 806.73 ns | 827.08 ns | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 907.14 ns/iter (907.136) | 803.72 ns | 822.07 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 909.48 ns/iter (909.476) | 809.14 ns | 838.99 ns | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 912.1 ns/iter (912.103)  | 819.62 ns | 844.29 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 928.12 ns/iter (928.123) | 838.14 ns | 855.15 ns | 1.51 µs   | 1.51 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 940.5 ns/iter (940.497)  | 812.98 ns | 882.93 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 946.29 ns/iter (946.291) | 847.15 ns | 865.48 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 952.98 ns/iter (952.979) | 866.3 ns  | 878.12 ns | 1.53 µs   | 1.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 963.01 ns/iter (963.008) | 947.89 ns | 970.99 ns | 994.17 ns | 994.17 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 964.7 ns/iter (964.703)  | 871.52 ns | 891.63 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 966.1 ns/iter (966.104)  | 853.05 ns | 890.91 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 972.85 ns/iter (972.855) | 849.64 ns | 957.19 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.02 µs/iter (1,019.544) | 920.09 ns | 934.11 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.02 µs/iter (1,021.686) | 922.94 ns | 943.85 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.03 µs/iter (1,031.119) | 934.57 ns | 947.79 ns | 1.6 µs    | 1.6 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.12 µs/iter (1,121.534) | 1.09 µs   | 1.14 µs   | 1.21 µs   | 1.21 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.18 µs/iter (1,181.675) | 1.03 µs   | 1.32 µs   | 1.43 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.19 µs/iter (1,188.492) | 1.17 µs   | 1.2 µs    | 1.22 µs   | 1.22 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.31 µs/iter (1,305.043) | 1.23 µs   | 1.33 µs   | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.31 µs/iter (1,313.102) | 1.26 µs   | 1.34 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.32 µs/iter (1,323.551) | 1.29 µs   | 1.33 µs   | 1.38 µs   | 1.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.34 µs/iter (1,339.31)  | 1.22 µs   | 1.36 µs   | 2.1 µs    | 2.1 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.34 µs/iter (1,342.561) | 1.26 µs   | 1.37 µs   | 1.43 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.35 µs/iter (1,346.051) | 1.28 µs   | 1.37 µs   | 1.42 µs   | 1.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.4 µs/iter (1,400.384)  | 1.35 µs   | 1.41 µs   | 1.44 µs   | 1.44 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.4 µs/iter (1,401.405)  | 1.33 µs   | 1.41 µs   | 1.93 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.41 µs/iter (1,410.549) | 1.37 µs   | 1.43 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.54 µs/iter (1,543.333) | 1.53 µs   | 1.55 µs   | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.65 µs/iter (1,653.873) | 1.61 µs   | 1.67 µs   | 1.83 µs   | 1.83 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.05 µs/iter (3,052.897) | 3.04 µs   | 3.06 µs   | 3.14 µs   | 3.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.54 µs/iter (3,543.97)  | 2.72 µs   | 3.92 µs   | 4.6 µs    | 4.6 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 8.06 µs/iter (8,056.924) | 7.9 µs    | 8.11 µs   | 8.43 µs   | 8.43 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 8.34 µs/iter (8,338)     | 6.1 µs    | 7.9 µs    | 18 µs     | 528.23 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 8.77 µs/iter (8,773)     | 6.5 µs    | 8.1 µs    | 15.3 µs   | 533.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 9.29 µs/iter (9,290)     | 6.4 µs    | 8.7 µs    | 16.5 µs   | 4.06 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 9.7 µs/iter (9,699)      | 6.2 µs    | 9.7 µs    | 17.5 µs   | 474.51 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 9.96 µs/iter (9,958)     | 6.3 µs    | 9.9 µs    | 18.2 µs   | 1.64 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 11.16 µs/iter (11,160)   | 7.2 µs    | 10.7 µs   | 29 µs     | 2 ms      |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 11.38 µs/iter (11,384)   | 8.6 µs    | 11.2 µs   | 22.8 µs   | 1.11 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 11.92 µs/iter (11,916)   | 8.5 µs    | 11.7 µs   | 24.1 µs   | 616.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 12.07 µs/iter (12,069)   | 7.9 µs    | 11.5 µs   | 31.5 µs   | 1.12 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 13.52 µs/iter (13,519)   | 8.7 µs    | 13 µs     | 29.2 µs   | 1.19 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 13.91 µs/iter (13,910)   | 8.4 µs    | 13 µs     | 32.5 µs   | 1.36 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 15.3 µs/iter (15,299)    | 8.7 µs    | 14.4 µs   | 34.4 µs   | 1.51 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.85 µs/iter (15,853)   | 14.6 µs   | 15.8 µs   | 21.3 µs   | 469.91 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 16.92 µs/iter (16,920)   | 8.7 µs    | 16 µs     | 35.6 µs   | 3.79 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 17.13 µs/iter (17,126)   | 14.6 µs   | 15.7 µs   | 30.2 µs   | 2.88 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 17.87 µs/iter (17,870)   | 15.1 µs   | 17.3 µs   | 35.7 µs   | 1.13 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 18.35 µs/iter (18,350)   | 15.3 µs   | 18.1 µs   | 32.3 µs   | 251.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 18.6 µs/iter (18,600)    | 14.4 µs   | 15.8 µs   | 48.1 µs   | 13.62 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 19.48 µs/iter (19,485)   | 16.2 µs   | 17.4 µs   | 119.6 µs  | 2.89 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 20.22 µs/iter (20,221)   | 17.1 µs   | 17.9 µs   | 131.4 µs  | 2.99 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 20.68 µs/iter (20,675)   | 17.5 µs   | 20.6 µs   | 32.3 µs   | 189.8 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 21.91 µs/iter (21,912)   | 17 µs     | 20 µs     | 118.9 µs  | 2.48 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 26.61 µs/iter (26,610)   | 21.9 µs   | 25.3 µs   | 46.5 µs   | 1.45 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 30.48 µs/iter (30,481)   | 10.8 µs   | 22.3 µs   | 340.01 µs | 1.46 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 32.56 µs/iter (32,559)   | 10.3 µs   | 23.3 µs   | 406.61 µs | 1.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 39.24 µs/iter (39,241)   | 35.7 µs   | 38.6 µs   | 72.3 µs   | 279.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 47.67 µs/iter (47,674)   | 44.2 µs   | 46 µs     | 146.2 µs  | 578.61 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 50.77 µs/iter (50,771)   | 36.2 µs   | 38.1 µs   | 532.11 µs | 961.02 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 52.45 µs/iter (52,448)   | 45.2 µs   | 48.7 µs   | 80.1 µs   | 1.63 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 60.47 µs/iter (60,471)   | 55.7 µs   | 59.7 µs   | 174.5 µs  | 227 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.38 µs/iter (128,378) | 119.7 µs  | 123.9 µs  | 155.2 µs  | 1.29 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 237.28 µs/iter (237,281) | 231.9 µs  | 235.5 µs  | 263.6 µs  | 705.21 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 764.53 µs/iter (764,532) | 638.41 µs | 708.71 µs | 1.68 ms   | 6.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 772.39 µs/iter (772,395) | 681.81 µs | 708.81 µs | 1.7 ms    | 9.59 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 802.28 µs/iter (802,278) | 729.41 µs | 749.51 µs | 1.76 ms   | 1.83 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 802.41 µs/iter (802,413) | 728.31 µs | 750.21 µs | 1.76 ms   | 1.82 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 809.84 µs/iter (809,841) | 715.31 µs | 782.01 µs | 1.22 ms   | 1.4 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 841.04 µs/iter (841,042) | 764.11 µs | 787.12 µs | 1.81 ms   | 1.84 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 855.38 µs/iter (855,379) | 796.41 µs | 824.92 µs | 1.34 ms   | 1.43 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.19 ms/iter (1,193,749) | 1.05 ms   | 1.08 ms   | 3.63 ms   | 3.79 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.3 ms/iter (1,304,715)  | 1.15 ms   | 1.2 ms    | 3.43 ms   | 3.84 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.31 ms/iter (1,310,289) | 1.13 ms   | 1.17 ms   | 3.06 ms   | 3.12 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.36 ms/iter (1,362,988) | 1.2 ms    | 1.23 ms   | 4.11 ms   | 4.27 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.39 ms/iter (1,394,979) | 1.24 ms   | 1.26 ms   | 4.19 ms   | 4.25 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.41 ms/iter (1,413,898) | 1.24 ms   | 1.27 ms   | 4.2 ms    | 4.52 ms   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 156.67 ns/iter (156.668) | 150.97 ns | 154.46 ns | 211.6 ns  | 317.15 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 270.1 ns/iter (270.103)  | 260.11 ns | 271.83 ns | 297.7 ns  | 403.78 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 281.39 ns/iter (281.393) | 270.19 ns | 280.72 ns | 304.38 ns | 337.35 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 210.55 ns/iter (210.545) | 201.49 ns | 213.61 ns | 227.57 ns | 228.03 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 221.7 ns/iter (221.699)  | 206.81 ns | 221.53 ns | 233.55 ns | 820.82 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 382.61 ns/iter (382.612) | 358 ns    | 408.25 ns | 429.36 ns | 445.11 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 156.67 ns/iter (156.668) | 150.97 ns | 154.46 ns | 211.6 ns  | 317.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 210.55 ns/iter (210.545) | 201.49 ns | 213.61 ns | 227.57 ns | 228.03 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 221.7 ns/iter (221.699)  | 206.81 ns | 221.53 ns | 233.55 ns | 820.82 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 270.1 ns/iter (270.103)  | 260.11 ns | 271.83 ns | 297.7 ns  | 403.78 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 281.39 ns/iter (281.393) | 270.19 ns | 280.72 ns | 304.38 ns | 337.35 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 382.61 ns/iter (382.612) | 358 ns    | 408.25 ns | 429.36 ns | 445.11 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 648.18 ns/iter (648.181) | 538.27 ns | 685.25 ns | 1.27 µs | 1.27 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.28 µs/iter (1,284.994) | 1.16 µs   | 1.31 µs   | 1.34 µs | 1.34 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.76 µs/iter (1,757.586) | 1.72 µs   | 1.76 µs   | 2.01 µs | 2.01 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75    | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------------------ | ------ | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.2 µs/iter (2,196.5)    | 2.1 µs | 2.23 µs | 2.28 µs | 2.28 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 3.52 µs/iter (3,521.149) | 2.8 µs | 3.59 µs | 5.07 µs | 5.07 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.86 µs/iter (11,858)   | 6.4 µs | 12.2 µs | 14.4 µs | 522.12 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.29 µs/iter (2,289.143) | 1.92 µs | 2.33 µs | 2.47 µs | 2.47 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.06 µs/iter (6,055.333) | 5.93 µs | 6.07 µs | 6.6 µs  | 6.6 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.16 µs/iter (18,160)   | 11.7 µs | 18.3 µs | 21.9 µs | 354.1 µs |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.2 µs/iter (2,196.5)    | 2.1 µs  | 2.23 µs | 2.28 µs | 2.28 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.29 µs/iter (2,289.143) | 1.92 µs | 2.33 µs | 2.47 µs | 2.47 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 3.52 µs/iter (3,521.149) | 2.8 µs  | 3.59 µs | 5.07 µs | 5.07 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.06 µs/iter (6,055.333) | 5.93 µs | 6.07 µs | 6.6 µs  | 6.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.86 µs/iter (11,858)   | 6.4 µs  | 12.2 µs | 14.4 µs | 522.12 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.16 µs/iter (18,160)   | 11.7 µs | 18.3 µs | 21.9 µs | 354.1 µs  |

