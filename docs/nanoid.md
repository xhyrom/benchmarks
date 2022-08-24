<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99       | Min     | Max      |
| ------------------------------------ | ------------- | ------ | --------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 7.26/iter µs  | 3 µs   | 232.2 µs  | 4.1 µs  | 98.7 µs  |
| JavaScript / bun 0.1.10 (x64-linux)  | 11/iter µs    | 2.6 µs | 321.8 µs  | 4.3 µs  | 277.9 µs |
| JavaScript / deno 1.24.3 (x64-linux) | 23.63/iter µs | 8.3 µs | 663.61 µs | 12.5 µs | 241.4 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":23630.32},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":11003.12},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":7263.06}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min     | Max   |
| -------- | ------------- | ------- | ------- | ------- | ----- |
| Python   | 21.52/iter µs | 20.8 µs | 36.7 µs | 21.5 µs | 27 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":21521.16}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

