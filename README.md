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

| Language | Average   | p75    | p99    | Min | Max    | Latency |
| -------- | --------- | ------ | ------ | --- | ------ | ------- |
| Python   | 27.82/rps | 101.02 | 802.63 | 0   | 597.67 | 2.31 ms |

### <a name="http-crystal">Crystal</a>

| Language | Average  | p75  | p99  | Min | Max | Latency  |
| -------- | -------- | ---- | ---- | --- | --- | -------- |
| Crystal  | 0.02/rps | 0.44 | 9.92 | 0   | 0   | 15.02 ms |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99       | Min       | Max       | Latency |
| ------------------------------------ | ------------- | -------- | --------- | --------- | --------- | ------- |
| JavaScript / node 18.7.0 (x64-linux) | 43,740.83/rps | 6,130.31 | 51,011.35 | 48,226.63 | 50,605.62 | 1.14 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 37,459.35/rps | 27,223.1 | 81,428.36 | 76,542.39 | 80,117.07 | 1.33 µs |
| JavaScript / bun 0.1.7 (x64-linux)   | 0.01/rps      | 0.22     | 4.99      | 0         | 0         | 20 ms   |

### <a name="http-ruby">Ruby</a>

| Language | Average | p75    | p99      | Min | Max      | Latency |
| -------- | ------- | ------ | -------- | --- | -------- | ------- |
| Ruby     | 35/rps  | 268.18 | 2,512.38 | 0   | 1,985.58 | 1.95 ms |

### <a name="http-go">Go</a>

| Language | Average  | p75   | p99    | Min | Max | Latency  |
| -------- | -------- | ----- | ------ | --- | --- | -------- |
| Go       | 1.08/rps | 24.14 | 540.76 | 0   | 0   | 10.07 ms |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min     | Max     |
| -------- | ------------- | ------- | -------- | ------- | ------- |
| Python   | 10.39/iter ms | 9.25 ms | 15.27 ms | 9.44 ms | 9.54 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99      | Min     | Max     |
| -------- | ------------ | --------- | -------- | ------- | ------- |
| Crystal  | 1.88/iter ms | 942.76 µs | 23.01 ms | 1.26 ms | 1.32 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 9.99/iter ms  | 8.96 ms  | 11.4 ms  | 9.89 ms  | 10.45 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 14.71/iter ms | 13.02 ms | 44.35 ms | 14.33 ms | 14.85 ms |
| JavaScript / node 18.7.0 (x64-linux) | 40.17/iter ms | 36.9 ms  | 53.86 ms | 38.58 ms | 38.08 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 44.18/iter ms | 40.09 ms | 68.35 ms | 43.26 ms | 40.53 ms |

### <a name="console-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 706.04/iter µs | 438.88 µs | 1.61 ms | 684.35 µs | 438.88 µs |

