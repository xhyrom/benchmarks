export const layout = "layouts/base.tsx";

export default ({ benchmarks, comp }) => {
  return (
    <>
      <comp.Header />
      <p class="mt-4">
      You can checkout some absolutely shocking benchmarks here! If you want to contribute here's our <comp.Link url="https://github.com/xHyroM/benchmarks" name="repository" type="_blank" /> link.
      </p>

      <comp.Categories />
    </>
  );
}