export const layout = "layouts/base.tsx";

export default async({ benchmarks, comp }) => {
  const cmd = Deno.build.os === "linux" ? `lscpu | grep 'Model name' | cut -f 2 -d ":" | awk '{$1=$1}1'` : `sysctl -n machdep.cpu.brand_string`;

  const p = Deno.run({
    cmd: ["bash", "-c", cmd],
    stdout: 'piped',
  });

  await p.status();

  const cpu = new TextDecoder().decode(await p.output()).replace(/\n|\r/g, '');

  return (
    <>
      <comp.Header />
      <p class="mt-4">
      You can checkout some absolutely shocking benchmarks here! If you want to contribute here's our <comp.Link url="https://github.com/xHyroM/benchmarks" name="repository" type="_blank" /> link.
      <br />
      It is possible that the numbers are very low due to running on <b>Github Actions</b> and on cpu <b>{cpu}</b>
      </p>

      <comp.Categories />
    </>
  );
}