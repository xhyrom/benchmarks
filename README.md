*Runned on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)
   - [buffer](#buffer)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 953.76 ns/iter | 827.67 ns | 929.02 ns | 2.57 µs | 2.57 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello') | 7.76 µs/iter   | 1.7 µs    | 15.4 µs   | 27.1 µs | 985.6 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 23.9 µs/iter   | 4.8 µs    | 27.9 µs   | 41.9 µs | 663.8 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.75 µs/iter  | 1.48 µs | 1.83 µs | 2.19 µs | 2.19 µs  |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 23.25 µs/iter | 3.3 µs  | 25.2 µs | 47.3 µs | 23.53 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 35.22 µs/iter | 10.1 µs | 37.3 µs | 65.4 µs | 795.8 µs |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min     | Max      |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 953.76 ns/iter | 827.67 ns | 929.02 ns | 2.57 µs | 2.57 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.75 µs/iter   | 1.48 µs   | 1.83 µs   | 2.19 µs | 2.19 µs  |
| node v16.16.0 (x64-linux)              | console.log('hello')             | 7.76 µs/iter   | 1.7 µs    | 15.4 µs   | 27.1 µs | 985.6 µs |
| node v16.16.0 (x64-linux)              | console.log({ hello: 'object' }) | 23.25 µs/iter  | 3.3 µs    | 25.2 µs   | 47.3 µs | 23.53 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 23.9 µs/iter   | 4.8 µs    | 27.9 µs   | 41.9 µs | 663.8 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 35.22 µs/iter  | 10.1 µs   | 37.3 µs   | 65.4 µs | 795.8 µs |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 477.8 ns/iter | 385.6 ns  | 486.44 ns | 716.92 ns | 924.18 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.02 µs/iter  | 962.72 ns | 1.02 µs   | 1.43 µs   | 1.43 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.49 µs/iter  | 1.38 µs   | 1.56 µs   | 1.88 µs   | 1.88 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 127.21 ns/iter | 116.98 ns | 121.75 ns | 266 ns    | 490.33 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 252.44 ns/iter | 236.04 ns | 256.79 ns | 322.62 ns | 336.43 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 268.89 ns/iter | 231.38 ns | 271.4 ns  | 473.66 ns | 473.77 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 188.48 ns/iter | 175.77 ns | 189.35 ns | 353.54 ns | 374.15 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 205.06 ns/iter | 181.84 ns | 203.32 ns | 393.14 ns | 416.48 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 314.47 ns/iter | 270.02 ns | 320.86 ns | 504.14 ns | 565.84 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 127.21 ns/iter | 116.98 ns | 121.75 ns | 266 ns    | 490.33 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 188.48 ns/iter | 175.77 ns | 189.35 ns | 353.54 ns | 374.15 ns |
| node v16.16.0 (x64-linux)              | JSON.stringify({hello: "world"}) | 205.06 ns/iter | 181.84 ns | 203.32 ns | 393.14 ns | 416.48 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 252.44 ns/iter | 236.04 ns | 256.79 ns | 322.62 ns | 336.43 ns |
| node v16.16.0 (x64-linux)              | JSON.parse('{"hello": "world"}') | 268.89 ns/iter | 231.38 ns | 271.4 ns  | 473.66 ns | 473.77 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 314.47 ns/iter | 270.02 ns | 320.86 ns | 504.14 ns | 565.84 ns |

## Buffer

### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | .toString('ascii') | 411.11 ns/iter | 373.18 ns | 415.58 ns | 517.88 ns | 540.3 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 793.68 ns/iter | 659.23 ns | 715.92 ns | 1.67 µs   | 1.67 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.16 µs/iter   | 999.39 ns | 1.19 µs   | 2.46 µs   | 2.46 µs  |


### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf8') | 417.21 ns/iter | 394.73 ns | 419.98 ns | 516.63 ns | 564.66 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 757.96 ns/iter | 637.21 ns | 694.48 ns | 1.51 µs   | 1.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.21 µs/iter   | 999.63 ns | 1.26 µs   | 1.77 µs   | 1.77 µs   |


### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf16le') | 422 ns/iter    | 396.56 ns | 427.07 ns | 541.51 ns | 618.43 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 841.09 ns/iter | 720.35 ns | 756.05 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.23 µs/iter   | 981.18 ns | 1.3 µs    | 2.02 µs   | 2.02 µs   |


### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ucs2') | 410.14 ns/iter | 392.08 ns | 409.24 ns | 513.54 ns | 610.75 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 772.76 ns/iter | 654.03 ns | 712.88 ns | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.17 µs/iter   | 915.72 ns | 1.31 µs   | 2.07 µs   | 2.07 µs   |


### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('base64') | 447.38 ns/iter | 402.11 ns | 441.32 ns | 694.18 ns | 696 ns  |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 901.06 ns/iter | 692.05 ns | 802.88 ns | 3.33 µs   | 3.33 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.14 µs/iter   | 998.16 ns | 1.17 µs   | 1.52 µs   | 1.52 µs |


### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 467.42 ns/iter | 402.67 ns | 449.12 ns | 1.22 µs | 1.59 µs |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 885.15 ns/iter | 704.51 ns | 835.36 ns | 2.11 µs | 2.11 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.37 µs/iter   | 1.21 µs   | 1.42 µs   | 1.61 µs | 1.61 µs |


### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1') | 404.84 ns/iter | 385.04 ns | 406.95 ns | 580.04 ns | 585.06 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 817.8 ns/iter  | 683.05 ns | 750.22 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.09 µs/iter   | 961.75 ns | 1.11 µs   | 1.46 µs   | 1.46 µs   |


### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('binary') | 417.98 ns/iter | 387.33 ns | 430.69 ns | 531.28 ns | 688.53 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 825.82 ns/iter | 711.78 ns | 756.73 ns | 1.72 µs   | 1.72 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.25 µs/iter   | 978.66 ns | 1.15 µs   | 4.25 µs   | 4.25 µs   |


### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('hex') | 445.82 ns/iter | 403.09 ns | 446.63 ns | 705.64 ns | 851.73 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 795.45 ns/iter | 689.35 ns | 731.67 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.78 µs/iter   | 1.1 µs    | 1.8 µs    | 4.3 µs    | 3 ms      |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1')    | 404.84 ns/iter | 385.04 ns | 406.95 ns | 580.04 ns | 585.06 ns |
| node v16.16.0 (x64-linux)              | .toString('ucs2')      | 410.14 ns/iter | 392.08 ns | 409.24 ns | 513.54 ns | 610.75 ns |
| node v16.16.0 (x64-linux)              | .toString('ascii')     | 411.11 ns/iter | 373.18 ns | 415.58 ns | 517.88 ns | 540.3 ns  |
| node v16.16.0 (x64-linux)              | .toString('utf8')      | 417.21 ns/iter | 394.73 ns | 419.98 ns | 516.63 ns | 564.66 ns |
| node v16.16.0 (x64-linux)              | .toString('binary')    | 417.98 ns/iter | 387.33 ns | 430.69 ns | 531.28 ns | 688.53 ns |
| node v16.16.0 (x64-linux)              | .toString('utf16le')   | 422 ns/iter    | 396.56 ns | 427.07 ns | 541.51 ns | 618.43 ns |
| node v16.16.0 (x64-linux)              | .toString('hex')       | 445.82 ns/iter | 403.09 ns | 446.63 ns | 705.64 ns | 851.73 ns |
| node v16.16.0 (x64-linux)              | .toString('base64')    | 447.38 ns/iter | 402.11 ns | 441.32 ns | 694.18 ns | 696 ns    |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 467.42 ns/iter | 402.67 ns | 449.12 ns | 1.22 µs   | 1.59 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 757.96 ns/iter | 637.21 ns | 694.48 ns | 1.51 µs   | 1.51 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 772.76 ns/iter | 654.03 ns | 712.88 ns | 1.49 µs   | 1.49 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 793.68 ns/iter | 659.23 ns | 715.92 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 795.45 ns/iter | 689.35 ns | 731.67 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 817.8 ns/iter  | 683.05 ns | 750.22 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 825.82 ns/iter | 711.78 ns | 756.73 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 841.09 ns/iter | 720.35 ns | 756.05 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 885.15 ns/iter | 704.51 ns | 835.36 ns | 2.11 µs   | 2.11 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 901.06 ns/iter | 692.05 ns | 802.88 ns | 3.33 µs   | 3.33 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.09 µs/iter   | 961.75 ns | 1.11 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.14 µs/iter   | 998.16 ns | 1.17 µs   | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.16 µs/iter   | 999.39 ns | 1.19 µs   | 2.46 µs   | 2.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.17 µs/iter   | 915.72 ns | 1.31 µs   | 2.07 µs   | 2.07 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.21 µs/iter   | 999.63 ns | 1.26 µs   | 1.77 µs   | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.23 µs/iter   | 981.18 ns | 1.3 µs    | 2.02 µs   | 2.02 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.25 µs/iter   | 978.66 ns | 1.15 µs   | 4.25 µs   | 4.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.37 µs/iter   | 1.21 µs   | 1.42 µs   | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.78 µs/iter   | 1.1 µs    | 1.8 µs    | 4.3 µs    | 3 ms      |

