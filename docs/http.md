<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99       | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 84,325.6/rps  | 10,491.96 | 98,586.01 | 87,248.53 | 90,033.11 | 590.39 µs |
| JavaScript / deno 1.25.0 (x64-linux) | 46,586.49/rps | 5,624.08  | 50,929.88 | 50,092.63 | 50,646.32 | 1.07 ms   |
| JavaScript / node 18.8.0 (x64-linux) | 37,894.71/rps | 4,437.07  | 41,606.09 | 39,166.09 | 40,133.34 | 1.32 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":46586.494590811824},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":84325.59927877919},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":37894.7114244346}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,205.18/rps | 994.61 | 6,963.82 | 6,475.04 | 6,866.85 | 10 ms   |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":5205.181551358567}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 80,967.66/rps | 6,359.39 | 85,335.76 | 83,613.65 | 84,996.54 | 616.32 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":80967.65941428683}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 58,066.89/rps | 3,448.95 | 67,757.23 | 60,178.39 | 64,919.32 | 859.32 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":58066.88946312041}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99       | Min      | Max       | Latency |
| -------- | ------------- | ------ | --------- | -------- | --------- | ------- |
| Ruby     | 12,422.34/rps | 859.84 | 14,632.65 | 12,974.9 | 14,185.82 | 4.02 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":12422.343111773002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Rust     | 7,094.16/rps | 766.91 | 15,871.39 | 7,466.84 | 8,841.45 | 7.06 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":7094.163738183633}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

