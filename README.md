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
| node v18.7.0 (x64-linux)               | .toString('ascii') | 408.62 ns/iter | 395.78 ns | 411.14 ns | 531.05 ns | 659.41 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 907.84 ns/iter | 788.13 ns | 867.15 ns | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.25 µs/iter   | 1.15 µs   | 1.23 µs   | 2.09 µs   | 2.09 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min      | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | -------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 424.94 ns/iter | 412.2 ns  | 424.23 ns | 497.3 ns | 1.03 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 840.98 ns/iter | 739.89 ns | 777.13 ns | 1.5 µs   | 1.5 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.32 µs/iter   | 1.24 µs   | 1.33 µs   | 1.69 µs  | 1.69 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 410.76 ns/iter | 402.86 ns | 413.25 ns | 460.31 ns | 472.8 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 949.66 ns/iter | 838.54 ns | 875.87 ns | 1.79 µs   | 1.79 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.24 µs/iter   | 1.14 µs   | 1.27 µs   | 1.5 µs    | 1.5 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 414.42 ns/iter | 405.77 ns | 409.84 ns | 463.22 ns | 942.97 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 910.54 ns/iter | 813.46 ns | 836.2 ns  | 1.56 µs   | 1.56 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.23 µs/iter   | 1.19 µs   | 1.25 µs   | 1.39 µs   | 1.39 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 434.13 ns/iter | 429.25 ns | 433.85 ns | 464.44 ns | 478.48 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 952.46 ns/iter | 842.22 ns | 878.25 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.31 µs/iter   | 1.22 µs   | 1.32 µs   | 1.38 µs   | 1.38 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 440.43 ns/iter | 424.45 ns | 446.91 ns | 462.25 ns | 971.8 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 962.66 ns/iter | 830.34 ns | 895.63 ns | 1.61 µs   | 1.61 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.56 µs/iter   | 1.48 µs   | 1.57 µs   | 1.66 µs   | 1.66 µs  |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 412.84 ns/iter | 408.68 ns | 412.53 ns | 437.04 ns | 440.74 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 918.16 ns/iter | 813.29 ns | 847.23 ns | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.27 µs/iter   | 1.17 µs   | 1.29 µs   | 1.33 µs   | 1.33 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 414.26 ns/iter | 408.11 ns | 413.62 ns | 444.92 ns | 499.65 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 919.31 ns/iter | 815.48 ns | 845.95 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.29 µs/iter   | 1.21 µs   | 1.31 µs   | 1.4 µs    | 1.4 µs    |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 434.59 ns/iter | 423.77 ns | 434.72 ns | 601.91 ns | 827.13 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 882.08 ns/iter | 786.87 ns | 822.16 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.26 µs/iter   | 1.18 µs   | 1.28 µs   | 1.41 µs   | 1.41 µs   |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii')     | 408.62 ns/iter | 395.78 ns | 411.14 ns | 531.05 ns | 659.41 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')   | 410.76 ns/iter | 402.86 ns | 413.25 ns | 460.31 ns | 472.8 ns  |
| node v18.7.0 (x64-linux)               | .toString('latin1')    | 412.84 ns/iter | 408.68 ns | 412.53 ns | 437.04 ns | 440.74 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')    | 414.26 ns/iter | 408.11 ns | 413.62 ns | 444.92 ns | 499.65 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')      | 414.42 ns/iter | 405.77 ns | 409.84 ns | 463.22 ns | 942.97 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')      | 424.94 ns/iter | 412.2 ns  | 424.23 ns | 497.3 ns  | 1.03 µs   |
| node v18.7.0 (x64-linux)               | .toString('base64')    | 434.13 ns/iter | 429.25 ns | 433.85 ns | 464.44 ns | 478.48 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')       | 434.59 ns/iter | 423.77 ns | 434.72 ns | 601.91 ns | 827.13 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 440.43 ns/iter | 424.45 ns | 446.91 ns | 462.25 ns | 971.8 ns  |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 840.98 ns/iter | 739.89 ns | 777.13 ns | 1.5 µs    | 1.5 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 882.08 ns/iter | 786.87 ns | 822.16 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 907.84 ns/iter | 788.13 ns | 867.15 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 910.54 ns/iter | 813.46 ns | 836.2 ns  | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 918.16 ns/iter | 813.29 ns | 847.23 ns | 1.6 µs    | 1.6 µs    |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 919.31 ns/iter | 815.48 ns | 845.95 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 949.66 ns/iter | 838.54 ns | 875.87 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 952.46 ns/iter | 842.22 ns | 878.25 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 962.66 ns/iter | 830.34 ns | 895.63 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.23 µs/iter   | 1.19 µs   | 1.25 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 1.24 µs/iter   | 1.14 µs   | 1.27 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.25 µs/iter   | 1.15 µs   | 1.23 µs   | 2.09 µs   | 2.09 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.26 µs/iter   | 1.18 µs   | 1.28 µs   | 1.41 µs   | 1.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.27 µs/iter   | 1.17 µs   | 1.29 µs   | 1.33 µs   | 1.33 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.29 µs/iter   | 1.21 µs   | 1.31 µs   | 1.4 µs    | 1.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.31 µs/iter   | 1.22 µs   | 1.32 µs   | 1.38 µs   | 1.38 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.32 µs/iter   | 1.24 µs   | 1.33 µs   | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.56 µs/iter   | 1.48 µs   | 1.57 µs   | 1.66 µs   | 1.66 µs   |

