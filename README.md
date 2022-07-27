*Ran on Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz*

## Table Of Contents

- Benchmarks
   - [buffer](#buffer)
     - [encode](#encode)
     - [decode](#decode)
   - [json](#json)
   - [nanoid](#nanoid) (3rd-packages)
   - [console](#console)

## Buffer

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('ascii') | 471.35 ns/iter | 456.95 ns | 471.05 ns | 575.86 ns | 1.05 µs |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 988.72 ns/iter | 853.65 ns | 919.97 ns | 1.73 µs   | 1.73 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.37 µs/iter   | 1.25 µs   | 1.39 µs   | 2.15 µs   | 2.15 µs |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max     |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | ------- |
| node v18.7.0 (x64-linux)               | .toString('utf8') | 487.26 ns/iter | 470.63 ns | 485.17 ns | 575.75 ns | 1.19 µs |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 959.49 ns/iter | 837.09 ns | 884.33 ns | 1.67 µs   | 1.67 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.44 µs/iter   | 1.33 µs   | 1.45 µs   | 2.01 µs   | 2.01 µs |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('utf16le') | 471.38 ns/iter | 463.02 ns | 476.37 ns | 501.99 ns | 510.67 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 1.06 µs/iter   | 942.51 ns | 979.67 ns | 1.78 µs   | 1.78 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.35 µs/iter   | 1.3 µs    | 1.37 µs   | 1.67 µs   | 1.67 µs   |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('ucs2') | 468.7 ns/iter | 461.67 ns | 468.36 ns | 499.86 ns | 503.09 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 1 µs/iter     | 870.82 ns | 914.87 ns | 1.74 µs   | 1.74 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.37 µs/iter  | 1.31 µs   | 1.39 µs   | 1.49 µs   | 1.49 µs   |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64') | 493.68 ns/iter | 487.67 ns | 494.99 ns | 514.17 ns | 523.11 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 1.04 µs/iter   | 906.77 ns | 963.51 ns | 1.85 µs   | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.42 µs/iter   | 1.37 µs   | 1.43 µs   | 1.53 µs   | 1.53 µs   |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('base64url') | 484.19 ns/iter | 478.8 ns  | 487.86 ns | 496.72 ns | 496.92 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 1.07 µs/iter   | 925.33 ns | 1 µs      | 1.83 µs   | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.72 µs/iter   | 1.62 µs   | 1.73 µs   | 1.94 µs   | 1.94 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('latin1') | 466.86 ns/iter | 462.01 ns | 466.76 ns | 489.94 ns | 494.52 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 1.03 µs/iter   | 891.99 ns | 967.04 ns | 1.85 µs   | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.41 µs/iter   | 1.33 µs   | 1.44 µs   | 1.49 µs   | 1.49 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('binary') | 471.6 ns/iter | 464.84 ns | 476.56 ns | 483.88 ns | 522.96 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 1.01 µs/iter  | 893.46 ns | 927.98 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.38 µs/iter  | 1.32 µs   | 1.41 µs   | 1.51 µs   | 1.51 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .toString('hex') | 485.57 ns/iter | 478.21 ns | 489.63 ns | 518.73 ns | 552.31 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 1.02 µs/iter   | 901.03 ns | 934.11 ns | 1.85 µs   | 1.85 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.4 µs/iter    | 1.29 µs   | 1.43 µs   | 1.5 µs    | 1.5 µs    |


### decode

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'ascii') | 413.33 ns/iter | 404.33 ns | 415.76 ns | 494.63 ns | 627.5 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii') | 645.01 ns/iter | 633.59 ns | 642.95 ns | 847.41 ns | 847.41 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii') | 970.56 ns/iter | 847.26 ns | 878.71 ns | 1.71 µs   | 1.71 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'utf8') | 496.96 ns/iter | 489.14 ns | 495.54 ns | 548.72 ns | 647.93 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8') | 964.38 ns/iter | 853.21 ns | 866.7 ns  | 1.68 µs   | 1.68 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8') | 1.44 µs/iter   | 1.36 µs   | 1.46 µs   | 1.52 µs   | 1.52 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'utf16le') | 408.13 ns/iter | 403.4 ns  | 407.28 ns | 430.72 ns | 434.62 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le') | 618.37 ns/iter | 608.53 ns | 619.16 ns | 685.71 ns | 685.71 ns |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le') | 1.03 µs/iter   | 914.31 ns | 947.27 ns | 1.83 µs   | 1.83 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'ucs2') | 406.46 ns/iter | 401.12 ns | 405.81 ns | 434.87 ns | 437.83 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2') | 604.59 ns/iter | 598.72 ns | 606.03 ns | 658.96 ns | 658.96 ns |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2') | 997.66 ns/iter | 877.86 ns | 896.88 ns | 1.72 µs   | 1.72 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                   | Average       | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------- | ------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8=', 'base64') | 525.5 ns/iter | 481.48 ns | 533.84 ns | 567.04 ns | 610.59 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64') | 1.05 µs/iter  | 923.8 ns  | 959.97 ns | 1.81 µs   | 1.81 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64') | 1.51 µs/iter  | 1.48 µs   | 1.51 µs   | 1.6 µs    | 1.6 µs    |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                     | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8', 'base64url') | 497.41 ns/iter | 468.29 ns | 506.94 ns | 529.95 ns | 532.96 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 1.04 µs/iter   | 911.85 ns | 946.57 ns | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.77 µs/iter   | 1.73 µs   | 1.76 µs   | 2.25 µs   | 2.25 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'latin1') | 407.82 ns/iter | 394.69 ns | 413.14 ns | 445.68 ns | 448.75 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1') | 672.27 ns/iter | 639.6 ns  | 653.58 ns | 1.25 µs   | 1.25 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1') | 984.57 ns/iter | 852.72 ns | 890.72 ns | 1.78 µs   | 1.78 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('hello', 'binary') | 409.64 ns/iter | 396.55 ns | 416.29 ns | 427.29 ns | 432.88 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary') | 662.52 ns/iter | 638.26 ns | 652.7 ns  | 1.33 µs   | 1.33 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary') | 974.74 ns/iter | 852.46 ns | 879.89 ns | 1.74 µs   | 1.74 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('68656c6c6f', 'hex') | 489.18 ns/iter | 458.26 ns | 497.96 ns | 522.32 ns | 525.11 ns |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex') | 922.65 ns/iter | 805.78 ns | 837.53 ns | 1.73 µs   | 1.73 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex') | 1.32 µs/iter   | 1.26 µs   | 1.29 µs   | 2.14 µs   | 2.14 µs   |


