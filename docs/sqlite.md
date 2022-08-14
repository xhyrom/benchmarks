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

| Language                             | Average        | p75       | p99      | Min      | Max      |
| ------------------------------------ | -------------- | --------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 190.97/iter µs | 160.3 µs  | 539.9 µs | 178.6 µs | 539.3 µs |
| JavaScript / node 18.7.0 (x64-linux) | 521.76/iter µs | 479.2 µs  | 1.26 ms  | 521.8 µs | 1.19 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.69/iter ms   | 885.21 µs | 4.78 ms  | 2.11 ms  | 2.56 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 110.62/iter µs | 94.3 µs   | 465.61 µs | 105.9 µs  | 428.5 µs |
| JavaScript / node 18.7.0 (x64-linux) | 355.71/iter µs | 336.7 µs  | 1.1 ms    | 354.8 µs  | 380.7 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 927.71/iter µs | 848.71 µs | 2.32 ms   | 904.91 µs | 1.56 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 72.65/iter µs  | 56.8 µs   | 685.71 µs | 63 µs     | 407.4 µs |
| JavaScript / node 18.7.0 (x64-linux) | 210.02/iter µs | 188.8 µs  | 1 ms      | 206 µs    | 253.7 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 814.5/iter µs  | 732.01 µs | 2.14 ms   | 806.41 µs | 1.69 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99      | Min       | Max      |
| ------------------------------------ | -------------- | --------- | -------- | --------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 83.36/iter µs  | 47 µs     | 415.3 µs | 58.5 µs   | 414.1 µs |
| JavaScript / node 18.7.0 (x64-linux) | 172.77/iter µs | 129.5 µs  | 1.19 ms  | 158.6 µs  | 1.11 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 613.54/iter µs | 537.71 µs | 2.16 ms  | 634.31 µs | 1.03 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 34.44/iter ms  | 32.66 ms  | 41.44 ms  | 33.78 ms  | 41.23 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 100.03/iter ms | 94.66 ms  | 122.72 ms | 99.73 ms  | 119.77 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 226.12/iter ms | 220.66 ms | 341.32 ms | 225.99 ms | 241.92 ms |

