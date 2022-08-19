- [Python](#nanoid-python)
- [JavaScript](#nanoid-javascript)

### <a name="nanoid-python">Python</a>

| Language | Average       | p75   | p99       | Min      | Max     |
| -------- | ------------- | ----- | --------- | -------- | ------- |
| Python   | 21.09/iter µs | 14 µs | 289.58 µs | 18.97 µs | 58.4 µs |

<div id="chart-15"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-15'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"nanoid","data":[21095]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75     | p99       | Min      | Max       |
| ------------------------------------ | ------------- | ------- | --------- | -------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 6.84/iter µs  | 1.96 µs | 205.66 µs | 4.74 µs  | 38.75 µs  |
| JavaScript / node 18.7.0 (x64-linux) | 11.29/iter µs | 2.18 µs | 611.16 µs | 5.45 µs  | 94.12 µs  |
| JavaScript / deno 1.24.2 (x64-linux) | 37.69/iter µs | 6.25 µs | 775.66 µs | 36.78 µs | 276.73 µs |

<div id="chart-16"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-16'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"nanoid","data":[6844.96,11288.98,37691.57]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)","JavaScript / deno 1.24.2 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