#### everything
| Runtime                                | Benchmark                     | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'ucs2')           | 406.46 ns/iter | 401.12 ns | 405.81 ns | 434.87 ns | 437.83 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'latin1')      | 407.82 ns/iter | 394.69 ns | 413.14 ns | 445.68 ns | 448.75 ns |
| node v18.7.0 (x64-linux)               | .from('敨汬', 'utf16le')        | 408.13 ns/iter | 403.4 ns  | 407.28 ns | 430.72 ns | 434.62 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'binary')      | 409.64 ns/iter | 396.55 ns | 416.29 ns | 427.29 ns | 432.88 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'ascii')       | 413.33 ns/iter | 404.33 ns | 415.76 ns | 494.63 ns | 627.5 ns  |
| node v18.7.0 (x64-linux)               | .toString('latin1')           | 466.86 ns/iter | 462.01 ns | 466.76 ns | 489.94 ns | 494.52 ns |
| node v18.7.0 (x64-linux)               | .toString('ucs2')             | 468.7 ns/iter  | 461.67 ns | 468.36 ns | 499.86 ns | 503.09 ns |
| node v18.7.0 (x64-linux)               | .toString('ascii')            | 471.35 ns/iter | 456.95 ns | 471.05 ns | 575.86 ns | 1.05 µs   |
| node v18.7.0 (x64-linux)               | .toString('utf16le')          | 471.38 ns/iter | 463.02 ns | 476.37 ns | 501.99 ns | 510.67 ns |
| node v18.7.0 (x64-linux)               | .toString('binary')           | 471.6 ns/iter  | 464.84 ns | 476.56 ns | 483.88 ns | 522.96 ns |
| node v18.7.0 (x64-linux)               | .toString('base64url')        | 484.19 ns/iter | 478.8 ns  | 487.86 ns | 496.72 ns | 496.92 ns |
| node v18.7.0 (x64-linux)               | .toString('hex')              | 485.57 ns/iter | 478.21 ns | 489.63 ns | 518.73 ns | 552.31 ns |
| node v18.7.0 (x64-linux)               | .toString('utf8')             | 487.26 ns/iter | 470.63 ns | 485.17 ns | 575.75 ns | 1.19 µs   |
| node v18.7.0 (x64-linux)               | .from('68656c6c6f', 'hex')    | 489.18 ns/iter | 458.26 ns | 497.96 ns | 522.32 ns | 525.11 ns |
| node v18.7.0 (x64-linux)               | .toString('base64')           | 493.68 ns/iter | 487.67 ns | 494.99 ns | 514.17 ns | 523.11 ns |
| node v18.7.0 (x64-linux)               | .from('hello', 'utf8')        | 496.96 ns/iter | 489.14 ns | 495.54 ns | 548.72 ns | 647.93 ns |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8', 'base64url') | 497.41 ns/iter | 468.29 ns | 506.94 ns | 529.95 ns | 532.96 ns |
| node v18.7.0 (x64-linux)               | .from('aGVsbG8=', 'base64')   | 525.5 ns/iter  | 481.48 ns | 533.84 ns | 567.04 ns | 610.59 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2')           | 604.59 ns/iter | 598.72 ns | 606.03 ns | 658.96 ns | 658.96 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le')        | 618.37 ns/iter | 608.53 ns | 619.16 ns | 685.71 ns | 685.71 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii')       | 645.01 ns/iter | 633.59 ns | 642.95 ns | 847.41 ns | 847.41 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary')      | 662.52 ns/iter | 638.26 ns | 652.7 ns  | 1.33 µs   | 1.33 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1')      | 672.27 ns/iter | 639.6 ns  | 653.58 ns | 1.25 µs   | 1.25 µs   |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex')    | 922.65 ns/iter | 805.78 ns | 837.53 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')             | 959.49 ns/iter | 837.09 ns | 884.33 ns | 1.67 µs   | 1.67 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8')        | 964.38 ns/iter | 853.21 ns | 866.7 ns  | 1.68 µs   | 1.68 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii')       | 970.56 ns/iter | 847.26 ns | 878.71 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary')      | 974.74 ns/iter | 852.46 ns | 879.89 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1')      | 984.57 ns/iter | 852.72 ns | 890.72 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')            | 988.72 ns/iter | 853.65 ns | 919.97 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2')           | 997.66 ns/iter | 877.86 ns | 896.88 ns | 1.72 µs   | 1.72 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')             | 1 µs/iter      | 870.82 ns | 914.87 ns | 1.74 µs   | 1.74 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')           | 1.01 µs/iter   | 893.46 ns | 927.98 ns | 1.73 µs   | 1.73 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')              | 1.02 µs/iter   | 901.03 ns | 934.11 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')           | 1.03 µs/iter   | 891.99 ns | 967.04 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le')        | 1.03 µs/iter   | 914.31 ns | 947.27 ns | 1.83 µs   | 1.83 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')           | 1.04 µs/iter   | 906.77 ns | 963.51 ns | 1.85 µs   | 1.85 µs   |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 1.04 µs/iter   | 911.85 ns | 946.57 ns | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64')   | 1.05 µs/iter   | 923.8 ns  | 959.97 ns | 1.81 µs   | 1.81 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')          | 1.06 µs/iter   | 942.51 ns | 979.67 ns | 1.78 µs   | 1.78 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url')        | 1.07 µs/iter   | 925.33 ns | 1 µs      | 1.83 µs   | 1.83 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex')    | 1.32 µs/iter   | 1.26 µs   | 1.29 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')          | 1.35 µs/iter   | 1.3 µs    | 1.37 µs   | 1.67 µs   | 1.67 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')             | 1.37 µs/iter   | 1.31 µs   | 1.39 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')            | 1.37 µs/iter   | 1.25 µs   | 1.39 µs   | 2.15 µs   | 2.15 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')           | 1.38 µs/iter   | 1.32 µs   | 1.41 µs   | 1.51 µs   | 1.51 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')              | 1.4 µs/iter    | 1.29 µs   | 1.43 µs   | 1.5 µs    | 1.5 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')           | 1.41 µs/iter   | 1.33 µs   | 1.44 µs   | 1.49 µs   | 1.49 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')           | 1.42 µs/iter   | 1.37 µs   | 1.43 µs   | 1.53 µs   | 1.53 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')             | 1.44 µs/iter   | 1.33 µs   | 1.45 µs   | 2.01 µs   | 2.01 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8')        | 1.44 µs/iter   | 1.36 µs   | 1.46 µs   | 1.52 µs   | 1.52 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64')   | 1.51 µs/iter   | 1.48 µs   | 1.51 µs   | 1.6 µs    | 1.6 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url')        | 1.72 µs/iter   | 1.62 µs   | 1.73 µs   | 1.94 µs   | 1.94 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.77 µs/iter   | 1.73 µs   | 1.76 µs   | 2.25 µs   | 2.25 µs   |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.14 ns/iter | 152.63 ns | 155.89 ns | 217.03 ns | 289.92 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.3 ns/iter  | 302.29 ns | 311.37 ns | 331.31 ns | 339.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.29 ns/iter | 314.68 ns | 318.55 ns | 348.68 ns | 383.37 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 247.87 ns/iter | 242.37 ns | 252.16 ns | 268.1 ns  | 278.41 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.43 ns/iter | 239.29 ns | 249.87 ns | 264.1 ns  | 292.18 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.78 ns/iter | 356.18 ns | 409.24 ns | 430.09 ns | 485.9 ns  |


