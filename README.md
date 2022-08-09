*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [json](#json)
      - [parse](#json-parse)
         - [Crystal](#json-parse-crystal)
         - [JavaScript](#json-parse-javascript)
      - [stringify](#json-stringify)
         - [Crystal](#json-stringify-crystal)
         - [JavaScript](#json-stringify-javascript)
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

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75       | p99    | Min     | Max     |
| -------- | ------------ | --------- | ------ | ------- | ------- |
| Crystal  | 1.38/iter ms | 992.53 µs | 2.9 ms | 1.34 ms | 1.16 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 10.81/iter ms | 8.66 ms  | 32.22 ms | 13.54 ms | 9.99 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.26/iter ms | 13.16 ms | 18.96 ms | 13.67 ms | 13.77 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.45/iter ms | 35.91 ms | 61.89 ms | 37.57 ms | 36.83 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75       | p99      | Min     | Max     |
| -------- | ------------ | --------- | -------- | ------- | ------- |
| Crystal  | 1.89/iter ms | 996.39 µs | 17.05 ms | 1.41 ms | 1.28 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 10.95/iter ms | 9 ms     | 31.5 ms  | 12.18 ms | 9.68 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.61/iter ms | 12.7 ms  | 34.12 ms | 14.41 ms | 14.71 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.12/iter ms | 35.73 ms | 74.11 ms | 37.06 ms | 36.55 ms |

## http

### <a name="http-python">Python</a>

| Language | Average  | p75   | p99    | Min | Max    | Latency |
| -------- | -------- | ----- | ------ | --- | ------ | ------- |
| Python   | 5.01/rps | 52.19 | 749.69 | 0   | 100.21 | 5.65 ms |

### <a name="http-crystal">Crystal</a>

| Language | Average  | p75   | p99      | Min | Max | Latency  |
| -------- | -------- | ----- | -------- | --- | --- | -------- |
| Crystal  | 2.99/rps | 66.82 | 1,497.24 | 0   | 0   | 10.01 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max        | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 80,119.14/rps | 11,038.54 | 144,308.66 | 80,714.63 | 126,354.71 | 622.23 ns |
| JavaScript / deno 1.24.2 (x64-linux) | 59,630.95/rps | 15,971.42 | 79,626.62  | 76,046.71 | 79,094.4   | 836.72 ns |
| JavaScript / node 18.7.0 (x64-linux) | 28,040.81/rps | 4,213.67  | 50,294.14  | 29,534.66 | 36,370.86  | 1.78 µs   |

### <a name="http-ruby">Ruby</a>

| Language | Average   | p75    | p99     | Min | Max | Latency |
| -------- | --------- | ------ | ------- | --- | --- | ------- |
| Ruby     | 11.44/rps | 157.81 | 2,483.6 | 0   | 0   | 3.35 ms |

### <a name="http-go">Go</a>

| Language | Average   | p75    | p99      | Min | Max      | Latency |
| -------- | --------- | ------ | -------- | --- | -------- | ------- |
| Go       | 64.03/rps | 594.32 | 7,499.51 | 0   | 2,483.38 | 1.08 ms |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max     |
| -------- | ------------- | ------- | -------- | -------- | ------- |
| Python   | 11.13/iter ms | 9.28 ms | 17.57 ms | 10.13 ms | 9.83 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Crystal  | 2.38/iter ms | 948.09 µs | 5.18 ms | 3.33 ms | 3.76 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 12.54/iter ms | 8.09 ms  | 26.06 ms | 13.33 ms | 8.83 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 19.37/iter ms | 13.61 ms | 31.69 ms | 31.69 ms | 18.79 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.44/iter ms | 37.75 ms | 72.3 ms  | 39.6 ms  | 42.66 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 60.44/iter ms | 39.16 ms | 79.55 ms | 67.18 ms | 76.11 ms |

### <a name="console-go">Go</a>

| Language | Average       | p75  | p99     | Min      | Max       |
| -------- | ------------- | ---- | ------- | -------- | --------- |
| Go       | 84.64/iter µs | 0 ps | 1.63 ms | 21.74 µs | 125.82 µs |

