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

| Language | Average      | p75       | p99     | Min       | Max     |
| -------- | ------------ | --------- | ------- | --------- | ------- |
| Go       | 1.06/iter ms | 931.77 µs | 2.39 ms | 996.47 µs | 1.23 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 60.39/iter ms | 59.65 ms | 61.4 ms | 60.89 ms | 60.27 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 11.42/iter ms | 10.57 ms | 13.48 ms | 11.93 ms | 11.09 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.8/iter ms  | 24.46 ms | 28.37 ms | 25.61 ms | 25.84 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.33/iter ms | 46.34 ms | 49.68 ms | 47.46 ms | 47.07 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.05/iter ms | 1.93 ms | 2.52 ms | 2.01 ms | 2.19 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.66/iter ms | 22.25 ms | 23.34 ms | 22.47 ms | 22.41 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.04/iter ms | 927.86 µs | 1.39 ms | 1.02 ms | 1.04 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 60.55/iter ms | 59.63 ms | 63.84 ms | 60.74 ms | 60.31 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 12.06/iter ms | 11.03 ms | 13.9 ms  | 12.59 ms | 12.11 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.62/iter ms | 24.68 ms | 26.79 ms | 26.03 ms | 25.65 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.55/iter ms | 46 ms    | 57.16 ms | 47.55 ms | 47.72 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.01/iter ms | 1.87 ms | 2.47 ms | 1.95 ms | 1.91 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.76/iter ms | 22.42 ms | 23.49 ms | 22.42 ms | 22.94 ms |

