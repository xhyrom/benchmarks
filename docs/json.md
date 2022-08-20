<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [parse](#json-parse)
    - [JavaScript](#json-parse-javascript)
    - [Python](#json-parse-python)
    - [Crystal](#json-parse-crystal)
    - [Go](#json-parse-go)
    - [Ruby](#json-parse-ruby)
- [stringify](#json-stringify)
    - [JavaScript](#json-stringify-javascript)
    - [Python](#json-stringify-python)
    - [Crystal](#json-stringify-crystal)
    - [Go](#json-stringify-go)
    - [Ruby](#json-stringify-ruby)

### <a name="json-parse">parse</a>

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 11.85/iter ms | 10.66 ms | 13.27 ms | 11.81 ms | 12.88 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.53/iter ms | 24.61 ms | 26.4 ms  | 25.64 ms | 26.06 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.87/iter ms | 46.61 ms | 49.6 ms  | 48.38 ms | 47.87 ms |


<div id="chart-10"></div>
<script>
new ApexCharts(document.querySelector('#chart-10'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25530167.310000006},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":11847971.480000004},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":47870036.16}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.11/iter ms | 22.61 ms | 24.16 ms | 22.78 ms | 23.05 ms |


<div id="chart-11"></div>
<script>
new ApexCharts(document.querySelector('#chart-11'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":23112745.320000008}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.09/iter ms | 1.96 ms | 2.55 ms | 2.51 ms | 2.11 ms |


<div id="chart-12"></div>
<script>
new ApexCharts(document.querySelector('#chart-12'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":2093680.2599999995}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99    | Min     | Max     |
| -------- | ------------ | --------- | ------ | ------- | ------- |
| Go       | 1.06/iter ms | 913.39 µs | 1.4 ms | 1.02 ms | 1.13 ms |


<div id="chart-13"></div>
<script>
new ApexCharts(document.querySelector('#chart-13'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":1062687.4000000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 61.5/iter ms | 60.67 ms | 62.47 ms | 61.71 ms | 61.26 ms |


<div id="chart-14"></div>
<script>
new ApexCharts(document.querySelector('#chart-14'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":61498217.95000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 12.41/iter ms | 11.4 ms  | 13.94 ms | 12.08 ms | 12.09 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.5/iter ms  | 24.45 ms | 26.43 ms | 25.31 ms | 25.21 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.79/iter ms | 46.84 ms | 49.57 ms | 48.39 ms | 46.92 ms |


<div id="chart-15"></div>
<script>
new ApexCharts(document.querySelector('#chart-15'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25495568.040000003},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":12405445.850000005},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":47789766.489999995}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Python   | 22.94/iter ms | 22.66 ms | 24.6 ms | 22.98 ms | 22.93 ms |


<div id="chart-16"></div>
<script>
new ApexCharts(document.querySelector('#chart-16'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":22941843.049999993}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75    | p99     | Min     | Max  |
| -------- | ------------ | ------ | ------- | ------- | ---- |
| Crystal  | 2.01/iter ms | 1.9 ms | 2.51 ms | 2.25 ms | 2 ms |


<div id="chart-17"></div>
<script>
new ApexCharts(document.querySelector('#chart-17'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":2012729.5600000012}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.07/iter ms | 967.93 µs | 1.36 ms | 1.01 ms | 1.07 ms |


<div id="chart-18"></div>
<script>
new ApexCharts(document.querySelector('#chart-18'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":1066753.73}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 61.25/iter ms | 60.35 ms | 62.07 ms | 62.02 ms | 61.14 ms |


<div id="chart-19"></div>
<script>
new ApexCharts(document.querySelector('#chart-19'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":61247941.730000034}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

