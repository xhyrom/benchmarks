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
| JavaScript / bun 0.1.10 (x64-linux)  | 82.04/iter µs  | 46.1 µs  | 424.3 µs | 58.2 µs  | 410.4 µs |
| JavaScript / node 18.7.0 (x64-linux) | 152.19/iter µs | 128.8 µs | 282.6 µs | 152.4 µs | 236 µs   |
| JavaScript / deno 1.24.3 (x64-linux) | 615.5/iter µs  | 544.6 µs | 2.14 ms  | 636.2 µs | 1.02 ms  |

<div id="chart-25"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"sqlite","data":[615495.23,82040.73,152190.92]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 117.26/iter µs | 103.3 µs | 439.9 µs | 111.3 µs | 437.2 µs |
| JavaScript / node 18.7.0 (x64-linux) | 365.99/iter µs | 335.2 µs | 1.09 ms  | 366.5 µs | 390.5 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 927.11/iter µs | 853.5 µs | 2.22 ms  | 901.8 µs | 1.54 ms  |

<div id="chart-26"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"sqlite","data":[927114.37,117264.81,365992.44]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 72.7/iter µs   | 65.4 µs  | 135.1 µs | 73.6 µs  | 107.2 µs |
| JavaScript / node 18.7.0 (x64-linux) | 199.23/iter µs | 179.1 µs | 919.1 µs | 197 µs   | 254.5 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 815.08/iter µs | 728.7 µs | 2.13 ms  | 791.8 µs | 2.01 ms  |

<div id="chart-27"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"sqlite","data":[815080.44,72700.84,199232.09]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99     | Min      | Max      |
| ------------------------------------ | -------------- | -------- | ------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 179.59/iter µs | 156.7 µs | 528 µs  | 177.2 µs | 508.9 µs |
| JavaScript / node 18.7.0 (x64-linux) | 527.88/iter µs | 463.1 µs | 1.64 ms | 507.5 µs | 1.38 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.74/iter ms   | 887.8 µs | 4.76 ms | 2.11 ms  | 3.67 ms  |

<div id="chart-28"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"sqlite","data":[1744331.76,179587.59,527876.58]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 32.99/iter ms  | 32.21 ms  | 36.84 ms  | 32.87 ms  | 36.09 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 100.49/iter ms | 94.94 ms  | 125.19 ms | 100.01 ms | 119.68 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 226.23/iter ms | 220.23 ms | 335.76 ms | 226.44 ms | 244.21 ms |

<div id="chart-29"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"sqlite","data":[226225059.15,32990005.13,100491977.99]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

