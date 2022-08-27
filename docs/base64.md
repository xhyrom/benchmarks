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
| JavaScript /  bun 0.1.10 (x64-linux)  | 16.19/iter ms | 14.52 ms | 18.56 ms | 15.97 ms | 16.74 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 30.17/iter ms | 28.59 ms | 33.68 ms | 29.98 ms | 29.72 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 49.36/iter ms | 45.73 ms | 53.46 ms | 50.46 ms | 50.42 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[28481525.780000005,28481525.780000005,31457619.520000007,31457619.520000007,28973769.750000004,35421577.830000006,35421577.830000006,38714651.62000002,38714651.62000002,38714651.62000002,38714651.62000002,38714651.62000002,38714651.62000002,38714651.62000002,38714651.62000002,30006712.79,35684672.49000001,32822353.19,33360840.820000008,30174217.17]},{"name":" bun 0.1.10 (x64-linux)","data":[13306472.630000003,13306472.630000003,16251442.21,16251442.21,13320101.650000004,17099524.400000006,17099524.400000006,20826257.449999996,20826257.449999996,20826257.449999996,20826257.449999996,20826257.449999996,20826257.449999996,20826257.449999996,20826257.449999996,16097828.099999996,18099998.380000003,16161447.290000005,16713236.830000002,16186583.640000002]},{"name":" node 18.8.0 (x64-linux)","data":[47422254.349999994,47422254.349999994,51694167.489999995,51694167.489999995,48286124.20000001,58244728.90000001,58244728.90000001,65892142.419999994,65892142.419999994,65892142.419999994,65892142.419999994,65892142.419999994,65892142.419999994,65892142.419999994,65892142.419999994,50493730.96999999,58808279.34999997,54258691.88,51793929.19000003,49360161.03000001]}],
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

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 24.61/iter ms | 23.31 ms | 30.57 ms | 25.09 ms | 24.37 ms |


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
                    series: [{"name":"Python","data":[21789264.47,21789264.47,23549596.890000004,23549596.890000004,22150792.729999997,28411107.12000001,28411107.12000001,32495874.680000007,32495874.680000007,32495874.680000007,32495874.680000007,32495874.680000007,32495874.680000007,32495874.680000007,32495874.680000007,22878552.189999994,28664317.58,27272687.809999995,24871891.589999992,24609012.920000013]}],
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

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Crystal  | 2.15/iter ms | 1.92 ms | 2.81 ms | 1.98 ms | 1.95 ms |


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
                    series: [{"name":"Crystal","data":[2134909.4000000013,2134909.4000000013,2303739.78,2303739.78,2019487.67,2491424.06,2491424.06,2832257.500000002,2832257.500000002,2832257.500000002,2832257.500000002,2832257.500000002,2832257.500000002,2832257.500000002,2832257.500000002,2284885.84,2800538.63,2290966.240000001,2395586.1799999992,2152720.2199999997]}],
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

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99     | Min     | Max       |
| -------- | ------------ | --------- | ------- | ------- | --------- |
| Go       | 1.04/iter ms | 903.42 µs | 1.54 ms | 1.04 ms | 980.72 µs |


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
                    series: [{"name":"Go","data":[1063493.69,1063493.69,1158203.9199999997,1158203.9199999997,952887.6299999995,1281437.7999999998,1281437.7999999998,1294967.219999999,1294967.219999999,1294967.219999999,1294967.219999999,1294967.219999999,1294967.219999999,1294967.219999999,1294967.219999999,1035194.3100000002,1641569.55,1144970.61,1296735.1600000004,1041123.6099999994]}],
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

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Ruby     | 62.06/iter ms | 58.64 ms | 65.29 ms | 62.52 ms | 58.64 ms |


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
                    series: [{"name":"Ruby","data":[56730626.65,56730626.65,60444934.30999997,60444934.30999997,56506041.97000003,72290471.72000003,72290471.72000003,79750509.58000001,79750509.58000001,79750509.58000001,79750509.58000001,79750509.58000001,79750509.58000001,79750509.58000001,79750509.58000001,58828928.160000026,74174179.00999995,68918806.22,63543053.72000002,62058560.82999997]}],
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

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                              | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------- | ------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 15.94/iter ms | 13.8 ms  | 18.72 ms | 14 ms    | 15.72 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 31.59/iter ms | 29.6 ms  | 34.5 ms  | 30.41 ms | 32.28 ms |
| JavaScript /  node 18.8.0 (x64-linux) | 52.55/iter ms | 50.02 ms | 63.08 ms | 52.61 ms | 52.01 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[27808119.24,27808119.24,31737669.600000013,31737669.600000013,28945858.579999983,35565650.54000001,35565650.54000001,38385795.82,38385795.82,38385795.82,38385795.82,38385795.82,38385795.82,38385795.82,38385795.82,29460598.78,35848580.29,31994285.350000013,29348286.78000001,31589615.340000007]},{"name":" bun 0.1.10 (x64-linux)","data":[13877875.950000009,13877875.950000009,16359029.790000003,16359029.790000003,13174755.580000004,17775333.380000003,17775333.380000003,20875503.310000006,20875503.310000006,20875503.310000006,20875503.310000006,20875503.310000006,20875503.310000006,20875503.310000006,20875503.310000006,16389675.999999998,18873968.849999994,16433764.400000006,15255166.990000006,15938473.050000003]},{"name":" node 18.8.0 (x64-linux)","data":[46656163.63,46656163.63,51718611.149999976,51718611.149999976,48105013.39000002,58888345.120000005,58888345.120000005,63778312.610000014,63778312.610000014,63778312.610000014,63778312.610000014,63778312.610000014,63778312.610000014,63778312.610000014,63778312.610000014,48639437.50999999,59811421.46000001,54835922.110000014,51809491.219999984,52553134.15000001]}],
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

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75   | p99      | Min      | Max      |
| -------- | ------------- | ----- | -------- | -------- | -------- |
| Python   | 23.98/iter ms | 23 ms | 29.76 ms | 24.69 ms | 23.65 ms |


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
                    series: [{"name":"Python","data":[21664448.9,21664448.9,23812938.710000005,23812938.710000005,22371122.769999996,28356775.75,28356775.75,31848128.929999996,31848128.929999996,31848128.929999996,31848128.929999996,31848128.929999996,31848128.929999996,31848128.929999996,31848128.929999996,22039520.339999992,28518947.299999997,26391699.359999996,25646898.930000007,23977192.44999999]}],
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

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average     | p75     | p99     | Min     | Max     |
| -------- | ----------- | ------- | ------- | ------- | ------- |
| Crystal  | 2.2/iter ms | 1.94 ms | 2.84 ms | 2.43 ms | 2.08 ms |


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
                    series: [{"name":"Crystal","data":[2033179.4900000014,2033179.4900000014,2210549.7200000007,2210549.7200000007,1965546.7800000003,2689207.899999999,2689207.899999999,3032221.340000001,3032221.340000001,3032221.340000001,3032221.340000001,3032221.340000001,3032221.340000001,3032221.340000001,3032221.340000001,2163217.3699999996,2657906.21,2260808.22,2206034.6500000004,2202323.650000002]}],
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

