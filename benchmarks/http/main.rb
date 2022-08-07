require 'socket'

socket = TCPServer.new(3000)

loop do
  client = socket.accept
  first_line = client.gets

  response = "HTTP/1.1 200\r\n\r\nHello, World!"
  client.puts(response)

  client.close
end

socket.close
