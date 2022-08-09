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

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 54,025.09/rps | 4,790.51 | 64,519.03 | 57,306.01 | 60,715.68 | 924.07 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 10,784.27/rps | 898.13 | 13,074.53 | 11,364.04 | 12,321.45 | 4.64 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 79,172.39/rps | 11,488.48 | 88,166.38 | 82,459.39 | 87,310.44 | 629.68 ns |
| JavaScript / deno 1.24.2 (x64-linux)  | 40,361.95/rps | 6,894.28  | 45,062.78 | 44,055.11 | 44,863.9  | 1.24 µs   |
| JavaScript / node 16.16.0 (x64-linux) | 35,645.13/rps | 5,853.13  | 38,574.77 | 37,472.95 | 38,288.18 | 1.4 µs    |

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency  |
| -------- | ------------- | -------- | --------- | --------- | --------- | -------- |
| Crystal  | 71,459.99/rps | 4,940.17 | 76,348.15 | 73,508.95 | 75,860.54 | 698.1 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99     | Min      | Max      | Latency  |
| -------- | ------------ | ------ | ------- | -------- | -------- | -------- |
| Python   | 5,178.11/rps | 629.64 | 6,123.5 | 5,679.98 | 5,981.74 | 10.04 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Go       | 1.42/iter ps | 1.2 ps | 2.43 ps | 1.31 ps | 1.41 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 67.12/iter ps | 65.39 ps | 69.28 ps | 67.63 ps | 67.58 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 16.92/iter ps | 15.59 ps | 21.15 ps | 15.7 ps  | 17.48 ps |
| JavaScript / deno 1.24.2 (x64-linux)  | 23.44/iter ps | 22.06 ps | 25.16 ps | 24.42 ps | 23.28 ps |
| JavaScript / node 16.16.0 (x64-linux) | 48.4/iter ps  | 45.85 ps | 57.87 ps | 48.54 ps | 47.83 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.48/iter ps | 2.16 ps | 6.56 ps | 2.25 ps | 2.44 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 22.38/iter ps | 21.65 ps | 28.12 ps | 22.75 ps | 22.1 ps |

