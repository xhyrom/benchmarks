*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [http](#http)
   - [json](#json)
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 486.41 ns/iter (486.407) | 386.04 ns | 506.43 ns | 713.88 ns | 744.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.09 µs/iter (1,086.617) | 948.82 ns | 1.15 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.58 µs/iter (1,578.774) | 1.38 µs   | 1.67 µs   | 2.38 µs   | 2.38 µs   |

## Http

### http
| Runtime                                | Benchmark | Average                      | p75      | p99       | Min       | Max       |
| -------------------------------------- | --------- | ---------------------------- | -------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | http      | 119.78 µs/iter (119,777.976) | 18.1 µs  | 130.52 µs | 137.85 µs | 139.95 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | http      | 45.41 µs/iter (45,410.329)   | 8.94 µs  | 51.5 µs   | 57.87 µs  | 94.74 µs  |
| node v16.16.0 (x64-linux)              | http      | 22.69 µs/iter (22,690.446)   | 10.59 µs | 24.86 µs  | 28.4 µs   | 189.48 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 131.87 ns/iter (131.87)  | 119.74 ns | 129.32 ns | 306.81 ns | 448.93 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 253.77 ns/iter (253.77)  | 235.33 ns | 254.06 ns | 387.16 ns | 539.62 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 281.24 ns/iter (281.239) | 236.41 ns | 288.96 ns | 724.86 ns | 778.59 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 214.6 ns/iter (214.604)  | 182.43 ns | 220.43 ns | 349.39 ns | 422.32 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 223.81 ns/iter (223.806) | 179.13 ns | 232.84 ns | 387.73 ns | 394.62 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 305.89 ns/iter (305.885) | 268.77 ns | 313.86 ns | 424.81 ns | 451.58 ns |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 131.87 ns/iter (131.87)  | 119.74 ns | 129.32 ns | 306.81 ns | 448.93 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 214.6 ns/iter (214.604)  | 182.43 ns | 220.43 ns | 349.39 ns | 422.32 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 223.81 ns/iter (223.806) | 179.13 ns | 232.84 ns | 387.73 ns | 394.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 253.77 ns/iter (253.77)  | 235.33 ns | 254.06 ns | 387.16 ns | 539.62 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 281.24 ns/iter (281.239) | 236.41 ns | 288.96 ns | 724.86 ns | 778.59 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 305.89 ns/iter (305.885) | 268.77 ns | 313.86 ns | 424.81 ns | 451.58 ns |

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii') | 440.36 ns/iter (440.361) | 376.91 ns | 439.15 ns | 860.98 ns | 1.02 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.2 µs/iter (1,200.343)  | 1 µs      | 1.24 µs   | 2.21 µs   | 2.21 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.22 µs/iter (1,217.328) | 672.09 ns | 1.39 µs   | 5.27 µs   | 5.27 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8') | 437.03 ns/iter (437.029) | 397.44 ns | 437.04 ns | 664.72 ns | 1.08 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 875.1 ns/iter (875.1)    | 639.08 ns | 895.81 ns | 1.72 µs   | 1.72 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.23 µs/iter (1,234.114) | 1.06 µs   | 1.28 µs   | 1.67 µs   | 1.67 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le') | 436.31 ns/iter (436.312) | 392 ns    | 444.96 ns | 639.76 ns | 758.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.03 µs/iter (1,030.692) | 736.48 ns | 1.18 µs   | 1.9 µs    | 1.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.14 µs/iter (1,138.491) | 993.03 ns | 1.19 µs   | 1.5 µs    | 1.5 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2') | 443.2 ns/iter (443.203)  | 398.11 ns | 442.37 ns | 603.16 ns | 1.36 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 862.57 ns/iter (862.57)  | 651.65 ns | 816.97 ns | 2.13 µs   | 2.13 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.11 µs/iter (1,108.596) | 934.99 ns | 1.17 µs   | 1.46 µs   | 1.46 µs |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64') | 502.21 ns/iter (502.208) | 405.82 ns | 476.65 ns | 1.46 µs | 1.69 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 906.28 ns/iter (906.282) | 705.61 ns | 867.89 ns | 1.93 µs | 1.93 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.19 µs/iter (1,194.323) | 1.04 µs   | 1.22 µs   | 1.43 µs | 1.43 µs |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url') | 526.14 ns/iter (526.141) | 417.01 ns | 586.26 ns | 1.16 µs | 1.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 884.95 ns/iter (884.953) | 715.11 ns | 844.98 ns | 1.84 µs | 1.84 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.43 µs/iter (1,428.313) | 1.3 µs    | 1.47 µs   | 1.92 µs | 1.92 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1') | 443.56 ns/iter (443.556) | 393.67 ns | 451.43 ns | 636.86 ns | 656.11 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 846.68 ns/iter (846.675) | 683.06 ns | 806.38 ns | 2.11 µs   | 2.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.23 µs/iter (1,234.27)  | 960.8 ns  | 1.19 µs   | 4.04 µs   | 4.04 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary') | 447.99 ns/iter (447.988) | 391.89 ns | 472.22 ns | 654.32 ns | 695.15 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 933.38 ns/iter (933.377) | 718.82 ns | 929.64 ns | 2.29 µs   | 2.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.33 µs/iter (1,334.67)  | 989.19 ns | 1.27 µs   | 4.09 µs   | 4.09 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex') | 492.03 ns/iter (492.03)  | 413.21 ns | 532.61 ns | 783.03 ns | 790.99 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 816.35 ns/iter (816.349) | 669.57 ns | 780.19 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.07 µs/iter (1,072.229) | 972.98 ns | 1.07 µs   | 1.81 µs   | 1.81 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75     | p99      | Min      | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | ------- | -------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 14.19 µs/iter (14,193)   | 4.6 µs  | 11 µs    | 38.8 µs  | 3.09 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii') | 25.64 µs/iter (25,644)   | 14.5 µs | 24.9 µs  | 236.3 µs | 2.14 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 611.61 µs/iter (611,609) | 491 µs  | 745.5 µs | 1.02 ms  | 1.25 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75      | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------------------ | -------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15.2 µs/iter (15,196)    | 6.9 µs   | 12.4 µs | 36.5 µs  | 3.03 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8') | 22.6 µs/iter (22,597)    | 14.3 µs  | 22 µs   | 162.8 µs | 994.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 904.26 µs/iter (904,257) | 735.9 µs | 813 µs  | 2.26 ms  | 2.34 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 13.74 µs/iter (13,745)   | 6.1 µs   | 10.9 µs  | 32.2 µs  | 3.06 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le') | 18.83 µs/iter (18,830)   | 12.8 µs  | 16.2 µs  | 118.8 µs | 917.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 618.62 µs/iter (618,617) | 452.4 µs | 576.4 µs | 1.92 ms  | 2.34 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75      | p99      | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | -------- | -------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 13.01 µs/iter (13,014)   | 6.5 µs   | 10.5 µs  | 27.8 µs  | 2.83 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2') | 19.75 µs/iter (19,747)   | 12.8 µs  | 17.8 µs  | 103.3 µs | 667 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 570.33 µs/iter (570,334) | 453.5 µs | 506.5 µs | 1.91 ms  | 2.3 ms  |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 16.27 µs/iter (16,272)   | 7.3 µs   | 13.9 µs  | 33.8 µs  | 2.64 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64') | 64.88 µs/iter (64,876)   | 40.5 µs  | 61.5 µs  | 301.2 µs | 10.11 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 786.07 µs/iter (786,067) | 587.7 µs | 770.6 µs | 2.24 ms  | 2.77 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75      | p99     | Min      | Max     |
| -------------------------------------- | ------------------------------------------- | ------------------------ | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 47.15 µs/iter (47,154)   | 31.1 µs  | 35.4 µs | 370.7 µs | 2.77 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url') | 55.34 µs/iter (55,345)   | 40.4 µs  | 55.6 µs | 255.8 µs | 1.42 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.18 ms/iter (1,183,634) | 841.4 µs | 1.19 ms | 3.75 ms  | 4.29 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 14.24 µs/iter (14,238)   | 6 µs     | 11 µs    | 37.1 µs | 3.23 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1') | 18.38 µs/iter (18,380)   | 12.5 µs  | 16.4 µs  | 63.6 µs | 768 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 612.12 µs/iter (612,123) | 494.7 µs | 552.7 µs | 1.91 ms | 2.53 ms |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 14.54 µs/iter (14,540)   | 6 µs     | 11.1 µs  | 41.1 µs | 3.06 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary') | 18.46 µs/iter (18,462)   | 12.1 µs  | 16.9 µs  | 56.6 µs | 1.68 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 605.48 µs/iter (605,484) | 495.4 µs | 544.6 µs | 1.88 ms | 2.33 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex') | 59.02 µs/iter (59,020)   | 49.6 µs  | 54.3 µs  | 289.8 µs | 916.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 218.76 µs/iter (218,757) | 197.3 µs | 206.4 µs | 502 µs   | 3 ms     |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 659.78 µs/iter (659,784) | 532.2 µs | 604.8 µs | 1.91 ms  | 2.13 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString() | 382.44 ns/iter (382.445) | 355.89 ns | 393.86 ns | 473.45 ns | 492.94 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 499.75 ns/iter (499.748) | 467.44 ns | 505.36 ns | 671.97 ns | 752.09 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 777.96 ns/iter (777.959) | 637.6 ns  | 746.67 ns | 1.45 µs   | 1.45 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString() | 667.2 ns/iter (667.204)  | 422.45 ns | 751.53 ns | 1.88 µs | 1.88 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 783.78 ns/iter (783.782) | 654.81 ns | 723.92 ns | 1.56 µs | 1.56 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.14 µs/iter (1,144.91)  | 888.41 ns | 1.25 µs   | 1.39 µs | 1.39 µs |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString() | 384.17 ns/iter (384.173) | 353.64 ns | 397.25 ns | 509.44 ns | 585.56 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 496.64 ns/iter (496.643) | 458.23 ns | 500.76 ns | 708.6 ns  | 737.73 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 775.23 ns/iter (775.231) | 641.25 ns | 719.7 ns  | 1.63 µs   | 1.63 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString() | 384.18 ns/iter (384.182) | 358.03 ns | 394.71 ns | 535.75 ns | 562.72 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 470.76 ns/iter (470.762) | 444.2 ns  | 478.08 ns | 668.89 ns | 745.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 708.55 ns/iter (708.553) | 604.98 ns | 644.65 ns | 1.4 µs    | 1.4 µs    |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString() | 474.52 ns/iter (474.517) | 412.12 ns | 478.86 ns | 740.42 ns | 974.46 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 843.02 ns/iter (843.015) | 721.44 ns | 771.98 ns | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.2 µs/iter (1,195.064)  | 1.12 µs   | 1.2 µs    | 1.47 µs   | 1.47 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString() | 449.29 ns/iter (449.294) | 410.38 ns | 455.07 ns | 656.75 ns | 670.54 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 804.17 ns/iter (804.174) | 688.77 ns | 736.88 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.36 µs/iter (1,359.975) | 1.31 µs   | 1.38 µs   | 1.53 µs   | 1.53 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString() | 386.99 ns/iter (386.992) | 356.41 ns | 401.24 ns | 516.36 ns | 535.53 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 505.54 ns/iter (505.541) | 476.14 ns | 511.73 ns | 644.26 ns | 817.15 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 797.66 ns/iter (797.664) | 660.85 ns | 753.24 ns | 1.59 µs   | 1.59 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString() | 377.98 ns/iter (377.977) | 356.19 ns | 385.2 ns  | 438.84 ns | 444.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 498.94 ns/iter (498.939) | 474.47 ns | 507.78 ns | 599.82 ns | 662.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 800.79 ns/iter (800.793) | 638.14 ns | 777.22 ns | 1.71 µs   | 1.71 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString() | 530.12 ns/iter (530.119) | 402.1 ns  | 547.46 ns | 1.6 µs  | 1.75 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 727.69 ns/iter (727.691) | 603.36 ns | 662.25 ns | 1.48 µs | 1.48 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 851.04 ns/iter (851.041) | 819.98 ns | 859.8 ns  | 1.06 µs | 1.06 µs |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75    | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | ------ | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 14.11 µs/iter (14,110)   | 6.2 µs | 10.6 µs  | 43.6 µs | 2.87 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString() | 15.7 µs/iter (15,701)    | 7.4 µs | 14.5 µs  | 76 µs   | 978.1 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.04 ms/iter (1,042,694) | 844 µs | 919.7 µs | 3.59 ms | 6.23 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString() | 21.68 µs/iter (21,675)   | 15 µs    | 19.9 µs  | 61.6 µs | 755.9 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 28 µs/iter (28,004)      | 7.4 µs   | 18.1 µs  | 96.3 µs | 12.47 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 946.67 µs/iter (946,668) | 743.7 µs | 847.8 µs | 3.37 ms | 4.73 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.34 µs/iter (1,340.755) | 1.13 µs | 1.39 µs | 1.98 µs  | 1.98 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 29.14 µs/iter (29,141)   | 8.9 µs  | 21.6 µs | 144.2 µs | 5.83 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 36.7 µs/iter (36,703)    | 30.7 µs | 33.6 µs | 79.3 µs  | 1.36 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString() | 137.12 ns/iter (137.119) | 92.62 ns  | 153.49 ns | 447.8 ns  | 1.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 330.63 ns/iter (330.629) | 290.02 ns | 327.48 ns | 634.02 ns | 687.94 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 26.48 µs/iter (26,475)   | 8.8 µs    | 19.6 µs   | 113.7 µs  | 3.87 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                 | p75     | p99     | Min     | Max     |
| -------------------------------------- | ------------------------------------------------- | ----------------------- | ------- | ------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString() | 2.88 µs/iter (2,877.85) | 2.65 µs | 2.99 µs | 3.5 µs  | 3.5 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 15.63 µs/iter (15,629)  | 12.9 µs | 14.6 µs | 35.3 µs | 766 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.58 µs/iter (25,582)  | 17.8 µs | 21.7 µs | 55.6 µs | 2.74 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | -------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 107.04 ns/iter (107.045) | 82.49 ns | 111.51 ns | 222.19 ns | 443.54 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.07 µs/iter (1,072.514) | 1.02 µs  | 1.09 µs   | 1.34 µs   | 1.34 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 98.92 µs/iter (98,917)   | 91 µs    | 95.2 µs   | 157.4 µs  | 2.26 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75      | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | -------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 13.14 µs/iter (13,140)   | 6.6 µs   | 9.9 µs  | 41.4 µs | 3.21 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString() | 13.72 µs/iter (13,719)   | 7.3 µs   | 12.5 µs | 51.8 µs | 738.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.37 ms/iter (1,365,375) | 861.1 µs | 1.13 ms | 9 ms    | 15.96 ms |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | -------- | -------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString() | 13.4 µs/iter (13,403)    | 7.4 µs   | 12 µs    | 49.8 µs | 825.3 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 13.91 µs/iter (13,910)   | 6.8 µs   | 10.4 µs  | 38.1 µs | 2.69 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.09 ms/iter (1,090,423) | 877.5 µs | 968.7 µs | 4.02 ms | 4.71 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString() | 476.92 ns/iter (476.921) | 444.87 ns | 489.44 ns | 549.66 ns | 560.5 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.13 µs/iter (3,134.268) | 1.89 µs   | 3.57 µs   | 3.98 µs   | 3.98 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 41.66 µs/iter (41,660)   | 35.6 µs   | 37.4 µs   | 77.7 µs   | 2.29 ms  |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 107.04 ns/iter (107.045) | 82.49 ns  | 111.51 ns | 222.19 ns | 443.54 ns |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 137.12 ns/iter (137.119) | 92.62 ns  | 153.49 ns | 447.8 ns  | 1.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 330.63 ns/iter (330.629) | 290.02 ns | 327.48 ns | 634.02 ns | 687.94 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString()            | 377.98 ns/iter (377.977) | 356.19 ns | 385.2 ns  | 438.84 ns | 444.73 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString()             | 382.44 ns/iter (382.445) | 355.89 ns | 393.86 ns | 473.45 ns | 492.94 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString()              | 384.17 ns/iter (384.173) | 353.64 ns | 397.25 ns | 509.44 ns | 585.56 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString()                 | 384.18 ns/iter (384.182) | 358.03 ns | 394.71 ns | 535.75 ns | 562.72 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString()            | 386.99 ns/iter (386.992) | 356.41 ns | 401.24 ns | 516.36 ns | 535.53 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le')             | 436.31 ns/iter (436.312) | 392 ns    | 444.96 ns | 639.76 ns | 758.87 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8')                | 437.03 ns/iter (437.029) | 397.44 ns | 437.04 ns | 664.72 ns | 1.08 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii')               | 440.36 ns/iter (440.361) | 376.91 ns | 439.15 ns | 860.98 ns | 1.02 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2')                | 443.2 ns/iter (443.203)  | 398.11 ns | 442.37 ns | 603.16 ns | 1.36 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1')              | 443.56 ns/iter (443.556) | 393.67 ns | 451.43 ns | 636.86 ns | 656.11 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary')              | 447.99 ns/iter (447.988) | 391.89 ns | 472.22 ns | 654.32 ns | 695.15 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString()       | 449.29 ns/iter (449.294) | 410.38 ns | 455.07 ns | 656.75 ns | 670.54 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 470.76 ns/iter (470.762) | 444.2 ns  | 478.08 ns | 668.89 ns | 745.69 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString()         | 474.52 ns/iter (474.517) | 412.12 ns | 478.86 ns | 740.42 ns | 974.46 ns |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString()       | 476.92 ns/iter (476.921) | 444.87 ns | 489.44 ns | 549.66 ns | 560.5 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex')                 | 492.03 ns/iter (492.03)  | 413.21 ns | 532.61 ns | 783.03 ns | 790.99 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 496.64 ns/iter (496.643) | 458.23 ns | 500.76 ns | 708.6 ns  | 737.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 498.94 ns/iter (498.939) | 474.47 ns | 507.78 ns | 599.82 ns | 662.31 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 499.75 ns/iter (499.748) | 467.44 ns | 505.36 ns | 671.97 ns | 752.09 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64')              | 502.21 ns/iter (502.208) | 405.82 ns | 476.65 ns | 1.46 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 505.54 ns/iter (505.541) | 476.14 ns | 511.73 ns | 644.26 ns | 817.15 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url')           | 526.14 ns/iter (526.141) | 417.01 ns | 586.26 ns | 1.16 µs   | 1.31 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString()          | 530.12 ns/iter (530.119) | 402.1 ns  | 547.46 ns | 1.6 µs    | 1.75 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString()              | 667.2 ns/iter (667.204)  | 422.45 ns | 751.53 ns | 1.88 µs   | 1.88 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 708.55 ns/iter (708.553) | 604.98 ns | 644.65 ns | 1.4 µs    | 1.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 727.69 ns/iter (727.691) | 603.36 ns | 662.25 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 775.23 ns/iter (775.231) | 641.25 ns | 719.7 ns  | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 777.96 ns/iter (777.959) | 637.6 ns  | 746.67 ns | 1.45 µs   | 1.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 783.78 ns/iter (783.782) | 654.81 ns | 723.92 ns | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 797.66 ns/iter (797.664) | 660.85 ns | 753.24 ns | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 800.79 ns/iter (800.793) | 638.14 ns | 777.22 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 804.17 ns/iter (804.174) | 688.77 ns | 736.88 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 816.35 ns/iter (816.349) | 669.57 ns | 780.19 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 843.02 ns/iter (843.015) | 721.44 ns | 771.98 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 846.68 ns/iter (846.675) | 683.06 ns | 806.38 ns | 2.11 µs   | 2.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 851.04 ns/iter (851.041) | 819.98 ns | 859.8 ns  | 1.06 µs   | 1.06 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 862.57 ns/iter (862.57)  | 651.65 ns | 816.97 ns | 2.13 µs   | 2.13 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 875.1 ns/iter (875.1)    | 639.08 ns | 895.81 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 884.95 ns/iter (884.953) | 715.11 ns | 844.98 ns | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 906.28 ns/iter (906.282) | 705.61 ns | 867.89 ns | 1.93 µs   | 1.93 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 933.38 ns/iter (933.377) | 718.82 ns | 929.64 ns | 2.29 µs   | 2.29 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.03 µs/iter (1,030.692) | 736.48 ns | 1.18 µs   | 1.9 µs    | 1.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.07 µs/iter (1,072.229) | 972.98 ns | 1.07 µs   | 1.81 µs   | 1.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.07 µs/iter (1,072.514) | 1.02 µs   | 1.09 µs   | 1.34 µs   | 1.34 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.11 µs/iter (1,108.596) | 934.99 ns | 1.17 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.14 µs/iter (1,138.491) | 993.03 ns | 1.19 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.14 µs/iter (1,144.91)  | 888.41 ns | 1.25 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.19 µs/iter (1,194.323) | 1.04 µs   | 1.22 µs   | 1.43 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.2 µs/iter (1,195.064)  | 1.12 µs   | 1.2 µs    | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.2 µs/iter (1,200.343)  | 1 µs      | 1.24 µs   | 2.21 µs   | 2.21 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1.22 µs/iter (1,217.328) | 672.09 ns | 1.39 µs   | 5.27 µs   | 5.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.23 µs/iter (1,234.114) | 1.06 µs   | 1.28 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.23 µs/iter (1,234.27)  | 960.8 ns  | 1.19 µs   | 4.04 µs   | 4.04 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.33 µs/iter (1,334.67)  | 989.19 ns | 1.27 µs   | 4.09 µs   | 4.09 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.34 µs/iter (1,340.755) | 1.13 µs   | 1.39 µs   | 1.98 µs   | 1.98 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.36 µs/iter (1,359.975) | 1.31 µs   | 1.38 µs   | 1.53 µs   | 1.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.43 µs/iter (1,428.313) | 1.3 µs    | 1.47 µs   | 1.92 µs   | 1.92 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString()    | 2.88 µs/iter (2,877.85)  | 2.65 µs   | 2.99 µs   | 3.5 µs    | 3.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.13 µs/iter (3,134.268) | 1.89 µs   | 3.57 µs   | 3.98 µs   | 3.98 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 13.01 µs/iter (13,014)   | 6.5 µs    | 10.5 µs   | 27.8 µs   | 2.83 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 13.14 µs/iter (13,140)   | 6.6 µs    | 9.9 µs    | 41.4 µs   | 3.21 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString()           | 13.4 µs/iter (13,403)    | 7.4 µs    | 12 µs     | 49.8 µs   | 825.3 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString()           | 13.72 µs/iter (13,719)   | 7.3 µs    | 12.5 µs   | 51.8 µs   | 738.7 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 13.74 µs/iter (13,745)   | 6.1 µs    | 10.9 µs   | 32.2 µs   | 3.06 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 13.91 µs/iter (13,910)   | 6.8 µs    | 10.4 µs   | 38.1 µs   | 2.69 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 14.11 µs/iter (14,110)   | 6.2 µs    | 10.6 µs   | 43.6 µs   | 2.87 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 14.19 µs/iter (14,193)   | 4.6 µs    | 11 µs     | 38.8 µs   | 3.09 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 14.24 µs/iter (14,238)   | 6 µs      | 11 µs     | 37.1 µs   | 3.23 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 14.54 µs/iter (14,540)   | 6 µs      | 11.1 µs   | 41.1 µs   | 3.06 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15.2 µs/iter (15,196)    | 6.9 µs    | 12.4 µs   | 36.5 µs   | 3.03 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 15.63 µs/iter (15,629)   | 12.9 µs   | 14.6 µs   | 35.3 µs   | 766 µs    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString()            | 15.7 µs/iter (15,701)    | 7.4 µs    | 14.5 µs   | 76 µs     | 978.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 16.27 µs/iter (16,272)   | 7.3 µs    | 13.9 µs   | 33.8 µs   | 2.64 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1')             | 18.38 µs/iter (18,380)   | 12.5 µs   | 16.4 µs   | 63.6 µs   | 768 µs    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary')             | 18.46 µs/iter (18,462)   | 12.1 µs   | 16.9 µs   | 56.6 µs   | 1.68 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le')            | 18.83 µs/iter (18,830)   | 12.8 µs   | 16.2 µs   | 118.8 µs  | 917.2 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2')               | 19.75 µs/iter (19,747)   | 12.8 µs   | 17.8 µs   | 103.3 µs  | 667 µs    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString()             | 21.68 µs/iter (21,675)   | 15 µs     | 19.9 µs   | 61.6 µs   | 755.9 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8')               | 22.6 µs/iter (22,597)    | 14.3 µs   | 22 µs     | 162.8 µs  | 994.5 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.58 µs/iter (25,582)   | 17.8 µs   | 21.7 µs   | 55.6 µs   | 2.74 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii')              | 25.64 µs/iter (25,644)   | 14.5 µs   | 24.9 µs   | 236.3 µs  | 2.14 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 26.48 µs/iter (26,475)   | 8.8 µs    | 19.6 µs   | 113.7 µs  | 3.87 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 28 µs/iter (28,004)      | 7.4 µs    | 18.1 µs   | 96.3 µs   | 12.47 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 29.14 µs/iter (29,141)   | 8.9 µs    | 21.6 µs   | 144.2 µs  | 5.83 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 36.7 µs/iter (36,703)    | 30.7 µs   | 33.6 µs   | 79.3 µs   | 1.36 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 41.66 µs/iter (41,660)   | 35.6 µs   | 37.4 µs   | 77.7 µs   | 2.29 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 47.15 µs/iter (47,154)   | 31.1 µs   | 35.4 µs   | 370.7 µs  | 2.77 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url')          | 55.34 µs/iter (55,345)   | 40.4 µs   | 55.6 µs   | 255.8 µs  | 1.42 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex')                | 59.02 µs/iter (59,020)   | 49.6 µs   | 54.3 µs   | 289.8 µs  | 916.6 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64')             | 64.88 µs/iter (64,876)   | 40.5 µs   | 61.5 µs   | 301.2 µs  | 10.11 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 98.92 µs/iter (98,917)   | 91 µs     | 95.2 µs   | 157.4 µs  | 2.26 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 218.76 µs/iter (218,757) | 197.3 µs  | 206.4 µs  | 502 µs    | 3 ms      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 570.33 µs/iter (570,334) | 453.5 µs  | 506.5 µs  | 1.91 ms   | 2.3 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 605.48 µs/iter (605,484) | 495.4 µs  | 544.6 µs  | 1.88 ms   | 2.33 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 611.61 µs/iter (611,609) | 491 µs    | 745.5 µs  | 1.02 ms   | 1.25 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 612.12 µs/iter (612,123) | 494.7 µs  | 552.7 µs  | 1.91 ms   | 2.53 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 618.62 µs/iter (618,617) | 452.4 µs  | 576.4 µs  | 1.92 ms   | 2.34 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 659.78 µs/iter (659,784) | 532.2 µs  | 604.8 µs  | 1.91 ms   | 2.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 786.07 µs/iter (786,067) | 587.7 µs  | 770.6 µs  | 2.24 ms   | 2.77 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 904.26 µs/iter (904,257) | 735.9 µs  | 813 µs    | 2.26 ms   | 2.34 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 946.67 µs/iter (946,668) | 743.7 µs  | 847.8 µs  | 3.37 ms   | 4.73 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.04 ms/iter (1,042,694) | 844 µs    | 919.7 µs  | 3.59 ms   | 6.23 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.09 ms/iter (1,090,423) | 877.5 µs  | 968.7 µs  | 4.02 ms   | 4.71 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.18 ms/iter (1,183,634) | 841.4 µs  | 1.19 ms   | 3.75 ms   | 4.29 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.37 ms/iter (1,365,375) | 861.1 µs  | 1.13 ms   | 9 ms      | 15.96 ms  |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------- | ------------------------ | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 839.89 ns/iter (839.891) | 753.05 ns | 882.05 ns | 1.14 µs | 1.14 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello') | 7.86 µs/iter (7,855)     | 1.6 µs    | 15.8 µs   | 26.2 µs | 941.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 23.98 µs/iter (23,977)   | 5 µs      | 28 µs     | 47.2 µs | 615.4 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.53 µs/iter (1,533.176) | 1.35 µs | 1.57 µs | 2.57 µs | 2.57 µs |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 20.21 µs/iter (20,206)   | 3.3 µs  | 26.2 µs | 56.3 µs | 1.14 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 35.13 µs/iter (35,126)   | 10.3 µs | 37.2 µs | 57.3 µs | 782 µs  |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 839.89 ns/iter (839.891) | 753.05 ns | 882.05 ns | 1.14 µs | 1.14 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.53 µs/iter (1,533.176) | 1.35 µs   | 1.57 µs   | 2.57 µs | 2.57 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 7.86 µs/iter (7,855)     | 1.6 µs    | 15.8 µs   | 26.2 µs | 941.8 µs |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 20.21 µs/iter (20,206)   | 3.3 µs    | 26.2 µs   | 56.3 µs | 1.14 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 23.98 µs/iter (23,977)   | 5 µs      | 28 µs     | 47.2 µs | 615.4 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 35.13 µs/iter (35,126)   | 10.3 µs   | 37.2 µs   | 57.3 µs | 782 µs   |

