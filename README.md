*Runned on Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.4 µs/iter   | 2.05 µs | 2.46 µs | 2.92 µs | 2.92 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.9 µs/iter   | 2.4 µs  | 6.4 µs  | 22.2 µs | 2.96 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.89 µs/iter | 6.7 µs  | 14.1 µs | 38.4 µs | 3.29 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.65 µs/iter  | 2.14 µs | 2.76 µs | 3.07 µs | 3.07 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.44 µs/iter  | 4.5 µs  | 10.2 µs | 29 µs   | 449.1 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 28.35 µs/iter | 14.4 µs | 27.7 µs | 72.9 µs | 716.8 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.4 µs/iter   | 2.05 µs | 2.46 µs | 2.92 µs | 2.92 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.65 µs/iter  | 2.14 µs | 2.76 µs | 3.07 µs | 3.07 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.9 µs/iter   | 2.4 µs  | 6.4 µs  | 22.2 µs | 2.96 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 9.44 µs/iter  | 4.5 µs  | 10.2 µs | 29 µs   | 449.1 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 13.89 µs/iter | 6.7 µs  | 14.1 µs | 38.4 µs | 3.29 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 28.35 µs/iter | 14.4 µs | 27.7 µs | 72.9 µs | 716.8 µs |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 613.13 ns/iter | 546.94 ns | 636.9 ns | 807.14 ns | 807.14 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.37 µs/iter   | 1.24 µs   | 1.41 µs  | 1.59 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.96 µs/iter   | 1.77 µs   | 2.01 µs  | 2.32 µs   | 2.32 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 168.14 ns/iter | 130.89 ns | 181.02 ns | 267.36 ns | 404.95 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.45 ns/iter | 266.21 ns | 336.95 ns | 451 ns    | 453.27 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 350.73 ns/iter | 287.55 ns | 366.06 ns | 563.44 ns | 563.69 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 255.04 ns/iter | 211.7 ns  | 270.81 ns | 348.87 ns | 362.44 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.35 ns/iter | 218.22 ns | 287.6 ns  | 443.39 ns | 445.95 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 436.01 ns/iter | 347.34 ns | 462.56 ns | 545.04 ns | 744.85 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 168.14 ns/iter | 130.89 ns | 181.02 ns | 267.36 ns | 404.95 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 255.04 ns/iter | 211.7 ns  | 270.81 ns | 348.87 ns | 362.44 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.35 ns/iter | 218.22 ns | 287.6 ns  | 443.39 ns | 445.95 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.45 ns/iter | 266.21 ns | 336.95 ns | 451 ns    | 453.27 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 350.73 ns/iter | 287.55 ns | 366.06 ns | 563.44 ns | 563.69 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 436.01 ns/iter | 347.34 ns | 462.56 ns | 545.04 ns | 744.85 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average       | p75       | p99       | Min      | Max       |
| -------------------------------------- | -------------------------------------- | ------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 461.8 ns/iter | 393 ns    | 479.58 ns | 591.5 ns | 702.07 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.09 µs/iter  | 872.83 ns | 1.08 µs   | 1.81 µs  | 1.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.4 µs/iter   | 1.2 µs    | 1.48 µs   | 2.41 µs  | 2.41 µs   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 492.19 ns/iter | 435.58 ns | 515.16 ns | 553.79 ns | 569.32 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.07 µs/iter   | 844.72 ns | 1.1 µs    | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.58 µs/iter   | 1.35 µs   | 1.62 µs   | 2.48 µs   | 2.48 µs   |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 525.12 ns/iter | 439.21 ns | 554.18 ns | 659.79 ns | 745.57 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.16 µs/iter   | 928.92 ns | 1.12 µs   | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.4 µs/iter    | 1.23 µs   | 1.51 µs   | 1.66 µs   | 1.66 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 522.85 ns/iter | 412.23 ns | 558.47 ns | 639.69 ns | 644.27 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.25 µs/iter   | 926.53 ns | 1.3 µs    | 2.25 µs   | 2.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.29 µs/iter   | 1.15 µs   | 1.32 µs   | 2.06 µs   | 2.06 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 518.13 ns/iter | 450.1 ns  | 541.59 ns | 682.55 ns | 704.51 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.16 µs/iter   | 928.03 ns | 1.15 µs   | 2.18 µs   | 2.18 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.51 µs/iter   | 1.31 µs   | 1.56 µs   | 2.36 µs   | 2.36 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 486.7 ns/iter | 427.42 ns | 505.71 ns | 634.96 ns | 697.77 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.3 µs/iter   | 957.75 ns | 1.37 µs   | 2.71 µs   | 2.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.89 µs/iter  | 1.63 µs   | 2.01 µs   | 2.12 µs   | 2.12 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 526.29 ns/iter | 402.88 ns | 563.63 ns | 774.39 ns | 868.42 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.17 µs/iter   | 908.63 ns | 1.17 µs   | 2.09 µs   | 2.09 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.43 µs/iter   | 1.26 µs   | 1.5 µs    | 2.04 µs   | 2.04 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 575.07 ns/iter | 494.97 ns | 595.02 ns | 670.87 ns | 670.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.3 µs/iter    | 1.05 µs   | 1.26 µs   | 2.39 µs   | 2.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.4 µs/iter    | 1.29 µs   | 1.44 µs   | 1.63 µs   | 1.63 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 571.11 ns/iter | 503.9 ns  | 590.56 ns | 666.75 ns | 666.75 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.17 µs/iter   | 928.35 ns | 1.17 µs   | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.37 µs/iter   | 1.25 µs   | 1.42 µs   | 1.74 µs   | 1.74 µs   |


