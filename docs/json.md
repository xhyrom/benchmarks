- [parse](#json-parse)
    - [JavaScript](#json-parse-javascript)
    - [Python](#json-parse-python)
    - [Crystal](#json-parse-crystal)
    - [Go](#json-parse-go)
    - [Ruby](#json-parse-ruby)
- [stringify](#json-stringify)
    - [JavaScript](#json-stringify-javascript)
    - [Python](#json-stringify-python)
    - [Crystal](#json-stringify-crystal)
    - [Go](#json-stringify-go)
    - [Ruby](#json-stringify-ruby)

### <a name="json-parse">parse</a>

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 16.4/iter ms  | 13.31 ms | 19.11 ms | 16.94 ms | 16.93 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 27.74/iter ms | 23.8 ms  | 34.59 ms | 27.5 ms  | 29.01 ms |
| JavaScript / node 18.7.0 (x64-linux) | 55.89/iter ms | 48.19 ms | 71.1 ms  | 56.78 ms | 55.78 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 26.6/iter ms | 24.05 ms | 29.34 ms | 25.62 ms | 24.05 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 2.36/iter ms | 1.6 ms | 4.38 ms | 2.15 ms | 2.36 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.43/iter ms | 792.35 µs | 2.74 ms | 1.81 ms | 1.09 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 66.21/iter ms | 60.52 ms | 72.24 ms | 68.87 ms | 62.78 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 15.96/iter ms | 13.65 ms | 21.34 ms | 15.91 ms | 13.95 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 31.9/iter ms  | 28.39 ms | 42.7 ms  | 31.25 ms | 31.41 ms |
| JavaScript / node 18.7.0 (x64-linux) | 55.37/iter ms | 49.31 ms | 68.39 ms | 55.55 ms | 51.48 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 24.9/iter ms | 22.93 ms | 28.05 ms | 25.71 ms | 25.48 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.46/iter ms | 1.87 ms | 3.58 ms | 2.03 ms | 1.92 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.32/iter ms | 907.43 µs | 1.91 ms | 1.08 ms | 1.41 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 66.58/iter ms | 60.57 ms | 78.04 ms | 65.74 ms | 63.03 ms |

