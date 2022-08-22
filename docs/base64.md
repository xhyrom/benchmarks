<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [decode](#base64-decode)
    - [JavaScript](#base64-decode-javascript)
    - [Python](#base64-decode-python)
    - [Crystal](#base64-decode-crystal)
    - [Go](#base64-decode-go)
    - [Ruby](#base64-decode-ruby)
- [encode](#base64-encode)
    - [JavaScript](#base64-encode-javascript)
    - [Python](#base64-encode-python)
    - [Crystal](#base64-encode-crystal)
    - [Go](#base64-encode-go)
    - [Ruby](#base64-encode-ruby)

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 15.78/iter ms | 12.5 ms  | 22.57 ms | 12.85 ms | 19.82 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 29.97/iter ms | 24.68 ms | 54.54 ms | 27.24 ms | 25.89 ms |
| JavaScript / node 18.7.0 (x64-linux) | 54.12/iter ms | 47.51 ms | 64.1 ms  | 56.1 ms  | 51.53 ms |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":29967047.159999985},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":15781293.949999994},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":54118516.22000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 26.1/iter ms | 22.45 ms | 32.39 ms | 24.65 ms | 27.26 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":26101438.030000012}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99      | Min     | Max     |
| -------- | ------------ | ------- | -------- | ------- | ------- |
| Crystal  | 2.59/iter ms | 1.51 ms | 10.18 ms | 2.52 ms | 1.88 ms |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2585635.8599999994}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.19/iter ms | 527.21 µs | 7.24 ms | 2.16 ms | 1.32 ms |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1191189.1199999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 68.55/iter ms | 61.8 ms | 77.71 ms | 77.71 ms | 76.07 ms |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":68550633.96000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 15.93/iter ms | 12.24 ms | 21.62 ms | 16.84 ms | 18 ms    |
| JavaScript / deno 1.24.3 (x64-linux) | 28.87/iter ms | 24.88 ms | 38.09 ms | 28.07 ms | 28.34 ms |
| JavaScript / node 18.7.0 (x64-linux) | 54.95/iter ms | 45.98 ms | 68.75 ms | 55.07 ms | 55.45 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":28874620.35},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":15926456.789999997},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":54953431.75000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 27.04/iter ms | 23.75 ms | 32.93 ms | 28.46 ms | 25.97 ms |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":27036887.61999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.38/iter ms | 1.39 ms | 7.06 ms | 2.44 ms | 2.04 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2382959.5}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max     |
| -------- | ------------ | --------- | ------- | --------- | ------- |
| Go       | 1.21/iter ms | 766.85 µs | 3.33 ms | 863.55 µs | 1.08 ms |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1208727.1900000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 69.36/iter ms | 60.18 ms | 82.55 ms | 78.18 ms | 70.46 ms |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":69360698.51999998}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

