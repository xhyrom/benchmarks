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
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[10981442.23]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average        | p75      | p99    | Min     | Max       |
| -------- | -------------- | -------- | ------ | ------- | --------- |
| Crystal  | 837.14/iter µs | 267.6 µs | 2.2 ms | 1.59 ms | 854.06 µs |

<div id="chart-34"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[837143.4400000003]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.26/iter ms  | 8.37 ms  | 12.23 ms | 8.79 ms  | 8.77 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.81/iter ms | 13.25 ms | 20.92 ms | 14.69 ms | 14.09 ms |
| JavaScript / node 18.7.0 (x64-linux) | 44.01/iter ms | 36.8 ms  | 55.41 ms | 41.77 ms | 53.2 ms  |

<div id="chart-35"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[9258527.600000001,44014508.93000002,14808352.839999996]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)","JavaScript / deno 1.24.2 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 43.07/iter ms | 39.77 ms | 57.29 ms | 57.29 ms | 41.45 ms |

<div id="chart-36"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[43066836.49000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 613.93/iter µs | 370.37 µs | 1.64 ms | 486.89 µs | 528.05 µs |

<div id="chart-37"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[613929.5700000001]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

