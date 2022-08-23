<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99      | Min     | Max      |
| ------------------------------------ | ------------- | ------ | -------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 6.67/iter µs  | 2.8 µs | 197 µs   | 4.6 µs  | 97.3 µs  |
| JavaScript / bun 0.1.10 (x64-linux)  | 10.02/iter µs | 4.3 µs | 248.3 µs | 7.6 µs  | 34.5 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 21.56/iter µs | 7.1 µs | 585.4 µs | 11.7 µs | 227.5 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":21563.86},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":10024.08},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":6666.03}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min   | Max     |
| -------- | ------------- | ------- | ------- | ----- | ------- |
| Python   | 19.35/iter µs | 18.3 µs | 50.8 µs | 19 µs | 32.5 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":19349.24}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

