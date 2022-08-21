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
| JavaScript / bun 0.1.10 (x64-linux)  | 11.83/iter ms | 10.36 ms | 15.46 ms | 11.08 ms | 13.94 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.96/iter ms | 24.75 ms | 27.02 ms | 25.43 ms | 24.75 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.39/iter ms | 46.93 ms | 56.93 ms | 48.22 ms | 47.48 ms |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":25959949.369999994},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":11827394.770000007},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":48389741.36999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.72/iter ms | 21.61 ms | 27.78 ms | 22.33 ms | 22.59 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":22720913.580000013}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.14/iter ms | 1.91 ms | 2.66 ms | 2.13 ms | 1.97 ms |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2136197.600000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.01/iter ms | 874.68 µs | 1.51 ms | 1.02 ms | 940.68 µs |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1005122.8}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.56/iter ms | 54.44 ms | 58.33 ms | 55.27 ms | 55.18 ms |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":55557380.04}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 11.55/iter ms | 10.52 ms | 13.57 ms | 11.6 ms  | 12.38 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 26.01/iter ms | 24.2 ms  | 29.95 ms | 25.89 ms | 25.95 ms |
| JavaScript / node 18.7.0 (x64-linux) | 48.22/iter ms | 46.61 ms | 51.96 ms | 48.12 ms | 48.07 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"JavaScript / deno 1.24.3 (x64-linux)","y":26007799.53},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":11554984.76},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":48216890.98000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.33/iter ms | 21.37 ms | 23.36 ms | 22.76 ms | 22.68 ms |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Python","y":22329987.320000008}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ms | 1.88 ms | 2.34 ms | 2.02 ms | 1.99 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Crystal","y":2024166.6500000008}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max       |
| -------- | ------------ | --------- | ------- | --------- | --------- |
| Go       | 1.03/iter ms | 824.92 µs | 6.82 ms | 918.92 µs | 909.02 µs |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Go","y":1028956.3400000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min     | Max   |
| -------- | ------------- | ------- | -------- | ------- | ----- |
| Ruby     | 57.62/iter ms | 55.9 ms | 64.49 ms | 57.3 ms | 56 ms |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"base64","data":[{"x":"Ruby","y":57620077.93000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"plotOptions":{"bar":{"distributed":true}}}).render()
</script>

