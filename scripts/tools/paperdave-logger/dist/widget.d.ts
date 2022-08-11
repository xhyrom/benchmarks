/**
 * A Log Widget is a piece of log content that is held at the bottom of the console log, and can be
 * animated/dynamically updated. It is used to create spinners, progress bars, and other rich visuals.
 */
export declare abstract class LogWidget {
    #private;
    constructor();
    /**
     * Returns a string of what the widget looks like. Called 15 times per second to allow for smooth
     * animation. The value passed to now is the result of `performance.now`.
     */
    protected abstract format(now: number): string;
    /**
     * The current FPS of the widget. If this is set to 0, the widget will not automatically update,
     * and you must call `update`.
     */
    protected abstract fps: number;
    /** Removes this widget from the log. */
    protected remove(finalMessage?: string): void;
    /** Forces a redraw to happen immediately. */
    protected redraw(): void;
    /** @internal */
    private __internalUpdate;
    /** @interal */
    private __internalGetText;
    /**
     * Runs the given function without redrawing anything, then runs a redraws. This is used to batch
     * some updates together without having to redraw the current widgets more than once per frame.
     */
    static batchRedraw(fn: () => void): void;
    /** Remove this widget with a success message. */
    success(message: string): void;
    /** Remove this widget with a failure message. */
    fail(message: string | Error): void;
}
export declare function clearWidgets(): void;
export declare function redrawWidgets(): void;
