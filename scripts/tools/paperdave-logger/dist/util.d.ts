/**
 * In this package we use `writeSync(STDOUT, ...)` to write to the stdout instead of
 * `console.log(...)`, or `process.stdout.write(...)` since it is faster and the code will work
 * across node and bun.
 */
export declare const STDOUT = 1;
/** Hardcoded magic number, all prefixes are 6 characters excluding colors, eg `info `. */
export declare const PREFIX_LENGTH = 6;
/** For `ansi-wrap` */
export declare const wrapOptions: {
    trim: boolean;
    hard: boolean;
};
/** Converts non string objects into a string the way Node.js' console.log does it. */
export declare function stringify(...data: any[]): string;
export declare type Timer = ReturnType<typeof setInterval>;
/** A console color enum. */
export declare enum Color {
    Black = "black",
    Red = "red",
    Green = "green",
    Yellow = "yellow",
    Blue = "blue",
    Magenta = "magenta",
    Cyan = "cyan",
    White = "white",
    BlackBright = "blackBright",
    RedBright = "redBright",
    GreenBright = "greenBright",
    YellowBright = "yellowBright",
    BlueBright = "blueBright",
    MagentaBright = "magentaBright",
    CyanBright = "cyanBright",
    WhiteBright = "whiteBright"
}
