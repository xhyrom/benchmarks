export declare const ansi: {
    bold: string;
    dim: string;
    underlined: string;
    blink: string;
    reverse: string;
    hidden: string;
    reset: string;
    resetBold: string;
    resetDim: string;
    resetUnderlined: string;
    resetBlink: string;
    resetReverse: string;
    resetHidden: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    blackBright: string;
    redBright: string;
    greenBright: string;
    yellowBright: string;
    blueBright: string;
    magentaBright: string;
    cyanBright: string;
    whiteBright: string;
    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;
    bgBlackBright: string;
    bgRedBright: string;
    bgGreenBright: string;
    bgYellowBright: string;
    bgBlueBright: string;
    bgMagentaBright: string;
    bgCyanBright: string;
    bgWhiteBright: string;
    up(n: number): string;
    down(n: number): string;
    forward(n: number): string;
    backward(n: number): string;
    clearLine: string;
    show: string;
    hide: string;
    rgb(r: number, g: number, b: number): string;
    bgRgb(r: number, g: number, b: number): string;
};
export declare function colorize(color: string, str: string): string;
declare const colorList: readonly ["bold", "dim", "underlined", "blink", "reverse", "hidden", "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "blackBright", "redBright", "greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright", "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgBlue", "bgMagenta", "bgCyan", "bgWhite", "bgBlackBright", "bgRedBright", "bgGreenBright", "bgYellowBright", "bgBlueBright", "bgMagentaBright", "bgCyanBright", "bgWhiteBright"];
interface T1 {
    /** Applies this color to a given string. */
    fn(str: string): string;
}
export declare type ColorObject = {
    [K in keyof T1 as typeof colorList[number]]: T1[K];
} & {
    /** Applies this RGB color to a given string. */
    rgb(r: number, g: number, b: number, string: string): string;
    /** Applies this RGB color to a given string. */
    bgRgb(r: number, g: number, b: number, string: string): string;
};
/** Simpler alternative to `chalk`, provides methods that colorize strings. */
export declare const colors: ColorObject;
export {};
