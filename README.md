*Ran on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

## Table Of Contents

- Benchmarks
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

## http

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency |
| -------- | ------------- | -------- | --------- | --------- | --------- | ------- |
| Go       | 49,728.73/rps | 4,709.28 | 58,179.19 | 53,037.35 | 56,990.67 | 1 ms    |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 10,024.98/rps | 769.69 | 12,099.68 | 10,510.29 | 11,555.79 | 4.99 ms |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 85,554.85/rps | 10,565.81 | 97,972.45 | 90,162.68 | 95,541.96 | 582.26 µs |
| JavaScript / deno 1.24.2 (x64-linux)  | 44,843.22/rps | 6,990.15  | 54,051.32 | 50,618.36 | 52,995.3  | 1.11 ms   |
| JavaScript / node 16.16.0 (x64-linux) | 43,223.39/rps | 8,861.5   | 51,458.88 | 50,168.32 | 51,294.57 | 1.16 ms   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99    | Min       | Max       | Latency  |
| -------- | ------------- | -------- | ------ | --------- | --------- | -------- |
| Crystal  | 70,752.72/rps | 8,929.29 | 82,874 | 78,409.62 | 81,949.73 | 704.6 µs |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min   | Max      | Latency  |
| -------- | ------------ | ------ | -------- | ----- | -------- | -------- |
| Python   | 4,337.75/rps | 698.41 | 5,574.09 | 5,095 | 5,450.71 | 12.07 ms |

## json

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max    |
| -------- | ------------ | --------- | ------- | ------- | ------ |
| Go       | 1.11/iter ms | 988.92 µs | 1.49 ms | 1.18 ms | 1.1 ms |

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 60.15/iter ms | 59.5 ms | 65.39 ms | 60.53 ms | 60.43 ms |

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 12.34/iter ms | 10.39 ms | 16.94 ms | 11.03 ms | 15.67 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.32/iter ms | 18.75 ms | 25.46 ms | 19.93 ms | 19.18 ms |
| JavaScript / node 16.16.0 (x64-linux) | 38.28/iter ms | 36.3 ms  | 49.69 ms | 36.76 ms | 36.84 ms |

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average   | p75     | p99     | Min     | Max     |
| -------- | --------- | ------- | ------- | ------- | ------- |
| Crystal  | 2/iter ms | 1.86 ms | 2.39 ms | 1.96 ms | 1.99 ms |

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.54/iter ms | 22.22 ms | 23.44 ms | 23.44 ms | 22.42 ms |

### <a name="json-parse">parse</a>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max    |
| -------- | ------------ | ------- | ------- | ------- | ------ |
| Go       | 1.19/iter ms | 1.02 ms | 2.17 ms | 1.21 ms | 1.3 ms |

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 61.43/iter ms | 59.6 ms | 65.86 ms | 60.64 ms | 60.48 ms |

#### <a name="json-parse-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.85/iter ms | 14.27 ms | 18.93 ms | 15.78 ms | 16.53 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 20.05/iter ms | 18.4 ms  | 23.99 ms | 21.94 ms | 20.55 ms |
| JavaScript / node 16.16.0 (x64-linux) | 37.97/iter ms | 36.83 ms | 41.92 ms | 37.54 ms | 37.46 ms |

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max    |
| -------- | ------------ | ------- | ------ | ------- | ------ |
| Crystal  | 2.09/iter ms | 1.95 ms | 2.5 ms | 2.13 ms | 2.3 ms |

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.01/iter ms | 22.43 ms | 24.27 ms | 22.66 ms | 23.61 ms |

## console

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.18/iter ms | 920.55 µs | 1.87 ms | 1.04 ms | 980.35 µs |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.78/iter ms | 53.93 ms | 58.02 ms | 54.37 ms | 54.67 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 11.74/iter ms | 10.4 ms  | 14.89 ms | 11.2 ms  | 11.1 ms  |
| JavaScript / deno 1.24.2 (x64-linux)  | 19.37/iter ms | 18.51 ms | 21.05 ms | 18.99 ms | 19.62 ms |
| JavaScript / node 16.16.0 (x64-linux) | 40.91/iter ms | 38.46 ms | 52.02 ms | 39.97 ms | 39.34 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 1.97/iter ms | 1.85 ms | 2.3 ms | 2.01 ms | 1.95 ms |

### <a name="console-python">Python</a>

| Language | Average      | p75     | p99      | Min      | Max      |
| -------- | ------------ | ------- | -------- | -------- | -------- |
| Python   | 18.1/iter ms | 17.8 ms | 19.38 ms | 18.57 ms | 18.07 ms |

