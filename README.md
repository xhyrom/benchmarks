*Runned on Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz*

## Table Of Contents

- Benchmarks
   - [console](#console)
   - [nanoid](#nanoid)
   - [json](#json)

## Console

### console.log('hello')
| Runtime                                | Benchmark            | Average       | Min     | Max      |
| -------------------------------------- | -------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log('hello') | 2.41 µs/iter  | 1.9 µs  | 9.26 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello') | 4.09 µs/iter  | 3.93 µs | 4.84 µs  |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello') | 10.95 µs/iter | 6.7 µs  | 383.3 µs |


### console.log({ hello: 'object' })
| Runtime                                | Benchmark                        | Average       | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.22 µs/iter  | 2.07 µs | 2.35 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter  | 4.3 µs  | 278.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.15 µs/iter | 11.5 µs | 1.14 ms  |


### everything
| Runtime                                | Benchmark                        | Average       | Min     | Max      |
| -------------------------------------- | -------------------------------- | ------------- | ------- | -------- |
| bun 0.1.5 (x64-linux)                  | console.log({ hello: 'object' }) | 2.22 µs/iter  | 2.07 µs | 2.35 µs  |
| bun 0.1.5 (x64-linux)                  | console.log('hello')             | 2.41 µs/iter  | 1.9 µs  | 9.26 µs  |
| node v18.7.0 (x64-linux)               | console.log('hello')             | 4.09 µs/iter  | 3.93 µs | 4.84 µs  |
| node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 6.61 µs/iter  | 4.3 µs  | 278.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log('hello')             | 10.95 µs/iter | 6.7 µs  | 383.3 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 17.15 µs/iter | 11.5 µs | 1.14 ms  |

## Nanoid

### nanoid(36)
| Runtime                                | Benchmark  | Average        | Min     | Max     |
| -------------------------------------- | ---------- | -------------- | ------- | ------- |
| node v18.7.0 (x64-linux)               | nanoid(36) | 523.34 ns/iter | 439 ns  | 1.87 µs |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | nanoid(36) | 1.4 µs/iter    | 1.28 µs | 1.51 µs |
| bun 0.1.5 (x64-linux)                  | nanoid(36) | 1.87 µs/iter   | 1.82 µs | 2.05 µs |

## Json

### JSON.parse('{"hello": "world"}')
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.18 ns/iter | 153.53 ns | 261.21 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.54 ns/iter | 300.88 ns | 338.45 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 327.27 ns/iter | 319.6 ns  | 509.84 ns |


### JSON.stringify({hello: "world"})
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.05 ns/iter | 224.3 ns  | 262.43 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.35 ns/iter | 235.97 ns | 261.21 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374 ns/iter    | 355.51 ns | 427.54 ns |


### everything
| Runtime                                | Benchmark                        | Average        | Min       | Max       |
| -------------------------------------- | -------------------------------- | -------------- | --------- | --------- |
| bun 0.1.5 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 158.18 ns/iter | 153.53 ns | 261.21 ns |
| node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 232.05 ns/iter | 224.3 ns  | 262.43 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 240.35 ns/iter | 235.97 ns | 261.21 ns |
| node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 307.54 ns/iter | 300.88 ns | 338.45 ns |
| deno 1.24.0 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 327.27 ns/iter | 319.6 ns  | 509.84 ns |
| bun 0.1.5 (x64-linux)                  | JSON.stringify({hello: "world"}) | 374 ns/iter    | 355.51 ns | 427.54 ns |