### everything
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')     | 461.8 ns/iter  | 393 ns    | 479.58 ns | 591.5 ns  | 702.07 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 486.7 ns/iter  | 427.42 ns | 505.71 ns | 634.96 ns | 697.77 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')      | 492.19 ns/iter | 435.58 ns | 515.16 ns | 553.79 ns | 569.32 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')    | 518.13 ns/iter | 450.1 ns  | 541.59 ns | 682.55 ns | 704.51 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')      | 522.85 ns/iter | 412.23 ns | 558.47 ns | 639.69 ns | 644.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')   | 525.12 ns/iter | 439.21 ns | 554.18 ns | 659.79 ns | 745.57 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')    | 526.29 ns/iter | 402.88 ns | 563.63 ns | 774.39 ns | 868.42 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')       | 571.11 ns/iter | 503.9 ns  | 590.56 ns | 666.75 ns | 666.75 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')    | 575.07 ns/iter | 494.97 ns | 595.02 ns | 670.87 ns | 670.87 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')      | 1.07 µs/iter   | 844.72 ns | 1.1 µs    | 2.03 µs   | 2.03 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')     | 1.09 µs/iter   | 872.83 ns | 1.08 µs   | 1.81 µs   | 1.81 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')   | 1.16 µs/iter   | 928.92 ns | 1.12 µs   | 1.97 µs   | 1.97 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')    | 1.16 µs/iter   | 928.03 ns | 1.15 µs   | 2.18 µs   | 2.18 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')       | 1.17 µs/iter   | 928.35 ns | 1.17 µs   | 2.03 µs   | 2.03 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')    | 1.17 µs/iter   | 908.63 ns | 1.17 µs   | 2.09 µs   | 2.09 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')      | 1.25 µs/iter   | 926.53 ns | 1.3 µs    | 2.25 µs   | 2.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')      | 1.29 µs/iter   | 1.15 µs   | 1.32 µs   | 2.06 µs   | 2.06 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.3 µs/iter    | 957.75 ns | 1.37 µs   | 2.71 µs   | 2.71 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')    | 1.3 µs/iter    | 1.05 µs   | 1.26 µs   | 2.39 µs   | 2.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')       | 1.37 µs/iter   | 1.25 µs   | 1.42 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')     | 1.4 µs/iter    | 1.2 µs    | 1.48 µs   | 2.41 µs   | 2.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')    | 1.4 µs/iter    | 1.29 µs   | 1.44 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')   | 1.4 µs/iter    | 1.23 µs   | 1.51 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')    | 1.43 µs/iter   | 1.26 µs   | 1.5 µs    | 2.04 µs   | 2.04 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')    | 1.51 µs/iter   | 1.31 µs   | 1.56 µs   | 2.36 µs   | 2.36 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')      | 1.58 µs/iter   | 1.35 µs   | 1.62 µs   | 2.48 µs   | 2.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.89 µs/iter   | 1.63 µs   | 2.01 µs   | 2.12 µs   | 2.12 µs   |

