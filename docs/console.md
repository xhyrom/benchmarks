<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#console-javascript)
- [Python](#console-python)
- [Crystal](#console-crystal)
- [Go](#console-go)
- [Ruby](#console-ruby)

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 12.37/iter ms | 11.53 ms | 13.51 ms | 12.06 ms | 12.71 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.23/iter ms | 25.27 ms | 28.72 ms | 25.69 ms | 25.97 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.33/iter ms | 48.96 ms | 54.06 ms | 49.94 ms | 49.37 ms |


<div id="chart-20"></div>
<script>
new ApexCharts(document.querySelector('#chart-20'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":26228726.38},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":12371929.260000002},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":50333340.40999998}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 18.3/iter ms | 17.99 ms | 19.11 ms | 19.11 ms | 18.33 ms |


<div id="chart-21"></div>
<script>
new ApexCharts(document.querySelector('#chart-21'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Python","y":18303356.819999997}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.04/iter ms | 1.93 ms | 2.6 ms | 1.99 ms | 1.96 ms |


<div id="chart-22"></div>
<script>
new ApexCharts(document.querySelector('#chart-22'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Crystal","y":2042735.359999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.03/iter ms | 916.72 µs | 1.39 ms | 1.07 ms | 1.06 ms |


<div id="chart-23"></div>
<script>
new ApexCharts(document.querySelector('#chart-23'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Go","y":1025655.8000000009}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.99/iter ms | 54.85 ms | 58.37 ms | 55.98 ms | 55.66 ms |


<div id="chart-24"></div>
<script>
new ApexCharts(document.querySelector('#chart-24'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Ruby","y":55986205.98000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

