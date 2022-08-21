<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#console-javascript)
- [Python](#console-python)
- [Crystal](#console-crystal)
- [Go](#console-go)
- [Ruby](#console-ruby)

### <a name="console-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 12.02/iter ms | 10.42 ms | 14.48 ms | 13.05 ms | 10.47 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.79/iter ms | 24.2 ms  | 30.21 ms | 25.18 ms | 26.11 ms |
| JavaScript / node 18.7.0 (x64-linux) | 50.13/iter ms | 48.61 ms | 54.81 ms | 48.77 ms | 54.17 ms |


<div id="chart-20"></div>
<script>
new ApexCharts(document.querySelector('#chart-20'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25788506.58000001},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":12018407.21},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":50133295.250000015}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 18.87/iter ms | 18.09 ms | 21.94 ms | 21.94 ms | 18.59 ms |


<div id="chart-21"></div>
<script>
new ApexCharts(document.querySelector('#chart-21'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Python","y":18870808.750000007}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.04/iter ms | 1.89 ms | 2.71 ms | 2.07 ms | 2.26 ms |


<div id="chart-22"></div>
<script>
new ApexCharts(document.querySelector('#chart-22'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Crystal","y":2041545.45}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max     |
| -------- | -------------- | --------- | ------- | --------- | ------- |
| Go       | 999.11/iter µs | 897.73 µs | 1.41 ms | 991.33 µs | 1.03 ms |


<div id="chart-23"></div>
<script>
new ApexCharts(document.querySelector('#chart-23'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Go","y":999111.1699999998}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min     | Max      |
| -------- | ------------- | -------- | ------- | ------- | -------- |
| Ruby     | 55.43/iter ms | 54.52 ms | 56.7 ms | 55.5 ms | 55.47 ms |


<div id="chart-24"></div>
<script>
new ApexCharts(document.querySelector('#chart-24'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"console","data":[{"x":"Ruby","y":55430994.06000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

