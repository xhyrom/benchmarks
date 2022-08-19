- [decode](#base64-decode)
    - [JavaScript](#base64-decode-javascript)
    - [Python](#base64-decode-python)
    - [Go](#base64-decode-go)
    - [Ruby](#base64-decode-ruby)
- [encode](#base64-encode)
    - [JavaScript](#base64-encode-javascript)
    - [Python](#base64-encode-python)
    - [Go](#base64-encode-go)
    - [Ruby](#base64-encode-ruby)

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.9 (x64-linux)   | 13.3/iter ms  | 12.23 ms | 16.01 ms | 13.06 ms | 12.83 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.28/iter ms | 25.34 ms | 28.05 ms | 26.45 ms | 25.5 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 49.4/iter ms  | 48.25 ms | 53.15 ms | 49.6 ms  | 48.48 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.64/iter ms | 22.02 ms | 23.31 ms | 22.94 ms | 23.18 ms |

#### <a name="base64-decode-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 970.43/iter µs | 854.32 µs | 1.38 ms | 917.32 µs | 954.92 µs |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 58.17/iter ms | 56.78 ms | 60.15 ms | 58.61 ms | 58.29 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.9 (x64-linux)   | 14.58/iter ms | 13.37 ms | 16.38 ms | 14.34 ms | 14.42 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.97/iter ms | 25.77 ms | 28.19 ms | 26.87 ms | 27.7 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 49.84/iter ms | 48.84 ms | 55.25 ms | 49.41 ms | 49.33 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 22.8/iter ms | 22.33 ms | 24.64 ms | 22.51 ms | 22.73 ms |

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.01/iter ms | 866.91 µs | 1.73 ms | 1.17 ms | 1.73 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Ruby     | 58.06/iter ms | 57.38 ms | 59.34 ms | 57.95 ms | 57.8 ms |

