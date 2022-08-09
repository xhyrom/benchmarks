*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [http](#http)
      - [Python](#http-python)
      - [Crystal](#http-crystal)
      - [JavaScript](#http-javascript)
      - [Ruby](#http-ruby)
      - [Go](#http-go)
   - [console](#console)
      - [Python](#console-python)
      - [Crystal](#console-crystal)
      - [JavaScript](#console-javascript)
      - [Ruby](#console-ruby)
      - [Go](#console-go)

## http
### <a name="http-python">Python</a>

| Language | Average    | p75    | p99      | Min      | Max      | Latency  |
| -------- | ---------- | ------ | -------- | -------- | -------- | -------- |
| Python   | 470.01/rps | 541.61 | 2,150.72 | 1,194.57 | 1,950.28 | 138.8 µs |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75       | p99        | Min        | Max        | Latency   |
| -------- | ------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Crystal  | 106,001.2/rps | 15,642.07 | 157,349.02 | 111,583.86 | 154,075.51 | 470.44 ns |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99        | Min        | Max        | Latency   |
| ------------------------------------ | -------------- | -------- | ---------- | ---------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 125,568.66/rps | 9,341.5  | 181,240.86 | 128,332.87 | 161,011.28 | 396.9 ns  |
| JavaScript / deno 1.24.2 (x64-linux) | 77,180.95/rps  | 6,203.4  | 82,245.47  | 80,035.2   | 81,775.39  | 646.44 ns |
| JavaScript / node 18.7.0 (x64-linux) | 45,482.84/rps  | 8,116.72 | 52,803.43  | 51,474.23  | 52,279.96  | 1.1 µs    |

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency |
| -------- | ------------ | -------- | --------- | --------- | --------- | ------- |
| Ruby     | 8,359.89/rps | 2,636.34 | 13,822.47 | 10,907.75 | 13,316.74 | 5.97 µs |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99       | Min        | Max        | Latency   |
| -------- | -------------- | --------- | --------- | ---------- | ---------- | --------- |
| Go       | 235,123.48/rps | 11,029.37 | 254,861.6 | 241,109.36 | 252,576.97 | 211.09 ns |

## console
### <a name="console-python">Python</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Python   | 9.48/iter ms | 8.86 ms | 10.8 ms | 9.06 ms | 8.88 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Crystal  | 1.27/iter ms | 876.42 µs | 3.02 ms | 1.16 ms | 1.22 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 9.4/iter ms   | 8.7 ms   | 14.19 ms | 10.48 ms | 8.8 ms   |
| JavaScript / deno 1.24.2 (x64-linux) | 14.1/iter ms  | 12.83 ms | 16.8 ms  | 13.71 ms | 13.66 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.45/iter ms | 36.83 ms | 44.93 ms | 39.53 ms | 37.83 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 41.08/iter ms | 39.3 ms | 46.59 ms | 40.97 ms | 42.04 ms |

### <a name="console-go">Go</a>

| Language | Average      | p75      | p99      | Min       | Max       |
| -------- | ------------ | -------- | -------- | --------- | --------- |
| Go       | 1.01/iter ms | 360.8 µs | 10.78 ms | 501.07 µs | 919.83 µs |

