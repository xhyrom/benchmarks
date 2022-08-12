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

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 968.76/iter µs | 845.09 µs | 1.37 ms | 868.69 µs | 895.49 µs |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Ruby     | 55.61/iter ms | 54.95 ms | 57.96 ms | 54.95 ms | 55.8 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.69/iter ms | 11.6 ms  | 14.84 ms | 12.4 ms  | 11.8 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 25.86/iter ms | 24.89 ms | 26.93 ms | 25.69 ms | 25.58 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.08/iter ms | 46.88 ms | 52.88 ms | 47.84 ms | 47.7 ms  |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ms | 1.88 ms | 2.49 ms | 1.94 ms | 1.96 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.29/iter ms | 20.97 ms | 22.55 ms | 21.14 ms | 21.47 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 939.62/iter µs | 840.44 µs | 1.26 ms | 904.23 µs | 953.13 µs |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 55.72/iter ms | 55.03 ms | 57.32 ms | 55.5 ms | 55.51 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.57/iter ms | 11.79 ms | 13.86 ms | 12.48 ms | 12.53 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.97/iter ms | 24.64 ms | 27.75 ms | 26.78 ms | 25.42 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.14/iter ms | 46.87 ms | 51.12 ms | 48.7 ms  | 48.22 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average   | p75     | p99     | Min     | Max     |
| -------- | --------- | ------- | ------- | ------- | ------- |
| Crystal  | 2/iter ms | 1.87 ms | 2.51 ms | 1.96 ms | 1.93 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.58/iter ms | 21.21 ms | 22.72 ms | 21.62 ms | 21.57 ms |

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 64,189.97/rps | 3,733.53 | 75,192.66 | 66,571.89 | 71,463.39 | 777.43 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 13,736.01/rps | 785.15 | 15,623.93 | 14,240.74 | 15,286.66 | 3.64 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 90,827.14/rps | 11,457.55 | 103,593.75 | 94,119.39 | 97,683.56 | 548.47 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 50,738.81/rps | 4,820.99  | 54,639.43  | 53,404.11 | 54,218.38 | 984.01 µs |
| JavaScript / node 18.7.0 (x64-linux) | 49,107.25/rps | 6,071.03  | 52,043.52  | 50,796.67 | 51,683.31 | 1.02 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------ | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 86,587.2/rps | 2,988.78 | 89,804.36 | 88,151.24 | 89,102.97 | 576.14 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min     | Max      | Latency |
| -------- | ------------ | ------ | -------- | ------- | -------- | ------- |
| Python   | 6,664.09/rps | 676.44 | 7,539.37 | 7,052.6 | 7,349.63 | 7.81 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.04/iter ms | 907.11 µs | 1.38 ms | 1.02 ms | 959.51 µs |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.26/iter ms | 60.23 ms | 63.59 ms | 61.16 ms | 61.42 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.15/iter ms | 11.17 ms | 13.33 ms | 11.78 ms | 11.86 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.81/iter ms | 24.52 ms | 31.35 ms | 25.39 ms | 25.9 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 47.88/iter ms | 46.81 ms | 50.65 ms | 47.96 ms | 47.72 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.01/iter ms | 1.87 ms | 2.44 ms | 1.89 ms | 1.91 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.93/iter ms | 22.54 ms | 24.09 ms | 22.93 ms | 22.79 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.06/iter ms | 933.36 µs | 1.38 ms | 1.05 ms | 1.05 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 61.24/iter ms | 60.44 ms | 63.8 ms | 60.44 ms | 61.53 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.41/iter ms | 11.21 ms | 14.25 ms | 14.18 ms | 11.51 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.78/iter ms | 24.47 ms | 27 ms    | 26.19 ms | 25.27 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.97/iter ms | 46.83 ms | 51.9 ms  | 47.51 ms | 48.03 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 2.04/iter ms | 1.9 ms | 2.51 ms | 2.06 ms | 1.98 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 22.81/iter ms | 22.23 ms | 23.59 ms | 22.56 ms | 23.1 ms |

## sqlite

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max       |
| ------------------------------------ | -------------- | -------- | --------- | -------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 37/iter ms     | 32.95 ms | 73.54 ms  | 34.91 ms | 65.81 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 99.56/iter ms  | 93.36 ms | 124.45 ms | 99.31 ms | 120.94 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 232.62/iter ms | 226 ms   | 340 ms    | 232 ms   | 250 ms    |

## console

### <a name="console-go">Go</a>

| Language | Average       | p75       | p99     | Min     | Max       |
| -------- | ------------- | --------- | ------- | ------- | --------- |
| Go       | 979.7/iter µs | 863.62 µs | 1.48 ms | 1.05 ms | 990.51 µs |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.65/iter ms | 54.97 ms | 57.56 ms | 55.55 ms | 55.81 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.13/iter ms | 11.02 ms | 13.91 ms | 11.79 ms | 12.84 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.49/iter ms | 25.62 ms | 27.75 ms | 26.89 ms | 26.95 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.08/iter ms | 48.98 ms | 53.44 ms | 49.82 ms | 49.94 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ms | 1.87 ms | 2.47 ms | 1.98 ms | 1.94 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.18/iter ms | 17.86 ms | 19.61 ms | 18.16 ms | 17.95 ms |

