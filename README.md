*Ran on Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [http](#http)
      - [Go](#http-go)
      - [Ruby](#http-ruby)
      - [JavaScript](#http-javascript)
      - [Crystal](#http-crystal)
      - [Python](#http-python)
   - [console](#console)
      - [Go](#console-go)
      - [Ruby](#console-ruby)
      - [JavaScript](#console-javascript)
      - [Crystal](#console-crystal)
      - [Python](#console-python)

## http
### <a name="http-go">Go</a>

| Language | Average       | p75      | p99      | Min       | Max      | Latency   |
| -------- | ------------- | -------- | -------- | --------- | -------- | --------- |
| Go       | 57,451.59/rps | 6,705.74 | 70,189.4 | 61,670.53 | 68,370.5 | 868.83 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 11,356.06/rps | 882.03 | 13,839.72 | 11,924.86 | 13,277.63 | 4.4 µs  |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 83,503.44/rps | 12,707.98 | 98,027.19 | 88,922.24 | 95,814.88 | 596.55 ns |
| JavaScript / node 16.16.0 (x64-linux) | 37,775.53/rps | 5,649.17  | 44,253.42 | 39,981.28 | 43,431.63 | 1.32 µs   |
| JavaScript / deno null (x64-linux)    | 20,465.06/rps | 1,401.96  | 23,994.3  | 21,349.62 | 23,452.28 | 2.44 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75     | p99       | Min       | Max       | Latency   |
| -------- | ------------- | ------- | --------- | --------- | --------- | --------- |
| Crystal  | 71,654.59/rps | 5,055.5 | 79,349.72 | 74,762.64 | 78,601.74 | 696.06 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency  |
| -------- | ------------ | ------ | -------- | -------- | -------- | -------- |
| Python   | 5,182.26/rps | 680.88 | 6,856.17 | 5,709.52 | 6,396.62 | 10.12 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max    |
| -------- | ------------ | ------- | ------- | ------- | ------ |
| Go       | 1.32/iter ps | 0.79 ps | 2.72 ps | 1.32 ps | 1.2 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 60.79/iter ps | 53.87 ps | 67.2 ps | 63.45 ps | 60.63 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.98/iter ps | 13.76 ps | 19.02 ps | 15.49 ps | 15.64 ps |
| JavaScript / node 16.16.0 (x64-linux) | 43.43/iter ps | 38.46 ps | 52.08 ps | 39.9 ps  | 41.17 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.46/iter ps | 1.88 ps | 4.35 ps | 2.45 ps | 2.33 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 20.42/iter ps | 17.62 ps | 29.85 ps | 18.58 ps | 18.23 ps |

