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

| Language | Average       | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------- | -------- | --------- | -------- | --------- | --------- |
| Go       | 60,653.64/rps | 4,379.76 | 71,919.44 | 63,668.7 | 66,642.94 | 823.05 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,670.06/rps | 884.45 | 14,988.71 | 13,152.69 | 14,463.98 | 3.95 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99        | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | -------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 86,257.45/rps | 9,417    | 160,220.11 | 88,950.37 | 91,669.66 | 578.66 ns |
| JavaScript / deno 1.24.2 (x64-linux)  | 47,608.05/rps | 4,792.19 | 51,237.74  | 50,199.54 | 50,792.23 | 1.05 µs   |
| JavaScript / node 16.16.0 (x64-linux) | 41,142.23/rps | 5,453.62 | 43,817.9   | 42,671.86 | 43,453.05 | 1.21 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 80,416.92/rps | 3,648.51 | 84,167.69 | 82,434.37 | 83,751.62 | 620.59 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min     | Max      | Latency |
| -------- | ------------ | ------ | -------- | ------- | -------- | ------- |
| Python   | 6,170.28/rps | 632.48 | 7,149.68 | 6,639.3 | 6,969.82 | 8.38 µs |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.22/iter ms | 999.95 µs | 2.07 ms | 1.14 ms | 1.25 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 61.72/iter ms | 59.9 ms | 63.35 ms | 60.84 ms | 61.65 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.1/iter ms  | 13.63 ms | 17.4 ms  | 14.94 ms | 15.66 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.52/iter ms | 18.95 ms | 22.64 ms | 20.35 ms | 19.63 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.71/iter ms | 36.48 ms | 47.22 ms | 45.11 ms | 37.66 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.13/iter ms | 1.92 ms | 3.6 ms | 2.01 ms | 1.96 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 23.19/iter ms | 22.6 ms | 25.27 ms | 23.09 ms | 23.25 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99     | Min    | Max     |
| -------- | ------------ | ------- | ------- | ------ | ------- |
| Go       | 1.19/iter ms | 1.02 ms | 1.87 ms | 1.1 ms | 1.14 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.88/iter ms | 60.24 ms | 63.77 ms | 61.32 ms | 61.48 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.25/iter ms | 13.27 ms | 16.84 ms | 16.04 ms | 13.43 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 18.96/iter ms | 18.04 ms | 21 ms    | 18.8 ms  | 19.08 ms |
| JavaScript / node 16.16.0 (x64-linux) | 37.58/iter ms | 36.16 ms | 42.98 ms | 36.41 ms | 37.92 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.11/iter ms | 1.94 ms | 2.7 ms | 1.98 ms | 2.05 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 22.6/iter ms | 22.29 ms | 23.19 ms | 22.68 ms | 22.53 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min    | Max    |
| -------- | ------------ | --------- | ------- | ------ | ------ |
| Go       | 1.63/iter ms | 966.06 µs | 6.17 ms | 1.1 ms | 1.4 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average      | p75     | p99      | Min     | Max      |
| -------- | ------------ | ------- | -------- | ------- | -------- |
| Ruby     | 56.6/iter ms | 55.8 ms | 57.81 ms | 56.7 ms | 57.09 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.76/iter ms | 13.57 ms | 17.02 ms | 15.17 ms | 14.35 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.48/iter ms | 18.56 ms | 21.62 ms | 19.76 ms | 19.25 ms |
| JavaScript / node 16.16.0 (x64-linux) | 42.12/iter ms | 39.43 ms | 49.61 ms | 39.67 ms | 39.85 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.11/iter ms | 1.92 ms | 2.7 ms | 2.06 ms | 2.59 ms |

### <a name="console-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 18.6/iter ms | 17.83 ms | 22.92 ms | 18.71 ms | 18.35 ms |

