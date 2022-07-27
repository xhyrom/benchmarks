*Runned on Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz*

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
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.97 µs/iter  | 1.5 µs | 2.7 µs  | 13.8 µs | 3.07 ms   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 11.3 µs/iter  | 6.3 µs | 10 µs   | 23.3 µs | 11.48 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 16.83 µs/iter | 7.9 µs | 17.5 µs | 35.5 µs | 978.01 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 4.52 µs/iter  | 2.38 µs | 6.94 µs | 9.07 µs | 9.07 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 18.27 µs/iter | 13.5 µs | 16.1 µs | 37.6 µs | 8.86 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.47 µs/iter | 16.5 µs | 31.7 µs | 82.6 µs | 1.82 ms |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.97 µs/iter  | 1.5 µs  | 2.7 µs  | 13.8 µs | 3.07 ms   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 4.52 µs/iter  | 2.38 µs | 6.94 µs | 9.07 µs | 9.07 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 11.3 µs/iter  | 6.3 µs  | 10 µs   | 23.3 µs | 11.48 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 16.83 µs/iter | 7.9 µs  | 17.5 µs | 35.5 µs | 978.01 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 18.27 µs/iter | 13.5 µs | 16.1 µs | 37.6 µs | 8.86 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.47 µs/iter | 16.5 µs | 31.7 µs | 82.6 µs | 1.82 ms   |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 661.34 ns/iter | 555.51 ns | 679.67 ns | 857.54 ns | 857.54 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.42 µs/iter   | 1.33 µs   | 1.45 µs   | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.97 µs/iter   | 1.82 µs   | 1.99 µs   | 2.64 µs   | 2.64 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 174.83 ns/iter | 151.41 ns | 182.14 ns | 408.4 ns  | 460.59 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 348.22 ns/iter | 311.66 ns | 359.26 ns | 625.36 ns | 656.52 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 380.75 ns/iter | 335.94 ns | 392.75 ns | 523.27 ns | 726.45 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 279.85 ns/iter | 252 ns    | 292.27 ns | 397.78 ns | 427.82 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 285.11 ns/iter | 248.27 ns | 285.51 ns | 674.09 ns | 966.01 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 453.53 ns/iter | 384.77 ns | 477.04 ns | 565.06 ns | 644.15 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 174.83 ns/iter | 151.41 ns | 182.14 ns | 408.4 ns  | 460.59 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 279.85 ns/iter | 252 ns    | 292.27 ns | 397.78 ns | 427.82 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 285.11 ns/iter | 248.27 ns | 285.51 ns | 674.09 ns | 966.01 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 348.22 ns/iter | 311.66 ns | 359.26 ns | 625.36 ns | 656.52 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 380.75 ns/iter | 335.94 ns | 392.75 ns | 523.27 ns | 726.45 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 453.53 ns/iter | 384.77 ns | 477.04 ns | 565.06 ns | 644.15 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 505.65 ns/iter | 455.44 ns | 523.12 ns | 576.8 ns | 602.78 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1.14 µs/iter   | 951.47 ns | 1.15 µs   | 2.01 µs  | 2.01 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 2.45 µs/iter   | 1.4 µs    | 2.1 µs    | 4.3 µs   | 5.01 ms   |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 531.85 ns/iter | 471.39 ns | 541.76 ns | 810.31 ns | 1.18 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 1.11 µs/iter   | 920.34 ns | 1.08 µs   | 1.88 µs   | 1.88 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.78 µs/iter   | 1.4 µs    | 1.75 µs   | 3.81 µs   | 3.81 µs |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 537.11 ns/iter | 460.47 ns | 558.24 ns | 840.7 ns | 873.27 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.26 µs/iter   | 1.04 µs   | 1.26 µs   | 2 µs     | 2 µs      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.75 µs/iter   | 1.44 µs   | 1.84 µs   | 2.38 µs  | 2.38 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 578.93 ns/iter | 523.75 ns | 584.77 ns | 822.28 ns | 822.28 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.38 µs/iter   | 1.02 µs   | 1.43 µs   | 2.62 µs   | 2.62 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.78 µs/iter   | 1.35 µs   | 1.91 µs   | 2.46 µs   | 2.46 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 566.85 ns/iter | 489.48 ns | 590.16 ns | 716.46 ns | 716.46 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.33 µs/iter   | 1.07 µs   | 1.29 µs   | 2.43 µs   | 2.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.68 µs/iter   | 1.46 µs   | 1.73 µs   | 2.4 µs    | 2.4 µs    |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 539.14 ns/iter | 482.52 ns | 549.79 ns | 711.57 ns | 876.12 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.44 µs/iter   | 1.08 µs   | 1.36 µs   | 3.41 µs   | 3.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.91 µs/iter   | 1.71 µs   | 1.98 µs   | 2.55 µs   | 2.55 µs   |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 540.55 ns/iter | 461.82 ns | 549.87 ns | 876.45 ns | 943.61 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.41 µs/iter   | 1.07 µs   | 1.52 µs   | 2.45 µs   | 2.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.46 µs/iter   | 1.27 µs   | 1.48 µs   | 2.56 µs   | 2.56 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 524.81 ns/iter | 461.98 ns | 533.83 ns | 669.08 ns | 939.09 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.33 µs/iter   | 1.1 µs    | 1.27 µs   | 2.41 µs   | 2.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.45 µs/iter   | 1.31 µs   | 1.48 µs   | 1.7 µs    | 1.7 µs    |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75      | p99       | Min       | Max     |
| -------------------------------------- | ---------------- | -------------- | -------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 555.97 ns/iter | 491.1 ns | 565.94 ns | 875.79 ns | 1.01 µs |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.25 µs/iter   | 1.03 µs  | 1.22 µs   | 2.07 µs   | 2.07 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.56 µs/iter   | 1.34 µs  | 1.61 µs   | 2.17 µs   | 2.17 µs |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 505.65 ns/iter | 455.44 ns | 523.12 ns | 576.8 ns  | 602.78 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 524.81 ns/iter | 461.98 ns | 533.83 ns | 669.08 ns | 939.09 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 531.85 ns/iter | 471.39 ns | 541.76 ns | 810.31 ns | 1.18 µs   |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 537.11 ns/iter | 460.47 ns | 558.24 ns | 840.7 ns  | 873.27 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 539.14 ns/iter | 482.52 ns | 549.79 ns | 711.57 ns | 876.12 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 540.55 ns/iter | 461.82 ns | 549.87 ns | 876.45 ns | 943.61 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 555.97 ns/iter | 491.1 ns  | 565.94 ns | 875.79 ns | 1.01 µs   |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 566.85 ns/iter | 489.48 ns | 590.16 ns | 716.46 ns | 716.46 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 578.93 ns/iter | 523.75 ns | 584.77 ns | 822.28 ns | 822.28 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 1.11 µs/iter   | 920.34 ns | 1.08 µs   | 1.88 µs   | 1.88 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1.14 µs/iter   | 951.47 ns | 1.15 µs   | 2.01 µs   | 2.01 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1.25 µs/iter   | 1.03 µs   | 1.22 µs   | 2.07 µs   | 2.07 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.26 µs/iter   | 1.04 µs   | 1.26 µs   | 2 µs      | 2 µs      |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.33 µs/iter   | 1.07 µs   | 1.29 µs   | 2.43 µs   | 2.43 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.33 µs/iter   | 1.1 µs    | 1.27 µs   | 2.41 µs   | 2.41 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.38 µs/iter   | 1.02 µs   | 1.43 µs   | 2.62 µs   | 2.62 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.41 µs/iter   | 1.07 µs   | 1.52 µs   | 2.45 µs   | 2.45 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.44 µs/iter   | 1.08 µs   | 1.36 µs   | 3.41 µs   | 3.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.45 µs/iter   | 1.31 µs   | 1.48 µs   | 1.7 µs    | 1.7 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.46 µs/iter   | 1.27 µs   | 1.48 µs   | 2.56 µs   | 2.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.56 µs/iter   | 1.34 µs   | 1.61 µs   | 2.17 µs   | 2.17 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.68 µs/iter   | 1.46 µs   | 1.73 µs   | 2.4 µs    | 2.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.75 µs/iter   | 1.44 µs   | 1.84 µs   | 2.38 µs   | 2.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.78 µs/iter   | 1.35 µs   | 1.91 µs   | 2.46 µs   | 2.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.78 µs/iter   | 1.4 µs    | 1.75 µs   | 3.81 µs   | 3.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.91 µs/iter   | 1.71 µs   | 1.98 µs   | 2.55 µs   | 2.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 2.45 µs/iter   | 1.4 µs    | 2.1 µs    | 4.3 µs    | 5.01 ms   |

