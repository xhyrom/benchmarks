<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
- [JavaScript](#http-javascript)
- [Python](#http-python)
- [Crystal](#http-crystal)
- [Go](#http-go)
- [Ruby](#http-ruby)
- [Rust](#http-rust)

### <a name="http-javascript">JavaScript</a>

| Language                                                       | Average       | p75       | p99        | Min       | Max       | Latency   |
| -------------------------------------------------------------- | ------------- | --------- | ---------- | --------- | --------- | --------- |
| JavaScript /  bun 0.1.10 (x64-linux)                           | 83,370.05/rps | 3,073.98  | 95,575.45  | 84,557.64 | 88,806.32 | 597.71 µs |
| JavaScript / flash (new Deno.serve) /  deno 1.25.0 (x64-linux) | 68,130.64/rps | 11,142.01 | 147,950.88 | 73,141.77 | 74,326.86 | 733.6 µs  |
| JavaScript /  deno 1.25.0 (x64-linux)                          | 45,859.93/rps | 5,953.53  | 50,597.95  | 49,437.01 | 50,230.81 | 1.09 ms   |
| JavaScript /  node 18.8.0 (x64-linux)                          | 36,724.22/rps | 4,410.61  | 41,174.17  | 37,996.31 | 38,742.32 | 1.36 ms   |


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
                    series: [{"name":" flash (new Deno.serve) / deno 1.25.0 (x64-linux)","data":[67962.53229681427,73816.0327945796,73816.0327945796,67041.41186042457,67041.41186042457,67041.41186042457,64612.73437776073,64612.73437776073,68639.03726927708,35738.327347383565,35738.327347383565,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,68130.64103034562]},{"name":" deno 1.25.0 (x64-linux)","data":[45368.27612682232,50038.88338178856,50038.88338178856,46875.80435967024,46875.80435967024,46875.80435967024,44700.703220106065,44700.703220106065,49239.91978334709,32731.345617636285,32731.345617636285,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,45859.929798737925]},{"name":" bun 0.1.10 (x64-linux)","data":[83868.9593715537,88651.24223084674,88651.24223084674,88098.69942802857,88098.69942802857,88098.69942802857,82717.62451661946,82717.62451661946,84140.9170376202,57073.88853615419,57073.88853615419,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,83370.04981922907]},{"name":" node 18.8.0 (x64-linux)","data":[38443.81950851121,45277.17240374968,45277.17240374968,38806.11069027558,38806.11069027558,38806.11069027558,36111.45982592125,36111.45982592125,44862.95022662719,16433.35657742133,16433.35657742133,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,36724.218463263875]}],
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

### <a name="http-python">Python</a>

| Language | Average      | p75      | p99      | Min      | Max      | Latency  |
| -------- | ------------ | -------- | -------- | -------- | -------- | -------- |
| Python   | 4,206.19/rps | 1,403.33 | 6,980.23 | 5,825.84 | 6,890.22 | 12.36 ms |


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
                    series: [{"name":"Python","data":[5859.64275420499,5590.489704203832,5590.489704203832,5950.274696735812,5950.274696735812,5950.274696735812,4658.277071750389,4658.277071750389,6361.704404612347,2947.138690384789,2947.138690384789,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,4206.185730814328]}],
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

### <a name="http-crystal">Crystal</a>

| Language | Average       | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------- | -------- | --------- | --------- | --------- | --------- |
| Crystal  | 81,038.68/rps | 5,084.26 | 85,034.97 | 83,236.92 | 84,759.98 | 615.51 µs |


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
                    series: [{"name":"Crystal","data":[80195.3550029617,83816.18698444877,83816.18698444877,82097.50248588737,82097.50248588737,82097.50248588737,78698.56532219853,78698.56532219853,83051.84258169011,53660.6767152086,53660.6767152086,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,81038.68156187731]}],
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

### <a name="http-go">Go</a>

| Language | Average      | p75      | p99       | Min       | Max       | Latency   |
| -------- | ------------ | -------- | --------- | --------- | --------- | --------- |
| Go       | 56,363.1/rps | 3,711.14 | 66,532.87 | 58,424.59 | 62,855.35 | 885.52 µs |


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
                    series: [{"name":"Go","data":[57115.2550296415,62854.38486541399,62854.38486541399,58570.59554311822,58570.59554311822,58570.59554311822,54621.726095334285,54621.726095334285,62136.94098525345,35136.48005834826,35136.48005834826,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,56363.0981974549]}],
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

### <a name="http-ruby">Ruby</a>

| Language | Average      | p75    | p99       | Min      | Max       | Latency |
| -------- | ------------ | ------ | --------- | -------- | --------- | ------- |
| Ruby     | 9,144.03/rps | 926.91 | 12,020.97 | 9,767.26 | 11,218.52 | 5.48 ms |


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
                    series: [{"name":"Ruby","data":[9162.370147462441,9561.031172649646,9561.031172649646,9239.42908012823,9239.42908012823,9239.42908012823,8922.537909534345,8922.537909534345,9085.360483200911,6297.892834581275,6297.892834581275,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,9144.028437191848]}],
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

### <a name="http-rust">Rust</a>

| Language | Average      | p75    | p99     | Min     | Max     | Latency |
| -------- | ------------ | ------ | ------- | ------- | ------- | ------- |
| Rust     | 6,918.74/rps | 688.99 | 9,296.9 | 7,374.5 | 8,644.8 | 7.22 ms |


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
                    series: [{"name":"Rust","data":[7061.567951283785,7688.644044455982,7688.644044455982,6966.711378885867,6966.711378885867,6966.711378885867,6660.014796835403,6660.014796835403,7319.363965686486,4821.927207353854,4821.927207353854,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,6918.742046605109]}],
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