#### <a name="base64-encode-go">Go</a>

| Language | Average      | p75       | p99    | Min     | Max     |
| -------- | ------------ | --------- | ------ | ------- | ------- |
| Go       | 1.13/iter ms | 935.97 µs | 2.5 ms | 1.07 ms | 1.15 ms |


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
                    series: [{"name":"Go","data":[1046715.9800000001,1046715.9800000001,1229676.8400000003,1229676.8400000003,951719.5899999995,1457393.1200000006,1457393.1200000006,1369357.8099999998,1369357.8099999998,1369357.8099999998,1369357.8099999998,1369357.8099999998,1369357.8099999998,1369357.8099999998,1369357.8099999998,1044935.0399999999,1320278.59,1237468.1399999994,1169358.2099999997,1128846.8200000003]}],
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

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average       | p75     | p99      | Min      | Max      |
| -------- | ------------- | ------- | -------- | -------- | -------- |
| Ruby     | 59.98/iter ms | 58.6 ms | 64.72 ms | 59.35 ms | 60.26 ms |


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
                    series: [{"name":"Ruby","data":[55826480.04,55826480.04,60392016.27999998,60392016.27999998,56425625.38999996,72339815.11999999,72339815.11999999,78778054.14000002,78778054.14000002,78778054.14000002,78778054.14000002,78778054.14000002,78778054.14000002,78778054.14000002,78778054.14000002,58000191.33,73393562.93000002,68397700.75999999,62907739.21000002,59978503.95000002]}],
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

