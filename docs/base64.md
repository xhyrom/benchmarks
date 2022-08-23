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
| JavaScript / bun 0.1.10 (x64-linux)  | 13.03/iter ms | 11.28 ms | 15.03 ms | 12.23 ms | 12.65 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 22.77/iter ms | 21.46 ms | 24.67 ms | 23.29 ms | 21.95 ms |
| JavaScript / node 18.7.0 (x64-linux) | 44.28/iter ms | 40.54 ms | 51.88 ms | 42.25 ms | 41.87 ms |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":22769566.04000001},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":13032930.250000006},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":44281492.22000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 19.3/iter ms | 18.85 ms | 22.76 ms | 19.19 ms | 19.19 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":19301558.500000004}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average   | p75     | p99     | Min     | Max     |
| -------- | --------- | ------- | ------- | ------- | ------- |
| Crystal  | 2/iter ms | 1.75 ms | 2.59 ms | 1.97 ms | 1.75 ms |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2003360.0000000005}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max     |
| -------- | -------------- | --------- | ------- | --------- | ------- |
| Go       | 973.96/iter µs | 813.68 µs | 1.36 ms | 872.98 µs | 1.01 ms |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":973960.8899999993}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 50.51/iter ms | 49.67 ms | 52.64 ms | 50.91 ms | 50.27 ms |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":50505983.88999997}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 13.18/iter ms | 11.85 ms | 15.68 ms | 13.68 ms | 13.11 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 23.23/iter ms | 21.49 ms | 30.18 ms | 23.38 ms | 22.46 ms |
| JavaScript / node 18.7.0 (x64-linux) | 43.62/iter ms | 41.04 ms | 49.36 ms | 42.49 ms | 45.06 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":23227008.539999995},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":13182309.570000002},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":43618225.65000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 19.45/iter ms | 18.88 ms | 21.02 ms | 19.44 ms | 19.58 ms |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":19450270.57000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.93/iter ms | 1.63 ms | 4.42 ms | 1.63 ms | 1.68 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":1925250.8299999994}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.22/iter ms | 924.32 µs | 4.59 ms | 1.56 ms | 1.44 ms |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1215080.5300000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 54.23/iter ms | 51.41 ms | 70.82 ms | 53.1 ms | 51.67 ms |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":54231589.75999996}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

