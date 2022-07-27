*Runned on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.26 µs/iter  | 1.78 µs | 3.34 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.55 µs/iter  | 2.3 µs  | 7.23 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.98 µs/iter | 7 µs    | 441.3 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average        | Min     | Max       |
| -------------------------------------- | -------------------------------- | -------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.42 µs/iter   | 2.18 µs | 2.56 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.71 µs/iter   | 4.4 µs  | 781.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 450.63 µs/iter | 16.3 µs | 1 s       |


### everything
| Runtime                                | Benchmark                        | Average        | Min     | Max       |
| -------------------------------------- | -------------------------------- | -------------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.26 µs/iter   | 1.78 µs | 3.34 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.42 µs/iter   | 2.18 µs | 2.56 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.55 µs/iter   | 2.3 µs  | 7.23 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.71 µs/iter   | 4.4 µs  | 781.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.98 µs/iter  | 7 µs    | 441.3 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 450.63 µs/iter | 16.3 µs | 1 s       |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 713.95 ns/iter | 538.03 ns | 807.91 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.55 µs/iter   | 1.39 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.96 µs/iter   | 1.82 µs   | 2.31 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 169.13 ns/iter | 147.62 ns | 377.89 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 347.31 ns/iter | 300.57 ns | 414.19 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 349.52 ns/iter | 306.84 ns | 409.3 ns  |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 256.06 ns/iter | 226.69 ns | 297.49 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.68 ns/iter | 232.3 ns  | 1.06 µs   |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 420.16 ns/iter | 348.71 ns | 535.97 ns |


### everything
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 169.13 ns/iter | 147.62 ns | 377.89 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 256.06 ns/iter | 226.69 ns | 297.49 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 273.68 ns/iter | 232.3 ns  | 1.06 µs   |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 347.31 ns/iter | 300.57 ns | 414.19 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 349.52 ns/iter | 306.84 ns | 409.3 ns  |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 420.16 ns/iter | 348.71 ns | 535.97 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 513.16 ns/iter | 445.81 ns | 900.31 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 1.04 µs/iter   | 856.76 ns | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.48 µs/iter   | 1.35 µs   | 2.38 µs   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 536.34 ns/iter | 463.57 ns | 768.3 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 1.04 µs/iter   | 836.09 ns | 1.84 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.54 µs/iter   | 1.41 µs   | 2.48 µs  |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 543.1 ns/iter | 482.65 ns | 678.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 1.09 µs/iter  | 939.95 ns | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.48 µs/iter  | 1.33 µs   | 1.93 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | Min       | Max      |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 508.31 ns/iter | 466.49 ns | 557.8 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 1.03 µs/iter   | 860.08 ns | 1.79 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.42 µs/iter   | 1.3 µs    | 1.99 µs  |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 536.13 ns/iter | 486.32 ns | 573.86 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64') | 1.09 µs/iter   | 927.14 ns | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.49 µs/iter   | 1.35 µs   | 1.84 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 557.78 ns/iter | 528.86 ns | 603.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.11 µs/iter   | 925.48 ns | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.86 µs/iter   | 1.73 µs   | 2.03 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 532.78 ns/iter | 483.78 ns | 599.22 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 1.08 µs/iter   | 893.75 ns | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.51 µs/iter   | 1.41 µs   | 1.7 µs    |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 524.81 ns/iter | 471.59 ns | 567.96 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary') | 1.11 µs/iter   | 930.23 ns | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.44 µs/iter   | 1.33 µs   | 1.66 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | Min       | Max      |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 525.71 ns/iter | 467.34 ns | 568.6 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex') | 1.1 µs/iter    | 914.09 ns | 1.82 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.49 µs/iter   | 1.37 µs   | 1.67 µs  |


### everything
| Runtime                                | Benchmark                                  | Average        | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')      | 508.31 ns/iter | 466.49 ns | 557.8 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')     | 513.16 ns/iter | 445.81 ns | 900.31 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')    | 524.81 ns/iter | 471.59 ns | 567.96 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')       | 525.71 ns/iter | 467.34 ns | 568.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')    | 532.78 ns/iter | 483.78 ns | 599.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')    | 536.13 ns/iter | 486.32 ns | 573.86 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')      | 536.34 ns/iter | 463.57 ns | 768.3 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')   | 543.1 ns/iter  | 482.65 ns | 678.22 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 557.78 ns/iter | 528.86 ns | 603.19 ns |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ucs2')      | 1.03 µs/iter   | 860.08 ns | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf8')      | 1.04 µs/iter   | 836.09 ns | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('ascii')     | 1.04 µs/iter   | 856.76 ns | 1.84 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('latin1')    | 1.08 µs/iter   | 893.75 ns | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64')    | 1.09 µs/iter   | 927.14 ns | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('utf16le')   | 1.09 µs/iter   | 939.95 ns | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('hex')       | 1.1 µs/iter    | 914.09 ns | 1.82 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('binary')    | 1.11 µs/iter   | 930.23 ns | 1.89 µs   |
| bun 0.1.5 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 1.11 µs/iter   | 925.48 ns | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')      | 1.42 µs/iter   | 1.3 µs    | 1.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')    | 1.44 µs/iter   | 1.33 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')   | 1.48 µs/iter   | 1.33 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')     | 1.48 µs/iter   | 1.35 µs   | 2.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')       | 1.49 µs/iter   | 1.37 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')    | 1.49 µs/iter   | 1.35 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')    | 1.51 µs/iter   | 1.41 µs   | 1.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')      | 1.54 µs/iter   | 1.41 µs   | 2.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.86 µs/iter   | 1.73 µs   | 2.03 µs   |

