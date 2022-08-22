<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average      | p75    | p99       | Min     | Max      |
| ------------------------------------ | ------------ | ------ | --------- | ------- | -------- |
| JavaScript / node 18.7.0 (x64-linux) | 9.08/iter µs | 3.1 µs | 263.6 µs  | 5.4 µs  | 195.5 µs |
| JavaScript / bun 0.1.10 (x64-linux)  | 10.5/iter µs | 3.4 µs | 286.2 µs  | 7.2 µs  | 66 µs    |
| JavaScript / deno 1.24.3 (x64-linux) | 30.9/iter µs | 6.2 µs | 906.51 µs | 17.9 µs | 380.2 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":30896.42},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":10498.14},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":9084.04}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="nanoid-python">Python</a>

| Language | Average       | p75     | p99      | Min     | Max    |
| -------- | ------------- | ------- | -------- | ------- | ------ |
| Python   | 32.37/iter µs | 23.8 µs | 180.5 µs | 27.7 µs | 165 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"nanoid","data":[{"x":"Python","y":32372.32}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

