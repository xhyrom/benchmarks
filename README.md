*Runned on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid) (3rd package)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.44 µs/iter  | 1.96 µs | 2.26 µs | 10.06 µs | 10.06 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.57 µs/iter  | 2 µs    | 6 µs    | 11.4 µs  | 6.39 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.66 µs/iter | 5.4 µs  | 13.8 µs | 25 µs    | 356.53 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.38 µs/iter  | 2.07 µs | 2.47 µs | 2.58 µs | 2.58 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.13 µs/iter  | 3.6 µs  | 8.9 µs  | 17.7 µs | 458.94 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 20.12 µs/iter | 10.1 µs | 21.5 µs | 35.8 µs | 2 ms      |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min      | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | -------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.38 µs/iter  | 2.07 µs | 2.47 µs | 2.58 µs  | 2.58 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.44 µs/iter  | 1.96 µs | 2.26 µs | 10.06 µs | 10.06 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.57 µs/iter  | 2 µs    | 6 µs    | 11.4 µs  | 6.39 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.13 µs/iter  | 3.6 µs  | 8.9 µs  | 17.7 µs  | 458.94 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.66 µs/iter | 5.4 µs  | 13.8 µs | 25 µs    | 356.53 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 20.12 µs/iter | 10.1 µs | 21.5 µs | 35.8 µs  | 2 ms      |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average       | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | ------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 712.9 ns/iter | 554.95 ns | 768.38 ns | 2.13 µs | 2.13 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.55 µs/iter  | 1.33 µs   | 1.63 µs   | 1.68 µs | 1.68 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.92 µs/iter  | 1.76 µs   | 1.97 µs   | 2.37 µs | 2.37 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 173.34 ns/iter | 128.45 ns | 183.83 ns | 251.16 ns | 304.97 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.29 ns/iter | 247.89 ns | 345.95 ns | 374.75 ns | 388.91 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 334.93 ns/iter | 262.14 ns | 358.09 ns | 412.87 ns | 740.75 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 253.39 ns/iter | 195.88 ns | 274.01 ns | 302.23 ns | 315.24 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 265.93 ns/iter | 200.31 ns | 283.91 ns | 308.5 ns  | 316.17 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 398.29 ns/iter | 300.2 ns  | 429.35 ns | 490.84 ns | 510.81 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 173.34 ns/iter | 128.45 ns | 183.83 ns | 251.16 ns | 304.97 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 253.39 ns/iter | 195.88 ns | 274.01 ns | 302.23 ns | 315.24 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 265.93 ns/iter | 200.31 ns | 283.91 ns | 308.5 ns  | 316.17 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 321.29 ns/iter | 247.89 ns | 345.95 ns | 374.75 ns | 388.91 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 334.93 ns/iter | 262.14 ns | 358.09 ns | 412.87 ns | 740.75 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 398.29 ns/iter | 300.2 ns  | 429.35 ns | 490.84 ns | 510.81 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min      | Max     |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 512.61 ns/iter | 392.43 ns | 533.37 ns | 993.4 ns | 1.13 µs |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1.05 µs/iter   | 823.65 ns | 1.02 µs   | 1.92 µs  | 1.92 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.52 µs/iter   | 1.32 µs   | 1.57 µs   | 2.26 µs  | 2.26 µs |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 524.56 ns/iter | 415.38 ns | 553.72 ns | 590.5 ns | 749.96 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 974.14 ns/iter | 736.98 ns | 945.37 ns | 1.86 µs  | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.62 µs/iter   | 1.48 µs   | 1.64 µs   | 2.2 µs   | 2.2 µs    |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 509.7 ns/iter | 387.5 ns  | 537.51 ns | 578.97 ns | 584.77 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.05 µs/iter  | 833.26 ns | 1.02 µs   | 1.79 µs   | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.46 µs/iter  | 1.27 µs   | 1.53 µs   | 1.59 µs   | 1.59 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 510.83 ns/iter | 396.9 ns  | 535.52 ns | 568.34 ns | 686.85 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.04 µs/iter   | 804.99 ns | 1 µs      | 1.83 µs   | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.59 µs/iter   | 1.41 µs   | 1.61 µs   | 1.92 µs   | 1.92 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 543.56 ns/iter | 426.54 ns | 573.57 ns | 594.79 ns | 598.17 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.07 µs/iter   | 809.02 ns | 1.02 µs   | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.68 µs/iter   | 1.56 µs   | 1.72 µs   | 1.97 µs   | 1.97 µs   |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 541.52 ns/iter | 434.13 ns | 562.58 ns | 593.22 ns | 636.14 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.11 µs/iter   | 878.73 ns | 1.06 µs   | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.95 µs/iter   | 1.81 µs   | 1.99 µs   | 2.07 µs   | 2.07 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 527.4 ns/iter | 410.92 ns | 555.83 ns | 571.01 ns | 571.81 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.01 µs/iter  | 815.84 ns | 981.12 ns | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.51 µs/iter  | 1.32 µs   | 1.54 µs   | 1.73 µs   | 1.73 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 508.73 ns/iter | 393.63 ns | 536.78 ns | 577.11 ns | 581.79 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.07 µs/iter   | 838.34 ns | 1.04 µs   | 1.88 µs   | 1.88 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.55 µs/iter   | 1.36 µs   | 1.6 µs    | 1.79 µs   | 1.79 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 544.16 ns/iter | 408.62 ns | 578.58 ns | 592.85 ns | 597.29 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.02 µs/iter   | 811.8 ns  | 975.83 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.53 µs/iter   | 1.32 µs   | 1.55 µs   | 2.73 µs   | 2.73 µs   |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 508.73 ns/iter | 393.63 ns | 536.78 ns | 577.11 ns | 581.79 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 509.7 ns/iter  | 387.5 ns  | 537.51 ns | 578.97 ns | 584.77 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 510.83 ns/iter | 396.9 ns  | 535.52 ns | 568.34 ns | 686.85 ns |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 512.61 ns/iter | 392.43 ns | 533.37 ns | 993.4 ns  | 1.13 µs   |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 524.56 ns/iter | 415.38 ns | 553.72 ns | 590.5 ns  | 749.96 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 527.4 ns/iter  | 410.92 ns | 555.83 ns | 571.01 ns | 571.81 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 541.52 ns/iter | 434.13 ns | 562.58 ns | 593.22 ns | 636.14 ns |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 543.56 ns/iter | 426.54 ns | 573.57 ns | 594.79 ns | 598.17 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 544.16 ns/iter | 408.62 ns | 578.58 ns | 592.85 ns | 597.29 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 974.14 ns/iter | 736.98 ns | 945.37 ns | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.01 µs/iter   | 815.84 ns | 981.12 ns | 1.8 µs    | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1.02 µs/iter   | 811.8 ns  | 975.83 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.04 µs/iter   | 804.99 ns | 1 µs      | 1.83 µs   | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.05 µs/iter   | 833.26 ns | 1.02 µs   | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1.05 µs/iter   | 823.65 ns | 1.02 µs   | 1.92 µs   | 1.92 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.07 µs/iter   | 809.02 ns | 1.02 µs   | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.07 µs/iter   | 838.34 ns | 1.04 µs   | 1.88 µs   | 1.88 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.11 µs/iter   | 878.73 ns | 1.06 µs   | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.46 µs/iter   | 1.27 µs   | 1.53 µs   | 1.59 µs   | 1.59 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.51 µs/iter   | 1.32 µs   | 1.54 µs   | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.52 µs/iter   | 1.32 µs   | 1.57 µs   | 2.26 µs   | 2.26 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.53 µs/iter   | 1.32 µs   | 1.55 µs   | 2.73 µs   | 2.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.55 µs/iter   | 1.36 µs   | 1.6 µs    | 1.79 µs   | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.59 µs/iter   | 1.41 µs   | 1.61 µs   | 1.92 µs   | 1.92 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.62 µs/iter   | 1.48 µs   | 1.64 µs   | 2.2 µs    | 2.2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.68 µs/iter   | 1.56 µs   | 1.72 µs   | 1.97 µs   | 1.97 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.95 µs/iter   | 1.81 µs   | 1.99 µs   | 2.07 µs   | 2.07 µs   |

