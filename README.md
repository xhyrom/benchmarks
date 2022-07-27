*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [json](#json)
   - [buffer](#buffer)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 473.45 ns/iter | 385.38 ns | 482.54 ns | 722.55 ns | 746.9 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.11 µs/iter   | 961.91 ns | 1.21 µs   | 1.63 µs   | 1.63 µs  |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.59 µs/iter   | 1.36 µs   | 1.58 µs   | 4.42 µs   | 4.42 µs  |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 141.86 ns/iter | 121.96 ns | 137.35 ns | 378.7 ns  | 476.12 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 248.51 ns/iter | 239.91 ns | 246.81 ns | 328.53 ns | 420.45 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 256.37 ns/iter | 231.49 ns | 253.15 ns | 501.5 ns  | 789.87 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 185.47 ns/iter | 175.03 ns | 188.12 ns | 261.18 ns | 341.68 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 203.29 ns/iter | 183.28 ns | 202.43 ns | 361.77 ns | 538.88 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.34 ns/iter | 274.21 ns | 455.72 ns | 758.47 ns | 934.58 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 141.86 ns/iter | 121.96 ns | 137.35 ns | 378.7 ns  | 476.12 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 185.47 ns/iter | 175.03 ns | 188.12 ns | 261.18 ns | 341.68 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 203.29 ns/iter | 183.28 ns | 202.43 ns | 361.77 ns | 538.88 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 248.51 ns/iter | 239.91 ns | 246.81 ns | 328.53 ns | 420.45 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 256.37 ns/iter | 231.49 ns | 253.15 ns | 501.5 ns  | 789.87 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.34 ns/iter | 274.21 ns | 455.72 ns | 758.47 ns | 934.58 ns |

## Buffer

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ascii') | 404.57 ns/iter | 367.98 ns | 408.55 ns | 549.35 ns | 914.84 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 847.24 ns/iter | 686.42 ns | 795.78 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.09 µs/iter   | 978.52 ns | 1.07 µs   | 1.95 µs   | 1.95 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf8') | 438.31 ns/iter | 397.46 ns | 440.57 ns | 712.35 ns | 715.38 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 839.23 ns/iter | 650.53 ns | 786.9 ns  | 2.91 µs   | 2.91 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.12 µs/iter   | 994.91 ns | 1.15 µs   | 1.61 µs   | 1.61 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf16le') | 455.2 ns/iter  | 408.54 ns | 462.31 ns | 682.15 ns | 703.36 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 920.64 ns/iter | 696.86 ns | 926.76 ns | 3.05 µs   | 3.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.04 µs/iter   | 936.97 ns | 1.03 µs   | 1.8 µs    | 1.8 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('ucs2') | 447.33 ns/iter | 392.12 ns | 432.67 ns | 732.97 ns | 2.46 µs |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 857.2 ns/iter  | 660.41 ns | 819.52 ns | 1.75 µs   | 1.75 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.03 µs/iter   | 942.89 ns | 1.03 µs   | 1.56 µs   | 1.56 µs |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('base64') | 435.41 ns/iter | 399.84 ns | 444.6 ns  | 574.81 ns | 614.24 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 873.78 ns/iter | 689.82 ns | 824.44 ns | 1.87 µs   | 1.87 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.14 µs/iter   | 1.03 µs   | 1.12 µs   | 2.01 µs   | 2.01 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 425.15 ns/iter | 404.2 ns  | 427.72 ns | 507.08 ns | 751.75 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.28 µs/iter   | 808.62 ns | 1.46 µs   | 3.35 µs   | 3.35 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.47 µs/iter   | 1.25 µs   | 1.34 µs   | 5.8 µs    | 5.8 µs    |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1') | 410.49 ns/iter | 387.88 ns | 414.64 ns | 561.79 ns | 659.43 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.03 µs/iter   | 970.38 ns | 1.03 µs   | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.09 µs/iter   | 768.08 ns | 1.27 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('binary') | 413.76 ns/iter | 391 ns    | 419.82 ns | 551.5 ns | 608.19 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 958.51 ns/iter | 705.82 ns | 984.7 ns  | 2.48 µs  | 2.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.05 µs/iter   | 966.49 ns | 1.05 µs   | 1.47 µs  | 1.47 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('hex') | 424.77 ns/iter | 403.9 ns  | 432.17 ns | 493.24 ns | 581.86 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 856.1 ns/iter  | 656.81 ns | 719.97 ns | 4.77 µs   | 4.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.13 µs/iter   | 985.55 ns | 1.12 µs   | 1.78 µs   | 1.78 µs   |


#### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ascii')     | 404.57 ns/iter | 367.98 ns | 408.55 ns | 549.35 ns | 914.84 ns |
| node v16.16.0 (x64-linux)              | .toString('latin1')    | 410.49 ns/iter | 387.88 ns | 414.64 ns | 561.79 ns | 659.43 ns |
| node v16.16.0 (x64-linux)              | .toString('binary')    | 413.76 ns/iter | 391 ns    | 419.82 ns | 551.5 ns  | 608.19 ns |
| node v16.16.0 (x64-linux)              | .toString('hex')       | 424.77 ns/iter | 403.9 ns  | 432.17 ns | 493.24 ns | 581.86 ns |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 425.15 ns/iter | 404.2 ns  | 427.72 ns | 507.08 ns | 751.75 ns |
| node v16.16.0 (x64-linux)              | .toString('base64')    | 435.41 ns/iter | 399.84 ns | 444.6 ns  | 574.81 ns | 614.24 ns |
| node v16.16.0 (x64-linux)              | .toString('utf8')      | 438.31 ns/iter | 397.46 ns | 440.57 ns | 712.35 ns | 715.38 ns |
| node v16.16.0 (x64-linux)              | .toString('ucs2')      | 447.33 ns/iter | 392.12 ns | 432.67 ns | 732.97 ns | 2.46 µs   |
| node v16.16.0 (x64-linux)              | .toString('utf16le')   | 455.2 ns/iter  | 408.54 ns | 462.31 ns | 682.15 ns | 703.36 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 839.23 ns/iter | 650.53 ns | 786.9 ns  | 2.91 µs   | 2.91 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 847.24 ns/iter | 686.42 ns | 795.78 ns | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 856.1 ns/iter  | 656.81 ns | 719.97 ns | 4.77 µs   | 4.77 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 857.2 ns/iter  | 660.41 ns | 819.52 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 873.78 ns/iter | 689.82 ns | 824.44 ns | 1.87 µs   | 1.87 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 920.64 ns/iter | 696.86 ns | 926.76 ns | 3.05 µs   | 3.05 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 958.51 ns/iter | 705.82 ns | 984.7 ns  | 2.48 µs   | 2.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.03 µs/iter   | 970.38 ns | 1.03 µs   | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.03 µs/iter   | 942.89 ns | 1.03 µs   | 1.56 µs   | 1.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.04 µs/iter   | 936.97 ns | 1.03 µs   | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.05 µs/iter   | 966.49 ns | 1.05 µs   | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.09 µs/iter   | 978.52 ns | 1.07 µs   | 1.95 µs   | 1.95 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.09 µs/iter   | 768.08 ns | 1.27 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.12 µs/iter   | 994.91 ns | 1.15 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.13 µs/iter   | 985.55 ns | 1.12 µs   | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.14 µs/iter   | 1.03 µs   | 1.12 µs   | 2.01 µs   | 2.01 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.28 µs/iter   | 808.62 ns | 1.46 µs   | 3.35 µs   | 3.35 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.47 µs/iter   | 1.25 µs   | 1.34 µs   | 5.8 µs    | 5.8 µs    |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 900.56 ns/iter | 806.91 ns | 909.35 ns | 1.37 µs | 1.37 µs |
| node v16.16.0 (x64-linux)              | console.log('hello') | 9.37 µs/iter   | 1.7 µs    | 16.6 µs   | 31.9 µs | 968 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 24.6 µs/iter   | 5 µs      | 28.1 µs   | 44.1 µs | 1.01 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.43 µs/iter  | 1.33 µs | 1.46 µs | 1.82 µs | 1.82 µs  |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 18.47 µs/iter | 3.3 µs  | 24.4 µs | 39.3 µs | 8.73 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 41.73 µs/iter | 10.4 µs | 46.5 µs | 94.7 µs | 591.9 µs |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 900.56 ns/iter | 806.91 ns | 909.35 ns | 1.37 µs | 1.37 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.43 µs/iter   | 1.33 µs   | 1.46 µs   | 1.82 µs | 1.82 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 9.37 µs/iter   | 1.7 µs    | 16.6 µs   | 31.9 µs | 968 µs   |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 18.47 µs/iter  | 3.3 µs    | 24.4 µs   | 39.3 µs | 8.73 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 24.6 µs/iter   | 5 µs      | 28.1 µs   | 44.1 µs | 1.01 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 41.73 µs/iter  | 10.4 µs   | 46.5 µs   | 94.7 µs | 591.9 µs |

