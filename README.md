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

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Go       | 58,191.82/rps | 4,033.49 | 66,682.3 | 60,989.75 | 64,176.14 | 857.75 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 11,643.05/rps | 911.27 | 14,214.38 | 12,234.69 | 13,531.27 | 4.29 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 86,042.38/rps | 11,981.05 | 94,315.01 | 90,108.54 | 92,191.68 | 579.04 ns |
| JavaScript / deno 1.24.2 (x64-linux)  | 44,626.69/rps | 5,122.26  | 49,302.6  | 47,823.36 | 48,782.09 | 1.12 µs   |
| JavaScript / node 16.16.0 (x64-linux) | 39,111.61/rps | 5,570.78  | 42,321.15 | 40,690.28 | 41,781.68 | 1.28 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------- | -------- | --------- | -------- | --------- | --------- |
| Crystal  | 79,555.07/rps | 6,279.92 | 85,926.36 | 82,862.6 | 84,851.84 | 626.68 ns |

### <a name="http-python">Python</a>

| Language | Average     | p75    | p99     | Min      | Max      | Latency |
| -------- | ----------- | ------ | ------- | -------- | -------- | ------- |
| Python   | 5,249.9/rps | 814.85 | 6,715.8 | 6,127.38 | 6,608.48 | 9.85 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75  | p99     | Min  | Max     |
| -------- | ------------ | ---- | ------- | ---- | ------- |
| Go       | 1.31/iter ms | 1 ms | 3.33 ms | 1 ms | 1.14 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.65/iter ms | 59.59 ms | 76.72 ms | 60.49 ms | 61.33 ms |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 21.26/iter ms | 18.6 ms  | 32.95 ms | 19.34 ms | 23.69 ms |
| JavaScript / deno 1.24.2 (x64-linux)  | 22.82/iter ms | 21.02 ms | 33.63 ms | 22.46 ms | 23.37 ms |
| JavaScript / node 16.16.0 (x64-linux) | 45.1/iter ms  | 41.89 ms | 56.54 ms | 47.09 ms | 42.4 ms  |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Crystal  | 2.48/iter ms | 1.8 ms | 4.68 ms | 2.65 ms | 2.47 ms |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 20.38/iter ms | 18.37 ms | 30.34 ms | 20.94 ms | 18.8 ms |

