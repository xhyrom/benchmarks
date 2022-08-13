*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [base64](#base64)
      - [decode](#base64-decode)
         - [Go](#base64-decode-go)
         - [Ruby](#base64-decode-ruby)
         - [JavaScript](#base64-decode-javascript)
         - [Crystal](#base64-decode-crystal)
         - [Python](#base64-decode-python)
      - [encode](#base64-encode)
         - [Go](#base64-encode-go)
         - [Ruby](#base64-encode-ruby)
         - [JavaScript](#base64-encode-javascript)
         - [Crystal](#base64-encode-crystal)
         - [Python](#base64-encode-python)
   - [nanoid](#nanoid)
      - [JavaScript](#nanoid-javascript)
      - [Python](#nanoid-python)
   - [http](#http)
      - [Go](#http-go)
      - [Ruby](#http-ruby)
      - [Rust](#http-rust)
      - [JavaScript](#http-javascript)
      - [Crystal](#http-crystal)
      - [Python](#http-python)
   - [json](#json)
      - [stringify](#json-stringify)
         - [Go](#json-stringify-go)
         - [Ruby](#json-stringify-ruby)
         - [JavaScript](#json-stringify-javascript)
         - [Crystal](#json-stringify-crystal)
         - [Python](#json-stringify-python)
      - [parse](#json-parse)
         - [Go](#json-parse-go)
         - [Ruby](#json-parse-ruby)
         - [JavaScript](#json-parse-javascript)
         - [Crystal](#json-parse-crystal)
         - [Python](#json-parse-python)
   - [sqlite](#sqlite)
      - [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)
      - [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
      - [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
      - [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
      - [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
         - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)
   - [console](#console)
      - [Go](#console-go)
      - [Ruby](#console-ruby)
      - [JavaScript](#console-javascript)
      - [Crystal](#console-crystal)
      - [Python](#console-python)

## base64

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.04/iter ms | 890.12 µs | 1.52 ms | 1.18 ms | 941.02 µs |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.59/iter ms | 55.38 ms | 58.18 ms | 56.68 ms | 56.58 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.07/iter ms | 13.04 ms | 17.45 ms | 13.24 ms | 13.67 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.77/iter ms | 24.38 ms | 27.24 ms | 25.85 ms | 26.33 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.09/iter ms | 46.1 ms  | 59.76 ms | 47.86 ms | 47.27 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 2.08/iter ms | 1.9 ms | 2.69 ms | 1.95 ms | 2.03 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Python   | 22.08/iter ms | 21.28 ms | 23.37 ms | 22.3 ms | 22.12 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.04/iter ms | 856.63 µs | 1.71 ms | 1.02 ms | 1.02 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.32/iter ms | 55.24 ms | 62.76 ms | 58.33 ms | 56.47 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.52/iter ms | 13.61 ms | 16.31 ms | 14.14 ms | 14.57 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.14/iter ms | 24.81 ms | 27.5 ms  | 26.01 ms | 26.45 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.11/iter ms | 46.6 ms  | 55.9 ms  | 47.99 ms | 47.63 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max  |
| -------- | ------------ | ------- | ------- | ------- | ---- |
| Crystal  | 2.11/iter ms | 1.91 ms | 2.55 ms | 2.08 ms | 2 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 21.9/iter ms | 21.12 ms | 30.08 ms | 21.25 ms | 30.08 ms |

## nanoid

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99       | Min    | Max      |
| ------------------------------------ | ------------- | ------ | --------- | ------ | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 7.27/iter µs  | 3 µs   | 225.6 µs  | 4.6 µs | 106.8 µs |
| JavaScript / bun 0.1.8 (x64-linux)   | 16.63/iter µs | 2.4 µs | 642.91 µs | 5.1 µs | 267.8 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 60/iter µs    | 0 ps   | 2 ms      | 0 ps   | 2 ms     |

### <a name="nanoid-python">Python</a>

| Language | Average      | p75  | p99      | Min    | Max      |
| -------- | ------------ | ---- | -------- | ------ | -------- |
| Python   | 7.27/iter µs | 3 µs | 225.6 µs | 4.6 µs | 106.8 µs |

## http

### <a name="http-go">Go</a>

| Language | Average      | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------ | -------- | --------- | -------- | --------- | --------- |
| Go       | 57,109.5/rps | 3,752.12 | 65,793.49 | 59,205.3 | 64,649.15 | 873.43 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,496.42/rps | 819.26 | 14,408.38 | 12,998.72 | 14,156.67 | 4 ms    |

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Rust     | 7,195.15/rps | 691.28 | 9,607.04 | 7,606.17 | 8,809.26 | 6.96 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 85,867.47/rps | 12,066.55 | 207,810.34 | 88,684    | 90,720.62 | 581.39 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 46,138.76/rps | 4,433.06  | 59,615.22  | 48,545.91 | 49,207    | 1.08 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 41,123.88/rps | 4,732     | 43,636.38  | 42,474.56 | 43,286.19 | 1.21 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 81,385.93/rps | 5,090.49 | 85,532.09 | 83,584.92 | 84,874.99 | 612.99 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,981.53/rps | 671.36 | 7,090.79 | 6,550.63 | 6,923.16 | 8.75 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max     |
| -------- | ------------ | --------- | ------- | --------- | ------- |
| Go       | 1.07/iter ms | 956.94 µs | 1.58 ms | 987.34 µs | 1.01 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.45/iter ms | 60.49 ms | 62.96 ms | 61.44 ms | 62.17 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.36/iter ms | 13.07 ms | 16.22 ms | 14.45 ms | 13.94 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.64/iter ms | 24.75 ms | 26.99 ms | 25.73 ms | 25.06 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.3/iter ms  | 45.64 ms | 51.53 ms | 47.71 ms | 47.68 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.11/iter ms | 1.93 ms | 2.64 ms | 2.08 ms | 2.07 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average      | p75     | p99     | Min      | Max      |
| -------- | ------------ | ------- | ------- | -------- | -------- |
| Python   | 22.9/iter ms | 22.4 ms | 23.4 ms | 22.65 ms | 22.71 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.15/iter ms | 998.22 µs | 1.67 ms | 1.16 ms | 1.16 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 61.89/iter ms | 61.13 ms | 67.49 ms | 62.1 ms | 61.76 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.11/iter ms | 12.96 ms | 16.03 ms | 14.13 ms | 14.1 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 25.45/iter ms | 24.27 ms | 26.7 ms  | 25.48 ms | 25.94 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.71/iter ms | 46.37 ms | 50.38 ms | 47.98 ms | 47.16 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average     | p75     | p99     | Min     | Max     |
| -------- | ----------- | ------- | ------- | ------- | ------- |
| Crystal  | 2.2/iter ms | 1.98 ms | 3.23 ms | 2.11 ms | 2.74 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 23.1/iter ms | 22.61 ms | 24.42 ms | 23.19 ms | 22.92 ms |

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 188.31/iter µs | 158.6 µs  | 735.91 µs | 174.2 µs  | 675.41 µs |
| JavaScript / node 18.7.0 (x64-linux) | 533.28/iter µs | 475.91 µs | 1.97 ms   | 515.81 µs | 1.34 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.8/iter ms    | 0 ps      | 4 ms      | 2 ms      | 4 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max       |
| ------------------------------------ | -------------- | -------- | --------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 123.94/iter µs | 93.8 µs  | 671.81 µs | 103.6 µs | 623.61 µs |
| JavaScript / node 18.7.0 (x64-linux) | 356.06/iter µs | 336.7 µs | 1.16 ms   | 354.2 µs | 393.8 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 1/iter ms      | 0 ps     | 2 ms      | 2 ms     | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75     | p99       | Min      | Max      |
| ------------------------------------ | -------------- | ------- | --------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 70.44/iter µs  | 56.4 µs | 571.91 µs | 64.5 µs  | 190.3 µs |
| JavaScript / node 18.7.0 (x64-linux) | 218.41/iter µs | 186 µs  | 1.6 ms    | 199.2 µs | 1.04 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 840/iter µs    | 0 ps    | 2 ms      | 2 ms     | 2 ms     |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max       |
| ------------------------------------ | -------------- | -------- | -------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 113.31/iter µs | 49.7 µs  | 1.54 ms  | 64.7 µs  | 579.71 µs |
| JavaScript / node 18.7.0 (x64-linux) | 166.18/iter µs | 146.2 µs | 285.7 µs | 164.4 µs | 230.7 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 720/iter µs    | 0 ps     | 2 ms     | 2 ms     | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min       | Max      |
| ------------------------------------ | -------------- | -------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 35.22/iter ms  | 33.57 ms | 42.71 ms  | 34.46 ms  | 42.52 ms |
| JavaScript / node 18.7.0 (x64-linux) | 100.79/iter ms | 93.51 ms | 128.61 ms | 100.27 ms | 125.2 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 217.72/iter ms | 210 ms   | 332 ms    | 218 ms    | 240 ms   |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.05/iter ms | 903.98 µs | 1.61 ms | 1.03 ms | 1.02 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 57.4/iter ms | 56.37 ms | 69.43 ms | 57.83 ms | 57.44 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.11/iter ms | 13.09 ms | 21.66 ms | 13.5 ms  | 13.67 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.74/iter ms | 25.53 ms | 28.73 ms | 27.27 ms | 28.73 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.71/iter ms | 49.07 ms | 55.24 ms | 49.84 ms | 50.1 ms  |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.13/iter ms | 1.95 ms | 2.65 ms | 2.04 ms | 2.59 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 19.03/iter ms | 18.3 ms | 23.63 ms | 18.92 ms | 19.09 ms |

