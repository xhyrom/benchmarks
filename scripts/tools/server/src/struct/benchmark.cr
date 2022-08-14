struct Benchmark
  property diff : Int64

  def initialize(@diff : Int64)
  end

  def to_json(json : JSON::Builder)
    json.object do
      json.field "diff", self.diff
    end
  end
end
