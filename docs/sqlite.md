<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
- [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)
- [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
- [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
- [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 63.84/iter µs  | 41.48 µs  | 263.88 µs | 53.68 µs  | 216.98 µs |
| JavaScript / node 18.7.0 (x64-linux) | 434.2/iter µs  | 128.48 µs | 22.73 ms  | 217.65 µs | 982.85 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 547.34/iter µs | 247.06 µs | 3.95 ms   | 557.92 µs | 2.67 ms   |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":63839.66},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":434200.76},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":547335.79}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99       | Min       | Max       |
| ------------------------------------ | ------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 28.39/iter ms | 25.59 ms  | 38.48 ms  | 28.54 ms  | 38.26 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 94.03/iter ms | 86.36 ms  | 137.03 ms | 93.5 ms   | 131.4 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 189.9/iter ms | 170.79 ms | 265.23 ms | 194.42 ms | 258.25 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":28385006.98},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":94030386.73},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":189903571.37}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 69.15/iter µs  | 43.88 µs  | 236.72 µs | 81.56 µs  | 144.43 µs |
| JavaScript / node 18.7.0 (x64-linux) | 184.48/iter µs | 152.27 µs | 903.93 µs | 173.49 µs | 364.68 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 625.25/iter µs | 289.39 µs | 4.78 ms   | 658.31 µs | 1.98 ms   |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":69154.28},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":184479.71},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":625245.45}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 118.94/iter µs | 74.18 µs  | 371.05 µs | 138.37 µs | 332.58 µs |
| JavaScript / node 18.7.0 (x64-linux) | 391.43/iter µs | 293.04 µs | 1.31 ms   | 421.36 µs | 1.23 ms   |
| JavaScript / deno 1.24.2 (x64-linux) | 590.24/iter µs | 316.27 µs | 3.58 ms   | 605.23 µs | 1.82 ms   |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":118941.91},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":391432.46},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":590237.49}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 140.32/iter µs | 127.83 µs | 325.01 µs | 138.15 µs | 281.22 µs |
| JavaScript / node 18.7.0 (x64-linux) | 704.41/iter µs | 389.89 µs | 17.54 ms  | 630.62 µs | 1.37 ms   |
| JavaScript / deno 1.24.2 (x64-linux) | 1.19/iter ms   | 709.68 µs | 7.13 ms   | 1.39 ms   | 2.66 ms   |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":140320.16},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":704411.58},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":1189436.91}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

