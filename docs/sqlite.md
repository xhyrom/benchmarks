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

| Language                             | Average        | p75      | p99      | Min       | Max      |
| ------------------------------------ | -------------- | -------- | -------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 82.75/iter µs  | 47.4 µs  | 476 µs   | 65.9 µs   | 440.5 µs |
| JavaScript / node 18.7.0 (x64-linux) | 154/iter µs    | 131.4 µs | 282.9 µs | 157.1 µs  | 208.2 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 616.12/iter µs | 538.3 µs | 2.21 ms  | 631.79 µs | 1.04 ms  |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":616116.85},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":82750.34},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":153996.87}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99      | Min       | Max      |
| ------------------------------------ | -------------- | --------- | -------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 115.05/iter µs | 94.3 µs   | 478.6 µs | 110.4 µs  | 453.9 µs |
| JavaScript / node 18.7.0 (x64-linux) | 361.93/iter µs | 318.6 µs  | 1.1 ms   | 363 µs    | 403.2 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 927.78/iter µs | 851.19 µs | 2.24 ms  | 905.59 µs | 1.56 ms  |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":927782.5},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":115049.28},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":361930.56}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------ | -------------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 69.38/iter µs  | 57.8 µs   | 136.2 µs  | 73.1 µs   | 99.5 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 199.8/iter µs  | 180.3 µs  | 863.09 µs | 197.9 µs  | 230.7 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 806.09/iter µs | 725.49 µs | 2.1 ms    | 787.29 µs | 1.69 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":806085.33},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":69378.46},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":199797.66}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99      | Min      | Max      |
| ------------------------------------ | -------------- | --------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 190.39/iter µs | 169.7 µs  | 539.5 µs | 180.8 µs | 509.7 µs |
| JavaScript / node 18.7.0 (x64-linux) | 592.66/iter µs | 465.9 µs  | 9.2 ms   | 501.5 µs | 1.35 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 1.69/iter ms   | 890.39 µs | 4.76 ms  | 2.1 ms   | 2.54 ms  |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":1689076.96},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":190387.7},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":592661.1}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 33.23/iter ms  | 32.39 ms  | 36.93 ms  | 33.11 ms  | 36.7 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 101.03/iter ms | 95.31 ms  | 127.86 ms | 100.54 ms | 122.07 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 231.76/iter ms | 226.35 ms | 337.46 ms | 231.96 ms | 247.47 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"sqlite","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":231760501.25},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":33234544.86},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":101028893.65}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

