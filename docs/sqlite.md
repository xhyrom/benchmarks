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
| JavaScript / bun 0.1.10 (x64-linux)  | 132.61/iter µs | 61.7 µs   | 705.31 µs | 95.5 µs   | 674.41 µs |
| JavaScript / node 18.7.0 (x64-linux) | 197.87/iter µs | 138.5 µs  | 365.4 µs  | 217.2 µs  | 356.31 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 899.36/iter µs | 643.81 µs | 2.74 ms   | 915.91 µs | 2.25 ms   |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":899355.41},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":132606.05},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":197871.61}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 146.54/iter µs | 104.3 µs  | 733.91 µs | 147.1 µs  | 719.61 µs |
| JavaScript / node 18.7.0 (x64-linux) | 449.15/iter µs | 327.4 µs  | 1.74 ms   | 448.41 µs | 1.63 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.23/iter ms   | 879.61 µs | 2.76 ms   | 1.27 ms   | 2.43 ms   |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1228442.36},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":146541.02},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":449148.97}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min     | Max       |
| ------------------------------------ | -------------- | --------- | --------- | ------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 93.03/iter µs  | 63.5 µs   | 644.31 µs | 99.7 µs | 169.4 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 225.41/iter µs | 162.1 µs  | 1.14 ms   | 233 µs  | 396.41 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 1.08/iter ms   | 769.11 µs | 2.97 ms   | 1.11 ms | 2.85 ms   |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1079080.43},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":93028.25},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":225410.08}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------ | -------------- | --------- | ------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 247.36/iter µs | 179.9 µs  | 1.32 ms | 242.4 µs  | 972.01 µs |
| JavaScript / node 18.7.0 (x64-linux) | 652/iter µs    | 489.21 µs | 2.92 ms | 671.21 µs | 1.53 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 2.01/iter ms   | 954.51 µs | 5.58 ms | 2.45 ms   | 3.9 ms    |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":2014566.6},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":247358.95},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":651998.8}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 42.88/iter ms  | 37.1 ms   | 55.76 ms  | 44.69 ms  | 53.67 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 113.47/iter ms | 102.54 ms | 141.14 ms | 115.97 ms | 137.3 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 251.53/iter ms | 227.22 ms | 395.92 ms | 257.89 ms | 289.91 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":251531066.41},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":42878336.53},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":113473170.42}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

