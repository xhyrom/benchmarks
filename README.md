*Runned on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.16 µs/iter  | 1.89 µs | 2.21 µs | 2.28 µs | 2.28 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.59 µs/iter  | 2.6 µs  | 6.7 µs  | 9.5 µs  | 8.1 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.25 µs/iter | 6.8 µs  | 12.7 µs | 15.5 µs | 429.21 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter | 2.08 µs | 2.32 µs | 2.62 µs | 2.62 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.12 µs/iter | 4.4 µs  | 8.7 µs  | 13.3 µs | 346.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.1 µs/iter | 12.3 µs | 19.2 µs | 24 µs   | 484.61 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.16 µs/iter  | 1.89 µs | 2.21 µs | 2.28 µs | 2.28 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.27 µs/iter  | 2.08 µs | 2.32 µs | 2.62 µs | 2.62 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.59 µs/iter  | 2.6 µs  | 6.7 µs  | 9.5 µs  | 8.1 ms    |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.12 µs/iter  | 4.4 µs  | 8.7 µs  | 13.3 µs | 346.61 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.25 µs/iter | 6.8 µs  | 12.7 µs | 15.5 µs | 429.21 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.1 µs/iter  | 12.3 µs | 19.2 µs | 24 µs   | 484.61 µs |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 645.04 ns/iter | 533.33 ns | 688.76 ns | 718 ns  | 718 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.39 µs/iter   | 1.27 µs   | 1.43 µs   | 1.5 µs  | 1.5 µs  |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.86 µs/iter   | 1.82 µs   | 1.87 µs   | 2.11 µs | 2.11 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 168.17 ns/iter | 160.76 ns | 165.09 ns | 216.25 ns | 380.6 ns  |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 324.79 ns/iter | 309.2 ns  | 327.66 ns | 409.58 ns | 944.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 346.15 ns/iter | 338.15 ns | 347.64 ns | 409.09 ns | 427.56 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 244.25 ns/iter | 236.82 ns | 249.38 ns | 264.24 ns | 273.18 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.97 ns/iter | 240 ns    | 254.37 ns | 1.19 µs   | 1.28 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 395.18 ns/iter | 358.26 ns | 410 ns    | 1.18 µs   | 1.19 µs   |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 168.17 ns/iter | 160.76 ns | 165.09 ns | 216.25 ns | 380.6 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 244.25 ns/iter | 236.82 ns | 249.38 ns | 264.24 ns | 273.18 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.97 ns/iter | 240 ns    | 254.37 ns | 1.19 µs   | 1.28 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 324.79 ns/iter | 309.2 ns  | 327.66 ns | 409.58 ns | 944.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 346.15 ns/iter | 338.15 ns | 347.64 ns | 409.09 ns | 427.56 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 395.18 ns/iter | 358.26 ns | 410 ns    | 1.18 µs   | 1.19 µs   |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 467.39 ns/iter | 456.14 ns | 474.97 ns | 498.17 ns | 554.27 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 992.6 ns/iter  | 868.98 ns | 926.69 ns | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.41 µs/iter   | 1.26 µs   | 1.43 µs   | 2.16 µs   | 2.16 µs   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 488.03 ns/iter | 472.27 ns | 487.82 ns | 564.07 ns | 1.17 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 945.34 ns/iter | 837.8 ns  | 877.31 ns | 1.67 µs   | 1.67 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.5 µs/iter    | 1.4 µs    | 1.51 µs   | 2.03 µs   | 2.03 µs |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 472.7 ns/iter | 466.58 ns | 476.81 ns | 499.98 ns | 515.43 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.04 µs/iter  | 926.28 ns | 961.52 ns | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.39 µs/iter  | 1.33 µs   | 1.41 µs   | 1.74 µs   | 1.74 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 471.07 ns/iter | 465.55 ns | 475.93 ns | 489.97 ns | 504.89 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 978.12 ns/iter | 855.47 ns | 886.75 ns | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.9 µs    | 1.9 µs    |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 516.09 ns/iter | 509.67 ns | 516.07 ns | 540.72 ns | 541.92 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.03 µs/iter   | 900.21 ns | 961.74 ns | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.49 µs/iter   | 1.42 µs   | 1.5 µs    | 1.67 µs   | 1.67 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 492.15 ns/iter | 486.95 ns | 497.45 ns | 504.42 ns | 505.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.06 µs/iter   | 902.14 ns | 973.2 ns  | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.76 µs/iter   | 1.71 µs   | 1.78 µs   | 1.9 µs    | 1.9 µs    |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 478.62 ns/iter | 470.25 ns | 482.14 ns | 509.02 ns | 537.44 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.01 µs/iter   | 888.35 ns | 933.12 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.43 µs/iter   | 1.36 µs   | 1.45 µs   | 1.54 µs   | 1.54 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 483.21 ns/iter | 474.47 ns | 485.03 ns | 525.26 ns | 527.08 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.04 µs/iter   | 931.12 ns | 956.51 ns | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.42 µs/iter   | 1.37 µs   | 1.44 µs   | 1.52 µs   | 1.52 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 494.03 ns/iter | 483.91 ns | 497.14 ns | 523.53 ns | 571.84 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 998.07 ns/iter | 873.57 ns | 907.3 ns  | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.43 µs/iter   | 1.36 µs   | 1.46 µs   | 1.57 µs   | 1.57 µs   |


