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

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.02/iter ms | 897.05 µs | 1.56 ms | 1.13 ms | 944.05 µs |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.07/iter ms | 60.45 ms | 61.96 ms | 61.36 ms | 60.74 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.02/iter ms | 10.34 ms | 13.03 ms | 12.04 ms | 12.23 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.67/iter ms | 24.52 ms | 26.82 ms | 25.85 ms | 26.04 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.78/iter ms | 46.16 ms | 52.51 ms | 48.29 ms | 47.61 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.89 ms | 2.53 ms | 1.94 ms | 1.96 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.02/iter ms | 22.53 ms | 23.83 ms | 22.89 ms | 23.07 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75      | p99     | Min       | Max  |
| -------- | ------------ | -------- | ------- | --------- | ---- |
| Go       | 1.07/iter ms | 935.6 µs | 1.43 ms | 991.31 µs | 1 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.19/iter ms | 59.93 ms | 62.26 ms | 61.27 ms | 62.11 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 11.97/iter ms | 10.96 ms | 13.12 ms | 12.01 ms | 12.03 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.67/iter ms | 24.5 ms  | 27.21 ms | 24.95 ms | 25.54 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.67/iter ms | 46.53 ms | 49.32 ms | 47.85 ms | 47.96 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.06/iter ms | 1.92 ms | 2.7 ms | 2.55 ms | 1.97 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.09/iter ms | 22.64 ms | 23.55 ms | 23.31 ms | 22.87 ms |

