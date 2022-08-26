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

| Language                              | Average        | p75      | p99      | Min       | Max      |
| ------------------------------------- | -------------- | -------- | -------- | --------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 142.68/iter µs | 71.6 µs  | 737.1 µs | 109.9 µs  | 712.7 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 248.77/iter µs | 170.9 µs | 1.45 ms  | 252.7 µs  | 867 µs   |
| JavaScript /  deno 1.25.0 (x64-linux) | 875.82/iter µs | 649.5 µs | 3.07 ms  | 917.09 µs | 1.8 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[392955.41,392955.41,392955.41,540917.49,540917.49,622687.94,591898.32,591898.32,591898.32,552714.55,552714.55,577783.38,577783.38,577783.38,602028.91,602028.91,552705.6,815532.77,815532.77,875819.37]},{"name":" bun 0.1.10 (x64-linux)","data":[78682.69,78682.69,78682.69,92236.23,92236.23,117013.47,110639.78,110639.78,110639.78,81004.74,81004.74,98359.01,98359.01,98359.01,100534.85,100534.85,85340.62,121582.76,121582.76,142675.07]},{"name":" node 18.8.0 (x64-linux)","data":[713652.93,713652.93,713652.93,160306.56,160306.56,207374.36,183746.7,183746.7,183746.7,190838.53,190838.53,184991.07,184991.07,184991.07,185356.39,185356.39,163732.29,232028.34,232028.34,248774.54]}],
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
                        categories: ["e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","Latest"],
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

| Language                              | Average        | p75      | p99       | Min      | Max       |
| ------------------------------------- | -------------- | -------- | --------- | -------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 172.02/iter µs | 129.4 µs | 847.59 µs | 162.9 µs | 801.39 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 508.81/iter µs | 396.1 µs | 3.92 ms   | 449.6 µs | 1.89 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.26/iter ms   | 577.3 µs | 3.29 ms   | 1.37 ms  | 2.48 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[559002.01,559002.01,559002.01,915880.71,915880.71,1101136.06,889457.16,889457.16,889457.16,892547.58,892547.58,921261.27,921261.27,921261.27,947307.27,947307.27,912030.14,1130820.22,1130820.22,1256920.24]},{"name":" bun 0.1.10 (x64-linux)","data":[110846.35,110846.35,110846.35,112391.99,112391.99,121523.64,113423.57,113423.57,113423.57,116494.72,116494.72,122026.34,122026.34,122026.34,111237,111237,111249.07,163353.92,163353.92,172018.87]},{"name":" node 18.8.0 (x64-linux)","data":[342600.89,342600.89,342600.89,374289.22,374289.22,469938.87,396700.25,396700.25,396700.25,377931,377931,363251.07,363251.07,363251.07,366418.69,366418.69,355225.22,464257.57,464257.57,508806.29]}],
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
                        categories: ["e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","Latest"],
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

| Language                              | Average        | p75       | p99       | Min      | Max      |
| ------------------------------------- | -------------- | --------- | --------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 111.69/iter µs | 74.8 µs   | 708.89 µs | 106.3 µs | 337.5 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 269.81/iter µs | 203 µs    | 1.16 ms   | 265 µs   | 1.09 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.09/iter ms   | 886.49 µs | 2.98 ms   | 1.1 ms   | 2.17 ms  |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[553535.01,553535.01,553535.01,819642.53,819642.53,1090198.84,842242.58,842242.58,842242.58,822400.72,822400.72,815882.11,815882.11,815882.11,849855.48,849855.48,816907.28,1064868.14,1064868.14,1092134.08]},{"name":" bun 0.1.10 (x64-linux)","data":[80909.83,80909.83,80909.83,69758.27,69758.27,91559.97,75536.13,75536.13,75536.13,68224.84,68224.84,69889.78,69889.78,69889.78,78894.42,78894.42,71936.65,97212.59,97212.59,111688.08]},{"name":" node 18.8.0 (x64-linux)","data":[190088.58,190088.58,190088.58,229042.01,229042.01,270800.69,201453.31,201453.31,201453.31,240256.34,240256.34,215357.44,215357.44,215357.44,205463.84,205463.84,206876.57,313372.88,313372.88,269811.65]}],
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
                        categories: ["e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","Latest"],
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

| Language                              | Average        | p75      | p99      | Min      | Max     |
| ------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 270.15/iter µs | 214.4 µs | 870.9 µs | 271.1 µs | 860 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 717.12/iter µs | 597.3 µs | 2.73 ms  | 710.6 µs | 1.94 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 2.06/iter ms   | 1.05 ms  | 6.75 ms  | 2.75 ms  | 3.45 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[997961.34,997961.34,997961.34,1563233.05,1563233.05,1846924.97,1550080.32,1550080.32,1550080.32,1519298.95,1519298.95,1565514.6,1565514.6,1565514.6,1553621.15,1553621.15,1538242.02,1994805.65,1994805.65,2064313.92]},{"name":" bun 0.1.10 (x64-linux)","data":[247406.42,247406.42,247406.42,185617.19,185617.19,201132.15,195159.85,195159.85,195159.85,178121.67,178121.67,186668.92,186668.92,186668.92,190787.46,190787.46,184836.11,239748.39,239748.39,270154.57]},{"name":" node 18.8.0 (x64-linux)","data":[675150.05,675150.05,675150.05,530372.51,530372.51,632101.02,543640.96,543640.96,543640.96,566242.54,566242.54,590741.26,590741.26,590741.26,596676.78,596676.78,624803.95,652006.79,652006.79,717117.71]}],
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
                        categories: ["e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 50.58/iter ms  | 45 ms     | 63.65 ms  | 51.93 ms  | 63.31 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 137.56/iter ms | 126.87 ms | 167.9 ms  | 139.2 ms  | 167.32 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 288.95/iter ms | 264.94 ms | 448.66 ms | 293.18 ms | 325.76 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[164875128.25,164875128.25,164875128.25,231640158.3,231640158.3,243837219.95,220932505.03,220932505.03,220932505.03,229882140.73,229882140.73,217659346.15,217659346.15,217659346.15,220402227.72,220402227.72,233705182.27,274421581.02,274421581.02,288947311.95]},{"name":" bun 0.1.10 (x64-linux)","data":[34189458.28,34189458.28,34189458.28,33115179.22,33115179.22,38805336.79,35054120.54,35054120.54,35054120.54,32867966.45,32867966.45,34608823.55,34608823.55,34608823.55,35456924.18,35456924.18,33385718.34,43756224.82,43756224.82,50577250.2]},{"name":" node 18.8.0 (x64-linux)","data":[93157436.91,93157436.91,93157436.91,102353472.69,102353472.69,104619717.61,103160949.19,103160949.19,103160949.19,110517111.32,110517111.32,108916916.79,108916916.79,108916916.79,104116054.72,104116054.72,112137470.3,135278434.1,135278434.1,137557983.83]}],
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
                        categories: ["e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","Latest"],
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

