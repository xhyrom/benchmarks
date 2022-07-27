*Runned on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)(3rd package)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.57 µs/iter  | 2.06 µs | 2.39 µs | 9.15 µs | 9.15 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.17 µs/iter  | 3.99 µs | 4.18 µs | 4.49 µs | 4.49 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.41 µs/iter | 6.7 µs  | 11.3 µs | 13.4 µs | 357.4 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.31 µs/iter  | 2.07 µs | 2.35 µs | 2.48 µs | 2.48 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.81 µs/iter  | 4.4 µs  | 8.3 µs  | 12.2 µs | 999.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.88 µs/iter | 11.1 µs | 16.9 µs | 20.5 µs | 304.4 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.31 µs/iter  | 2.07 µs | 2.35 µs | 2.48 µs | 2.48 µs  |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.57 µs/iter  | 2.06 µs | 2.39 µs | 9.15 µs | 9.15 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.17 µs/iter  | 3.99 µs | 4.18 µs | 4.49 µs | 4.49 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.81 µs/iter  | 4.4 µs  | 8.3 µs  | 12.2 µs | 999.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.41 µs/iter | 6.7 µs  | 11.3 µs | 13.4 µs | 357.4 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.88 µs/iter | 11.1 µs | 16.9 µs | 20.5 µs | 304.4 µs |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 525.43 ns/iter | 438.46 ns | 523.99 ns | 638.69 ns | 1.88 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.44 µs/iter   | 1.37 µs   | 1.46 µs   | 1.54 µs   | 1.54 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.89 µs/iter   | 1.85 µs   | 1.89 µs   | 2.04 µs   | 2.04 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.78 ns/iter | 153.29 ns | 157.56 ns | 201.69 ns | 267 ns    |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.56 ns/iter | 301.69 ns | 309.53 ns | 339.13 ns | 339.4 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 326.59 ns/iter | 321.04 ns | 324.64 ns | 358.32 ns | 388.39 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.35 ns/iter | 224.33 ns | 233.26 ns | 250.69 ns | 263.16 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.55 ns/iter | 233.02 ns | 240.67 ns | 258.92 ns | 265.05 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.15 ns/iter | 355.08 ns | 377.47 ns | 432.18 ns | 454.23 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.78 ns/iter | 153.29 ns | 157.56 ns | 201.69 ns | 267 ns    |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.35 ns/iter | 224.33 ns | 233.26 ns | 250.69 ns | 263.16 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 237.55 ns/iter | 233.02 ns | 240.67 ns | 258.92 ns | 265.05 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.56 ns/iter | 301.69 ns | 309.53 ns | 339.13 ns | 339.4 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 326.59 ns/iter | 321.04 ns | 324.64 ns | 358.32 ns | 388.39 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 375.15 ns/iter | 355.08 ns | 377.47 ns | 432.18 ns | 454.23 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 427.95 ns/iter | 415.99 ns | 434.35 ns | 491.31 ns | 551.51 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1.1 µs/iter    | 1 µs      | 1.04 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.51 µs/iter   | 1.4 µs    | 1.52 µs   | 2.21 µs   | 2.21 µs   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average      | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | ------------ | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 445 ns/iter  | 439.03 ns | 448.15 ns | 468.83 ns | 469.89 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 1.06 µs/iter | 962.17 ns | 997.93 ns | 1.62 µs   | 1.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.57 µs/iter | 1.48 µs   | 1.59 µs   | 1.96 µs   | 1.96 µs   |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 430.49 ns/iter | 426.37 ns | 431.68 ns | 443 ns  | 447.53 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.15 µs/iter   | 1.06 µs   | 1.08 µs   | 1.72 µs | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.48 µs/iter   | 1.39 µs   | 1.49 µs   | 1.58 µs | 1.58 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 428.99 ns/iter | 423.62 ns | 430.05 ns | 440.18 ns | 451.22 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.09 µs/iter   | 1.01 µs   | 1.02 µs   | 1.66 µs   | 1.66 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.47 µs/iter   | 1.41 µs   | 1.47 µs   | 1.75 µs   | 1.75 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 473.59 ns/iter | 469.99 ns | 472.96 ns | 486.23 ns | 486.53 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.14 µs/iter   | 1.06 µs   | 1.09 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.6 µs/iter    | 1.55 µs   | 1.6 µs    | 1.73 µs   | 1.73 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | -------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 463.75 ns/iter | 459.98 ns | 463.6 ns | 477.45 ns | 481.41 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.15 µs/iter   | 1.04 µs   | 1.09 µs  | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.92 µs/iter   | 1.88 µs   | 1.92 µs  | 2.14 µs   | 2.14 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 430.32 ns/iter | 427.04 ns | 430.31 ns | 438.44 ns | 438.91 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.12 µs/iter   | 1.02 µs   | 1.06 µs   | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.52 µs/iter   | 1.47 µs   | 1.54 µs   | 1.64 µs   | 1.64 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 428.65 ns/iter | 425.6 ns | 428.03 ns | 442.84 ns | 443.64 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.12 µs/iter   | 1.03 µs  | 1.07 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.54 µs/iter   | 1.48 µs  | 1.55 µs   | 1.71 µs   | 1.71 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 461.12 ns/iter | 457.09 ns | 464.97 ns | 476 ns  | 477.11 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.09 µs/iter   | 1 µs      | 1.03 µs   | 1.67 µs | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.54 µs/iter   | 1.48 µs   | 1.55 µs   | 1.63 µs | 1.63 µs   |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 427.95 ns/iter | 415.99 ns | 434.35 ns | 491.31 ns | 551.51 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 428.65 ns/iter | 425.6 ns  | 428.03 ns | 442.84 ns | 443.64 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 428.99 ns/iter | 423.62 ns | 430.05 ns | 440.18 ns | 451.22 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 430.32 ns/iter | 427.04 ns | 430.31 ns | 438.44 ns | 438.91 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 430.49 ns/iter | 426.37 ns | 431.68 ns | 443 ns    | 447.53 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 445 ns/iter    | 439.03 ns | 448.15 ns | 468.83 ns | 469.89 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 461.12 ns/iter | 457.09 ns | 464.97 ns | 476 ns    | 477.11 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 463.75 ns/iter | 459.98 ns | 463.6 ns  | 477.45 ns | 481.41 ns |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 473.59 ns/iter | 469.99 ns | 472.96 ns | 486.23 ns | 486.53 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 1.06 µs/iter   | 962.17 ns | 997.93 ns | 1.62 µs   | 1.62 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.09 µs/iter   | 1.01 µs   | 1.02 µs   | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1.09 µs/iter   | 1 µs      | 1.03 µs   | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1.1 µs/iter    | 1 µs      | 1.04 µs   | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.12 µs/iter   | 1.02 µs   | 1.06 µs   | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.12 µs/iter   | 1.03 µs   | 1.07 µs   | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.14 µs/iter   | 1.06 µs   | 1.09 µs   | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.15 µs/iter   | 1.04 µs   | 1.09 µs   | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.15 µs/iter   | 1.06 µs   | 1.08 µs   | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.47 µs/iter   | 1.41 µs   | 1.47 µs   | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.48 µs/iter   | 1.39 µs   | 1.49 µs   | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.51 µs/iter   | 1.4 µs    | 1.52 µs   | 2.21 µs   | 2.21 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.52 µs/iter   | 1.47 µs   | 1.54 µs   | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.54 µs/iter   | 1.48 µs   | 1.55 µs   | 1.71 µs   | 1.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.54 µs/iter   | 1.48 µs   | 1.55 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.57 µs/iter   | 1.48 µs   | 1.59 µs   | 1.96 µs   | 1.96 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.6 µs/iter    | 1.55 µs   | 1.6 µs    | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.92 µs/iter   | 1.88 µs   | 1.92 µs   | 2.14 µs   | 2.14 µs   |

