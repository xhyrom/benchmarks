<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#console-javascript)
- [Python](#console-python)
- [Crystal](#console-crystal)
- [Go](#console-go)
- [Ruby](#console-ruby)

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 14.21/iter ms | 13.14 ms | 16.57 ms | 14.72 ms | 14.14 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.25/iter ms | 24.92 ms | 31.53 ms | 25.92 ms | 26.24 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.29/iter ms | 49.01 ms | 55.09 ms | 49.66 ms | 50.16 ms |


<div id="chart-20"></div>
<script>
new ApexCharts(document.querySelector('#chart-20'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":26251411.56000002},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":14214865.070000002},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":50293876.93000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max     |
| -------- | ------------- | -------- | -------- | -------- | ------- |
| Python   | 18.95/iter ms | 18.38 ms | 21.69 ms | 18.75 ms | 18.7 ms |


<div id="chart-21"></div>
<script>
new ApexCharts(document.querySelector('#chart-21'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Python","y":18954226.540000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max  |
| -------- | ------------ | ------- | ------- | ------- | ---- |
| Crystal  | 2.13/iter ms | 1.95 ms | 2.66 ms | 2.09 ms | 2 ms |


<div id="chart-22"></div>
<script>
new ApexCharts(document.querySelector('#chart-22'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Crystal","y":2128289.06}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max    |
| -------- | ------------ | --------- | ------- | ------- | ------ |
| Go       | 1.14/iter ms | 982.23 µs | 2.04 ms | 1.05 ms | 1.2 ms |


<div id="chart-23"></div>
<script>
new ApexCharts(document.querySelector('#chart-23'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Go","y":1141308.2900000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.75/iter ms | 55.93 ms | 61.38 ms | 56.56 ms | 56.99 ms |


<div id="chart-24"></div>
<script>
new ApexCharts(document.querySelector('#chart-24'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Ruby","y":56745891.52}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

