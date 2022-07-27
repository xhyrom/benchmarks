*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [buffer](#buffer)
   - [json](#json)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------ | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 412.8 ns/iter | 399.76 ns | 415.25 ns | 599.02 ns | 619.02 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 936.3 ns/iter | 771.4 ns  | 935.72 ns | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.36 µs/iter  | 1.27 µs   | 1.37 µs   | 2.05 µs   | 2.05 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 423.77 ns/iter | 414.55 ns | 427.53 ns | 503.92 ns | 594.13 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 855.94 ns/iter | 756.6 ns  | 787.29 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.41 µs/iter   | 1.32 µs   | 1.42 µs   | 1.98 µs   | 1.98 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 434.75 ns/iter | 408.61 ns | 465.9 ns  | 524.14 ns | 809.33 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 951.47 ns/iter | 839.86 ns | 869.72 ns | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.3 µs/iter    | 1.21 µs   | 1.33 µs   | 1.39 µs   | 1.39 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 468.37 ns/iter | 462.92 ns | 469.88 ns | 494.86 ns | 498.65 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 878.51 ns/iter | 778.68 ns | 800.77 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.29 µs/iter   | 1.25 µs   | 1.32 µs   | 1.48 µs   | 1.48 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average       | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------- | ------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 491.8 ns/iter | 486.4 ns  | 490.95 ns | 516.7 ns | 518.46 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.02 µs/iter  | 817.85 ns | 928.65 ns | 1.79 µs  | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.38 µs/iter  | 1.34 µs   | 1.39 µs   | 1.51 µs  | 1.51 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 487.96 ns/iter | 481.39 ns | 490.88 ns | 504.31 ns | 515.73 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.1 µs/iter    | 955.71 ns | 1.03 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.66 µs/iter   | 1.6 µs    | 1.68 µs   | 1.79 µs   | 1.79 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 472.07 ns/iter | 466.24 ns | 473.24 ns | 488.3 ns | 491.84 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.03 µs/iter   | 909.43 ns | 947.47 ns | 1.78 µs  | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.33 µs/iter   | 1.27 µs   | 1.35 µs   | 1.45 µs  | 1.45 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 471.47 ns/iter | 465.3 ns  | 475.73 ns | 488.35 ns | 502.92 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.04 µs/iter   | 919.56 ns | 956.47 ns | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.34 µs/iter   | 1.27 µs   | 1.36 µs   | 1.42 µs   | 1.42 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 492.79 ns/iter | 480.56 ns | 494.43 ns | 551.33 ns | 556.46 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 993.32 ns/iter | 872.89 ns | 901.23 ns | 1.75 µs   | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.39 µs/iter   | 1.33 µs   | 1.41 µs   | 1.48 µs   | 1.48 µs   |


### decode

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'ascii') | 418.46 ns/iter | 407.67 ns | 420.41 ns | 454.23 ns | 538.57 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii') | 649.18 ns/iter | 638.25 ns | 647.27 ns | 810.93 ns | 810.93 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii') | 999.65 ns/iter | 874.78 ns | 903.98 ns | 1.76 µs   | 1.76 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'utf8') | 503.49 ns/iter | 489.23 ns | 503.36 ns | 571.47 ns | 577.63 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8') | 967.47 ns/iter | 871.71 ns | 882.94 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8') | 1.39 µs/iter   | 1.34 µs   | 1.41 µs   | 1.52 µs   | 1.52 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'utf16le') | 414.59 ns/iter | 406.34 ns | 417.54 ns | 466.62 ns | 487.59 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le') | 621.01 ns/iter | 613.01 ns | 622.25 ns | 659.21 ns | 659.21 ns |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le') | 1 µs/iter      | 880.71 ns | 902.14 ns | 1.71 µs   | 1.71 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'ucs2') | 411.88 ns/iter | 406.82 ns | 410.65 ns | 437.6 ns  | 443.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2') | 602.14 ns/iter | 534.5 ns  | 608.63 ns | 803.94 ns | 803.94 ns |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2') | 954.79 ns/iter | 843.4 ns  | 864.33 ns | 1.66 µs   | 1.66 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8=', 'base64') | 491.41 ns/iter | 469.52 ns | 498.18 ns | 535.64 ns | 562.53 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64') | 1.06 µs/iter   | 944.13 ns | 963.53 ns | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64') | 1.39 µs/iter   | 1.31 µs   | 1.33 µs   | 2.65 µs   | 2.65 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                     | Average        | p75      | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | -------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8', 'base64url') | 483.42 ns/iter | 465.9 ns | 489.79 ns | 515.82 ns | 517.84 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 1.07 µs/iter   | 950.4 ns | 964.6 ns  | 1.81 µs   | 1.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.57 µs/iter   | 1.53 µs  | 1.55 µs   | 2.18 µs   | 2.18 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'latin1') | 411.66 ns/iter | 402.14 ns | 415.76 ns | 436.86 ns | 450.15 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1') | 594.36 ns/iter | 562.46 ns | 574.25 ns | 1.14 µs   | 1.14 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1') | 996.58 ns/iter | 882.29 ns | 895.57 ns | 1.72 µs   | 1.72 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'binary') | 407.45 ns/iter | 398.27 ns | 412.07 ns | 422.71 ns | 425.66 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary') | 573.94 ns/iter | 563.24 ns | 573.69 ns | 661.87 ns | 661.87 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary') | 1.01 µs/iter   | 882.22 ns | 922.71 ns | 1.73 µs   | 1.73 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('68656c6c6f', 'hex') | 474.05 ns/iter | 454.07 ns | 480.25 ns | 510.72 ns | 531.93 ns |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex') | 882.41 ns/iter | 741.13 ns | 840.84 ns | 1.64 µs   | 1.64 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex') | 979.84 ns/iter | 971.77 ns | 979.3 ns  | 1.02 µs   | 1.02 µs   |


