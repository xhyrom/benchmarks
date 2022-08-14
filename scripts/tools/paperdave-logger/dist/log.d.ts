/** Writes a log line with a custom prefix */
export declare function log(prefix: string, content: string): void;
/** Writes a log line with a blue `info` prefix. */
export declare function info(...data: any[]): void;
/** Writes a log line with a yellow `warn` prefix. */
export declare function warn(...data: any[]): void;
/**
 * Writes a log line with a red `error` prefix. Accepts an `Error` or `PrintableError` in addition
 * to standard text, in which case it will print the error in a pretty way.
 */
export declare function error(...data: any[]): void;
/** Writes a log line with a cyan `debug` prefix. These are not visible by default. */
export declare function debug(...data: any[]): void;
/** Writes a log line in all green and with a checkmark prefix. */
export declare function success(...data: any[]): void;
/** Writes a log line in all red and with a cross prefix. */
export declare function fail(...data: any[]): void;
/** Writes raw line of text, but will do nothing if the log level is set to `LogLevel.Silent` */
export declare function writeLine(data: string): void;
