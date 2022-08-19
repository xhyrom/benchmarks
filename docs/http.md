- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max        | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | ---------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 87,582.51/rps | 11,219.64 | 108,206.27 | 90,558.58 | 106,292.42 | 569.62 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 50,143.99/rps | 5,092.54  | 53,704.05  | 52,735.72 | 53,354.55  | 995.73 µs |
| JavaScript / node 18.7.0 (x64-linux) | 48,933.02/rps | 6,049.97  | 51,751.72  | 50,595.32 | 51,535.4   | 1.02 ms   |

<div id="chart-30"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[50143.987744502636,87582.50570221872,48933.01886334722]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,725.21/rps | 652.08 | 7,503.11 | 7,098.17 | 7,361.76 | 7.72 ms |

<div id="chart-31"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[6725.211224675542]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 86,788.33/rps | 3,783.04 | 90,175.89 | 88,689.04 | 89,658.56 | 574.63 µs |

<div id="chart-32"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[86788.32778301703]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

### <a name="http-go">Go</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------ | -------- | --------- | --------- | --------- | --------- |
| Go       | 66,188.3/rps | 3,579.32 | 74,912.46 | 68,221.49 | 72,982.32 | 753.95 µs |

<div id="chart-33"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[66188.29705704605]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 13,863.44/rps | 927.34 | 15,721.17 | 14,404.21 | 15,442.39 | 3.61 ms |

<div id="chart-34"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[13863.436914011783]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max       | Latency |
| -------- | ------------ | ------ | --------- | -------- | --------- | ------- |
| Rust     | 7,934.72/rps | 766.14 | 10,852.19 | 8,382.59 | 10,065.65 | 6.31 ms |

<div id="chart-35"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"http","data":[7934.72329030691]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Rust"],"tooltip":{"enabled":false}}})
</script>

