import http from 'node:http';

http
  .Server((_, res) => {
    res.end('Hello, World!');
  })
  .listen(3000);