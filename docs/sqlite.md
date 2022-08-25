<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
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
| JavaScript / bun 0.1.10 (x64-linux)  | 94.75/iter µs  | 51.9 µs   | 609.01 µs | 63.5 µs   | 598.31 µs |
| JavaScript / node 18.8.0 (x64-linux) | 186.58/iter µs | 155.1 µs  | 1.39 ms   | 177 µs    | 227.5 µs  |
| JavaScript / deno 1.25.0 (x64-linux) | 644.47/iter µs | 559.41 µs | 2.13 ms   | 660.91 µs | 1.13 ms   |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":644471.15},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":94745.48},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":186575.97}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 119.8/iter µs  | 98.2 µs   | 655.91 µs | 117.8 µs  | 170.5 µs  |
| JavaScript / node 18.8.0 (x64-linux) | 352.65/iter µs | 333.61 µs | 1.12 ms   | 350.31 µs | 400.31 µs |
| JavaScript / deno 1.25.0 (x64-linux) | 908.93/iter µs | 825.21 µs | 2.15 ms   | 883.51 µs | 1.51 ms   |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":908934.48},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":119799.95},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":352653.67}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 77.1/iter µs   | 59 µs     | 604.21 µs | 67.6 µs   | 584.91 µs |
| JavaScript / node 18.8.0 (x64-linux) | 229.13/iter µs | 200.1 µs  | 1.63 ms   | 212.2 µs  | 940.72 µs |
| JavaScript / deno 1.25.0 (x64-linux) | 817.76/iter µs | 731.61 µs | 2.09 ms   | 809.51 µs | 1.69 ms   |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":817759.97},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":77100.22},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":229132.64}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 191.98/iter µs | 163.8 µs  | 694.51 µs | 172.5 µs  | 682.51 µs |
| JavaScript / node 18.8.0 (x64-linux) | 549.41/iter µs | 492.31 µs | 1.69 ms   | 529.11 µs | 1.49 ms   |
| JavaScript / deno 1.25.0 (x64-linux) | 1.72/iter ms   | 864.41 µs | 4.78 ms   | 2.04 ms   | 2.55 ms   |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":1723385.02},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":191983.81},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":549411.66}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 34.86/iter ms  | 33.79 ms  | 39.07 ms  | 34.65 ms  | 38.53 ms  |
| JavaScript / node 18.8.0 (x64-linux) | 110.5/iter ms  | 102.88 ms | 135.64 ms | 110.05 ms | 134.73 ms |
| JavaScript / deno 1.25.0 (x64-linux) | 212.59/iter ms | 206.71 ms | 328.88 ms | 212.59 ms | 231.73 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":212591717.8},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":34856795.24},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":110498832.89}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

