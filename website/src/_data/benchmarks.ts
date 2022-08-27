import { join, extname } from 'https://deno.land/std@0.149.0/path/mod.ts';

const toObject = (array: any[]): Record<string, any[]> => {
    return array.reduce((result, item) => {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
    }, {});
}

const __dirname = new URL('.', import.meta.url).pathname;

const outputs = toObject(
    [...Deno.readDirSync(join(__dirname, '..', '..', '..', 'scripts', '.cache', 'outputs'))]
        .map(o => {
            const path = join(__dirname, '..', '..', '..', 'scripts', '.cache', 'outputs', o.name);

            const content = [...Deno.readDirSync(path)];
            if (content.every(e => extname(e.name) === '')) {
                return { [o.name]: content.map(c => ({ [c.name]: [...Deno.readDirSync(join(path, c.name))].map(c => c.name) })) };
            }

            return { [o.name]: content.map(c => c.name) };
        })
);

export const categories = Object.keys(outputs);

export default outputs;