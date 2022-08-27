export const layout = "layouts/base.tsx";

export default ({ benchmarks, comp }) => {
  return (
    <>
      <comp.Header />
      <p class="mt-4">
      You can checkout some absolutely shocking benchmarks here! If you want to contribute here's our <comp.Link url="https://github.com/xHyroM/benchmarks" name="repository" type="_blank" /> link.
      </p>

      <div class="mt-12 pt-1">
        <h4 class="text-2xl font-bold tracking-tight">Categories</h4>
        <ul class="ml-8 list-disc my-2">
          {benchmarks.categories.map(c => {
            return (
              <li>
                <comp.Link url={`./benchmarks/${c}`} name={c} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}