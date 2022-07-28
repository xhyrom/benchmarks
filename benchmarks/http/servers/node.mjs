import { createServer } from "node:http";

createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, World!', 'utf-8');
}).listen(3000);