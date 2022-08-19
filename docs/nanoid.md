<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99       | Min     | Max      |
| ------------------------------------ | ------------- | ------ | --------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 7.36/iter µs  | 3.1 µs | 230.6 µs  | 4.4 µs  | 96.5 µs  |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.48/iter µs  | 2.8 µs | 292 µs    | 4.4 µs  | 130.4 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 23.77/iter µs | 5.5 µs | 687.31 µs | 12.6 µs | 251.6 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":23768.41},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":9477.16},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":7362.11}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min   | Max   |
| -------- | ------------- | ------- | ------- | ----- | ----- |
| Python   | 21.81/iter µs | 20.8 µs | 27.7 µs | 22 µs | 24 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":21805.34}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

