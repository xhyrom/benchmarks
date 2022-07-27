*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [nanoid](#nanoid) (3rd-packages)
   - [json](#json)
   - [buffer](#buffer)
     - [encode](#encode)
     - [decode](#decode)
   - [console](#console)

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | nanoid(36) | 535.75 ns/iter | 389.58 ns | 576.96 ns | 804.02 ns | 861.67 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.49 µs/iter   | 1.03 µs   | 1.71 µs   | 2.48 µs   | 2.48 µs   |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.61 µs/iter   | 1.37 µs   | 1.73 µs   | 2.32 µs   | 2.32 µs   |

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

## Buffer

### encode

#### Buffer.from('hello').toString('ascii')
| Runtime                                | Benchmark          | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ascii') | 415.07 ns/iter | 386.63 ns | 416.45 ns | 589.55 ns | 618.88 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ascii') | 825.37 ns/iter | 654.69 ns | 830.1 ns  | 1.61 µs   | 1.61 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii') | 1.15 µs/iter   | 1.03 µs   | 1.17 µs   | 1.98 µs   | 1.98 µs   |


#### Buffer.from('hello').toString('utf8')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf8') | 425.41 ns/iter | 398.18 ns | 425.61 ns | 522.34 ns | 959.54 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf8') | 780.87 ns/iter | 635.39 ns | 737.12 ns | 1.79 µs   | 1.79 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8') | 1.14 µs/iter   | 995.13 ns | 1.2 µs    | 1.54 µs   | 1.54 µs   |


#### Buffer.from('hello').toString('utf16le')
| Runtime                                | Benchmark            | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('utf16le') | 416.95 ns/iter | 390.64 ns | 421.99 ns | 499.31 ns | 668.65 ns |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le') | 848.59 ns/iter | 712.83 ns | 788.09 ns | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le') | 1.09 µs/iter   | 957.83 ns | 1.12 µs   | 1.4 µs    | 1.4 µs    |


#### Buffer.from('hello').toString('ucs2')
| Runtime                                | Benchmark         | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('ucs2') | 434.24 ns/iter | 387.34 ns | 447.98 ns | 614.05 ns | 614.59 ns |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2') | 810.96 ns/iter | 662.63 ns | 755.66 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2') | 1.1 µs/iter    | 928.04 ns | 1.12 µs   | 2.3 µs    | 2.3 µs    |


#### Buffer.from('hello').toString('base64')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min     | Max     |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | ------- | ------- |
| node v16.16.0 (x64-linux)              | .toString('base64') | 465.93 ns/iter | 407.11 ns | 455.41 ns | 1.42 µs | 1.43 µs |
| bun 0.1.5 (x64-linux)                  | .toString('base64') | 850.79 ns/iter | 705.07 ns | 783.09 ns | 1.55 µs | 1.55 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64') | 1.18 µs/iter   | 992.86 ns | 1.22 µs   | 1.63 µs | 1.63 µs |


#### Buffer.from('hello').toString('base64url')
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('base64url') | 442.02 ns/iter | 408.93 ns | 448.98 ns | 623.32 ns | 739.76 ns |
| bun 0.1.5 (x64-linux)                  | .toString('base64url') | 850.56 ns/iter | 690.35 ns | 807.24 ns | 1.58 µs   | 1.58 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url') | 1.55 µs/iter   | 1.25 µs   | 1.57 µs   | 2.51 µs   | 2.51 µs   |


#### Buffer.from('hello').toString('latin1')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('latin1') | 425.21 ns/iter | 392.05 ns | 432.51 ns | 562.51 ns | 642.67 ns |
| bun 0.1.5 (x64-linux)                  | .toString('latin1') | 793.23 ns/iter | 674.28 ns | 742.39 ns | 1.48 µs   | 1.48 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1') | 1.35 µs/iter   | 978.88 ns | 1.42 µs   | 3.24 µs   | 3.24 µs   |


#### Buffer.from('hello').toString('binary')
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('binary') | 420.53 ns/iter | 391.81 ns | 428.28 ns | 526.6 ns | 547.41 ns |
| bun 0.1.5 (x64-linux)                  | .toString('binary') | 810.2 ns/iter  | 690.06 ns | 760.71 ns | 1.55 µs  | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary') | 1.22 µs/iter   | 976.14 ns | 1.28 µs   | 1.65 µs  | 1.65 µs   |


#### Buffer.from('hello').toString('hex')
| Runtime                                | Benchmark        | Average        | p75       | p99       | Min     | Max       |
| -------------------------------------- | ---------------- | -------------- | --------- | --------- | ------- | --------- |
| node v16.16.0 (x64-linux)              | .toString('hex') | 434.96 ns/iter | 408.52 ns | 440.14 ns | 531 ns  | 561.22 ns |
| bun 0.1.5 (x64-linux)                  | .toString('hex') | 812.3 ns/iter  | 670.16 ns | 777.81 ns | 1.75 µs | 1.75 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex') | 1.08 µs/iter   | 956.4 ns  | 1.08 µs   | 2.14 µs | 2.14 µs   |


### decode

#### Buffer.from('hello', 'ascii').toString()
| Runtime                                | Benchmark               | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('hello', 'ascii') | 386.94 ns/iter | 364.67 ns | 389.38 ns | 500.88 ns | 547.49 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii') | 576.65 ns/iter | 487.1 ns  | 610.29 ns | 892.11 ns | 892.11 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii') | 945.18 ns/iter | 721.64 ns | 900.85 ns | 1.8 µs    | 1.8 µs    |


#### Buffer.from('hello', 'utf8').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('hello', 'utf8') | 463.34 ns/iter | 433.49 ns | 470.23 ns | 538.81 ns | 645.06 ns |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8') | 1.01 µs/iter   | 706.46 ns | 1.18 µs   | 2.41 µs   | 2.41 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8') | 1.19 µs/iter   | 994.51 ns | 1.28 µs   | 1.63 µs   | 1.63 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Runtime                                | Benchmark              | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ---------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('敨汬', 'utf16le') | 381.62 ns/iter | 364.24 ns | 384.96 ns | 454.36 ns | 499.61 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le') | 672.26 ns/iter | 473.42 ns | 843.82 ns | 1.27 µs   | 1.27 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le') | 1.03 µs/iter   | 861.8 ns  | 962.07 ns | 2.04 µs   | 2.04 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Runtime                                | Benchmark           | Average        | p75       | p99       | Min       | Max      |
| -------------------------------------- | ------------------- | -------------- | --------- | --------- | --------- | -------- |
| node v16.16.0 (x64-linux)              | .from('敨汬', 'ucs2') | 380.25 ns/iter | 364.5 ns  | 383.96 ns | 462.78 ns | 548.9 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2') | 589.82 ns/iter | 501.34 ns | 594.36 ns | 1.11 µs   | 1.11 µs  |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2') | 857.79 ns/iter | 660.26 ns | 863.32 ns | 2.01 µs   | 2.01 µs  |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Runtime                                | Benchmark                   | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | --------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('aGVsbG8=', 'base64') | 438.39 ns/iter | 415.41 ns | 443.43 ns | 613.13 ns | 641.79 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64') | 810.14 ns/iter | 678.87 ns | 742.21 ns | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64') | 1.35 µs/iter   | 1.24 µs   | 1.36 µs   | 1.77 µs   | 1.77 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Runtime                                | Benchmark                     | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('aGVsbG8', 'base64url') | 439.36 ns/iter | 408.1 ns  | 448.53 ns | 511.53 ns | 656.68 ns |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 825.96 ns/iter | 690.08 ns | 750.54 ns | 1.71 µs   | 1.71 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.5 µs/iter    | 1.37 µs   | 1.54 µs   | 1.88 µs   | 1.88 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min      | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | -------- | --------- |
| node v16.16.0 (x64-linux)              | .from('hello', 'latin1') | 378.75 ns/iter | 357.23 ns | 383.29 ns | 429.1 ns | 538.08 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1') | 573.72 ns/iter | 496.36 ns | 574.75 ns | 1.13 µs  | 1.13 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1') | 921.82 ns/iter | 660.4 ns  | 955.52 ns | 2.42 µs  | 2.42 µs   |


