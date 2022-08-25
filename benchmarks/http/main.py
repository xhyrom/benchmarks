from http.server import BaseHTTPRequestHandler, HTTPServer

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type','text/plain;charset=utf-8')
        self.send_header('Content-Length','13')
        self.end_headers()

        message = "Hello, World!"
        self.wfile.write(bytes(message, "utf8"))
    def log_message(self, format, *args):
        return

with HTTPServer(('', 3000), handler) as server:
    server.serve_forever()
