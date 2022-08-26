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

| Language                              | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 172.95/iter µs | 87.5 µs   | 2.14 ms | 112.2 µs  | 713.72 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 216.92/iter µs | 180.91 µs | 1.2 ms  | 222.51 µs | 348.11 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 834.2/iter µs  | 652.52 µs | 2.95 ms | 853.23 µs | 2.14 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[552714.55,552714.55,577783.38,577783.38,577783.38,602028.91,602028.91,552705.6,815532.77,815532.77,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,595812.2,834203.97]},{"name":" bun 0.1.10 (x64-linux)","data":[81004.74,81004.74,98359.01,98359.01,98359.01,100534.85,100534.85,85340.62,121582.76,121582.76,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,101906.23,172954.75]},{"name":" node 18.8.0 (x64-linux)","data":[190838.53,190838.53,184991.07,184991.07,184991.07,185356.39,185356.39,163732.29,232028.34,232028.34,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,178028.11,216920.34]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Products">SELECT ALL FROM Products</a>

#### <a name="sqlite-SELECT-ALL-FROM-Products-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 149.98/iter µs | 122.7 µs  | 695.62 µs | 137.6 µs  | 678.52 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 484.49/iter µs | 409.21 µs | 2.09 ms   | 451.92 µs | 1.73 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.14/iter ms   | 512.32 µs | 4.76 ms   | 1.21 ms   | 2.96 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[892547.58,892547.58,921261.27,921261.27,921261.27,947307.27,947307.27,912030.14,1130820.22,1130820.22,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,931251.41,1142318.24]},{"name":" bun 0.1.10 (x64-linux)","data":[116494.72,116494.72,122026.34,122026.34,122026.34,111237,111237,111249.07,163353.92,163353.92,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,116145.36,149978.96]},{"name":" node 18.8.0 (x64-linux)","data":[377931,377931,363251.07,363251.07,363251.07,366418.69,366418.69,355225.22,464257.57,464257.57,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,355539.41,484491.23]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Suppliers">SELECT ALL FROM Suppliers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Suppliers-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99     | Min       | Max       |
| ------------------------------------- | -------------- | --------- | ------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 128.05/iter µs | 77.1 µs   | 1.36 ms | 156.81 µs | 249.91 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 258.57/iter µs | 218.91 µs | 1.24 ms | 233.51 µs | 1.06 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.06/iter ms   | 647.42 µs | 5.13 ms | 1.05 ms   | 2.65 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[822400.72,822400.72,815882.11,815882.11,815882.11,849855.48,849855.48,816907.28,1064868.14,1064868.14,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,848747.52,1062483.62]},{"name":" bun 0.1.10 (x64-linux)","data":[68224.84,68224.84,69889.78,69889.78,69889.78,78894.42,78894.42,71936.65,97212.59,97212.59,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,72493.88,128053.32]},{"name":" node 18.8.0 (x64-linux)","data":[240256.34,240256.34,215357.44,215357.44,215357.44,205463.84,205463.84,206876.57,313372.88,313372.88,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,204073.45,258566.7]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Customers">SELECT ALL FROM Customers</a>

#### <a name="sqlite-SELECT-ALL-FROM-Customers-javascript">JavaScript</a>

| Language                              | Average       | p75       | p99     | Min       | Max       |
| ------------------------------------- | ------------- | --------- | ------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 284.1/iter µs | 202.01 µs | 4.69 ms | 221.81 µs | 896.33 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 648.3/iter µs | 571.92 µs | 1.66 ms | 608.82 µs | 1.58 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.86/iter ms  | 1.03 ms   | 6.75 ms | 2.5 ms    | 6.19 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[1519298.95,1519298.95,1565514.6,1565514.6,1565514.6,1553621.15,1553621.15,1538242.02,1994805.65,1994805.65,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,1579440.1,1860166.33]},{"name":" bun 0.1.10 (x64-linux)","data":[178121.67,178121.67,186668.92,186668.92,186668.92,190787.46,190787.46,184836.11,239748.39,239748.39,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,196312.39,284101.56]},{"name":" node 18.8.0 (x64-linux)","data":[566242.54,566242.54,590741.26,590741.26,590741.26,596676.78,596676.78,624803.95,652006.79,652006.79,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,518444.35,648297.67]}],
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

### <a name="sqlite-SELECT-ALL-FROM-Orders">SELECT ALL FROM Orders</a>

#### <a name="sqlite-SELECT-ALL-FROM-Orders-javascript">JavaScript</a>

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 44.5/iter ms   | 40.88 ms  | 57.35 ms  | 45.55 ms  | 56.57 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 130.72/iter ms | 119.75 ms | 162.64 ms | 132.34 ms | 158.27 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 272.96/iter ms | 258.83 ms | 397.68 ms | 276.38 ms | 302.26 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[229882140.73,229882140.73,217659346.15,217659346.15,217659346.15,220402227.72,220402227.72,233705182.27,274421581.02,274421581.02,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,216772782.44,272957692.79]},{"name":" bun 0.1.10 (x64-linux)","data":[32867966.45,32867966.45,34608823.55,34608823.55,34608823.55,35456924.18,35456924.18,33385718.34,43756224.82,43756224.82,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,35173516.46,44503135.6]},{"name":" node 18.8.0 (x64-linux)","data":[110517111.32,110517111.32,108916916.79,108916916.79,108916916.79,104116054.72,104116054.72,112137470.3,135278434.1,135278434.1,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,104399459.99,130722908.82]}],
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

