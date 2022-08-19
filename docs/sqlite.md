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
| JavaScript / bun 0.1.10 (x64-linux)  | 108.09/iter µs | 56.7 µs   | 771.76 µs | 81.01 µs  | 634.85 µs |
| JavaScript / node 18.7.0 (x64-linux) | 220.47/iter µs | 180.51 µs | 1.99 ms   | 208.92 µs | 351.13 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 810.21/iter µs | 647.45 µs | 2.74 ms   | 820.86 µs | 1.73 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 138.85/iter µs | 107.81 µs | 719.46 µs | 125.51 µs | 713.55 µs |
| JavaScript / node 18.7.0 (x64-linux) | 420.08/iter µs | 341.43 µs | 1.31 ms   | 423.83 µs | 483.14 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 1.11/iter ms   | 951.07 µs | 2.6 ms    | 1.07 ms   | 1.85 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 92.43/iter µs  | 64.81 µs  | 770.86 µs | 83.81 µs  | 624.05 µs |
| JavaScript / node 18.7.0 (x64-linux) | 242.57/iter µs | 208.12 µs | 1.39 ms   | 236.92 µs | 266.62 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 1.04/iter ms   | 889.77 µs | 2.6 ms    | 1.09 ms   | 2.26 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 252.37/iter µs | 179.51 µs | 826.76 µs | 237.72 µs | 811.36 µs |
| JavaScript / node 18.7.0 (x64-linux) | 623.52/iter µs | 578.54 µs | 1.58 ms   | 623.35 µs | 1.54 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 2.09/iter ms   | 1.1 ms    | 5.58 ms   | 2.54 ms   | 3.08 ms   |

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 42.68/iter ms  | 40.02 ms  | 51.95 ms  | 43.57 ms  | 49.55 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 119.76/iter ms | 111.33 ms | 157.72 ms | 120.23 ms | 156.57 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 250.26/iter ms | 221.66 ms | 394.82 ms | 254.29 ms | 291.75 ms |

