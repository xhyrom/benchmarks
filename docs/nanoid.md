<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99       | Min     | Max      |
| ------------------------------------ | ------------- | ------ | --------- | ------- | -------- |
| JavaScript / node 18.8.0 (x64-linux) | 7.45/iter µs  | 3.1 µs | 225.4 µs  | 5.2 µs  | 108.8 µs |
| JavaScript / bun 0.1.10 (x64-linux)  | 7.78/iter µs  | 2.7 µs | 269 µs    | 4.4 µs  | 46.1 µs  |
| JavaScript / deno 1.25.0 (x64-linux) | 18.06/iter µs | 5.7 µs | 271.11 µs | 12.7 µs | 201.7 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":18062.25},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":7776.12},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":7446.15}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min     | Max     |
| -------- | ------------- | ------- | ------- | ------- | ------- |
| Python   | 21.48/iter µs | 20.7 µs | 26.3 µs | 21.6 µs | 25.4 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":21479.33}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

