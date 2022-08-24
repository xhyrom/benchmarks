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
| JavaScript / bun 0.1.10 (x64-linux)  | 102.2/iter µs  | 51.9 µs   | 605.91 µs | 68.7 µs   | 605.71 µs |
| JavaScript / node 18.7.0 (x64-linux) | 171.45/iter µs | 150.6 µs  | 307.6 µs  | 175.5 µs  | 232.3 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 645.75/iter µs | 576.51 µs | 2.2 ms    | 674.51 µs | 1.05 ms   |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":645752.41},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":102195.13},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":171445.72}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 113.73/iter µs | 96.1 µs   | 633.51 µs | 103.4 µs  | 607.51 µs |
| JavaScript / node 18.7.0 (x64-linux) | 386.18/iter µs | 344.1 µs  | 1.64 ms   | 362 µs    | 1.34 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 929.56/iter µs | 855.61 µs | 2.2 ms    | 898.41 µs | 1.57 ms   |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":929558.56},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":113733.25},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":386184.3}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 79.51/iter µs  | 61.2 µs   | 318.5 µs  | 79.5 µs   | 140.7 µs |
| JavaScript / node 18.7.0 (x64-linux) | 202.52/iter µs | 186.6 µs  | 975.71 µs | 198.8 µs  | 258.3 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 836.2/iter µs  | 759.51 µs | 2.09 ms   | 809.71 µs | 1.73 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":836196.02},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":79514.83},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":202518.22}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 182.37/iter µs | 162.3 µs  | 706.31 µs | 171.3 µs  | 684.01 µs |
| JavaScript / node 18.7.0 (x64-linux) | 517.13/iter µs | 474.11 µs | 1.54 ms   | 506.61 µs | 1.29 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.76/iter ms   | 898.51 µs | 4.86 ms   | 2.18 ms   | 2.57 ms   |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1760111.92},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":182365.83},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":517127.51}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 34.95/iter ms  | 34.03 ms  | 38.7 ms   | 34.68 ms  | 38.47 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 110.04/iter ms | 102.35 ms | 137.83 ms | 109.53 ms | 137.37 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 215.43/iter ms | 209.48 ms | 332.81 ms | 215.61 ms | 233.98 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":215432304.64},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":34948129.55},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":110037765.09}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

