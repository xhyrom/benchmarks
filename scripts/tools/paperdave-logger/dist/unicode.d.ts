/**
 * Boolean if the current environment supports unicode. Functions identically to the
 * `is-unicode-supported` package.
 */
export declare const isUnicodeSupported: boolean;
/**
 * Contains unicode symbols for various log symbols, falling to non-unicode characters if needed.
 * Does not have colors, unlike the `log-symbols` package this is based off of.
 */
export declare const logSymbols: {
    error: string;
    success: string;
    info: string;
    warning: string;
};
