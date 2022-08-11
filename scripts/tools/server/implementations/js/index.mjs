const BASE_URL = (typeof Bun === 'undefined' && typeof Deno === 'undefined') ? 'http://127.0.0.1:3001' : 'http://localhost:3001';
const AsyncFunction = (async () => { }).constructor;

export const send = async(start, end) => {
    const diff = (Number(end) - Number(start));

    await fetch(`${BASE_URL}/bench`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            diff,
        })
    })
}

/**
 * @typedef {{
 *    all: {
 *       startNs: number;
 *       endNs: number;
 *       diff: number;
 *    }[];
 *    min: number;
 *    max: number;
 *    avg: number;
 *    p75: number;
 *    p99: number;
 * }} Output
 */

/**
 * @returns {Promise<Output>}
 */
export const output = async() => {
    const res = await fetch(`${BASE_URL}/bench`, {
        method: 'GET'
    });

    return res.json();
}

export const time = () => {
    try {
        return Bun.nanoseconds();
    } catch(e) {}

    try {
        return Math.ceil(1e6 * Deno.core.opSync('op_now'))
    } catch(e) {}

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