#### everything
| Runtime                                | Benchmark                     | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'binary')      | 407.45 ns/iter | 398.27 ns | 412.07 ns | 422.71 ns | 425.66 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'latin1')      | 411.66 ns/iter | 402.14 ns | 415.76 ns | 436.86 ns | 450.15 ns |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'ucs2')           | 411.88 ns/iter | 406.82 ns | 410.65 ns | 437.6 ns  | 443.15 ns |
| node v18.7.0 (x64-linux)               | .toString('ascii')            | 412.8 ns/iter  | 399.76 ns | 415.25 ns | 599.02 ns | 619.02 ns |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'utf16le')        | 414.59 ns/iter | 406.34 ns | 417.54 ns | 466.62 ns | 487.59 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'ascii')       | 418.46 ns/iter | 407.67 ns | 420.41 ns | 454.23 ns | 538.57 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')             | 423.77 ns/iter | 414.55 ns | 427.53 ns | 503.92 ns | 594.13 ns |
| node v18.7.0 (x64-linux)               | .toString('utf16le')          | 434.75 ns/iter | 408.61 ns | 465.9 ns  | 524.14 ns | 809.33 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')             | 468.37 ns/iter | 462.92 ns | 469.88 ns | 494.86 ns | 498.65 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')           | 471.47 ns/iter | 465.3 ns  | 475.73 ns | 488.35 ns | 502.92 ns |
| node v18.7.0 (x64-linux)               | .toString('latin1')           | 472.07 ns/iter | 466.24 ns | 473.24 ns | 488.3 ns  | 491.84 ns |
| node v18.7.0 (x64-linux)               | .from('68656c6c6f', 'hex')    | 474.05 ns/iter | 454.07 ns | 480.25 ns | 510.72 ns | 531.93 ns |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8', 'base64url') | 483.42 ns/iter | 465.9 ns  | 489.79 ns | 515.82 ns | 517.84 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url')        | 487.96 ns/iter | 481.39 ns | 490.88 ns | 504.31 ns | 515.73 ns |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8=', 'base64')   | 491.41 ns/iter | 469.52 ns | 498.18 ns | 535.64 ns | 562.53 ns |
| node v18.7.0 (x64-linux)               | .toString('base64')           | 491.8 ns/iter  | 486.4 ns  | 490.95 ns | 516.7 ns  | 518.46 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')              | 492.79 ns/iter | 480.56 ns | 494.43 ns | 551.33 ns | 556.46 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'utf8')        | 503.49 ns/iter | 489.23 ns | 503.36 ns | 571.47 ns | 577.63 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary')      | 573.94 ns/iter | 563.24 ns | 573.69 ns | 661.87 ns | 661.87 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1')      | 594.36 ns/iter | 562.46 ns | 574.25 ns | 1.14 µs   | 1.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2')           | 602.14 ns/iter | 534.5 ns  | 608.63 ns | 803.94 ns | 803.94 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le')        | 621.01 ns/iter | 613.01 ns | 622.25 ns | 659.21 ns | 659.21 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii')       | 649.18 ns/iter | 638.25 ns | 647.27 ns | 810.93 ns | 810.93 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')             | 855.94 ns/iter | 756.6 ns  | 787.29 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')             | 878.51 ns/iter | 778.68 ns | 800.77 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex')    | 882.41 ns/iter | 741.13 ns | 840.84 ns | 1.64 µs   | 1.64 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')            | 936.3 ns/iter  | 771.4 ns  | 935.72 ns | 1.65 µs   | 1.65 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')          | 951.47 ns/iter | 839.86 ns | 869.72 ns | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2')           | 954.79 ns/iter | 843.4 ns  | 864.33 ns | 1.66 µs   | 1.66 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8')        | 967.47 ns/iter | 871.71 ns | 882.94 ns | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex')    | 979.84 ns/iter | 971.77 ns | 979.3 ns  | 1.02 µs   | 1.02 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')              | 993.32 ns/iter | 872.89 ns | 901.23 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1')      | 996.58 ns/iter | 882.29 ns | 895.57 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii')       | 999.65 ns/iter | 874.78 ns | 903.98 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le')        | 1 µs/iter      | 880.71 ns | 902.14 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary')      | 1.01 µs/iter   | 882.22 ns | 922.71 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')           | 1.02 µs/iter   | 817.85 ns | 928.65 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')           | 1.03 µs/iter   | 909.43 ns | 947.47 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')           | 1.04 µs/iter   | 919.56 ns | 956.47 ns | 1.8 µs    | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64')   | 1.06 µs/iter   | 944.13 ns | 963.53 ns | 1.8 µs    | 1.8 µs    |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 1.07 µs/iter   | 950.4 ns  | 964.6 ns  | 1.81 µs   | 1.81 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url')        | 1.1 µs/iter    | 955.71 ns | 1.03 µs   | 1.89 µs   | 1.89 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')             | 1.29 µs/iter   | 1.25 µs   | 1.32 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')          | 1.3 µs/iter    | 1.21 µs   | 1.33 µs   | 1.39 µs   | 1.39 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')           | 1.33 µs/iter   | 1.27 µs   | 1.35 µs   | 1.45 µs   | 1.45 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')           | 1.34 µs/iter   | 1.27 µs   | 1.36 µs   | 1.42 µs   | 1.42 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')            | 1.36 µs/iter   | 1.27 µs   | 1.37 µs   | 2.05 µs   | 2.05 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')           | 1.38 µs/iter   | 1.34 µs   | 1.39 µs   | 1.51 µs   | 1.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8')        | 1.39 µs/iter   | 1.34 µs   | 1.41 µs   | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')              | 1.39 µs/iter   | 1.33 µs   | 1.41 µs   | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64')   | 1.39 µs/iter   | 1.31 µs   | 1.33 µs   | 2.65 µs   | 2.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')             | 1.41 µs/iter   | 1.32 µs   | 1.42 µs   | 1.98 µs   | 1.98 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.57 µs/iter   | 1.53 µs   | 1.55 µs   | 2.18 µs   | 2.18 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url')        | 1.66 µs/iter   | 1.6 µs    | 1.68 µs   | 1.79 µs   | 1.79 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.26 ns/iter | 152.56 ns | 155.86 ns | 209.29 ns | 416.99 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 273.27 ns/iter | 261.01 ns | 272.32 ns | 324.63 ns | 814.83 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 292.6 ns/iter  | 281.77 ns | 297.16 ns | 339.77 ns | 813.78 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 215.24 ns/iter | 203.64 ns | 215.96 ns | 235.38 ns | 907.32 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 220.93 ns/iter | 207.87 ns | 221.2 ns  | 256.8 ns  | 412.97 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 384.45 ns/iter | 358.18 ns | 410.47 ns | 436.6 ns  | 487.27 ns |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.26 ns/iter | 152.56 ns | 155.86 ns | 209.29 ns | 416.99 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 215.24 ns/iter | 203.64 ns | 215.96 ns | 235.38 ns | 907.32 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 220.93 ns/iter | 207.87 ns | 221.2 ns  | 256.8 ns  | 412.97 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 273.27 ns/iter | 261.01 ns | 272.32 ns | 324.63 ns | 814.83 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 292.6 ns/iter  | 281.77 ns | 297.16 ns | 339.77 ns | 813.78 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 384.45 ns/iter | 358.18 ns | 410.47 ns | 436.6 ns  | 487.27 ns |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75      | p99       | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | -------- | --------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 648.41 ns/iter | 534.5 ns | 673.52 ns | 2.01 µs | 2.01 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.44 µs/iter   | 1.38 µs  | 1.45 µs   | 1.49 µs | 1.49 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.71 µs/iter   | 1.68 µs  | 1.72 µs   | 1.86 µs | 1.86 µs |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average      | p75     | p99     | Min     | Max      |
| -------------------------------------- | -------------------- | ------------ | ------- | ------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.19 µs/iter | 1.66 µs | 1.92 µs | 8.42 µs | 8.42 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 3.54 µs/iter | 2.87 µs | 3.7 µs  | 3.95 µs | 3.95 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 9.96 µs/iter | 5.8 µs  | 10.9 µs | 13.5 µs | 362.5 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.88 µs/iter  | 1.71 µs | 1.91 µs | 1.97 µs | 1.97 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.13 µs/iter  | 5.9 µs  | 6.17 µs | 6.67 µs | 6.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.95 µs/iter | 11 µs   | 17 µs   | 22.8 µs | 505.51 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 1.88 µs/iter  | 1.71 µs | 1.91 µs | 1.97 µs | 1.97 µs   |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.19 µs/iter  | 1.66 µs | 1.92 µs | 8.42 µs | 8.42 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 3.54 µs/iter  | 2.87 µs | 3.7 µs  | 3.95 µs | 3.95 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.13 µs/iter  | 5.9 µs  | 6.17 µs | 6.67 µs | 6.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 9.96 µs/iter  | 5.8 µs  | 10.9 µs | 13.5 µs | 362.5 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 16.95 µs/iter | 11 µs   | 17 µs   | 22.8 µs | 505.51 µs |

