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
| JavaScript /  bun 0.1.10 (x64-linux)  | 121.58/iter µs | 66.1 µs  | 669.6 µs | 96.3 µs   | 605.8 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 232.03/iter µs | 178.2 µs | 1.22 ms  | 240.5 µs  | 1.06 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 815.53/iter µs | 651 µs   | 3.25 ms  | 820.71 µs | 2.47 ms  |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[392955.41,392955.41,392955.41,392955.41,392955.41,540917.49,540917.49,622687.94,591898.32,591898.32,591898.32,552714.55,552714.55,577783.38,577783.38,577783.38,602028.91,602028.91,552705.6,815532.77]},{"name":" bun 0.1.10 (x64-linux)","data":[78682.69,78682.69,78682.69,78682.69,78682.69,92236.23,92236.23,117013.47,110639.78,110639.78,110639.78,81004.74,81004.74,98359.01,98359.01,98359.01,100534.85,100534.85,85340.62,121582.76]},{"name":" node 18.8.0 (x64-linux)","data":[713652.93,713652.93,713652.93,713652.93,713652.93,160306.56,160306.56,207374.36,183746.7,183746.7,183746.7,190838.53,190838.53,184991.07,184991.07,184991.07,185356.39,185356.39,163732.29,232028.34]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language                              | Average        | p75      | p99     | Min      | Max      |
| ------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 163.35/iter µs | 118.9 µs | 1.81 ms | 141.1 µs | 687.6 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 464.26/iter µs | 354.3 µs | 1.77 ms | 444.8 µs | 1.5 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.13/iter ms   | 531.2 µs | 2.84 ms | 1.21 ms  | 2.66 ms  |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[559002.01,559002.01,559002.01,559002.01,559002.01,915880.71,915880.71,1101136.06,889457.16,889457.16,889457.16,892547.58,892547.58,921261.27,921261.27,921261.27,947307.27,947307.27,912030.14,1130820.22]},{"name":" bun 0.1.10 (x64-linux)","data":[110846.35,110846.35,110846.35,110846.35,110846.35,112391.99,112391.99,121523.64,113423.57,113423.57,113423.57,116494.72,116494.72,122026.34,122026.34,122026.34,111237,111237,111249.07,163353.92]},{"name":" node 18.8.0 (x64-linux)","data":[342600.89,342600.89,342600.89,342600.89,342600.89,374289.22,374289.22,469938.87,396700.25,396700.25,396700.25,377931,377931,363251.07,363251.07,363251.07,366418.69,366418.69,355225.22,464257.57]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language                              | Average        | p75       | p99      | Min      | Max      |
| ------------------------------------- | -------------- | --------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 97.21/iter µs  | 78.6 µs   | 169.5 µs | 99.4 µs  | 142.7 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 313.37/iter µs | 194.3 µs  | 3.38 ms  | 254.9 µs | 2.73 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.06/iter ms   | 884.71 µs | 2.66 ms  | 1.1 ms   | 2.1 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[553535.01,553535.01,553535.01,553535.01,553535.01,819642.53,819642.53,1090198.84,842242.58,842242.58,842242.58,822400.72,822400.72,815882.11,815882.11,815882.11,849855.48,849855.48,816907.28,1064868.14]},{"name":" bun 0.1.10 (x64-linux)","data":[80909.83,80909.83,80909.83,80909.83,80909.83,69758.27,69758.27,91559.97,75536.13,75536.13,75536.13,68224.84,68224.84,69889.78,69889.78,69889.78,78894.42,78894.42,71936.65,97212.59]},{"name":" node 18.8.0 (x64-linux)","data":[190088.58,190088.58,190088.58,190088.58,190088.58,229042.01,229042.01,270800.69,201453.31,201453.31,201453.31,240256.34,240256.34,215357.44,215357.44,215357.44,205463.84,205463.84,206876.57,313372.88]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

| Language                              | Average        | p75      | p99       | Min      | Max      |
| ------------------------------------- | -------------- | -------- | --------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 239.75/iter µs | 203.9 µs | 930.91 µs | 225.7 µs | 722.3 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 652.01/iter µs | 535.4 µs | 1.78 ms   | 633.7 µs | 1.67 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.99/iter ms   | 1.08 ms  | 6.24 ms   | 2.78 ms  | 5.5 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[997961.34,997961.34,997961.34,997961.34,997961.34,1563233.05,1563233.05,1846924.97,1550080.32,1550080.32,1550080.32,1519298.95,1519298.95,1565514.6,1565514.6,1565514.6,1553621.15,1553621.15,1538242.02,1994805.65]},{"name":" bun 0.1.10 (x64-linux)","data":[247406.42,247406.42,247406.42,247406.42,247406.42,185617.19,185617.19,201132.15,195159.85,195159.85,195159.85,178121.67,178121.67,186668.92,186668.92,186668.92,190787.46,190787.46,184836.11,239748.39]},{"name":" node 18.8.0 (x64-linux)","data":[675150.05,675150.05,675150.05,675150.05,675150.05,530372.51,530372.51,632101.02,543640.96,543640.96,543640.96,566242.54,566242.54,590741.26,590741.26,590741.26,596676.78,596676.78,624803.95,652006.79]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 43.76/iter ms  | 41.31 ms  | 53.55 ms  | 44.45 ms  | 50.46 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 135.28/iter ms | 129.36 ms | 166.48 ms | 136.59 ms | 166.34 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 274.42/iter ms | 261.19 ms | 397.63 ms | 278.52 ms | 304.08 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[164875128.25,164875128.25,164875128.25,164875128.25,164875128.25,231640158.3,231640158.3,243837219.95,220932505.03,220932505.03,220932505.03,229882140.73,229882140.73,217659346.15,217659346.15,217659346.15,220402227.72,220402227.72,233705182.27,274421581.02]},{"name":" bun 0.1.10 (x64-linux)","data":[34189458.28,34189458.28,34189458.28,34189458.28,34189458.28,33115179.22,33115179.22,38805336.79,35054120.54,35054120.54,35054120.54,32867966.45,32867966.45,34608823.55,34608823.55,34608823.55,35456924.18,35456924.18,33385718.34,43756224.82]},{"name":" node 18.8.0 (x64-linux)","data":[93157436.91,93157436.91,93157436.91,93157436.91,93157436.91,102353472.69,102353472.69,104619717.61,103160949.19,103160949.19,103160949.19,110517111.32,110517111.32,108916916.79,108916916.79,108916916.79,104116054.72,104116054.72,112137470.3,135278434.1]}],
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
                        categories: ["5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","Latest"],
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

