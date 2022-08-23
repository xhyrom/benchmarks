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
| JavaScript / bun 0.1.10 (x64-linux)  | 83.86/iter µs  | 45.5 µs   | 581.21 µs | 58.3 µs   | 571.01 µs |
| JavaScript / node 18.7.0 (x64-linux) | 167.8/iter µs  | 145.4 µs  | 312.5 µs  | 171.4 µs  | 235 µs    |
| JavaScript / deno 1.24.3 (x64-linux) | 588.11/iter µs | 521.41 µs | 2.05 ms   | 602.11 µs | 972.22 µs |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":588114.7},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":83857.37},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":167802.24}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max     |
| ------------------------------------ | -------------- | --------- | --------- | --------- | ------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 121.57/iter µs | 107.6 µs  | 628.91 µs | 117.8 µs  | 172 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 366.76/iter µs | 303.7 µs  | 1.97 ms   | 327.1 µs  | 1.53 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 932.62/iter µs | 854.11 µs | 2.19 ms   | 913.21 µs | 1.58 ms |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":932617.97},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":121572.54},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":366756.11}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99      | Min       | Max      |
| ------------------------------------ | -------------- | --------- | -------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 60.63/iter µs  | 52.6 µs   | 127.7 µs | 60.9 µs   | 92.3 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 203.78/iter µs | 169.4 µs  | 1.38 ms  | 201.6 µs  | 226.4 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 817.78/iter µs | 741.62 µs | 2.09 ms  | 807.82 µs | 1.72 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":817782.66},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":60625.8},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":203777.72}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 162.21/iter µs | 144 µs    | 675.51 µs | 152.7 µs  | 633.41 µs |
| JavaScript / node 18.7.0 (x64-linux) | 458.93/iter µs | 418.81 µs | 1.32 ms   | 455.11 µs | 1.22 ms   |
| JavaScript / deno 1.24.3 (x64-linux) | 1.55/iter ms   | 797.21 µs | 4.25 ms   | 1.87 ms   | 2.27 ms   |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1545211.55},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":162210},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":458929.8}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 35.2/iter ms   | 33.85 ms  | 39.97 ms  | 35.44 ms  | 39.59 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 92.42/iter ms  | 82.85 ms  | 112.55 ms | 99.92 ms  | 111.56 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 208.25/iter ms | 186.52 ms | 319.99 ms | 215.32 ms | 230.65 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":208246723.63},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":35202752.52},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":92422606.75}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

