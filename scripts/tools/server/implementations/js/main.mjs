const BASE_URL = (typeof Bun === 'undefined' && typeof Deno === 'undefined') ? 'http://127.0.0.1:3001/bench' : 'http://localhost:3001/bench';
const AsyncFunction = (async () => { }).constructor;

export const send = async(start, end) => {
    const diff = (Number(end) - Number(start));

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            diff,
        })
    })
}

export const output = async() => {
    const res = await fetch(BASE_URL, {
        method: 'GET'
    });

    await fetch(BASE_URL, {
        method: 'DELETE'
    }).catch(() => {});

    const content = await res.json();
    if (typeof Bun !== 'undefined') Bun.write('./scripts/.cache/tmp/tmp.json', JSON.stringify(content));
    else if (typeof Deno !== 'undefined') Deno.writeTextFile('./scripts/.cache/tmp/tmp.json', JSON.stringify(content));
    else (await import('fs')).writeFileSync('./scripts/.cache/tmp/tmp.json', JSON.stringify(content));
}

export const time = () => {
    if (typeof Bun !== 'undefined') {
        return Bun.nanoseconds();
    }

    if (typeof Deno !== 'undefined') {
        return Math.ceil(1e6 * Deno.core.opSync('op_now'));
    }

    return process.hrtime.bigint();
}

export const bench = async(fn) => {
    let i = 100;

    if (fn.constructor === AsyncFunction) {
        while (0 < i--) {
            const t1 = time();
            
            await fn();
    
            const t2 = time();
            
            await send(t1, t2);
        }

        return;   
    }

    while (0 < i--) {
        const t1 = time();

        fn();

        const t2 = time();

        await send(t1, t2);
    }
}