*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [base64](#base64)
      - [decode](#base64-decode)
         - [Go](#base64-decode-go)
         - [Ruby](#base64-decode-ruby)
         - [JavaScript](#base64-decode-javascript)
         - [Crystal](#base64-decode-crystal)
         - [Python](#base64-decode-python)
      - [encode](#base64-encode)
         - [Go](#base64-encode-go)
         - [Ruby](#base64-encode-ruby)
         - [JavaScript](#base64-encode-javascript)
         - [Crystal](#base64-encode-crystal)
         - [Python](#base64-encode-python)
   - [http](#http)
      - [Go](#http-go)
      - [Ruby](#http-ruby)
      - [JavaScript](#http-javascript)
      - [Crystal](#http-crystal)
      - [Python](#http-python)
   - [json](#json)
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
   - [console](#console)
      - [Go](#console-go)
      - [Ruby](#console-ruby)
      - [JavaScript](#console-javascript)
      - [Crystal](#console-crystal)
      - [Python](#console-python)

## base64

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Go       | 1.16/iter ms | 922 µs | 2.39 ms | 1.64 ms | 1.12 ms |

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 57.4/iter ms | 56.35 ms | 58.95 ms | 57.58 ms | 56.96 ms |

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 15.37/iter ms | 14.74 ms | 17.09 ms | 15.67 ms | 14.82 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.78/iter ms | 19.83 ms | 21.85 ms | 20.9 ms  | 21.56 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.15/iter ms | 38.34 ms | 43.08 ms | 39.4 ms  | 39.47 ms |

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.22/iter ms | 1.98 ms | 2.86 ms | 2.07 ms | 2.14 ms |

#### <a name="base64-decode-python">Python</a>

| Language | Average      | p75      | p99      | Min     | Max      |
| -------- | ------------ | -------- | -------- | ------- | -------- |
| Python   | 23.2/iter ms | 22.28 ms | 26.34 ms | 23.1 ms | 22.81 ms |

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75     | p99     | Min    | Max     |
| -------- | ------------ | ------- | ------- | ------ | ------- |
| Go       | 1.19/iter ms | 1.03 ms | 1.65 ms | 1.2 ms | 1.13 ms |

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.65/iter ms | 56.04 ms | 57.91 ms | 56.85 ms | 56.99 ms |

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 15.62/iter ms | 15.02 ms | 17.51 ms | 15.2 ms  | 15.28 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.43/iter ms | 18.97 ms | 21.7 ms  | 20.16 ms | 19.45 ms |
| JavaScript / node 16.16.0 (x64-linux) | 39.39/iter ms | 38.28 ms | 42.98 ms | 38.81 ms | 39.46 ms |

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average     | p75    | p99     | Min     | Max     |
| -------- | ----------- | ------ | ------- | ------- | ------- |
| Crystal  | 2.1/iter ms | 1.9 ms | 2.67 ms | 1.99 ms | 1.91 ms |

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.21/iter ms | 21.62 ms | 22.84 ms | 21.65 ms | 22.15 ms |

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 58,062.63/rps | 4,104.99 | 66,056.23 | 60,854.83 | 64,960.67 | 859.77 µs |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,207.05/rps | 805.96 | 14,363.72 | 12,727.66 | 13,898.19 | 4.09 ms |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99       | Min       | Max       | Latency  |
| ------------------------------------- | ------------- | -------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 86,488.14/rps | 8,912.96 | 92,292.35 | 89,577.38 | 91,789.43 | 576.5 µs |
| JavaScript / deno 1.24.2 (x64-linux)  | 47,171.56/rps | 4,527.2  | 50,985.96 | 49,693.81 | 50,336.34 | 1.06 ms  |
| JavaScript / node 16.16.0 (x64-linux) | 39,694.84/rps | 5,533.4  | 43,007.51 | 41,348.37 | 42,351.23 | 1.26 ms  |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99        | Min       | Max      | Latency   |
| -------- | ------------- | -------- | ---------- | --------- | -------- | --------- |
| Crystal  | 78,391.87/rps | 5,191.36 | 129,594.19 | 80,732.25 | 82,803.4 | 637.49 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,046.88/rps | 578.15 | 6,965.46 | 6,446.81 | 6,776.01 | 8.54 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.26/iter ms | 1.04 ms | 1.64 ms | 1.26 ms | 1.16 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 62.88/iter ms | 61.55 ms | 68.19 ms | 62.52 ms | 63.05 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 15.06/iter ms | 14.2 ms  | 17.16 ms | 14.45 ms | 14.65 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.37/iter ms | 18.95 ms | 23.4 ms  | 19.9 ms  | 20.53 ms |
| JavaScript / node 16.16.0 (x64-linux) | 39.2/iter ms  | 37.71 ms | 50.31 ms | 40.53 ms | 38.58 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max    |
| -------- | ------------ | ------- | ------ | ------- | ------ |
| Crystal  | 2.16/iter ms | 1.97 ms | 2.7 ms | 2.08 ms | 2.1 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 23.44/iter ms | 22.78 ms | 27.5 ms | 22.97 ms | 23.56 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Go       | 1.35/iter ms | 1.09 ms | 3.3 ms | 2.01 ms | 1.18 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 62.52/iter ms | 61.16 ms | 64.67 ms | 62.57 ms | 62.27 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 14.8/iter ms  | 14.03 ms | 15.72 ms | 14.89 ms | 14.55 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.84/iter ms | 19.79 ms | 25.92 ms | 20.82 ms | 20.93 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.68/iter ms | 38.15 ms | 59.87 ms | 39.52 ms | 40.67 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.17/iter ms | 1.88 ms | 5.23 ms | 2.01 ms | 1.93 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 24.07/iter ms | 23.27 ms | 26.77 ms | 24.01 ms | 23.34 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.25/iter ms | 1.06 ms | 1.82 ms | 1.34 ms | 1.26 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.51/iter ms | 55.69 ms | 57.84 ms | 56.04 ms | 55.99 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)    | 14.8/iter ms  | 13.93 ms | 16.7 ms  | 14.62 ms | 16.28 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.89/iter ms | 19.62 ms | 42.51 ms | 20.38 ms | 21.42 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.68/iter ms | 39.45 ms | 44.55 ms | 40.49 ms | 40.04 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average     | p75    | p99     | Min     | Max     |
| -------- | ----------- | ------ | ------- | ------- | ------- |
| Crystal  | 2.1/iter ms | 1.9 ms | 2.72 ms | 1.95 ms | 1.93 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 18.74/iter ms | 18.32 ms | 19.3 ms | 18.77 ms | 19.01 ms |