### everything
| Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 159.14 ns/iter | 152.63 ns | 155.89 ns | 217.03 ns | 289.92 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 247.87 ns/iter | 242.37 ns | 252.16 ns | 268.1 ns  | 278.41 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 248.43 ns/iter | 239.29 ns | 249.87 ns | 264.1 ns  | 292.18 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 308.3 ns/iter  | 302.29 ns | 311.37 ns | 331.31 ns | 339.79 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 320.29 ns/iter | 314.68 ns | 318.55 ns | 348.68 ns | 383.37 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 383.78 ns/iter | 356.18 ns | 409.24 ns | 430.09 ns | 485.9 ns  |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 652.75 ns/iter | 541.41 ns | 692.53 ns | 795.86 ns | 795.86 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.41 µs/iter   | 1.36 µs   | 1.42 µs   | 1.47 µs   | 1.47 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.84 µs/iter   | 1.8 µs    | 1.84 µs   | 2.08 µs   | 2.08 µs   |

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.07 µs/iter  | 1.81 µs | 2.12 µs | 2.21 µs | 2.21 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello') | 7.83 µs/iter  | 3 µs    | 7.5 µs  | 10 µs   | 17.12 ms  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 11.75 µs/iter | 6.6 µs  | 12.2 µs | 14.6 µs | 769.31 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.14 µs/iter  | 1.87 µs | 2.53 µs | 6.12 µs | 6.12 µs   |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.86 µs/iter | 9.4 µs  | 10 µs   | 15.2 µs | 7.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.33 µs/iter | 11.7 µs | 18.3 µs | 22.9 µs | 397.51 µs |


### everything
| Runtime                                | Benchmark                        | Average       | p75     | p99     | Min     | Max       |
| -------------------------------------- | -------------------------------- | ------------- | ------- | ------- | ------- | --------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.07 µs/iter  | 1.81 µs | 2.12 µs | 2.21 µs | 2.21 µs   |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 3.14 µs/iter  | 1.87 µs | 2.53 µs | 6.12 µs | 6.12 µs   |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 7.83 µs/iter  | 3 µs    | 7.5 µs  | 10 µs   | 17.12 ms  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 10.86 µs/iter | 9.4 µs  | 10 µs   | 15.2 µs | 7.13 ms   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 11.75 µs/iter | 6.6 µs  | 12.2 µs | 14.6 µs | 769.31 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 18.33 µs/iter | 11.7 µs | 18.3 µs | 22.9 µs | 397.51 µs |

