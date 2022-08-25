Deno.serve(
    {
        port: 3000
    },
    () => new Response('Hello, World!')
);