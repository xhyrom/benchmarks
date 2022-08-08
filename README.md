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
| Go       | 63,998.71/rps | 6,301.53 | 75,758.79 | 69,197.09 | 74,856.29 | 779.77 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99      | Min       | Max       | Latency |
| -------- | ------------- | ------ | -------- | --------- | --------- | ------- |
| Ruby     | 12,925.61/rps | 816.43 | 14,902.7 | 13,450.82 | 14,537.23 | 3.87 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 88,184.36/rps | 11,421.94 | 98,915.7  | 91,351.42 | 97,463.63 | 565.15 ns |
| JavaScript / node 16.16.0 (x64-linux) | 43,158.16/rps | 7,207.6   | 49,536.26 | 47,862.31 | 49,098.59 | 1.16 µs   |
| JavaScript / deno null (x64-linux)    | 23,614.97/rps | 1,596.99  | 27,197.45 | 24,599.91 | 25,898.41 | 2.11 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min      | Max       | Latency  |
| -------- | ------------- | -------- | --------- | -------- | --------- | -------- |
| Crystal  | 84,245.26/rps | 4,487.21 | 91,754.12 | 88,310.7 | 90,676.99 | 592.1 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,427.59/rps | 654.77 | 7,637.23 | 6,878.97 | 7,500.05 | 8.06 µs |

## console
### <a name="console-go">Go</a>

| Language | Average     | p75     | p99     | Min     | Max     |
| -------- | ----------- | ------- | ------- | ------- | ------- |
| Go       | 1.2/iter ps | 0.99 ps | 1.79 ps | 0.99 ps | 1.47 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 54.89/iter ps | 54.2 ps | 57.39 ps | 55.31 ps | 55.76 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99     | Min      | Max      |
| ------------------------------------- | ------------- | -------- | ------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 14.03/iter ps | 12.72 ps | 15.9 ps | 12.72 ps | 14.22 ps |
| JavaScript / node 16.16.0 (x64-linux) | 39.72/iter ps | 37.38 ps | 43.8 ps | 38.48 ps | 40.51 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ps | 1.86 ps | 2.55 ps | 1.91 ps | 1.98 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.08/iter ps | 17.71 ps | 18.57 ps | 18.29 ps | 17.93 ps |

