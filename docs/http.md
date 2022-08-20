<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99       | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | -------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 90,959.67/rps | 4,100.44 | 99,829.29 | 92,379.39 | 97,818.23 | 547.7 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 50,319.29/rps | 5,213.76 | 54,329.58 | 53,041.53 | 53,662.53 | 992.23 µs |
| JavaScript / node 18.7.0 (x64-linux) | 48,792.99/rps | 5,789.72 | 51,410.13 | 50,276.24 | 51,117.48 | 1.02 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":50319.29043582022},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":90959.66979447693},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":48792.98713817067}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 6,726.16/rps | 629.87 | 7,498.97 | 7,084.19 | 7,348.88 | 7.79 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":6726.158813844864}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average      | p75       | p99       | Min       | Max       | Latency   |
| -------- | ------------ | --------- | --------- | --------- | --------- | --------- |
| Crystal  | 84,438.2/rps | 10,624.22 | 89,371.57 | 87,979.46 | 88,979.07 | 590.82 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":84438.19795326324}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 64,664.64/rps | 4,461.25 | 74,227.48 | 67,084.34 | 71,879.68 | 771.41 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":64664.64063546598}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 13,728.18/rps | 856.22 | 15,751.85 | 14,298.59 | 15,348.25 | 3.64 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":13728.183727702688}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Rust     | 7,890.81/rps | 687.88 | 10,125.02 | 8,310.68 | 9,500.45 | 6.33 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":7890.807130963246}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

