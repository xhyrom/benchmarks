*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

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

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 61,057.82/rps | 4,057.93 | 68,676.82 | 63,691.51 | 67,280.26 | 817.06 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,686.86/rps | 819.65 | 14,963.66 | 13,213.33 | 14,246.23 | 3.94 ms |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 86,661.94/rps | 10,912.69 | 92,278.32 | 89,707.31 | 92,032.79 | 574.94 µs |
| JavaScript / deno 1.24.2 (x64-linux)  | 47,525.9/rps  | 4,803.25  | 52,105.76 | 50,076.98 | 50,650.59 | 1.05 ms   |
| JavaScript / node 16.16.0 (x64-linux) | 39,665.98/rps | 7,072.36  | 43,919.46 | 43,012.75 | 43,882.53 | 1.26 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Crystal  | 81,695.51/rps | 3,328.52 | 85,010.8 | 83,523.71 | 84,584.37 | 610.53 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75      | p99     | Min      | Max      | Latency |
| -------- | ------------ | -------- | ------- | -------- | -------- | ------- |
| Python   | 5,242.83/rps | 1,040.97 | 7,145.9 | 6,502.22 | 6,997.14 | 9.91 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75      | p99     | Min     | Max     |
| -------- | ------------ | -------- | ------- | ------- | ------- |
| Go       | 1.18/iter ms | 983.1 µs | 1.72 ms | 1.24 ms | 1.23 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.81/iter ms | 60.66 ms | 65.05 ms | 63.56 ms | 60.79 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.42/iter ms | 13.29 ms | 17.01 ms | 15.31 ms | 15.07 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.82/iter ms | 18.4 ms  | 28.27 ms | 19.01 ms | 20.31 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.41/iter ms | 36.67 ms | 46.37 ms | 37.65 ms | 37.92 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.84 ms | 2.7 ms | 1.97 ms | 1.86 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.84/iter ms | 22.45 ms | 24.24 ms | 22.71 ms | 22.77 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min    | Max     |
| -------- | ------------ | --------- | ------- | ------ | ------- |
| Go       | 1.23/iter ms | 998.81 µs | 2.31 ms | 1.3 ms | 1.39 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.05/iter ms | 60.31 ms | 62.48 ms | 60.66 ms | 60.96 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.93/iter ms | 13.29 ms | 17.84 ms | 16.07 ms | 14.75 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.48/iter ms | 18.62 ms | 25.54 ms | 19.79 ms | 18.82 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.2/iter ms  | 36.23 ms | 50.42 ms | 37.79 ms | 39.57 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.11/iter ms | 1.84 ms | 4.16 ms | 2.34 ms | 2.03 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 22.87/iter ms | 22.37 ms | 25.6 ms | 22.49 ms | 23.62 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.21/iter ms | 969.63 µs | 2.05 ms | 1.22 ms | 1.25 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.85/iter ms | 54.72 ms | 57.88 ms | 55.62 ms | 55.88 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.66/iter ms | 13.22 ms | 20.38 ms | 14.08 ms | 16.13 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.85/iter ms | 18.77 ms | 23.97 ms | 23.97 ms | 18.91 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.22/iter ms | 38.39 ms | 47.09 ms | 39.29 ms | 38.95 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.17/iter ms | 1.88 ms | 3.44 ms | 1.97 ms | 2.21 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.19/iter ms | 17.78 ms | 19.22 ms | 18.29 ms | 18.43 ms |

