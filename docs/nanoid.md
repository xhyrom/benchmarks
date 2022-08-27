<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                              | Average       | p75    | p99      | Min     | Max      |
| ------------------------------------- | ------------- | ------ | -------- | ------- | -------- |
| JavaScript /  node 18.8.0 (x64-linux) | 6.89/iter µs  | 2.7 µs | 222.4 µs | 3.7 µs  | 101.6 µs |
| JavaScript /  bun 0.1.10 (x64-linux)  | 10.07/iter µs | 2.2 µs | 258.7 µs | 6.7 µs  | 131.9 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 16.1/iter µs  | 4.8 µs | 230.9 µs | 10.5 µs | 207.5 µs |


<div id="chart-36"></div>
<script>
new ApexCharts(document.querySelector('#chart-36'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[17595.26,20107.41,20107.41,16003.95,27769.16,27769.16,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,18220.28,22869.75,21153.13,19136.11,23472.36,16098.9]},{"name":" bun 0.1.10 (x64-linux)","data":[9034.11,8523.11,8523.11,11498.96,11412.09,11412.09,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,7858.06,13672.5,10515.03,11215.04,11009.16,10070.96]},{"name":" node 18.8.0 (x64-linux)","data":[7370.06,7350.14,7350.14,6940.96,9280.03,9280.03,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,7495.11,9395.29,8772.05,25600.16,10029.17,6889.92]}],
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
                        categories: ["d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","f12f7bb","Latest"],
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

### <a name="nanoid-python">Python</a>

| Language | Average      | p75     | p99     | Min     | Max     |
| -------- | ------------ | ------- | ------- | ------- | ------- |
| Python   | 20.9/iter µs | 19.8 µs | 59.3 µs | 20.7 µs | 24.4 µs |


<div id="chart-37"></div>
<script>
new ApexCharts(document.querySelector('#chart-37'), {
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
                    series: [{"name":"Python","data":[21739.2,22804.37,22804.37,20277,26764.19,26764.19,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,21206.26,25579.87,25694.15,25764.21,27410.4,20896.88]}],
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
                        categories: ["d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","f12f7bb","Latest"],
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

