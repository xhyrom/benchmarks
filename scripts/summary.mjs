import * as kleur from "../node_modules/mitata/reporter/clr.mjs";

let join;
if (typeof Deno === "undefined") {
    join = (await import("node:path")).join;
} else {
    join = (await import('https://deno.land/std@0.141.0/node/path/mod.ts')).join;
}

/**
 * @param {Output} output 
 * @param {Runtime} runtime 
 * @param {string} path 
 * @param {{[x: (name: string) => string]}} keepFrom 
 * 
 * @typedef {{
 *  benchmarks: any[];
 *  cpu: any;
 *  runtime: string;
 * }} Output
 * 
 * @typedef {'deno'|'bun'|'node'} Runtime
 */
export const save = async(output, runtime, path, keepFrom) => {
    output.benchmarks = output.benchmarks.map(b => {
        return { ...b, formattedName: `[${runtime}] ${b.name}`, id: b.name, benchmark: keepFrom?.[b.group]?.(b.name) || b.name }
    });

    if (typeof Bun !== "undefined") {
        await Bun.write(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    } else if (typeof Deno !== "undefined") {
        await Deno.writeTextFile(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    } else {
        (await import("fs/promises")).writeFile(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    }
}

export default async(summaries, benchmarks) => {
    for (const summaryName of summaries) {
        console.log(kleur.bold(true, `Summary for ${kleur.green(true, summaryName)}`));

        // Node & Deno
        const nodeAndDeno = [benchmarks.find(b => b.formattedName.includes('node') && b.id === summaryName), benchmarks.find(b => b.formattedName.includes('deno') && b.id === summaryName)];
        console.log(__summary(nodeAndDeno, '(node & deno)'));

        // Node & Bun
        const nodeAndBun = [benchmarks.find(b => b.formattedName.includes('node') && b.id === summaryName), benchmarks.find(b => b.formattedName.includes('bun') && b.id === summaryName)];
        console.log(__summary(nodeAndBun, '(node & bun)'));

        // Deno & Bun
        const denoAndBun = [benchmarks.find(b => b.formattedName.includes('deno') && b.id === summaryName), benchmarks.find(b => b.formattedName.includes('bun') && b.id === summaryName)];
        console.log(__summary(denoAndBun, '(deno & bun)'));

        // All
        console.log(__summary(benchmarks.filter(b => b.id === summaryName)));
    }
}

export function __summary(benchmarks, type = '(deno & bun & node)', { colors = true } = {}) {
    benchmarks = benchmarks.filter(b => !b.error);
    benchmarks.sort((a, b) => a.stats.avg - b.stats.avg);
    const baseline = benchmarks.find(b => b.baseline) || benchmarks[0];
  
    return kleur.bold(colors, type) + ((null == baseline.group || baseline.group.startsWith?.('$mitata_group')) ? '' : kleur.gray(colors, ` for ${baseline.group}`))
      + `\n  ${kleur.bold(colors, kleur.cyan(colors, baseline.name))}`
  
      + benchmarks.filter(b => b !== baseline).map(b => {
        const diff = Number((1 / baseline.stats.avg * b.stats.avg).toFixed(2));
        const inv_diff = Number((1 / b.stats.avg * baseline.stats.avg).toFixed(2));
        return `\n   ${kleur[1 > diff ? 'red' : 'green'](colors, 1 <= diff ? diff : inv_diff)}x ${1 > diff ? 'slower' : 'faster'} than ${kleur.bold(colors, kleur.cyan(colors, b.name))}`;
      }).join('');
  }