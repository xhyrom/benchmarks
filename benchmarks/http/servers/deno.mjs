const server = Deno.listen({ port: 3000 });

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    requestEvent.respondWith(
      new Response('Hello, World!', {
        status: 200,
      }),
    );
  }
}