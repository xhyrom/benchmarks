<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [encode](#base64-encode)
    - [Python](#base64-encode-python)
    - [Crystal](#base64-encode-crystal)
    - [JavaScript](#base64-encode-javascript)
    - [Ruby](#base64-encode-ruby)
    - [Go](#base64-encode-go)
- [decode](#base64-decode)
    - [Python](#base64-decode-python)
    - [Crystal](#base64-decode-crystal)
    - [JavaScript](#base64-decode-javascript)
    - [Ruby](#base64-decode-ruby)
    - [Go](#base64-decode-go)

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 15.36/iter ms | 14.56 ms | 17.87 ms | 15.06 ms | 15.19 ms |


<div id="chart-17"></div>
<script>
new ApexCharts(document.querySelector('#chart-17'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":15359079.400000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Crystal  | 725.58/iter µs | 199.82 µs | 2.59 ms | 555.65 µs | 903.07 µs |


<div id="chart-18"></div>
<script>
new ApexCharts(document.querySelector('#chart-18'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":725582.8600000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 10.4/iter ms  | 8.6 ms   | 34.29 ms | 9.62 ms  | 9.82 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.86/iter ms | 13.62 ms | 18.14 ms | 14.87 ms | 14.94 ms |
| JavaScript / node 18.7.0 (x64-linux) | 38.94/iter ms | 35.95 ms | 51.5 ms  | 39.01 ms | 36.16 ms |


<div id="chart-19"></div>
<script>
new ApexCharts(document.querySelector('#chart-19'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":10398234.270000007},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":38938822.12000001},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":14858302.299999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 46.46/iter ms | 39.6 ms | 73.32 ms | 42.98 ms | 73.32 ms |


<div id="chart-20"></div>
<script>
new ApexCharts(document.querySelector('#chart-20'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":46455320.02000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 625.45/iter µs | 124.75 µs | 3.15 ms | 244.77 µs | 239.85 µs |


<div id="chart-21"></div>
<script>
new ApexCharts(document.querySelector('#chart-21'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":625445.9200000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 15.98/iter ms | 14.62 ms | 18.66 ms | 16.56 ms | 14.68 ms |


<div id="chart-22"></div>
<script>
new ApexCharts(document.querySelector('#chart-22'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":15980830.970000006}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average       | p75  | p99     | Min     | Max       |
| -------- | ------------- | ---- | ------- | ------- | --------- |
| Crystal  | 583.9/iter µs | 0 ps | 2.64 ms | 1.11 ms | 335.09 µs |


<div id="chart-23"></div>
<script>
new ApexCharts(document.querySelector('#chart-23'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":583902.6469999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.75/iter ms  | 8.05 ms  | 15.29 ms | 12.35 ms | 8.24 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 15.09/iter ms | 13.2 ms  | 20.96 ms | 15.84 ms | 17.15 ms |
| JavaScript / node 18.7.0 (x64-linux) | 39.04/iter ms | 35.36 ms | 69.35 ms | 38.28 ms | 40.35 ms |


<div id="chart-24"></div>
<script>
new ApexCharts(document.querySelector('#chart-24'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":9750371.05},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":39036516.80000002},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":15094611.859999998}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 42.89/iter ms | 40.01 ms | 51.38 ms | 40.48 ms | 42.65 ms |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":42886882.51000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average        | p75  | p99     | Min  | Max       |
| -------- | -------------- | ---- | ------- | ---- | --------- |
| Go       | 359.28/iter µs | 0 ps | 7.67 ms | 0 ps | 333.05 µs |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":359281.322}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":true,"showForSingleSeries":true,"position":"bottom"},"xaxis":{"type":"category","labels":{"show":false},"tooltip":{"enabled":false}}}).render()
</script>

