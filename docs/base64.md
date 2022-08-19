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
| JavaScript / bun 0.1.10 (x64-linux)  | 11.75/iter ms | 10.37 ms | 13.61 ms | 11.85 ms | 10.54 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.43/iter ms | 24.06 ms | 53.82 ms | 25 ms    | 24.82 ms |
| JavaScript / node 18.7.0 (x64-linux) | 47.2/iter ms  | 45.59 ms | 51.27 ms | 47.05 ms | 46.69 ms |

<div id="chart-0"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-0'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[25428940.67000001,11749889.300000004,47196075.69]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 21.61/iter ms | 21.28 ms | 23.76 ms | 21.65 ms | 21.39 ms |

<div id="chart-1"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-1'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[21608131.099999998]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.06/iter ms | 1.92 ms | 2.55 ms | 2.17 ms | 2.01 ms |

<div id="chart-2"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-2'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[2057063.4999999998]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99     | Min       | Max       |
| -------- | ------------ | --------- | ------- | --------- | --------- |
| Go       | 1.01/iter ms | 844.51 µs | 3.35 ms | 969.41 µs | 961.81 µs |

<div id="chart-3"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-3'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[1008928.3400000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min   | Max      |
| -------- | ------------- | -------- | -------- | ----- | -------- |
| Ruby     | 55.43/iter ms | 54.68 ms | 56.59 ms | 55 ms | 55.74 ms |

<div id="chart-4"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-4'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[55426407.569999985]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 11.83/iter ms | 10.67 ms | 13.02 ms | 12.28 ms | 11.96 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.12/iter ms | 24.21 ms | 26.42 ms | 25.32 ms | 25.2 ms  |
| JavaScript / node 18.7.0 (x64-linux) | 48.03/iter ms | 46.89 ms | 51.75 ms | 47.13 ms | 47.72 ms |

<div id="chart-5"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[25118215.850000005,11828893.220000003,48025558.06000001]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max   |
| -------- | ------------- | -------- | -------- | -------- | ----- |
| Python   | 21.97/iter ms | 21.39 ms | 23.02 ms | 22.31 ms | 22 ms |

<div id="chart-6"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[21971210.520000003]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.97/iter ms | 1.84 ms | 2.37 ms | 2.16 ms | 1.93 ms |

<div id="chart-7"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[1969323.6399999994]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99    | Min       | Max       |
| -------- | -------------- | --------- | ------ | --------- | --------- |
| Go       | 994.48/iter µs | 891.32 µs | 1.5 ms | 902.82 µs | 935.42 µs |

<div id="chart-8"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[994475.3100000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.62/iter ms | 55.73 ms | 58.02 ms | 56.74 ms | 56.49 ms |

<div id="chart-9"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"base64","data":[56619077.130000025]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

