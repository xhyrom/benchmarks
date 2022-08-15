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

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.45/iter ms | 1.04 ms | 4.01 ms | 1.34 ms | 1.66 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 71.19/iter ms | 64.91 ms | 76.62 ms | 71.12 ms | 74.72 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 16.98/iter ms | 14.65 ms | 21.89 ms | 17.81 ms | 17.31 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 31.67/iter ms | 29.68 ms | 51.22 ms | 31.05 ms | 31.77 ms |
| JavaScript / node 18.7.0 (x64-linux) | 57.29/iter ms | 51.32 ms | 62.48 ms | 57.65 ms | 59.07 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.47/iter ms | 2.14 ms | 3.27 ms | 2.51 ms | 2.39 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Python   | 27.81/iter ms | 25.23 ms | 34.69 ms | 25.5 ms | 25.94 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.52/iter ms | 1.01 ms | 8.08 ms | 1.63 ms | 1.67 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max     |
| -------- | ------------- | -------- | ------- | -------- | ------- |
| Ruby     | 74.12/iter ms | 69.06 ms | 77.5 ms | 73.78 ms | 72.6 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 16.83/iter ms | 14.9 ms  | 20.93 ms | 16.62 ms | 18.08 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 30.47/iter ms | 25.91 ms | 34.94 ms | 30.32 ms | 34.94 ms |
| JavaScript / node 18.7.0 (x64-linux) | 57.97/iter ms | 52.95 ms | 63.9 ms  | 56.65 ms | 60.05 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.56/iter ms | 2.01 ms | 4.78 ms | 2.36 ms | 2.01 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 28.51/iter ms | 25.67 ms | 33.89 ms | 31.32 ms | 27.5 ms |

