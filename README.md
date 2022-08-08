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

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Go       | 52,327.55/rps | 5,034.61 | 61,020.9 | 56,054.39 | 59,114.92 | 954.03 ns |

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency |
| -------- | ------------ | -------- | --------- | --------- | --------- | ------- |
| Ruby     | 10,186.1/rps | 1,416.32 | 13,149.99 | 11,051.87 | 12,194.51 | 4.91 µs |

### <a name="http-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 76,820.61/rps | 10,373.28 | 86,968.85 | 82,239.65 | 86,262.77 | 649.22 ns |
| JavaScript / node 16.16.0 (x64-linux) | 35,670.43/rps | 5,795.33  | 40,309.2  | 37,603.42 | 39,183.99 | 1.4 µs    |
| JavaScript / deno null (x64-linux)    | 19,066.61/rps | 1,466.76  | 22,188.54 | 19,994.96 | 21,455.99 | 2.62 µs   |

### <a name="http-crystal">Crystal</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------ | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 67,999.7/rps | 6,341.59 | 76,033.84 | 71,560.86 | 74,725.84 | 733.88 ns |

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency  |
| -------- | ------------ | ------ | -------- | -------- | -------- | -------- |
| Python   | 4,279.73/rps | 928.97 | 6,052.05 | 5,453.15 | 5,915.44 | 12.55 µs |

## console
### <a name="console-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.43/iter ps | 1.18 ps | 2.59 ps | 1.39 ps | 1.53 ps |

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 67.78/iter ps | 64.07 ps | 80.65 ps | 65.86 ps | 65.49 ps |

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.7 (x64-linux)    | 18.39/iter ps | 15.66 ps | 24.76 ps | 18.84 ps | 21.61 ps |
| JavaScript / node 16.16.0 (x64-linux) | 50.59/iter ps | 46.44 ps | 61.98 ps | 51.48 ps | 55.36 ps |

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max    |
| -------- | ------------ | ------- | ------- | ------- | ------ |
| Crystal  | 2.87/iter ps | 2.26 ps | 5.67 ps | 2.68 ps | 2.5 ps |

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.41/iter ps | 21.43 ps | 36.84 ps | 22.42 ps | 22.98 ps |

