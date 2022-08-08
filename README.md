*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

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

| Language | Average      | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------ | -------- | --------- | --------- | --------- | --------- |
| Go       | 60,213.5/rps | 3,991.66 | 66,485.64 | 62,830.65 | 66,079.95 | 829.02 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,498.59/rps | 773.37 | 14,608.45 | 13,016.96 | 14,061.02 | 4 µs    |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 86,526.54/rps | 10,337.23 | 101,050.19 | 89,632.05 | 91,591.55 | 575.74 ns |
| JavaScript / node 16.16.0 (x64-linux) | 41,202.58/rps | 5,494.78  | 44,493.51  | 42,732.85 | 43,577.83 | 1.21 µs   |
| JavaScript / deno null (x64-linux)    | 21,722.12/rps | 1,364.76  | 25,484.24  | 22,644.42 | 24,284.29 | 2.3 µs    |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 80,960.39/rps | 3,188.09 | 94,053.73 | 82,857.15 | 84,319.33 | 616.34 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,855.68/rps | 644.19 | 6,922.82 | 6,365.98 | 6,725.22 | 8.87 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75  | p99     | Min     | Max     |
| -------- | ------------ | ---- | ------- | ------- | ------- |
| Go       | 1.26/iter ps | 1 ps | 2.23 ps | 1.25 ps | 1.17 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.55/iter ps | 55.45 ps | 59.87 ps | 56.52 ps | 56.54 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 15.2/iter ps  | 14.03 ps | 22.55 ps | 15.87 ps | 15.81 ps |
| JavaScript / node 16.16.0 (x64-linux) | 41.53/iter ps | 39.82 ps | 46.32 ps | 42.05 ps | 40.51 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min    | Max     |
| -------- | ------------ | ------- | ------ | ------ | ------- |
| Crystal  | 2.15/iter ps | 1.94 ps | 2.7 ps | 2.7 ps | 2.08 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 19.37/iter ps | 18.87 ps | 22.52 ps | 19.07 ps | 19.25 ps |

