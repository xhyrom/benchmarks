require 'socket'

class RequestParser
  def parse(request)
    method, path, version = request.lines[0].split
    
    {
      path: path,
      method: method,
      headers: parse_headers(request)
    }
  end

  def parse_headers(request)
    headers = {}
    
    request.lines[1..-1].each do |line|
      return headers if line == "\r\n"
      
      header, value = line.split
      header        = normalize(header)
      
      headers[header] = value
    end
  end
    
  def normalize(header)
    header.gsub(":", "").downcase.to_sym
  end
end

class Response
  attr_reader :code

  def initialize(code:, data: "")
    @response =
    "HTTP/1.1 #{code}\r\n" +
    "Content-Length: #{data.size}\r\n" +
    "\r\n" +
    "#{data}\r\n"
    
    @code = code
  end
  
  def send(client)
    client.write(@response)
  end
end

class ResponseBuilder
  def prepare(request)
    Response.new(code: 200, data: "Hello, World!")
  end
end

server  = TCPServer.new('localhost', 3000)

loop {
  client  = server.accept
  request = client.readpartial(2048)
  
  request  = RequestParser.new.parse(request)
  response = ResponseBuilder.new.prepare(request)
  
  response.send(client)
  client.close
}