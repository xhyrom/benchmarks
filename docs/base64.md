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
| JavaScript / bun 0.1.10 (x64-linux)  | 12.23/iter ms | 10.75 ms | 13.42 ms | 13.23 ms | 12.7 ms  |
| JavaScript / deno 1.24.3 (x64-linux) | 25.81/iter ms | 24.12 ms | 30.69 ms | 24.95 ms | 27.69 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.88/iter ms | 46.55 ms | 62.76 ms | 46.62 ms | 48.6 ms  |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25814450.720000003},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":12230243.759999996},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":48876567.76999997}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.89/iter ms | 21.24 ms | 23.69 ms | 23.54 ms | 21.42 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":21894337.550000004}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.06/iter ms | 1.91 ms | 2.62 ms | 1.93 ms | 2.32 ms |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2056745.809999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average   | p75       | p99     | Min       | Max       |
| -------- | --------- | --------- | ------- | --------- | --------- |
| Go       | 1/iter ms | 752.63 µs | 8.52 ms | 946.63 µs | 830.73 µs |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1003679.1200000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.07/iter ms | 55.42 ms | 56.88 ms | 56.54 ms | 55.82 ms |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":56067760.43999998}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 12.47/iter ms | 11.37 ms | 13.64 ms | 12.03 ms | 11.98 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.74/iter ms | 24.52 ms | 26.59 ms | 25.69 ms | 25.65 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.29/iter ms | 46.84 ms | 51.36 ms | 47.89 ms | 48.26 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25737875.859999992},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":12465223.2},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":48289892.99}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 21.88/iter ms | 21.4 ms | 22.42 ms | 21.64 ms | 21.74 ms |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":21878639.01000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.03/iter ms | 1.91 ms | 2.5 ms | 1.93 ms | 1.95 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2026955.0600000015}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max       |
| -------- | ------------ | --------- | ------- | --------- | --------- |
| Go       | 1.04/iter ms | 893.08 µs | 3.92 ms | 937.38 µs | 934.28 µs |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1044711.7500000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.44/iter ms | 55.88 ms | 57.42 ms | 56.44 ms | 56.71 ms |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":56441971.27999997}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

