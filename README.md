*Ran on Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz*

## Table Of Contents

- Benchmarks
   - [buffer](#buffer)
   - [json](#json)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 585.92 ns/iter | 470.09 ns | 604.29 ns | 859.48 ns | 859.48 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1.3 µs/iter    | 1.02 µs   | 1.31 µs   | 2.27 µs   | 2.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.64 µs/iter   | 1.39 µs   | 1.69 µs   | 2.83 µs   | 2.83 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 601.44 ns/iter | 520.1 ns  | 618.01 ns | 1.04 µs | 1.04 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 1.19 µs/iter   | 908.98 ns | 1.2 µs    | 2.09 µs | 2.09 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.74 µs/iter   | 1.51 µs   | 1.73 µs   | 2.8 µs  | 2.8 µs  |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 544.79 ns/iter | 394.65 ns | 567.89 ns | 713.84 ns | 731.8 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.37 µs/iter   | 1.06 µs   | 1.36 µs   | 2.33 µs   | 2.33 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.56 µs/iter   | 1.43 µs   | 1.58 µs   | 2.03 µs   | 2.03 µs  |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 549.05 ns/iter | 472.34 ns | 576.06 ns | 671.11 ns | 702.76 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.35 µs/iter   | 1.05 µs   | 1.28 µs   | 2.25 µs   | 2.25 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.44 µs/iter   | 1.28 µs   | 1.49 µs   | 2.1 µs    | 2.1 µs    |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 604.81 ns/iter | 495.57 ns | 625.85 ns | 681.83 ns | 681.83 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.46 µs/iter   | 1.17 µs   | 1.4 µs    | 2.51 µs   | 2.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.75 µs/iter   | 1.59 µs   | 1.79 µs   | 2.02 µs   | 2.02 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 584.16 ns/iter | 485.32 ns | 608.41 ns | 679.28 ns | 679.28 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.46 µs/iter   | 1.13 µs   | 1.41 µs   | 2.47 µs   | 2.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 2.06 µs/iter   | 1.81 µs   | 2.1 µs    | 3.1 µs    | 3.1 µs    |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 571.68 ns/iter | 470.3 ns | 591.29 ns | 849.33 ns | 849.33 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.44 µs/iter   | 1.14 µs  | 1.38 µs   | 2.45 µs   | 2.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.7 µs/iter    | 1.51 µs  | 1.71 µs   | 3.03 µs   | 3.03 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 558.59 ns/iter | 464.91 ns | 579.56 ns | 628.67 ns | 632.14 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.43 µs/iter   | 1.11 µs   | 1.38 µs   | 2.68 µs   | 2.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.7 µs/iter    | 1.53 µs   | 1.74 µs   | 2.32 µs   | 2.32 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 573.98 ns/iter | 467.73 ns | 600.15 ns | 959.65 ns | 959.65 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.35 µs/iter   | 999.6 ns  | 1.32 µs   | 2.46 µs   | 2.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.84 µs/iter   | 1.47 µs   | 1.88 µs   | 3.5 µs    | 3.5 µs    |


#### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 544.79 ns/iter | 394.65 ns | 567.89 ns | 713.84 ns | 731.8 ns  |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 549.05 ns/iter | 472.34 ns | 576.06 ns | 671.11 ns | 702.76 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 558.59 ns/iter | 464.91 ns | 579.56 ns | 628.67 ns | 632.14 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 571.68 ns/iter | 470.3 ns  | 591.29 ns | 849.33 ns | 849.33 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 573.98 ns/iter | 467.73 ns | 600.15 ns | 959.65 ns | 959.65 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 584.16 ns/iter | 485.32 ns | 608.41 ns | 679.28 ns | 679.28 ns |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 585.92 ns/iter | 470.09 ns | 604.29 ns | 859.48 ns | 859.48 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 601.44 ns/iter | 520.1 ns  | 618.01 ns | 1.04 µs   | 1.04 µs   |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 604.81 ns/iter | 495.57 ns | 625.85 ns | 681.83 ns | 681.83 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 1.19 µs/iter   | 908.98 ns | 1.2 µs    | 2.09 µs   | 2.09 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1.3 µs/iter    | 1.02 µs   | 1.31 µs   | 2.27 µs   | 2.27 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.35 µs/iter   | 1.05 µs   | 1.28 µs   | 2.25 µs   | 2.25 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1.35 µs/iter   | 999.6 ns  | 1.32 µs   | 2.46 µs   | 2.46 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.37 µs/iter   | 1.06 µs   | 1.36 µs   | 2.33 µs   | 2.33 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.43 µs/iter   | 1.11 µs   | 1.38 µs   | 2.68 µs   | 2.68 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.44 µs/iter   | 1.14 µs   | 1.38 µs   | 2.45 µs   | 2.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.44 µs/iter   | 1.28 µs   | 1.49 µs   | 2.1 µs    | 2.1 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.46 µs/iter   | 1.13 µs   | 1.41 µs   | 2.47 µs   | 2.47 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.46 µs/iter   | 1.17 µs   | 1.4 µs    | 2.51 µs   | 2.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.56 µs/iter   | 1.43 µs   | 1.58 µs   | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.64 µs/iter   | 1.39 µs   | 1.69 µs   | 2.83 µs   | 2.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.7 µs/iter    | 1.53 µs   | 1.74 µs   | 2.32 µs   | 2.32 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.7 µs/iter    | 1.51 µs   | 1.71 µs   | 3.03 µs   | 3.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.74 µs/iter   | 1.51 µs   | 1.73 µs   | 2.8 µs    | 2.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.75 µs/iter   | 1.59 µs   | 1.79 µs   | 2.02 µs   | 2.02 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.84 µs/iter   | 1.47 µs   | 1.88 µs   | 3.5 µs    | 3.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 2.06 µs/iter   | 1.81 µs   | 2.1 µs    | 3.1 µs    | 3.1 µs    |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 195.27 ns/iter | 139.35 ns | 202.73 ns | 419.03 ns | 540.54 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 374.54 ns/iter | 316.67 ns | 388.11 ns | 468.11 ns | 522.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 409.45 ns/iter | 339.01 ns | 425.13 ns | 523.78 ns | 826.04 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 294.87 ns/iter | 235.2 ns  | 315.77 ns | 349.29 ns | 380.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 309.49 ns/iter | 243.36 ns | 320.25 ns | 651.5 ns  | 941.51 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 471.96 ns/iter | 358.35 ns | 504.91 ns | 588.32 ns | 615.72 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 195.27 ns/iter | 139.35 ns | 202.73 ns | 419.03 ns | 540.54 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 294.87 ns/iter | 235.2 ns  | 315.77 ns | 349.29 ns | 380.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 309.49 ns/iter | 243.36 ns | 320.25 ns | 651.5 ns  | 941.51 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 374.54 ns/iter | 316.67 ns | 388.11 ns | 468.11 ns | 522.02 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 409.45 ns/iter | 339.01 ns | 425.13 ns | 523.78 ns | 826.04 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 471.96 ns/iter | 358.35 ns | 504.91 ns | 588.32 ns | 615.72 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 705.73 ns/iter | 580.11 ns | 711.21 ns | 1.51 µs | 1.51 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.59 µs/iter   | 1.43 µs   | 1.64 µs   | 1.88 µs | 1.88 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.21 µs/iter   | 1.86 µs   | 2.26 µs   | 2.57 µs | 2.57 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max     |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | ------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.75 µs/iter  | 2.43 µs | 2.83 µs | 2.91 µs | 2.91 µs |
| node v18.7.0 (x64-linux)               | console.log('hello') | 6.36 µs/iter  | 2.7 µs  | 7.5 µs  | 24.9 µs | 7.71 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 15.46 µs/iter | 6.4 µs  | 15.6 µs | 40.5 µs | 2.21 ms |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.02 µs/iter  | 2.57 µs | 3.1 µs  | 3.66 µs | 3.66 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 11.94 µs/iter | 4.9 µs  | 12.1 µs | 31.8 µs | 4.25 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.45 µs/iter | 17.9 µs | 32.6 µs | 68.3 µs | 519.1 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.75 µs/iter  | 2.43 µs | 2.83 µs | 2.91 µs | 2.91 µs  |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.02 µs/iter  | 2.57 µs | 3.1 µs  | 3.66 µs | 3.66 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 6.36 µs/iter  | 2.7 µs  | 7.5 µs  | 24.9 µs | 7.71 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 11.94 µs/iter | 4.9 µs  | 12.1 µs | 31.8 µs | 4.25 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 15.46 µs/iter | 6.4 µs  | 15.6 µs | 40.5 µs | 2.21 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 32.45 µs/iter | 17.9 µs | 32.6 µs | 68.3 µs | 519.1 µs |

