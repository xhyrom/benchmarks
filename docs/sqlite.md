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
| JavaScript / bun 0.1.10 (x64-linux)  | 100.21/iter µs | 52.8 µs   | 609.31 µs | 67.5 µs   | 587.51 µs |
| JavaScript / node 18.7.0 (x64-linux) | 175.69/iter µs | 155.2 µs  | 305.7 µs  | 188.4 µs  | 245.6 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 715.69/iter µs | 637.51 µs | 2.32 ms   | 747.61 µs | 1.13 ms   |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":715690.73},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":100205.69},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":175688.85}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 117.43/iter µs | 99.1 µs   | 648.41 µs | 106.6 µs  | 619.11 µs |
| JavaScript / node 18.7.0 (x64-linux) | 379.99/iter µs | 342.2 µs  | 1.33 ms   | 358.01 µs | 1.3 ms    |
| JavaScript / deno 1.24.3 (x64-linux) | 947.73/iter µs | 859.12 µs | 2.27 ms   | 927.01 µs | 1.6 ms    |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":947729.58},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":117429.86},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":379986.25}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 80.11/iter µs  | 59.9 µs   | 579.91 µs | 81.6 µs   | 139.7 µs |
| JavaScript / node 18.7.0 (x64-linux) | 227.91/iter µs | 186.1 µs  | 1.54 ms   | 199.7 µs  | 1.28 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 847.94/iter µs | 763.91 µs | 2.2 ms    | 828.41 µs | 1.81 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":847937.94},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":80108.33},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":227913.73}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 199.54/iter µs | 171.2 µs  | 729.91 µs | 179.5 µs  | 728.81 µs |
| JavaScript / node 18.7.0 (x64-linux) | 527.97/iter µs | 479.81 µs | 1.54 ms   | 516.81 µs | 1.46 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.83/iter ms   | 926.62 µs | 5.06 ms   | 2.24 ms   | 2.7 ms    |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1832940.9},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":199538.31},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":527973.66}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 35.14/iter ms  | 34.14 ms  | 39.49 ms  | 34.93 ms  | 38.84 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 100.05/iter ms | 92.81 ms  | 127.13 ms | 99.67 ms  | 124.23 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 228.51/iter ms | 221.25 ms | 351.35 ms | 228.63 ms | 247.91 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":228510994.15},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":35139615.22},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":100049739.67}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

