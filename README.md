*Runned on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75    | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------ | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.24 µs/iter  | 2 µs   | 2.32 µs | 2.45 µs | 2.45 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.42 µs/iter  | 2.7 µs | 5.6 µs  | 8.7 µs  | 4.74 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.03 µs/iter | 6.8 µs | 11.7 µs | 13.9 µs | 416.9 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.3 µs/iter   | 2.13 µs | 2.3 µs  | 2.95 µs | 2.95 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.84 µs/iter  | 4.5 µs  | 8.2 µs  | 10.5 µs | 2.81 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.53 µs/iter | 11.7 µs | 17.5 µs | 21.1 µs | 377.8 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.24 µs/iter  | 2 µs    | 2.32 µs | 2.45 µs | 2.45 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.3 µs/iter   | 2.13 µs | 2.3 µs  | 2.95 µs | 2.95 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.42 µs/iter  | 2.7 µs  | 5.6 µs  | 8.7 µs  | 4.74 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.84 µs/iter  | 4.5 µs  | 8.2 µs  | 10.5 µs | 2.81 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.03 µs/iter | 6.8 µs  | 11.7 µs | 13.9 µs | 416.9 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.53 µs/iter | 11.7 µs | 17.5 µs | 21.1 µs | 377.8 µs |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 498.03 ns/iter | 442.9 ns | 506.62 ns | 549.31 ns | 592.03 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.55 µs/iter   | 1.48 µs  | 1.57 µs   | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.88 µs/iter   | 1.84 µs  | 1.89 µs   | 2.04 µs   | 2.04 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.83 ns/iter | 152.6 ns  | 157.8 ns  | 197.46 ns | 277.51 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 329.43 ns/iter | 322.3 ns  | 330.77 ns | 356.66 ns | 361.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 330.42 ns/iter | 323.61 ns | 332.71 ns | 371.13 ns | 397.01 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.71 ns/iter | 223.67 ns | 232.58 ns | 249.9 ns  | 252.72 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 258.64 ns/iter | 236.74 ns | 246.37 ns | 953.21 ns | 1.04 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374.61 ns/iter | 354.07 ns | 378.45 ns | 428.73 ns | 454.37 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.83 ns/iter | 152.6 ns  | 157.8 ns  | 197.46 ns | 277.51 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 231.71 ns/iter | 223.67 ns | 232.58 ns | 249.9 ns  | 252.72 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 258.64 ns/iter | 236.74 ns | 246.37 ns | 953.21 ns | 1.04 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 329.43 ns/iter | 322.3 ns  | 330.77 ns | 356.66 ns | 361.73 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 330.42 ns/iter | 323.61 ns | 332.71 ns | 371.13 ns | 397.01 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374.61 ns/iter | 354.07 ns | 378.45 ns | 428.73 ns | 454.37 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 429.09 ns/iter | 418.87 ns | 431.05 ns | 488.69 ns | 576.37 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.15 µs/iter   | 918.37 ns | 1.13 µs   | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.52 µs/iter   | 1.37 µs   | 1.54 µs   | 2.29 µs   | 2.29 µs   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 456.04 ns/iter | 441.5 ns  | 452.89 ns | 550.59 ns | 1.17 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.07 µs/iter   | 959.52 ns | 983.46 ns | 1.76 µs   | 1.76 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.51 µs/iter   | 1.36 µs   | 1.6 µs    | 2.2 µs    | 2.2 µs  |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 434.22 ns/iter | 428.72 ns | 437.14 ns | 451.41 ns | 454.5 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.05 µs/iter   | 953.39 ns | 994.85 ns | 1.68 µs   | 1.68 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.43 µs/iter   | 1.37 µs   | 1.43 µs   | 1.72 µs   | 1.72 µs  |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 436.37 ns/iter | 432.95 ns | 436.5 ns  | 446.82 ns | 448.26 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1 µs/iter      | 896.8 ns  | 940.19 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.36 µs/iter   | 1.29 µs   | 1.36 µs   | 1.65 µs   | 1.65 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 482.76 ns/iter | 478.81 ns | 482.91 ns | 493.85 ns | 496.16 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.04 µs/iter   | 935.31 ns | 967.57 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.49 µs/iter   | 1.41 µs   | 1.5 µs    | 1.74 µs   | 1.74 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 464.03 ns/iter | 459.82 ns | 464.58 ns | 473.47 ns | 474.24 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.18 µs/iter   | 1.06 µs   | 1.1 µs    | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.9 µs/iter    | 1.86 µs   | 1.91 µs   | 2.01 µs   | 2.01 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 441.21 ns/iter | 436.45 ns | 441.95 ns | 451.94 ns | 455.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.03 µs/iter   | 929.59 ns | 958.04 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.52 µs/iter   | 1.47 µs   | 1.54 µs   | 1.58 µs   | 1.58 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 443.11 ns/iter | 438.39 ns | 444.39 ns | 454.6 ns | 455.91 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.03 µs/iter   | 926.92 ns | 956.08 ns | 1.67 µs  | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.38 µs/iter   | 1.32 µs   | 1.39 µs   | 1.58 µs  | 1.58 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 475.02 ns/iter | 469.62 ns | 478.04 ns | 487.67 ns | 489.96 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 985.95 ns/iter | 904.36 ns | 916.55 ns | 1.57 µs   | 1.57 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.39 µs/iter   | 1.3 µs    | 1.4 µs    | 1.62 µs   | 1.62 µs   |


