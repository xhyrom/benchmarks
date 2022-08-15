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
| JavaScript / bun 0.1.8 (x64-linux)   | 187.1/iter µs  | 159.2 µs  | 698.21 µs | 175.2 µs  | 686.61 µs |
| JavaScript / node 18.7.0 (x64-linux) | 513.97/iter µs | 480.01 µs | 1.3 ms    | 519.61 µs | 1.21 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.66/iter ms   | 914.61 µs | 4.77 ms   | 2.07 ms   | 2.56 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------ | -------------- | --------- | ------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 126.42/iter µs | 93.2 µs   | 1.53 ms | 104.2 µs  | 600.01 µs |
| JavaScript / node 18.7.0 (x64-linux) | 364.26/iter µs | 334 µs    | 1.54 ms | 352.11 µs | 1.09 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 943.44/iter µs | 869.41 µs | 2.21 ms | 914.11 µs | 1.57 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 65.42/iter µs  | 56.4 µs   | 209.5 µs  | 64.7 µs   | 136.2 µs |
| JavaScript / node 18.7.0 (x64-linux) | 200.87/iter µs | 185.1 µs  | 921.11 µs | 197.8 µs  | 219.5 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 812.26/iter µs | 735.31 µs | 2.07 ms   | 795.21 µs | 1.68 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 94.14/iter µs  | 48.8 µs   | 579.91 µs | 64.6 µs   | 569.21 µs |
| JavaScript / node 18.7.0 (x64-linux) | 165.29/iter µs | 143.1 µs  | 303.7 µs  | 166.4 µs  | 221.2 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 650.39/iter µs | 576.11 µs | 2.19 ms   | 673.11 µs | 1.04 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 35.3/iter ms   | 33.74 ms  | 44.18 ms  | 34.59 ms  | 43.22 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 103.96/iter ms | 95.88 ms  | 130.27 ms | 103.87 ms | 128.67 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 221.88/iter ms | 213.61 ms | 333.5 ms  | 222.36 ms | 246.54 ms |

