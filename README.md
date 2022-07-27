*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [json](#json)
   - [buffer](#buffer)
   - [console](#console)

## Nanoid

### unnamed

#### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 758.56 ns/iter | 620.74 ns | 815.36 ns | 1.03 µs | 1.03 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.63 µs/iter   | 1.51 µs   | 1.67 µs   | 1.78 µs | 1.78 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 2.22 µs/iter   | 2.07 µs   | 2.23 µs   | 2.69 µs | 2.69 µs |

## Json

### unnamed

#### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 189.34 ns/iter | 169.37 ns | 186.4 ns  | 335.68 ns | 462.67 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 372.69 ns/iter | 342.9 ns  | 379.75 ns | 406.34 ns | 407.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 403.26 ns/iter | 337.96 ns | 409.86 ns | 615.5 ns  | 749.86 ns |


#### JSON.stringify({hello: "world"})
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

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('ascii') | 478.91 ns/iter | 396.23 ns | 501.96 ns | 1.03 µs | 1.61 µs |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 895.59 ns/iter | 649.06 ns | 949.99 ns | 2.01 µs | 2.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.02 µs/iter   | 933.21 ns | 1.02 µs   | 1.82 µs | 1.82 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('utf8') | 475.65 ns/iter | 401.21 ns | 481.87 ns | 1.12 µs | 1.59 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 1.07 µs/iter   | 714.68 ns | 1.12 µs   | 3.27 µs | 3.27 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.08 µs/iter   | 1.01 µs   | 1.09 µs   | 1.46 µs | 1.46 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf16le') | 453.69 ns/iter | 399.76 ns | 452.27 ns | 801.16 ns | 861.85 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 943.22 ns/iter | 711.6 ns  | 879.91 ns | 2.96 µs   | 2.96 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 995.49 ns/iter | 927.59 ns | 1.01 µs   | 1.45 µs   | 1.45 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ucs2') | 431.4 ns/iter  | 389.77 ns | 438.99 ns | 627.98 ns | 900.66 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 926.17 ns/iter | 669.25 ns | 940.81 ns | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.01 µs/iter   | 933.69 ns | 1.01 µs   | 1.73 µs   | 1.73 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('base64') | 483.85 ns/iter | 404.4 ns  | 494.38 ns | 1.08 µs | 1.22 µs |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 950.74 ns/iter | 688.46 ns | 984.43 ns | 2.01 µs | 2.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.17 µs/iter   | 1 µs      | 1.12 µs   | 3.4 µs  | 3.4 µs  |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 448.84 ns/iter | 407.1 ns  | 450 ns    | 694.89 ns | 717.09 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 927.42 ns/iter | 701.04 ns | 899.45 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.42 µs/iter   | 1.2 µs    | 1.41 µs   | 3.18 µs   | 3.18 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1') | 415.32 ns/iter | 388.33 ns | 427.37 ns | 505.09 ns | 615.19 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 841.71 ns/iter | 675.51 ns | 793.46 ns | 1.69 µs   | 1.69 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.08 µs/iter   | 966.06 ns | 1.03 µs   | 2.89 µs   | 2.89 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('binary') | 419.51 ns/iter | 393.23 ns | 424.83 ns | 629.38 ns | 665.38 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 878.13 ns/iter | 707.87 ns | 835.81 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.02 µs/iter   | 963 ns    | 1.02 µs   | 1.42 µs   | 1.42 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('hex') | 446.38 ns/iter | 407.12 ns | 458.27 ns | 619.49 ns | 672.04 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 908.48 ns/iter | 681.31 ns | 916.76 ns | 2.81 µs   | 2.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.02 µs/iter   | 967.26 ns | 1.03 µs   | 1.19 µs   | 1.19 µs   |


### everything
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1')    | 415.32 ns/iter | 388.33 ns | 427.37 ns | 505.09 ns | 615.19 ns |
| node v16.16.0 (x64-linux)              | .toString('binary')    | 419.51 ns/iter | 393.23 ns | 424.83 ns | 629.38 ns | 665.38 ns |
| node v16.16.0 (x64-linux)              | .toString('ucs2')      | 431.4 ns/iter  | 389.77 ns | 438.99 ns | 627.98 ns | 900.66 ns |
| node v16.16.0 (x64-linux)              | .toString('hex')       | 446.38 ns/iter | 407.12 ns | 458.27 ns | 619.49 ns | 672.04 ns |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 448.84 ns/iter | 407.1 ns  | 450 ns    | 694.89 ns | 717.09 ns |
| node v16.16.0 (x64-linux)              | .toString('utf16le')   | 453.69 ns/iter | 399.76 ns | 452.27 ns | 801.16 ns | 861.85 ns |
| node v16.16.0 (x64-linux)              | .toString('utf8')      | 475.65 ns/iter | 401.21 ns | 481.87 ns | 1.12 µs   | 1.59 µs   |
| node v16.16.0 (x64-linux)              | .toString('ascii')     | 478.91 ns/iter | 396.23 ns | 501.96 ns | 1.03 µs   | 1.61 µs   |
| node v16.16.0 (x64-linux)              | .toString('base64')    | 483.85 ns/iter | 404.4 ns  | 494.38 ns | 1.08 µs   | 1.22 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')    | 841.71 ns/iter | 675.51 ns | 793.46 ns | 1.69 µs   | 1.69 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')    | 878.13 ns/iter | 707.87 ns | 835.81 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')     | 895.59 ns/iter | 649.06 ns | 949.99 ns | 2.01 µs   | 2.01 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')       | 908.48 ns/iter | 681.31 ns | 916.76 ns | 2.81 µs   | 2.81 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')      | 926.17 ns/iter | 669.25 ns | 940.81 ns | 2.14 µs   | 2.14 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 927.42 ns/iter | 701.04 ns | 899.45 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')   | 943.22 ns/iter | 711.6 ns  | 879.91 ns | 2.96 µs   | 2.96 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')    | 950.74 ns/iter | 688.46 ns | 984.43 ns | 2.01 µs   | 2.01 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')   | 995.49 ns/iter | 927.59 ns | 1.01 µs   | 1.45 µs   | 1.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')      | 1.01 µs/iter   | 933.69 ns | 1.01 µs   | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')     | 1.02 µs/iter   | 933.21 ns | 1.02 µs   | 1.82 µs   | 1.82 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')       | 1.02 µs/iter   | 967.26 ns | 1.03 µs   | 1.19 µs   | 1.19 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')    | 1.02 µs/iter   | 963 ns    | 1.02 µs   | 1.42 µs   | 1.42 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')      | 1.07 µs/iter   | 714.68 ns | 1.12 µs   | 3.27 µs   | 3.27 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')    | 1.08 µs/iter   | 966.06 ns | 1.03 µs   | 2.89 µs   | 2.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')      | 1.08 µs/iter   | 1.01 µs   | 1.09 µs   | 1.46 µs   | 1.46 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')    | 1.17 µs/iter   | 1 µs      | 1.12 µs   | 3.4 µs    | 3.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.42 µs/iter   | 1.2 µs    | 1.41 µs   | 3.18 µs   | 3.18 µs   |

## Console

### unnamed

#### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75    | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------ | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.43 µs/iter  | 2.1 µs | 2.39 µs | 5.22 µs | 5.22 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.89 µs/iter  | 2.7 µs | 6.8 µs  | 10.3 µs | 8.26 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 13.49 µs/iter | 7.2 µs | 14 µs   | 20.8 µs | 761.83 µs |


#### console.log({ hello: 'object' })
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

