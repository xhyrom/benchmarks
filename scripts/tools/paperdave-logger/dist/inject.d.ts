/**
 * Injects the logger into `globalThis.console`, or whatever is given. Only fills the following
 * functions: `log`, `info`, `warn`, `error`, `debug`.
 *
 * For accessing some special functions, use the `log` object directly.
 */
export declare function injectLogger(obj?: Console): void;
