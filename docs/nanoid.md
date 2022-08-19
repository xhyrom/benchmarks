- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99      | Min     | Max      |
| ------------------------------------ | ------------- | ------ | -------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 7.11/iter µs  | 2.7 µs | 226.1 µs | 4.8 µs  | 99 µs    |
| JavaScript / bun 0.1.10 (x64-linux)  | 8.55/iter µs  | 2.5 µs | 260.1 µs | 4.3 µs  | 123.1 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 21.51/iter µs | 5.1 µs | 584.8 µs | 10.8 µs | 232.4 µs |

<div id="chart-36"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"nanoid","data":[21507.91,8554.97,7112.99]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min     | Max     |
| -------- | ------------- | ------- | ------- | ------- | ------- |
| Python   | 20.41/iter µs | 19.5 µs | 23.5 µs | 20.6 µs | 21.9 µs |

<div id="chart-37"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"nanoid","data":[20411.88]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

