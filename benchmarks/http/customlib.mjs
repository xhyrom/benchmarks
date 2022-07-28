import { benchmark, br, header, size } from "../../node_modules/mitata/reporter/table.mjs";

// From mitata
function runtime() {
    if ('Bun' in globalThis) return 'bun';
    if ('Deno' in globalThis) return 'deno';
    if ('process' in globalThis) return 'node';
    if ('navigator' in globalThis) return 'browser';
  
    return 'unknown';
 }
  
function version() {
    return ({
        unknown: () => '',
        browser: () => '',
        node: () => process.version,
        deno: () => Deno.version.deno,
        bun: () => process.versions.bun,
    })[runtime()]();
}

function os() {
    return ({
        unknown: () => 'unknown',
        browser: () => 'unknown',
        deno: () => Deno.build.target,
        bun: () => `${process.arch}-${process.platform}`,
        node: () => `${process.arch}-${process.platform}`,
    })[runtime()]();
}
// From mitata ^

let exec;
if (typeof Bun !== "undefined") {
    exec = (await import("bun-utilities")).exec;
} else if (typeof Deno !== "undefined") {
    exec = async(commands) => {
        const output = await Deno.spawn(commands[0], {
            args: commands.slice(1),
            stdin: "null",
            stdout: "piped",
            stderr: "null",
        })

        return {
            stdout: new TextDecoder().decode(await output.stdout)
        };
    };
} else {
    const nodeExec = (await import("node:child_process")).execSync;
    exec = async(commands) => {
        return {
            stdout: nodeExec(commands.join(" ")).toString()
        };
    }
}

export const run = async() => {
    const url = "http://localhost:3000/";
    const args = ["-p", "r", "-o", "j", "-l", "-c", "40", "-d", "10s", "-m", "GET", url];

    const bombardier = (await exec(["../../scripts/bombardier", ...args])).stdout;
    const parsed = JSON.parse(bombardier);

    const benchmarks = [
        {
            name: `http`,
            group: null,
            warmup: true,
            baseline: false,
            async: true,
            stats: {
                avg: parsed.result.rps.mean,
                min: parsed.result.rps.stddev,
                max: parsed.result.rps.max,
                p75: parsed.result.rps.percentiles["75"],
                p99: parsed.result.rps.percentiles["99"],
                p995: parsed.result.rps.percentiles["99"],
            },
        }
    ];

    const opts = {
        colors: true,
        collect: false,
        json: false,
        size: size(benchmarks.map(b => b.name)),
    }

    console.log(header(opts));
    console.log(br(opts));
    for (const b of benchmarks) {
        console.log(benchmark(b.name, b.stats, opts));
    }

    return {
        benchmarks,
        runtime: `${`${runtime()} ${version()}`.trim()} (${os()})`
    };
}