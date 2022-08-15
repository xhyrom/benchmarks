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

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.06/iter ms | 958.65 µs | 1.59 ms | 1.17 ms | 1.06 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 61.39/iter ms | 59.05 ms | 64.42 ms | 62.1 ms | 59.66 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 13.75/iter ms | 12.05 ms | 16 ms    | 14.33 ms | 15.04 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.64/iter ms | 23.35 ms | 26.24 ms | 24.54 ms | 25.59 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.15/iter ms | 45.03 ms | 52.02 ms | 48.79 ms | 46.6 ms  |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.12/iter ms | 1.92 ms | 2.63 ms | 2.08 ms | 1.98 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.07/iter ms | 22.38 ms | 24.77 ms | 23.09 ms | 22.57 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.12/iter ms | 960.03 µs | 1.65 ms | 1.12 ms | 1.16 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.71/iter ms | 58.95 ms | 65.35 ms | 60.88 ms | 60.44 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.71/iter ms | 11.26 ms | 14.41 ms | 11.83 ms | 12.31 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.93/iter ms | 23.84 ms | 31.6 ms  | 24.23 ms | 24.91 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.76/iter ms | 45.22 ms | 52.49 ms | 50.52 ms | 52.08 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.17/iter ms | 1.96 ms | 3.03 ms | 2.17 ms | 2.08 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.68/iter ms | 22.53 ms | 25.61 ms | 22.98 ms | 22.99 ms |

