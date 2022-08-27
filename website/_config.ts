import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import windicss from "https://raw.githubusercontent.com/lumeland/experimental-plugins/6bb563d6bfbaa52603a0c6dd3d02ffaed2536e3d/windicss/windicss.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const site = lume({
    src: "./src",
}, {
    markdown: {
        options: {
            html: true,
        }
    }
});

site
    .copy([".png", ".ttf"])
    .use(parcelCss())
    .use(windicss({
        config: {
            shortcuts: {
                "link": "no-underline text-blue-600 hover:text-blue-800",
            }
        }
    }))
    .use(jsx());

export default site;
