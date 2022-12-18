import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import windicss from "lume/plugins/windi_css.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
    src: "./src",
    location: new URL("https://xhyrom.github.io/benchmarks"),
    server: {
        page404: "./index.html"
    }
}, {
    markdown: {
        options: {
            html: true,
        }
    }
});

site
    .copy([".png", ".ttf"])
    .use(basePath())
    .use(lightningCss())
    .use(windicss({
        config: {
            shortcuts: {
                "link": "no-underline text-blue-600 hover:text-blue-800",
            }
        }
    }))
    .use(jsx());

export default site;