#### Buffer.from('hello', 'binary').toString()
| Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('hello', 'binary') | 378.37 ns/iter | 355.51 ns | 386.06 ns | 444.83 ns | 469.65 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary') | 671.91 ns/iter | 496.05 ns | 729.49 ns | 1.86 µs   | 1.86 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary') | 856.79 ns/iter | 662.52 ns | 824.65 ns | 1.76 µs   | 1.76 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Runtime                                | Benchmark                  | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | -------------------------- | -------------- | --------- | --------- | --------- | --------- |
| node v16.16.0 (x64-linux)              | .from('68656c6c6f', 'hex') | 420.94 ns/iter | 394.14 ns | 430.39 ns | 493.23 ns | 536.34 ns |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex') | 723.81 ns/iter | 609.77 ns | 651.82 ns | 1.55 µs   | 1.55 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex') | 1.01 µs/iter   | 842.09 ns | 1.09 µs   | 1.56 µs   | 1.56 µs   |


#### ok
| Runtime                                | Benchmark | Average      | p75     | p99     | Min      | Max      |
| -------------------------------------- | --------- | ------------ | ------- | ------- | -------- | -------- |
| bun 0.1.5 (x64-linux)                  | ok        | 2.02 ns/iter | 1.76 ns | 1.77 ns | 3.93 ns  | 17.35 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | ok        | 5.06 ns/iter | 4.55 ns | 4.6 ns  | 11.18 ns | 77.15 ns |
| node v16.16.0 (x64-linux)              | ok        | 5.29 ns/iter | 5.03 ns | 5.05 ns | 10.61 ns | 74.85 ns |


