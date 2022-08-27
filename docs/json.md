<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
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

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 14.31/iter ms | 13 ms    | 16.27 ms | 14.59 ms | 14.04 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 28.52/iter ms | 27.1 ms  | 31.47 ms | 27.12 ms | 29.53 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 47.65/iter ms | 45.54 ms | 50.63 ms | 47.23 ms | 46.66 ms |


<div id="chart-10"></div>
<script>
new ApexCharts(document.querySelector('#chart-10'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[28610603.340000007,28610603.340000007,31716996.36,31716996.36,28357880.819999993,35151011.040000014,35151011.040000014,37681628.730000004,37681628.730000004,37681628.730000004,37681628.730000004,37681628.730000004,37681628.730000004,37681628.730000004,37681628.730000004,29518318.09,37548603.83000002,32722856.33000001,30121542.35999999,28516616.509999994]},{"name":" bun 0.1.10 (x64-linux)","data":[14295910.130000003,14295910.130000003,15941419.870000001,15941419.870000001,12246924.409999996,16988012.180000003,16988012.180000003,19064541.939999998,19064541.939999998,19064541.939999998,19064541.939999998,19064541.939999998,19064541.939999998,19064541.939999998,19064541.939999998,14987155.580000002,18362747.959999997,15619228.230000002,15106505.93,14305661.27]},{"name":" node 18.8.0 (x64-linux)","data":[47528356.46,47528356.46,51862730.66999998,51862730.66999998,47437828.58000001,58169817.870000005,58169817.870000005,62281744.95999998,62281744.95999998,62281744.95999998,62281744.95999998,62281744.95999998,62281744.95999998,62281744.95999998,62281744.95999998,49326760.079999976,58667546.91999999,55738105.46000004,50166582.38000002,47646932.6]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-parse-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 22.98/iter ms | 22.55 ms | 23.81 ms | 22.71 ms | 22.95 ms |


<div id="chart-11"></div>
<script>
new ApexCharts(document.querySelector('#chart-11'), {
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
                    series: [{"name":"Python","data":[23175740.099999994,23175740.099999994,25168057.95,25168057.95,23057047.43,30401555.670000024,30401555.670000024,33425406.269999985,33425406.269999985,33425406.269999985,33425406.269999985,33425406.269999985,33425406.269999985,33425406.269999985,33425406.269999985,23727016.389999993,30971021.880000003,28278426.88,26211378.060000002,22983180.399999995]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-parse-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.17/iter ms | 1.95 ms | 2.79 ms | 2.01 ms | 1.98 ms |


<div id="chart-12"></div>
<script>
new ApexCharts(document.querySelector('#chart-12'), {
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
                    series: [{"name":"Crystal","data":[2167135.2000000007,2167135.2000000007,2258493.6799999997,2258493.6799999997,2011149.59,2650950.08,2650950.08,2863091.420000001,2863091.420000001,2863091.420000001,2863091.420000001,2863091.420000001,2863091.420000001,2863091.420000001,2863091.420000001,2212935.66,2978656.7999999993,2482333.6399999987,2306720.480000001,2172557.0000000014]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-parse-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Go       | 1.16/iter ms | 957.66 µs | 1.87 ms | 1.42 ms | 1.21 ms |


<div id="chart-13"></div>
<script>
new ApexCharts(document.querySelector('#chart-13'), {
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
                    series: [{"name":"Go","data":[1175944.9300000006,1175944.9300000006,1326059.2100000004,1326059.2100000004,1040558.4100000004,1577043.8400000003,1577043.8400000003,1624389.1799999997,1624389.1799999997,1624389.1799999997,1624389.1799999997,1624389.1799999997,1624389.1799999997,1624389.1799999997,1624389.1799999997,1184213.709999999,2029017.2000000002,1248942.4100000004,1244860.3800000004,1157462.4900000005]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-parse-ruby">Ruby</a>

| Language | Average       | p75     | p99   | Min      | Max      |
| -------- | ------------- | ------- | ----- | -------- | -------- |
| Ruby     | 61.78/iter ms | 60.5 ms | 63 ms | 61.02 ms | 62.22 ms |


<div id="chart-14"></div>
<script>
new ApexCharts(document.querySelector('#chart-14'), {
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
                    series: [{"name":"Ruby","data":[62043963.62,62043963.62,65951824.70000001,65951824.70000001,60969761.79000003,79096791.72999997,79096791.72999997,85482609.95000006,85482609.95000006,85482609.95000006,85482609.95000006,85482609.95000006,85482609.95000006,85482609.95000006,85482609.95000006,62550415.69000001,79447486.69000001,73853222.24000001,67299165.84000002,61778569.99999998]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

### <a name="json-stringify">stringify</a>

#### <a name="json-stringify-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 14.49/iter ms | 13 ms    | 16.28 ms | 14.19 ms | 14.34 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 28.91/iter ms | 27.09 ms | 32.59 ms | 28.39 ms | 28.75 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 47.9/iter ms  | 45.94 ms | 52.21 ms | 47.97 ms | 47.98 ms |


<div id="chart-15"></div>
<script>
new ApexCharts(document.querySelector('#chart-15'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[28458263.250000015,28458263.250000015,30974533.780000016,30974533.780000016,28516503.870000027,35273252.129999995,35273252.129999995,38396758.06,38396758.06,38396758.06,38396758.06,38396758.06,38396758.06,38396758.06,38396758.06,29393733.440000005,35852733.970000006,32831315.15,29875184.22,28908635.320000004]},{"name":" bun 0.1.10 (x64-linux)","data":[14390875.139999997,14390875.139999997,15971999.430000009,15971999.430000009,12569739.480000002,17210795.210000005,17210795.210000005,19993534.529999994,19993534.529999994,19993534.529999994,19993534.529999994,19993534.529999994,19993534.529999994,19993534.529999994,19993534.529999994,14871065.089999992,17738981.280000005,16000012.32,14804741.809999997,14490841.990000008]},{"name":" node 18.8.0 (x64-linux)","data":[47300271.01,47300271.01,50863257.44,50863257.44,47606452.63000002,58883358.020000026,58883358.020000026,63958000.29000004,63958000.29000004,63958000.29000004,63958000.29000004,63958000.29000004,63958000.29000004,63958000.29000004,63958000.29000004,48453545.11999998,58300919.2,54907884.20000001,49178180.56000001,47896446.910000004]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-stringify-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 23.22/iter ms | 22.61 ms | 24.05 ms | 22.79 ms | 22.86 ms |


<div id="chart-16"></div>
<script>
new ApexCharts(document.querySelector('#chart-16'), {
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
                    series: [{"name":"Python","data":[23172055.069999993,23172055.069999993,24811077.970000006,24811077.970000006,23225820.200000003,30199861.509999994,30199861.509999994,32649509.349999987,32649509.349999987,32649509.349999987,32649509.349999987,32649509.349999987,32649509.349999987,32649509.349999987,32649509.349999987,23566983.960000005,32821636.06,28279208.950000003,25211508.00999999,23220252.400000002]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-stringify-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.16/iter ms | 1.93 ms | 2.65 ms | 1.99 ms | 2.07 ms |


<div id="chart-17"></div>
<script>
new ApexCharts(document.querySelector('#chart-17'), {
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
                    series: [{"name":"Crystal","data":[2108818.330000001,2108818.330000001,2214029.9299999997,2214029.9299999997,1943083.4799999995,2361004.2899999996,2361004.2899999996,2731032.2100000004,2731032.2100000004,2731032.2100000004,2731032.2100000004,2731032.2100000004,2731032.2100000004,2731032.2100000004,2731032.2100000004,2208269.730000001,2727977.4600000004,2518626.8500000006,2118662.08,2162303.099999999]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-stringify-go">Go</a>

| Language | Average      | p75  | p99     | Min     | Max     |
| -------- | ------------ | ---- | ------- | ------- | ------- |
| Go       | 1.15/iter ms | 1 ms | 1.79 ms | 1.09 ms | 1.14 ms |


<div id="chart-18"></div>
<script>
new ApexCharts(document.querySelector('#chart-18'), {
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
                    series: [{"name":"Go","data":[1147873.9600000007,1147873.9600000007,1248638.9100000001,1248638.9100000001,1017059.5500000003,1548873.199999999,1548873.199999999,1804508.9400000004,1804508.9400000004,1804508.9400000004,1804508.9400000004,1804508.9400000004,1804508.9400000004,1804508.9400000004,1804508.9400000004,1177079.3699999999,1750314.6000000006,1487643.5399999998,1558974.3999999994,1151811.1800000009]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

#### <a name="json-stringify-ruby">Ruby</a>

| Language | Average       | p75      | p99     | Min     | Max      |
| -------- | ------------- | -------- | ------- | ------- | -------- |
| Ruby     | 61.95/iter ms | 60.58 ms | 63.5 ms | 61.1 ms | 62.05 ms |


<div id="chart-19"></div>
<script>
new ApexCharts(document.querySelector('#chart-19'), {
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
                    series: [{"name":"Ruby","data":[61624171.00999997,61624171.00999997,65130354.35999998,65130354.35999998,61183932.73999997,79264756.84,79264756.84,85242737.7,85242737.7,85242737.7,85242737.7,85242737.7,85242737.7,85242737.7,85242737.7,62517243.13999997,80623749.44000001,74240351.94000004,66074549.36000003,61947716.470000006]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