### everything
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')     | 467.39 ns/iter | 456.14 ns | 474.97 ns | 498.17 ns | 554.27 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')      | 471.07 ns/iter | 465.55 ns | 475.93 ns | 489.97 ns | 504.89 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')   | 472.7 ns/iter  | 466.58 ns | 476.81 ns | 499.98 ns | 515.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')    | 478.62 ns/iter | 470.25 ns | 482.14 ns | 509.02 ns | 537.44 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')    | 483.21 ns/iter | 474.47 ns | 485.03 ns | 525.26 ns | 527.08 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')      | 488.03 ns/iter | 472.27 ns | 487.82 ns | 564.07 ns | 1.17 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 492.15 ns/iter | 486.95 ns | 497.45 ns | 504.42 ns | 505.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')       | 494.03 ns/iter | 483.91 ns | 497.14 ns | 523.53 ns | 571.84 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')    | 516.09 ns/iter | 509.67 ns | 516.07 ns | 540.72 ns | 541.92 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')      | 945.34 ns/iter | 837.8 ns  | 877.31 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')      | 978.12 ns/iter | 855.47 ns | 886.75 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')     | 992.6 ns/iter  | 868.98 ns | 926.69 ns | 1.69 µs   | 1.69 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')       | 998.07 ns/iter | 873.57 ns | 907.3 ns  | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')    | 1.01 µs/iter   | 888.35 ns | 933.12 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')    | 1.03 µs/iter   | 900.21 ns | 961.74 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')   | 1.04 µs/iter   | 926.28 ns | 961.52 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')    | 1.04 µs/iter   | 931.12 ns | 956.51 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.06 µs/iter   | 902.14 ns | 973.2 ns  | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')   | 1.39 µs/iter   | 1.33 µs   | 1.41 µs   | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')      | 1.4 µs/iter    | 1.33 µs   | 1.42 µs   | 1.9 µs    | 1.9 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')     | 1.41 µs/iter   | 1.26 µs   | 1.43 µs   | 2.16 µs   | 2.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')    | 1.42 µs/iter   | 1.37 µs   | 1.44 µs   | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')    | 1.43 µs/iter   | 1.36 µs   | 1.45 µs   | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')       | 1.43 µs/iter   | 1.36 µs   | 1.46 µs   | 1.57 µs   | 1.57 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')    | 1.49 µs/iter   | 1.42 µs   | 1.5 µs    | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')      | 1.5 µs/iter    | 1.4 µs    | 1.51 µs   | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.76 µs/iter   | 1.71 µs   | 1.78 µs   | 1.9 µs    | 1.9 µs    |

