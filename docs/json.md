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
| JavaScript / bun 0.1.10 (x64-linux)  | 15.72/iter ms | 13.63 ms | 21.05 ms | 14.95 ms | 15.77 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 28.49/iter ms | 24.87 ms | 42.15 ms | 26.62 ms | 28.36 ms |
| JavaScript / node 18.7.0 (x64-linux) | 54.99/iter ms | 48.16 ms | 67.8 ms  | 49.55 ms | 52.27 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 26.59/iter ms | 23.45 ms | 33.82 ms | 24.11 ms | 27.27 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.44/iter ms | 1.75 ms | 4.18 ms | 2.41 ms | 2.98 ms |

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min    | Max     |
| -------- | ------------ | --------- | ------- | ------ | ------- |
| Go       | 1.54/iter ms | 989.12 µs | 4.54 ms | 1.5 ms | 1.46 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 70.4/iter ms | 63.95 ms | 79.83 ms | 64.25 ms | 71.22 ms |

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 15.49/iter ms | 13.36 ms | 19.39 ms | 17.39 ms | 14.79 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 29.27/iter ms | 25.32 ms | 34.85 ms | 26.79 ms | 30.28 ms |
| JavaScript / node 18.7.0 (x64-linux) | 56.79/iter ms | 49.72 ms | 64.5 ms  | 57.5 ms  | 61.81 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 26.82/iter ms | 23.45 ms | 39.11 ms | 28.63 ms | 24.89 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max    |
| -------- | ------------ | ------- | ------- | ------- | ------ |
| Crystal  | 2.33/iter ms | 1.78 ms | 3.15 ms | 1.78 ms | 2.5 ms |

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.39/iter ms | 919.64 µs | 2.75 ms | 1.36 ms | 1.45 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 70.64/iter ms | 62.95 ms | 79.5 ms | 73.02 ms | 75.26 ms |

