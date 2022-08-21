<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max        | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | ---------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 89,515.13/rps | 11,398.59 | 110,188.28 | 93,036.49 | 106,800.03 | 556.78 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 50,275.88/rps | 5,544.74  | 54,466.52  | 53,048.9  | 54,023.31  | 992.36 µs |
| JavaScript / node 18.7.0 (x64-linux) | 47,431.98/rps | 5,646.89  | 50,459.07  | 48,987.9  | 49,833.92  | 1.05 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":50275.87629163477},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":89515.1264333172},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":47431.979401320285}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min     | Max      | Latency |
| -------- | ------------ | ------ | -------- | ------- | -------- | ------- |
| Python   | 6,694.26/rps | 605.37 | 7,479.88 | 7,031.3 | 7,355.57 | 7.75 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":6694.255549542975}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min      | Max       | Latency   |
| -------- | ------------- | -------- | --------- | -------- | --------- | --------- |
| Crystal  | 85,691.68/rps | 3,640.37 | 89,550.16 | 87,934.3 | 89,164.12 | 582.08 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":85691.67777906545}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 63,819.27/rps | 4,942.85 | 74,255.48 | 66,693.53 | 71,095.05 | 781.82 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":63819.271513648935}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency |
| -------- | ------------- | -------- | --------- | --------- | --------- | ------- |
| Ruby     | 13,688.54/rps | 1,098.77 | 15,751.12 | 14,363.01 | 15,353.47 | 3.65 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":13688.537942873292}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average   | p75    | p99      | Min      | Max      | Latency |
| -------- | --------- | ------ | -------- | -------- | -------- | ------- |
| Rust     | 7,785/rps | 771.21 | 9,953.88 | 8,272.81 | 9,530.64 | 6.42 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":7784.999240449589}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

