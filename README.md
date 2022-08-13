*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [sqlite](#sqlite)
      - [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
      - [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)
      - [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
      - [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
      - [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)
   - [json](#json)
      - [parse](#json-parse)
         - [Python](#json-parse-python)
         - [Crystal](#json-parse-crystal)
         - [JavaScript](#json-parse-javascript)
         - [Ruby](#json-parse-ruby)
         - [Go](#json-parse-go)
      - [stringify](#json-stringify)
         - [Python](#json-stringify-python)
         - [Crystal](#json-stringify-crystal)
         - [JavaScript](#json-stringify-javascript)
         - [Ruby](#json-stringify-ruby)
         - [Go](#json-stringify-go)
   - [nanoid](#nanoid)
      - [Python](#nanoid-python)
      - [JavaScript](#nanoid-javascript)
   - [base64](#base64)
      - [encode](#base64-encode)
         - [Python](#base64-encode-python)
         - [Crystal](#base64-encode-crystal)
         - [JavaScript](#base64-encode-javascript)
         - [Ruby](#base64-encode-ruby)
         - [Go](#base64-encode-go)
      - [decode](#base64-decode)
         - [Python](#base64-decode-python)
         - [Crystal](#base64-decode-crystal)
         - [JavaScript](#base64-decode-javascript)
         - [Ruby](#base64-decode-ruby)
         - [Go](#base64-decode-go)
   - [http](#http)
      - [Python](#http-python)
      - [Crystal](#http-crystal)
      - [JavaScript](#http-javascript)
      - [Ruby](#http-ruby)
      - [Rust](#http-rust)
      - [Go](#http-go)
   - [console](#console)
      - [Python](#console-python)
      - [Crystal](#console-crystal)
      - [JavaScript](#console-javascript)
      - [Ruby](#console-ruby)
      - [Go](#console-go)

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 76.72/iter µs  | 37.77 µs  | 489.44 µs | 80.3 µs   | 278.03 µs |
| JavaScript / node 18.7.0 (x64-linux) | 137.78/iter µs | 109.06 µs | 256.65 µs | 149.37 µs | 249.29 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 480/iter µs    | 0 ps      | 4 ms      | 0 ps      | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max       |
| ------------------------------------ | -------------- | -------- | --------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 31.59/iter ms  | 28.81 ms | 56.29 ms  | 30.99 ms | 52.95 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 93.79/iter ms  | 86.14 ms | 151.73 ms | 94.73 ms | 133.16 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 180.36/iter ms | 168 ms   | 262 ms    | 184 ms   | 246 ms    |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 118.61/iter µs | 77.63 µs  | 498.92 µs | 127.01 µs | 302.74 µs |
| JavaScript / node 18.7.0 (x64-linux) | 179.81/iter µs | 148.23 µs | 1.22 ms   | 178.26 µs | 357.48 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 580/iter µs    | 0 ps      | 2 ms      | 2 ms      | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min       | Max       |
| ------------------------------------ | -------------- | -------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 116.58/iter µs | 73.34 µs | 402.98 µs | 133.04 µs | 258.75 µs |
| JavaScript / node 18.7.0 (x64-linux) | 417.95/iter µs | 286.6 µs | 2.91 ms   | 516.67 µs | 933.66 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 560/iter µs    | 0 ps     | 4 ms      | 2 ms      | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 188.67/iter µs | 125.98 µs | 825.74 µs | 204.51 µs | 508.17 µs |
| JavaScript / node 18.7.0 (x64-linux) | 467.04/iter µs | 415.96 µs | 794.37 µs | 462.03 µs | 775.57 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 1.06/iter ms   | 0 ps      | 6 ms      | 2 ms      | 2 ms      |

## json

### <a name="json-parse">parse</a>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 17.04/iter ms | 15.42 ms | 23.24 ms | 16.19 ms | 16.64 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average        | p75      | p99     | Min     | Max       |
| -------- | -------------- | -------- | ------- | ------- | --------- |
| Crystal  | 750.81/iter µs | 32.89 µs | 3.27 ms | 1.04 ms | 561.45 µs |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 9.19/iter ms  | 8.26 ms  | 13.6 ms  | 8.64 ms  | 8.77 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.58/iter ms | 13.2 ms  | 19.92 ms | 14.15 ms | 14.14 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.8/iter ms  | 35.68 ms | 65.4 ms  | 37.63 ms | 36.42 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 48.19/iter ms | 43.38 ms | 84.47 ms | 57.35 ms | 46.23 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 718.86/iter µs | 249.75 µs | 3.56 ms | 536.94 µs | 433.64 µs |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 16.55/iter ms | 15.46 ms | 22.13 ms | 15.56 ms | 15.78 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75       | p99      | Min       | Max     |
| -------- | ------------ | --------- | -------- | --------- | ------- |
| Crystal  | 1.26/iter ms | 688.51 µs | 10.08 ms | 826.71 µs | 1.15 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 9.73/iter ms  | 8.63 ms  | 13 ms    | 9.57 ms  | 9.21 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.44/iter ms | 13.48 ms | 18.89 ms | 13.85 ms | 14.32 ms |
| JavaScript / node 18.7.0 (x64-linux) | 37.07/iter ms | 35.19 ms | 41.47 ms | 37.54 ms | 37.59 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 48.32/iter ms | 43.64 ms | 64.47 ms | 51.06 ms | 44.61 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average        | p75     | p99     | Min      | Max       |
| -------- | -------------- | ------- | ------- | -------- | --------- |
| Go       | 392.25/iter µs | 2.44 µs | 1.76 ms | 34.33 µs | 548.94 µs |

## nanoid

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99      | Min     | Max       |
| -------- | ------------- | ------- | -------- | ------- | --------- |
| Python   | 15.49/iter µs | 2.17 µs | 902.4 µs | 6.11 µs | 176.66 µs |

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75     | p99       | Min     | Max       |
| ------------------------------------ | ------------- | ------- | --------- | ------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.96/iter µs | 2.31 µs | 451.66 µs | 10.5 µs | 89.99 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 15.49/iter µs | 2.17 µs | 902.4 µs  | 6.11 µs | 176.66 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 20/iter µs    | 0 ps    | 2 ms      | 0 ps    | 0 ps      |

## base64

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 16.67/iter ms | 14.64 ms | 26.7 ms | 17.32 ms | 16.41 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75       | p99    | Min       | Max     |
| -------- | ------------ | --------- | ------ | --------- | ------- |
| Crystal  | 1.31/iter ms | 647.16 µs | 9.9 ms | 920.93 µs | 1.23 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 10.57/iter ms | 8.63 ms  | 15.5 ms  | 9.72 ms  | 13.99 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 15.15/iter ms | 13.36 ms | 20.65 ms | 14.18 ms | 14.18 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.1/iter ms  | 35.27 ms | 42.33 ms | 38.27 ms | 38.34 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.49/iter ms | 40.48 ms | 53.87 ms | 42.17 ms | 44.16 ms |

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75      | p99     | Min       | Max       |
| -------- | -------------- | -------- | ------- | --------- | --------- |
| Go       | 677.83/iter µs | 46.36 µs | 2.76 ms | 598.19 µs | 653.64 µs |

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 15.98/iter ms | 14.74 ms | 22.79 ms | 16.14 ms | 15.55 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Crystal  | 795.62/iter µs | 216.59 µs | 3.32 ms | 621.82 µs | 655.04 µs |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 9.64/iter ms  | 8.46 ms  | 11.51 ms | 9.15 ms  | 9.64 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 16.12/iter ms | 13.79 ms | 21.28 ms | 14.32 ms | 17.72 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.69/iter ms | 36.09 ms | 50.93 ms | 37.73 ms | 38.9 ms  |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 44.14/iter ms | 40.15 ms | 77.58 ms | 59.09 ms | 42.29 ms |

#### <a name="base64-decode-go">Go</a>

| Language | Average        | p75  | p99     | Min      | Max      |
| -------- | -------------- | ---- | ------- | -------- | -------- |
| Go       | 289.47/iter µs | 0 ps | 2.08 ms | 53.97 µs | 51.76 µs |

## http

### <a name="http-python">Python</a>

| Language | Average    | p75    | p99      | Min      | Max     | Latency  |
| -------- | ---------- | ------ | -------- | -------- | ------- | -------- |
| Python   | 865.08/rps | 234.92 | 1,654.41 | 1,154.31 | 1,454.5 | 59.97 ms |

### <a name="http-crystal">Crystal</a>

| Language | Average        | p75       | p99        | Min        | Max       | Latency |
| -------- | -------------- | --------- | ---------- | ---------- | --------- | ------- |
| Crystal  | 103,048.48/rps | 15,022.19 | 154,783.82 | 109,433.52 | 144,634.6 | 484 µs  |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min        | Max        | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | ---------- | ---------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 122,775.5/rps | 13,906.28 | 170,267.84 | 129,081.37 | 156,975.92 | 405.93 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 71,466.75/rps | 8,381.76  | 80,000.65  | 76,789.11  | 79,303.03  | 698.22 µs |
| JavaScript / node 18.7.0 (x64-linux) | 43,882.93/rps | 6,921.58  | 51,779.22  | 48,907.8   | 51,040.2   | 1.14 ms   |

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75      | p99       | Min     | Max       | Latency |
| -------- | ------------ | -------- | --------- | ------- | --------- | ------- |
| Ruby     | 6,277.42/rps | 1,957.91 | 10,367.93 | 7,792.9 | 10,040.82 | 8.02 ms |

### <a name="http-rust">Rust</a>

| Language | Average      | p75     | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------- | -------- | -------- | -------- | ------- |
| Rust     | 6,713.64/rps | 1,352.1 | 10,024.6 | 7,498.92 | 9,992.54 | 7.44 ms |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Go       | 183,568.15/rps | 45,206.14 | 241,600.39 | 215,873.25 | 236,918.04 | 270.46 µs |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min     | Max     |
| -------- | ------------- | ------- | -------- | ------- | ------- |
| Python   | 10.33/iter ms | 9.29 ms | 13.62 ms | 9.65 ms | 9.63 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Crystal  | 1.19/iter ms | 584.05 µs | 3.44 ms | 1.31 ms | 998.11 µs |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 9.02/iter ms  | 8.3 ms   | 11.09 ms | 9.11 ms  | 9.61 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 15.12/iter ms | 13.51 ms | 21.57 ms | 14.3 ms  | 14.09 ms |
| JavaScript / node 18.7.0 (x64-linux) | 40.28/iter ms | 37.53 ms | 55.71 ms | 40.19 ms | 38.52 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 43.03/iter ms | 40.36 ms | 54.8 ms | 43.71 ms | 40.87 ms |

### <a name="console-go">Go</a>

| Language | Average       | p75  | p99  | Min  | Max  |
| -------- | ------------- | ---- | ---- | ---- | ---- |
| Go       | 28.56/iter µs | 0 ps | 1 ms | 0 ps | 0 ps |

