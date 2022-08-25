<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [encode](#base64-encode)
    - [Python](#base64-encode-python)
    - [Crystal](#base64-encode-crystal)
    - [JavaScript](#base64-encode-javascript)
    - [Ruby](#base64-encode-ruby)
    - [Go](#base64-encode-go)
- [decode](#base64-decode)
    - [Python](#base64-decode-python)
    - [Crystal](#base64-decode-crystal)
    - [JavaScript](#base64-decode-javascript)
    - [Ruby](#base64-decode-ruby)
    - [Go](#base64-decode-go)

### <a name="base64-encode">encode</a>

#### <a name="base64-encode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 17.78/iter ms | 15.09 ms | 41.63 ms | 15.64 ms | 15.93 ms |


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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17777471.609999996]}],
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

#### <a name="base64-encode-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max    |
| -------- | ------------ | --------- | ------- | ------- | ------ |
| Crystal  | 1.66/iter ms | 917.02 µs | 5.61 ms | 1.62 ms | 1.3 ms |


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
                    series: [{"name":"Crystal","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1661558.2300000004]}],
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

#### <a name="base64-encode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.87/iter ms  | 8.96 ms  | 11.64 ms | 9.63 ms  | 9.71 ms  |
| JavaScript / deno 1.25.0 (x64-linux) | 20.7/iter ms  | 17.14 ms | 41.15 ms | 30.91 ms | 24.53 ms |
| JavaScript / node 18.7.0 (x64-linux) | 40.72/iter ms | 36.93 ms | 70.24 ms | 38.35 ms | 37.56 ms |


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
                    series: [{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9871206.349999994]},{"name":"JavaScript / node 18.7.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40721055.45999999]},{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20700831.930000003]}],
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

#### <a name="base64-encode-ruby">Ruby</a>

| Language | Average      | p75      | p99      | Min      | Max      |
| -------- | ------------ | -------- | -------- | -------- | -------- |
| Ruby     | 47.1/iter ms | 41.07 ms | 85.11 ms | 42.69 ms | 48.67 ms |


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
                    series: [{"name":"Ruby","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47096775.75000001]}],
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

#### <a name="base64-encode-go">Go</a>

| Language | Average        | p75       | p99    | Min       | Max       |
| -------- | -------------- | --------- | ------ | --------- | --------- |
| Go       | 697.67/iter µs | 285.12 µs | 2.6 ms | 930.62 µs | 769.43 µs |


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
                    series: [{"name":"Go","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,697669.3899999999]}],
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

### <a name="base64-decode">decode</a>

#### <a name="base64-decode-python">Python</a>

| Language | Average       | p75      | p99      | Min      | Max      |
| -------- | ------------- | -------- | -------- | -------- | -------- |
| Python   | 15.96/iter ms | 14.83 ms | 20.67 ms | 15.32 ms | 15.16 ms |


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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15964066.740000008]}],
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

#### <a name="base64-decode-crystal">Crystal</a>

| Language | Average      | p75       | p99     | Min     | Max     |
| -------- | ------------ | --------- | ------- | ------- | ------- |
| Crystal  | 1.33/iter ms | 756.65 µs | 2.31 ms | 1.57 ms | 1.78 ms |


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
                    series: [{"name":"Crystal","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1326251.7400000005]}],
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

#### <a name="base64-decode-javascript">JavaScript</a>

| Language                             | Average       | p75      | p99      | Min      | Max      |
| ------------------------------------ | ------------- | -------- | -------- | -------- | -------- |
| JavaScript / bun 0.1.10 (x64-linux)  | 9.42/iter ms  | 7.89 ms  | 57.17 ms | 10.5 ms  | 8.44 ms  |
| JavaScript / deno 1.25.0 (x64-linux) | 18.55/iter ms | 17.21 ms | 22.78 ms | 18.75 ms | 18.29 ms |
| JavaScript / node 18.7.0 (x64-linux) | 40.27/iter ms | 36.23 ms | 59.22 ms | 38.76 ms | 36.6 ms  |


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
                    series: [{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9420616.389999999]},{"name":"JavaScript / node 18.7.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40271886.78]},{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18547007.54]}],
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

#### <a name="base64-decode-ruby">Ruby</a>

| Language | Average       | p75      | p99      | Min     | Max      |
| -------- | ------------- | -------- | -------- | ------- | -------- |
| Ruby     | 43.22/iter ms | 41.09 ms | 50.82 ms | 42.5 ms | 42.08 ms |


<div id="chart-25"></div>
<script>
new ApexCharts(document.querySelector('#chart-25'), {
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
                    series: [{"name":"Ruby","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43220993.88000001]}],
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

#### <a name="base64-decode-go">Go</a>

| Language | Average      | p75       | p99      | Min     | Max     |
| -------- | ------------ | --------- | -------- | ------- | ------- |
| Go       | 1.56/iter ms | 432.17 µs | 13.88 ms | 1.32 ms | 1.62 ms |


<div id="chart-26"></div>
<script>
new ApexCharts(document.querySelector('#chart-26'), {
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
                    series: [{"name":"Go","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1561479.7500000012]}],
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

