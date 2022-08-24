<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99       | Min       | Max       | Latency  |
| ------------------------------------ | ------------- | --------- | --------- | --------- | --------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 85,081.71/rps | 10,570.21 | 94,097.39 | 88,393.75 | 91,537.06 | 585.5 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 45,859.16/rps | 4,772.24  | 49,179.72 | 48,436.01 | 48,987.9  | 1.09 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 41,048.34/rps | 4,871.16  | 43,841.35 | 42,344.89 | 43,120.99 | 1.22 ms  |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":45859.15911635209},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":85081.70808160474},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":41048.336209559304}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-python">Python</a>

| Language | Average     | p75    | p99      | Min      | Max      | Latency |
| -------- | ----------- | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,580.7/rps | 830.29 | 7,151.72 | 6,545.75 | 6,958.01 | 9.58 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":5580.699505511208}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 82,540.81/rps | 5,679.29 | 87,674.35 | 84,876.62 | 86,359.35 | 603.83 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":82540.81387954584}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------- | -------- | --------- | -------- | --------- | --------- |
| Go       | 58,507.69/rps | 3,353.04 | 67,709.36 | 60,763.9 | 64,961.21 | 852.98 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":58507.6926492934}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------- | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 12,611.98/rps | 905.47 | 14,765.58 | 13,186.52 | 14,188.75 | 3.96 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":12611.984926655778}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Rust     | 7,201.85/rps | 689.27 | 10,410.37 | 7,599.42 | 8,858.32 | 6.95 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":7201.849907695264}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

