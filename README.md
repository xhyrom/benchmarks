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
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 464.52 ns/iter (464.522) | 452.12 ns | 468.3 ns  | 623.06 ns | 636.75 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 998.04 ns/iter (998.04)  | 859.83 ns | 950.96 ns | 1.71 µs   | 1.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.36 µs/iter (1,361.182) | 1.27 µs   | 1.37 µs   | 2.08 µs   | 2.08 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 488.66 ns/iter (488.665) | 475.38 ns | 486.13 ns | 529.38 ns | 1.18 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 959.52 ns/iter (959.522) | 837.68 ns | 889.45 ns | 1.75 µs   | 1.75 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.41 µs/iter (1,407.889) | 1.3 µs    | 1.41 µs   | 2.26 µs   | 2.26 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 474.77 ns/iter (474.768) | 462.9 ns  | 474.73 ns | 498.11 ns | 1.05 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.07 µs/iter (1,069.896) | 944.56 ns | 989.12 ns | 1.79 µs   | 1.79 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.32 µs/iter (1,320.368) | 1.26 µs   | 1.34 µs   | 1.61 µs   | 1.61 µs |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 464.06 ns/iter (464.058) | 459.18 ns | 466.9 ns  | 484.95 ns | 493.05 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.01 µs/iter (1,013.527) | 901.21 ns | 932.26 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.3 µs/iter (1,296.542)  | 1.23 µs   | 1.32 µs   | 1.48 µs   | 1.48 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 492.72 ns/iter (492.715) | 487.49 ns | 496.31 ns | 502.2 ns | 502.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.05 µs/iter (1,047.842) | 931.05 ns | 967.06 ns | 1.77 µs  | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.38 µs/iter (1,381.406) | 1.33 µs   | 1.39 µs   | 1.62 µs  | 1.62 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 486.61 ns/iter (486.613) | 481.05 ns | 491.95 ns | 502.27 ns | 502.43 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.1 µs/iter (1,098.07)   | 939.84 ns | 1.02 µs   | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.65 µs/iter (1,647.577) | 1.59 µs   | 1.66 µs   | 1.93 µs   | 1.93 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 494.63 ns/iter (494.625) | 464.88 ns | 502.92 ns | 533.74 ns | 893.97 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.05 µs/iter (1,045.877) | 928.28 ns | 960.29 ns | 1.82 µs   | 1.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.33 µs/iter (1,333.702) | 1.28 µs   | 1.36 µs   | 1.41 µs   | 1.41 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 471.39 ns/iter (471.388) | 457.15 ns | 472.14 ns | 499.78 ns | 525.48 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.05 µs/iter (1,047.274) | 935.27 ns | 961 ns    | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.34 µs/iter (1,340.081) | 1.29 µs   | 1.36 µs   | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 478.07 ns/iter (478.075) | 468 ns    | 481.67 ns | 493.43 ns | 497.75 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 984.26 ns/iter (984.256) | 872.64 ns | 889.83 ns | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.33 µs/iter (1,333.381) | 1.29 µs   | 1.36 µs   | 1.48 µs   | 1.48 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 11.73 µs/iter (11,732)   | 6.7 µs    | 11.6 µs   | 23.3 µs  | 945.48 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 22.29 µs/iter (22,290)   | 18.9 µs   | 20.3 µs   | 118.8 µs | 218.7 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 808.14 µs/iter (808,143) | 717.52 µs | 892.43 µs | 1.06 ms  | 1.24 ms   |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15 µs/iter (15,001)      | 8.1 µs  | 14.5 µs | 34.7 µs  | 2.06 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 22.42 µs/iter (22,417)   | 18.5 µs | 20.3 µs | 119.7 µs | 2.44 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.32 ms/iter (1,321,271) | 1.16 ms | 1.23 ms | 2.55 ms  | 2.56 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 12.33 µs/iter (12,331)   | 7.1 µs    | 12.3 µs   | 22.2 µs | 554.04 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 19.3 µs/iter (19,295)    | 16.6 µs   | 17.9 µs   | 56.9 µs | 359.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 780.75 µs/iter (780,751) | 695.22 µs | 734.62 µs | 1.32 ms | 1.38 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 11.68 µs/iter (11,680)   | 7.2 µs    | 11.7 µs   | 22 µs   | 1.6 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 19.3 µs/iter (19,305)    | 16.8 µs   | 18.1 µs   | 45.1 µs | 837.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 800.72 µs/iter (800,720) | 701.62 µs | 739.41 µs | 1.89 ms | 2.29 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 12.97 µs/iter (12,973)   | 7.4 µs    | 12.3 µs   | 27.8 µs  | 571.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 22.15 µs/iter (22,151)   | 18.7 µs   | 20.2 µs   | 132.9 µs | 691.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 973.86 µs/iter (973,856) | 885.11 µs | 916.91 µs | 1.86 ms  | 1.89 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 55.32 µs/iter (55,321)   | 51.2 µs | 53.8 µs | 167.9 µs  | 536.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 58 µs/iter (58,001)      | 40.9 µs | 44.7 µs | 572.31 µs | 619.31 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.39 ms/iter (1,391,072) | 1.22 ms | 1.26 ms | 2.95 ms   | 2.98 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                 | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ----------------------- | --------- | --------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 12.86 µs/iter (12,862)  | 7 µs      | 12.8 µs   | 22.9 µs | 1.37 ms |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 20.38 µs/iter (20,377)  | 16.2 µs   | 20.1 µs   | 40.7 µs | 1.24 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 852.4 µs/iter (852,399) | 764.61 µs | 794.51 µs | 1.94 ms | 1.98 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 12.83 µs/iter (12,832)   | 7.2 µs    | 12.7 µs   | 24 µs   | 626.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 20 µs/iter (20,000)      | 16.7 µs   | 19.7 µs   | 33.5 µs | 307.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 849.46 µs/iter (849,461) | 762.92 µs | 790.53 µs | 1.91 ms | 1.95 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 68.06 µs/iter (68,063)   | 62.7 µs   | 67.3 µs   | 201.1 µs  | 264.4 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 275.18 µs/iter (275,177) | 262.6 µs  | 269.2 µs  | 781.81 µs | 1.07 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 879.88 µs/iter (879,880) | 777.23 µs | 823.63 µs | 1.93 ms   | 2 ms     |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 401.24 ns/iter (401.238) | 393.96 ns | 399.3 ns  | 431.99 ns | 444.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 636.46 ns/iter (636.456) | 623.18 ns | 642.58 ns | 835.08 ns | 835.08 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.01 µs/iter (1,010.399) | 886.03 ns | 917.43 ns | 1.86 µs   | 1.86 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 494.64 ns/iter (494.644) | 480.69 ns | 486.98 ns | 517.82 ns | 1.24 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 975.11 ns/iter (975.111) | 872.47 ns | 888.63 ns | 1.72 µs   | 1.72 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.37 µs/iter (1,372.477) | 1.18 µs   | 1.52 µs   | 1.69 µs   | 1.69 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 402.13 ns/iter (402.131) | 395.61 ns | 400.87 ns | 424.82 ns | 426.84 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 665.72 ns/iter (665.719) | 610.99 ns | 680.46 ns | 906.46 ns | 906.46 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.02 µs/iter (1,021.27)  | 897.61 ns | 919.91 ns | 1.75 µs   | 1.75 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 403.22 ns/iter (403.221) | 394.06 ns | 401.07 ns | 431.55 ns | 437.8 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 649 ns/iter (648.996)    | 604.41 ns | 670.64 ns | 905.51 ns | 905.51 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 967.92 ns/iter (967.919) | 850.42 ns | 872.08 ns | 1.7 µs    | 1.7 µs    |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 562.24 ns/iter (562.237) | 549.92 ns | 563.09 ns | 598.27 ns | 598.27 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.07 µs/iter (1,073.564) | 958.29 ns | 978.85 ns | 1.85 µs   | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.52 µs/iter (1,524.536) | 1.5 µs    | 1.54 µs   | 1.69 µs   | 1.69 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 515.5 ns/iter (515.498)  | 497.81 ns | 520.17 ns | 552.31 ns | 553.21 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.08 µs/iter (1,082.084) | 958.1 ns  | 982.37 ns | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.78 µs/iter (1,776.618) | 1.74 µs   | 1.79 µs   | 1.94 µs   | 1.94 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 404.28 ns/iter (404.282) | 396.31 ns | 402.4 ns  | 431.85 ns | 441.8 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 709.75 ns/iter (709.75)  | 638.96 ns | 718.55 ns | 814.86 ns | 814.86 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1 µs/iter (1,001.944)    | 895.53 ns | 911.64 ns | 1.75 µs   | 1.75 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 405.27 ns/iter (405.272) | 396.85 ns | 403.42 ns | 435.28 ns | 438.47 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 703.66 ns/iter (703.657) | 641.74 ns | 712.72 ns | 738.2 ns  | 738.2 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.02 µs/iter (1,016.576) | 893.08 ns | 912.57 ns | 1.76 µs   | 1.76 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 524.94 ns/iter (524.942) | 509.26 ns | 529.39 ns | 561.71 ns | 562.6 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 957.78 ns/iter (957.779) | 841.96 ns | 860.7 ns  | 1.71 µs   | 1.71 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.17 µs/iter (1,173.906) | 1.11 µs   | 1.19 µs   | 1.2 µs    | 1.2 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 13.39 µs/iter (13,390)   | 9.3 µs  | 13.1 µs | 30.1 µs | 265.7 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 19.35 µs/iter (19,347)   | 8.5 µs  | 17.2 µs | 37 µs   | 2.1 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.55 ms/iter (1,546,190) | 1.37 ms | 1.4 ms  | 4.59 ms | 4.69 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 15.16 µs/iter (15,156)   | 8.7 µs  | 14.5 µs | 34.6 µs | 4.9 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 24.48 µs/iter (24,480)   | 19.9 µs | 24 µs   | 38.1 µs | 546.4 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.37 ms/iter (1,371,107) | 1.2 ms  | 1.24 ms | 4.11 ms | 4.36 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.27 µs/iter (1,268.729) | 1.19 µs | 1.3 µs  | 1.46 µs  | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 27.12 µs/iter (27,122)   | 10.8 µs | 24 µs   | 109.7 µs | 1.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 46.55 µs/iter (46,550)   | 41.6 µs | 45.9 µs | 81.7 µs  | 352.11 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 206.74 ns/iter (206.74)  | 199.99 ns | 205.88 ns | 221.11 ns | 222.33 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 438.08 ns/iter (438.077) | 375.09 ns | 445.59 ns | 488.91 ns | 554.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 32.55 µs/iter (32,548)   | 10.8 µs   | 29.9 µs   | 149.1 µs  | 4.56 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.51 µs/iter (3,511.107) | 3.49 µs | 3.51 µs | 3.72 µs | 3.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 18.06 µs/iter (18,061)   | 16.6 µs | 18.1 µs | 24.3 µs | 511.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 29.32 µs/iter (29,317)   | 23.6 µs | 28 µs   | 48.8 µs | 1.77 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.99 ns/iter (128.993) | 123.37 ns | 127.92 ns | 143.29 ns | 157.82 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.37 µs/iter (1,373.619) | 1.35 µs   | 1.39 µs   | 1.45 µs   | 1.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.51 µs/iter (128,507) | 121.6 µs  | 124.4 µs  | 156.6 µs  | 1.19 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------- | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 13.8 µs/iter (13,804)    | 9.8 µs  | 13.3 µs | 27.3 µs | 267.4 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 16.1 µs/iter (16,096)    | 9.7 µs  | 15.2 µs | 35.1 µs | 1.91 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.59 ms/iter (1,585,777) | 1.37 ms | 1.43 ms | 4.57 ms | 6.85 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75    | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | ------ | ------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 13.14 µs/iter (13,136)   | 9.7 µs | 12.8 µs | 26.5 µs | 353.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 15.21 µs/iter (15,215)   | 9.5 µs | 14.1 µs | 34.4 µs | 1.81 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.57 ms/iter (1,571,789) | 1.4 ms | 1.43 ms | 4.59 ms | 4.63 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 594.06 ns/iter (594.057) | 583.99 ns | 605.28 ns | 613.67 ns | 613.67 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.09 µs/iter (4,087.437) | 2.72 µs   | 4.55 µs   | 5.39 µs   | 5.39 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 54.96 µs/iter (54,962)   | 46.1 µs   | 50 µs     | 88.69 µs  | 1.5 ms    |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.99 ns/iter (128.993) | 123.37 ns | 127.92 ns | 143.29 ns | 157.82 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 206.74 ns/iter (206.74)  | 199.99 ns | 205.88 ns | 221.11 ns | 222.33 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 401.24 ns/iter (401.238) | 393.96 ns | 399.3 ns  | 431.99 ns | 444.79 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 402.13 ns/iter (402.131) | 395.61 ns | 400.87 ns | 424.82 ns | 426.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 403.22 ns/iter (403.221) | 394.06 ns | 401.07 ns | 431.55 ns | 437.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 404.28 ns/iter (404.282) | 396.31 ns | 402.4 ns  | 431.85 ns | 441.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 405.27 ns/iter (405.272) | 396.85 ns | 403.42 ns | 435.28 ns | 438.47 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 438.08 ns/iter (438.077) | 375.09 ns | 445.59 ns | 488.91 ns | 554.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 464.06 ns/iter (464.058) | 459.18 ns | 466.9 ns  | 484.95 ns | 493.05 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 464.52 ns/iter (464.522) | 452.12 ns | 468.3 ns  | 623.06 ns | 636.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 471.39 ns/iter (471.388) | 457.15 ns | 472.14 ns | 499.78 ns | 525.48 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 474.77 ns/iter (474.768) | 462.9 ns  | 474.73 ns | 498.11 ns | 1.05 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 478.07 ns/iter (478.075) | 468 ns    | 481.67 ns | 493.43 ns | 497.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 486.61 ns/iter (486.613) | 481.05 ns | 491.95 ns | 502.27 ns | 502.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 488.66 ns/iter (488.665) | 475.38 ns | 486.13 ns | 529.38 ns | 1.18 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 492.72 ns/iter (492.715) | 487.49 ns | 496.31 ns | 502.2 ns  | 502.89 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 494.63 ns/iter (494.625) | 464.88 ns | 502.92 ns | 533.74 ns | 893.97 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 494.64 ns/iter (494.644) | 480.69 ns | 486.98 ns | 517.82 ns | 1.24 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 515.5 ns/iter (515.498)  | 497.81 ns | 520.17 ns | 552.31 ns | 553.21 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 524.94 ns/iter (524.942) | 509.26 ns | 529.39 ns | 561.71 ns | 562.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 562.24 ns/iter (562.237) | 549.92 ns | 563.09 ns | 598.27 ns | 598.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 594.06 ns/iter (594.057) | 583.99 ns | 605.28 ns | 613.67 ns | 613.67 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 636.46 ns/iter (636.456) | 623.18 ns | 642.58 ns | 835.08 ns | 835.08 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 649 ns/iter (648.996)    | 604.41 ns | 670.64 ns | 905.51 ns | 905.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 665.72 ns/iter (665.719) | 610.99 ns | 680.46 ns | 906.46 ns | 906.46 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 703.66 ns/iter (703.657) | 641.74 ns | 712.72 ns | 738.2 ns  | 738.2 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 709.75 ns/iter (709.75)  | 638.96 ns | 718.55 ns | 814.86 ns | 814.86 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 957.78 ns/iter (957.779) | 841.96 ns | 860.7 ns  | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 959.52 ns/iter (959.522) | 837.68 ns | 889.45 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 967.92 ns/iter (967.919) | 850.42 ns | 872.08 ns | 1.7 µs    | 1.7 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 975.11 ns/iter (975.111) | 872.47 ns | 888.63 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 984.26 ns/iter (984.256) | 872.64 ns | 889.83 ns | 1.69 µs   | 1.69 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 998.04 ns/iter (998.04)  | 859.83 ns | 950.96 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1 µs/iter (1,001.944)    | 895.53 ns | 911.64 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.01 µs/iter (1,010.399) | 886.03 ns | 917.43 ns | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 1.01 µs/iter (1,013.527) | 901.21 ns | 932.26 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.02 µs/iter (1,016.576) | 893.08 ns | 912.57 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.02 µs/iter (1,021.27)  | 897.61 ns | 919.91 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 1.05 µs/iter (1,045.877) | 928.28 ns | 960.29 ns | 1.82 µs   | 1.82 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 1.05 µs/iter (1,047.274) | 935.27 ns | 961 ns    | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 1.05 µs/iter (1,047.842) | 931.05 ns | 967.06 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.07 µs/iter (1,069.896) | 944.56 ns | 989.12 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.07 µs/iter (1,073.564) | 958.29 ns | 978.85 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.08 µs/iter (1,082.084) | 958.1 ns  | 982.37 ns | 1.87 µs   | 1.87 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.1 µs/iter (1,098.07)   | 939.84 ns | 1.02 µs   | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.17 µs/iter (1,173.906) | 1.11 µs   | 1.19 µs   | 1.2 µs    | 1.2 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.27 µs/iter (1,268.729) | 1.19 µs   | 1.3 µs    | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.3 µs/iter (1,296.542)  | 1.23 µs   | 1.32 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.32 µs/iter (1,320.368) | 1.26 µs   | 1.34 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.33 µs/iter (1,333.381) | 1.29 µs   | 1.36 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.33 µs/iter (1,333.702) | 1.28 µs   | 1.36 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.34 µs/iter (1,340.081) | 1.29 µs   | 1.36 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.36 µs/iter (1,361.182) | 1.27 µs   | 1.37 µs   | 2.08 µs   | 2.08 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.37 µs/iter (1,372.477) | 1.18 µs   | 1.52 µs   | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.37 µs/iter (1,373.619) | 1.35 µs   | 1.39 µs   | 1.45 µs   | 1.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.38 µs/iter (1,381.406) | 1.33 µs   | 1.39 µs   | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.41 µs/iter (1,407.889) | 1.3 µs    | 1.41 µs   | 2.26 µs   | 2.26 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.52 µs/iter (1,524.536) | 1.5 µs    | 1.54 µs   | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.65 µs/iter (1,647.577) | 1.59 µs   | 1.66 µs   | 1.93 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.78 µs/iter (1,776.618) | 1.74 µs   | 1.79 µs   | 1.94 µs   | 1.94 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.51 µs/iter (3,511.107) | 3.49 µs   | 3.51 µs   | 3.72 µs   | 3.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.09 µs/iter (4,087.437) | 2.72 µs   | 4.55 µs   | 5.39 µs   | 5.39 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 11.68 µs/iter (11,680)   | 7.2 µs    | 11.7 µs   | 22 µs     | 1.6 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 11.73 µs/iter (11,732)   | 6.7 µs    | 11.6 µs   | 23.3 µs   | 945.48 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 12.33 µs/iter (12,331)   | 7.1 µs    | 12.3 µs   | 22.2 µs   | 554.04 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 12.83 µs/iter (12,832)   | 7.2 µs    | 12.7 µs   | 24 µs     | 626.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 12.86 µs/iter (12,862)   | 7 µs      | 12.8 µs   | 22.9 µs   | 1.37 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 12.97 µs/iter (12,973)   | 7.4 µs    | 12.3 µs   | 27.8 µs   | 571.51 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 13.14 µs/iter (13,136)   | 9.7 µs    | 12.8 µs   | 26.5 µs   | 353.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 13.39 µs/iter (13,390)   | 9.3 µs    | 13.1 µs   | 30.1 µs   | 265.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 13.8 µs/iter (13,804)    | 9.8 µs    | 13.3 µs   | 27.3 µs   | 267.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15 µs/iter (15,001)      | 8.1 µs    | 14.5 µs   | 34.7 µs   | 2.06 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 15.16 µs/iter (15,156)   | 8.7 µs    | 14.5 µs   | 34.6 µs   | 4.9 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 15.21 µs/iter (15,215)   | 9.5 µs    | 14.1 µs   | 34.4 µs   | 1.81 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 16.1 µs/iter (16,096)    | 9.7 µs    | 15.2 µs   | 35.1 µs   | 1.91 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 18.06 µs/iter (18,061)   | 16.6 µs   | 18.1 µs   | 24.3 µs   | 511.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 19.3 µs/iter (19,295)    | 16.6 µs   | 17.9 µs   | 56.9 µs   | 359.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 19.3 µs/iter (19,305)    | 16.8 µs   | 18.1 µs   | 45.1 µs   | 837.01 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 19.35 µs/iter (19,347)   | 8.5 µs    | 17.2 µs   | 37 µs     | 2.1 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 20 µs/iter (20,000)      | 16.7 µs   | 19.7 µs   | 33.5 µs   | 307.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 20.38 µs/iter (20,377)   | 16.2 µs   | 20.1 µs   | 40.7 µs   | 1.24 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 22.15 µs/iter (22,151)   | 18.7 µs   | 20.2 µs   | 132.9 µs  | 691.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 22.29 µs/iter (22,290)   | 18.9 µs   | 20.3 µs   | 118.8 µs  | 218.7 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 22.42 µs/iter (22,417)   | 18.5 µs   | 20.3 µs   | 119.7 µs  | 2.44 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 24.48 µs/iter (24,480)   | 19.9 µs   | 24 µs     | 38.1 µs   | 546.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 27.12 µs/iter (27,122)   | 10.8 µs   | 24 µs     | 109.7 µs  | 1.07 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 29.32 µs/iter (29,317)   | 23.6 µs   | 28 µs     | 48.8 µs   | 1.77 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 32.55 µs/iter (32,548)   | 10.8 µs   | 29.9 µs   | 149.1 µs  | 4.56 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 46.55 µs/iter (46,550)   | 41.6 µs   | 45.9 µs   | 81.7 µs   | 352.11 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 54.96 µs/iter (54,962)   | 46.1 µs   | 50 µs     | 88.69 µs  | 1.5 ms    |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 55.32 µs/iter (55,321)   | 51.2 µs   | 53.8 µs   | 167.9 µs  | 536.71 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 58 µs/iter (58,001)      | 40.9 µs   | 44.7 µs   | 572.31 µs | 619.31 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 68.06 µs/iter (68,063)   | 62.7 µs   | 67.3 µs   | 201.1 µs  | 264.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.51 µs/iter (128,507) | 121.6 µs  | 124.4 µs  | 156.6 µs  | 1.19 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 275.18 µs/iter (275,177) | 262.6 µs  | 269.2 µs  | 781.81 µs | 1.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 780.75 µs/iter (780,751) | 695.22 µs | 734.62 µs | 1.32 ms   | 1.38 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 800.72 µs/iter (800,720) | 701.62 µs | 739.41 µs | 1.89 ms   | 2.29 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 808.14 µs/iter (808,143) | 717.52 µs | 892.43 µs | 1.06 ms   | 1.24 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 849.46 µs/iter (849,461) | 762.92 µs | 790.53 µs | 1.91 ms   | 1.95 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 852.4 µs/iter (852,399)  | 764.61 µs | 794.51 µs | 1.94 ms   | 1.98 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 879.88 µs/iter (879,880) | 777.23 µs | 823.63 µs | 1.93 ms   | 2 ms      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 973.86 µs/iter (973,856) | 885.11 µs | 916.91 µs | 1.86 ms   | 1.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.32 ms/iter (1,321,271) | 1.16 ms   | 1.23 ms   | 2.55 ms   | 2.56 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.37 ms/iter (1,371,107) | 1.2 ms    | 1.24 ms   | 4.11 ms   | 4.36 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.39 ms/iter (1,391,072) | 1.22 ms   | 1.26 ms   | 2.95 ms   | 2.98 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.55 ms/iter (1,546,190) | 1.37 ms   | 1.4 ms    | 4.59 ms   | 4.69 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.57 ms/iter (1,571,789) | 1.4 ms    | 1.43 ms   | 4.59 ms   | 4.63 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.59 ms/iter (1,585,777) | 1.37 ms   | 1.43 ms   | 4.57 ms   | 6.85 ms   |

