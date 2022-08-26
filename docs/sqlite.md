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
| JavaScript /  bun 0.1.10 (x64-linux)  | 101.91/iter µs | 51.7 µs   | 629.61 µs | 79.2 µs   | 616.71 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 178.03/iter µs | 149.3 µs  | 1.1 ms    | 171.8 µs  | 227.4 µs  |
| JavaScript /  deno 1.25.0 (x64-linux) | 595.81/iter µs | 502.81 µs | 2.14 ms   | 604.41 µs | 1.23 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[591898.32,552714.55,552714.55,577783.38,577783.38,577783.38,602028.91,602028.91,552705.6,815532.77,815532.77,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,875819.37,595812.2]},{"name":" bun 0.1.10 (x64-linux)","data":[110639.78,81004.74,81004.74,98359.01,98359.01,98359.01,100534.85,100534.85,85340.62,121582.76,121582.76,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,142675.07,101906.23]},{"name":" node 18.8.0 (x64-linux)","data":[183746.7,190838.53,190838.53,184991.07,184991.07,184991.07,185356.39,185356.39,163732.29,232028.34,232028.34,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,248774.54,178028.11]}],
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
                        categories: ["dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 116.15/iter µs | 97.1 µs   | 648.61 µs | 106.4 µs  | 644.51 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 355.54/iter µs | 333.7 µs  | 1.13 ms   | 352.3 µs  | 382.9 µs  |
| JavaScript /  deno 1.25.0 (x64-linux) | 931.25/iter µs | 545.81 µs | 2.23 ms   | 922.11 µs | 1.6 ms    |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[889457.16,892547.58,892547.58,921261.27,921261.27,921261.27,947307.27,947307.27,912030.14,1130820.22,1130820.22,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,1256920.24,931251.41]},{"name":" bun 0.1.10 (x64-linux)","data":[113423.57,116494.72,116494.72,122026.34,122026.34,122026.34,111237,111237,111249.07,163353.92,163353.92,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,172018.87,116145.36]},{"name":" node 18.8.0 (x64-linux)","data":[396700.25,377931,377931,363251.07,363251.07,363251.07,366418.69,366418.69,355225.22,464257.57,464257.57,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,508806.29,355539.41]}],
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
                        categories: ["dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","Latest"],
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

| Language                              | Average        | p75       | p99       | Min       | Max     |
| ------------------------------------- | -------------- | --------- | --------- | --------- | ------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 72.49/iter µs  | 59.9 µs   | 593.71 µs | 66.5 µs   | 145 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 204.07/iter µs | 188.8 µs  | 992.81 µs | 200.3 µs  | 230 µs  |
| JavaScript /  deno 1.25.0 (x64-linux) | 848.75/iter µs | 744.41 µs | 2.18 ms   | 834.41 µs | 1.86 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[842242.58,822400.72,822400.72,815882.11,815882.11,815882.11,849855.48,849855.48,816907.28,1064868.14,1064868.14,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,1092134.08,848747.52]},{"name":" bun 0.1.10 (x64-linux)","data":[75536.13,68224.84,68224.84,69889.78,69889.78,69889.78,78894.42,78894.42,71936.65,97212.59,97212.59,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,111688.08,72493.88]},{"name":" node 18.8.0 (x64-linux)","data":[201453.31,240256.34,240256.34,215357.44,215357.44,215357.44,205463.84,205463.84,206876.57,313372.88,313372.88,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,269811.65,204073.45]}],
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
                        categories: ["dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 196.31/iter µs | 161.8 µs  | 737.41 µs | 187.9 µs  | 709.81 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 518.44/iter µs | 485.71 µs | 1.34 ms   | 520.61 µs | 1.24 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.58/iter ms   | 912.71 µs | 4.9 ms    | 2.09 ms   | 2.65 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[1550080.32,1519298.95,1519298.95,1565514.6,1565514.6,1565514.6,1553621.15,1553621.15,1538242.02,1994805.65,1994805.65,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,2064313.92,1579440.1]},{"name":" bun 0.1.10 (x64-linux)","data":[195159.85,178121.67,178121.67,186668.92,186668.92,186668.92,190787.46,190787.46,184836.11,239748.39,239748.39,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,270154.57,196312.39]},{"name":" node 18.8.0 (x64-linux)","data":[543640.96,566242.54,566242.54,590741.26,590741.26,590741.26,596676.78,596676.78,624803.95,652006.79,652006.79,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,717117.71,518444.35]}],
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
                        categories: ["dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 35.17/iter ms  | 34.26 ms  | 39.44 ms  | 35.07 ms  | 39.31 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 104.4/iter ms  | 96.69 ms  | 134.27 ms | 104.1 ms  | 130.32 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 216.77/iter ms | 210.09 ms | 312.03 ms | 217.15 ms | 236.22 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[220932505.03,229882140.73,229882140.73,217659346.15,217659346.15,217659346.15,220402227.72,220402227.72,233705182.27,274421581.02,274421581.02,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,288947311.95,216772782.44]},{"name":" bun 0.1.10 (x64-linux)","data":[35054120.54,32867966.45,32867966.45,34608823.55,34608823.55,34608823.55,35456924.18,35456924.18,33385718.34,43756224.82,43756224.82,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,50577250.2,35173516.46]},{"name":" node 18.8.0 (x64-linux)","data":[103160949.19,110517111.32,110517111.32,108916916.79,108916916.79,108916916.79,104116054.72,104116054.72,112137470.3,135278434.1,135278434.1,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,137557983.83,104399459.99]}],
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
                        categories: ["dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","Latest"],
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