## Json

### unnamed

#### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 140.9 ns/iter  | 134.99 ns | 138.5 ns  | 189.06 ns | 262.45 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 272.42 ns/iter | 265.18 ns | 274.85 ns | 297.02 ns | 378.44 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 283.28 ns/iter | 277.43 ns | 282.29 ns | 309.24 ns | 336.61 ns |


#### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 210.74 ns/iter | 206.91 ns | 214.3 ns  | 227.15 ns | 233.79 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 220.5 ns/iter  | 212.65 ns | 222.07 ns | 234.33 ns | 238.85 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 339.88 ns/iter | 317.07 ns | 337.15 ns | 383.29 ns | 432.17 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 140.9 ns/iter  | 134.99 ns | 138.5 ns  | 189.06 ns | 262.45 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 210.74 ns/iter | 206.91 ns | 214.3 ns  | 227.15 ns | 233.79 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 220.5 ns/iter  | 212.65 ns | 222.07 ns | 234.33 ns | 238.85 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 272.42 ns/iter | 265.18 ns | 274.85 ns | 297.02 ns | 378.44 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 283.28 ns/iter | 277.43 ns | 282.29 ns | 309.24 ns | 336.61 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 339.88 ns/iter | 317.07 ns | 337.15 ns | 383.29 ns | 432.17 ns |

## Nanoid

### unnamed

#### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 574.68 ns/iter | 477.62 ns | 608.59 ns | 629.99 ns | 629.99 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.27 µs/iter   | 1.14 µs   | 1.29 µs   | 1.33 µs   | 1.33 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.61 µs/iter   | 1.57 µs   | 1.61 µs   | 1.87 µs   | 1.87 µs   |

## Console

### unnamed

#### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.13 µs/iter  | 1.7 µs  | 1.93 µs | 6.52 µs | 6.52 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 3.76 µs/iter  | 3.57 µs | 3.74 µs | 5.18 µs | 5.18 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.71 µs/iter | 5.9 µs  | 11 µs   | 13.8 µs | 388.2 µs |


#### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.06 µs/iter  | 1.75 µs | 2.08 µs | 2.98 µs | 2.98 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.14 µs/iter  | 6.04 µs | 6.16 µs | 6.47 µs | 6.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.32 µs/iter | 10.3 µs | 16.5 µs | 20.6 µs | 362.41 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.06 µs/iter  | 1.75 µs | 2.08 µs | 2.98 µs | 2.98 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.13 µs/iter  | 1.7 µs  | 1.93 µs | 6.52 µs | 6.52 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 3.76 µs/iter  | 3.57 µs | 3.74 µs | 5.18 µs | 5.18 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.14 µs/iter  | 6.04 µs | 6.16 µs | 6.47 µs | 6.47 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.71 µs/iter | 5.9 µs  | 11 µs   | 13.8 µs | 388.2 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.32 µs/iter | 10.3 µs | 16.5 µs | 20.6 µs | 362.41 µs |

