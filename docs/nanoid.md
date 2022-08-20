<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99      | Min     | Max      |
| ------------------------------------ | ------------- | ------ | -------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 6.9/iter µs   | 2.7 µs | 228.9 µs | 4.8 µs  | 94.2 µs  |
| JavaScript / bun 0.1.10 (x64-linux)  | 7.39/iter µs  | 2.5 µs | 260.3 µs | 4 µs    | 45.8 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 21.23/iter µs | 4.5 µs | 592.8 µs | 10.4 µs | 227.4 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":21226.82},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":7389.94},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":6898.95}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min     | Max     |
| -------- | ------------- | ------- | ------- | ------- | ------- |
| Python   | 20.58/iter µs | 19.4 µs | 33.5 µs | 20.6 µs | 26.2 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":20583.85}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

