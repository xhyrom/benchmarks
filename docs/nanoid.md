<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                              | Average      | p75    | p99      | Min     | Max      |
| ------------------------------------- | ------------ | ------ | -------- | ------- | -------- |
| JavaScript /  node 18.8.0 (x64-linux) | 7.37/iter µs | 3.2 µs | 221.5 µs | 5.1 µs  | 106.8 µs |
| JavaScript /  bun 0.1.10 (x64-linux)  | 9.03/iter µs | 2.6 µs | 264.4 µs | 4.4 µs  | 122.7 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 17.6/iter µs | 5.8 µs | 262.7 µs | 12.7 µs | 203.6 µs |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,35771.53,35771.53,35771.53,35771.53,35771.53,16217.91,16217.91,19482.36,18069.56,18069.56,18069.56,16451.96,16451.96,17595.26]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,162089.52,162089.52,162089.52,162089.52,162089.52,7409.92,7409.92,8211.18,8078.05,8078.05,8078.05,10042.97,10042.97,9034.11]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,11074.62,11074.62,11074.62,11074.62,11074.62,6776.92,6776.92,7572.19,7563.04,7563.04,7563.04,7049.97,7049.97,7370.06]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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

| Language | Average       | p75     | p99     | Min     | Max     |
| -------- | ------------- | ------- | ------- | ------- | ------- |
| Python   | 21.74/iter µs | 20.7 µs | 54.5 µs | 21.5 µs | 25.5 µs |


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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,19121.48,19121.48,19121.48,19121.48,19121.48,20186.81,20186.81,24162.5,21398,21398,21398,20302.91,20302.91,21739.2]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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

