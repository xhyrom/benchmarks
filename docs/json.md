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
| JavaScript /  bun 0.1.10 (x64-linux)  | 16.99/iter ms | 15.26 ms | 21.86 ms | 16.3 ms  | 16.04 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 35.15/iter ms | 31.56 ms | 47.28 ms | 33.06 ms | 41.93 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 58.17/iter ms | 54.33 ms | 72.45 ms | 56.19 ms | 58.35 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[19836739.440000005,19836739.440000005,19836739.440000005,19836739.440000005,19836739.440000005,27528597.06000001,27528597.06000001,30983495.43000002,29583497.209999993,29583497.209999993,29583497.209999993,27416016.39999999,27416016.39999999,28610603.340000007,28610603.340000007,28610603.340000007,31716996.36,31716996.36,28357880.819999993,35151011.040000014]},{"name":" bun 0.1.10 (x64-linux)","data":[10551086.750000002,10551086.750000002,10551086.750000002,10551086.750000002,10551086.750000002,11445822.820000002,11445822.820000002,14790699.120000003,14704942.319999995,14704942.319999995,14704942.319999995,11741030.969999995,11741030.969999995,14295910.130000003,14295910.130000003,14295910.130000003,15941419.870000001,15941419.870000001,12246924.409999996,16988012.180000003]},{"name":" node 18.8.0 (x64-linux)","data":[37754230.55999999,37754230.55999999,37754230.55999999,37754230.55999999,37754230.55999999,46612515.19000002,46612515.19000002,54576563.12000001,49058278.32,49058278.32,49058278.32,46334872.22000001,46334872.22000001,47528356.46,47528356.46,47528356.46,51862730.66999998,51862730.66999998,47437828.58000001,58169817.870000005]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 30.4/iter ms | 27.96 ms | 42.55 ms | 29.67 ms | 29.81 ms |


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
                    series: [{"name":"Python","data":[16412173.780000005,16412173.780000005,16412173.780000005,16412173.780000005,16412173.780000005,22631405.810000006,22631405.810000006,24987436.730000004,23529750.240000006,23529750.240000006,23529750.240000006,22712252.25000001,22712252.25000001,23175740.099999994,23175740.099999994,23175740.099999994,25168057.95,25168057.95,23057047.43,30401555.670000024]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75     | p99      | Min     | Max     |
| -------- | ------------ | ------- | -------- | ------- | ------- |
| Crystal  | 2.65/iter ms | 2.17 ms | 10.22 ms | 7.17 ms | 2.46 ms |


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
                    series: [{"name":"Crystal","data":[1401534.0099999995,1401534.0099999995,1401534.0099999995,1401534.0099999995,1401534.0099999995,2034036.1600000006,2034036.1600000006,2687989.2499999986,2176423.8699999996,2176423.8699999996,2176423.8699999996,2044092.6300000001,2044092.6300000001,2167135.2000000007,2167135.2000000007,2167135.2000000007,2258493.6799999997,2258493.6799999997,2011149.59,2650950.08]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75    | p99     | Min     | Max    |
| -------- | ------------ | ------ | ------- | ------- | ------ |
| Go       | 1.58/iter ms | 1.1 ms | 9.64 ms | 1.21 ms | 1.1 ms |


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
                    series: [{"name":"Go","data":[714144.7199999999,714144.7199999999,714144.7199999999,714144.7199999999,714144.7199999999,1029408.0000000003,1029408.0000000003,1439167.57,1183579.2199999995,1183579.2199999995,1183579.2199999995,1074730.6699999997,1074730.6699999997,1175944.9300000006,1175944.9300000006,1175944.9300000006,1326059.2100000004,1326059.2100000004,1040558.4100000004,1577043.8400000003]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75     | p99       | Min      | Max      |
| -------- | ------------ | ------- | --------- | -------- | -------- |
| Ruby     | 79.1/iter ms | 74.7 ms | 101.74 ms | 77.86 ms | 80.11 ms |


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
                    series: [{"name":"Ruby","data":[45765518.61000001,45765518.61000001,45765518.61000001,45765518.61000001,45765518.61000001,60305152.22999999,60305152.22999999,69984718.41000001,62724487.63,62724487.63,62724487.63,59925932.15000001,59925932.15000001,62043963.62,62043963.62,62043963.62,65951824.70000001,65951824.70000001,60969761.79000003,79096791.72999997]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 17.21/iter ms | 15.03 ms | 23.63 ms | 20.8 ms  | 18.57 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 35.27/iter ms | 31.99 ms | 44.94 ms | 32.78 ms | 34.91 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 58.88/iter ms | 55.04 ms | 77.73 ms | 60.7 ms  | 57.22 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[19309742.729999997,19309742.729999997,19309742.729999997,19309742.729999997,19309742.729999997,27581854.48000001,27581854.48000001,30426887.55999999,30343528.319999997,30343528.319999997,30343528.319999997,27485497.08999999,27485497.08999999,28458263.250000015,28458263.250000015,28458263.250000015,30974533.780000016,30974533.780000016,28516503.870000027,35273252.129999995]},{"name":" bun 0.1.10 (x64-linux)","data":[10075855.000000006,10075855.000000006,10075855.000000006,10075855.000000006,10075855.000000006,10987875.240000002,10987875.240000002,15522528.279999996,15043650.42,15043650.42,15043650.42,11144472.869999997,11144472.869999997,14390875.139999997,14390875.139999997,14390875.139999997,15971999.430000009,15971999.430000009,12569739.480000002,17210795.210000005]},{"name":" node 18.8.0 (x64-linux)","data":[37443784.75000001,37443784.75000001,37443784.75000001,37443784.75000001,37443784.75000001,46914433.32000001,46914433.32000001,50075091.45999999,48845201.71999999,48845201.71999999,48845201.71999999,46128652.22000001,46128652.22000001,47300271.01,47300271.01,47300271.01,50863257.44,50863257.44,47606452.63000002,58883358.020000026]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Python   | 30.2/iter ms | 28.64 ms | 34.13 ms | 31.64 ms | 30.19 ms |


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
                    series: [{"name":"Python","data":[16731761.849999992,16731761.849999992,16731761.849999992,16731761.849999992,16731761.849999992,23392080.960000005,23392080.960000005,23950662.960000005,23573559.27000001,23573559.27000001,23573559.27000001,22765927.650000002,22765927.650000002,23172055.069999993,23172055.069999993,23172055.069999993,24811077.970000006,24811077.970000006,23225820.200000003,30199861.509999994]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75     | p99    | Min     | Max     |
| -------- | ------------ | ------- | ------ | ------- | ------- |
| Crystal  | 2.36/iter ms | 1.98 ms | 3.9 ms | 2.23 ms | 2.15 ms |


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
                    series: [{"name":"Crystal","data":[1311131.6500000004,1311131.6500000004,1311131.6500000004,1311131.6500000004,1311131.6500000004,2016156.8800000004,2016156.8800000004,2425014.0099999993,2173984.5499999993,2173984.5499999993,2173984.5499999993,2044384.7499999993,2044384.7499999993,2108818.330000001,2108818.330000001,2108818.330000001,2214029.9299999997,2214029.9299999997,1943083.4799999995,2361004.2899999996]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average      | p75    | p99     | Min     | Max     |
| -------- | ------------ | ------ | ------- | ------- | ------- |
| Go       | 1.55/iter ms | 1.1 ms | 6.17 ms | 1.41 ms | 1.85 ms |


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
                    series: [{"name":"Go","data":[762039.1900000001,762039.1900000001,762039.1900000001,762039.1900000001,762039.1900000001,1029347.7700000003,1029347.7700000003,1410591.5400000007,1139330.5300000007,1139330.5300000007,1139330.5300000007,1048922.3000000003,1048922.3000000003,1147873.9600000007,1147873.9600000007,1147873.9600000007,1248638.9100000001,1248638.9100000001,1017059.5500000003,1548873.199999999]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 79.26/iter ms | 74.81 ms | 91.39 ms | 80.97 ms | 77.48 ms |


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
                    series: [{"name":"Ruby","data":[46296349.390000015,46296349.390000015,46296349.390000015,46296349.390000015,46296349.390000015,60260820.73999999,60260820.73999999,63277578.96000001,63474143.28000001,63474143.28000001,63474143.28000001,59794344.440000035,59794344.440000035,61624171.00999997,61624171.00999997,61624171.00999997,65130354.35999998,65130354.35999998,61183932.73999997,79264756.84]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

