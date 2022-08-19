<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [Python](#console-python)
- [Crystal](#console-crystal)
- [JavaScript](#console-javascript)
- [Ruby](#console-ruby)
- [Go](#console-go)

### <a name="console-python">Python</a>

| Language | Average       | p75     | p99      | Min    | Max      |
| -------- | ------------- | ------- | -------- | ------ | -------- |
| Python   | 10.98/iter ms | 8.99 ms | 15.81 ms | 9.4 ms | 10.06 ms |

<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"stacked":true,"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"plotOptions":{"bar":{"columnWidth":"45%","distributed":true}},"series":[{"name":"console","data":[{"x":"Python","y":10981442.23}]}],"tooltip":{"label":{"show":true}},"legend":{"show":false},"stroke":{"width":1,"curve":"straight"},"xaxis":{"type":"category"}}).render()
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average        | p75      | p99    | Min     | Max       |
| -------- | -------------- | -------- | ------ | ------- | --------- |
| Crystal  | 837.14/iter µs | 267.6 µs | 2.2 ms | 1.59 ms | 854.06 µs |

<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"stacked":true,"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"plotOptions":{"bar":{"columnWidth":"45%","distributed":true}},"series":[{"name":"console","data":[{"x":"Crystal","y":837143.4400000003}]}],"tooltip":{"label":{"show":true}},"legend":{"show":false},"stroke":{"width":1,"curve":"straight"},"xaxis":{"type":"category"}}).render()
</script>

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.26/iter ms  | 8.37 ms  | 12.23 ms | 8.79 ms  | 8.77 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.81/iter ms | 13.25 ms | 20.92 ms | 14.69 ms | 14.09 ms |
| JavaScript / node 18.7.0 (x64-linux) | 44.01/iter ms | 36.8 ms  | 55.41 ms | 41.77 ms | 53.2 ms  |

<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"stacked":true,"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"plotOptions":{"bar":{"columnWidth":"45%","distributed":true}},"series":[{"name":"console","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":9258527.600000001},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":44014508.93000002},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":14808352.839999996}]}],"tooltip":{"label":{"show":true}},"legend":{"show":false},"stroke":{"width":1,"curve":"straight"},"xaxis":{"type":"category"}}).render()
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.07/iter ms | 39.77 ms | 57.29 ms | 57.29 ms | 41.45 ms |

<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"stacked":true,"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"plotOptions":{"bar":{"columnWidth":"45%","distributed":true}},"series":[{"name":"console","data":[{"x":"Ruby","y":43066836.49000002}]}],"tooltip":{"label":{"show":true}},"legend":{"show":false},"stroke":{"width":1,"curve":"straight"},"xaxis":{"type":"category"}}).render()
</script>

### <a name="console-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 613.93/iter µs | 370.37 µs | 1.64 ms | 486.89 µs | 528.05 µs |

<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"stacked":true,"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"plotOptions":{"bar":{"columnWidth":"45%","distributed":true}},"series":[{"name":"console","data":[{"x":"Go","y":613929.5700000001}]}],"tooltip":{"label":{"show":true}},"legend":{"show":false},"stroke":{"width":1,"curve":"straight"},"xaxis":{"type":"category"}}).render()
</script>

