<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [SELECT ALL FROM Employees](#sqlite-SELECT-ALL-FROM-Employees)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Employees-javascript)
- [SELECT ALL FROM Products](#sqlite-SELECT-ALL-FROM-Products)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Products-javascript)
- [SELECT ALL FROM Suppliers](#sqlite-SELECT-ALL-FROM-Suppliers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Suppliers-javascript)
- [SELECT ALL FROM Customers](#sqlite-SELECT-ALL-FROM-Customers)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Customers-javascript)
- [SELECT ALL FROM Orders](#sqlite-SELECT-ALL-FROM-Orders)
    - [JavaScript](#sqlite-SELECT-ALL-FROM-Orders-javascript)

### <a name="sqlite-SELECT-ALL-FROM-Employees">SELECT ALL FROM Employees</a>

#### <a name="sqlite-SELECT-ALL-FROM-Employees-javascript">JavaScript</a>

| Language                              | Average        | p75      | p99      | Min     | Max       |
| ------------------------------------- | -------------- | -------- | -------- | ------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 83.89/iter µs  | 49.1 µs  | 438.6 µs | 72.8 µs | 431.5 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 184.79/iter µs | 140 µs   | 1.46 ms  | 179 µs  | 957.59 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 556.51/iter µs | 468.8 µs | 1.97 ms  | 564 µs  | 1.11 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[577783.38,602028.91,602028.91,552705.6,815532.77,815532.77,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,595812.2,834203.97,827496.18,733796.69,803324.95,556507.9]},{"name":" bun 0.1.10 (x64-linux)","data":[98359.01,100534.85,100534.85,85340.62,121582.76,121582.76,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,101906.23,172954.75,126010.67,134220.85,135092.33,83889.54]},{"name":" node 18.8.0 (x64-linux)","data":[184991.07,185356.39,185356.39,163732.29,232028.34,232028.34,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,178028.11,216920.34,239540.18,217327.43,214686.68,184794.94]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99      | Min      | Max      |
| ------------------------------------- | -------------- | --------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 104.87/iter µs | 92.8 µs   | 450.8 µs | 101.1 µs | 270.5 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 370.09/iter µs | 331.19 µs | 1.41 ms  | 347.4 µs | 1.19 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 902.49/iter µs | 504.3 µs  | 2.25 ms  | 922.9 µs | 1.63 ms  |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[921261.27,947307.27,947307.27,912030.14,1130820.22,1130820.22,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,931251.41,1142318.24,1118843.73,1148723.36,1156808.61,902485.86]},{"name":" bun 0.1.10 (x64-linux)","data":[122026.34,111237,111237,111249.07,163353.92,163353.92,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,116145.36,149978.96,154420.81,148766.99,144744.44,104869.49]},{"name":" node 18.8.0 (x64-linux)","data":[363251.07,366418.69,366418.69,355225.22,464257.57,464257.57,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,355539.41,484491.23,426186.2,432749.74,439307.33,370090.15]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99      | Min       | Max      |
| ------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 68.3/iter µs   | 56.3 µs   | 234.6 µs | 71.2 µs   | 135.6 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 206.07/iter µs | 180.6 µs  | 880.1 µs | 210.8 µs  | 229.9 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 811.96/iter µs | 724.39 µs | 2.04 ms  | 801.39 µs | 1.65 ms  |


<div id="chart-27"></div>
<script>
new ApexCharts(document.querySelector('#chart-27'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[815882.11,849855.48,849855.48,816907.28,1064868.14,1064868.14,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,848747.52,1062483.62,1032987.29,895774.57,1094486.72,811963.7]},{"name":" bun 0.1.10 (x64-linux)","data":[69889.78,78894.42,78894.42,71936.65,97212.59,97212.59,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,72493.88,128053.32,99450.47,103196.62,97083.71,68298.49]},{"name":" node 18.8.0 (x64-linux)","data":[215357.44,205463.84,205463.84,206876.57,313372.88,313372.88,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,204073.45,258566.7,242004.28,221366.07,327436.56,206070.27]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99      | Min      | Max      |
| ------------------------------------- | -------------- | --------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 176.7/iter µs  | 156.9 µs  | 533.9 µs | 168.3 µs | 513.1 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 525.51/iter µs | 481 µs    | 1.39 ms  | 513.9 µs | 1.28 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.51/iter ms   | 878.79 µs | 4.63 ms  | 2.14 ms  | 2.52 ms  |


<div id="chart-28"></div>
<script>
new ApexCharts(document.querySelector('#chart-28'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[1565514.6,1553621.15,1553621.15,1538242.02,1994805.65,1994805.65,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,1579440.1,1860166.33,1834820.33,1646548.53,1819336.55,1511279.52]},{"name":" bun 0.1.10 (x64-linux)","data":[186668.92,190787.46,190787.46,184836.11,239748.39,239748.39,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,196312.39,284101.56,229235.13,207687.36,235526.86,176695.01]},{"name":" node 18.8.0 (x64-linux)","data":[590741.26,596676.78,596676.78,624803.95,652006.79,652006.79,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,518444.35,648297.67,605361.06,547074.12,658296.42,525511.05]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 33.16/iter ms  | 32.21 ms  | 36.79 ms  | 32.96 ms  | 36.4 ms   |
| JavaScript /  node 18.8.0 (x64-linux) | 103.83/iter ms | 96.93 ms  | 125.58 ms | 102.99 ms | 124.64 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 241.29/iter ms | 234.03 ms | 334.29 ms | 240.5 ms  | 325.48 ms |


<div id="chart-29"></div>
<script>
new ApexCharts(document.querySelector('#chart-29'), {
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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[217659346.15,220402227.72,220402227.72,233705182.27,274421581.02,274421581.02,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,216772782.44,272957692.79,257191919.4,261027285.58,266545850.71,241292824.6]},{"name":" bun 0.1.10 (x64-linux)","data":[34608823.55,35456924.18,35456924.18,33385718.34,43756224.82,43756224.82,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,35173516.46,44503135.6,42728658.12,42347201.72,42138502.45,33157866.38]},{"name":" node 18.8.0 (x64-linux)","data":[108916916.79,104116054.72,104116054.72,112137470.3,135278434.1,135278434.1,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,104399459.99,130722908.82,123144174,110003172.19,121539185.47,103828503.12]}],
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

