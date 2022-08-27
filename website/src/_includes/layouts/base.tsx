export default ({ children, loadCss }) => {
  return (
    <>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charset="UTF-8" />
          <link href="/windi.css" rel="stylesheet" />
          <link href="/assets/main.css" rel="stylesheet" />

          {loadCss ? loadCss.map((css) => {
            return <link href={`/assets/${css}.css`} rel="stylesheet" />
          }) : null}
        </head>
        <body class="bg-gray-50">
          <main>
            <div class="min-h-full">
              <div class="mb-12">
                <div class="section-x-inset-md mt-8 pb-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </body>
    </>
  );
}