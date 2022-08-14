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

| Language | Average      | p75       | p99     | Min     | Max    |
| -------- | ------------ | --------- | ------- | ------- | ------ |
| Go       | 1.06/iter ms | 918.57 µs | 1.56 ms | 1.08 ms | 1.1 ms |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.29/iter ms | 53.95 ms | 57.25 ms | 56.37 ms | 54.78 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.19/iter ms | 11.98 ms | 17.37 ms | 12.22 ms | 12.5 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 24.89/iter ms | 23.98 ms | 26.66 ms | 26 ms    | 26.3 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 46.73/iter ms | 45.31 ms | 50.55 ms | 46.87 ms | 46.35 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 2.07/iter ms | 1.9 ms | 3.82 ms | 1.96 ms | 2.06 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.52/iter ms | 21.25 ms | 22.25 ms | 21.48 ms | 21.67 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average     | p75       | p99     | Min     | Max     |
| -------- | ----------- | --------- | ------- | ------- | ------- |
| Go       | 1.1/iter ms | 940.81 µs | 1.72 ms | 1.72 ms | 1.36 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.42/iter ms | 54.49 ms | 56.67 ms | 55.55 ms | 55.71 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.19/iter ms | 12.3 ms  | 14.59 ms | 13.12 ms | 12.68 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.83/iter ms | 23.8 ms  | 26.03 ms | 25.78 ms | 24.35 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.76/iter ms | 45.48 ms | 49.92 ms | 45.8 ms  | 45.96 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.09/iter ms | 1.92 ms | 2.61 ms | 2.07 ms | 2.37 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.47/iter ms | 21.12 ms | 22.42 ms | 21.51 ms | 21.56 ms |

## nanoid

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99       | Min     | Max      |
| ------------------------------------ | ------------- | ------ | --------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 7.35/iter µs  | 3.1 µs | 216.9 µs  | 5.1 µs  | 98.8 µs  |
| JavaScript / bun 0.1.8 (x64-linux)   | 10.7/iter µs  | 2.4 µs | 264.6 µs  | 5.3 µs  | 130.8 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 23.59/iter µs | 5.6 µs | 638.91 µs | 14.3 µs | 252.4 µs |

### <a name="nanoid-python">Python</a>

