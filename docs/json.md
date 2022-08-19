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
| JavaScript / bun 0.1.10 (x64-linux)  | 11.89/iter ms | 10.48 ms | 13.6 ms  | 12.51 ms | 10.96 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 24.79/iter ms | 23.96 ms | 25.89 ms | 24.52 ms | 24.65 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.84/iter ms | 45.79 ms | 50.82 ms | 46.5 ms  | 47.57 ms |

<div id="chart-10"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-10'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[24786452.15999999,11887022.889999997,46839748.760000005]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.82/iter ms | 22.55 ms | 23.51 ms | 22.88 ms | 23.37 ms |

<div id="chart-11"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-11'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[22815727.69]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min  | Max     |
| -------- | ------------ | ------- | ------- | ---- | ------- |
| Crystal  | 2.09/iter ms | 1.93 ms | 3.36 ms | 2 ms | 1.98 ms |

<div id="chart-12"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-12'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[2089481.1100000006]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-parse-go">Go</a>

| Language | Average     | p75       | p99     | Min     | Max     |
| -------- | ----------- | --------- | ------- | ------- | ------- |
| Go       | 1.1/iter ms | 974.68 µs | 2.16 ms | 1.04 ms | 1.05 ms |

<div id="chart-13"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-13'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[1097315.3399999996]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75     | p99     | Min      | Max     |
| -------- | ------------- | ------- | ------- | -------- | ------- |
| Ruby     | 59.92/iter ms | 59.1 ms | 61.2 ms | 60.01 ms | 59.1 ms |

<div id="chart-14"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-14'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[59916075.90000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 11.09/iter ms | 10.09 ms | 13.02 ms | 11.23 ms | 10.48 ms |
| JavaScript / deno 1.24.3 (x64-linux) | 25.1/iter ms  | 24.36 ms | 26.18 ms | 25.72 ms | 24.73 ms |
| JavaScript / node 18.7.0 (x64-linux) | 46.71/iter ms | 45.39 ms | 53.23 ms | 45.94 ms | 46.04 ms |

<div id="chart-15"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-15'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[25104896.730000004,11091780.429999998,46706676.30999999]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["JavaScript / deno 1.24.3 (x64-linux)","JavaScript / bun 0.1.10 (x64-linux)","JavaScript / node 18.7.0 (x64-linux)"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.75/iter ms | 22.57 ms | 23.76 ms | 22.84 ms | 22.69 ms |

<div id="chart-16"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-16'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[22752412.749999996]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Python"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.01/iter ms | 1.88 ms | 2.39 ms | 1.94 ms | 2.03 ms |

<div id="chart-17"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-17'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[2012363.0099999995]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Crystal"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.08/iter ms | 973.41 µs | 1.43 ms | 1.04 ms | 1.05 ms |

<div id="chart-18"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-18'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[1078819.9200000004]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Go"],"tooltip":{"enabled":false}}})
</script>

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min      | Max      |
| -------- | ------------- | -------- | ------- | -------- | -------- |
| Ruby     | 59.94/iter ms | 59.28 ms | 61.3 ms | 59.71 ms | 59.67 ms |

<div id="chart-19"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
new ApexCharts(document.querySelector('chart-19'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":false}},"series":[{"name":"json","data":[59937908.12000002]}],"stroke":{"width":1,"curve":"straight"},"xaxis":{"categories":["Ruby"],"tooltip":{"enabled":false}}})
</script>

