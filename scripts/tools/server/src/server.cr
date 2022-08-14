

require "kemal"
require "./struct/benchmark.cr"

benchmarks = [] of Benchmark

post "/bench" do |env|
  env.response.content_type = "application/json"

  bench = Benchmark.new(env.params.json["diff"].as(Int64))
  benchmarks.push(bench)

  bench.to_json
end

get "/bench" do |env|
  env.response.content_type = "application/json"

  if benchmarks.size === 0
    next {"message": "empty"}.to_json
  end

  n = benchmarks.size
  avg = 0_i128
  benchmarks = benchmarks.sort { |x, y| x.diff <=> y.diff }
  benchmarks.each { |x| avg += x.diff }
  avg = avg / benchmarks.size

  p75 = benchmarks[(n * (75 / 100)).ceil().to_i - 1].diff
  p99 = benchmarks[(n * (99 / 100)).ceil().to_i - 1].diff

  {"min": benchmarks[0].diff, "max": benchmarks[benchmarks.size - 1].diff, "avg": avg, "p75": p75, "p99": p99}.to_json
end

delete "/bench" do
  exit 0
end

Kemal.config.port = 3001
Kemal.run
