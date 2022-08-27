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

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 97.32/iter µs  | 50.7 µs   | 596.31 µs | 62.6 µs   | 594.81 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 182.16/iter µs | 150.9 µs  | 1.03 ms   | 177.5 µs  | 238.7 µs  |
| JavaScript /  deno 1.25.0 (x64-linux) | 575.42/iter µs | 484.31 µs | 1.99 ms   | 593.11 µs | 1.14 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[577783.38,577783.38,602028.91,602028.91,552705.6,815532.77,815532.77,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,595812.2,834203.97,827496.18,733796.69,575422.86]},{"name":" bun 0.1.10 (x64-linux)","data":[98359.01,98359.01,100534.85,100534.85,85340.62,121582.76,121582.76,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,101906.23,172954.75,126010.67,134220.85,97324.37]},{"name":" node 18.8.0 (x64-linux)","data":[184991.07,184991.07,185356.39,185356.39,163732.29,232028.34,232028.34,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,178028.11,216920.34,239540.18,217327.43,182160.48]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 112.74/iter µs | 96 µs     | 665.91 µs | 104 µs    | 456.21 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 347.62/iter µs | 330.5 µs  | 1.06 ms   | 346 µs    | 371.31 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 903.05/iter µs | 500.81 µs | 2.17 ms   | 930.31 µs | 1.67 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[921261.27,921261.27,947307.27,947307.27,912030.14,1130820.22,1130820.22,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,931251.41,1142318.24,1118843.73,1148723.36,903051.52]},{"name":" bun 0.1.10 (x64-linux)","data":[122026.34,122026.34,111237,111237,111249.07,163353.92,163353.92,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,116145.36,149978.96,154420.81,148766.99,112737.57]},{"name":" node 18.8.0 (x64-linux)","data":[363251.07,363251.07,366418.69,366418.69,355225.22,464257.57,464257.57,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,355539.41,484491.23,426186.2,432749.74,347621.91]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99      | Min       | Max       |
| ------------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 66.57/iter µs  | 57.9 µs   | 294.7 µs | 63.6 µs   | 142.2 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 224.97/iter µs | 196.3 µs  | 1.48 ms  | 208.9 µs  | 991.41 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 802.14/iter µs | 437.51 µs | 2.05 ms  | 825.91 µs | 1.74 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[815882.11,815882.11,849855.48,849855.48,816907.28,1064868.14,1064868.14,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,848747.52,1062483.62,1032987.29,895774.57,802139.1]},{"name":" bun 0.1.10 (x64-linux)","data":[69889.78,69889.78,78894.42,78894.42,71936.65,97212.59,97212.59,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,72493.88,128053.32,99450.47,103196.62,66567.88]},{"name":" node 18.8.0 (x64-linux)","data":[215357.44,215357.44,205463.84,205463.84,206876.57,313372.88,313372.88,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,204073.45,258566.7,242004.28,221366.07,224966.11]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 184.71/iter µs | 163.2 µs  | 735.41 µs | 172.7 µs  | 639.71 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 569.6/iter µs  | 536.11 µs | 1.39 ms   | 571.11 µs | 1.29 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.51/iter ms   | 897.91 µs | 4.75 ms   | 2.05 ms   | 2.57 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[1565514.6,1565514.6,1553621.15,1553621.15,1538242.02,1994805.65,1994805.65,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,1579440.1,1860166.33,1834820.33,1646548.53,1508786.49]},{"name":" bun 0.1.10 (x64-linux)","data":[186668.92,186668.92,190787.46,190787.46,184836.11,239748.39,239748.39,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,196312.39,284101.56,229235.13,207687.36,184712.57]},{"name":" node 18.8.0 (x64-linux)","data":[590741.26,590741.26,596676.78,596676.78,624803.95,652006.79,652006.79,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,518444.35,648297.67,605361.06,547074.12,569600.9]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 34.86/iter ms  | 33.94 ms  | 39.21 ms  | 34.55 ms  | 38.47 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 100.31/iter ms | 92.45 ms  | 126.49 ms | 99.83 ms  | 125.72 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 216.46/iter ms | 208.75 ms | 311.08 ms | 216.97 ms | 244.47 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[217659346.15,217659346.15,220402227.72,220402227.72,233705182.27,274421581.02,274421581.02,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,216772782.44,272957692.79,257191919.4,261027285.58,216455746.45]},{"name":" bun 0.1.10 (x64-linux)","data":[34608823.55,34608823.55,35456924.18,35456924.18,33385718.34,43756224.82,43756224.82,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,35173516.46,44503135.6,42728658.12,42347201.72,34856366.3]},{"name":" node 18.8.0 (x64-linux)","data":[108916916.79,108916916.79,104116054.72,104116054.72,112137470.3,135278434.1,135278434.1,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,104399459.99,130722908.82,123144174,110003172.19,100311111.54]}],
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

