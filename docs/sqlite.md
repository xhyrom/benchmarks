<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 98.36/iter µs  | 51.4 µs   | 615.81 µs | 66.4 µs   | 587.91 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 184.99/iter µs | 142 µs    | 1.41 ms   | 168.1 µs  | 986.21 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 577.78/iter µs | 484.11 µs | 1.98 ms   | 594.41 µs | 1.18 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,392955.41,392955.41,392955.41,392955.41,392955.41,540917.49,540917.49,622687.94,591898.32,591898.32,591898.32,552714.55,552714.55,577783.38]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,78682.69,78682.69,78682.69,78682.69,78682.69,92236.23,92236.23,117013.47,110639.78,110639.78,110639.78,81004.74,81004.74,98359.01]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,713652.93,713652.93,713652.93,713652.93,713652.93,160306.56,160306.56,207374.36,183746.7,183746.7,183746.7,190838.53,190838.53,184991.07]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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

| Language                              | Average        | p75      | p99       | Min       | Max       |
| ------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 122.03/iter µs | 96.9 µs  | 632.61 µs | 114.9 µs  | 626.91 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 363.25/iter µs | 346.1 µs | 1.11 ms   | 361.8 µs  | 387.4 µs  |
| JavaScript /  deno 1.25.0 (x64-linux) | 921.26/iter µs | 495.4 µs | 2.15 ms   | 950.71 µs | 1.57 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,559002.01,559002.01,559002.01,559002.01,559002.01,915880.71,915880.71,1101136.06,889457.16,889457.16,889457.16,892547.58,892547.58,921261.27]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,110846.35,110846.35,110846.35,110846.35,110846.35,112391.99,112391.99,121523.64,113423.57,113423.57,113423.57,116494.72,116494.72,122026.34]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,342600.89,342600.89,342600.89,342600.89,342600.89,374289.22,374289.22,469938.87,396700.25,396700.25,396700.25,377931,377931,363251.07]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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

| Language                              | Average        | p75       | p99       | Min       | Max       |
| ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 69.89/iter µs  | 59.3 µs   | 505.71 µs | 65.1 µs   | 138.5 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 215.36/iter µs | 188.3 µs  | 1.24 ms   | 201.3 µs  | 932.81 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 815.88/iter µs | 545.21 µs | 1.99 ms   | 819.91 µs | 1.66 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,553535.01,553535.01,553535.01,553535.01,553535.01,819642.53,819642.53,1090198.84,842242.58,842242.58,842242.58,822400.72,822400.72,815882.11]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,80909.83,80909.83,80909.83,80909.83,80909.83,69758.27,69758.27,91559.97,75536.13,75536.13,75536.13,68224.84,68224.84,69889.78]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,190088.58,190088.58,190088.58,190088.58,190088.58,229042.01,229042.01,270800.69,201453.31,201453.31,201453.31,240256.34,240256.34,215357.44]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 186.67/iter µs | 163.5 µs  | 695.11 µs | 170.9 µs  | 689.31 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 590.74/iter µs | 542.51 µs | 1.77 ms   | 579.41 µs | 1.38 ms   |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.57/iter ms   | 914.91 µs | 4.65 ms   | 2.05 ms   | 2.58 ms   |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,997961.34,997961.34,997961.34,997961.34,997961.34,1563233.05,1563233.05,1846924.97,1550080.32,1550080.32,1550080.32,1519298.95,1519298.95,1565514.6]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,247406.42,247406.42,247406.42,247406.42,247406.42,185617.19,185617.19,201132.15,195159.85,195159.85,195159.85,178121.67,178121.67,186668.92]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,675150.05,675150.05,675150.05,675150.05,675150.05,530372.51,530372.51,632101.02,543640.96,543640.96,543640.96,566242.54,566242.54,590741.26]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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
| JavaScript /  bun 0.1.10 (x64-linux)  | 34.61/iter ms  | 33.55 ms  | 39.06 ms  | 34.57 ms  | 37.96 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 108.92/iter ms | 101.63 ms | 132.29 ms | 108.62 ms | 130.12 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 217.66/iter ms | 211.73 ms | 309.17 ms | 218.19 ms | 233.18 ms |


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
                    series: [{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,164875128.25,164875128.25,164875128.25,164875128.25,164875128.25,231640158.3,231640158.3,243837219.95,220932505.03,220932505.03,220932505.03,229882140.73,229882140.73,217659346.15]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,34189458.28,34189458.28,34189458.28,34189458.28,34189458.28,33115179.22,33115179.22,38805336.79,35054120.54,35054120.54,35054120.54,32867966.45,32867966.45,34608823.55]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,93157436.91,93157436.91,93157436.91,93157436.91,93157436.91,102353472.69,102353472.69,104619717.61,103160949.19,103160949.19,103160949.19,110517111.32,110517111.32,108916916.79]}],
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
                        categories: ["63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","Latest"],
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

