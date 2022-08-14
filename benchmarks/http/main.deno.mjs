for await (const conn of Deno.listen({ port: 3000 })) {
    (async () => {
      for await (const { respondWith } of Deno.serveHttp(conn)) {
        respondWith(new Response("Hello, World!"));
      }
    })();
}