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
         - [Ruby](#json-stringify-ruby)
         - [JavaScript](#json-stringify-javascript)
         - [Crystal](#json-stringify-crystal)
      - [parse](#json-parse)
         - [Ruby](#json-parse-ruby)
         - [JavaScript](#json-parse-javascript)
         - [Crystal](#json-parse-crystal)
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
| Go       | 58,123.75/rps | 4,416.54 | 65,207.63 | 61,046.62 | 63,953.95 | 858.75 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 11,936.34/rps | 799.85 | 13,798.83 | 12,497.86 | 13,383.37 | 4.19 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 81,072.84/rps | 10,762   | 92,466.58 | 84,484.76 | 90,639.84 | 614.26 ns |
| JavaScript / deno 1.24.2 (x64-linux)  | 46,351.97/rps | 4,315.69 | 49,932.22 | 48,860.5  | 49,490.85 | 1.08 µs   |
| JavaScript / node 16.16.0 (x64-linux) | 40,145.55/rps | 6,056.61 | 43,455.15 | 42,056.46 | 43,208.27 | 1.24 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max      | Latency   |
| -------- | ------------- | -------- | --------- | --------- | -------- | --------- |
| Crystal  | 77,161.74/rps | 5,395.05 | 81,773.26 | 79,340.81 | 81,159.1 | 645.91 ns |

### <a name="http-python">Python</a>

| Language | Average     | p75    | p99      | Min      | Max      | Latency |
| -------- | ----------- | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,459.6/rps | 898.97 | 6,789.54 | 6,150.67 | 6,597.48 | 9.51 µs |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 64.76/iter ms | 63.61 ms | 67.23 ms | 65.19 ms | 65.52 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.58/iter ms | 14.91 ms | 17.2 ms  | 15.86 ms | 15.81 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 21.09/iter ms | 20.17 ms | 21.91 ms | 21.25 ms | 20.83 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.26/iter ms | 39.06 ms | 42.52 ms | 40.21 ms | 39.88 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.24/iter ms | 2.01 ms | 2.82 ms | 2.82 ms | 2.12 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 64.28/iter ms | 63.45 ms | 65.83 ms | 64.06 ms | 64.44 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.71/iter ms | 14.92 ms | 17.26 ms | 15.43 ms | 15.28 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.85/iter ms | 19.84 ms | 21.71 ms | 20.77 ms | 20.82 ms |
| JavaScript / node 16.16.0 (x64-linux) | 39.99/iter ms | 38.7 ms  | 42.1 ms  | 40.16 ms | 40.04 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.24/iter ms | 2.03 ms | 2.84 ms | 2.13 ms | 2.11 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.31/iter ms | 1.11 ms | 1.97 ms | 1.29 ms | 1.24 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 58.24/iter ms | 57.54 ms | 59.4 ms | 58.45 ms | 57.87 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.61/iter ms | 14.91 ms | 17.15 ms | 14.92 ms | 15.76 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.94/iter ms | 19.81 ms | 21.62 ms | 20.67 ms | 21.51 ms |
| JavaScript / node 16.16.0 (x64-linux) | 42.2/iter ms  | 40.6 ms  | 46.01 ms | 44.44 ms | 41.62 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.18/iter ms | 1.98 ms | 2.81 ms | 2.04 ms | 2.29 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 19.57/iter ms | 19.15 ms | 19.92 ms | 19.73 ms | 19.69 ms |

