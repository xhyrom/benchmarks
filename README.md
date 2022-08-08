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

| Language | Average  | p75   | p99    | Min | Max    | Latency |
| -------- | -------- | ----- | ------ | --- | ------ | ------- |
| Python   | 11.9/rps | 67.46 | 750.67 | 0   | 390.64 | 4.8 ms  |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75     | p99    | Min       | Max      | Latency   |
| -------- | ------------- | ------- | ------ | --------- | -------- | --------- |
| Crystal  | 63,413.29/rps | 7,456.7 | 82,366 | 67,016.23 | 79,362.8 | 786.66 ns |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max       | Latency  |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 75,060.59/rps | 11,160.07 | 102,782.66 | 79,642.37 | 93,346.64 | 664.4 ns |
| JavaScript / deno 1.24.2 (x64-linux) | 44,234.78/rps | 4,080.47  | 47,686.19  | 46,246.73 | 47,260.24 | 1.13 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 11,399.21/rps | 8,900.23  | 28,884.61  | 24,290.42 | 28,316.13 | 4.38 µs  |

### <a name="http-ruby">Ruby</a>

| Language | Average   | p75    | p99      | Min | Max | Latency |
| -------- | --------- | ------ | -------- | --- | --- | ------- |
| Ruby     | 15.68/rps | 176.44 | 2,507.48 | 0   | 0   | 2.53 ms |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min       | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | --------- |
| Go       | 118,638.29/rps | 19,917.41 | 145,759.33 | 130,742.6 | 141,569.08 | 418.58 ns |

## console
### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 16.89/iter ps | 15.44 ps | 21.27 ps | 17.49 ps | 17.21 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 3.05/iter ps | 1.47 ps | 8.16 ps | 3.76 ps | 3.08 ps |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99       | Min      | Max      |
| ------------------------------------ | ------------- | -------- | --------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 14.49/iter ps | 13.03 ps | 19 ps     | 13.73 ps | 15.97 ps |
| JavaScript / deno 1.24.2 (x64-linux) | 24.06/iter ps | 21.7 ps  | 30.82 ps  | 22.54 ps | 22.14 ps |
| JavaScript / node 18.7.0 (x64-linux) | 67.75/iter ps | 62.7 ps  | 121.09 ps | 67.26 ps | 65.5 ps  |

### <a name="console-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 73.6/iter ps | 68.08 ps | 91.83 ps | 74.15 ps | 71.99 ps |

### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.18/iter ps | 0.62 ps | 2.57 ps | 1.26 ps | 1.64 ps |

