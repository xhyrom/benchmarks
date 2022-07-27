*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 758.56 ns/iter | 620.74 ns | 815.36 ns | 1.03 µs | 1.03 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.63 µs/iter   | 1.51 µs   | 1.67 µs   | 1.78 µs | 1.78 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.22 µs/iter   | 2.07 µs   | 2.23 µs   | 2.69 µs | 2.69 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 189.34 ns/iter | 169.37 ns | 186.4 ns  | 335.68 ns | 462.67 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 372.69 ns/iter | 342.9 ns  | 379.75 ns | 406.34 ns | 407.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 403.26 ns/iter | 337.96 ns | 409.86 ns | 615.5 ns  | 749.86 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 294.76 ns/iter | 266.95 ns | 298.91 ns | 319.59 ns | 330.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 297.63 ns/iter | 260.78 ns | 302.78 ns | 446.59 ns | 891.59 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 455.35 ns/iter | 400.32 ns | 478.9 ns  | 546.73 ns | 561.07 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 189.34 ns/iter | 169.37 ns | 186.4 ns  | 335.68 ns | 462.67 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 294.76 ns/iter | 266.95 ns | 298.91 ns | 319.59 ns | 330.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 297.63 ns/iter | 260.78 ns | 302.78 ns | 446.59 ns | 891.59 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 372.69 ns/iter | 342.9 ns  | 379.75 ns | 406.34 ns | 407.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 403.26 ns/iter | 337.96 ns | 409.86 ns | 615.5 ns  | 749.86 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 455.35 ns/iter | 400.32 ns | 478.9 ns  | 546.73 ns | 561.07 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 588.29 ns/iter | 497.58 ns | 591.18 ns | 1.2 µs  | 1.2 µs  |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1.22 µs/iter   | 1 µs      | 1.24 µs   | 2.07 µs | 2.07 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.58 µs/iter   | 1.45 µs   | 1.6 µs    | 2.41 µs | 2.41 µs |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average       | p75       | p99      | Min     | Max     |
| -------------------------------------- | ----------------- | ------------- | --------- | -------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 656.9 ns/iter | 578.2 ns  | 657.2 ns | 1.41 µs | 1.41 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 1.14 µs/iter  | 962.33 ns | 1.06 µs  | 2.04 µs | 2.04 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.64 µs/iter  | 1.53 µs   | 1.66 µs  | 2.49 µs | 2.49 µs |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 586.94 ns/iter | 513.02 ns | 586.53 ns | 1.44 µs | 1.44 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.2 µs/iter    | 1.07 µs   | 1.13 µs   | 2 µs    | 2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.54 µs/iter   | 1.44 µs   | 1.55 µs   | 1.93 µs | 1.93 µs |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 572.26 ns/iter | 507.42 ns | 575.35 ns | 868.13 ns | 868.13 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.16 µs/iter   | 987.08 ns | 1.06 µs   | 1.94 µs   | 1.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.54 µs/iter   | 1.46 µs   | 1.57 µs   | 1.84 µs   | 1.84 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75      | p99       | Min     | Max     |
| -------------------------------------- | ------------------- | -------------- | -------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 616.36 ns/iter | 558.8 ns | 622.57 ns | 1.03 µs | 1.03 µs |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.21 µs/iter   | 1.05 µs  | 1.13 µs   | 2.02 µs | 2.02 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.62 µs/iter   | 1.54 µs  | 1.65 µs   | 1.82 µs | 1.82 µs |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 619.85 ns/iter | 554.15 ns | 617.48 ns | 1.07 µs | 1.07 µs |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.26 µs/iter   | 1.05 µs   | 1.17 µs   | 2 µs    | 2 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 2 µs/iter      | 1.91 µs   | 2.02 µs   | 2.29 µs | 2.29 µs |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 626.43 ns/iter | 572.71 ns | 639.52 ns | 811.29 ns | 811.29 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.18 µs/iter   | 1.04 µs   | 1.1 µs    | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.59 µs/iter   | 1.48 µs   | 1.61 µs   | 1.67 µs   | 1.67 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 596.04 ns/iter | 544.79 ns | 589.98 ns | 1.3 µs  | 1.3 µs  |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.21 µs/iter   | 1.03 µs   | 1.11 µs   | 1.99 µs | 1.99 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.62 µs/iter   | 1.45 µs   | 1.66 µs   | 1.78 µs | 1.78 µs |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 583.16 ns/iter | 557.66 ns | 585.82 ns | 708.54 ns | 708.54 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.17 µs/iter   | 1.02 µs   | 1.07 µs   | 1.95 µs   | 1.95 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.63 µs/iter   | 1.51 µs   | 1.68 µs   | 2.01 µs   | 2.01 µs   |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 572.26 ns/iter | 507.42 ns | 575.35 ns | 868.13 ns | 868.13 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 583.16 ns/iter | 557.66 ns | 585.82 ns | 708.54 ns | 708.54 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 586.94 ns/iter | 513.02 ns | 586.53 ns | 1.44 µs   | 1.44 µs   |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 588.29 ns/iter | 497.58 ns | 591.18 ns | 1.2 µs    | 1.2 µs    |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 596.04 ns/iter | 544.79 ns | 589.98 ns | 1.3 µs    | 1.3 µs    |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 616.36 ns/iter | 558.8 ns  | 622.57 ns | 1.03 µs   | 1.03 µs   |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 619.85 ns/iter | 554.15 ns | 617.48 ns | 1.07 µs   | 1.07 µs   |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 626.43 ns/iter | 572.71 ns | 639.52 ns | 811.29 ns | 811.29 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 656.9 ns/iter  | 578.2 ns  | 657.2 ns  | 1.41 µs   | 1.41 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 1.14 µs/iter   | 962.33 ns | 1.06 µs   | 2.04 µs   | 2.04 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.16 µs/iter   | 987.08 ns | 1.06 µs   | 1.94 µs   | 1.94 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1.17 µs/iter   | 1.02 µs   | 1.07 µs   | 1.95 µs   | 1.95 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.18 µs/iter   | 1.04 µs   | 1.1 µs    | 2.03 µs   | 2.03 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.2 µs/iter    | 1.07 µs   | 1.13 µs   | 2 µs      | 2 µs      |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.21 µs/iter   | 1.05 µs   | 1.13 µs   | 2.02 µs   | 2.02 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.21 µs/iter   | 1.03 µs   | 1.11 µs   | 1.99 µs   | 1.99 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1.22 µs/iter   | 1 µs      | 1.24 µs   | 2.07 µs   | 2.07 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.26 µs/iter   | 1.05 µs   | 1.17 µs   | 2 µs      | 2 µs      |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.54 µs/iter   | 1.44 µs   | 1.55 µs   | 1.93 µs   | 1.93 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.54 µs/iter   | 1.46 µs   | 1.57 µs   | 1.84 µs   | 1.84 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.58 µs/iter   | 1.45 µs   | 1.6 µs    | 2.41 µs   | 2.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.59 µs/iter   | 1.48 µs   | 1.61 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.62 µs/iter   | 1.54 µs   | 1.65 µs   | 1.82 µs   | 1.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.62 µs/iter   | 1.45 µs   | 1.66 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.63 µs/iter   | 1.51 µs   | 1.68 µs   | 2.01 µs   | 2.01 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.64 µs/iter   | 1.53 µs   | 1.66 µs   | 2.49 µs   | 2.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 2 µs/iter      | 1.91 µs   | 2.02 µs   | 2.29 µs   | 2.29 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75    | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------ | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.43 µs/iter  | 2.1 µs | 2.39 µs | 5.22 µs | 5.22 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.89 µs/iter  | 2.7 µs | 6.8 µs  | 10.3 µs | 8.26 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.49 µs/iter | 7.2 µs | 14 µs   | 20.8 µs | 761.83 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.59 µs/iter  | 2.45 µs | 2.64 µs | 2.72 µs | 2.72 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.12 µs/iter  | 4.8 µs  | 9.7 µs  | 16 µs   | 2.5 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.16 µs/iter | 13.1 µs | 21.6 µs | 33.9 µs | 578.23 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.43 µs/iter  | 2.1 µs  | 2.39 µs | 5.22 µs | 5.22 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.59 µs/iter  | 2.45 µs | 2.64 µs | 2.72 µs | 2.72 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.89 µs/iter  | 2.7 µs  | 6.8 µs  | 10.3 µs | 8.26 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 8.12 µs/iter  | 4.8 µs  | 9.7 µs  | 16 µs   | 2.5 ms    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 13.49 µs/iter | 7.2 µs  | 14 µs   | 20.8 µs | 761.83 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 21.16 µs/iter | 13.1 µs | 21.6 µs | 33.9 µs | 578.23 µs |