### everything
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')     | 429.09 ns/iter | 418.87 ns | 431.05 ns | 488.69 ns | 576.37 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')   | 434.22 ns/iter | 428.72 ns | 437.14 ns | 451.41 ns | 454.5 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')      | 436.37 ns/iter | 432.95 ns | 436.5 ns  | 446.82 ns | 448.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')    | 441.21 ns/iter | 436.45 ns | 441.95 ns | 451.94 ns | 455.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')    | 443.11 ns/iter | 438.39 ns | 444.39 ns | 454.6 ns  | 455.91 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')      | 456.04 ns/iter | 441.5 ns  | 452.89 ns | 550.59 ns | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 464.03 ns/iter | 459.82 ns | 464.58 ns | 473.47 ns | 474.24 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')       | 475.02 ns/iter | 469.62 ns | 478.04 ns | 487.67 ns | 489.96 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')    | 482.76 ns/iter | 478.81 ns | 482.91 ns | 493.85 ns | 496.16 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')       | 985.95 ns/iter | 904.36 ns | 916.55 ns | 1.57 µs   | 1.57 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')      | 1 µs/iter      | 896.8 ns  | 940.19 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')    | 1.03 µs/iter   | 929.59 ns | 958.04 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')    | 1.03 µs/iter   | 926.92 ns | 956.08 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')    | 1.04 µs/iter   | 935.31 ns | 967.57 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')   | 1.05 µs/iter   | 953.39 ns | 994.85 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')      | 1.07 µs/iter   | 959.52 ns | 983.46 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')     | 1.15 µs/iter   | 918.37 ns | 1.13 µs   | 1.84 µs   | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.18 µs/iter   | 1.06 µs   | 1.1 µs    | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')      | 1.36 µs/iter   | 1.29 µs   | 1.36 µs   | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')    | 1.38 µs/iter   | 1.32 µs   | 1.39 µs   | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')       | 1.39 µs/iter   | 1.3 µs    | 1.4 µs    | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')   | 1.43 µs/iter   | 1.37 µs   | 1.43 µs   | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')    | 1.49 µs/iter   | 1.41 µs   | 1.5 µs    | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')      | 1.51 µs/iter   | 1.36 µs   | 1.6 µs    | 2.2 µs    | 2.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')     | 1.52 µs/iter   | 1.37 µs   | 1.54 µs   | 2.29 µs   | 2.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')    | 1.52 µs/iter   | 1.47 µs   | 1.54 µs   | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.9 µs/iter    | 1.86 µs   | 1.91 µs   | 2.01 µs   | 2.01 µs   |

