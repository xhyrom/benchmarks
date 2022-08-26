<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
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

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 13.32/iter ms | 12.56 ms | 14.99 ms | 13.19 ms | 13.59 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 28.97/iter ms | 28.03 ms | 33.38 ms | 28.61 ms | 28.51 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 48.29/iter ms | 47.44 ms | 53.03 ms | 47.98 ms | 47.82 ms |


<div id="chart-0"></div>
<script>
new ApexCharts(document.querySelector('#chart-0'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,18547007.54,18547007.54,18547007.54,18547007.54,18547007.54,28078870.63000001,28078870.63000001,30253933.46,29797545.620000005,29797545.620000005,29797545.620000005,28585645.53999999,28585645.53999999,28481525.780000005,28481525.780000005,28481525.780000005,31457619.520000007,31457619.520000007,28973769.750000004]},{"name":" bun 0.1.10 (x64-linux)","data":[0,9420616.389999999,9420616.389999999,9420616.389999999,9420616.389999999,9420616.389999999,12165657.07,12165657.07,14082596.849999996,15441946.999999996,15441946.999999996,15441946.999999996,13127905.899999997,13127905.899999997,13306472.630000003,13306472.630000003,13306472.630000003,16251442.21,16251442.21,13320101.650000004]},{"name":" node 18.8.0 (x64-linux)","data":[0,40271886.78,40271886.78,40271886.78,40271886.78,40271886.78,46456798.32,46456798.32,49554306.529999964,49736867.109999985,49736867.109999985,49736867.109999985,48226020.90000002,48226020.90000002,47422254.349999994,47422254.349999994,47422254.349999994,51694167.489999995,51694167.489999995,48286124.20000001]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Python   | 22.15/iter ms | 21.89 ms | 22.52 ms | 22.1 ms | 22.04 ms |


<div id="chart-1"></div>
<script>
new ApexCharts(document.querySelector('#chart-1'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Python","data":[0,15964066.740000008,15964066.740000008,15964066.740000008,15964066.740000008,15964066.740000008,21508702.57000001,21508702.57000001,22553420.75,22690716.080000002,22690716.080000002,22690716.080000002,22183290.44,22183290.44,21789264.47,21789264.47,21789264.47,23549596.890000004,23549596.890000004,22150792.729999997]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.02/iter ms | 1.84 ms | 2.51 ms | 1.91 ms | 1.93 ms |


<div id="chart-2"></div>
<script>
new ApexCharts(document.querySelector('#chart-2'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Crystal","data":[0,1326251.7400000005,1326251.7400000005,1326251.7400000005,1326251.7400000005,1326251.7400000005,2030202.0399999998,2030202.0399999998,2359952.84,2151024.0500000007,2151024.0500000007,2151024.0500000007,2056740.2800000007,2056740.2800000007,2134909.4000000013,2134909.4000000013,2134909.4000000013,2303739.78,2303739.78,2019487.67]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-decode-go">Go</a>

| Language | Average        | p75       | p99     | Min     | Max       |
| -------- | -------------- | --------- | ------- | ------- | --------- |
| Go       | 952.89/iter µs | 790.19 µs | 1.62 ms | 1.18 ms | 888.99 µs |


<div id="chart-3"></div>
<script>
new ApexCharts(document.querySelector('#chart-3'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Go","data":[0,1561479.7500000012,1561479.7500000012,1561479.7500000012,1561479.7500000012,1561479.7500000012,947094.63,947094.63,993605.6999999994,1077266.19,1077266.19,1077266.19,992846.3,992846.3,1063493.69,1063493.69,1063493.69,1158203.9199999997,1158203.9199999997,952887.6299999995]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.51/iter ms | 55.79 ms | 57.44 ms | 56.69 ms | 56.23 ms |


<div id="chart-4"></div>
<script>
new ApexCharts(document.querySelector('#chart-4'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Ruby","data":[0,43220993.88000001,43220993.88000001,43220993.88000001,43220993.88000001,43220993.88000001,55327225.230000004,55327225.230000004,59701125.58999997,58152534.17000002,58152534.17000002,58152534.17000002,56562059.93999998,56562059.93999998,56730626.65,56730626.65,56730626.65,60444934.30999997,60444934.30999997,56506041.97000003]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 13.17/iter ms | 12.51 ms | 15.31 ms | 13 ms    | 13.07 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 28.95/iter ms | 28.16 ms | 29.85 ms | 29 ms    | 29.51 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 48.11/iter ms | 47.06 ms | 51.4 ms  | 48.13 ms | 47.55 ms |


<div id="chart-5"></div>
<script>
new ApexCharts(document.querySelector('#chart-5'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,20700831.930000003,20700831.930000003,20700831.930000003,20700831.930000003,20700831.930000003,28206201.930000003,28206201.930000003,31455059.33,29197839.04,29197839.04,29197839.04,29154637.139999993,29154637.139999993,27808119.24,27808119.24,27808119.24,31737669.600000013,31737669.600000013,28945858.579999983]},{"name":" bun 0.1.10 (x64-linux)","data":[0,9871206.349999994,9871206.349999994,9871206.349999994,9871206.349999994,9871206.349999994,12602370.939999994,12602370.939999994,14460292.16,15738039.859999998,15738039.859999998,15738039.859999998,12977225.16,12977225.16,13877875.950000009,13877875.950000009,13877875.950000009,16359029.790000003,16359029.790000003,13174755.580000004]},{"name":" node 18.8.0 (x64-linux)","data":[0,40721055.45999999,40721055.45999999,40721055.45999999,40721055.45999999,40721055.45999999,46527177.08000002,46527177.08000002,49469886.98000003,48565894.35999999,48565894.35999999,48565894.35999999,48040887.16000001,48040887.16000001,46656163.63,46656163.63,46656163.63,51718611.149999976,51718611.149999976,48105013.39000002]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.37/iter ms | 21.93 ms | 22.93 ms | 22.64 ms | 22.02 ms |


<div id="chart-6"></div>
<script>
new ApexCharts(document.querySelector('#chart-6'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Python","data":[0,17777471.609999996,17777471.609999996,17777471.609999996,17777471.609999996,17777471.609999996,21377788.229999993,21377788.229999993,22788845.9,21997859.109999996,21997859.109999996,21997859.109999996,22519933.430000007,22519933.430000007,21664448.9,21664448.9,21664448.9,23812938.710000005,23812938.710000005,22371122.769999996]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.97/iter ms | 1.78 ms | 2.61 ms | 1.92 ms | 1.87 ms |


<div id="chart-7"></div>
<script>
new ApexCharts(document.querySelector('#chart-7'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Crystal","data":[0,1661558.2300000004,1661558.2300000004,1661558.2300000004,1661558.2300000004,1661558.2300000004,1978172.39,1978172.39,2413310.47,2114447.14,2114447.14,2114447.14,2090545.5999999999,2090545.5999999999,2033179.4900000014,2033179.4900000014,2033179.4900000014,2210549.7200000007,2210549.7200000007,1965546.7800000003]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 951.72/iter µs | 816.54 µs | 1.61 ms | 913.84 µs | 914.94 µs |


<div id="chart-8"></div>
<script>
new ApexCharts(document.querySelector('#chart-8'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Go","data":[0,697669.3899999999,697669.3899999999,697669.3899999999,697669.3899999999,697669.3899999999,947986.5200000006,947986.5200000006,1228748.7899999993,1531923.5699999998,1531923.5699999998,1531923.5699999998,989999.4000000003,989999.4000000003,1046715.9800000001,1046715.9800000001,1046715.9800000001,1229676.8400000003,1229676.8400000003,951719.5899999995]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 56.43/iter ms | 55.63 ms | 57.36 ms | 56.75 ms | 56.69 ms |


<div id="chart-9"></div>
<script>
new ApexCharts(document.querySelector('#chart-9'), {
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [{"name":"Ruby","data":[0,47096775.75000001,47096775.75000001,47096775.75000001,47096775.75000001,47096775.75000001,55605193.730000004,55605193.730000004,59825046.430000015,57460603.419999994,57460603.419999994,57460603.419999994,56712042.28000001,56712042.28000001,55826480.04,55826480.04,55826480.04,60392016.27999998,60392016.27999998,56425625.38999996]}],
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return `${Number((time * 1e3).toFixed(2)).toLocaleString(locale)}${type} ps`;
  
                    if (time < 1e3) return `${Number(time.toFixed(2)).toLocaleString(locale)}${type} ns`;
                    if (time < 1e6) return `${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}${type} µs`;
                    if (time < 1e9) return `${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}${type} ms`;
                    if (time < 1e12) return `${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}${type} s`;
                    if (time < 36e11) return `${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}${type} m`;
                  
                    return `${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}${type} h`;
                }
                        },
                        title: {
                            text: "time per iteration"
                        },
                    },
                    xaxis: {
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }).render()
</script>

