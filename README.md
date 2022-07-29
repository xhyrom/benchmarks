*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [json](#json)
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average                  | p75       | p99      | Min     | Max     |
| -------------------------------------- | ---------- | ------------------------ | --------- | -------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 602.55 ns/iter (602.548) | 416.25 ns | 629.8 ns | 1.76 µs | 1.76 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.48 µs/iter (1,481.71)  | 1.06 µs   | 1.58 µs  | 3.28 µs | 3.28 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.69 µs/iter (1,689.327) | 1.38 µs   | 1.81 µs  | 2.37 µs | 2.37 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 148.08 ns/iter (148.077) | 118.17 ns | 151.9 ns  | 293.77 ns | 529.63 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 256.39 ns/iter (256.393) | 237.27 ns | 260.27 ns | 380.08 ns | 395.32 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 257.86 ns/iter (257.862) | 231.94 ns | 263.27 ns | 363.02 ns | 403.85 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 229.21 ns/iter (229.213) | 175.72 ns | 245.55 ns | 427.35 ns | 460.52 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 233.17 ns/iter (233.174) | 182.06 ns | 242.12 ns | 408.06 ns | 431.93 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 333.79 ns/iter (333.788) | 274.09 ns | 351.67 ns | 554.84 ns | 555.1 ns  |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 148.08 ns/iter (148.077) | 118.17 ns | 151.9 ns  | 293.77 ns | 529.63 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 229.21 ns/iter (229.213) | 175.72 ns | 245.55 ns | 427.35 ns | 460.52 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 233.17 ns/iter (233.174) | 182.06 ns | 242.12 ns | 408.06 ns | 431.93 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 256.39 ns/iter (256.393) | 237.27 ns | 260.27 ns | 380.08 ns | 395.32 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 257.86 ns/iter (257.862) | 231.94 ns | 263.27 ns | 363.02 ns | 403.85 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 333.79 ns/iter (333.788) | 274.09 ns | 351.67 ns | 554.84 ns | 555.1 ns  |

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average                  | p75       | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | --------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1 µs/iter (1,002.142)    | 692.59 ns | 1.14 µs | 2.41 µs | 2.41 µs |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii') | 1.04 µs/iter (1,040.241) | 659.83 ns | 1.06 µs | 2.48 µs | 2.48 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.4 µs/iter (1,395.706)  | 963.53 ns | 1.35 µs | 4.88 µs | 4.88 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8') | 853.54 ns/iter (853.544) | 462.25 ns | 955.22 ns | 2.27 µs | 2.27 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 856.32 ns/iter (856.321) | 654.49 ns | 868.1 ns  | 1.88 µs | 1.88 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.48 µs/iter (1,481.496) | 1.01 µs   | 1.64 µs   | 2.16 µs | 2.16 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le') | 512.3 ns/iter (512.303)  | 395.95 ns | 582.44 ns | 815.21 ns | 959.53 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.06 µs/iter (1,058.939) | 922.33 ns | 1.1 µs    | 1.32 µs   | 1.32 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.12 µs/iter (1,119.354) | 725.57 ns | 1.19 µs   | 3.41 µs   | 3.41 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2') | 445.35 ns/iter (445.352) | 391.73 ns | 459.25 ns | 688.62 ns | 691.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 919.37 ns/iter (919.368) | 681.67 ns | 918.92 ns | 2 µs      | 2 µs      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.08 µs/iter (1,083.458) | 915.38 ns | 1.15 µs   | 1.83 µs   | 1.83 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64') | 573.58 ns/iter (573.582) | 405.91 ns | 564.83 ns | 1.65 µs | 1.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 926.56 ns/iter (926.556) | 713.32 ns | 899.62 ns | 1.97 µs | 1.97 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.18 µs/iter (1,175.839) | 973.03 ns | 1.22 µs   | 1.43 µs | 1.43 µs |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average                  | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------------ | ------------------------ | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url') | 552.55 ns/iter (552.552) | 413.04 ns | 626.46 ns | 951.65 ns | 1.03 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.1 µs/iter (1,098.147)  | 717.39 ns | 1.23 µs   | 1.98 µs   | 1.98 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.48 µs/iter (2,479.376) | 2.04 µs   | 2.55 µs   | 4.08 µs   | 4.08 µs |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1') | 510.09 ns/iter (510.092) | 403.9 ns  | 561.69 ns | 752.29 ns | 788.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 884.75 ns/iter (884.75)  | 699.69 ns | 871.53 ns | 1.83 µs   | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.88 µs/iter (1,882.643) | 1.63 µs   | 1.97 µs   | 2.79 µs   | 2.79 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary') | 453.19 ns/iter (453.186) | 404.57 ns | 450.21 ns | 659.04 ns | 695.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 895.04 ns/iter (895.037) | 706.77 ns | 836.29 ns | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.95 µs/iter (1,950.067) | 1.71 µs   | 1.97 µs   | 2.51 µs   | 2.51 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex') | 456.49 ns/iter (456.49)  | 407.3 ns  | 470.76 ns | 644.96 ns | 727.1 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 796.59 ns/iter (796.588) | 656.48 ns | 732.11 ns | 1.61 µs   | 1.61 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.86 µs/iter (1,859.434) | 1.62 µs   | 1.88 µs   | 2.79 µs   | 2.79 µs  |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average                  | p75      | p99     | Min      | Max      |
| -------------------------------------- | --------------------------------------- | ------------------------ | -------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 16.32 µs/iter (16,315)   | 4.7 µs   | 12.6 µs | 54.1 µs  | 4.07 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii') | 22.66 µs/iter (22,657)   | 14 µs    | 19.4 µs | 205.3 µs | 728.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 1.01 ms/iter (1,011,684) | 806.1 µs | 1.2 ms  | 1.72 ms  | 1.91 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | -------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 17.31 µs/iter (17,308)   | 7.3 µs  | 14.3 µs | 62.1 µs  | 3.05 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8') | 24.96 µs/iter (24,959)   | 14.5 µs | 25.8 µs | 213.4 µs | 710.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.75 ms/iter (1,754,715) | 1.24 ms | 1.95 ms | 4.15 ms  | 5.14 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average                  | p75      | p99     | Min      | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | -------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 14.29 µs/iter (14,285)   | 6.1 µs   | 11.7 µs | 33.9 µs  | 2.66 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le') | 25.96 µs/iter (25,965)   | 12.8 µs  | 22.7 µs | 243.6 µs | 9.92 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 1.27 ms/iter (1,269,640) | 750.9 µs | 1.36 ms | 5.81 ms  | 10.59 ms |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average                  | p75      | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | ------------------------ | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 17.48 µs/iter (17,483)   | 6.6 µs   | 14.5 µs | 55.1 µs  | 3.38 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2') | 26.93 µs/iter (26,928)   | 12.7 µs  | 24.3 µs | 252.5 µs | 4.54 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 1.08 ms/iter (1,082,838) | 754.1 µs | 1.16 ms | 3.43 ms  | 5.01 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average                  | p75      | p99     | Min      | Max     |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 20.87 µs/iter (20,867)   | 7.4 µs   | 18 µs   | 65.4 µs  | 3.37 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64') | 50.77 µs/iter (50,775)   | 39.3 µs  | 44.3 µs | 237.3 µs | 1.13 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 1.29 ms/iter (1,294,028) | 970.5 µs | 1.4 ms  | 3.33 ms  | 5.37 ms |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url') | 51.17 µs/iter (51,168)   | 40.7 µs | 44.8 µs | 228.3 µs | 722.4 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 59.19 µs/iter (59,188)   | 31.6 µs | 51.9 µs | 519.9 µs | 3.72 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.91 ms/iter (1,910,214) | 1.4 ms  | 1.89 ms | 4.89 ms  | 5.47 ms  |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average                  | p75      | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 13.75 µs/iter (13,750)   | 6.1 µs   | 10.9 µs | 36.5 µs | 2.79 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1') | 17.8 µs/iter (17,797)    | 12.4 µs  | 15.7 µs | 74.5 µs | 732.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 1.26 ms/iter (1,255,750) | 816.8 µs | 1.46 ms | 4.24 ms | 5.94 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average                  | p75      | p99     | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 15.28 µs/iter (15,276)   | 5.9 µs   | 11.9 µs | 43.3 µs | 3.47 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary') | 17.86 µs/iter (17,863)   | 12.5 µs  | 16.3 µs | 54.9 µs | 654.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 1.29 ms/iter (1,289,163) | 822.5 µs | 1.44 ms | 4.47 ms | 8.03 ms  |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | ------------------------ | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex') | 56.47 µs/iter (56,468)   | 49.1 µs  | 52.8 µs  | 257.5 µs | 662.6 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 221.9 µs/iter (221,902)  | 197.4 µs | 207.1 µs | 440.3 µs | 2.92 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 1.23 ms/iter (1,231,229) | 870.7 µs | 1.27 ms  | 3.72 ms  | 8.67 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString() | 382.22 ns/iter (382.218) | 352.34 ns | 392.42 ns | 532.94 ns | 560.36 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 1.12 µs/iter (1,117.371) | 813.14 ns | 1.23 µs   | 3.12 µs   | 3.12 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.43 µs/iter (1,425.982) | 1.15 µs   | 1.46 µs   | 2.83 µs   | 2.83 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average                  | p75      | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | ------------------------ | -------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString() | 469.46 ns/iter (469.465) | 435.2 ns | 475.18 ns | 609.4 ns | 626.59 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 1.36 µs/iter (1,364.65)  | 1.09 µs  | 1.24 µs   | 3.47 µs  | 3.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.94 µs/iter (1,943.363) | 1.6 µs   | 2.09 µs   | 2.64 µs  | 2.64 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | --------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString() | 386.03 ns/iter (386.029) | 357.6 ns  | 392.28 ns | 605.5 ns | 617 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 913.14 ns/iter (913.142) | 778.29 ns | 919.52 ns | 2.06 µs  | 2.06 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 1.43 µs/iter (1,426.231) | 1.17 µs   | 1.34 µs   | 2.99 µs  | 2.99 µs |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString() | 407.75 ns/iter (407.753) | 348.8 ns  | 427.24 ns | 608.63 ns | 640.61 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 963.37 ns/iter (963.366) | 774.38 ns | 1.06 µs   | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 1.38 µs/iter (1,384.57)  | 1.11 µs   | 1.28 µs   | 2.51 µs   | 2.51 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString() | 507.58 ns/iter (507.581) | 422.57 ns | 547.85 ns | 701.73 ns | 766.21 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 1.44 µs/iter (1,443.106) | 1.1 µs    | 1.47 µs   | 2.7 µs    | 2.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 2.24 µs/iter (2,243.933) | 1.94 µs   | 2.34 µs   | 3.44 µs   | 3.44 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString() | 514.77 ns/iter (514.765) | 437.24 ns | 513.06 ns | 759.24 ns | 785.36 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.5 µs/iter (1,496.012)  | 1.19 µs   | 1.42 µs   | 2.9 µs    | 2.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 2.77 µs/iter (2,774.068) | 2.28 µs   | 2.98 µs   | 3.69 µs   | 3.69 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99       | Min      | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString() | 402.69 ns/iter (402.692) | 373.52 ns | 406.32 ns | 535.6 ns | 579.91 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 899.79 ns/iter (899.788) | 799.12 ns | 916.1 ns  | 1.4 µs   | 1.4 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.52 µs/iter (1,516.221) | 1.1 µs    | 1.88 µs   | 3.86 µs  | 3.86 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average                  | p75       | p99      | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | ------------------------ | --------- | -------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString() | 414.66 ns/iter (414.658) | 374.06 ns | 423.8 ns | 583.49 ns | 595.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 1.01 µs/iter (1,013.164) | 802.79 ns | 1.09 µs  | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.34 µs/iter (1,339.894) | 1.09 µs   | 1.27 µs  | 2.51 µs   | 2.51 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString() | 443.57 ns/iter (443.568) | 416.97 ns | 454.97 ns | 591.73 ns | 610.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.2 µs/iter (1,200.935)  | 819.4 ns  | 1.49 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 1.25 µs/iter (1,249.797) | 1.02 µs   | 1.18 µs   | 2.53 µs   | 2.53 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString() | 13.06 µs/iter (13,065)   | 7 µs     | 11.9 µs  | 51.5 µs | 859.1 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 22.65 µs/iter (22,651)   | 10.7 µs  | 16.2 µs  | 70.7 µs | 4.45 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.08 ms/iter (1,076,321) | 841.1 µs | 964.3 µs | 4.11 ms | 5.16 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average                  | p75      | p99      | Min     | Max      |
| -------------------------------------- | ---------------------------------------- | ------------------------ | -------- | -------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString() | 19.57 µs/iter (19,571)   | 14.5 µs  | 17.9 µs  | 53.3 µs | 797.1 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 21.16 µs/iter (21,155)   | 10.9 µs  | 15.3 µs  | 55.6 µs | 4.15 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 994.95 µs/iter (994,945) | 739.3 µs | 968.2 µs | 3.7 ms  | 4.74 ms  |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average                  | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------------------ | ------- | ------- | -------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.49 µs/iter (1,492.629) | 1.14 µs | 1.63 µs | 2.05 µs  | 2.05 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 39.31 µs/iter (39,315)   | 30.6 µs | 35.9 µs | 98.2 µs  | 2.12 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 44.21 µs/iter (44,210)   | 15.6 µs | 32.3 µs | 170.9 µs | 4.24 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString() | 107.06 ns/iter (107.057) | 92.34 ns  | 113.04 ns | 180.83 ns | 342.96 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 327.72 ns/iter (327.724) | 280.92 ns | 333.97 ns | 527.67 ns | 539.04 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 49.67 µs/iter (49,674)   | 15.5 µs   | 31 µs     | 145.1 µs  | 35.35 ms  |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average                  | p75     | p99     | Min      | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------------------ | ------- | ------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString() | 2.97 µs/iter (2,973.853) | 2.7 µs  | 3.12 µs | 3.99 µs  | 3.99 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 16.42 µs/iter (16,423)   | 12.6 µs | 14.7 µs | 37.5 µs  | 1.28 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 54.59 µs/iter (54,589)   | 29.4 µs | 48 µs   | 133.1 µs | 18.54 ms |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average                  | p75      | p99      | Min      | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | -------- | -------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 109.92 ns/iter (109.916) | 82.69 ns | 119.7 ns | 224 ns   | 309.47 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.34 µs/iter (1,335.711) | 1.03 µs  | 1.5 µs   | 1.98 µs  | 1.98 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 184.34 µs/iter (184,343) | 151.1 µs | 171.9 µs | 456.4 µs | 3.72 ms   |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString() | 12.64 µs/iter (12,645)   | 6.9 µs   | 11.3 µs  | 46 µs    | 924.9 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 33.09 µs/iter (33,090)   | 11.2 µs  | 19.6 µs  | 101.8 µs | 12.32 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.07 ms/iter (1,071,428) | 869.1 µs | 966.1 µs | 3.71 ms  | 4.25 ms  |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average                  | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------------ | ------------------------ | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString() | 18.09 µs/iter (18,094)   | 7.3 µs   | 15.5 µs  | 79.1 µs  | 8.23 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 27.6 µs/iter (27,604)    | 10.9 µs  | 18.6 µs  | 100.6 µs | 10.05 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.13 ms/iter (1,128,493) | 868.7 µs | 993.4 µs | 4.34 ms  | 4.89 ms  |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average                  | p75       | p99       | Min      | Max     |
| -------------------------------------- | ---------------------------------------------- | ------------------------ | --------- | --------- | -------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString() | 819.08 ns/iter (819.079) | 448.15 ns | 815.36 ns | 2.8 µs   | 2.8 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4 µs/iter (3,996.022)    | 2.14 µs   | 5.11 µs   | 6.16 µs  | 6.16 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 94.91 µs/iter (94,908)   | 58.7 µs   | 96.3 µs   | 569.3 µs | 5.21 ms |


