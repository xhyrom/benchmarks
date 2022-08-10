*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [json](#json)
      - [parse](#json-parse)
         - [Python](#json-parse-python)
         - [Crystal](#json-parse-crystal)
         - [JavaScript](#json-parse-javascript)
         - [Ruby](#json-parse-ruby)
         - [Go](#json-parse-go)
      - [stringify](#json-stringify)
         - [Python](#json-stringify-python)
         - [Crystal](#json-stringify-crystal)
         - [JavaScript](#json-stringify-javascript)
         - [Ruby](#json-stringify-ruby)
         - [Go](#json-stringify-go)
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

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 15.56/iter ms | 15.24 ms | 16.98 ms | 15.59 ms | 15.4 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average   | p75       | p99      | Min     | Max    |
| -------- | --------- | --------- | -------- | ------- | ------ |
| Crystal  | 2/iter ms | 853.75 µs | 33.95 ms | 1.02 ms | 1.2 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 9.71/iter ms  | 8.11 ms  | 16.24 ms | 8.17 ms  | 10.14 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 15.31/iter ms | 13.23 ms | 41.08 ms | 18.48 ms | 13.98 ms |
| JavaScript / node 18.7.0 (x64-linux) | 35.95/iter ms | 35.27 ms | 39.18 ms | 38.06 ms | 35.98 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.85/iter ms | 42.56 ms | 71.95 ms | 43.71 ms | 42.74 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 654.79/iter µs | 480.54 µs | 2.29 ms | 537.28 µs | 652.15 µs |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 15.39/iter ms | 15.05 ms | 16.5 ms | 15.34 ms | 15.18 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.51/iter ms | 1.03 ms | 5.64 ms | 1.34 ms | 1.21 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 8.73/iter ms  | 8.46 ms  | 9.46 ms  | 8.46 ms  | 8.57 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 15.93/iter ms | 13.35 ms | 50.39 ms | 14.34 ms | 15.33 ms |
| JavaScript / node 18.7.0 (x64-linux) | 36.91/iter ms | 35.3 ms  | 47.99 ms | 35.57 ms | 38.37 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.42/iter ms | 42.36 ms | 52.93 ms | 43.15 ms | 45.05 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 691.79/iter µs | 483.51 µs | 1.46 ms | 662.46 µs | 824.06 µs |

## http

### <a name="http-python">Python</a>

| Language | Average    | p75    | p99      | Min      | Max      | Latency  |
| -------- | ---------- | ------ | -------- | -------- | -------- | -------- |
| Python   | 707.67/rps | 869.54 | 3,741.44 | 1,496.65 | 3,362.16 | 72.98 ms |

### <a name="http-crystal">Crystal</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Crystal  | 107,750.62/rps | 15,704.41 | 163,581.73 | 114,520.49 | 156,533.26 | 462.83 µs |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99        | Min        | Max        | Latency   |
| ------------------------------------ | -------------- | -------- | ---------- | ---------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 129,181.45/rps | 15,162.9 | 168,232.23 | 133,514.34 | 158,356.62 | 385.8 µs  |
| JavaScript / deno 1.24.2 (x64-linux) | 74,692.51/rps  | 8,441.97 | 81,528.28  | 79,070.65  | 80,879.77  | 667.98 µs |
| JavaScript / node 18.7.0 (x64-linux) | 45,866.67/rps  | 7,675.75 | 51,764.86  | 50,566.86  | 51,557.86  | 1.09 ms   |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75      | p99       | Min       | Max      | Latency |
| -------- | ------------- | -------- | --------- | --------- | -------- | ------- |
| Ruby     | 10,667.21/rps | 6,161.23 | 28,629.35 | 15,212.56 | 25,786.4 | 4.68 ms |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min        | Max       | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | --------- | --------- |
| Go       | 213,767.82/rps | 29,989.26 | 252,623.14 | 233,132.21 | 248,111.9 | 232.17 µs |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max     |
| -------- | ------------- | ------- | -------- | -------- | ------- |
| Python   | 10.31/iter ms | 8.96 ms | 18.41 ms | 10.52 ms | 9.51 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99      | Min       | Max     |
| -------- | ------------ | --------- | -------- | --------- | ------- |
| Crystal  | 1.74/iter ms | 539.24 µs | 15.09 ms | 690.09 µs | 1.01 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 10.36/iter ms | 8.42 ms  | 29.62 ms | 9.23 ms  | 14.12 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 14.72/iter ms | 13.55 ms | 24.58 ms | 14.11 ms | 20.01 ms |
| JavaScript / node 18.7.0 (x64-linux) | 39.57/iter ms | 36.5 ms  | 95.51 ms | 37.58 ms | 37.39 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 42.52/iter ms | 39.31 ms | 64.92 ms | 40.7 ms | 47.84 ms |

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max       |
| -------- | ------------ | --------- | ------- | --------- | --------- |
| Go       | 1.08/iter ms | 417.18 µs | 8.16 ms | 793.28 µs | 613.87 µs |

