*Ran on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

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

| Language | Average      | p75       | p99     | Min       | Max       |
| -------- | ------------ | --------- | ------- | --------- | --------- |
| Go       | 1.13/iter ms | 889.25 µs | 2.93 ms | 952.45 µs | 940.45 µs |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.24/iter ms | 53.38 ms | 57.79 ms | 53.73 ms | 53.39 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 10.95/iter ms | 10.3 ms  | 11.96 ms | 11.11 ms | 10.35 ms |
| JavaScript / deno 1.24.3 (x64-linux)  | 24.57/iter ms | 23.65 ms | 27.32 ms | 26.21 ms | 25.52 ms |
| JavaScript / node 16.16.0 (x64-linux) | 36.96/iter ms | 36.37 ms | 40.61 ms | 36.52 ms | 36.54 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.01/iter ms | 1.91 ms | 2.46 ms | 1.94 ms | 1.93 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 21.2/iter ms | 21.02 ms | 21.87 ms | 21.21 ms | 21.12 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99     | Min     | Max     |
| -------- | -------------- | --------- | ------- | ------- | ------- |
| Go       | 990.01/iter µs | 905.21 µs | 1.23 ms | 1.05 ms | 1.03 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.56/iter ms | 53.67 ms | 55.62 ms | 55.29 ms | 54.75 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 11.26/iter ms | 10.35 ms | 12.82 ms | 10.57 ms | 10.42 ms |
| JavaScript / deno 1.24.3 (x64-linux)  | 24.6/iter ms  | 23.55 ms | 31.93 ms | 24.72 ms | 24.3 ms  |
| JavaScript / node 16.16.0 (x64-linux) | 36.92/iter ms | 36.28 ms | 38.49 ms | 36.61 ms | 37.16 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.07/iter ms | 1.89 ms | 6.27 ms | 1.96 ms | 2.27 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.31/iter ms | 21.08 ms | 22.29 ms | 21.23 ms | 21.16 ms |

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 68,950.76/rps | 4,808.06 | 78,259.73 | 71,794.86 | 75,995.37 | 723.69 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 13,878.12/rps | 843.23 | 16,295.96 | 14,397.83 | 15,648.33 | 3.6 ms  |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 89,898.07/rps | 10,681.82 | 99,411.05 | 93,133.21 | 97,230.88 | 553.98 µs |
| JavaScript / deno 1.24.3 (x64-linux)  | 50,373.61/rps | 4,537.04  | 53,827.07 | 52,673.78 | 53,591.53 | 991.36 µs |
| JavaScript / node 16.16.0 (x64-linux) | 49,247.51/rps | 7,545.4   | 52,328.12 | 51,581.58 | 52,265.88 | 1.01 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 85,727.16/rps | 4,119.58 | 89,596.36 | 87,467.68 | 88,239.11 | 582.01 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,725.07/rps | 703.18 | 7,547.03 | 7,118.07 | 7,471.09 | 7.8 ms  |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.07/iter ms | 956.37 µs | 1.49 ms | 1.27 ms | 1.05 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 60.09/iter ms | 59.06 ms | 62.27 ms | 59.63 ms | 59.58 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 10.78/iter ms | 9.86 ms  | 12.42 ms | 9.92 ms  | 11.07 ms |
| JavaScript / deno 1.24.3 (x64-linux)  | 24.66/iter ms | 24.01 ms | 26.27 ms | 24.66 ms | 24.43 ms |
| JavaScript / node 16.16.0 (x64-linux) | 37.1/iter ms  | 36.36 ms | 41.91 ms | 36.85 ms | 37.43 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min  | Max     |
| -------- | ------------ | ------ | ------- | ---- | ------- |
| Crystal  | 2.02/iter ms | 1.9 ms | 2.36 ms | 2 ms | 1.93 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.69/iter ms | 22.34 ms | 26.03 ms | 22.84 ms | 22.76 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99    | Min       | Max     |
| -------- | ------------ | --------- | ------ | --------- | ------- |
| Go       | 1.07/iter ms | 978.73 µs | 1.4 ms | 984.33 µs | 1.01 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Ruby     | 59.52/iter ms | 58.83 ms | 60.67 ms | 59.28 ms | 59.8 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 10.83/iter ms | 9.89 ms  | 12.2 ms  | 10.27 ms | 10.56 ms |
| JavaScript / deno 1.24.3 (x64-linux)  | 24.46/iter ms | 23.52 ms | 25.35 ms | 24.22 ms | 24.49 ms |
| JavaScript / node 16.16.0 (x64-linux) | 37.03/iter ms | 36.34 ms | 40.93 ms | 36.89 ms | 37.18 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.91 ms | 2.33 ms | 2.08 ms | 1.98 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.54/iter ms | 22.33 ms | 23.03 ms | 22.48 ms | 22.45 ms |

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                              | Average        | p75    | p99    | Min    | Max    |
| ------------------------------------- | -------------- | ------ | ------ | ------ | ------ |
| JavaScript / deno 1.24.3 (x64-linux)  | 235.82/iter ms | 228 ms | 342 ms | 236 ms | 254 ms |
| JavaScript / node 16.16.0 (x64-linux) | 235.82/iter ms | 228 ms | 342 ms | 236 ms | 254 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min  | Max       |
| -------- | ------------ | --------- | ------- | ---- | --------- |
| Go       | 1.06/iter ms | 945.16 µs | 1.36 ms | 1 ms | 954.46 µs |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.54/iter ms | 53.79 ms | 55.63 ms | 54.55 ms | 54.72 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 11.04/iter ms | 10.08 ms | 15.57 ms | 10.77 ms | 11.52 ms |
| JavaScript / deno 1.24.3 (x64-linux)  | 24.87/iter ms | 23.82 ms | 27.31 ms | 24.26 ms | 25.04 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.76/iter ms | 38.21 ms | 41.29 ms | 38.84 ms | 38.55 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.91 ms | 2.45 ms | 2.29 ms | 2.01 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.06/iter ms | 17.84 ms | 18.62 ms | 18.04 ms | 18.07 ms |

