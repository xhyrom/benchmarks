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
| JavaScript / bun 0.1.8 (x64-linux)   | 12/iter ms    | 11.08 ms | 13.46 ms | 11.5 ms  | 12.08 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.34/iter ms | 24.13 ms | 27.99 ms | 25.44 ms | 24.75 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.15/iter ms | 45.66 ms | 53.32 ms | 46.97 ms | 47.72 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 22.93/iter ms | 22.45 ms | 23.53 ms | 22.51 ms | 22.9 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.95/iter ms | 1.84 ms | 2.34 ms | 1.85 ms | 1.89 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max     |
| -------- | ------------ | --------- | ------- | --------- | ------- |
| Go       | 1.01/iter ms | 879.63 µs | 1.61 ms | 961.33 µs | 1.17 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 60.45/iter ms | 59.41 ms | 61.3 ms | 60.48 ms | 60.33 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 11.89/iter ms | 10.8 ms  | 13.29 ms | 11.53 ms | 10.97 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.26/iter ms | 24.32 ms | 26.92 ms | 25.19 ms | 25.43 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.14/iter ms | 46.07 ms | 50.99 ms | 46.77 ms | 46.47 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.11/iter ms | 22.57 ms | 23.66 ms | 23.14 ms | 23.42 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 1.94/iter ms | 1.8 ms | 2.32 ms | 1.81 ms | 1.81 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 874.09/iter µs | 791.76 µs | 1.26 ms | 823.96 µs | 997.16 µs |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 60.6/iter ms | 59.25 ms | 62.49 ms | 59.78 ms | 61.35 ms |

