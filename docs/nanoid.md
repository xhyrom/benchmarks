<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average       | p75    | p99      | Min     | Max      |
| ------------------------------------ | ------------- | ------ | -------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 6.77/iter µs  | 2.5 µs | 219.9 µs | 4.6 µs  | 95.6 µs  |
| JavaScript / bun 0.1.10 (x64-linux)  | 10.08/iter µs | 2.9 µs | 255.6 µs | 7.6 µs  | 35.5 µs  |
| JavaScript / deno 1.24.3 (x64-linux) | 21.01/iter µs | 4.6 µs | 566.8 µs | 10.8 µs | 231.3 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":21006.07},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":10075.06},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":6766.03}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99     | Min     | Max     |
| -------- | ------------- | ------- | ------- | ------- | ------- |
| Python   | 20.87/iter µs | 19.8 µs | 54.1 µs | 20.7 µs | 24.3 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":20869.08}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

