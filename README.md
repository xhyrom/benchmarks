*Runned on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75    | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------ | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.32 µs/iter  | 2 µs   | 2.41 µs | 2.5 µs  | 2.5 µs    |
| node v18.7.0 (x64-linux)               | console.log('hello') | 5 µs/iter     | 2.7 µs | 6.2 µs  | 11.1 µs | 5.73 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.93 µs/iter | 7.9 µs | 14.2 µs | 18.1 µs | 865.16 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.56 µs/iter  | 2.18 µs | 2.6 µs  | 2.84 µs | 2.84 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.01 µs/iter  | 5.1 µs  | 9.6 µs  | 15.7 µs | 1.95 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 22.17 µs/iter | 14.6 µs | 22.5 µs | 31.9 µs | 2.3 ms  |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.32 µs/iter  | 2 µs    | 2.41 µs | 2.5 µs  | 2.5 µs    |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.56 µs/iter  | 2.18 µs | 2.6 µs  | 2.84 µs | 2.84 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 5 µs/iter     | 2.7 µs  | 6.2 µs  | 11.1 µs | 5.73 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.01 µs/iter  | 5.1 µs  | 9.6 µs  | 15.7 µs | 1.95 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.93 µs/iter | 7.9 µs  | 14.2 µs | 18.1 µs | 865.16 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 22.17 µs/iter | 14.6 µs | 22.5 µs | 31.9 µs | 2.3 ms    |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75      | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | -------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 782.91 ns/iter | 633.1 ns | 806.23 ns | 2.33 µs | 2.33 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.67 µs/iter   | 1.54 µs  | 1.69 µs   | 1.8 µs  | 1.8 µs  |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.17 µs/iter   | 2.11 µs  | 2.18 µs   | 2.44 µs | 2.44 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 188.7 ns/iter  | 171.88 ns | 185.2 ns  | 252.37 ns | 388.86 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 369.48 ns/iter | 334.67 ns | 373.57 ns | 406.29 ns | 410.3 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 389.04 ns/iter | 361.13 ns | 392.94 ns | 430.49 ns | 458.47 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 288.83 ns/iter | 276.38 ns | 293.93 ns | 314.11 ns | 321.68 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 321.29 ns/iter | 288.26 ns | 308.43 ns | 895.7 ns  | 1.17 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 459.59 ns/iter | 421.42 ns | 488.04 ns | 508.73 ns | 561.63 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 188.7 ns/iter  | 171.88 ns | 185.2 ns  | 252.37 ns | 388.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 288.83 ns/iter | 276.38 ns | 293.93 ns | 314.11 ns | 321.68 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 321.29 ns/iter | 288.26 ns | 308.43 ns | 895.7 ns  | 1.17 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 369.48 ns/iter | 334.67 ns | 373.57 ns | 406.29 ns | 410.3 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 389.04 ns/iter | 361.13 ns | 392.94 ns | 430.49 ns | 458.47 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 459.59 ns/iter | 421.42 ns | 488.04 ns | 508.73 ns | 561.63 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 589.09 ns/iter | 513.31 ns | 582.65 ns | 1.31 µs | 1.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.18 µs/iter   | 995.81 ns | 1.23 µs   | 2.06 µs | 2.06 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 2.38 µs/iter   | 1.4 µs    | 1.9 µs    | 4.1 µs  | 6.73 ms |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99      | Min     | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- | ------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 611.62 ns/iter | 568.95 ns | 589.5 ns | 1.94 µs | 1.94 µs  |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.11 µs/iter   | 976.21 ns | 1.03 µs  | 1.93 µs | 1.93 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 2.09 µs/iter   | 1.2 µs    | 2 µs     | 4.7 µs  | 10.72 ms |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average       | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 586.5 ns/iter | 554.76 ns | 572.91 ns | 1.31 µs | 1.31 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.25 µs/iter  | 1.1 µs    | 1.15 µs   | 2.02 µs | 2.02 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.59 µs/iter  | 1.32 µs   | 1.69 µs   | 2.76 µs | 2.76 µs |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 575.38 ns/iter | 534.78 ns | 585.23 ns | 722.04 ns | 722.04 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.16 µs/iter   | 1.02 µs   | 1.05 µs   | 1.96 µs   | 1.96 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.75 µs/iter   | 1.39 µs   | 1.83 µs   | 2.94 µs   | 2.94 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 620.98 ns/iter | 556.82 ns | 603.02 ns | 1.06 µs | 1.06 µs |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.2 µs/iter    | 1.06 µs   | 1.11 µs   | 2.05 µs | 2.05 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.95 µs/iter   | 1.8 µs    | 2 µs      | 2.19 µs | 2.19 µs |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 603.51 ns/iter | 554.04 ns | 592.2 ns | 958.52 ns | 958.52 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.32 µs/iter   | 1.08 µs   | 1.3 µs   | 2.32 µs   | 2.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.1 µs/iter    | 1.87 µs   | 2.28 µs  | 2.42 µs   | 2.42 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 568.57 ns/iter | 529.63 ns | 573.38 ns | 652.45 ns | 652.45 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.21 µs/iter   | 1.05 µs   | 1.09 µs   | 2.29 µs   | 2.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.76 µs/iter   | 1.47 µs   | 1.92 µs   | 2.29 µs   | 2.29 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 567.5 ns/iter | 519.12 ns | 571.56 ns | 755.26 ns | 755.26 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.2 µs/iter   | 1.05 µs   | 1.11 µs   | 2.07 µs   | 2.07 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.75 µs/iter  | 1.39 µs   | 1.87 µs   | 2.75 µs   | 2.75 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 590.96 ns/iter | 576.91 ns | 591.64 ns | 804.02 ns | 804.02 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.15 µs/iter   | 988 ns    | 1.06 µs   | 2.05 µs   | 2.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.77 µs/iter   | 1.45 µs   | 1.93 µs   | 2.62 µs   | 2.62 µs   |


