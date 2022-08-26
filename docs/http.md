<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                                                       | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------------------------------------------------------------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)                           | 84,140.92/rps | 2,503.38 | 92,156.17 | 84,937.46 | 90,290.84 | 592.62 µs |
| JavaScript / flash (new Deno.serve) /  deno 1.25.0 (x64-linux) | 68,639.04/rps | 10,607.1 | 75,498.04 | 73,777.48 | 75,057.86 | 725.78 µs |
| JavaScript /  deno 1.25.0 (x64-linux)                          | 49,239.92/rps | 5,710.17 | 54,183.53 | 52,782.08 | 53,611.15 | 1.01 ms   |
| JavaScript /  node 18.8.0 (x64-linux)                          | 44,862.95/rps | 5,205.53 | 47,319.19 | 46,221.59 | 46,919.76 | 1.11 ms   |


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
                    series: [{"name":" flash (new Deno.serve) / deno 1.25.0 (x64-linux)","data":[0,129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,78830.40520837679,78830.40520837679,67394.48009458072,67962.53229681427,67962.53229681427,67962.53229681427,73816.0327945796,73816.0327945796,67041.41186042457,67041.41186042457,67041.41186042457,64612.73437776073,64612.73437776073,68639.03726927708]},{"name":" deno 1.25.0 (x64-linux)","data":[0,58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,51856.19956581548,51856.19956581548,44296.691125212965,45368.27612682232,45368.27612682232,45368.27612682232,50038.88338178856,50038.88338178856,46875.80435967024,46875.80435967024,46875.80435967024,44700.703220106065,44700.703220106065,49239.91978334709]},{"name":" bun 0.1.10 (x64-linux)","data":[0,124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,90761.37221389027,90761.37221389027,83756.11765525483,83868.9593715537,83868.9593715537,83868.9593715537,88651.24223084674,88651.24223084674,88098.69942802857,88098.69942802857,88098.69942802857,82717.62451661946,82717.62451661946,84140.9170376202]},{"name":" node 18.8.0 (x64-linux)","data":[0,38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,47356.7997859687,47356.7997859687,36191.81307026772,38443.81950851121,38443.81950851121,38443.81950851121,45277.17240374968,45277.17240374968,38806.11069027558,38806.11069027558,38806.11069027558,36111.45982592125,36111.45982592125,44862.95022662719]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

| Language | Average     | p75   | p99      | Min      | Max      | Latency |
| -------- | ----------- | ----- | -------- | -------- | -------- | ------- |
| Python   | 6,361.7/rps | 605.9 | 7,102.02 | 6,714.22 | 7,017.64 | 8.21 ms |


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
                    series: [{"name":"Python","data":[0,842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,6819.548454806397,6819.548454806397,5402.032726925572,5859.64275420499,5859.64275420499,5859.64275420499,5590.489704203832,5590.489704203832,5950.274696735812,5950.274696735812,5950.274696735812,4658.277071750389,4658.277071750389,6361.704404612347]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 83,051.84/rps | 2,650.74 | 86,159.05 | 84,630.95 | 85,685.01 | 600.53 µs |


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
                    series: [{"name":"Crystal","data":[0,92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,85673.97061219739,85673.97061219739,79132.20415227933,80195.3550029617,80195.3550029617,80195.3550029617,83816.18698444877,83816.18698444877,82097.50248588737,82097.50248588737,82097.50248588737,78698.56532219853,78698.56532219853,83051.84258169011]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Go       | 62,136.94/rps | 3,326.97 | 71,156.79 | 64,298.69 | 68,394.84 | 803.29 µs |


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
                    series: [{"name":"Go","data":[0,156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,65740.42452543396,65740.42452543396,52971.644801698814,57115.2550296415,57115.2550296415,57115.2550296415,62854.38486541399,62854.38486541399,58570.59554311822,58570.59554311822,58570.59554311822,54621.726095334285,54621.726095334285,62136.94098525345]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

| Language | Average      | p75    | p99       | Min      | Max       | Latency |
| -------- | ------------ | ------ | --------- | -------- | --------- | ------- |
| Ruby     | 9,085.36/rps | 924.85 | 11,425.68 | 9,698.68 | 10,817.75 | 5.5 ms  |


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
                    series: [{"name":"Ruby","data":[0,6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,10046.87425215216,10046.87425215216,8727.75434457861,9162.370147462441,9162.370147462441,9162.370147462441,9561.031172649646,9561.031172649646,9239.42908012823,9239.42908012823,9239.42908012823,8922.537909534345,8922.537909534345,9085.360483200911]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

| Language | Average      | p75    | p99      | Min      | Max      | Latency |
| -------- | ------------ | ------ | -------- | -------- | -------- | ------- |
| Rust     | 7,319.36/rps | 767.25 | 9,820.89 | 7,807.34 | 9,378.45 | 6.84 ms |


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
                    series: [{"name":"Rust","data":[0,3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,7776.140576164982,7776.140576164982,6501.3410459465385,7061.567951283785,7061.567951283785,7061.567951283785,7688.644044455982,7688.644044455982,6966.711378885867,6966.711378885867,6966.711378885867,6660.014796835403,6660.014796835403,7319.363965686486]}],
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
                        categories: ["222f025","5910ee7","fbe56df","e905e2a","f2e77e3","b53c9bc","1def946","f0d489b","3fdd09b","5a0d741","adfa99a","dfe4527","48c9bc3","eebfb79","3e0357f","5bb06d6","d53b782","4003018","3ee7b8c","Latest"],
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

