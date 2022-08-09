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

| Language | Average      | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------ | -------- | --------- | -------- | --------- | --------- |
| Go       | 61,644.8/rps | 4,467.21 | 68,639.46 | 64,530.4 | 67,940.82 | 809.08 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Ruby     | 12,753.6/rps | 841.15 | 14,796.19 | 13,346.4 | 14,460.6 | 3.92 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99        | Min       | Max        | Latency   |
| ------------------------------------- | ------------- | --------- | ---------- | --------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 89,326.08/rps | 11,986.69 | 102,331.36 | 93,447.68 | 101,804.15 | 557.64 ns |
| JavaScript / node 16.16.0 (x64-linux) | 40,959.14/rps | 5,769.11  | 43,697.48  | 42,574.73 | 43,252.48  | 1.22 µs   |
| JavaScript / deno null (x64-linux)    | 22,656.92/rps | 1,382.45  | 26,678.04  | 23,566.11 | 25,170.82  | 2.2 µs    |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 82,332.87/rps | 2,944.62 | 86,285.56 | 84,101.75 | 85,026.94 | 605.91 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,884.31/rps | 929.61 | 7,700.24 | 6,742.08 | 7,527.11 | 8.78 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min    | Max     |
| -------- | ------------ | ------- | ------- | ------ | ------- |
| Go       | 1.22/iter ps | 1.02 ps | 1.81 ps | 1.3 ps | 1.21 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.48/iter ps | 51.54 ps | 64.17 ps | 57.11 ps | 57.37 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.02/iter ps | 12.94 ps | 16.09 ps | 13.11 ps | 13.54 ps |
| JavaScript / node 16.16.0 (x64-linux) | 40.61/iter ps | 39.22 ps | 45.96 ps | 40.15 ps | 40.81 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.86/iter ps | 1.69 ps | 2.45 ps | 1.85 ps | 1.71 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 18.54/iter ps | 18.04 ps | 20.5 ps | 18.39 ps | 18.74 ps |

