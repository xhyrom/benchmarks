<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                             | Average       | p75       | p99        | Min       | Max       | Latency   |
| ------------------------------------ | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 89,587.51/rps | 11,192.28 | 123,044.21 | 92,741.71 | 97,696.14 | 556.31 µs |
| JavaScript / deno 1.25.0 (x64-linux) | 51,899.22/rps | 6,196.67  | 56,459.88  | 55,625.89 | 56,206.72 | 962.01 µs |
| JavaScript / node 18.8.0 (x64-linux) | 47,117.01/rps | 5,632.79  | 49,730.91  | 48,644.81 | 49,415.36 | 1.06 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"JavaScript / deno 1.25.0 (x64-linux)","y":51899.219969842576},{"x":"JavaScript / bun 0.1.10 (x64-linux)","y":89587.50759400036},{"x":"JavaScript / node 18.8.0 (x64-linux)","y":47117.00582804073}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max     | Latency |
| -------- | ------------ | ------ | -------- | -------- | ------- | ------- |
| Python   | 6,298.63/rps | 814.12 | 7,466.14 | 7,134.48 | 7,440.2 | 8.2 ms  |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"Python","y":6298.629689979598}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 88,195.34/rps | 2,864.05 | 91,224.97 | 89,773.85 | 90,697.03 | 565.42 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"Crystal","y":88195.33898526822}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 64,727.65/rps | 5,529.28 | 74,820.83 | 67,521.91 | 73,632.46 | 770.93 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"Go","y":64727.65235556941}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75    | p99       | Min       | Max       | Latency |
| -------- | ------------ | ------ | --------- | --------- | --------- | ------- |
| Ruby     | 9,899.81/rps | 963.09 | 12,405.74 | 10,574.76 | 12,006.48 | 5.06 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"Ruby","y":9899.80525447736}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

### <a name="http-rust">Rust</a>

| Language | Average      | p75   | p99       | Min      | Max      | Latency |
| -------- | ------------ | ----- | --------- | -------- | -------- | ------- |
| Rust     | 7,641.32/rps | 738.8 | 10,150.15 | 8,052.51 | 9,714.71 | 6.55 ms |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {
                    chart: {
                        height: 320,
                        type: 'bar',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: [
                        {
                            name: "http",
                            data: [{"x":"Rust","y":7641.323776725359}]
                        }
                    ],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
                        },
                    },
                    dataLabels: {
                        formatter: function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                    },
                    xaxis: {
                        type: 'category',
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

