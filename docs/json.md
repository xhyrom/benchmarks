- [parse](#json-parse)
    - [JavaScript](#json-parse-javascript)
    - [Python](#json-parse-python)
    - [Go](#json-parse-go)
    - [Ruby](#json-parse-ruby)
- [stringify](#json-stringify)
    - [JavaScript](#json-stringify-javascript)
    - [Python](#json-stringify-python)
    - [Go](#json-stringify-go)
    - [Ruby](#json-stringify-ruby)

### <a name="json-parse">parse</a>

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.9 (x64-linux)   | 14.85/iter ms | 13.75 ms | 17.86 ms | 15.82 ms | 15.03 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 27.6/iter ms  | 26.36 ms | 30.89 ms | 27.29 ms | 27.29 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.91/iter ms | 49.11 ms | 58.1 ms  | 51.96 ms | 50.61 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 25.38/iter ms | 24.18 ms | 30.56 ms | 30.39 ms | 24.63 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average     | p75     | p99     | Min     | Max     |
| -------- | ----------- | ------- | ------- | ------- | ------- |
| Go       | 1.2/iter ms | 1.02 ms | 1.83 ms | 1.34 ms | 1.17 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Ruby     | 66.03/iter ms | 63.18 ms | 73.27 ms | 73.27 ms | 64.7 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.9 (x64-linux)   | 15.95/iter ms | 14.65 ms | 19.48 ms | 16.29 ms | 16.41 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 27.79/iter ms | 25.93 ms | 32.56 ms | 28.05 ms | 27.87 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.46/iter ms | 48.2 ms  | 57.09 ms | 50.34 ms | 50.7 ms  |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 24.87/iter ms | 24.37 ms | 25.71 ms | 24.83 ms | 24.51 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.15/iter ms | 910.73 µs | 1.67 ms | 1.29 ms | 1.15 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 65.12/iter ms | 62.61 ms | 74.5 ms | 64.36 ms | 65.42 ms |

