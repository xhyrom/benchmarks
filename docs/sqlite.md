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

| Language                              | Average        | p75      | p99     | Min      | Max      |
| ------------------------------------- | -------------- | -------- | ------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 110.64/iter µs | 50.9 µs  | 1.17 ms | 77.5 µs  | 622.4 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 183.75/iter µs | 153.5 µs | 1.13 ms | 180.2 µs | 284.7 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 591.9/iter µs  | 497.5 µs | 2.04 ms | 603 µs   | 1.23 ms  |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,392955.41,392955.41,392955.41,392955.41,392955.41,540917.49,540917.49,622687.94,591898.32]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,78682.69,78682.69,78682.69,78682.69,78682.69,92236.23,92236.23,117013.47,110639.78]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,713652.93,713652.93,713652.93,713652.93,713652.93,160306.56,160306.56,207374.36,183746.7]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

| Language                              | Average        | p75      | p99      | Min      | Max     |
| ------------------------------------- | -------------- | -------- | -------- | -------- | ------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 113.42/iter µs | 96.8 µs  | 645.3 µs | 104.1 µs | 543 µs  |
| JavaScript /  node 18.8.0 (x64-linux) | 396.7/iter µs  | 353.2 µs | 1.7 ms   | 370.4 µs | 1.38 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 889.46/iter µs | 489.8 µs | 2.21 ms  | 914.1 µs | 1.61 ms |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,559002.01,559002.01,559002.01,559002.01,559002.01,915880.71,915880.71,1101136.06,889457.16]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,110846.35,110846.35,110846.35,110846.35,110846.35,112391.99,112391.99,121523.64,113423.57]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,342600.89,342600.89,342600.89,342600.89,342600.89,374289.22,374289.22,469938.87,396700.25]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

| Language                              | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 75.54/iter µs  | 58.9 µs  | 580.6 µs | 78.1 µs  | 136.9 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 201.45/iter µs | 186 µs   | 1.02 ms  | 197.3 µs | 224.1 µs |
| JavaScript /  deno 1.25.0 (x64-linux) | 842.24/iter µs | 744.3 µs | 2.18 ms  | 826.3 µs | 1.84 ms  |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,553535.01,553535.01,553535.01,553535.01,553535.01,819642.53,819642.53,1090198.84,842242.58]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,80909.83,80909.83,80909.83,80909.83,80909.83,69758.27,69758.27,91559.97,75536.13]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,190088.58,190088.58,190088.58,190088.58,190088.58,229042.01,229042.01,270800.69,201453.31]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

| Language                              | Average        | p75      | p99      | Min      | Max      |
| ------------------------------------- | -------------- | -------- | -------- | -------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 195.16/iter µs | 165.3 µs | 765.7 µs | 189.3 µs | 684.4 µs |
| JavaScript /  node 18.8.0 (x64-linux) | 543.64/iter µs | 501.5 µs | 1.39 ms  | 538.1 µs | 1.32 ms  |
| JavaScript /  deno 1.25.0 (x64-linux) | 1.55/iter ms   | 924.7 µs | 4.88 ms  | 2.1 ms   | 2.64 ms  |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,997961.34,997961.34,997961.34,997961.34,997961.34,1563233.05,1563233.05,1846924.97,1550080.32]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,247406.42,247406.42,247406.42,247406.42,247406.42,185617.19,185617.19,201132.15,195159.85]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,675150.05,675150.05,675150.05,675150.05,675150.05,530372.51,530372.51,632101.02,543640.96]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

| Language                              | Average        | p75      | p99       | Min       | Max       |
| ------------------------------------- | -------------- | -------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)  | 35.05/iter ms  | 34.07 ms | 39.45 ms  | 34.99 ms  | 39.35 ms  |
| JavaScript /  node 18.8.0 (x64-linux) | 103.16/iter ms | 95.66 ms | 128.38 ms | 102.94 ms | 127.39 ms |
| JavaScript /  deno 1.25.0 (x64-linux) | 220.93/iter ms | 213.9 ms | 314.18 ms | 220.85 ms | 238.88 ms |


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
                    series: [{"name":"JavaScript / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,164875128.25,164875128.25,164875128.25,164875128.25,164875128.25,231640158.3,231640158.3,243837219.95,220932505.03]},{"name":"JavaScript / bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,34189458.28,34189458.28,34189458.28,34189458.28,34189458.28,33115179.22,33115179.22,38805336.79,35054120.54]},{"name":"JavaScript / node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,0,0,0,0,0,93157436.91,93157436.91,93157436.91,93157436.91,93157436.91,102353472.69,102353472.69,104619717.61,103160949.19]}],
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
                        categories: ["84993b0","456fb01","659c8b9","de35d11","1038a86","63a645f","af1a4a3","3933845","9663e12","ca114bf","222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","Latest"],
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

