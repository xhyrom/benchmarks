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
| JavaScript /  bun 0.1.10 (x64-linux)                           | 60,852.48/rps | 7,025.77 | 74,019.71 | 64,104.13 | 69,542.21 | 820.09 µs |
| JavaScript / flash (new Deno.serve) /  deno 1.25.0 (x64-linux) | 41,961.11/rps | 8,819.37 | 51,701.09 | 47,690.46 | 51,004.98 | 1.19 ms   |
| JavaScript /  deno 1.25.0 (x64-linux)                          | 32,598.03/rps | 4,844.72 | 38,747.77 | 35,880.54 | 37,744.96 | 1.53 ms   |
| JavaScript /  node 18.8.0 (x64-linux)                          | 17,641.59/rps | 2,414.51 | 21,731.25 | 18,632.46 | 20,017.6  | 2.83 ms   |


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
                    series: [{"name":" flash (new Deno.serve) / deno 1.25.0 (x64-linux)","data":[67041.41186042457,67041.41186042457,64612.73437776073,64612.73437776073,68639.03726927708,35738.327347383565,35738.327347383565,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,35889.521740754426,68130.64103034562,40221.39729829879,41971.69793653661,49095.37198747607,41961.109056945286]},{"name":" deno 1.25.0 (x64-linux)","data":[46875.80435967024,46875.80435967024,44700.703220106065,44700.703220106065,49239.91978334709,32731.345617636285,32731.345617636285,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,29803.111131264603,45859.929798737925,32755.918879468394,34375.716475656496,36176.066833964964,32598.03305241871]},{"name":" bun 0.1.10 (x64-linux)","data":[88098.69942802857,88098.69942802857,82717.62451661946,82717.62451661946,84140.9170376202,57073.88853615419,57073.88853615419,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,53842.40035482336,83370.04981922907,60242.45104552516,66085.7330565343,67629.32737969211,60852.47610843986]},{"name":" node 18.8.0 (x64-linux)","data":[38806.11069027558,38806.11069027558,36111.45982592125,36111.45982592125,44862.95022662719,16433.35657742133,16433.35657742133,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,17662.30023117817,36724.218463263875,15612.070136174894,18730.531123838224,19858.616102683376,17641.590471621694]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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
| Python   | 3,292.35/rps | 582.33 | 4,400.98 | 3,933.28 | 4,329.98 | 15.92 ms |


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
                    series: [{"name":"Python","data":[5950.274696735812,5950.274696735812,4658.277071750389,4658.277071750389,6361.704404612347,2947.138690384789,2947.138690384789,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,2980.700510020002,4206.185730814328,3154.923917289575,3367.2855146149495,3437.609042087084,3292.3542725365396]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

| Language | Average       | p75     | p99        | Min       | Max       | Latency   |
| -------- | ------------- | ------- | ---------- | --------- | --------- | --------- |
| Crystal  | 61,823.36/rps | 9,470.3 | 217,891.18 | 66,532.53 | 69,376.63 | 809.97 µs |


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
                    series: [{"name":"Crystal","data":[82097.50248588737,82097.50248588737,78698.56532219853,78698.56532219853,83051.84258169011,53660.6767152086,53660.6767152086,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,54326.43668198202,81038.68156187731,57218.09824565391,62362.776646723025,61828.13086560777,61823.35700270495]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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
| Go       | 35,787.16/rps | 3,638.85 | 50,085.71 | 38,219.51 | 42,611.61 | 1.4 ms  |


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
                    series: [{"name":"Go","data":[58570.59554311822,58570.59554311822,54621.726095334285,54621.726095334285,62136.94098525345,35136.48005834826,35136.48005834826,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,34974.10553327195,56363.0981974549,34270.331714862354,35283.86686289767,40975.127306940165,35787.15632675125]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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
| Ruby     | 6,972.78/rps | 754.62 | 9,105.2 | 7,446.15 | 8,564.13 | 7.17 ms |


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
                    series: [{"name":"Ruby","data":[9239.42908012823,9239.42908012823,8922.537909534345,8922.537909534345,9085.360483200911,6297.892834581275,6297.892834581275,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,6235.57667766975,9144.028437191848,6279.887124058943,6973.955253351416,7338.277245771557,6972.778741377411]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

| Language | Average      | p75    | p99      | Min      | Max      | Latency  |
| -------- | ------------ | ------ | -------- | -------- | -------- | -------- |
| Rust     | 4,928.78/rps | 667.06 | 7,650.72 | 5,398.15 | 6,335.06 | 10.17 ms |


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
                    series: [{"name":"Rust","data":[6966.711378885867,6966.711378885867,6660.014796835403,6660.014796835403,7319.363965686486,4821.927207353854,4821.927207353854,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,4604.671471125463,6918.742046605109,4723.318635000458,5131.836600408682,5243.087060035497,4928.778131915282]}],
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
                        categories: ["5bb06d6","d53b782","4003018","3ee7b8c","ff3683a","6e218ab","c434a6d","2feb9a5","ff55f3d","00d24dd","d3194b4","3828643","89e8f77","d2c6ac7","c17fc69","f749858","1220af9","d9eb378","ae1b26b","Latest"],
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