#### everything
| Runtime                                | Benchmark                     | Average        | p75       | p99       | Min       | Max       |
| -------------------------------------- | ----------------------------- | -------------- | --------- | --------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | ok                            | 2.02 ns/iter   | 1.76 ns   | 1.77 ns   | 3.93 ns   | 17.35 ns  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | ok                            | 5.06 ns/iter   | 4.55 ns   | 4.6 ns    | 11.18 ns  | 77.15 ns  |
| node v16.16.0 (x64-linux)              | ok                            | 5.29 ns/iter   | 5.03 ns   | 5.05 ns   | 10.61 ns  | 74.85 ns  |
| node v16.16.0 (x64-linux)              | .from('hello', 'binary')      | 378.37 ns/iter | 355.51 ns | 386.06 ns | 444.83 ns | 469.65 ns |
| node v16.16.0 (x64-linux)              | .from('hello', 'latin1')      | 378.75 ns/iter | 357.23 ns | 383.29 ns | 429.1 ns  | 538.08 ns |
| node v16.16.0 (x64-linux)              | .from('敨汬', 'ucs2')           | 380.25 ns/iter | 364.5 ns  | 383.96 ns | 462.78 ns | 548.9 ns  |
| node v16.16.0 (x64-linux)              | .from('敨汬', 'utf16le')        | 381.62 ns/iter | 364.24 ns | 384.96 ns | 454.36 ns | 499.61 ns |
| node v16.16.0 (x64-linux)              | .from('hello', 'ascii')       | 386.94 ns/iter | 364.67 ns | 389.38 ns | 500.88 ns | 547.49 ns |
| node v16.16.0 (x64-linux)              | .toString('ascii')            | 415.07 ns/iter | 386.63 ns | 416.45 ns | 589.55 ns | 618.88 ns |
| node v16.16.0 (x64-linux)              | .toString('utf16le')          | 416.95 ns/iter | 390.64 ns | 421.99 ns | 499.31 ns | 668.65 ns |
| node v16.16.0 (x64-linux)              | .toString('binary')           | 420.53 ns/iter | 391.81 ns | 428.28 ns | 526.6 ns  | 547.41 ns |
| node v16.16.0 (x64-linux)              | .from('68656c6c6f', 'hex')    | 420.94 ns/iter | 394.14 ns | 430.39 ns | 493.23 ns | 536.34 ns |
| node v16.16.0 (x64-linux)              | .toString('latin1')           | 425.21 ns/iter | 392.05 ns | 432.51 ns | 562.51 ns | 642.67 ns |
| node v16.16.0 (x64-linux)              | .toString('utf8')             | 425.41 ns/iter | 398.18 ns | 425.61 ns | 522.34 ns | 959.54 ns |
| node v16.16.0 (x64-linux)              | .toString('ucs2')             | 434.24 ns/iter | 387.34 ns | 447.98 ns | 614.05 ns | 614.59 ns |
| node v16.16.0 (x64-linux)              | .toString('hex')              | 434.96 ns/iter | 408.52 ns | 440.14 ns | 531 ns    | 561.22 ns |
| node v16.16.0 (x64-linux)              | .from('aGVsbG8=', 'base64')   | 438.39 ns/iter | 415.41 ns | 443.43 ns | 613.13 ns | 641.79 ns |
| node v16.16.0 (x64-linux)              | .from('aGVsbG8', 'base64url') | 439.36 ns/iter | 408.1 ns  | 448.53 ns | 511.53 ns | 656.68 ns |
| node v16.16.0 (x64-linux)              | .toString('base64url')        | 442.02 ns/iter | 408.93 ns | 448.98 ns | 623.32 ns | 739.76 ns |
| node v16.16.0 (x64-linux)              | .from('hello', 'utf8')        | 463.34 ns/iter | 433.49 ns | 470.23 ns | 538.81 ns | 645.06 ns |
| node v16.16.0 (x64-linux)              | .toString('base64')           | 465.93 ns/iter | 407.11 ns | 455.41 ns | 1.42 µs   | 1.43 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'latin1')      | 573.72 ns/iter | 496.36 ns | 574.75 ns | 1.13 µs   | 1.13 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'ascii')       | 576.65 ns/iter | 487.1 ns  | 610.29 ns | 892.11 ns | 892.11 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'ucs2')           | 589.82 ns/iter | 501.34 ns | 594.36 ns | 1.11 µs   | 1.11 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'binary')      | 671.91 ns/iter | 496.05 ns | 729.49 ns | 1.86 µs   | 1.86 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('敨汬', 'utf16le')        | 672.26 ns/iter | 473.42 ns | 843.82 ns | 1.27 µs   | 1.27 µs   |
| bun 0.1.5 (x64-linux)                  | .from('68656c6c6f', 'hex')    | 723.81 ns/iter | 609.77 ns | 651.82 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf8')             | 780.87 ns/iter | 635.39 ns | 737.12 ns | 1.79 µs   | 1.79 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('latin1')           | 793.23 ns/iter | 674.28 ns | 742.39 ns | 1.48 µs   | 1.48 µs   |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8=', 'base64')   | 810.14 ns/iter | 678.87 ns | 742.21 ns | 1.63 µs   | 1.63 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('binary')           | 810.2 ns/iter  | 690.06 ns | 760.71 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ucs2')             | 810.96 ns/iter | 662.63 ns | 755.66 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('hex')              | 812.3 ns/iter  | 670.16 ns | 777.81 ns | 1.75 µs   | 1.75 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('ascii')            | 825.37 ns/iter | 654.69 ns | 830.1 ns  | 1.61 µs   | 1.61 µs   |
| bun 0.1.5 (x64-linux)                  | .from('aGVsbG8', 'base64url') | 825.96 ns/iter | 690.08 ns | 750.54 ns | 1.71 µs   | 1.71 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('utf16le')          | 848.59 ns/iter | 712.83 ns | 788.09 ns | 1.54 µs   | 1.54 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64url')        | 850.56 ns/iter | 690.35 ns | 807.24 ns | 1.58 µs   | 1.58 µs   |
| bun 0.1.5 (x64-linux)                  | .toString('base64')           | 850.79 ns/iter | 705.07 ns | 783.09 ns | 1.55 µs   | 1.55 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'binary')      | 856.79 ns/iter | 662.52 ns | 824.65 ns | 1.76 µs   | 1.76 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'ucs2')           | 857.79 ns/iter | 660.26 ns | 863.32 ns | 2.01 µs   | 2.01 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'latin1')      | 921.82 ns/iter | 660.4 ns  | 955.52 ns | 2.42 µs   | 2.42 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'ascii')       | 945.18 ns/iter | 721.64 ns | 900.85 ns | 1.8 µs    | 1.8 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('68656c6c6f', 'hex')    | 1.01 µs/iter   | 842.09 ns | 1.09 µs   | 1.56 µs   | 1.56 µs   |
| bun 0.1.5 (x64-linux)                  | .from('hello', 'utf8')        | 1.01 µs/iter   | 706.46 ns | 1.18 µs   | 2.41 µs   | 2.41 µs   |
| bun 0.1.5 (x64-linux)                  | .from('敨汬', 'utf16le')        | 1.03 µs/iter   | 861.8 ns  | 962.07 ns | 2.04 µs   | 2.04 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('hex')              | 1.08 µs/iter   | 956.4 ns  | 1.08 µs   | 2.14 µs   | 2.14 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf16le')          | 1.09 µs/iter   | 957.83 ns | 1.12 µs   | 1.4 µs    | 1.4 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ucs2')             | 1.1 µs/iter    | 928.04 ns | 1.12 µs   | 2.3 µs    | 2.3 µs    |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('utf8')             | 1.14 µs/iter   | 995.13 ns | 1.2 µs    | 1.54 µs   | 1.54 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('ascii')            | 1.15 µs/iter   | 1.03 µs   | 1.17 µs   | 1.98 µs   | 1.98 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64')           | 1.18 µs/iter   | 992.86 ns | 1.22 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('hello', 'utf8')        | 1.19 µs/iter   | 994.51 ns | 1.28 µs   | 1.63 µs   | 1.63 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('binary')           | 1.22 µs/iter   | 976.14 ns | 1.28 µs   | 1.65 µs   | 1.65 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('latin1')           | 1.35 µs/iter   | 978.88 ns | 1.42 µs   | 3.24 µs   | 3.24 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8=', 'base64')   | 1.35 µs/iter   | 1.24 µs   | 1.36 µs   | 1.77 µs   | 1.77 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .from('aGVsbG8', 'base64url') | 1.5 µs/iter    | 1.37 µs   | 1.54 µs   | 1.88 µs   | 1.88 µs   |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | .toString('base64url')        | 1.55 µs/iter   | 1.25 µs   | 1.57 µs   | 2.51 µs   | 2.51 µs   |

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

