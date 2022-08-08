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

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 62,048.53/rps | 4,757.22 | 71,156.06 | 65,108.31 | 69,157.94 | 804.57 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,638.35/rps | 801.05 | 14,744.16 | 13,152.25 | 14,149.81 | 3.95 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 86,878.96/rps | 10,662.53 | 93,089.15 | 90,030.8  | 92,344.97 | 573.99 ns |
| JavaScript / node 16.16.0 (x64-linux) | 41,644.61/rps | 5,874.6   | 44,345.73 | 43,320.18 | 44,160.46 | 1.2 µs    |
| JavaScript / deno null (x64-linux)    | 22,599.73/rps | 1,328.83  | 25,209.48 | 23,429.11 | 24,915.01 | 2.21 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75     | p99      | Min      | Max       | Latency   |
| -------- | ------------- | ------- | -------- | -------- | --------- | --------- |
| Crystal  | 80,919.76/rps | 5,056.5 | 85,901.9 | 82,911.5 | 84,456.83 | 616.26 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,127.25/rps | 634.01 | 7,166.41 | 6,599.24 | 6,947.64 | 8.47 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75  | p99     | Min     | Max     |
| -------- | ------------ | ---- | ------- | ------- | ------- |
| Go       | 1.21/iter ps | 1 ps | 1.75 ps | 1.05 ps | 1.24 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.65/iter ps | 54.59 ps | 59.51 ps | 54.92 ps | 55.89 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.56/iter ps | 13.24 ps | 16.45 ps | 14.27 ps | 14.75 ps |
| JavaScript / node 16.16.0 (x64-linux) | 40.13/iter ps | 37.86 ps | 46.7 ps  | 40.36 ps | 39.96 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.06/iter ps | 1.91 ps | 2.64 ps | 1.92 ps | 1.98 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.37/iter ps | 17.99 ps | 20.15 ps | 18.33 ps | 18.23 ps |

