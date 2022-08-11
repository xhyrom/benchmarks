*Ran on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
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
   - [console](#console)
      - [Go](#console-go)
      - [Ruby](#console-ruby)
      - [JavaScript](#console-javascript)
      - [Crystal](#console-crystal)
      - [Python](#console-python)

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Go       | 57,616.34/rps | 5,304.22 | 68,311.9 | 61,059.99 | 67,338.18 | 866.41 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 11,233.77/rps | 953.06 | 13,196.66 | 11,762.74 | 12,866.63 | 4.45 ms |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 87,435.62/rps | 12,557.75 | 102,218.43 | 93,231.01 | 99,082.36 | 570.17 µs |
| JavaScript / deno 1.24.2 (x64-linux)  | 44,847.28/rps | 4,600.32  | 52,402.99  | 47,382.29 | 51,173.94 | 1.11 ms   |
| JavaScript / node 16.16.0 (x64-linux) | 38,141.1/rps  | 6,246.48  | 43,469.92  | 40,367.7  | 43,207.16 | 1.31 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 78,961.89/rps | 4,137.31 | 89,786.54 | 81,464.93 | 87,266.46 | 632.04 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,367.88/rps | 795.77 | 6,858.86 | 6,182.98 | 6,734.15 | 9.72 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99    | Min       | Max     |
| -------- | ------------ | --------- | ------ | --------- | ------- |
| Go       | 1.21/iter ms | 675.07 µs | 1.8 ms | 891.77 µs | 1.55 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 64.49/iter ms | 59.69 ms | 70.42 ms | 62.69 ms | 67.16 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.66/iter ms | 12.42 ms | 18.31 ms | 14.3 ms  | 15.09 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.58/iter ms | 17.61 ms | 25.33 ms | 20.77 ms | 19.48 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.68/iter ms | 35.84 ms | 46.98 ms | 38.52 ms | 42.09 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min    | Max     |
| -------- | ------------ | ------ | ------- | ------ | ------- |
| Crystal  | 2.43/iter ms | 1.8 ms | 7.26 ms | 2.3 ms | 2.47 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 26.12/iter ms | 23.36 ms | 29.47 ms | 26.34 ms | 25.86 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average     | p75       | p99     | Min     | Max     |
| -------- | ----------- | --------- | ------- | ------- | ------- |
| Go       | 1.3/iter ms | 804.04 µs | 1.99 ms | 1.54 ms | 1.39 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 63.86/iter ms | 58.67 ms | 73.85 ms | 62.99 ms | 63.89 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 16.06/iter ms | 14.54 ms | 22.14 ms | 18.08 ms | 16.16 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.16/iter ms | 17.85 ms | 23.96 ms | 23.68 ms | 20.56 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.87/iter ms | 36.87 ms | 48.12 ms | 39.51 ms | 41.2 ms  |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.24/iter ms | 1.46 ms | 3.13 ms | 2.07 ms | 2.24 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 24.22/iter ms | 21.84 ms | 27.82 ms | 26.53 ms | 25.09 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.25/iter ms | 902.42 µs | 1.96 ms | 1.21 ms | 1.29 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 57.71/iter ms | 52.29 ms | 65.01 ms | 60.2 ms | 54.71 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.29/iter ms | 12.69 ms | 18.53 ms | 14.03 ms | 15.17 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.87/iter ms | 18.68 ms | 25.89 ms | 20.86 ms | 20.94 ms |
| JavaScript / node 16.16.0 (x64-linux) | 42.57/iter ms | 37.78 ms | 51.58 ms | 43.17 ms | 41.44 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.23/iter ms | 1.63 ms | 3.62 ms | 2.14 ms | 1.91 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 19.31/iter ms | 16.9 ms | 22.69 ms | 20.68 ms | 19.38 ms |