## Http

### http
| Runtime                                | Benchmark | Average                    | p75      | p99      | Min      | Max      |
| -------------------------------------- | --------- | -------------------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | http      | 88.08 µs/iter (88,082.042) | 11.03 µs | 91.12 µs | 92.68 µs | 97.27 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 47.47 µs/iter (47,466.705) | 4.78 µs  | 50.06 µs | 50.75 µs | 51.1 µs  |
| node v18.7.0 (x64-linux)               | http      | 35.23 µs/iter (35,230.146) | 4.33 µs  | 36.4 µs  | 37.01 µs | 37.33 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 165.36 ns/iter (165.36)  | 157.39 ns | 162.68 ns | 213.6 ns  | 345.38 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.78 ns/iter (315.779) | 303.5 ns  | 315.51 ns | 341.42 ns | 929.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.58 ns/iter (321.58)  | 314.6 ns  | 322.42 ns | 359.77 ns | 384.37 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.15 ns/iter (239.147) | 234.03 ns | 242.87 ns | 259.71 ns | 271.08 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.44 ns/iter (248.437) | 239.57 ns | 250.03 ns | 262.52 ns | 276.98 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.9 ns/iter (383.905)  | 355.77 ns | 388.41 ns | 462.86 ns | 464.18 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 165.36 ns/iter (165.36)  | 157.39 ns | 162.68 ns | 213.6 ns  | 345.38 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.15 ns/iter (239.147) | 234.03 ns | 242.87 ns | 259.71 ns | 271.08 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.44 ns/iter (248.437) | 239.57 ns | 250.03 ns | 262.52 ns | 276.98 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 315.78 ns/iter (315.779) | 303.5 ns  | 315.51 ns | 341.42 ns | 929.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 321.58 ns/iter (321.58)  | 314.6 ns  | 322.42 ns | 359.77 ns | 384.37 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.9 ns/iter (383.905)  | 355.77 ns | 388.41 ns | 462.86 ns | 464.18 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 642.52 ns/iter (642.518) | 537.93 ns | 686.58 ns | 693.74 ns | 693.74 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.42 µs/iter (1,419.222) | 1.36 µs   | 1.43 µs   | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.85 µs/iter (1,846.754) | 1.79 µs   | 1.85 µs   | 2.12 µs   | 2.12 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.36 µs/iter (4,364.153) | 4.21 µs | 4.37 µs | 5.85 µs | 5.85 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 8.44 µs/iter (8,442)     | 1.5 µs  | 9.5 µs  | 10.3 µs | 83.2 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.82 µs/iter (11,821)   | 6.6 µs  | 12.1 µs | 14.5 µs | 415.11 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 5.99 µs/iter (5,987.938) | 2.77 µs | 6.16 µs | 7.41 µs | 7.41 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.4 µs/iter (7,397)      | 4.5 µs  | 8.7 µs  | 13.1 µs | 326.3 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.97 µs/iter (17,974)   | 11.5 µs | 18 µs   | 21.9 µs | 408.11 µs |


### everything
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.36 µs/iter (4,364.153) | 4.21 µs | 4.37 µs | 5.85 µs | 5.85 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 5.99 µs/iter (5,987.938) | 2.77 µs | 6.16 µs | 7.41 µs | 7.41 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.4 µs/iter (7,397)      | 4.5 µs  | 8.7 µs  | 13.1 µs | 326.3 µs  |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 8.44 µs/iter (8,442)     | 1.5 µs  | 9.5 µs  | 10.3 µs | 83.2 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.82 µs/iter (11,821)   | 6.6 µs  | 12.1 µs | 14.5 µs | 415.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.97 µs/iter (17,974)   | 11.5 µs | 18 µs   | 21.9 µs | 408.11 µs |

