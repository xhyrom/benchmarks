*Ran on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

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

| Language | Average      | p75      | p99       | Min      | Max       | Latency  |
| -------- | ------------ | -------- | --------- | -------- | --------- | -------- |
| Go       | 68,630.7/rps | 6,293.99 | 80,820.25 | 72,335.7 | 76,051.52 | 727.3 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99      | Min       | Max       | Latency |
| -------- | ------------- | ------ | -------- | --------- | --------- | ------- |
| Ruby     | 13,890.74/rps | 853.74 | 15,945.4 | 14,399.27 | 15,647.76 | 3.6 µs  |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99        | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | -------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 93,663.65/rps | 3,219.01 | 100,119.96 | 94,780.51 | 98,073.71 | 532.42 ns |
| JavaScript / node 16.16.0 (x64-linux) | 49,897.19/rps | 7,775.82 | 53,128.86  | 52,292.96 | 52,920.5  | 1 µs      |
| JavaScript / deno null (x64-linux)    | 24,627.7/rps  | 1,393.69 | 27,583.4   | 25,469.06 | 26,994.68 | 2.03 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75       | p99    | Min       | Max       | Latency   |
| -------- | ------------- | --------- | ------ | --------- | --------- | --------- |
| Crystal  | 85,003.31/rps | 10,904.62 | 90,548 | 88,859.69 | 90,154.21 | 586.63 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,771.49/rps | 536.29 | 7,413.96 | 7,097.35 | 7,336.92 | 7.66 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.05/iter ps | 0.94 ps | 1.32 ps | 1.09 ps | 1.06 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 54.75/iter ps | 53.91 ps | 55.78 ps | 54.86 ps | 54.05 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 11.98/iter ps | 11.17 ps | 13.47 ps | 11.52 ps | 11.89 ps |
| JavaScript / node 16.16.0 (x64-linux) | 39.98/iter ps | 39.12 ps | 43.93 ps | 40.33 ps | 40.39 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.98/iter ps | 1.87 ps | 2.49 ps | 1.91 ps | 2.14 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.39/iter ps | 17.99 ps | 19.98 ps | 18.32 ps | 18.28 ps |

