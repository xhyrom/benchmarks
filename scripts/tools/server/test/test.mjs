import { bench, output } from "../implementations/js/main.mjs";

await bench(() => {
    Buffer.from("SGVsbG8sIFdvcmxkIQ==", "base64").toString();
});

await output();
