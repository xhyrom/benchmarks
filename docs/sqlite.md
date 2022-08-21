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

| Language                             | Average        | p75      | p99      | Min       | Max       |
| ------------------------------------ | -------------- | -------- | -------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 79.24/iter µs  | 46.9 µs  | 426.7 µs | 58.8 µs   | 406.9 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 165.47/iter µs | 135.2 µs | 1.04 ms  | 163.79 µs | 285.09 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 618.63/iter µs | 543.7 µs | 2.13 ms  | 632.4 µs  | 1.02 ms   |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":618625},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":79242.33},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":165469.72}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 106.71/iter µs | 92.9 µs  | 436.7 µs | 100.2 µs | 401.5 µs |
| JavaScript / node 18.7.0 (x64-linux) | 370.22/iter µs | 335.5 µs | 1.36 ms  | 358.5 µs | 1.03 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 921.16/iter µs | 846.4 µs | 2.24 ms  | 898 µs   | 1.55 ms  |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":921164.26},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":106714.37},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":370216.76}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99      | Min       | Max      |
| ------------------------------------ | -------------- | --------- | -------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 66.74/iter µs  | 55.1 µs   | 133.4 µs | 71.1 µs   | 100.1 µs |
| JavaScript / node 18.7.0 (x64-linux) | 197.75/iter µs | 178.8 µs  | 915.9 µs | 194.2 µs  | 219 µs   |
| JavaScript / deno 1.24.3 (x64-linux) | 798.57/iter µs | 720.89 µs | 2.1 ms   | 777.19 µs | 1.62 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":798571.1},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":66740.26},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":197746.76}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------ | -------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 189.3/iter µs  | 171.2 µs | 548.9 µs | 179.8 µs | 510.4 µs |
| JavaScript / node 18.7.0 (x64-linux) | 534.64/iter µs | 479.9 µs | 1.67 ms  | 516.8 µs | 1.26 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.75/iter ms   | 899.3 µs | 4.81 ms  | 2.18 ms  | 2.63 ms  |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1751712.39},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":189296.58},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":534641.05}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 33.24/iter ms  | 32.29 ms  | 37.86 ms  | 33.1 ms   | 37.56 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 99.86/iter ms  | 94.07 ms  | 124.8 ms  | 99.77 ms  | 119.53 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 228.53/iter ms | 221.48 ms | 332.56 ms | 228.22 ms | 252.39 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":228526510.84},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":33239315.27},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":99864480.52}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

