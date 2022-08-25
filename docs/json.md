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
| JavaScript / bun 0.1.10 (x64-linux)  | 14.32/iter ms | 13.49 ms | 18.39 ms | 14.01 ms | 15.11 ms |
| JavaScript / deno 1.25.0 (x64-linux) | 29.31/iter ms | 27.92 ms | 31.81 ms | 29.65 ms | 29.39 ms |
| JavaScript / node 18.8.0 (x64-linux) | 48.57/iter ms | 47.19 ms | 59.67 ms | 48.54 ms | 47.87 ms |


<div id="chart-10"></div>
<script>
new ApexCharts(document.querySelector('#chart-10'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":29308642.729999997},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":14324443.420000002},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":48571620.66000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75   | p99      | Min      | Max      |
| -------- | ------------- | ----- | -------- | -------- | -------- |
| Python   | 23.52/iter ms | 23 ms | 24.32 ms | 23.53 ms | 23.57 ms |


<div id="chart-11"></div>
<script>
new ApexCharts(document.querySelector('#chart-11'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":23515044.569999997}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average     | p75     | p99     | Min     | Max     |
| -------- | ----------- | ------- | ------- | ------- | ------- |
| Crystal  | 2.2/iter ms | 1.95 ms | 2.82 ms | 2.12 ms | 2.26 ms |


<div id="chart-12"></div>
<script>
new ApexCharts(document.querySelector('#chart-12'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":2202373.8099999996}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Go       | 1.24/iter ms | 1.03 ms | 1.95 ms | 1.21 ms | 1.39 ms |


<div id="chart-13"></div>
<script>
new ApexCharts(document.querySelector('#chart-13'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":1235813.0100000005}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 62.54/iter ms | 61.76 ms | 64.16 ms | 61.76 ms | 62.52 ms |


<div id="chart-14"></div>
<script>
new ApexCharts(document.querySelector('#chart-14'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":62536063.07000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 14.52/iter ms | 13.48 ms | 16.6 ms  | 14.82 ms | 15.13 ms |
| JavaScript / deno 1.25.0 (x64-linux) | 29.07/iter ms | 27.95 ms | 30.34 ms | 28.59 ms | 29.45 ms |
| JavaScript / node 18.8.0 (x64-linux) | 48.39/iter ms | 47.07 ms | 53.36 ms | 48.8 ms  | 47.9 ms  |


<div id="chart-15"></div>
<script>
new ApexCharts(document.querySelector('#chart-15'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":29073975.990000006},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":14516990.230000012},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":48393146.960000016}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.56/iter ms | 23.04 ms | 24.15 ms | 23.62 ms | 23.51 ms |


<div id="chart-16"></div>
<script>
new ApexCharts(document.querySelector('#chart-16'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":23559003.82999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75  | p99    | Min     | Max     |
| -------- | ------------ | ---- | ------ | ------- | ------- |
| Crystal  | 2.21/iter ms | 2 ms | 2.7 ms | 2.19 ms | 2.32 ms |


<div id="chart-17"></div>
<script>
new ApexCharts(document.querySelector('#chart-17'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":2206275.1100000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min    | Max     |
| -------- | ------------ | --------- | ------- | ------ | ------- |
| Go       | 1.11/iter ms | 982.68 µs | 1.77 ms | 1.2 ms | 1.18 ms |


<div id="chart-18"></div>
<script>
new ApexCharts(document.querySelector('#chart-18'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":1112928.7600000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max     |
| -------- | ------------- | -------- | -------- | ------- | ------- |
| Ruby     | 62.56/iter ms | 61.51 ms | 64.02 ms | 62.5 ms | 62.5 ms |


<div id="chart-19"></div>
<script>
new ApexCharts(document.querySelector('#chart-19'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":62564121.73000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

