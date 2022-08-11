*Ran on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

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
| Go       | 68,321.24/rps | 4,574.64 | 77,609.02 | 71,132.93 | 74,593.67 | 730.15 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75     | p99    | Min       | Max      | Latency |
| -------- | ------------- | ------- | ------ | --------- | -------- | ------- |
| Ruby     | 13,576.47/rps | 1,005.2 | 15,853 | 14,203.74 | 15,246.4 | 3.68 ms |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 90,879.58/rps | 11,821.33 | 105,512.63 | 94,093.47 | 98,707.16 | 547.97 µs |
| JavaScript / deno 1.24.2 (x64-linux)  | 52,076.17/rps | 4,793.42  | 55,447.23  | 54,563.37 | 55,185.41 | 958.77 µs |
| JavaScript / node 16.16.0 (x64-linux) | 48,814.67/rps | 7,177.45  | 52,234     | 50,910.11 | 51,856.34 | 1.02 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 86,917.77/rps | 2,827.23 | 91,047.64 | 88,518.87 | 89,508.17 | 573.82 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,684.14/rps | 558.07 | 7,351.43 | 7,027.64 | 7,301.25 | 7.78 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99    | Min     | Max    |
| -------- | ------------ | --------- | ------ | ------- | ------ |
| Go       | 1.09/iter ms | 967.54 µs | 1.5 ms | 1.01 ms | 1.1 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 60.98/iter ms | 60.25 ms | 62.43 ms | 61.29 ms | 60.54 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 12.12/iter ms | 11.09 ms | 13.45 ms | 12.79 ms | 12.63 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.75/iter ms | 18.89 ms | 21.01 ms | 20.06 ms | 19.9 ms  |
| JavaScript / node 16.16.0 (x64-linux) | 38.33/iter ms | 37.43 ms | 41.61 ms | 38.74 ms | 38.42 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.89 ms | 2.53 ms | 1.94 ms | 1.95 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.04/iter ms | 22.66 ms | 23.65 ms | 23.14 ms | 22.87 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.09/iter ms | 970.38 µs | 1.41 ms | 1.05 ms | 1.03 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 60.95/iter ms | 59.99 ms | 61.91 ms | 60.64 ms | 60.49 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 12.55/iter ms | 11.89 ms | 13.6 ms  | 12.71 ms | 12.78 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.33/iter ms | 19.26 ms | 23.18 ms | 20.51 ms | 20.43 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.79/iter ms | 37.46 ms | 50.25 ms | 38.78 ms | 37.94 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.06/iter ms | 1.93 ms | 2.8 ms | 1.96 ms | 2.02 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.16/iter ms | 22.59 ms | 24.55 ms | 23.12 ms | 22.96 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99    | Min     | Max     |
| -------- | ------------ | --------- | ------ | ------- | ------- |
| Go       | 1.06/iter ms | 953.22 µs | 1.4 ms | 1.12 ms | 1.03 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.71/iter ms | 53.95 ms | 55.66 ms | 54.47 ms | 54.52 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 11.87/iter ms | 11.17 ms | 13.49 ms | 12.42 ms | 11.62 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.9/iter ms  | 18.93 ms | 21.47 ms | 19.41 ms | 19.67 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.5/iter ms  | 39.36 ms | 47.04 ms | 40.01 ms | 40.32 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.96/iter ms | 1.83 ms | 2.39 ms | 1.84 ms | 1.85 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 18.06/iter ms | 17.8 ms | 18.75 ms | 17.98 ms | 18.07 ms |

