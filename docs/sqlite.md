- [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)
- [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
- [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
- [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
- [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 192.22/iter µs | 160.21 µs | 716.02 µs | 174.6 µs  | 574.82 µs |
| JavaScript / node 18.7.0 (x64-linux) | 534.78/iter µs | 480.12 µs | 1.71 ms   | 520.42 µs | 1.38 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.7/iter ms    | 899.83 µs | 4.71 ms   | 2.11 ms   | 2.53 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 111.7/iter µs  | 93.3 µs   | 477.82 µs | 107.1 µs  | 444.31 µs |
| JavaScript / node 18.7.0 (x64-linux) | 361.93/iter µs | 334.21 µs | 1.04 ms   | 361.81 µs | 411.01 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 915.96/iter µs | 841.83 µs | 2.23 ms   | 897.63 µs | 1.53 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 71.65/iter µs  | 56.9 µs   | 451.01 µs | 63.4 µs   | 406.61 µs |
| JavaScript / node 18.7.0 (x64-linux) | 194.57/iter µs | 174.51 µs | 856.93 µs | 193.41 µs | 214.71 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 814.01/iter µs | 735.82 µs | 2.1 ms    | 797.83 µs | 1.68 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 78.56/iter µs  | 47.5 µs   | 401.11 µs | 58.5 µs   | 393.31 µs |
| JavaScript / node 18.7.0 (x64-linux) | 172.55/iter µs | 128.2 µs  | 1.19 ms   | 166.21 µs | 1.04 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 612.74/iter µs | 540.52 µs | 2.16 ms   | 632.22 µs | 1.03 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 34.85/iter ms  | 33.06 ms  | 42.8 ms   | 34.36 ms  | 42.16 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 100.46/iter ms | 94.86 ms  | 121.65 ms | 100 ms    | 121.51 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 227.95/iter ms | 221.55 ms | 341.22 ms | 227.13 ms | 252.33 ms |

