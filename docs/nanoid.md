<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [Python](#nanoid-python)
- [JavaScript](#nanoid-javascript)

### <a name="nanoid-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 19.12/iter µs | 13.55 µs | 61.41 µs | 16.66 µs | 60.51 µs |


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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19121.48]}],
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
                        categories: ["2e4a95b","478dc78","e031084","4e7c8d4","75f0959","4a91113","e0e3f5e","84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7"],
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

### <a name="nanoid-javascript">JavaScript</a>

| Language                             | Average        | p75     | p99       | Min      | Max       |
| ------------------------------------ | -------------- | ------- | --------- | -------- | --------- |
| JavaScript / node 18.7.0 (x64-linux) | 11.07/iter µs  | 2.19 µs | 612.1 µs  | 4.07 µs  | 58.46 µs  |
| JavaScript / deno 1.25.0 (x64-linux) | 35.77/iter µs  | 6.71 µs | 460.18 µs | 32.48 µs | 315.17 µs |
| JavaScript / bun 0.1.10 (x64-linux)  | 162.09/iter µs | 2.9 µs  | 14.91 ms  | 12.63 µs | 145.57 µs |


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
                    series: [{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162089.52]},{"name":"JavaScript / node 18.7.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11074.62]},{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35771.53]}],
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
                        categories: ["2e4a95b","478dc78","e031084","4e7c8d4","75f0959","4a91113","e0e3f5e","84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7"],
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

