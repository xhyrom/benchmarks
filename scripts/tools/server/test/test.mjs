import { bench, output } from "../implementations/js/index.mjs";

bench(() => {
    Buffer.from("test").toString("base64")
})

console.log(output())