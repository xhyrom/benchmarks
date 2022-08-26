<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                              | Average       | p75    | p99       | Min     | Max       |
| ------------------------------------- | ------------- | ------ | --------- | ------- | --------- |
| JavaScript /  node 18.8.0 (x64-linux) | 9.4/iter µs   | 3.7 µs | 299.41 µs | 6.7 µs  | 122.9 µs  |
| JavaScript /  bun 0.1.10 (x64-linux)  | 13.67/iter µs | 3.9 µs | 373.81 µs | 11.5 µs | 59.1 µs   |
| JavaScript /  deno 1.25.0 (x64-linux) | 22.87/iter µs | 7.3 µs | 291.11 µs | 17.4 µs | 282.71 µs |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[16451.96,16451.96,17595.26,17595.26,17595.26,20107.41,20107.41,16003.95,27769.16,27769.16,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,24391.99,18220.28,22869.75]},{"name":" bun 0.1.10 (x64-linux)","data":[10042.97,10042.97,9034.11,9034.11,9034.11,8523.11,8523.11,11498.96,11412.09,11412.09,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,20554.87,7858.06,13672.5]},{"name":" node 18.8.0 (x64-linux)","data":[7049.97,7049.97,7370.06,7370.06,7370.06,7350.14,7350.14,6940.96,9280.03,9280.03,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,10261.96,7495.11,9395.29]}],
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
                        categories: ["48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","Latest"],
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

| Language | Average       | p75     | p99   | Min     | Max     |
| -------- | ------------- | ------- | ----- | ------- | ------- |
| Python   | 25.58/iter µs | 24.4 µs | 33 µs | 25.7 µs | 27.6 µs |


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
                    series: [{"name":"Python","data":[20302.91,20302.91,21739.2,21739.2,21739.2,22804.37,22804.37,20277,26764.19,26764.19,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,29345.89,21206.26,25579.87]}],
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
                        categories: ["48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","Latest"],
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