#### everything
| Runtime                                | Benchmark                                            | Average                  | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | ------------------------ | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 107.06 ns/iter (107.057) | 92.34 ns  | 113.04 ns | 180.83 ns | 342.96 ns |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 109.92 ns/iter (109.916) | 82.69 ns  | 119.7 ns  | 224 ns    | 309.47 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 327.72 ns/iter (327.724) | 280.92 ns | 333.97 ns | 527.67 ns | 539.04 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString()             | 382.22 ns/iter (382.218) | 352.34 ns | 392.42 ns | 532.94 ns | 560.36 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString()              | 386.03 ns/iter (386.029) | 357.6 ns  | 392.28 ns | 605.5 ns  | 617 ns    |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString()            | 402.69 ns/iter (402.692) | 373.52 ns | 406.32 ns | 535.6 ns  | 579.91 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString()                 | 407.75 ns/iter (407.753) | 348.8 ns  | 427.24 ns | 608.63 ns | 640.61 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString()            | 414.66 ns/iter (414.658) | 374.06 ns | 423.8 ns  | 583.49 ns | 595.79 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString()          | 443.57 ns/iter (443.568) | 416.97 ns | 454.97 ns | 591.73 ns | 610.51 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2')                | 445.35 ns/iter (445.352) | 391.73 ns | 459.25 ns | 688.62 ns | 691.31 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary')              | 453.19 ns/iter (453.186) | 404.57 ns | 450.21 ns | 659.04 ns | 695.19 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex')                 | 456.49 ns/iter (456.49)  | 407.3 ns  | 470.76 ns | 644.96 ns | 727.1 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString()              | 469.46 ns/iter (469.465) | 435.2 ns  | 475.18 ns | 609.4 ns  | 626.59 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString()         | 507.58 ns/iter (507.581) | 422.57 ns | 547.85 ns | 701.73 ns | 766.21 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1')              | 510.09 ns/iter (510.092) | 403.9 ns  | 561.69 ns | 752.29 ns | 788.44 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le')             | 512.3 ns/iter (512.303)  | 395.95 ns | 582.44 ns | 815.21 ns | 959.53 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString()       | 514.77 ns/iter (514.765) | 437.24 ns | 513.06 ns | 759.24 ns | 785.36 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url')           | 552.55 ns/iter (552.552) | 413.04 ns | 626.46 ns | 951.65 ns | 1.03 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64')              | 573.58 ns/iter (573.582) | 405.91 ns | 564.83 ns | 1.65 µs   | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 796.59 ns/iter (796.588) | 656.48 ns | 732.11 ns | 1.61 µs   | 1.61 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString()       | 819.08 ns/iter (819.079) | 448.15 ns | 815.36 ns | 2.8 µs    | 2.8 µs    |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8')                | 853.54 ns/iter (853.544) | 462.25 ns | 955.22 ns | 2.27 µs   | 2.27 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 856.32 ns/iter (856.321) | 654.49 ns | 868.1 ns  | 1.88 µs   | 1.88 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 884.75 ns/iter (884.75)  | 699.69 ns | 871.53 ns | 1.83 µs   | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 895.04 ns/iter (895.037) | 706.77 ns | 836.29 ns | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 899.79 ns/iter (899.788) | 799.12 ns | 916.1 ns  | 1.4 µs    | 1.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 913.14 ns/iter (913.142) | 778.29 ns | 919.52 ns | 2.06 µs   | 2.06 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 919.37 ns/iter (919.368) | 681.67 ns | 918.92 ns | 2 µs      | 2 µs      |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 926.56 ns/iter (926.556) | 713.32 ns | 899.62 ns | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 963.37 ns/iter (963.366) | 774.38 ns | 1.06 µs   | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 1 µs/iter (1,002.142)    | 692.59 ns | 1.14 µs   | 2.41 µs   | 2.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 1.01 µs/iter (1,013.164) | 802.79 ns | 1.09 µs   | 2.05 µs   | 2.05 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii')               | 1.04 µs/iter (1,040.241) | 659.83 ns | 1.06 µs   | 2.48 µs   | 2.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.06 µs/iter (1,058.939) | 922.33 ns | 1.1 µs    | 1.32 µs   | 1.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.08 µs/iter (1,083.458) | 915.38 ns | 1.15 µs   | 1.83 µs   | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 1.1 µs/iter (1,098.147)  | 717.39 ns | 1.23 µs   | 1.98 µs   | 1.98 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 1.12 µs/iter (1,117.371) | 813.14 ns | 1.23 µs   | 3.12 µs   | 3.12 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 1.12 µs/iter (1,119.354) | 725.57 ns | 1.19 µs   | 3.41 µs   | 3.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.18 µs/iter (1,175.839) | 973.03 ns | 1.22 µs   | 1.43 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.2 µs/iter (1,200.935)  | 819.4 ns  | 1.49 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 1.25 µs/iter (1,249.797) | 1.02 µs   | 1.18 µs   | 2.53 µs   | 2.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.34 µs/iter (1,335.711) | 1.03 µs   | 1.5 µs    | 1.98 µs   | 1.98 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.34 µs/iter (1,339.894) | 1.09 µs   | 1.27 µs   | 2.51 µs   | 2.51 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 1.36 µs/iter (1,364.65)  | 1.09 µs   | 1.24 µs   | 3.47 µs   | 3.47 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 1.38 µs/iter (1,384.57)  | 1.11 µs   | 1.28 µs   | 2.51 µs   | 2.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.4 µs/iter (1,395.706)  | 963.53 ns | 1.35 µs   | 4.88 µs   | 4.88 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.43 µs/iter (1,425.982) | 1.15 µs   | 1.46 µs   | 2.83 µs   | 2.83 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 1.43 µs/iter (1,426.231) | 1.17 µs   | 1.34 µs   | 2.99 µs   | 2.99 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.44 µs/iter (1,443.106) | 1.1 µs    | 1.47 µs   | 2.7 µs    | 2.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.48 µs/iter (1,481.496) | 1.01 µs   | 1.64 µs   | 2.16 µs   | 2.16 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.49 µs/iter (1,492.629) | 1.14 µs   | 1.63 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.5 µs/iter (1,496.012)  | 1.19 µs   | 1.42 µs   | 2.9 µs    | 2.9 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.52 µs/iter (1,516.221) | 1.1 µs    | 1.88 µs   | 3.86 µs   | 3.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.86 µs/iter (1,859.434) | 1.62 µs   | 1.88 µs   | 2.79 µs   | 2.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.88 µs/iter (1,882.643) | 1.63 µs   | 1.97 µs   | 2.79 µs   | 2.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.94 µs/iter (1,943.363) | 1.6 µs    | 2.09 µs   | 2.64 µs   | 2.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.95 µs/iter (1,950.067) | 1.71 µs   | 1.97 µs   | 2.51 µs   | 2.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 2.24 µs/iter (2,243.933) | 1.94 µs   | 2.34 µs   | 3.44 µs   | 3.44 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 2.48 µs/iter (2,479.376) | 2.04 µs   | 2.55 µs   | 4.08 µs   | 4.08 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 2.77 µs/iter (2,774.068) | 2.28 µs   | 2.98 µs   | 3.69 µs   | 3.69 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString()    | 2.97 µs/iter (2,973.853) | 2.7 µs    | 3.12 µs   | 3.99 µs   | 3.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4 µs/iter (3,996.022)    | 2.14 µs   | 5.11 µs   | 6.16 µs   | 6.16 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString()           | 12.64 µs/iter (12,645)   | 6.9 µs    | 11.3 µs   | 46 µs     | 924.9 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString()            | 13.06 µs/iter (13,065)   | 7 µs      | 11.9 µs   | 51.5 µs   | 859.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 13.75 µs/iter (13,750)   | 6.1 µs    | 10.9 µs   | 36.5 µs   | 2.79 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 14.29 µs/iter (14,285)   | 6.1 µs    | 11.7 µs   | 33.9 µs   | 2.66 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 15.28 µs/iter (15,276)   | 5.9 µs    | 11.9 µs   | 43.3 µs   | 3.47 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 16.32 µs/iter (16,315)   | 4.7 µs    | 12.6 µs   | 54.1 µs   | 4.07 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 16.42 µs/iter (16,423)   | 12.6 µs   | 14.7 µs   | 37.5 µs   | 1.28 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 17.31 µs/iter (17,308)   | 7.3 µs    | 14.3 µs   | 62.1 µs   | 3.05 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 17.48 µs/iter (17,483)   | 6.6 µs    | 14.5 µs   | 55.1 µs   | 3.38 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1')             | 17.8 µs/iter (17,797)    | 12.4 µs   | 15.7 µs   | 74.5 µs   | 732.7 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary')             | 17.86 µs/iter (17,863)   | 12.5 µs   | 16.3 µs   | 54.9 µs   | 654.5 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString()           | 18.09 µs/iter (18,094)   | 7.3 µs    | 15.5 µs   | 79.1 µs   | 8.23 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString()             | 19.57 µs/iter (19,571)   | 14.5 µs   | 17.9 µs   | 53.3 µs   | 797.1 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 20.87 µs/iter (20,867)   | 7.4 µs    | 18 µs     | 65.4 µs   | 3.37 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 21.16 µs/iter (21,155)   | 10.9 µs   | 15.3 µs   | 55.6 µs   | 4.15 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 22.65 µs/iter (22,651)   | 10.7 µs   | 16.2 µs   | 70.7 µs   | 4.45 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii')              | 22.66 µs/iter (22,657)   | 14 µs     | 19.4 µs   | 205.3 µs  | 728.2 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8')               | 24.96 µs/iter (24,959)   | 14.5 µs   | 25.8 µs   | 213.4 µs  | 710.5 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le')            | 25.96 µs/iter (25,965)   | 12.8 µs   | 22.7 µs   | 243.6 µs  | 9.92 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2')               | 26.93 µs/iter (26,928)   | 12.7 µs   | 24.3 µs   | 252.5 µs  | 4.54 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 27.6 µs/iter (27,604)    | 10.9 µs   | 18.6 µs   | 100.6 µs  | 10.05 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 33.09 µs/iter (33,090)   | 11.2 µs   | 19.6 µs   | 101.8 µs  | 12.32 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 39.31 µs/iter (39,315)   | 30.6 µs   | 35.9 µs   | 98.2 µs   | 2.12 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 44.21 µs/iter (44,210)   | 15.6 µs   | 32.3 µs   | 170.9 µs  | 4.24 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 49.67 µs/iter (49,674)   | 15.5 µs   | 31 µs     | 145.1 µs  | 35.35 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64')             | 50.77 µs/iter (50,775)   | 39.3 µs   | 44.3 µs   | 237.3 µs  | 1.13 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url')          | 51.17 µs/iter (51,168)   | 40.7 µs   | 44.8 µs   | 228.3 µs  | 722.4 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 54.59 µs/iter (54,589)   | 29.4 µs   | 48 µs     | 133.1 µs  | 18.54 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex')                | 56.47 µs/iter (56,468)   | 49.1 µs   | 52.8 µs   | 257.5 µs  | 662.6 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 59.19 µs/iter (59,188)   | 31.6 µs   | 51.9 µs   | 519.9 µs  | 3.72 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 94.91 µs/iter (94,908)   | 58.7 µs   | 96.3 µs   | 569.3 µs  | 5.21 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 184.34 µs/iter (184,343) | 151.1 µs  | 171.9 µs  | 456.4 µs  | 3.72 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 221.9 µs/iter (221,902)  | 197.4 µs  | 207.1 µs  | 440.3 µs  | 2.92 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 994.95 µs/iter (994,945) | 739.3 µs  | 968.2 µs  | 3.7 ms    | 4.74 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 1.01 ms/iter (1,011,684) | 806.1 µs  | 1.2 ms    | 1.72 ms   | 1.91 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.07 ms/iter (1,071,428) | 869.1 µs  | 966.1 µs  | 3.71 ms   | 4.25 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.08 ms/iter (1,076,321) | 841.1 µs  | 964.3 µs  | 4.11 ms   | 5.16 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 1.08 ms/iter (1,082,838) | 754.1 µs  | 1.16 ms   | 3.43 ms   | 5.01 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.13 ms/iter (1,128,493) | 868.7 µs  | 993.4 µs  | 4.34 ms   | 4.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 1.23 ms/iter (1,231,229) | 870.7 µs  | 1.27 ms   | 3.72 ms   | 8.67 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 1.26 ms/iter (1,255,750) | 816.8 µs  | 1.46 ms   | 4.24 ms   | 5.94 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 1.27 ms/iter (1,269,640) | 750.9 µs  | 1.36 ms   | 5.81 ms   | 10.59 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 1.29 ms/iter (1,289,163) | 822.5 µs  | 1.44 ms   | 4.47 ms   | 8.03 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 1.29 ms/iter (1,294,028) | 970.5 µs  | 1.4 ms    | 3.33 ms   | 5.37 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.75 ms/iter (1,754,715) | 1.24 ms   | 1.95 ms   | 4.15 ms   | 5.14 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.91 ms/iter (1,910,214) | 1.4 ms    | 1.89 ms   | 4.89 ms   | 5.47 ms   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average                  | p75       | p99       | Min      | Max      |
| -------------------------------------- | -------------------- | ------------------------ | --------- | --------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 885.29 ns/iter (885.293) | 793.22 ns | 881.95 ns | 1.28 µs  | 1.28 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello') | 7.29 µs/iter (7,292)     | 1.5 µs    | 15 µs     | 25.9 µs  | 971.5 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 32.34 µs/iter (32,343)   | 5.2 µs    | 34.7 µs   | 100.8 µs | 3.81 ms  |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average                  | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------------------ | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.67 µs/iter (1,674.582) | 1.33 µs | 1.85 µs | 2.31 µs | 2.31 µs |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 19.93 µs/iter (19,935)   | 3.1 µs  | 25.3 µs | 44.3 µs | 1.08 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 43.38 µs/iter (43,378)   | 9.8 µs  | 45.6 µs | 84.8 µs | 1.45 ms |


### everything
| Runtime                                | Benchmark                        | Average                  | p75       | p99       | Min      | Max      |
| -------------------------------------- | -------------------------------- | ------------------------ | --------- | --------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 885.29 ns/iter (885.293) | 793.22 ns | 881.95 ns | 1.28 µs  | 1.28 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.67 µs/iter (1,674.582) | 1.33 µs   | 1.85 µs   | 2.31 µs  | 2.31 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 7.29 µs/iter (7,292)     | 1.5 µs    | 15 µs     | 25.9 µs  | 971.5 µs |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 19.93 µs/iter (19,935)   | 3.1 µs    | 25.3 µs   | 44.3 µs  | 1.08 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 32.34 µs/iter (32,343)   | 5.2 µs    | 34.7 µs   | 100.8 µs | 3.81 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 43.38 µs/iter (43,378)   | 9.8 µs    | 45.6 µs   | 84.8 µs  | 1.45 ms  |

