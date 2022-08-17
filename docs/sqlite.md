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

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 116.34/iter µs | 53.8 µs   | 688.85 µs | 77.71 µs  | 681.35 µs |
| JavaScript / node 18.7.0 (x64-linux) | 170.99/iter µs | 126.72 µs | 359.66 µs | 183.63 µs | 254.84 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 711.9/iter µs  | 505.74 µs | 2.53 ms   | 733.56 µs | 1.12 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------ | -------------- | --------- | ------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 123.39/iter µs | 78.21 µs  | 1.14 ms | 114.51 µs | 642.76 µs |
| JavaScript / node 18.7.0 (x64-linux) | 381.76/iter µs | 282.31 µs | 1.29 ms | 402.12 µs | 1.29 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.07/iter ms   | 844.68 µs | 2.49 ms | 1.07 ms   | 1.78 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 83.09/iter µs  | 61.61 µs  | 678.66 µs | 77.21 µs  | 237.32 µs |
| JavaScript / node 18.7.0 (x64-linux) | 230.06/iter µs | 156.91 µs | 1.07 ms   | 219.52 µs | 979.09 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 859.52/iter µs | 658.76 µs | 2.47 ms   | 922.48 µs | 1.59 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 220.99/iter µs | 181.81 µs | 825.66 µs | 211.02 µs | 786.56 µs |
| JavaScript / node 18.7.0 (x64-linux) | 564.52/iter µs | 409.63 µs | 1.66 ms   | 590.25 µs | 1.52 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 2.05/iter ms   | 998.67 µs | 5.78 ms   | 2.54 ms   | 3.17 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 45.52/iter ms  | 35.3 ms   | 76.09 ms  | 46.85 ms  | 74.22 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 109.22/iter ms | 96.45 ms  | 163.01 ms | 111.8 ms  | 144.01 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 243.25/iter ms | 223.95 ms | 407.23 ms | 248.45 ms | 295.95 ms |

