<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                                                       | Average       | p75       | p99       | Min       | Max       | Latency   |
| -------------------------------------------------------------- | ------------- | --------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)                           | 88,098.7/rps  | 3,877.26  | 94,999.2  | 89,368.99 | 92,722.19 | 565.49 µs |
| JavaScript / flash (new Deno.serve) /  deno 1.25.0 (x64-linux) | 67,041.41/rps | 10,939.03 | 75,165.89 | 73,511.89 | 74,826.25 | 743.68 µs |
| JavaScript /  deno 1.25.0 (x64-linux)                          | 46,875.8/rps  | 5,425.55  | 51,252.5  | 50,187.34 | 50,974.2  | 1.07 ms   |
| JavaScript /  node 18.8.0 (x64-linux)                          | 38,806.11/rps | 4,351.28  | 41,381.71 | 40,051.98 | 40,963.65 | 1.29 ms   |


<div id="chart-30"></div>
<script>
new ApexCharts(document.querySelector('#chart-30'), {
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
                    series: [{"name":" flash (new Deno.serve) / deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,78830.40520837679,78830.40520837679,67394.48009458072,67962.53229681427,67962.53229681427,67962.53229681427,73816.0327945796,73816.0327945796,67041.41186042457]},{"name":" deno 1.25.0 (x64-linux)","data":[0,0,0,0,0,0,58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,51856.19956581548,51856.19956581548,44296.691125212965,45368.27612682232,45368.27612682232,45368.27612682232,50038.88338178856,50038.88338178856,46875.80435967024]},{"name":" bun 0.1.10 (x64-linux)","data":[0,0,0,0,0,0,124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,90761.37221389027,90761.37221389027,83756.11765525483,83868.9593715537,83868.9593715537,83868.9593715537,88651.24223084674,88651.24223084674,88098.69942802857]},{"name":" node 18.8.0 (x64-linux)","data":[0,0,0,0,0,0,38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,47356.7997859687,47356.7997859687,36191.81307026772,38443.81950851121,38443.81950851121,38443.81950851121,45277.17240374968,45277.17240374968,38806.11069027558]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Python   | 5,950.27/rps | 687.31 | 7,000.55 | 6,584.19 | 6,922.91 | 8.69 ms |


<div id="chart-31"></div>
<script>
new ApexCharts(document.querySelector('#chart-31'), {
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
                    series: [{"name":"Python","data":[0,0,0,0,0,0,842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,6819.548454806397,6819.548454806397,5402.032726925572,5859.64275420499,5859.64275420499,5859.64275420499,5590.489704203832,5590.489704203832,5950.274696735812]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

### <a name="http-crystal">Crystal</a>

| Language | Average      | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------ | -------- | -------- | --------- | --------- | --------- |
| Crystal  | 82,097.5/rps | 2,764.28 | 85,495.6 | 83,608.59 | 84,652.56 | 607.72 µs |


<div id="chart-32"></div>
<script>
new ApexCharts(document.querySelector('#chart-32'), {
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
                    series: [{"name":"Crystal","data":[0,0,0,0,0,0,92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,85673.97061219739,85673.97061219739,79132.20415227933,80195.3550029617,80195.3550029617,80195.3550029617,83816.18698444877,83816.18698444877,82097.50248588737]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

### <a name="http-go">Go</a>

| Language | Average      | p75      | p99      | Min       | Max       | Latency   |
| -------- | ------------ | -------- | -------- | --------- | --------- | --------- |
| Go       | 58,570.6/rps | 3,302.02 | 67,573.2 | 60,688.46 | 64,921.14 | 852.31 µs |


<div id="chart-33"></div>
<script>
new ApexCharts(document.querySelector('#chart-33'), {
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
                    series: [{"name":"Go","data":[0,0,0,0,0,0,156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,65740.42452543396,65740.42452543396,52971.644801698814,57115.2550296415,57115.2550296415,57115.2550296415,62854.38486541399,62854.38486541399,58570.59554311822]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75    | p99    | Min      | Max       | Latency |
| -------- | ------------ | ------ | ------ | -------- | --------- | ------- |
| Ruby     | 9,239.43/rps | 867.24 | 11,694 | 9,841.83 | 11,313.28 | 5.42 ms |


<div id="chart-34"></div>
<script>
new ApexCharts(document.querySelector('#chart-34'), {
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
                    series: [{"name":"Ruby","data":[0,0,0,0,0,0,6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,10046.87425215216,10046.87425215216,8727.75434457861,9162.370147462441,9162.370147462441,9162.370147462441,9561.031172649646,9561.031172649646,9239.42908012823]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99       | Min      | Max      | Latency |
| -------- | ------------ | ------ | --------- | -------- | -------- | ------- |
| Rust     | 6,966.71/rps | 849.75 | 17,507.65 | 7,390.24 | 8,656.67 | 7.2 ms  |


<div id="chart-35"></div>
<script>
new ApexCharts(document.querySelector('#chart-35'), {
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
                    series: [{"name":"Rust","data":[0,0,0,0,0,0,3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,7776.140576164982,7776.140576164982,6501.3410459465385,7061.567951283785,7061.567951283785,7061.567951283785,7688.644044455982,7688.644044455982,6966.711378885867]}],
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
                    const type = '/rps';

                    return `${Number(time.toFixed(2)).toLocaleString(locale)}${type}`;
                }
                        },
                        title: {
                            text: "requests per second"
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

