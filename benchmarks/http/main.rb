require 'socket'
server = TCPServer.new 3000
 
while session = server.accept
  request = session.gets
  puts request
 
  session.print "HTTP/1.1 200\r\n"
  session.print "Content-Type: text/plain;charset=utf-8\r\n"
  session.print "Content-Length: 13\r\n"
  session.print "\r\n"
  session.print "Hello, World!" 
 
  session.close
end