### everything
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')    | 567.5 ns/iter  | 519.12 ns | 571.56 ns | 755.26 ns | 755.26 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')    | 568.57 ns/iter | 529.63 ns | 573.38 ns | 652.45 ns | 652.45 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')      | 575.38 ns/iter | 534.78 ns | 585.23 ns | 722.04 ns | 722.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')   | 586.5 ns/iter  | 554.76 ns | 572.91 ns | 1.31 µs   | 1.31 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')     | 589.09 ns/iter | 513.31 ns | 582.65 ns | 1.31 µs   | 1.31 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')       | 590.96 ns/iter | 576.91 ns | 591.64 ns | 804.02 ns | 804.02 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 603.51 ns/iter | 554.04 ns | 592.2 ns  | 958.52 ns | 958.52 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')      | 611.62 ns/iter | 568.95 ns | 589.5 ns  | 1.94 µs   | 1.94 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')    | 620.98 ns/iter | 556.82 ns | 603.02 ns | 1.06 µs   | 1.06 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')      | 1.11 µs/iter   | 976.21 ns | 1.03 µs   | 1.93 µs   | 1.93 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')       | 1.15 µs/iter   | 988 ns    | 1.06 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')      | 1.16 µs/iter   | 1.02 µs   | 1.05 µs   | 1.96 µs   | 1.96 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')     | 1.18 µs/iter   | 995.81 ns | 1.23 µs   | 2.06 µs   | 2.06 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')    | 1.2 µs/iter    | 1.06 µs   | 1.11 µs   | 2.05 µs   | 2.05 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')    | 1.2 µs/iter    | 1.05 µs   | 1.11 µs   | 2.07 µs   | 2.07 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')    | 1.21 µs/iter   | 1.05 µs   | 1.09 µs   | 2.29 µs   | 2.29 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')   | 1.25 µs/iter   | 1.1 µs    | 1.15 µs   | 2.02 µs   | 2.02 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.32 µs/iter   | 1.08 µs   | 1.3 µs    | 2.32 µs   | 2.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')   | 1.59 µs/iter   | 1.32 µs   | 1.69 µs   | 2.76 µs   | 2.76 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')    | 1.75 µs/iter   | 1.39 µs   | 1.87 µs   | 2.75 µs   | 2.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')      | 1.75 µs/iter   | 1.39 µs   | 1.83 µs   | 2.94 µs   | 2.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')    | 1.76 µs/iter   | 1.47 µs   | 1.92 µs   | 2.29 µs   | 2.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')       | 1.77 µs/iter   | 1.45 µs   | 1.93 µs   | 2.62 µs   | 2.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')    | 1.95 µs/iter   | 1.8 µs    | 2 µs      | 2.19 µs   | 2.19 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')      | 2.09 µs/iter   | 1.2 µs    | 2 µs      | 4.7 µs    | 10.72 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 2.1 µs/iter    | 1.87 µs   | 2.28 µs   | 2.42 µs   | 2.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')     | 2.38 µs/iter   | 1.4 µs    | 1.9 µs    | 4.1 µs    | 6.73 ms   |

