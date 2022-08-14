import type { EmptyObject } from '@paperdave/utils';
import type { Color } from './util';
import { LogWidget } from './widget';
/** A Progress Bar Style. Ascii is forced in non-unicode terminals. */
export declare enum BarStyle {
    Unicode = "unicode",
    Ascii = "ascii"
}
/** Options to be passed to `new Progress` */
export interface ProgressOptions<Props extends Record<string, unknown> = EmptyObject> {
    /** Text displayed to the right of the bar. */
    text: string | ((props: ExtendedProps<Props>) => string);
    /** Text displayed to the left of the bar, if specified. */
    beforeText?: string | ((props: ExtendedProps<Props>) => string);
    /** Properties to be passed to `text` and `beforeText` formatting functions. */
    props?: Props;
    /** Width of the progress bar itself. Default: 35. */
    barWidth?: number;
    /** Progress bar style, default `BarStyle.Unicode` */
    barStyle?: BarStyle | `${BarStyle}`;
    /** Spinner settings. Set to `null` to disable the spinner. */
    spinner?: Partial<BarSpinnerOptions> | null;
    /** Starting value. Default: 0. */
    value?: number;
    /** Ending value. Default: 100. */
    total?: number;
}
export interface BarSpinnerOptions {
    /** Frames per second of the Spinner. */
    fps: number;
    /** Sequence of frames for the spinner. */
    frames: string[];
    /** Color of the spinner. If set to `match` it will match the bar. */
    color: Color | `${Color}` | 'match';
}
declare type ExtendedProps<T> = T & {
    value: number;
    total: number;
    /** Number 0-1, inclusive. */
    progress: number;
};
export declare class Progress<Props extends Record<string, unknown>> extends LogWidget {
    #private;
    protected fps: number;
    constructor(options: ProgressOptions<Props>);
    /** Properties to be passed to `text` and `beforeText` formatting functions. */
    set props(value: Partial<Props>);
    get props(): ExtendedProps<Props>;
    /** Text displayed to the right of the bar. */
    get text(): string;
    set text(value: string | (() => string));
    /** Text displayed to the left of the bar, if specified. */
    get beforeText(): string;
    set beforeText(value: string | (() => string));
    /** Current value of progress bar. */
    get value(): number;
    set value(value: number);
    /** Total value of progress bar. When value === total, the bar is full. */
    get total(): number;
    set total(value: number);
    /** Updates the progress bar with a new value and props. */
    update(value: number, props?: Partial<Props>): void;
    protected format(now: number): string;
    success(message?: string): void;
    fail(message?: string | Error): void;
}
export interface WithProgressOptions<Props extends Record<string, unknown>, T> extends ProgressOptions<Props> {
    /** Message to print on success. If a function, the result is passed. */
    successText?: string | ((result: T) => string);
    /** Message to print on fail. If a function, the error is passed. */
    failureText?: string | ((error: Error) => string);
}
export declare function withProgress<Props extends Record<string, unknown>, T>(fn: (bar: Progress<Props>) => Promise<T>, opts: WithProgressOptions<Props, T>): Promise<void>;
export {};
