*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [json](#json)
      - [parse](#json-parse)
         - [Python](#json-parse-python)
         - [Crystal](#json-parse-crystal)
         - [JavaScript](#json-parse-javascript)
         - [Ruby](#json-parse-ruby)
      - [stringify](#json-stringify)
         - [Python](#json-stringify-python)
         - [Crystal](#json-stringify-crystal)
         - [JavaScript](#json-stringify-javascript)
         - [Ruby](#json-stringify-ruby)
   - [http](#http)
      - [Python](#http-python)
      - [Crystal](#http-crystal)
      - [JavaScript](#http-javascript)
      - [Ruby](#http-ruby)
      - [Go](#http-go)
   - [console](#console)
      - [Python](#console-python)
      - [Crystal](#console-crystal)
      - [JavaScript](#console-javascript)
      - [Ruby](#console-ruby)
      - [Go](#console-go)

## json

### <a name="json-parse">parse</a>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 15.87/iter ms | 15.14 ms | 18.62 ms | 15.46 ms | 15.29 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Crystal  | 1.27/iter ms | 946.05 µs | 2.42 ms | 1.07 ms | 1.11 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 9.11/iter ms  | 8.4 ms   | 13.14 ms | 9.29 ms  | 8.52 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.15/iter ms | 12.84 ms | 18.73 ms | 13.84 ms | 13.84 ms |
| JavaScript / node 18.7.0 (x64-linux) | 36.23/iter ms | 35.02 ms | 39.02 ms | 37.1 ms  | 37.69 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 43.5/iter ms | 41.84 ms | 49.86 ms | 43.39 ms | 43.79 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 15.76/iter ms | 15.11 ms | 19.7 ms | 15.37 ms | 15.43 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75      | p99    | Min       | Max    |
| -------- | ------------ | -------- | ------ | --------- | ------ |
| Crystal  | 1.22/iter ms | 892.6 µs | 2.8 ms | 964.03 µs | 1.4 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 8.96/iter ms  | 8.32 ms  | 11.3 ms  | 8.96 ms  | 8.64 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 13.94/iter ms | 13.2 ms  | 19.33 ms | 13.69 ms | 13.72 ms |
| JavaScript / node 18.7.0 (x64-linux) | 36.56/iter ms | 35.04 ms | 42.98 ms | 37.39 ms | 36.97 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.99/iter ms | 42.08 ms | 49.78 ms | 44.67 ms | 42.78 ms |

## http

### <a name="http-python">Python</a>

| Language | Average    | p75    | p99      | Min | Max      | Latency   |
| -------- | ---------- | ------ | -------- | --- | -------- | --------- |
| Python   | 110.35/rps | 290.55 | 1,450.31 | 0   | 1,151.36 | 554.01 µs |

### <a name="http-crystal">Crystal</a>

| Language | Average        | p75       | p99        | Min       | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | --------- |
| Crystal  | 102,772.52/rps | 12,882.31 | 150,809.78 | 109,464.1 | 136,207.85 | 485.31 ns |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max        | Latency   |
| ------------------------------------ | -------------- | --------- | --------- | --------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 129,193.91/rps | 13,165.75 | 174,393.6 | 134,494.3 | 156,614.13 | 385.73 ns |
| JavaScript / deno 1.24.2 (x64-linux) | 64,364.32/rps  | 12,078.37 | 79,309.52 | 72,902.76 | 78,822.63  | 775.37 ns |
| JavaScript / node 18.7.0 (x64-linux) | 44,064.89/rps  | 7,632.5   | 51,569.04 | 49,586.78 | 51,257.2   | 1.13 µs   |

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75      | p99       | Min     | Max       | Latency  |
| -------- | ------------ | -------- | --------- | ------- | --------- | -------- |
| Ruby     | 3,879.28/rps | 2,910.42 | 12,464.62 | 7,509.6 | 10,058.09 | 12.87 µs |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Go       | 211,856.81/rps | 21,402.32 | 239,420.78 | 221,639.37 | 237,599.98 | 234.26 ns |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 10.65/iter ms | 9.07 ms | 15.75 ms | 12.34 ms | 12.06 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Crystal  | 836.83/iter µs | 284.43 µs | 2.81 ms | 619.58 µs | 362.88 µs |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 8.97/iter ms  | 8.19 ms  | 10.91 ms | 9.34 ms  | 8.79 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.14/iter ms | 12.91 ms | 18.45 ms | 13.92 ms | 13.92 ms |
| JavaScript / node 18.7.0 (x64-linux) | 39.29/iter ms | 37.02 ms | 50.28 ms | 38.23 ms | 42.74 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 42.55/iter ms | 39.64 ms | 55.73 ms | 40.79 ms | 42.17 ms |

### <a name="console-go">Go</a>

| Language | Average        | p75  | p99     | Min  | Max  |
| -------- | -------------- | ---- | ------- | ---- | ---- |
| Go       | 208.67/iter µs | 0 ps | 1.54 ms | 0 ps | 0 ps |

