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

| Language | Average   | p75    | p99      | Min | Max    | Latency |
| -------- | --------- | ------ | -------- | --- | ------ | ------- |
| Python   | 28.78/rps | 133.69 | 1,132.41 | 0   | 703.19 | 1.69 ms |

### <a name="http-crystal">Crystal</a>

| Language | Average        | p75      | p99        | Min        | Max        | Latency   |
| -------- | -------------- | -------- | ---------- | ---------- | ---------- | --------- |
| Crystal  | 104,332.78/rps | 9,615.32 | 135,547.24 | 109,512.49 | 127,097.77 | 477.92 ns |

### <a name="http-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99        | Min        | Max        | Latency   |
| ------------------------------------ | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 127,861.96/rps | 12,612.3  | 166,875.08 | 131,955.53 | 153,785.54 | 389.71 ns |
| JavaScript / deno 1.24.2 (x64-linux) | 36,404.73/rps  | 26,449.87 | 80,155.68  | 74,412.71  | 79,389.68  | 1.37 µs   |
| JavaScript / node 18.7.0 (x64-linux) | 21,671.36/rps  | 16,144.29 | 50,909.38  | 45,734.73  | 49,967.89  | 2.31 µs   |

### <a name="http-ruby">Ruby</a>

| Language | Average | p75    | p99      | Min | Max | Latency |
| -------- | ------- | ------ | -------- | --- | --- | ------- |
| Ruby     | 5.3/rps | 111.66 | 2,497.67 | 0   | 0   | 5.15 ms |

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency  |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | -------- |
| Go       | 183,019.43/rps | 45,517.75 | 242,132.78 | 217,117.25 | 237,477.33 | 271.2 ns |

## console

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min     | Max     |
| -------- | ------------- | ------- | -------- | ------- | ------- |
| Python   | 11.51/iter ms | 9.63 ms | 31.21 ms | 9.75 ms | 9.75 ms |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min    | Max     |
| -------- | ------------ | --------- | ------- | ------ | ------- |
| Crystal  | 1.63/iter ms | 861.87 µs | 8.12 ms | 1.2 ms | 8.12 ms |

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)   | 10.53/iter ms | 8.95 ms  | 15.61 ms | 9.5 ms   | 9.52 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 15.23/iter ms | 13.75 ms | 19.33 ms | 14.92 ms | 14.84 ms |
| JavaScript / node 18.7.0 (x64-linux) | 41.87/iter ms | 38.23 ms | 78.62 ms | 39.18 ms | 43.32 ms |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 47.75/iter ms | 42.38 ms | 67.88 ms | 44.54 ms | 58.25 ms |

### <a name="console-go">Go</a>

| Language | Average        | p75      | p99     | Min       | Max       |
| -------- | -------------- | -------- | ------- | --------- | --------- |
| Go       | 809.67/iter µs | 364.7 µs | 2.19 ms | 565.92 µs | 916.48 µs |

