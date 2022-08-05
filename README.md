*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [http](#http)
   - [json](#json)
   - [sqlite](#sqlite)
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 642.7 ns/iter | 687.64 ns | 701.82 ns | 533.94 ns | 701.82 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.43 µs/iter  | 1.44 µs   | 1.5 µs    | 1.37 µs   | 1.5 µs    |
| bun 0.1.6 (x64-linux)                  | nanoid(36) | 1.82 µs/iter  | 1.82 µs   | 2.04 µs   | 1.78 µs   | 2.04 µs   |

## Http

### http
| Runtime                                | Benchmark | Average        | p75        | p99        | Min        | Max        |
| -------------------------------------- | --------- | -------------- | ---------- | ---------- | ---------- | ---------- |
| bun 0.1.6 (x64-linux)                  | http      | 82,447.811/rps | 85,814.758 | 88,145.67  | 10,195.915 | 92,204.202 |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 46,784.119/rps | 49,298.247 | 50,147.495 | 4,389.318  | 50,413.986 |
| node v18.7.0 (x64-linux)               | http      | 39,749.446/rps | 41,062.806 | 42,067.276 | 4,642.742  | 43,001.941 |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.54 ns/iter | 149.05 ns | 208.57 ns | 143.4 ns  | 281.11 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 306.12 ns/iter | 310.37 ns | 330.96 ns | 298.51 ns | 333.33 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.52 ns/iter | 327.16 ns | 359.26 ns | 317.7 ns  | 391.91 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 86.13 ns/iter  | 86.15 ns  | 127.41 ns | 70.07 ns  | 136.73 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.25 ns/iter | 244.22 ns | 260.52 ns | 233.64 ns | 267.05 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.17 ns/iter | 249.83 ns | 276.08 ns | 239.6 ns  | 938.64 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | JSON.stringify({hello: "world"}) | 86.13 ns/iter  | 86.15 ns  | 127.41 ns | 70.07 ns  | 136.73 ns |
| bun 0.1.6 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 151.54 ns/iter | 149.05 ns | 208.57 ns | 143.4 ns  | 281.11 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 239.25 ns/iter | 244.22 ns | 260.52 ns | 233.64 ns | 267.05 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 252.17 ns/iter | 249.83 ns | 276.08 ns | 239.6 ns  | 938.64 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 306.12 ns/iter | 310.37 ns | 330.96 ns | 298.51 ns | 333.33 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 324.52 ns/iter | 327.16 ns | 359.26 ns | 317.7 ns  | 391.91 ns |

## Sqlite

### SELECT * FROM "Orders"
| Runtime                                | Benchmark              | Average      | p75     | p99     | Min     | Max     |
| -------------------------------------- | ---------------------- | ------------ | ------- | ------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders" | 1.38 ms/iter | 1.35 ms | 2.48 ms | 1.18 ms | 6.2 ms  |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Orders" | 3.86 ms/iter | 3.9 ms  | 4.64 ms | 3.63 ms | 5.41 ms |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 9.01 ms/iter | 9.29 ms | 13 ms   | 7.98 ms | 13 ms   |


### SELECT * FROM "Products"
| Runtime                                | Benchmark                | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------ | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products" | 80.76 µs/iter  | 83.1 µs  | 158.2 µs | 68.7 µs  | 1.73 ms  |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Products" | 245.61 µs/iter | 244.9 µs | 464.5 µs | 223.3 µs | 659.6 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 320.13 µs/iter | 311.1 µs | 750.4 µs | 281.7 µs | 1.31 ms  |


### SELECT * FROM "Suppliers"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 47.31 µs/iter  | 53.1 µs  | 94.9 µs  | 39.6 µs  | 1.11 ms  |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Suppliers" | 126.4 µs/iter  | 120.7 µs | 259.1 µs | 114.5 µs | 620.7 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 279.39 µs/iter | 272.8 µs | 737.1 µs | 245 µs   | 1.75 ms  |


### SELECT * FROM "Employees"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min     | Max     |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | ------- | ------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 50.02 µs/iter  | 47.2 µs  | 119.7 µs | 33.5 µs | 4.68 ms |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Employees" | 94.86 µs/iter  | 92 µs    | 281.7 µs | 74.9 µs | 3.5 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 248.81 µs/iter | 229.4 µs | 653.4 µs | 207 µs  | 4.13 ms |


### SELECT * FROM "Customers"
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 138.43 µs/iter | 137.4 µs | 191.9 µs | 120.9 µs | 950.3 µs |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Customers" | 412.87 µs/iter | 409.8 µs | 909.8 µs | 331.9 µs | 2.64 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 703.21 µs/iter | 700.2 µs | 1.16 ms  | 638.7 µs | 1.65 ms  |


### everything
| Runtime                                | Benchmark                 | Average        | p75      | p99      | Min      | Max      |
| -------------------------------------- | ------------------------- | -------------- | -------- | -------- | -------- | -------- |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Suppliers" | 47.31 µs/iter  | 53.1 µs  | 94.9 µs  | 39.6 µs  | 1.11 ms  |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Employees" | 50.02 µs/iter  | 47.2 µs  | 119.7 µs | 33.5 µs  | 4.68 ms  |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Products"  | 80.76 µs/iter  | 83.1 µs  | 158.2 µs | 68.7 µs  | 1.73 ms  |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Employees" | 94.86 µs/iter  | 92 µs    | 281.7 µs | 74.9 µs  | 3.5 ms   |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Suppliers" | 126.4 µs/iter  | 120.7 µs | 259.1 µs | 114.5 µs | 620.7 µs |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Customers" | 138.43 µs/iter | 137.4 µs | 191.9 µs | 120.9 µs | 950.3 µs |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Products"  | 245.61 µs/iter | 244.9 µs | 464.5 µs | 223.3 µs | 659.6 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 248.81 µs/iter | 229.4 µs | 653.4 µs | 207 µs   | 4.13 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 279.39 µs/iter | 272.8 µs | 737.1 µs | 245 µs   | 1.75 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 320.13 µs/iter | 311.1 µs | 750.4 µs | 281.7 µs | 1.31 ms  |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Customers" | 412.87 µs/iter | 409.8 µs | 909.8 µs | 331.9 µs | 2.64 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 703.21 µs/iter | 700.2 µs | 1.16 ms  | 638.7 µs | 1.65 ms  |
| bun 0.1.6 (x64-linux)                  | SELECT * FROM "Orders"    | 1.38 ms/iter   | 1.35 ms  | 2.48 ms  | 1.18 ms  | 6.2 ms   |
| node v16.16.0 (x64-linux)              | SELECT * FROM "Orders"    | 3.86 ms/iter   | 3.9 ms   | 4.64 ms  | 3.63 ms  | 5.41 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 9.01 ms/iter   | 9.29 ms  | 13 ms    | 7.98 ms  | 13 ms    |

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 465.34 ns/iter | 467.18 ns | 571.61 ns | 450.25 ns | 1.04 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 945.97 ns/iter | 878.79 ns | 1.62 µs   | 816.91 ns | 1.62 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 1.41 µs/iter   | 1.42 µs   | 2.14 µs   | 1.27 µs   | 2.14 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 491.9 ns/iter  | 488.51 ns | 652.62 ns | 474.96 ns | 1.2 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 864.41 ns/iter | 798.98 ns | 1.53 µs   | 767.53 ns | 1.53 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 1.48 µs/iter   | 1.49 µs   | 2.26 µs   | 1.4 µs    | 2.26 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 471.21 ns/iter | 473.14 ns | 531.12 ns | 461.52 ns | 561.99 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 959.7 ns/iter  | 888.16 ns | 1.58 µs   | 858 ns    | 1.58 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 1.4 µs/iter    | 1.42 µs   | 1.67 µs   | 1.35 µs   | 1.67 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 469.89 ns/iter | 472.42 ns | 505.27 ns | 461.67 ns | 568.95 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 945.49 ns/iter | 860.62 ns | 1.6 µs    | 826.71 ns | 1.6 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 1.37 µs/iter   | 1.39 µs   | 1.63 µs   | 1.29 µs   | 1.63 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 501.13 ns/iter | 505.15 ns | 529.23 ns | 493.57 ns | 558.9 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64') | 977.03 ns/iter | 894.55 ns | 1.66 µs   | 861.09 ns | 1.66 µs  |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 1.48 µs/iter   | 1.5 µs    | 1.64 µs   | 1.4 µs    | 1.64 µs  |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 489.63 ns/iter | 489.48 ns | 520.85 ns | 482.93 ns | 522.95 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 980.53 ns/iter | 924.33 ns | 1.7 µs    | 845.11 ns | 1.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.72 µs/iter   | 1.74 µs   | 1.99 µs   | 1.65 µs   | 1.99 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 472.72 ns/iter | 476.91 ns | 493.57 ns | 464.77 ns | 504.17 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 904.17 ns/iter | 819.13 ns | 1.6 µs    | 798.74 ns | 1.6 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 1.42 µs/iter   | 1.45 µs   | 1.48 µs   | 1.34 µs   | 1.48 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 473.4 ns/iter  | 477.16 ns | 502.13 ns | 458.49 ns | 526.59 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary') | 900.27 ns/iter | 826.92 ns | 1.55 µs   | 809.75 ns | 1.55 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 1.43 µs/iter   | 1.45 µs   | 1.54 µs   | 1.37 µs   | 1.54 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 483.62 ns/iter | 488.59 ns | 504.34 ns | 470.81 ns | 505.72 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex') | 913.3 ns/iter  | 839.48 ns | 1.53 µs   | 820.87 ns | 1.53 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 1.42 µs/iter   | 1.45 µs   | 1.5 µs    | 1.34 µs   | 1.5 µs    |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Runtime                                | Benchmark                               | Average        | p75       | p99     | Min       | Max      |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | ------- | --------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 13.79 µs/iter  | 13.2 µs   | 26.6 µs | 7.3 µs    | 2.62 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 23.09 µs/iter  | 21.2 µs   | 122 µs  | 19.2 µs   | 224.6 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 840.03 µs/iter | 916.62 µs | 1.13 ms | 729.81 µs | 1.25 ms  |


#### Buffer.from(longText).toString('utf8')
| Runtime                                | Benchmark                              | Average       | p75     | p99      | Min     | Max      |
| -------------------------------------- | -------------------------------------- | ------------- | ------- | -------- | ------- | -------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 15.89 µs/iter | 15.1 µs | 33.5 µs  | 8.7 µs  | 1.88 ms  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 23.17 µs/iter | 21.2 µs | 123.1 µs | 18.4 µs | 215.9 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 1.34 ms/iter  | 1.26 ms | 2.64 ms  | 1.14 ms | 2.84 ms  |


#### Buffer.from(longText).toString('utf16le')
| Runtime                                | Benchmark                                 | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 12.58 µs/iter  | 12.2 µs   | 22.7 µs | 7.8 µs    | 987.92 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 20.86 µs/iter  | 19.8 µs   | 58.6 µs | 16.6 µs   | 371.21 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 800.68 µs/iter | 745.01 µs | 1.43 ms | 704.91 µs | 1.51 ms   |


#### Buffer.from(longText).toString('ucs2')
| Runtime                                | Benchmark                              | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | -------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 12.38 µs/iter  | 12 µs     | 22.4 µs | 7.6 µs    | 986.62 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 20.48 µs/iter  | 19.5 µs   | 47.4 µs | 17 µs     | 499.31 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 814.98 µs/iter | 745.21 µs | 2 ms    | 706.21 µs | 2.08 ms   |


#### Buffer.from(longText).toString('base64')
| Runtime                                | Benchmark                                | Average        | p75       | p99      | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64') | 12.97 µs/iter  | 12.2 µs   | 23.4 µs  | 7.8 µs    | 960.42 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 23.64 µs/iter  | 22.1 µs   | 138.5 µs | 19.1 µs   | 1.36 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 994.23 µs/iter | 928.52 µs | 2 ms     | 890.72 µs | 2.07 ms   |


#### Buffer.from(longText).toString('base64url')
| Runtime                                | Benchmark                                   | Average       | p75     | p99       | Min     | Max       |
| -------------------------------------- | ------------------------------------------- | ------------- | ------- | --------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 55.25 µs/iter | 41.9 µs | 559.21 µs | 38 µs   | 1.11 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 58.03 µs/iter | 56.7 µs | 181.6 µs  | 52.5 µs | 337.21 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.42 ms/iter  | 1.28 ms | 3.02 ms   | 1.23 ms | 3.07 ms   |


#### Buffer.from(longText).toString('latin1')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 20.68 µs/iter  | 20.1 µs   | 33.7 µs | 11.2 µs   | 1.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 21.16 µs/iter  | 20.3 µs   | 66.5 µs | 15.9 µs   | 542.91 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 868.74 µs/iter | 802.91 µs | 2.1 ms  | 749.01 µs | 7.63 ms   |


#### Buffer.from(longText).toString('binary')
| Runtime                                | Benchmark                                | Average        | p75       | p99     | Min       | Max       |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary') | 21.02 µs/iter  | 20.2 µs   | 52 µs   | 9.3 µs    | 955.72 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 22.8 µs/iter   | 21.8 µs   | 45.2 µs | 16.3 µs   | 1.18 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 832.48 µs/iter | 795.31 µs | 1.61 ms | 740.51 µs | 1.68 ms   |


#### Buffer.from(longText).toString('hex')
| Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 74.45 µs/iter  | 71.8 µs   | 268.5 µs  | 69.4 µs   | 352.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex') | 271.39 µs/iter | 269.5 µs  | 297.31 µs | 263.6 µs  | 1.24 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 861.36 µs/iter | 824.32 µs | 1.65 ms   | 771.41 µs | 1.69 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 405.97 ns/iter | 405.39 ns | 446.35 ns | 393.97 ns | 454.9 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 654.04 ns/iter | 654.51 ns | 1.99 µs   | 618.86 ns | 1.99 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 927.19 ns/iter | 834.48 ns | 1.68 µs   | 806.55 ns | 1.68 µs  |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 494.49 ns/iter | 492.25 ns | 535.82 ns | 483.57 ns | 540.73 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 889.01 ns/iter | 817.32 ns | 1.6 µs    | 786.01 ns | 1.6 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.46 µs/iter   | 1.65 µs   | 2.03 µs   | 1.21 µs   | 2.03 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 401.03 ns/iter | 397.77 ns | 439.2 ns  | 391.94 ns | 451.93 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 626.85 ns/iter | 642.34 ns | 749.88 ns | 608.83 ns | 749.88 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 912.79 ns/iter | 828.78 ns | 1.54 µs   | 808.19 ns | 1.54 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 402.15 ns/iter | 398.96 ns | 443.18 ns | 393.42 ns | 446.85 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 615.83 ns/iter | 633.97 ns | 657.14 ns | 601.23 ns | 657.14 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 857.93 ns/iter | 781.86 ns | 1.45 µs   | 762.07 ns | 1.45 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 540.22 ns/iter | 537.68 ns | 586.46 ns | 528.95 ns | 598.04 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 915.32 ns/iter | 837.17 ns | 1.62 µs   | 813.33 ns | 1.62 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.59 µs/iter   | 1.6 µs    | 1.77 µs   | 1.57 µs   | 1.77 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 521.99 ns/iter | 521.3 ns  | 562.67 ns | 508.48 ns | 571.2 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 1.01 µs/iter   | 919.56 ns | 1.7 µs    | 894.32 ns | 1.7 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.86 µs/iter   | 1.88 µs   | 2.02 µs   | 1.84 µs   | 2.02 µs  |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 405.59 ns/iter | 403.21 ns | 445.81 ns | 395.24 ns | 446.34 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 683.03 ns/iter | 706.86 ns | 742.62 ns | 640.2 ns  | 742.62 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 910.49 ns/iter | 830.55 ns | 1.55 µs   | 805.7 ns  | 1.55 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 405.96 ns/iter | 405.5 ns  | 444.13 ns | 394.37 ns | 445.43 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 683.42 ns/iter | 704.82 ns | 749.52 ns | 639.04 ns | 749.52 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 923.69 ns/iter | 844.61 ns | 1.58 µs   | 827.57 ns | 1.58 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 508.49 ns/iter | 506.26 ns | 552.66 ns | 497.93 ns | 559.42 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 857.15 ns/iter | 779.21 ns | 1.49 µs   | 761.47 ns | 1.49 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 1.11 µs/iter   | 1.12 µs   | 1.17 µs   | 1.09 µs   | 1.17 µs   |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Runtime                                | Benchmark                                 | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ----------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 14.92 µs/iter | 14.1 µs | 30.9 µs | 10.8 µs | 311.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 15.41 µs/iter | 14.1 µs | 36.4 µs | 7 µs    | 1.35 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 1.54 ms/iter  | 1.4 ms  | 4.68 ms | 1.34 ms | 4.89 ms   |


#### Buffer.from(longText, 'utf8').toString()
| Runtime                                | Benchmark                                | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ---------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 16.75 µs/iter | 15.6 µs | 39.8 µs | 9.5 µs  | 2.35 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 25.79 µs/iter | 25.2 µs | 40.6 µs | 21.4 µs | 300.81 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 1.39 ms/iter  | 1.25 ms | 4.26 ms | 1.2 ms  | 4.53 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Runtime                                | Benchmark                                          | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.41 µs/iter  | 1.44 µs | 1.54 µs | 1.33 µs | 1.54 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 32.09 µs/iter | 32.1 µs | 91.6 µs | 12.8 µs | 1.26 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 47.42 µs/iter | 46.4 µs | 79.7 µs | 42.2 µs | 428.01 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 150.15 ns/iter | 148.47 ns | 167.02 ns | 143.74 ns | 182.91 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 381.51 ns/iter | 389 ns    | 436.44 ns | 368.93 ns | 577.34 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 31.84 µs/iter  | 31.6 µs   | 91.8 µs   | 12.5 µs   | 1.26 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Runtime                                | Benchmark                                         | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.57 µs/iter  | 3.58 µs | 3.68 µs | 3.55 µs | 3.68 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 19 µs/iter    | 18.9 µs | 28.9 µs | 16.9 µs | 639.71 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 30.08 µs/iter | 27.6 µs | 50.4 µs | 23.9 µs | 1.11 ms   |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.91 ns/iter | 129.52 ns | 148.05 ns | 124.76 ns | 161.6 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.43 µs/iter   | 1.43 µs   | 1.47 µs   | 1.41 µs   | 1.47 µs  |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.18 µs/iter | 124.3 µs  | 152.6 µs  | 122.8 µs  | 1.22 ms  |


#### Buffer.from(longText, 'latin1').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 14.82 µs/iter | 14.1 µs | 30.1 µs | 10.8 µs | 311.61 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 15.46 µs/iter | 14 µs   | 36 µs   | 9 µs    | 1.2 ms    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 1.61 ms/iter  | 1.45 ms | 4.82 ms | 1.41 ms | 4.89 ms   |


#### Buffer.from(longText, 'binary').toString()
| Runtime                                | Benchmark                                  | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | ------------------------------------------ | ------------- | ------- | ------- | ------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 14.63 µs/iter | 13.9 µs | 29.7 µs | 10.9 µs | 290.21 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 15.51 µs/iter | 13.8 µs | 35.5 µs | 9.6 µs  | 1.59 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.6 ms/iter   | 1.46 ms | 4.89 ms | 1.41 ms | 4.93 ms   |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 598.62 ns/iter | 603.19 ns | 630.35 ns | 574.06 ns | 630.35 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 4.75 µs/iter   | 5.3 µs    | 5.7 µs    | 3.39 µs   | 5.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 55.68 µs/iter  | 50.1 µs   | 100.1 µs  | 47.3 µs   | 1.22 ms   |


#### everything
| Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 130.91 ns/iter | 129.52 ns | 148.05 ns | 124.76 ns | 161.6 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 150.15 ns/iter | 148.47 ns | 167.02 ns | 143.74 ns | 182.91 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 381.51 ns/iter | 389 ns    | 436.44 ns | 368.93 ns | 577.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 401.03 ns/iter | 397.77 ns | 439.2 ns  | 391.94 ns | 451.93 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 402.15 ns/iter | 398.96 ns | 443.18 ns | 393.42 ns | 446.85 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 405.59 ns/iter | 403.21 ns | 445.81 ns | 395.24 ns | 446.34 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 405.96 ns/iter | 405.5 ns  | 444.13 ns | 394.37 ns | 445.43 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 405.97 ns/iter | 405.39 ns | 446.35 ns | 393.97 ns | 454.9 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 465.34 ns/iter | 467.18 ns | 571.61 ns | 450.25 ns | 1.04 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 469.89 ns/iter | 472.42 ns | 505.27 ns | 461.67 ns | 568.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 471.21 ns/iter | 473.14 ns | 531.12 ns | 461.52 ns | 561.99 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 472.72 ns/iter | 476.91 ns | 493.57 ns | 464.77 ns | 504.17 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 473.4 ns/iter  | 477.16 ns | 502.13 ns | 458.49 ns | 526.59 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 483.62 ns/iter | 488.59 ns | 504.34 ns | 470.81 ns | 505.72 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 489.63 ns/iter | 489.48 ns | 520.85 ns | 482.93 ns | 522.95 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 491.9 ns/iter  | 488.51 ns | 652.62 ns | 474.96 ns | 1.2 µs    |
| node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 494.49 ns/iter | 492.25 ns | 535.82 ns | 483.57 ns | 540.73 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 501.13 ns/iter | 505.15 ns | 529.23 ns | 493.57 ns | 558.9 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 508.49 ns/iter | 506.26 ns | 552.66 ns | 497.93 ns | 559.42 ns |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 521.99 ns/iter | 521.3 ns  | 562.67 ns | 508.48 ns | 571.2 ns  |
| node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 540.22 ns/iter | 537.68 ns | 586.46 ns | 528.95 ns | 598.04 ns |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 598.62 ns/iter | 603.19 ns | 630.35 ns | 574.06 ns | 630.35 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 615.83 ns/iter | 633.97 ns | 657.14 ns | 601.23 ns | 657.14 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 626.85 ns/iter | 642.34 ns | 749.88 ns | 608.83 ns | 749.88 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 654.04 ns/iter | 654.51 ns | 1.99 µs   | 618.86 ns | 1.99 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 683.03 ns/iter | 706.86 ns | 742.62 ns | 640.2 ns  | 742.62 ns |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 683.42 ns/iter | 704.82 ns | 749.52 ns | 639.04 ns | 749.52 ns |
| bun 0.1.6 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 857.15 ns/iter | 779.21 ns | 1.49 µs   | 761.47 ns | 1.49 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 857.93 ns/iter | 781.86 ns | 1.45 µs   | 762.07 ns | 1.45 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 864.41 ns/iter | 798.98 ns | 1.53 µs   | 767.53 ns | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 889.01 ns/iter | 817.32 ns | 1.6 µs    | 786.01 ns | 1.6 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 900.27 ns/iter | 826.92 ns | 1.55 µs   | 809.75 ns | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 904.17 ns/iter | 819.13 ns | 1.6 µs    | 798.74 ns | 1.6 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 910.49 ns/iter | 830.55 ns | 1.55 µs   | 805.7 ns  | 1.55 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 912.79 ns/iter | 828.78 ns | 1.54 µs   | 808.19 ns | 1.54 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 913.3 ns/iter  | 839.48 ns | 1.53 µs   | 820.87 ns | 1.53 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 915.32 ns/iter | 837.17 ns | 1.62 µs   | 813.33 ns | 1.62 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 923.69 ns/iter | 844.61 ns | 1.58 µs   | 827.57 ns | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 927.19 ns/iter | 834.48 ns | 1.68 µs   | 806.55 ns | 1.68 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 945.49 ns/iter | 860.62 ns | 1.6 µs    | 826.71 ns | 1.6 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 945.97 ns/iter | 878.79 ns | 1.62 µs   | 816.91 ns | 1.62 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 959.7 ns/iter  | 888.16 ns | 1.58 µs   | 858 ns    | 1.58 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 977.03 ns/iter | 894.55 ns | 1.66 µs   | 861.09 ns | 1.66 µs   |
| bun 0.1.6 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 980.53 ns/iter | 924.33 ns | 1.7 µs    | 845.11 ns | 1.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.01 µs/iter   | 919.56 ns | 1.7 µs    | 894.32 ns | 1.7 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 1.11 µs/iter   | 1.12 µs   | 1.17 µs   | 1.09 µs   | 1.17 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 1.37 µs/iter   | 1.39 µs   | 1.63 µs   | 1.29 µs   | 1.63 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 1.4 µs/iter    | 1.42 µs   | 1.67 µs   | 1.35 µs   | 1.67 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 1.41 µs/iter   | 1.42 µs   | 2.14 µs   | 1.27 µs   | 2.14 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.41 µs/iter   | 1.44 µs   | 1.54 µs   | 1.33 µs   | 1.54 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 1.42 µs/iter   | 1.45 µs   | 1.5 µs    | 1.34 µs   | 1.5 µs    |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 1.42 µs/iter   | 1.45 µs   | 1.48 µs   | 1.34 µs   | 1.48 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.43 µs/iter   | 1.43 µs   | 1.47 µs   | 1.41 µs   | 1.47 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 1.43 µs/iter   | 1.45 µs   | 1.54 µs   | 1.37 µs   | 1.54 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.46 µs/iter   | 1.65 µs   | 2.03 µs   | 1.21 µs   | 2.03 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 1.48 µs/iter   | 1.5 µs    | 1.64 µs   | 1.4 µs    | 1.64 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 1.48 µs/iter   | 1.49 µs   | 2.26 µs   | 1.4 µs    | 2.26 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.59 µs/iter   | 1.6 µs    | 1.77 µs   | 1.57 µs   | 1.77 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.72 µs/iter   | 1.74 µs   | 1.99 µs   | 1.65 µs   | 1.99 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.86 µs/iter   | 1.88 µs   | 2.02 µs   | 1.84 µs   | 2.02 µs   |
| node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.57 µs/iter   | 3.58 µs   | 3.68 µs   | 3.55 µs   | 3.68 µs   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 4.75 µs/iter   | 5.3 µs    | 5.7 µs    | 3.39 µs   | 5.7 µs    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 12.38 µs/iter  | 12 µs     | 22.4 µs   | 7.6 µs    | 986.62 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 12.58 µs/iter  | 12.2 µs   | 22.7 µs   | 7.8 µs    | 987.92 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 12.97 µs/iter  | 12.2 µs   | 23.4 µs   | 7.8 µs    | 960.42 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 13.79 µs/iter  | 13.2 µs   | 26.6 µs   | 7.3 µs    | 2.62 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 14.63 µs/iter  | 13.9 µs   | 29.7 µs   | 10.9 µs   | 290.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 14.82 µs/iter  | 14.1 µs   | 30.1 µs   | 10.8 µs   | 311.61 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 14.92 µs/iter  | 14.1 µs   | 30.9 µs   | 10.8 µs   | 311.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 15.41 µs/iter  | 14.1 µs   | 36.4 µs   | 7 µs      | 1.35 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 15.46 µs/iter  | 14 µs     | 36 µs     | 9 µs      | 1.2 ms    |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 15.51 µs/iter  | 13.8 µs   | 35.5 µs   | 9.6 µs    | 1.59 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 15.89 µs/iter  | 15.1 µs   | 33.5 µs   | 8.7 µs    | 1.88 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 16.75 µs/iter  | 15.6 µs   | 39.8 µs   | 9.5 µs    | 2.35 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 19 µs/iter     | 18.9 µs   | 28.9 µs   | 16.9 µs   | 639.71 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 20.48 µs/iter  | 19.5 µs   | 47.4 µs   | 17 µs     | 499.31 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 20.68 µs/iter  | 20.1 µs   | 33.7 µs   | 11.2 µs   | 1.03 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 20.86 µs/iter  | 19.8 µs   | 58.6 µs   | 16.6 µs   | 371.21 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 21.02 µs/iter  | 20.2 µs   | 52 µs     | 9.3 µs    | 955.72 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 21.16 µs/iter  | 20.3 µs   | 66.5 µs   | 15.9 µs   | 542.91 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 22.8 µs/iter   | 21.8 µs   | 45.2 µs   | 16.3 µs   | 1.18 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 23.09 µs/iter  | 21.2 µs   | 122 µs    | 19.2 µs   | 224.6 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 23.17 µs/iter  | 21.2 µs   | 123.1 µs  | 18.4 µs   | 215.9 µs  |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 23.64 µs/iter  | 22.1 µs   | 138.5 µs  | 19.1 µs   | 1.36 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 25.79 µs/iter  | 25.2 µs   | 40.6 µs   | 21.4 µs   | 300.81 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 30.08 µs/iter  | 27.6 µs   | 50.4 µs   | 23.9 µs   | 1.11 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 31.84 µs/iter  | 31.6 µs   | 91.8 µs   | 12.5 µs   | 1.26 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 32.09 µs/iter  | 32.1 µs   | 91.6 µs   | 12.8 µs   | 1.26 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 47.42 µs/iter  | 46.4 µs   | 79.7 µs   | 42.2 µs   | 428.01 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 55.25 µs/iter  | 41.9 µs   | 559.21 µs | 38 µs     | 1.11 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 55.68 µs/iter  | 50.1 µs   | 100.1 µs  | 47.3 µs   | 1.22 ms   |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 58.03 µs/iter  | 56.7 µs   | 181.6 µs  | 52.5 µs   | 337.21 µs |
| node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 74.45 µs/iter  | 71.8 µs   | 268.5 µs  | 69.4 µs   | 352.41 µs |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 128.18 µs/iter | 124.3 µs  | 152.6 µs  | 122.8 µs  | 1.22 ms   |
| bun 0.1.6 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 271.39 µs/iter | 269.5 µs  | 297.31 µs | 263.6 µs  | 1.24 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 800.68 µs/iter | 745.01 µs | 1.43 ms   | 704.91 µs | 1.51 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 814.98 µs/iter | 745.21 µs | 2 ms      | 706.21 µs | 2.08 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 832.48 µs/iter | 795.31 µs | 1.61 ms   | 740.51 µs | 1.68 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 840.03 µs/iter | 916.62 µs | 1.13 ms   | 729.81 µs | 1.25 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 861.36 µs/iter | 824.32 µs | 1.65 ms   | 771.41 µs | 1.69 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 868.74 µs/iter | 802.91 µs | 2.1 ms    | 749.01 µs | 7.63 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 994.23 µs/iter | 928.52 µs | 2 ms      | 890.72 µs | 2.07 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 1.34 ms/iter   | 1.26 ms   | 2.64 ms   | 1.14 ms   | 2.84 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 1.39 ms/iter   | 1.25 ms   | 4.26 ms   | 1.2 ms    | 4.53 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.42 ms/iter   | 1.28 ms   | 3.02 ms   | 1.23 ms   | 3.07 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 1.54 ms/iter   | 1.4 ms    | 4.68 ms   | 1.34 ms   | 4.89 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.6 ms/iter    | 1.46 ms   | 4.89 ms   | 1.41 ms   | 4.93 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 1.61 ms/iter   | 1.45 ms   | 4.82 ms   | 1.41 ms   | 4.89 ms   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log('hello') | 2.23 µs/iter  | 2.24 µs | 3.15 µs | 1.92 µs | 3.15 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.47 µs/iter  | 6.6 µs  | 9.4 µs  | 2.6 µs  | 439.61 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.84 µs/iter | 12.3 µs | 15 µs   | 6.4 µs  | 1.59 ms   |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.2 µs/iter   | 2.21 µs | 2.83 µs | 1.9 µs  | 2.83 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.04 µs/iter  | 8.6 µs  | 13.1 µs | 4.4 µs  | 436.41 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.68 µs/iter | 18.7 µs | 24.3 µs | 11.8 µs | 450.51 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.6 (x64-linux)                  | console.log({ hello: 'object' }) | 2.2 µs/iter   | 2.21 µs | 2.83 µs | 1.9 µs  | 2.83 µs   |
| bun 0.1.6 (x64-linux)                  | console.log('hello')             | 2.23 µs/iter  | 2.24 µs | 3.15 µs | 1.92 µs | 3.15 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.47 µs/iter  | 6.6 µs  | 9.4 µs  | 2.6 µs  | 439.61 µs |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 7.04 µs/iter  | 8.6 µs  | 13.1 µs | 4.4 µs  | 436.41 µs |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.84 µs/iter | 12.3 µs | 15 µs   | 6.4 µs  | 1.59 ms   |
| deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.68 µs/iter | 18.7 µs | 24.3 µs | 11.8 µs | 450.51 µs |

