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
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 652.75 ns/iter | 541.41 ns | 692.53 ns | 795.86 ns | 795.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.41 µs/iter   | 1.36 µs   | 1.42 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.84 µs/iter   | 1.8 µs    | 1.84 µs   | 2.08 µs   | 2.08 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.14 ns/iter | 152.63 ns | 155.89 ns | 217.03 ns | 289.92 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.3 ns/iter  | 302.29 ns | 311.37 ns | 331.31 ns | 339.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.29 ns/iter | 314.68 ns | 318.55 ns | 348.68 ns | 383.37 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 247.87 ns/iter | 242.37 ns | 252.16 ns | 268.1 ns  | 278.41 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.43 ns/iter | 239.29 ns | 249.87 ns | 264.1 ns  | 292.18 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.78 ns/iter | 356.18 ns | 409.24 ns | 430.09 ns | 485.9 ns  |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.14 ns/iter | 152.63 ns | 155.89 ns | 217.03 ns | 289.92 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 247.87 ns/iter | 242.37 ns | 252.16 ns | 268.1 ns  | 278.41 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.43 ns/iter | 239.29 ns | 249.87 ns | 264.1 ns  | 292.18 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.3 ns/iter  | 302.29 ns | 311.37 ns | 331.31 ns | 339.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.29 ns/iter | 314.68 ns | 318.55 ns | 348.68 ns | 383.37 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.78 ns/iter | 356.18 ns | 409.24 ns | 430.09 ns | 485.9 ns  |

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii') | 419.77 ns/iter | 374.12 ns | 419.18 ns | 608.52 ns | 628.12 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 807.01 ns/iter | 659.58 ns | 732.99 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.56 µs/iter   | 1.13 µs   | 1.6 µs    | 4.1 µs    | 4.1 µs    |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8') | 468.9 ns/iter  | 403.63 ns | 466.88 ns | 773.32 ns | 999.42 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 790.32 ns/iter | 644.78 ns | 772.8 ns  | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.55 µs/iter   | 1.1 µs    | 1.68 µs   | 2.11 µs   | 2.11 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le') | 424.62 ns/iter | 394.93 ns | 427.38 ns | 531.06 ns | 538.07 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 834.4 ns/iter  | 682.44 ns | 752.03 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.11 µs/iter   | 914.01 ns | 1.15 µs   | 1.88 µs   | 1.88 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2') | 434.45 ns/iter | 396.99 ns | 444.19 ns | 614.2 ns | 643.48 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 788.95 ns/iter | 656.86 ns | 712.58 ns | 1.77 µs  | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.11 µs/iter   | 913.29 ns | 1.16 µs   | 1.72 µs  | 1.72 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64') | 511.48 ns/iter | 407.57 ns | 556.8 ns  | 797.78 ns | 798.47 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 798.87 ns/iter | 683.51 ns | 736.76 ns | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.21 µs/iter   | 978.05 ns | 1.3 µs    | 1.89 µs   | 1.89 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url') | 493.24 ns/iter | 411.7 ns  | 540.53 ns | 678.63 ns | 802.79 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 823 ns/iter    | 692.13 ns | 762.71 ns | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.4 µs/iter    | 1.23 µs   | 1.48 µs   | 2.27 µs   | 2.27 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1') | 457.05 ns/iter | 390.26 ns | 469.59 ns | 635.22 ns | 653.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 780.17 ns/iter | 675.17 ns | 729.53 ns | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.06 µs/iter   | 933.72 ns | 1.09 µs   | 1.41 µs   | 1.41 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary') | 465.59 ns/iter | 392.28 ns | 490.2 ns  | 694.34 ns | 725.05 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 785.96 ns/iter | 673.09 ns | 736.25 ns | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.03 µs/iter   | 924.71 ns | 1.07 µs   | 1.36 µs   | 1.36 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex') | 479.09 ns/iter | 405.64 ns | 503.41 ns | 672.69 ns | 717.7 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 769.76 ns/iter | 658.98 ns | 716.08 ns | 1.65 µs   | 1.65 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.02 µs/iter   | 916.7 ns  | 1.05 µs   | 1.5 µs    | 1.5 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75      | p99      | Min      | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 12.62 µs/iter  | 4.6 µs   | 9.9 µs   | 33.2 µs  | 2.59 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii') | 21.46 µs/iter  | 14 µs    | 18.1 µs  | 162.8 µs | 773 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 610.63 µs/iter | 487.9 µs | 727.3 µs | 1.05 ms  | 1.37 ms |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average        | p75      | p99      | Min      | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 14.89 µs/iter  | 7.2 µs   | 12 µs    | 39.4 µs  | 2.67 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8') | 21.61 µs/iter  | 14.2 µs  | 18.3 µs  | 161.8 µs | 668 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 958.57 µs/iter | 733.6 µs | 923.4 µs | 2.41 ms  | 3.43 ms |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ----------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 14.07 µs/iter  | 5.8 µs   | 11.3 µs  | 32.8 µs  | 3.02 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le') | 19.86 µs/iter  | 12.6 µs  | 17.5 µs  | 169.4 µs | 837.2 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 587.06 µs/iter | 449.2 µs | 533.4 µs | 1.74 ms  | 2.08 ms  |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75      | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | -------- | ------- | -------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 16.47 µs/iter  | 6.5 µs   | 13.4 µs | 45.7 µs  | 3.27 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2') | 18.06 µs/iter  | 12.9 µs  | 15.3 µs | 120.9 µs | 1.7 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 612.68 µs/iter | 452.7 µs | 534 µs  | 2.28 ms  | 7.89 ms |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average       | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64') | 25.64 µs/iter | 7.3 µs   | 20.6 µs  | 86.2 µs  | 8.95 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64') | 54.09 µs/iter | 40.3 µs  | 43.8 µs  | 222.3 µs | 11.35 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 712.6 µs/iter | 585.9 µs | 649.7 µs | 1.86 ms  | 3.08 ms  |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url') | 50.06 µs/iter | 40.8 µs  | 44.9 µs  | 242.4 µs | 844.2 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 71.81 µs/iter | 31.7 µs  | 55.9 µs  | 685.7 µs | 38.2 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.14 ms/iter  | 817.9 µs | 986.8 µs | 4.15 ms  | 10.94 ms |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1') | 19.22 µs/iter  | 12.6 µs  | 16.6 µs  | 96.5 µs  | 991.9 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 24.88 µs/iter  | 6.7 µs   | 18.3 µs  | 110.3 µs | 8.62 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 665.89 µs/iter | 493.2 µs | 585.3 µs | 2.23 ms  | 3.64 ms  |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary') | 18.13 µs/iter  | 12.6 µs  | 16.3 µs  | 51.1 µs | 1.19 ms |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary') | 21.06 µs/iter  | 6.4 µs   | 16.8 µs  | 84.8 µs | 4.8 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 612.82 µs/iter | 492.8 µs | 556.8 µs | 1.85 ms | 2.17 ms |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex') | 59.21 µs/iter  | 49.5 µs  | 53.8 µs  | 287.4 µs | 846.8 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex') | 259.04 µs/iter | 198.5 µs | 267.8 µs | 537.8 µs | 3.37 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 618.5 µs/iter  | 518.5 µs | 559.9 µs | 1.83 ms  | 2.05 ms  |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString() | 411.17 ns/iter | 352.24 ns | 428.47 ns | 616.13 ns | 757.29 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 484.57 ns/iter | 462.24 ns | 492.49 ns | 525.9 ns  | 772.1 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 1.01 µs/iter   | 717.9 ns  | 1.19 µs   | 2.25 µs   | 2.25 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString() | 489.08 ns/iter | 432.94 ns | 496.33 ns | 708.88 ns | 719.69 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 899.79 ns/iter | 652.05 ns | 896.03 ns | 1.71 µs   | 1.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.12 µs/iter   | 885.05 ns | 1.2 µs    | 1.42 µs   | 1.42 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString() | 382.52 ns/iter | 348.12 ns | 389.95 ns | 552.53 ns | 570.44 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 476.41 ns/iter | 456.58 ns | 482.26 ns | 565.11 ns | 734.4 ns  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 763.81 ns/iter | 645.59 ns | 697.89 ns | 1.54 µs   | 1.54 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString() | 397.27 ns/iter | 348.16 ns | 411.89 ns | 634.92 ns | 748.3 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 469.39 ns/iter | 450.85 ns | 477.46 ns | 534.26 ns | 535.18 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 740.22 ns/iter | 636.64 ns | 684.02 ns | 1.46 µs   | 1.46 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString() | 441.4 ns/iter  | 398.43 ns | 456.16 ns | 692.23 ns | 721.47 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 830.97 ns/iter | 693.73 ns | 762.15 ns | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.21 µs/iter   | 1.17 µs   | 1.21 µs   | 1.37 µs   | 1.37 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString() | 474.79 ns/iter | 400.17 ns | 507.73 ns | 692.36 ns | 923.05 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 976.65 ns/iter | 719.09 ns | 988.33 ns | 2.45 µs   | 2.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.48 µs/iter   | 1.36 µs   | 1.45 µs   | 2.5 µs    | 2.5 µs    |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString() | 398.78 ns/iter | 360.39 ns | 406.19 ns | 504.11 ns | 504.71 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 510.55 ns/iter | 475.35 ns | 514.58 ns | 718.62 ns | 719.03 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 1.05 µs/iter   | 654.93 ns | 1.15 µs   | 3.03 µs   | 3.03 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString() | 413.35 ns/iter | 353.01 ns | 426.1 ns  | 655.31 ns | 769.5 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 505.83 ns/iter | 478.26 ns | 513.36 ns | 628.6 ns  | 724.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 1.03 µs/iter   | 673.7 ns  | 1.17 µs   | 2.71 µs   | 2.71 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString() | 428.55 ns/iter | 386.03 ns | 437.82 ns | 603.69 ns | 604.53 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 842.67 ns/iter | 819.18 ns | 849.72 ns | 964.31 ns | 964.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 844.53 ns/iter | 607.62 ns | 825.21 ns | 1.9 µs    | 1.9 µs    |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75      | p99      | Min     | Max      |
| -------------------------------------- | ----------------------------------------- | ------------- | -------- | -------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString() | 16.96 µs/iter | 7.3 µs   | 16.1 µs  | 83.7 µs | 2.16 ms  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 18.29 µs/iter | 6.5 µs   | 12.9 µs  | 73 µs   | 24.75 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.01 ms/iter  | 843.8 µs | 897.7 µs | 3.49 ms | 6.9 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average        | p75      | p99      | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | -------------- | -------- | -------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 17.05 µs/iter  | 7.3 µs   | 13.7 µs  | 59.6 µs | 2.98 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString() | 20.58 µs/iter  | 15 µs    | 18.6 µs  | 58 µs   | 1.23 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 910.19 µs/iter | 743.6 µs | 804.7 µs | 2.98 ms | 8.79 ms |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min      | Max     |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | -------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.35 µs/iter  | 1.13 µs | 1.41 µs | 2.44 µs  | 2.44 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 27.65 µs/iter | 9.8 µs  | 20.9 µs | 110.8 µs | 3.76 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 36.4 µs/iter  | 30.5 µs | 33.3 µs | 70.6 µs  | 3.38 ms |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString() | 102.61 ns/iter | 92.64 ns  | 107.2 ns  | 147.51 ns | 160.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 295.58 ns/iter | 280.42 ns | 303.55 ns | 357.92 ns | 504.54 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 26.29 µs/iter  | 8.9 µs    | 18.4 µs   | 98.3 µs   | 2.94 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString() | 3.32 µs/iter  | 2.68 µs | 3.35 µs | 6.64 µs | 6.64 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 14.14 µs/iter | 12.5 µs | 13.9 µs | 26 µs   | 535.1 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 25.26 µs/iter | 18 µs   | 21.2 µs | 52.9 µs | 3.3 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75      | p99       | Min       | Max     |
| -------------------------------------- | ---------------------------------------------------- | -------------- | -------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.44 ns/iter | 82.75 ns | 111.58 ns | 383.08 ns | 1.07 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.08 µs/iter   | 1.05 µs  | 1.09 µs   | 1.16 µs   | 1.16 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 100.31 µs/iter | 90.9 µs  | 96.8 µs   | 161 µs    | 2.62 ms |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75      | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------------ | ------------- | -------- | -------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 13.59 µs/iter | 6.1 µs   | 10.4 µs  | 39.9 µs | 3.15 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString() | 14.13 µs/iter | 7.2 µs   | 12.7 µs  | 63.5 µs | 958.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.05 ms/iter  | 872.1 µs | 948.7 µs | 3.45 ms | 3.9 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average      | p75      | p99      | Min     | Max     |
| -------------------------------------- | ------------------------------------------ | ------------ | -------- | -------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 13.2 µs/iter | 6.5 µs   | 9.8 µs   | 39.3 µs | 2.94 ms |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString() | 14.7 µs/iter | 7.3 µs   | 13.7 µs  | 62.4 µs | 1.55 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.04 ms/iter | 874.6 µs | 934.6 µs | 3.46 ms | 3.71 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString() | 479.8 ns/iter | 422.24 ns | 491.06 ns | 724.82 ns | 737.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 3.2 µs/iter   | 2.02 µs   | 3.49 µs   | 4.96 µs   | 4.96 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 43.06 µs/iter | 35.2 µs   | 37.6 µs   | 85.3 µs   | 3.05 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 102.61 ns/iter | 92.64 ns  | 107.2 ns  | 147.51 ns | 160.65 ns |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer1, 'base64url').toString() | 111.44 ns/iter | 82.75 ns  | 111.58 ns | 383.08 ns | 1.07 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 295.58 ns/iter | 280.42 ns | 303.55 ns | 357.92 ns | 504.54 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'utf16le').toString()              | 382.52 ns/iter | 348.12 ns | 389.95 ns | 552.53 ns | 570.44 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('敨汬', 'ucs2').toString()                 | 397.27 ns/iter | 348.16 ns | 411.89 ns | 634.92 ns | 748.3 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'latin1').toString()            | 398.78 ns/iter | 360.39 ns | 406.19 ns | 504.11 ns | 504.71 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'ascii').toString()             | 411.17 ns/iter | 352.24 ns | 428.47 ns | 616.13 ns | 757.29 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'binary').toString()            | 413.35 ns/iter | 353.01 ns | 426.1 ns  | 655.31 ns | 769.5 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ascii')               | 419.77 ns/iter | 374.12 ns | 419.18 ns | 608.52 ns | 628.12 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf16le')             | 424.62 ns/iter | 394.93 ns | 427.38 ns | 531.06 ns | 538.07 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('68656c6c6f', 'hex').toString()          | 428.55 ns/iter | 386.03 ns | 437.82 ns | 603.69 ns | 604.53 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('ucs2')                | 434.45 ns/iter | 396.99 ns | 444.19 ns | 614.2 ns  | 643.48 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8=', 'base64').toString()         | 441.4 ns/iter  | 398.43 ns | 456.16 ns | 692.23 ns | 721.47 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('latin1')              | 457.05 ns/iter | 390.26 ns | 469.59 ns | 635.22 ns | 653.22 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('binary')              | 465.59 ns/iter | 392.28 ns | 490.2 ns  | 694.34 ns | 725.05 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('utf8')                | 468.9 ns/iter  | 403.63 ns | 466.88 ns | 773.32 ns | 999.42 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 469.39 ns/iter | 450.85 ns | 477.46 ns | 534.26 ns | 535.18 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('aGVsbG8', 'base64url').toString()       | 474.79 ns/iter | 400.17 ns | 507.73 ns | 692.36 ns | 923.05 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 476.41 ns/iter | 456.58 ns | 482.26 ns | 565.11 ns | 734.4 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('hex')                 | 479.09 ns/iter | 405.64 ns | 503.41 ns | 672.69 ns | 717.7 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer2, 'hex').toString()       | 479.8 ns/iter  | 422.24 ns | 491.06 ns | 724.82 ns | 737.51 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 484.57 ns/iter | 462.24 ns | 492.49 ns | 525.9 ns  | 772.1 ns  |
| node v16.16.0 (x64-linux)              | Buffer.from('hello', 'utf8').toString()              | 489.08 ns/iter | 432.94 ns | 496.33 ns | 708.88 ns | 719.69 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64url')           | 493.24 ns/iter | 411.7 ns  | 540.53 ns | 678.63 ns | 802.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 505.83 ns/iter | 478.26 ns | 513.36 ns | 628.6 ns  | 724.31 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 510.55 ns/iter | 475.35 ns | 514.58 ns | 718.62 ns | 719.03 ns |
| node v16.16.0 (x64-linux)              | Buffer.from('hello').toString('base64')              | 511.48 ns/iter | 407.57 ns | 556.8 ns  | 797.78 ns | 798.47 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 740.22 ns/iter | 636.64 ns | 684.02 ns | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 763.81 ns/iter | 645.59 ns | 697.89 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 769.76 ns/iter | 658.98 ns | 716.08 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 780.17 ns/iter | 675.17 ns | 729.53 ns | 1.46 µs   | 1.46 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 785.96 ns/iter | 673.09 ns | 736.25 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 788.95 ns/iter | 656.86 ns | 712.58 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 790.32 ns/iter | 644.78 ns | 772.8 ns  | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 798.87 ns/iter | 683.51 ns | 736.76 ns | 1.52 µs   | 1.52 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 807.01 ns/iter | 659.58 ns | 732.99 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 823 ns/iter    | 692.13 ns | 762.71 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 830.97 ns/iter | 693.73 ns | 762.15 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 834.4 ns/iter  | 682.44 ns | 752.03 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 842.67 ns/iter | 819.18 ns | 849.72 ns | 964.31 ns | 964.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 844.53 ns/iter | 607.62 ns | 825.21 ns | 1.9 µs    | 1.9 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 899.79 ns/iter | 652.05 ns | 896.03 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 976.65 ns/iter | 719.09 ns | 988.33 ns | 2.45 µs   | 2.45 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 1.01 µs/iter   | 717.9 ns  | 1.19 µs   | 2.25 µs   | 2.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.02 µs/iter   | 916.7 ns  | 1.05 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.03 µs/iter   | 924.71 ns | 1.07 µs   | 1.36 µs   | 1.36 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 1.03 µs/iter   | 673.7 ns  | 1.17 µs   | 2.71 µs   | 2.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 1.05 µs/iter   | 654.93 ns | 1.15 µs   | 3.03 µs   | 3.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.06 µs/iter   | 933.72 ns | 1.09 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.08 µs/iter   | 1.05 µs   | 1.09 µs   | 1.16 µs   | 1.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.11 µs/iter   | 914.01 ns | 1.15 µs   | 1.88 µs   | 1.88 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.11 µs/iter   | 913.29 ns | 1.16 µs   | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.12 µs/iter   | 885.05 ns | 1.2 µs    | 1.42 µs   | 1.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.21 µs/iter   | 1.17 µs   | 1.21 µs   | 1.37 µs   | 1.37 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.21 µs/iter   | 978.05 ns | 1.3 µs    | 1.89 µs   | 1.89 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.35 µs/iter   | 1.13 µs   | 1.41 µs   | 2.44 µs   | 2.44 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.4 µs/iter    | 1.23 µs   | 1.48 µs   | 2.27 µs   | 2.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.48 µs/iter   | 1.36 µs   | 1.45 µs   | 2.5 µs    | 2.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.55 µs/iter   | 1.1 µs    | 1.68 µs   | 2.11 µs   | 2.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.56 µs/iter   | 1.13 µs   | 1.6 µs    | 4.1 µs    | 4.1 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 3.2 µs/iter    | 2.02 µs   | 3.49 µs   | 4.96 µs   | 4.96 µs   |
| node v16.16.0 (x64-linux)              | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.32 µs/iter   | 2.68 µs   | 3.35 µs   | 6.64 µs   | 6.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 12.62 µs/iter  | 4.6 µs    | 9.9 µs    | 33.2 µs   | 2.59 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 13.2 µs/iter   | 6.5 µs    | 9.8 µs    | 39.3 µs   | 2.94 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 13.59 µs/iter  | 6.1 µs    | 10.4 µs   | 39.9 µs   | 3.15 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 14.07 µs/iter  | 5.8 µs    | 11.3 µs   | 32.8 µs   | 3.02 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'latin1').toString()           | 14.13 µs/iter  | 7.2 µs    | 12.7 µs   | 63.5 µs   | 958.7 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 14.14 µs/iter  | 12.5 µs   | 13.9 µs   | 26 µs     | 535.1 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'binary').toString()           | 14.7 µs/iter   | 7.3 µs    | 13.7 µs   | 62.4 µs   | 1.55 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 14.89 µs/iter  | 7.2 µs    | 12 µs     | 39.4 µs   | 2.67 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 16.47 µs/iter  | 6.5 µs    | 13.4 µs   | 45.7 µs   | 3.27 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'ascii').toString()            | 16.96 µs/iter  | 7.3 µs    | 16.1 µs   | 83.7 µs   | 2.16 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 17.05 µs/iter  | 7.3 µs    | 13.7 µs   | 59.6 µs   | 2.98 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ucs2')               | 18.06 µs/iter  | 12.9 µs   | 15.3 µs   | 120.9 µs  | 1.7 ms    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('binary')             | 18.13 µs/iter  | 12.6 µs   | 16.3 µs   | 51.1 µs   | 1.19 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 18.29 µs/iter  | 6.5 µs    | 12.9 µs   | 73 µs     | 24.75 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('latin1')             | 19.22 µs/iter  | 12.6 µs   | 16.6 µs   | 96.5 µs   | 991.9 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf16le')            | 19.86 µs/iter  | 12.6 µs   | 17.5 µs   | 169.4 µs  | 837.2 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText, 'utf8').toString()             | 20.58 µs/iter  | 15 µs     | 18.6 µs   | 58 µs     | 1.23 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 21.06 µs/iter  | 6.4 µs    | 16.8 µs   | 84.8 µs   | 4.8 ms    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('ascii')              | 21.46 µs/iter  | 14 µs     | 18.1 µs   | 162.8 µs  | 773 µs    |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('utf8')               | 21.61 µs/iter  | 14.2 µs   | 18.3 µs   | 161.8 µs  | 668 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 24.88 µs/iter  | 6.7 µs    | 18.3 µs   | 110.3 µs  | 8.62 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 25.26 µs/iter  | 18 µs     | 21.2 µs   | 52.9 µs   | 3.3 ms    |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 25.64 µs/iter  | 7.3 µs    | 20.6 µs   | 86.2 µs   | 8.95 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 26.29 µs/iter  | 8.9 µs    | 18.4 µs   | 98.3 µs   | 2.94 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 27.65 µs/iter  | 9.8 µs    | 20.9 µs   | 110.8 µs  | 3.76 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 36.4 µs/iter   | 30.5 µs   | 33.3 µs   | 70.6 µs   | 3.38 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 43.06 µs/iter  | 35.2 µs   | 37.6 µs   | 85.3 µs   | 3.05 ms   |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64url')          | 50.06 µs/iter  | 40.8 µs   | 44.9 µs   | 242.4 µs  | 844.2 µs  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('base64')             | 54.09 µs/iter  | 40.3 µs   | 43.8 µs   | 222.3 µs  | 11.35 ms  |
| node v16.16.0 (x64-linux)              | Buffer.from(longText).toString('hex')                | 59.21 µs/iter  | 49.5 µs   | 53.8 µs   | 287.4 µs  | 846.8 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 71.81 µs/iter  | 31.7 µs   | 55.9 µs   | 685.7 µs  | 38.2 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 100.31 µs/iter | 90.9 µs   | 96.8 µs   | 161 µs    | 2.62 ms   |
| bun 0.1.5 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 259.04 µs/iter | 198.5 µs  | 267.8 µs  | 537.8 µs  | 3.37 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 587.06 µs/iter | 449.2 µs  | 533.4 µs  | 1.74 ms   | 2.08 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 610.63 µs/iter | 487.9 µs  | 727.3 µs  | 1.05 ms   | 1.37 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 612.68 µs/iter | 452.7 µs  | 534 µs    | 2.28 ms   | 7.89 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 612.82 µs/iter | 492.8 µs  | 556.8 µs  | 1.85 ms   | 2.17 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 618.5 µs/iter  | 518.5 µs  | 559.9 µs  | 1.83 ms   | 2.05 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 665.89 µs/iter | 493.2 µs  | 585.3 µs  | 2.23 ms   | 3.64 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 712.6 µs/iter  | 585.9 µs  | 649.7 µs  | 1.86 ms   | 3.08 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 910.19 µs/iter | 743.6 µs  | 804.7 µs  | 2.98 ms   | 8.79 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 958.57 µs/iter | 733.6 µs  | 923.4 µs  | 2.41 ms   | 3.43 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.01 ms/iter   | 843.8 µs  | 897.7 µs  | 3.49 ms   | 6.9 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.04 ms/iter   | 874.6 µs  | 934.6 µs  | 3.46 ms   | 3.71 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.05 ms/iter   | 872.1 µs  | 948.7 µs  | 3.45 ms   | 3.9 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.14 ms/iter   | 817.9 µs  | 986.8 µs  | 4.15 ms   | 10.94 ms  |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.07 µs/iter  | 1.81 µs | 2.12 µs | 2.21 µs | 2.21 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 7.83 µs/iter  | 3 µs    | 7.5 µs  | 10 µs   | 17.12 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.75 µs/iter | 6.6 µs  | 12.2 µs | 14.6 µs | 769.31 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.14 µs/iter  | 1.87 µs | 2.53 µs | 6.12 µs | 6.12 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.86 µs/iter | 9.4 µs  | 10 µs   | 15.2 µs | 7.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.33 µs/iter | 11.7 µs | 18.3 µs | 22.9 µs | 397.51 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.07 µs/iter  | 1.81 µs | 2.12 µs | 2.21 µs | 2.21 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.14 µs/iter  | 1.87 µs | 2.53 µs | 6.12 µs | 6.12 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 7.83 µs/iter  | 3 µs    | 7.5 µs  | 10 µs   | 17.12 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.86 µs/iter | 9.4 µs  | 10 µs   | 15.2 µs | 7.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.75 µs/iter | 6.6 µs  | 12.2 µs | 14.6 µs | 769.31 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.33 µs/iter | 11.7 µs | 18.3 µs | 22.9 µs | 397.51 µs |

