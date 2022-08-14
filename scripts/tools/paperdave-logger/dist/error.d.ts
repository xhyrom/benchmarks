/**
 * A Printable Error is an error that defines some extra fields. `@paperdave/logger` handles these
 * objects within logs which allows customizing their appearance. It can be useful when building
 * CLIs to throw formatted error objects that instruct the user what they did wrong, without
 * printing a huge piece of text with a useless stack trace.
 *
 * @see {CLIError} an easy class to construct these objects.
 */
export interface PrintableError extends Error {
    description: string;
    hideStack?: boolean;
    hideName?: boolean;
}
export declare function isBuiltin(pathname: string): boolean;
/** Utility function we use internally for formatting the stack trace of an error. */
export declare function formatStackTrace(err: Error): string;
/** Formats the given error as a full log string. */
export declare function formatErrorObj(err: Error | PrintableError, boldFirstLine?: boolean): string;
/**
 * When this error is passed to `log.error`, it will be printed with a custom long-description. This
 * is useful to give users a better description on what the error actually is. Does not show a stack
 * trace by default.
 *
 * For example, in Purplet we throw this error if the `$DISCORD_BOT_TOKEN` environment variable is missing.
 *
 * ```ts
 * new CLIError(
 *   'Missing DISCORD_BOT_TOKEN environment variable!',
 *   dedent`
 *     Please create an ${chalk.cyan('.env')} file with the following contents:
 *
 *     ${chalk.cyanBright('DISCORD_BOT_TOKEN')}=${chalk.grey('<your bot token>')}
 *
 *     You can create or reset your bot token at ${devPortalLink}
 *   `
 * );
 * ```
 */
export declare class CLIError extends Error implements PrintableError {
    message: string;
    description: string;
    constructor(message: string, description: string);
    get hideStack(): boolean;
    get hideName(): boolean;
}
