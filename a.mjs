Deno.serve(
    {
        port: 3001
    },
    () => new Response('Hello, World!')
);