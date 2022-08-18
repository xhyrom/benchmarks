- [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
- [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
- [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
- [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)
- [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 79.53/iter µs  | 47.2 µs  | 400.1 µs | 59.7 µs  | 390.8 µs |
| JavaScript / node 18.7.0 (x64-linux) | 174.07/iter µs | 134.2 µs | 1.26 ms  | 154.1 µs | 1.07 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 611.38/iter µs | 540.9 µs | 2.16 ms  | 624.3 µs | 1.03 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 111.98/iter µs | 91.8 µs  | 459.2 µs | 102.1 µs | 450.7 µs |
| JavaScript / node 18.7.0 (x64-linux) | 344.97/iter µs | 318.1 µs | 1.07 ms  | 345.4 µs | 378.2 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 926.58/iter µs | 848.4 µs | 2.24 ms  | 901.5 µs | 1.57 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max      |
| ------------------------------------ | -------------- | -------- | --------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 70.7/iter µs   | 56 µs    | 420.6 µs  | 63.8 µs  | 408.7 µs |
| JavaScript / node 18.7.0 (x64-linux) | 198.85/iter µs | 175.5 µs | 901.39 µs | 195.4 µs | 229.6 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 806.65/iter µs | 721.1 µs | 2.14 ms   | 787.6 µs | 1.68 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 181.64/iter µs | 159.9 µs | 549.9 µs | 174.1 µs | 520.4 µs |
| JavaScript / node 18.7.0 (x64-linux) | 581.76/iter µs | 488 µs   | 1.6 ms   | 580.7 µs | 1.25 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.76/iter ms   | 895.2 µs | 4.89 ms  | 2.2 ms   | 2.66 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 34.83/iter ms  | 33.28 ms  | 42.9 ms   | 34.09 ms  | 42.1 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 102.03/iter ms | 96.42 ms  | 123.02 ms | 101.73 ms | 120.62 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 229.93/iter ms | 224.36 ms | 336.96 ms | 229.44 ms | 250.74 ms |

