<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [parse](#json-parse)
    - [Python](#json-parse-python)
    - [Crystal](#json-parse-crystal)
    - [JavaScript](#json-parse-javascript)
    - [Ruby](#json-parse-ruby)
    - [Go](#json-parse-go)
- [stringify](#json-stringify)
    - [Python](#json-stringify-python)
    - [Crystal](#json-stringify-crystal)
    - [JavaScript](#json-stringify-javascript)
    - [Ruby](#json-stringify-ruby)
    - [Go](#json-stringify-go)

### <a name="json-parse">parse</a>

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Python   | 16.93/iter ms | 15.3 ms | 24.15 ms | 16.34 ms | 22.09 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":16925761.339999996}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average        | p75      | p99     | Min       | Max       |
| -------- | -------------- | -------- | ------- | --------- | --------- |
| Crystal  | 794.14/iter µs | 398.2 µs | 1.74 ms | 753.26 µs | 583.69 µs |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":794137.9300000005}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-parse-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.56/iter ms  | 8.32 ms  | 23.05 ms | 8.73 ms  | 8.52 ms  |
| JavaScript / deno 1.24.2 (x64-linux) | 14.63/iter ms | 13.34 ms | 19.01 ms | 13.52 ms | 14.24 ms |
| JavaScript / node 18.7.0 (x64-linux) | 37.71/iter ms | 35.01 ms | 44.94 ms | 35.49 ms | 36.07 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":9557953.670000002},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":37713541.769999996},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":14630682.240000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 48.38/iter ms | 42.67 ms | 72.56 ms | 48.72 ms | 44.76 ms |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":48382977.14000001}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-parse-go">Go</a>

| Language | Average        | p75       | p99    | Min       | Max       |
| -------- | -------------- | --------- | ------ | --------- | --------- |
| Go       | 684.98/iter µs | 386.78 µs | 1.6 ms | 433.64 µs | 910.29 µs |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":684981.2500000006}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 17.58/iter ms | 15.23 ms | 23.96 ms | 19.81 ms | 16.77 ms |


<div id="chart-10"></div>
<script>
new ApexCharts(document.querySelector('#chart-10'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Python","y":17580645.97}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75      | p99  | Min       | Max       |
| -------- | ------------ | -------- | ---- | --------- | --------- |
| Crystal  | 1.18/iter ms | 479.6 µs | 9 ms | 685.48 µs | 647.37 µs |


<div id="chart-11"></div>
<script>
new ApexCharts(document.querySelector('#chart-11'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Crystal","y":1184985.019999999}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.58/iter ms  | 8.6 ms   | 15.14 ms | 9.13 ms  | 10.42 ms |
| JavaScript / deno 1.24.2 (x64-linux) | 15.57/iter ms | 13.67 ms | 20.03 ms | 16.43 ms | 15.13 ms |
| JavaScript / node 18.7.0 (x64-linux) | 39.17/iter ms | 35.72 ms | 47.67 ms | 38.54 ms | 39.68 ms |


<div id="chart-12"></div>
<script>
new ApexCharts(document.querySelector('#chart-12'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":9581205.91},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":39171075.14},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":15571829.240000008}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 47.38/iter ms | 42.74 ms | 55.24 ms | 49.6 ms | 50.25 ms |


<div id="chart-13"></div>
<script>
new ApexCharts(document.querySelector('#chart-13'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Ruby","y":47381079.30000002}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

#### <a name="json-stringify-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 758.78/iter µs | 212.34 µs | 3.39 ms | 309.46 µs | 563.87 µs |


<div id="chart-14"></div>
<script>
new ApexCharts(document.querySelector('#chart-14'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"json","data":[{"x":"Go","y":758780.1900000003}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}},"grid":{"row":{"colors":["#F44336","#E91E63","#9C27B0"]},"column":{"colors":["#F44336","#E91E63","#9C27B0"]}}}).render()
</script>

