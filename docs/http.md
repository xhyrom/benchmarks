<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [Python](#http-python)
- [Crystal](#http-crystal)
- [JavaScript](#http-javascript)
- [Ruby](#http-ruby)
- [Rust](#http-rust)
- [Go](#http-go)

### <a name="http-python">Python</a>

| Language | Average    | p75    | p99      | Min      | Max      | Latency  |
| -------- | ---------- | ------ | -------- | -------- | -------- | -------- |
| Python   | 899.44/rps | 196.01 | 1,649.62 | 1,055.36 | 1,352.17 | 57.12 ms |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Python","y":899.4350731548585}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="http-crystal">Crystal</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Crystal  | 100,988.38/rps | 18,702.11 | 155,505.67 | 110,098.43 | 146,126.95 | 493.81 µs |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Crystal","y":100988.38250060278}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="http-javascript">JavaScript</a>

| Language                             | Average        | p75       | p99        | Min        | Max        | Latency   |
| ------------------------------------ | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 146,839.37/rps | 25,467.15 | 183,751.25 | 161,365.51 | 173,620.81 | 339.14 µs |
| JavaScript / deno 1.24.2 (x64-linux) | 71,604.01/rps  | 10,961.18 | 80,980.76  | 77,892.73  | 80,443.28  | 696.75 µs |
| JavaScript / node 18.7.0 (x64-linux) | 43,768.85/rps  | 6,866.16  | 51,223.83  | 48,425.66  | 51,027.39  | 1.14 ms   |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":146839.3667041421},{"x":"JavaScript / node 18.7.0 (x64-linux)","y":43768.85160568122},{"x":"JavaScript / deno 1.24.2 (x64-linux)","y":71604.01296393623}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      | Latency  |
| -------- | ------------ | -------- | -------- | -------- | -------- | -------- |
| Ruby     | 3,442.58/rps | 2,398.89 | 9,820.55 | 6,885.76 | 8,395.94 | 14.52 ms |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Ruby","y":3442.5822459009405}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="http-rust">Rust</a>

| Language | Average      | p75      | p99       | Min      | Max      | Latency  |
| -------- | ------------ | -------- | --------- | -------- | -------- | -------- |
| Rust     | 3,529.86/rps | 2,587.38 | 10,026.46 | 7,449.59 | 9,985.96 | 14.16 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Rust","y":3529.8601865488545}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

### <a name="http-go">Go</a>

| Language | Average        | p75       | p99        | Min        | Max        | Latency   |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | --------- |
| Go       | 167,199.06/rps | 43,962.24 | 239,460.41 | 201,060.02 | 236,264.08 | 297.07 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {"chart":{"height":320,"type":"bar","toolbar":{"show":true},"animations":{"enabled":true}},"series":[{"name":"http","data":[{"x":"Go","y":167199.05923304163}]}],"stroke":{"width":1,"curve":"straight"},"legend":{"show":false},"xaxis":{"type":"category","labels":{"show":true},"tooltip":{"enabled":false}}}).render()
</script>

