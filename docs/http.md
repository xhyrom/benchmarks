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
| JavaScript / bun 0.1.10 (x64-linux)  | 92,454.43/rps | 13,559.33 | 266,379.69 | 96,025.49 | 100,431.94 | 540.94 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 48,135.01/rps | 5,164.61  | 53,900.96  | 52,092.95 | 53,387.17  | 1.04 ms   |
| JavaScript / node 18.7.0 (x64-linux) | 47,163.38/rps | 6,333.74  | 50,648.39  | 49,171.82 | 50,229.98  | 1.06 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":48135.01382045677},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":92454.42935926486},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":47163.3794282243}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max     | Latency |
| -------- | ------------ | ------ | -------- | -------- | ------- | ------- |
| Python   | 6,698.61/rps | 758.68 | 8,182.66 | 7,284.61 | 7,910.4 | 7.78 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":6698.610930459839}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Crystal  | 90,218.12/rps | 6,346.74 | 94,991.5 | 92,948.96 | 94,734.89 | 552.41 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":90218.12489683086}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------- | -------- | -------- | --------- | --------- | --------- |
| Go       | 60,654.73/rps | 4,744.84 | 76,166.9 | 63,047.32 | 70,884.09 | 822.84 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":60654.72971101157}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average       | p75    | p99      | Min       | Max       | Latency |
| -------- | ------------- | ------ | -------- | --------- | --------- | ------- |
| Ruby     | 14,308.17/rps | 822.21 | 16,141.9 | 14,895.99 | 15,822.04 | 3.49 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":14308.171447417013}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Rust     | 7,715.91/rps | 780.62 | 10,934.13 | 8,244.73 | 9,560.02 | 6.49 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":7715.905477479933}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

