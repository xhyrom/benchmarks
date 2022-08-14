import { Color } from './util';
import { LogWidget } from './widget';
export interface SpinnerOptions<Props extends Record<string, unknown>> {
    /** Text displayed to the right of the spinner. */
    text: string | ((props: Props) => string);
    /** Color of the spinner. */
    color?: Color | `${Color}` | false;
    /** Sequence of frames for the spinner. */
    frames?: string[];
    /** Frames per second of the Spinner. */
    fps?: number;
    /** Properties to be passed to the `text` formatting function. */
    props?: Props;
}
export declare const defaultSpinnerOptions: {
    text: string;
    color: Color;
    frames: string[];
    fps: number;
};
export declare class Spinner<Props extends Record<string, unknown>> extends LogWidget {
    #private;
    protected fps: number;
    constructor(options: SpinnerOptions<Props>);
    /** Text displayed to the right of the spinner. */
    get text(): string;
    set text(value: string | (() => string));
    /** Properties to be passed to `text` and `beforeText` formatting functions. */
    set props(value: Partial<Props>);
    get props(): Props;
    /**
     * Updates the spinner by supplying either a new `message` string or a partial object of props to
     * be used by the custom message function.
     */
    update(newProps: Partial<Props>): void;
    update(newMessage: string): void;
    protected format(now: number): string;
    success(message?: string): void;
    fail(message?: string | Error): void;
}
export interface WithSpinnerOptions<Props extends Record<string, unknown>, T> extends SpinnerOptions<Props> {
    successText?: string | ((result: T) => string);
    failureText?: string | ((error: Error) => string);
}
export declare function withSpinner<Props extends Record<string, unknown>, T>(fn: (spinner: Spinner<Props>) => Promise<T>, opts: WithSpinnerOptions<Props, T>): Promise<void>;
