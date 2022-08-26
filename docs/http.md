<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                                                       | Average       | p75      | p99       | Min       | Max       | Latency  |
| -------------------------------------------------------------- | ------------- | -------- | --------- | --------- | --------- | -------- |
| JavaScript /  bun 0.1.10 (x64-linux)                           | 57,073.89/rps | 7,792.04 | 71,948.75 | 60,483.02 | 71,160.4  | 873.6 µs |
| JavaScript / flash (new Deno.serve) /  deno 1.25.0 (x64-linux) | 35,738.33/rps | 7,113.99 | 48,612.39 | 40,352.15 | 45,427.12 | 1.4 ms   |
| JavaScript /  deno 1.25.0 (x64-linux)                          | 32,731.35/rps | 5,052.84 | 38,927.24 | 35,897.65 | 38,312.84 | 1.53 ms  |
| JavaScript /  node 18.8.0 (x64-linux)                          | 16,433.36/rps | 2,633.88 | 20,485.75 | 17,884.71 | 19,402.95 | 3.04 ms  |


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
                    series: [{"name":" flash (new Deno.serve) / deno 1.25.0 (x64-linux)","data":[129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,129068.22754886381,78830.40520837679,78830.40520837679,67394.48009458072,67962.53229681427,67962.53229681427,67962.53229681427,73816.0327945796,73816.0327945796,67041.41186042457,67041.41186042457,67041.41186042457,64612.73437776073,64612.73437776073,68639.03726927708,35738.327347383565]},{"name":" deno 1.25.0 (x64-linux)","data":[58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,58167.33069821851,51856.19956581548,51856.19956581548,44296.691125212965,45368.27612682232,45368.27612682232,45368.27612682232,50038.88338178856,50038.88338178856,46875.80435967024,46875.80435967024,46875.80435967024,44700.703220106065,44700.703220106065,49239.91978334709,32731.345617636285]},{"name":" bun 0.1.10 (x64-linux)","data":[124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,124900.11680362372,90761.37221389027,90761.37221389027,83756.11765525483,83868.9593715537,83868.9593715537,83868.9593715537,88651.24223084674,88651.24223084674,88098.69942802857,88098.69942802857,88098.69942802857,82717.62451661946,82717.62451661946,84140.9170376202,57073.88853615419]},{"name":" node 18.8.0 (x64-linux)","data":[38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,38603.67572702694,47356.7997859687,47356.7997859687,36191.81307026772,38443.81950851121,38443.81950851121,38443.81950851121,45277.17240374968,45277.17240374968,38806.11069027558,38806.11069027558,38806.11069027558,36111.45982592125,36111.45982592125,44862.95022662719,16433.35657742133]}],
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

### <a name="http-python">Python</a>

| Language | Average      | p75    | p99      | Min      | Max      | Latency  |
| -------- | ------------ | ------ | -------- | -------- | -------- | -------- |
| Python   | 2,947.14/rps | 641.84 | 4,354.64 | 3,698.79 | 4,225.32 | 18.41 ms |


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
                    series: [{"name":"Python","data":[842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,842.6413681016869,6819.548454806397,6819.548454806397,5402.032726925572,5859.64275420499,5859.64275420499,5859.64275420499,5590.489704203832,5590.489704203832,5950.274696735812,5950.274696735812,5950.274696735812,4658.277071750389,4658.277071750389,6361.704404612347,2947.138690384789]}],
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

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 53,660.68/rps | 6,899.79 | 64,036.95 | 59,428.77 | 63,518.45 | 927.94 µs |


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
                    series: [{"name":"Crystal","data":[92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,92753.74212609377,85673.97061219739,85673.97061219739,79132.20415227933,80195.3550029617,80195.3550029617,80195.3550029617,83816.18698444877,83816.18698444877,82097.50248588737,82097.50248588737,82097.50248588737,78698.56532219853,78698.56532219853,83051.84258169011,53660.6767152086]}],
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

### <a name="http-go">Go</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency |
| -------- | ------------- | -------- | --------- | --------- | --------- | ------- |
| Go       | 35,136.48/rps | 4,737.27 | 46,036.93 | 38,391.35 | 43,689.29 | 1.42 ms |


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
                    series: [{"name":"Go","data":[156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,156142.77346436743,65740.42452543396,65740.42452543396,52971.644801698814,57115.2550296415,57115.2550296415,57115.2550296415,62854.38486541399,62854.38486541399,58570.59554311822,58570.59554311822,58570.59554311822,54621.726095334285,54621.726095334285,62136.94098525345,35136.48005834826]}],
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

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75    | p99     | Min      | Max      | Latency |
| -------- | ------------ | ------ | ------- | -------- | -------- | ------- |
| Ruby     | 6,297.89/rps | 727.83 | 8,222.3 | 6,776.81 | 7,892.45 | 7.94 ms |


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
                    series: [{"name":"Ruby","data":[6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,6491.104083528587,10046.87425215216,10046.87425215216,8727.75434457861,9162.370147462441,9162.370147462441,9162.370147462441,9561.031172649646,9561.031172649646,9239.42908012823,9239.42908012823,9239.42908012823,8922.537909534345,8922.537909534345,9085.360483200911,6297.892834581275]}],
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

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99     | Min      | Max      | Latency  |
| -------- | ------------ | ------ | ------- | -------- | -------- | -------- |
| Rust     | 4,821.93/rps | 704.14 | 7,438.3 | 5,348.02 | 6,157.66 | 10.37 ms |


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
                    series: [{"name":"Rust","data":[3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,3885.501343499964,7776.140576164982,7776.140576164982,6501.3410459465385,7061.567951283785,7061.567951283785,7061.567951283785,7688.644044455982,7688.644044455982,6966.711378885867,6966.711378885867,6966.711378885867,6660.014796835403,6660.014796835403,7319.363965686486,4821.927207353854]}],
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

