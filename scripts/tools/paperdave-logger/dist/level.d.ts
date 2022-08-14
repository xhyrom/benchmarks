/** Enum of log level names to their level ID. */
export declare enum LogLevel {
    /** Print nothing. */
    Silent = 0,
    /** Print only errors. */
    Error = 1,
    /** Print warnings and errors. */
    Warn = 2,
    /** Print all non-debug, the default. */
    Info = 3,
    /** Print everything. Default is `process.env.DEBUG` is set to true. */
    Debug = 4
}
/** Either a LogLevel or a string key of the LogLevel. */
declare type SetLevelInput = LogLevel | Lowercase<keyof typeof LogLevel>;
/** The log level. */
export declare let level: LogLevel;
/** Sets the log level. Accepts a `LogLevel` enum or a string. */
export declare function setLevel(show: SetLevelInput): void;
export {};
