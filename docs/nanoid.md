<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#nanoid-javascript)
- [Python](#nanoid-python)

### <a name="nanoid-javascript">JavaScript</a>

| Language                              | Average       | p75    | p99      | Min     | Max       |
| ------------------------------------- | ------------- | ------ | -------- | ------- | --------- |
| JavaScript /  node 18.8.0 (x64-linux) | 7.56/iter µs  | 3 µs   | 231.4 µs | 5 µs    | 100.1 µs  |
| JavaScript /  bun 0.1.10 (x64-linux)  | 8.08/iter µs  | 2.5 µs | 275.9 µs | 4.7 µs  | 47.6 µs   |
| JavaScript /  deno 1.25.0 (x64-linux) | 18.07/iter µs | 5.6 µs | 256.1 µs | 12.6 µs | 240.29 µs |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,35771.53,35771.53,35771.53,35771.53,35771.53,16217.91,16217.91,19482.36,18069.56]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,162089.52,162089.52,162089.52,162089.52,162089.52,7409.92,7409.92,8211.18,8078.05]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,11074.62,11074.62,11074.62,11074.62,11074.62,6776.92,6776.92,7572.19,7563.04]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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
| Python   | 21.4/iter µs | 20.7 µs | 30.3 µs | 21.5 µs | 23.7 µs |


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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,0,0,0,0,0,19121.48,19121.48,19121.48,19121.48,19121.48,20186.81,20186.81,24162.5,21398]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

