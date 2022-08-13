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
| Go       | 1.01/iter ms | 845.05 µs | 1.57 ms | 1.03 ms | 883.65 µs |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Ruby     | 54.97/iter ms | 53.94 ms | 56.74 ms | 54.35 ms | 55.5 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.19/iter ms | 11.67 ms | 16.98 ms | 15.23 ms | 13.08 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.75/iter ms | 23.71 ms | 26.42 ms | 24.36 ms | 24.14 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.74/iter ms | 44.97 ms | 51.7 ms  | 46.25 ms | 46.54 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ms | 1.87 ms | 2.57 ms | 1.87 ms | 1.96 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Python   | 21.25/iter ms | 20.98 ms | 21.72 ms | 21.1 ms | 21.33 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.04/iter ms | 881.98 µs | 1.89 ms | 1.05 ms | 1.22 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.35/iter ms | 54.92 ms | 58.27 ms | 55.75 ms | 55.87 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.35/iter ms | 12.14 ms | 15.82 ms | 13.16 ms | 12.63 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.06/iter ms | 23.76 ms | 26.47 ms | 25.3 ms  | 26.07 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.21/iter ms | 45.32 ms | 50.51 ms | 47.49 ms | 47.4 ms  |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max    |
| -------- | ------------ | ------ | ------- | ------- | ------ |
| Crystal  | 2.13/iter ms | 1.9 ms | 2.71 ms | 2.39 ms | 2.5 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.41/iter ms | 21.09 ms | 22.92 ms | 21.23 ms | 21.16 ms |

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------- | -------- | --------- | -------- | --------- | --------- |
| Go       | 58,393.67/rps | 3,475.11 | 67,907.41 | 60,577.9 | 65,282.67 | 854.73 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,519.36/rps | 813.12 | 14,403.79 | 13,055.92 | 14,064.96 | 3.99 ms |

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Rust     | 6,871.82/rps | 699.53 | 8,581.28 | 7,333.97 | 8,453.75 | 7.27 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 84,730.38/rps | 16,014.06 | 97,206.25 | 90,660.4  | 93,319.81 | 587.83 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 46,333.05/rps | 3,992.38  | 49,279.96 | 48,483.48 | 49,044.49 | 1.08 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 39,056.91/rps | 4,619.36  | 41,401.95 | 40,337.66 | 41,163.32 | 1.28 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 82,726.73/rps | 2,958.05 | 86,192.17 | 84,150.01 | 85,287.19 | 603.05 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,947.99/rps | 639.94 | 7,003.33 | 6,452.62 | 6,796.62 | 8.75 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.32/iter ms | 1.08 ms | 2.62 ms | 1.32 ms | 1.21 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 62.77/iter ms | 60.39 ms | 64.58 ms | 61.46 ms | 61.66 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 15.37/iter ms | 14.29 ms | 17.16 ms | 14.95 ms | 15 ms    |
| JavaScript / deno 1.24.3 (x64-linux) | 27.58/iter ms | 26.26 ms | 31.38 ms | 27.81 ms | 28.7 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 49.93/iter ms | 48.34 ms | 53.26 ms | 50.76 ms | 50.69 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max    |
| -------- | ------------ | ------- | ------- | ------- | ------ |
| Crystal  | 2.17/iter ms | 1.95 ms | 2.85 ms | 2.04 ms | 2.1 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.89/iter ms | 23.38 ms | 24.48 ms | 23.98 ms | 23.69 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Go       | 1.25/iter ms | 1.07 ms | 1.7 ms | 1.14 ms | 1.33 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 63.65/iter ms | 62.72 ms | 65.45 ms | 62.92 ms | 64.11 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 14.77/iter ms | 13.99 ms | 16.8 ms  | 14.35 ms | 14.33 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.1/iter ms  | 24.17 ms | 27.4 ms  | 24.88 ms | 27.4 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 49.73/iter ms | 48.32 ms | 51.51 ms | 50 ms    | 49.6 ms  |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.13/iter ms | 1.96 ms | 2.72 ms | 2.05 ms | 2.45 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 24.04/iter ms | 22.91 ms | 25.82 ms | 23.92 ms | 24.08 ms |

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 187.66/iter µs | 162.1 µs  | 690.91 µs | 173.6 µs  | 680.51 µs |
| JavaScript / node 18.7.0 (x64-linux) | 521.3/iter µs  | 477.11 µs | 1.5 ms    | 512.61 µs | 1.37 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.74/iter ms   | 0 ps      | 4 ms      | 2 ms      | 4 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------ | -------------- | --------- | ------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 125.69/iter µs | 93.9 µs   | 1.51 ms | 101.6 µs  | 626.41 µs |
| JavaScript / node 18.7.0 (x64-linux) | 376.81/iter µs | 339.41 µs | 1.32 ms | 357.01 µs | 1.25 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 920/iter µs    | 0 ps      | 2 ms    | 2 ms      | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max       |
| ------------------------------------ | -------------- | -------- | --------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 65.32/iter µs  | 56.2 µs  | 209.71 µs | 64.5 µs  | 132.3 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 213.97/iter µs | 188.1 µs | 1.25 ms   | 200.3 µs | 923.92 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 800/iter µs    | 0 ps     | 2 ms      | 2 ms     | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99     | Min      | Max       |
| ------------------------------------ | ------------- | -------- | ------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 125/iter µs   | 49.1 µs  | 3.7 ms  | 64.5 µs  | 577.11 µs |
| JavaScript / node 18.7.0 (x64-linux) | 175.4/iter µs | 144.5 µs | 1.08 ms | 164.5 µs | 321.51 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 580/iter µs   | 0 ps     | 2 ms    | 2 ms     | 2 ms      |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min       | Max       |
| ------------------------------------ | -------------- | -------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 35.08/iter ms  | 33.56 ms | 42.68 ms  | 34.45 ms  | 42.47 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 101.09/iter ms | 94.1 ms  | 126.92 ms | 100.67 ms | 123.69 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 217.8/iter ms  | 210 ms   | 328 ms    | 218 ms    | 238 ms    |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75      | p99     | Min       | Max     |
| -------- | ------------ | -------- | ------- | --------- | ------- |
| Go       | 1.07/iter ms | 922.4 µs | 1.66 ms | 979.91 µs | 1.24 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.97/iter ms | 54.14 ms | 56.06 ms | 54.83 ms | 54.77 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.57/iter ms | 12.24 ms | 16.12 ms | 14.36 ms | 12.97 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.9/iter ms  | 23.96 ms | 26.42 ms | 24.13 ms | 24.48 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.21/iter ms | 46.77 ms | 51.1 ms  | 48.65 ms | 47.77 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average     | p75    | p99     | Min     | Max     |
| -------- | ----------- | ------ | ------- | ------- | ------- |
| Crystal  | 2.1/iter ms | 1.9 ms | 3.52 ms | 2.06 ms | 2.06 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 18.15/iter ms | 17.8 ms | 20.25 ms | 18.05 ms | 17.99 ms |

