*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

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
| node v18.7.0 (x64-linux)               | .toString('ascii') | 464.57 ns/iter | 453.09 ns | 472.33 ns | 501.06 ns | 509.92 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 1 µs/iter      | 868.94 ns | 929.69 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.4 µs/iter    | 1.27 µs   | 1.41 µs   | 2.14 µs   | 2.14 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 486.78 ns/iter | 473.94 ns | 488.13 ns | 513.34 ns | 933.45 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 962.66 ns/iter | 841.94 ns | 887.17 ns | 1.79 µs   | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.46 µs/iter   | 1.3 µs    | 1.47 µs   | 2.16 µs   | 2.16 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 571.4 ns/iter | 564.26 ns | 570.92 ns | 599.98 ns | 599.98 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.04 µs/iter  | 912.69 ns | 981.78 ns | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.37 µs/iter  | 1.29 µs   | 1.38 µs   | 1.92 µs   | 1.92 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 471.69 ns/iter | 463.87 ns | 470.86 ns | 504.86 ns | 526.37 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1.02 µs/iter   | 888.97 ns | 916.65 ns | 1.77 µs   | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.46 µs/iter   | 1.3 µs    | 1.49 µs   | 1.96 µs   | 1.96 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 500.66 ns/iter | 492.77 ns | 502.46 ns | 531.18 ns | 538.17 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.07 µs/iter   | 926.72 ns | 966.81 ns | 1.89 µs   | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.55 µs/iter   | 1.44 µs   | 1.58 µs   | 2.29 µs   | 2.29 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 495.53 ns/iter | 486.89 ns | 497.84 ns | 521.53 ns | 523.94 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.19 µs/iter   | 1.04 µs   | 1.12 µs   | 1.99 µs   | 1.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.86 µs/iter   | 1.75 µs   | 1.9 µs    | 2.05 µs   | 2.05 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 479.92 ns/iter | 472.2 ns  | 483.65 ns | 517.08 ns | 519.92 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.06 µs/iter   | 907.44 ns | 1 µs      | 1.85 µs   | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.48 µs/iter   | 1.28 µs   | 1.52 µs   | 2.03 µs   | 2.03 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average       | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------- | ------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 477.8 ns/iter | 471.17 ns | 478.54 ns | 504.6 ns | 508.29 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.04 µs/iter  | 913.91 ns | 954.99 ns | 1.85 µs  | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.42 µs/iter  | 1.31 µs   | 1.44 µs   | 1.82 µs  | 1.82 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 532.81 ns/iter | 492.81 ns | 537.63 ns | 554.96 ns | 561.66 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1 µs/iter      | 882.31 ns | 915.82 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.36 µs/iter   | 1.31 µs   | 1.38 µs   | 1.47 µs   | 1.47 µs   |


#### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 464.57 ns/iter | 453.09 ns | 472.33 ns | 501.06 ns | 509.92 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 471.69 ns/iter | 463.87 ns | 470.86 ns | 504.86 ns | 526.37 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 477.8 ns/iter  | 471.17 ns | 478.54 ns | 504.6 ns  | 508.29 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 479.92 ns/iter | 472.2 ns  | 483.65 ns | 517.08 ns | 519.92 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 486.78 ns/iter | 473.94 ns | 488.13 ns | 513.34 ns | 933.45 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 495.53 ns/iter | 486.89 ns | 497.84 ns | 521.53 ns | 523.94 ns |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 500.66 ns/iter | 492.77 ns | 502.46 ns | 531.18 ns | 538.17 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 532.81 ns/iter | 492.81 ns | 537.63 ns | 554.96 ns | 561.66 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 571.4 ns/iter  | 564.26 ns | 570.92 ns | 599.98 ns | 599.98 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 962.66 ns/iter | 841.94 ns | 887.17 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 1 µs/iter      | 882.31 ns | 915.82 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 1 µs/iter      | 868.94 ns | 929.69 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 1.02 µs/iter   | 888.97 ns | 916.65 ns | 1.77 µs   | 1.77 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 1.04 µs/iter   | 913.91 ns | 954.99 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 1.04 µs/iter   | 912.69 ns | 981.78 ns | 1.8 µs    | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 1.06 µs/iter   | 907.44 ns | 1 µs      | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 1.07 µs/iter   | 926.72 ns | 966.81 ns | 1.89 µs   | 1.89 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.19 µs/iter   | 1.04 µs   | 1.12 µs   | 1.99 µs   | 1.99 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.36 µs/iter   | 1.31 µs   | 1.38 µs   | 1.47 µs   | 1.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.37 µs/iter   | 1.29 µs   | 1.38 µs   | 1.92 µs   | 1.92 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.4 µs/iter    | 1.27 µs   | 1.41 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.42 µs/iter   | 1.31 µs   | 1.44 µs   | 1.82 µs   | 1.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.46 µs/iter   | 1.3 µs    | 1.47 µs   | 2.16 µs   | 2.16 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.46 µs/iter   | 1.3 µs    | 1.49 µs   | 1.96 µs   | 1.96 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.48 µs/iter   | 1.28 µs   | 1.52 µs   | 2.03 µs   | 2.03 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.55 µs/iter   | 1.44 µs   | 1.58 µs   | 2.29 µs   | 2.29 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.86 µs/iter   | 1.75 µs   | 1.9 µs    | 2.05 µs   | 2.05 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.79 ns/iter | 152.49 ns | 155.85 ns | 210.99 ns | 292.23 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.54 ns/iter | 302.49 ns | 317.55 ns | 382.36 ns | 967.28 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 322.6 ns/iter  | 316.11 ns | 320.78 ns | 354.44 ns | 389.16 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 242.13 ns/iter | 235.58 ns | 248.34 ns | 268.59 ns | 271.17 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.64 ns/iter | 240.29 ns | 250.45 ns | 269.88 ns | 955.09 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.76 ns/iter | 357.16 ns | 411.59 ns | 437.8 ns  | 464.42 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.79 ns/iter | 152.49 ns | 155.85 ns | 210.99 ns | 292.23 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 242.13 ns/iter | 235.58 ns | 248.34 ns | 268.59 ns | 271.17 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.64 ns/iter | 240.29 ns | 250.45 ns | 269.88 ns | 955.09 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 318.54 ns/iter | 302.49 ns | 317.55 ns | 382.36 ns | 967.28 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 322.6 ns/iter  | 316.11 ns | 320.78 ns | 354.44 ns | 389.16 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.76 ns/iter | 357.16 ns | 411.59 ns | 437.8 ns  | 464.42 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 650.95 ns/iter | 533.66 ns | 673.35 ns | 1.98 µs | 1.98 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.48 µs/iter   | 1.33 µs   | 1.51 µs   | 1.56 µs | 1.56 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.79 µs/iter   | 1.75 µs   | 1.8 µs    | 2.04 µs | 2.04 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.25 µs/iter  | 1.94 µs | 2.16 µs | 6.02 µs | 6.02 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.61 µs/iter  | 2.6 µs  | 6.6 µs  | 9.5 µs  | 8.35 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 12.31 µs/iter | 6.5 µs  | 12.7 µs | 15.6 µs | 451.21 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average      | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------ | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.22 µs/iter | 2.01 µs | 2.27 µs | 2.37 µs | 2.37 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.1 µs/iter  | 4.4 µs  | 8.7 µs  | 13 µs   | 2.42 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.4 µs/iter | 12.1 µs | 19.4 µs | 24.4 µs | 492.21 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.22 µs/iter  | 2.01 µs | 2.27 µs | 2.37 µs | 2.37 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.25 µs/iter  | 1.94 µs | 2.16 µs | 6.02 µs | 6.02 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.61 µs/iter  | 2.6 µs  | 6.6 µs  | 9.5 µs  | 8.35 ms   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.1 µs/iter   | 4.4 µs  | 8.7 µs  | 13 µs   | 2.42 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 12.31 µs/iter | 6.5 µs  | 12.7 µs | 15.6 µs | 451.21 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 19.4 µs/iter  | 12.1 µs | 19.4 µs | 24.4 µs | 492.21 µs |

