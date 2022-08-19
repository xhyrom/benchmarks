- [JavaScript](#console-javascript)
- [Python](#console-python)
- [Crystal](#console-crystal)
- [Go](#console-go)
- [Ruby](#console-ruby)

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 12.44/iter ms | 11.42 ms | 14.24 ms | 12.44 ms | 11.96 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.87/iter ms | 24.97 ms | 28.2 ms  | 25.82 ms | 25.26 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.82/iter ms | 49.47 ms | 64.55 ms | 50.82 ms | 50.78 ms |

<div id="chart-20"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-20'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[25866273.890000008,12444578.389999993,50819324.63999999]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.56/iter ms | 18.07 ms | 19.56 ms | 19.32 ms | 18.22 ms |

<div id="chart-21"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-21'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[18556231.08]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.08/iter ms | 1.94 ms | 2.54 ms | 2.39 ms | 2.07 ms |

<div id="chart-22"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-22'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[2075934.100000001]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max     |
| -------- | ------------ | --------- | ------- | --------- | ------- |
| Go       | 1.01/iter ms | 915.19 µs | 1.41 ms | 974.59 µs | 1.41 ms |

<div id="chart-23"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-23'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[1014802.5900000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average      | p75     | p99      | Min      | Max      |
| -------- | ------------ | ------- | -------- | -------- | -------- |
| Ruby     | 54.9/iter ms | 53.7 ms | 56.55 ms | 56.04 ms | 54.23 ms |

<div id="chart-24"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-24'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"console","data":[54901558.239999995]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

