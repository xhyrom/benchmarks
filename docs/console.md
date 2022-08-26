<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#console-javascript)
- [Python](#console-python)
- [Crystal](#console-crystal)
- [Go](#console-go)
- [Ruby](#console-ruby)

### <a name="console-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 13.05/iter ms | 12.3 ms  | 14.81 ms | 13.15 ms | 13.35 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 29.11/iter ms | 28.35 ms | 32.52 ms | 29.3 ms  | 28.92 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 49.7/iter ms  | 48.84 ms | 52.75 ms | 49.84 ms | 49.39 ms |


<div id="chart-20"></div>
<script>
new ApexCharts(document.querySelector('#chart-20'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,18852604.19,18852604.19,18852604.19,18852604.19,18852604.19,27898880.670000006,27898880.670000006,29941642.879999988,29295502.639999997,29295502.639999997,29295502.639999997,29716461.89000002,29716461.89000002,28332143.289999995,28332143.289999995,28332143.289999995,32910340.21,32910340.21,29110204.980000004]},{"name":" bun 0.1.10 (x64-linux)","data":[0,11845315.979999999,11845315.979999999,11845315.979999999,11845315.979999999,11845315.979999999,11288322.059999999,11288322.059999999,14357144.240000006,14048492.540000005,14048492.540000005,14048492.540000005,13240570.069999997,13240570.069999997,13133287.349999992,13133287.349999992,13133287.349999992,16050769.859999998,16050769.859999998,13047008.259999998]},{"name":" node 18.8.0 (x64-linux)","data":[0,39885454.85000001,39885454.85000001,39885454.85000001,39885454.85000001,39885454.85000001,48971145.81000001,48971145.81000001,54319329.96,51268475.85000001,51268475.85000001,51268475.85000001,50590827.34,50590827.34,48219856.309999995,48219856.309999995,48219856.309999995,55179976.24000001,55179976.24000001,49695079.320000015]}],
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

### <a name="console-python">Python</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Python   | 18.83/iter ms | 18.46 ms | 19.35 ms | 18.7 ms | 18.74 ms |


<div id="chart-21"></div>
<script>
new ApexCharts(document.querySelector('#chart-21'), {
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
                    series: [{"name":"Python","data":[0,11807321.449999997,11807321.449999997,11807321.449999997,11807321.449999997,11807321.449999997,18493435.829999994,18493435.829999994,19692314.200000007,19082638.069999993,19082638.069999993,19082638.069999993,19236585.309999995,19236585.309999995,18464367.480000004,18464367.480000004,18464367.480000004,20476787.600000005,20476787.600000005,18826247.249999996]}],
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

### <a name="console-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 1.97/iter ms | 1.76 ms | 2.46 ms | 1.88 ms | 1.79 ms |


<div id="chart-22"></div>
<script>
new ApexCharts(document.querySelector('#chart-22'), {
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
                    series: [{"name":"Crystal","data":[0,2047625.1699999992,2047625.1699999992,2047625.1699999992,2047625.1699999992,2047625.1699999992,2024526.1199999999,2024526.1199999999,2419588.17,2140188.370000001,2140188.370000001,2140188.370000001,2076589.8599999999,2076589.8599999999,2205933.8700000006,2205933.8700000006,2205933.8700000006,2437001.2600000002,2437001.2600000002,1971642.24]}],
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

### <a name="console-go">Go</a>

| Language | Average        | p75       | p99     | Min       | Max       |
| -------- | -------------- | --------- | ------- | --------- | --------- |
| Go       | 997.04/iter µs | 855.73 µs | 1.99 ms | 896.63 µs | 890.93 µs |


<div id="chart-23"></div>
<script>
new ApexCharts(document.querySelector('#chart-23'), {
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
                    series: [{"name":"Go","data":[0,120386.69120000032,120386.69120000032,120386.69120000032,120386.69120000032,120386.69120000032,969577.2699999997,969577.2699999997,1163506.1600000004,1083107.95,1083107.95,1083107.95,1020122.08,1020122.08,1055854.5700000005,1055854.5700000005,1055854.5700000005,1293535.9400000009,1293535.9400000009,997041.9899999999]}],
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

### <a name="console-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 55.61/iter ms | 54.96 ms | 67.28 ms | 55.66 ms | 55.49 ms |


<div id="chart-24"></div>
<script>
new ApexCharts(document.querySelector('#chart-24'), {
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
                    series: [{"name":"Ruby","data":[0,43771880.18999998,43771880.18999998,43771880.18999998,43771880.18999998,43771880.18999998,54699737.690000005,54699737.690000005,59170095.35,57054443.91,57054443.91,57054443.91,56556194.809999995,56556194.809999995,55520521.24999999,55520521.24999999,55520521.24999999,60228188.97,60228188.97,55607722.03000001]}],
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

