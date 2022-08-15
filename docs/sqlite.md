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

| Language                             | Average        | p75      | p99     | Min      | Max      |
| ------------------------------------ | -------------- | -------- | ------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 240.65/iter µs | 190.2 µs | 816 µs  | 214.9 µs | 806.1 µs |
| JavaScript / node 18.7.0 (x64-linux) | 601.42/iter µs | 490.1 µs | 1.5 ms  | 603.9 µs | 1.5 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 2.02/iter ms   | 1.07 ms  | 5.62 ms | 2.54 ms  | 3.01 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max     |
| ------------------------------------ | -------------- | -------- | -------- | -------- | ------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 153.02/iter µs | 112.2 µs | 693.5 µs | 138.3 µs | 683 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 438.88/iter µs | 374.2 µs | 1.42 ms  | 425.9 µs | 1.3 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.12/iter ms   | 1.02 ms  | 2.68 ms  | 1.09 ms  | 1.92 ms |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99     | Min      | Max      |
| ------------------------------------ | -------------- | -------- | ------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 95.96/iter µs  | 63.7 µs  | 1.27 ms | 78.9 µs  | 649.1 µs |
| JavaScript / node 18.7.0 (x64-linux) | 255.82/iter µs | 206.4 µs | 1.69 ms | 236.2 µs | 1.49 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 992.77/iter µs | 839.7 µs | 2.43 ms | 970.5 µs | 2.07 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99       | Min      | Max      |
| ------------------------------------ | -------------- | -------- | --------- | -------- | -------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 125.98/iter µs | 58.9 µs  | 782.71 µs | 79.9 µs  | 630.5 µs |
| JavaScript / node 18.7.0 (x64-linux) | 206.22/iter µs | 174.4 µs | 376.4 µs  | 213.2 µs | 281.3 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 799.48/iter µs | 703.2 µs | 2.61 ms   | 806.1 µs | 1.44 ms  |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.8 (x64-linux)   | 41.57/iter ms  | 35.44 ms  | 55.45 ms  | 41.12 ms  | 51.52 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 121.52/iter ms | 112.71 ms | 152.29 ms | 122.2 ms  | 151.26 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 260.67/iter ms | 239.65 ms | 403.02 ms | 262.77 ms | 284.92 ms |

