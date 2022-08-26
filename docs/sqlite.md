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
| JavaScript /  bun 0.1.10 (x64-linux)  | 100.53/iter µs | 52.5 µs   | 594.11 µs | 66.6 µs   | 592.21 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 185.36/iter µs | 153.5 µs  | 1.07 ms   | 191.5 µs  | 346.01 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 602.03/iter µs | 498.81 µs | 2.7 ms    | 601.61 µs | 1.27 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,392955.41,392955.41,392955.41,392955.41,392955.41,540917.49,540917.49,622687.94,591898.32,591898.32,591898.32,552714.55,552714.55,577783.38,577783.38,577783.38,602028.91]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,78682.69,78682.69,78682.69,78682.69,78682.69,92236.23,92236.23,117013.47,110639.78,110639.78,110639.78,81004.74,81004.74,98359.01,98359.01,98359.01,100534.85]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,713652.93,713652.93,713652.93,713652.93,713652.93,160306.56,160306.56,207374.36,183746.7,183746.7,183746.7,190838.53,190838.53,184991.07,184991.07,184991.07,185356.39]}],
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
                        categories: ["9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 111.24/iter µs | 96.9 µs   | 637.01 µs | 106.4 µs  | 174.8 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 366.42/iter µs | 342.01 µs | 1.21 ms   | 362.21 µs | 406.41 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 947.31/iter µs | 856.42 µs | 2.22 ms   | 934.02 µs | 1.66 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,559002.01,559002.01,559002.01,559002.01,559002.01,915880.71,915880.71,1101136.06,889457.16,889457.16,889457.16,892547.58,892547.58,921261.27,921261.27,921261.27,947307.27]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,110846.35,110846.35,110846.35,110846.35,110846.35,112391.99,112391.99,121523.64,113423.57,113423.57,113423.57,116494.72,116494.72,122026.34,122026.34,122026.34,111237]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,342600.89,342600.89,342600.89,342600.89,342600.89,374289.22,374289.22,469938.87,396700.25,396700.25,396700.25,377931,377931,363251.07,363251.07,363251.07,366418.69]}],
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
                        categories: ["9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","Latest"],
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

| Language                              | Average        | p75       | p99       | Min       | Max      |
| ------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 78.89/iter µs  | 59.3 µs   | 587.81 µs | 81.1 µs   | 162.1 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 205.46/iter µs | 188.1 µs  | 1.03 ms   | 200.1 µs  | 241.1 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 849.86/iter µs | 751.51 µs | 2.1 ms    | 836.41 µs | 1.81 ms  |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,553535.01,553535.01,553535.01,553535.01,553535.01,819642.53,819642.53,1090198.84,842242.58,842242.58,842242.58,822400.72,822400.72,815882.11,815882.11,815882.11,849855.48]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,80909.83,80909.83,80909.83,80909.83,80909.83,69758.27,69758.27,91559.97,75536.13,75536.13,75536.13,68224.84,68224.84,69889.78,69889.78,69889.78,78894.42]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,190088.58,190088.58,190088.58,190088.58,190088.58,229042.01,229042.01,270800.69,201453.31,201453.31,201453.31,240256.34,240256.34,215357.44,215357.44,215357.44,205463.84]}],
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
                        categories: ["9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 190.79/iter µs | 167.7 µs  | 699.31 µs | 180.9 µs  | 697.11 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 596.68/iter µs | 536.41 µs | 1.7 ms    | 571.91 µs | 1.58 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.55/iter ms   | 883.52 µs | 4.88 ms   | 2.08 ms   | 2.7 ms    |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,997961.34,997961.34,997961.34,997961.34,997961.34,1563233.05,1563233.05,1846924.97,1550080.32,1550080.32,1550080.32,1519298.95,1519298.95,1565514.6,1565514.6,1565514.6,1553621.15]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,247406.42,247406.42,247406.42,247406.42,247406.42,185617.19,185617.19,201132.15,195159.85,195159.85,195159.85,178121.67,178121.67,186668.92,186668.92,186668.92,190787.46]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,675150.05,675150.05,675150.05,675150.05,675150.05,530372.51,530372.51,632101.02,543640.96,543640.96,543640.96,566242.54,566242.54,590741.26,590741.26,590741.26,596676.78]}],
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
                        categories: ["9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 35.46/iter ms  | 34.31 ms  | 39.91 ms  | 35.36 ms  | 39.18 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 104.12/iter ms | 96.23 ms  | 132.18 ms | 103.7 ms  | 129.73 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 220.4/iter ms  | 213.87 ms | 325.53 ms | 220.51 ms | 241.48 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,164875128.25,164875128.25,164875128.25,164875128.25,164875128.25,231640158.3,231640158.3,243837219.95,220932505.03,220932505.03,220932505.03,229882140.73,229882140.73,217659346.15,217659346.15,217659346.15,220402227.72]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,34189458.28,34189458.28,34189458.28,34189458.28,34189458.28,33115179.22,33115179.22,38805336.79,35054120.54,35054120.54,35054120.54,32867966.45,32867966.45,34608823.55,34608823.55,34608823.55,35456924.18]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,93157436.91,93157436.91,93157436.91,93157436.91,93157436.91,102353472.69,102353472.69,104619717.61,103160949.19,103160949.19,103160949.19,110517111.32,110517111.32,108916916.79,108916916.79,108916916.79,104116054.72]}],
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
                        categories: ["9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","Latest"],
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