| Language | Average      | p75    | p99      | Min    | Max     |
| -------- | ------------ | ------ | -------- | ------ | ------- |
| Python   | 7.35/iter µs | 3.1 µs | 216.9 µs | 5.1 µs | 98.8 µs |

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max      | Latency   |
| -------- | ------------- | -------- | --------- | --------- | -------- | --------- |
| Go       | 58,589.93/rps | 3,136.22 | 67,663.68 | 60,715.37 | 65,183.9 | 851.72 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,689.79/rps | 844.55 | 14,831.42 | 13,204.13 | 14,102.39 | 3.94 ms |

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Rust     | 7,224.47/rps | 722.77 | 9,713.69 | 7,626.66 | 9,009.25 | 6.93 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 87,220.6/rps  | 11,289.45 | 93,564.68 | 90,246.45 | 92,379.4  | 571.93 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 46,522.35/rps | 4,311.42  | 50,315.23 | 48,716.08 | 49,661.67 | 1.07 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 41,446.52/rps | 4,726.71  | 43,478.94 | 42,686.42 | 43,216.37 | 1.21 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 81,986.67/rps | 2,920.92 | 84,715.92 | 83,494.13 | 84,212.48 | 608.34 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,027.66/rps | 703.77 | 7,214.73 | 6,634.34 | 6,999.45 | 8.61 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.13/iter ms | 972.89 µs | 1.86 ms | 1.22 ms | 1.25 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.06/iter ms | 59.84 ms | 62.64 ms | 61.01 ms | 60.59 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.93/iter ms | 11.53 ms | 15.22 ms | 12.7 ms  | 13.75 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.95/iter ms | 24.13 ms | 26.11 ms | 24.71 ms | 25.06 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.92/iter ms | 45.49 ms | 51.2 ms  | 46.15 ms | 47.12 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.16/iter ms | 1.92 ms | 2.96 ms | 2.05 ms | 2.08 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.86/iter ms | 22.49 ms | 23.57 ms | 22.56 ms | 22.56 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99    | Min     | Max    |
| -------- | ------------ | --------- | ------ | ------- | ------ |
| Go       | 1.17/iter ms | 996.31 µs | 1.6 ms | 1.43 ms | 1.1 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max     |
| -------- | ------------- | -------- | -------- | ------- | ------- |
| Ruby     | 60.73/iter ms | 59.98 ms | 61.72 ms | 60.1 ms | 60.2 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.88/iter ms | 11.63 ms | 15.34 ms | 13.04 ms | 13.61 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.75/iter ms | 23.89 ms | 25.94 ms | 25.56 ms | 24.51 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.49/iter ms | 44.86 ms | 52.75 ms | 46.27 ms | 46.44 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min    | Max     |
| -------- | ------------ | ------- | ------- | ------ | ------- |
| Crystal  | 2.15/iter ms | 1.93 ms | 2.67 ms | 2.1 ms | 1.93 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 22.8/iter ms | 22.46 ms | 23.89 ms | 22.92 ms | 22.55 ms |

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 186.35/iter µs | 160.5 µs  | 690.51 µs | 174.5 µs  | 658.31 µs |
| JavaScript / node 18.7.0 (x64-linux) | 522.64/iter µs | 480.01 µs | 1.45 ms   | 514.51 µs | 1.34 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.7/iter ms    | 890.21 µs | 4.79 ms   | 2.07 ms   | 2.6 ms    |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 116.69/iter µs | 93.8 µs   | 600.11 µs | 101 µs    | 597.71 µs |
| JavaScript / node 18.7.0 (x64-linux) | 362.93/iter µs | 341.5 µs  | 1.12 ms   | 358.6 µs  | 646.11 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 927.76/iter µs | 855.71 µs | 2.18 ms   | 900.31 µs | 1.55 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 68.69/iter µs  | 56.6 µs   | 576.41 µs | 64.2 µs   | 131 µs    |
| JavaScript / node 18.7.0 (x64-linux) | 215.44/iter µs | 185.6 µs  | 1.61 ms   | 196.7 µs  | 973.21 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 837.06/iter µs | 758.71 µs | 2.12 ms   | 830.21 µs | 1.7 ms    |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 98.44/iter µs  | 49.4 µs   | 580.11 µs | 63.4 µs   | 578.51 µs |
| JavaScript / node 18.7.0 (x64-linux) | 166.53/iter µs | 144.8 µs  | 291.2 µs  | 165.9 µs  | 253 µs    |
| JavaScript / deno 1.24.3 (x64-linux) | 660.55/iter µs | 586.61 µs | 2.21 ms   | 675.11 µs | 1.08 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 35.17/iter ms  | 33.67 ms  | 42.44 ms  | 34.72 ms  | 42.24 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 100.39/iter ms | 93.72 ms  | 125.82 ms | 99.91 ms  | 123.82 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 228.68/iter ms | 220.86 ms | 341.14 ms | 229.32 ms | 246.69 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.07/iter ms | 945.08 µs | 1.63 ms | 1.07 ms | 979.18 µs |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 55.03/iter ms | 54.18 ms | 56.1 ms | 55.01 ms | 55.12 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.12/iter ms | 12.09 ms | 15.93 ms | 12.48 ms | 13.2 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 25.01/iter ms | 23.83 ms | 26.95 ms | 25.18 ms | 25.31 ms |
| JavaScript / node 18.7.0 (x64-linux) | 49.18/iter ms | 47.11 ms | 54.72 ms | 47.86 ms | 48.12 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min    | Max     |
| -------- | ------------ | ------ | ------- | ------ | ------- |
| Crystal  | 2.08/iter ms | 1.9 ms | 3.88 ms | 2.2 ms | 1.93 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.32/iter ms | 17.96 ms | 19.64 ms | 18.49 ms | 18.21 ms |

