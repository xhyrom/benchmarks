var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/log.ts
var log_exports = {};
__export(log_exports, {
  debug: () => debug,
  error: () => error,
  fail: () => fail,
  info: () => info,
  log: () => log,
  success: () => success,
  warn: () => warn,
  writeLine: () => writeLine
});
import wrapAnsi2 from "wrap-ansi";
import { writeSync as writeSync2 } from "fs";

// src/ansi.ts
import supportsColor from "supports-color";
var ansi = {
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  underlined: "\x1B[4m",
  blink: "\x1B[5m",
  reverse: "\x1B[7m",
  hidden: "\x1B[8m",
  reset: "\x1B[0m",
  resetBold: "\x1B[21m",
  resetDim: "\x1B[22m",
  resetUnderlined: "\x1B[24m",
  resetBlink: "\x1B[25m",
  resetReverse: "\x1B[27m",
  resetHidden: "\x1B[28m",
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m",
  blackBright: "\x1B[90m",
  redBright: "\x1B[91m",
  greenBright: "\x1B[92m",
  yellowBright: "\x1B[93m",
  blueBright: "\x1B[94m",
  magentaBright: "\x1B[95m",
  cyanBright: "\x1B[96m",
  whiteBright: "\x1B[97m",
  bgBlack: "\x1B[40m",
  bgRed: "\x1B[41m",
  bgGreen: "\x1B[42m",
  bgYellow: "\x1B[43m",
  bgBlue: "\x1B[44m",
  bgMagenta: "\x1B[45m",
  bgCyan: "\x1B[46m",
  bgWhite: "\x1B[47m",
  bgBlackBright: "\x1B[100m",
  bgRedBright: "\x1B[101m",
  bgGreenBright: "\x1B[102m",
  bgYellowBright: "\x1B[103m",
  bgBlueBright: "\x1B[104m",
  bgMagentaBright: "\x1B[105m",
  bgCyanBright: "\x1B[106m",
  bgWhiteBright: "\x1B[107m",
  up(n) {
    return n === 0 ? "" : n === 1 ? `\x1B[A` : `\x1B[${n}A`;
  },
  down(n) {
    return n === 0 ? "" : n === 1 ? `\x1B[B` : `\x1B[${n}B`;
  },
  forward(n) {
    return n === 0 ? "" : n === 1 ? `\x1B[C` : `\x1B[${n}C`;
  },
  backward(n) {
    return n === 0 ? "" : n === 1 ? `\x1B[D` : `\x1B[${n}D`;
  },
  clearLine: "\x1B[2K",
  show: "\x1B[?25h",
  hide: "\x1B[?25l",
  rgb(r, g, b) {
    return `\x1B[38;2;${r};${g};${b}m`;
  },
  bgRgb(r, g, b) {
    return `\x1B[48;2;${r};${g};${b}m`;
  }
};
if (!supportsColor.stdout) {
  Object.keys(ansi).forEach((key) => {
    ansi[key] = typeof ansi[key] === "function" ? () => "" : "";
  });
}
function colorize(color, str) {
  return color + str.replaceAll(ansi.reset, ansi.reset + color) + ansi.reset;
}
var colorList = [
  "bold",
  "dim",
  "underlined",
  "blink",
  "reverse",
  "hidden",
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "blackBright",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
  "bgBlack",
  "bgRed",
  "bgGreen",
  "bgYellow",
  "bgBlue",
  "bgMagenta",
  "bgCyan",
  "bgWhite",
  "bgBlackBright",
  "bgRedBright",
  "bgGreenBright",
  "bgYellowBright",
  "bgBlueBright",
  "bgMagentaBright",
  "bgCyanBright",
  "bgWhiteBright"
];
var colors = {};
for (const colorName of colorList) {
  Object.defineProperty(colors, colorName, {
    value(str) {
      return colorize(ansi[colorName], str);
    }
  });
}
colors.rgb = (r, g, b, string) => colorize(ansi.rgb(r, g, b), string);
colors.bgRgb = (r, g, b, string) => colorize(ansi.bgRgb(r, g, b), string);

// src/error.ts
import path from "path";
import wrapAnsi from "wrap-ansi";
import { builtinModules } from "module";

// src/util.ts
import { inspect } from "util";
var STDOUT = 1;
var PREFIX_LENGTH = 6;
var wrapOptions = {
  trim: false,
  hard: true
};
function stringify(...data) {
  return data.map((obj) => typeof obj === "string" ? obj : inspect(obj, false, 4, true)).join(" ");
}

// src/error.ts
function isBuiltin(pathname) {
  return pathname.startsWith("node:") || builtinModules.includes(pathname);
}
function formatStackTrace(err) {
  if (!err.stack) {
    return "";
  }
  const v8firstLine = `${err.name}${err.message ? ": " + err.message : ""}
`;
  const parsed = err.stack.startsWith(v8firstLine) ? err.stack.slice(v8firstLine.length).split("\n").map((line) => {
    const match = /at (.*) \((.*):(\d+):(\d+)\)/.exec(line);
    if (!match) {
      return { method: "<unknown>", file: null, line: null, column: null };
    }
    return {
      method: match[1],
      file: match[2],
      line: parseInt(match[3], 10),
      column: parseInt(match[4], 10),
      native: line.includes("[native code]")
    };
  }) : err.stack.split("\n").map((line) => {
    const at = line.indexOf("@");
    const method = line.slice(0, at);
    const file = line.slice(at + 1);
    const fileSplit = /^(.*?):(\d+):(\d+)$/.exec(file);
    return {
      method: (["module code"].includes(method) ? "" : method) || "",
      file: fileSplit ? fileSplit[1] : null,
      line: fileSplit ? parseInt(fileSplit[2], 10) : null,
      column: fileSplit ? parseInt(fileSplit[3], 10) : null,
      native: file === "[native code]"
    };
  });
  const firstNative = parsed.reverse().findIndex((line) => !line.native);
  if (firstNative !== -1) {
    parsed.splice(0, firstNative, {
      native: true,
      method: "",
      column: null,
      line: null,
      file: null
    });
  }
  parsed.reverse();
  return parsed.map(({ method, file, line, column, native }) => {
    const source = native ? `[native code]` : file ? isBuiltin(file) ? `(${ansi.magenta}${file}${ansi.reset}${ansi.blackBright})` : [
      "(",
      ansi.cyan,
      process.platform === "win32" ? path.dirname(file).replace(/^file:\/\/\//g, "") : path.dirname(file).replace(/^file:\/\//g, ""),
      path.sep,
      ansi.green,
      path.basename(file),
      ansi.reset,
      ":",
      line + ":" + column,
      ansi.blackBright,
      ")"
    ].join("") : "<unknown>";
    return `\u200B  ${ansi.blackBright}at ${method === "" ? "" : `${method} `}${source}`;
  }).join("\n") + ansi.reset;
}
function formatErrorObj(err, boldFirstLine = false) {
  const { name, message, description, hideStack, hideName, stack } = err;
  return [
    boldFirstLine ? ansi.red + ansi.bold : ansi.red,
    hideName ? "" : (name != null ? name : "Error") + ": ",
    message != null ? message : "Unknown error",
    ansi.reset,
    description ? "\n" + wrapAnsi(description, 90 - PREFIX_LENGTH, wrapOptions) : "",
    hideStack || !stack ? "" : "\n" + formatStackTrace(err),
    description || !hideStack && stack ? "\n" : ""
  ].join("");
}
var CLIError = class extends Error {
  constructor(message, description) {
    super(message);
    this.message = message;
    this.description = description;
    this.name = "CLIError";
  }
  get hideStack() {
    return true;
  }
  get hideName() {
    return true;
  }
};

// src/level.ts
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["Silent"] = 0] = "Silent";
  LogLevel2[LogLevel2["Error"] = 1] = "Error";
  LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
  LogLevel2[LogLevel2["Info"] = 3] = "Info";
  LogLevel2[LogLevel2["Debug"] = 4] = "Debug";
  return LogLevel2;
})(LogLevel || {});
var level = typeof process !== "undefined" && !!process.env.DEBUG ? 4 /* Debug */ : 3 /* Info */;
function setLevel(show) {
  if (typeof show === "number") {
    level = show;
  } else {
    switch (show) {
      case "debug":
        level = 4 /* Debug */;
        break;
      case "info":
        level = 3 /* Info */;
        break;
      case "warn":
        level = 2 /* Warn */;
        break;
      case "error":
        level = 1 /* Error */;
        break;
      case "silent":
        level = 0 /* Silent */;
        break;
    }
  }
}

// src/unicode.ts
var isUnicodeSupported = process.platform === "win32" ? Boolean(process.env.CI) || Boolean(process.env.WT_SESSION) || process.env.ConEmuTask === "{cmd::Cmder}" || process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty" || process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm" : process.env.TERM !== "linux";
var logSymbols = isUnicodeSupported ? {
  error: "\u2716",
  success: "\u2714",
  info: "\u2139",
  warning: "\u26A0"
} : {
  error: "x",
  success: "\u221A",
  info: "i",
  warning: "\u203C"
};

// src/widget.ts
import { writeSync } from "fs";
var widgets = [];
var widgetLineCount = 0;
var widgetTimer;
var widgetDrawingDisabled = false;
var _nextUpdate, _text, _newlines;
var _LogWidget = class {
  constructor() {
    __privateAdd(this, _nextUpdate, 0);
    __privateAdd(this, _text, "");
    __privateAdd(this, _newlines, 0);
    widgets.push(this);
    if (!widgetTimer) {
      widgetTimer = setInterval(redrawWidgets, 1e3 / 60);
      writeSync(STDOUT, ansi.hide);
    }
  }
  remove(finalMessage) {
    const index = widgets.indexOf(this);
    if (index >= 0) {
      widgets.splice(index, 1);
    }
    clearWidgets();
    if (finalMessage) {
      writeSync(STDOUT, finalMessage + "\n");
    }
    if (widgets.length === 0) {
      clearInterval(widgetTimer);
      widgetTimer = void 0;
      writeSync(STDOUT, ansi.show);
    } else {
      redrawWidgets();
    }
  }
  redraw() {
    __privateSet(this, _nextUpdate, 0);
    redrawWidgets();
  }
  __internalUpdate(now) {
    if (now > __privateGet(this, _nextUpdate)) {
      __privateSet(this, _nextUpdate, this.fps === 0 ? Infinity : now + 1e3 / this.fps);
      const text = this.format(now);
      if (text !== __privateGet(this, _text)) {
        __privateSet(this, _text, text + "\n");
        __privateSet(this, _newlines, text.split("\n").length);
      }
      return true;
    }
    return false;
  }
  __internalGetText() {
    widgetLineCount += __privateGet(this, _newlines);
    return __privateGet(this, _text);
  }
  static batchRedraw(fn) {
    widgetDrawingDisabled = true;
    fn();
    widgetDrawingDisabled = false;
    redrawWidgets();
  }
  success(message) {
    _LogWidget.batchRedraw(() => {
      success(message);
      this.remove();
    });
  }
  fail(message) {
    _LogWidget.batchRedraw(() => {
      fail(message);
      this.remove();
    });
  }
};
var LogWidget = _LogWidget;
_nextUpdate = new WeakMap();
_text = new WeakMap();
_newlines = new WeakMap();
function clearWidgets() {
  if (widgetLineCount) {
    writeSync(
      STDOUT,
      ansi.clearLine + (ansi.up(1) + ansi.clearLine).repeat(widgetLineCount) + "\r"
    );
    widgetLineCount = 0;
  }
}
function redrawWidgets() {
  if (!widgetTimer || widgetDrawingDisabled) {
    return;
  }
  const now = performance.now();
  const hasUpdate = widgets.filter((widget) => widget["__internalUpdate"](now)).length > 0;
  if (hasUpdate || widgetLineCount === 0) {
    clearWidgets();
    writeSync(STDOUT, widgets.map((widget) => widget["__internalGetText"]()).join(""));
  }
}

// src/log.ts
function log(prefix, content) {
  clearWidgets();
  if (content === "") {
    writeSync2(STDOUT, "\n");
    return;
  }
  const wrapped = wrapAnsi2(content, 90 - PREFIX_LENGTH, wrapOptions).replace(/\n\s*/g, "\n" + " ".repeat(PREFIX_LENGTH));
  writeSync2(STDOUT, prefix + wrapped + "\n");
  redrawWidgets();
}
function info(...data) {
  if (level >= 3 /* Info */) {
    log(`${ansi.blueBright}${ansi.bold}info  ${ansi.reset}`, stringify(...data));
  }
}
function warn(...data) {
  if (level >= 2 /* Warn */) {
    log(
      `${ansi.yellowBright}${ansi.bold}warn  ${ansi.reset}`,
      colorize(ansi.yellowBright, stringify(...data))
    );
  }
}
function error(...data) {
  if (level >= 1 /* Error */) {
    log(
      `${ansi.redBright}${ansi.bold}error ${ansi.reset}`,
      data.length === 1 && data[0] instanceof Error ? formatErrorObj(data[0]) : colorize(ansi.redBright, stringify(...data))
    );
  }
}
function debug(...data) {
  if (level >= 4 /* Debug */) {
    log(`${ansi.cyanBright}${ansi.bold}debug ${ansi.reset}`, stringify(...data));
  }
}
function success(...data) {
  if (level >= 3 /* Info */) {
    const str = stringify(...data);
    clearWidgets();
    if (str === "") {
      writeSync2(0, "\n");
    } else {
      writeSync2(
        0,
        wrapAnsi2(
          colorize(ansi.green + ansi.bold, logSymbols.success + " " + str),
          90,
          wrapOptions
        ) + "\n"
      );
    }
    redrawWidgets();
  }
}
function fail(...data) {
  if (level >= 3 /* Info */) {
    const str = stringify(...data);
    clearWidgets();
    if (str === "") {
      writeSync2(0, "\n");
    } else {
      writeSync2(
        0,
        data.length === 1 && data[0] instanceof Error ? formatErrorObj(data[0], true) : wrapAnsi2(
          colorize(ansi.red + ansi.bold, logSymbols.error + " " + stringify(...data)),
          90,
          wrapOptions
        ) + "\n"
      );
    }
    redrawWidgets();
  }
}
function writeLine(data) {
  if (level > 0 /* Silent */) {
    clearWidgets();
    writeSync2(STDOUT, data + "\n");
    redrawWidgets();
  }
}

// src/inject.ts
function injectLogger(obj = console) {
  obj.log = info;
  obj.info = info;
  obj.warn = warn;
  obj.error = error;
  obj.debug = debug;
}

// src/hsv.ts
function convertHSVtoRGB(h, s, v) {
  let r, g, b;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;
    case 1:
      r = q, g = v, b = p;
      break;
    case 2:
      r = p, g = v, b = t;
      break;
    case 3:
      r = p, g = q, b = v;
      break;
    case 4:
      r = t, g = p, b = v;
      break;
    case 5:
      r = v, g = p, b = q;
      break;
    default:
      return [0, 0, 0];
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// src/spinner.ts
import wrapAnsi3 from "wrap-ansi";
var defaultSpinnerOptions = {
  text: "Loading...",
  color: "blueBright" /* BlueBright */,
  frames: ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"],
  fps: 12.5
};
var _text2, _color, _frames, _props;
var Spinner = class extends LogWidget {
  constructor(options) {
    var _a, _b, _c, _d, _e;
    super();
    __privateAdd(this, _text2, void 0);
    __privateAdd(this, _color, void 0);
    __privateAdd(this, _frames, void 0);
    __privateAdd(this, _props, void 0);
    __publicField(this, "fps");
    __privateSet(this, _text2, (_a = options.text) != null ? _a : defaultSpinnerOptions.text);
    __privateSet(this, _color, (_b = options.color) != null ? _b : defaultSpinnerOptions.color);
    __privateSet(this, _frames, (_c = options.frames) != null ? _c : defaultSpinnerOptions.frames);
    this.fps = (_d = options.fps) != null ? _d : defaultSpinnerOptions.fps;
    __privateSet(this, _props, (_e = options.props) != null ? _e : {});
  }
  get text() {
    return typeof __privateGet(this, _text2) === "function" ? __privateGet(this, _text2).call(this, __privateGet(this, _props)) : __privateGet(this, _text2);
  }
  set text(value) {
    __privateSet(this, _text2, value);
    this.redraw();
  }
  set props(value) {
    __privateSet(this, _props, __spreadValues(__spreadValues({}, __privateGet(this, _props)), value));
    this.redraw();
  }
  get props() {
    return __spreadValues({}, __privateGet(this, _props));
  }
  update(newData) {
    if (typeof newData === "string") {
      this.text = newData;
    } else {
      __privateSet(this, _props, __spreadValues(__spreadValues({}, __privateGet(this, _props)), newData));
      this.redraw();
    }
  }
  format(now) {
    const frame = Math.floor(now / (1e3 / this.fps)) % __privateGet(this, _frames).length;
    return (__privateGet(this, _color) ? ansi[__privateGet(this, _color)] + __privateGet(this, _frames)[frame] + ansi.reset : __privateGet(this, _frames)[frame]) + " " + wrapAnsi3(this.text, 90 - 1 - __privateGet(this, _frames)[frame].length, wrapOptions);
  }
  success(message) {
    super.success(message != null ? message : this.text);
  }
  fail(message) {
    super.fail(message != null ? message : this.text);
  }
};
_text2 = new WeakMap();
_color = new WeakMap();
_frames = new WeakMap();
_props = new WeakMap();
function withSpinner(fn, opts) {
  return __async(this, null, function* () {
    var _a;
    const spinner = new Spinner(opts);
    try {
      const result = yield fn(spinner);
      spinner.success(
        opts.successText ? typeof opts.successText === "function" ? opts.successText(result) : opts.successText : opts.text ? typeof opts.text === "function" ? opts.text(spinner.props) : opts.text : "Completed"
      );
    } catch (error2) {
      spinner.fail(
        typeof opts.failureText === "function" ? opts.failureText(error2) : (_a = opts.failureText) != null ? _a : error2
      );
      throw error2;
    }
  });
}

// src/progress.ts
var boxChars = [" ", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589"];
var fullBox = "\u2588";
var asciiChars = {
  start: "[",
  end: "]",
  empty: " ",
  fill: "="
};
function getUnicodeBar(progress, width) {
  if (progress >= 1) {
    return fullBox.repeat(width);
  }
  if (progress <= 0 || isNaN(progress)) {
    return " ".repeat(width);
  }
  const wholeWidth = Math.floor(progress * width);
  const remainderWidth = progress * width % 1;
  const partWidth = Math.floor(remainderWidth * 8);
  let partChar = boxChars[partWidth];
  if (width - wholeWidth - 1 < 0) {
    partChar = "";
  }
  const fill = fullBox.repeat(wholeWidth);
  const empty = " ".repeat(width - wholeWidth - 1);
  return `${fill}${partChar}${empty}`;
}
function getAsciiBar(progress, width) {
  return [
    asciiChars.start,
    asciiChars.fill.repeat(Math.floor(progress * (width - 2))),
    asciiChars.empty.repeat(width - Math.ceil(progress * (width - 2))),
    asciiChars.end
  ].join("");
}
var BarStyle = /* @__PURE__ */ ((BarStyle2) => {
  BarStyle2["Unicode"] = "unicode";
  BarStyle2["Ascii"] = "ascii";
  return BarStyle2;
})(BarStyle || {});
var defaultOptions = {
  beforeText: "",
  barWidth: 35,
  barColor: "rgb",
  barStyle: "unicode" /* Unicode */,
  spinner: __spreadProps(__spreadValues({}, defaultSpinnerOptions), {
    color: "match"
  }),
  value: 0,
  total: 100
};
var _text3, _beforeText, _barWidth, _barStyle, _spinnerColor, _spinnerFrames, _props2, _spinnerFPS, _value, _total;
var Progress = class extends LogWidget {
  constructor(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    super();
    __privateAdd(this, _text3, void 0);
    __privateAdd(this, _beforeText, void 0);
    __privateAdd(this, _barWidth, void 0);
    __privateAdd(this, _barStyle, void 0);
    __privateAdd(this, _spinnerColor, void 0);
    __privateAdd(this, _spinnerFrames, void 0);
    __privateAdd(this, _props2, void 0);
    __privateAdd(this, _spinnerFPS, void 0);
    __privateAdd(this, _value, void 0);
    __privateAdd(this, _total, void 0);
    __publicField(this, "fps");
    __privateSet(this, _text3, options.text);
    __privateSet(this, _beforeText, (_a = options.beforeText) != null ? _a : defaultOptions.beforeText);
    __privateSet(this, _barWidth, (_b = options.barWidth) != null ? _b : defaultOptions.barWidth);
    __privateSet(this, _barStyle, (_c = options.barStyle) != null ? _c : defaultOptions.barStyle);
    __privateSet(this, _props2, (_d = options.props) != null ? _d : {});
    __privateSet(this, _value, (_e = options.value) != null ? _e : defaultOptions.value);
    __privateSet(this, _total, (_f = options.total) != null ? _f : defaultOptions.total);
    if (options.spinner !== null) {
      this.fps = 15;
      __privateSet(this, _spinnerFPS, (_h = (_g = options.spinner) == null ? void 0 : _g.fps) != null ? _h : defaultOptions.spinner.fps);
      __privateSet(this, _spinnerFrames, (_j = (_i = options.spinner) == null ? void 0 : _i.frames) != null ? _j : defaultOptions.spinner.frames);
      __privateSet(this, _spinnerColor, (_l = (_k = options.spinner) == null ? void 0 : _k.color) != null ? _l : defaultOptions.spinner.color);
    } else {
      this.fps = 0;
      __privateSet(this, _spinnerFPS, defaultOptions.spinner.fps);
      __privateSet(this, _spinnerFrames, void 0);
      __privateSet(this, _spinnerColor, defaultOptions.spinner.color);
    }
  }
  set props(value) {
    __privateSet(this, _props2, __spreadValues(__spreadValues({}, __privateGet(this, _props2)), value));
    this.redraw();
  }
  get props() {
    return __spreadProps(__spreadValues({}, __privateGet(this, _props2)), {
      value: __privateGet(this, _value),
      total: __privateGet(this, _total),
      progress: __privateGet(this, _total) === 0 ? 1 : __privateGet(this, _value) / __privateGet(this, _total)
    });
  }
  get text() {
    return typeof __privateGet(this, _text3) === "function" ? __privateGet(this, _text3).call(this, this.props) : __privateGet(this, _text3);
  }
  set text(value) {
    __privateSet(this, _text3, value);
    this.redraw();
  }
  get beforeText() {
    return typeof __privateGet(this, _beforeText) === "function" ? __privateGet(this, _beforeText).call(this, this.props) : __privateGet(this, _beforeText);
  }
  set beforeText(value) {
    __privateSet(this, _beforeText, value);
    this.redraw();
  }
  get value() {
    return this.value;
  }
  set value(value) {
    __privateSet(this, _value, value);
    this.redraw();
  }
  get total() {
    return this.value;
  }
  set total(value) {
    __privateSet(this, _total, value);
    this.redraw();
  }
  update(value, props) {
    __privateSet(this, _value, value);
    if (props) {
      __privateSet(this, _props2, __spreadValues(__spreadValues({}, this.props), props));
    }
    this.redraw();
  }
  format(now) {
    const progress = __privateGet(this, _total) === 0 ? 1 : __privateGet(this, _value) / __privateGet(this, _total);
    const hue = Math.min(Math.max(progress, 0), 1) / 3;
    const barColor = ansi.rgb(...convertHSVtoRGB(hue, 0.8, 1)) + ansi.bgRgb(...convertHSVtoRGB(hue, 0.8, 0.5));
    let spinner;
    if (__privateGet(this, _spinnerFrames)) {
      const frame = Math.floor(now / (1e3 / __privateGet(this, _spinnerFPS))) % __privateGet(this, _spinnerFrames).length;
      spinner = __privateGet(this, _spinnerColor) ? (__privateGet(this, _spinnerColor) === "match" ? ansi.rgb(...convertHSVtoRGB(hue, 0.8, 1)) : ansi[__privateGet(this, _spinnerColor)]) + __privateGet(this, _spinnerFrames)[frame] + ansi.reset : __privateGet(this, _spinnerFrames)[frame];
    }
    const getBar = isUnicodeSupported && __privateGet(this, _barStyle) === "unicode" ? getUnicodeBar : getAsciiBar;
    const beforeText = this.beforeText;
    return [
      spinner ? spinner + " " : "",
      beforeText ? beforeText + " " : "",
      barColor,
      getBar(progress, __privateGet(this, _barWidth)),
      ansi.reset,
      " ",
      this.text
    ].filter(Boolean).join("");
  }
  success(message) {
    super.success(message != null ? message : this.text);
  }
  fail(message) {
    super.fail(message != null ? message : this.text);
  }
};
_text3 = new WeakMap();
_beforeText = new WeakMap();
_barWidth = new WeakMap();
_barStyle = new WeakMap();
_spinnerColor = new WeakMap();
_spinnerFrames = new WeakMap();
_props2 = new WeakMap();
_spinnerFPS = new WeakMap();
_value = new WeakMap();
_total = new WeakMap();
function withProgress(fn, opts) {
  return __async(this, null, function* () {
    var _a;
    const bar = new Progress(opts);
    try {
      const result = yield fn(bar);
      bar.success(
        opts.successText ? typeof opts.successText === "function" ? opts.successText(result) : opts.successText : opts.text ? typeof opts.text === "function" ? opts.text(bar.props) : opts.text : "Completed"
      );
    } catch (error2) {
      bar.fail(
        typeof opts.failureText === "function" ? opts.failureText(error2) : (_a = opts.failureText) != null ? _a : error2
      );
      throw error2;
    }
  });
}

// src/index.ts
var src_default = log_exports;
export {
  BarStyle,
  CLIError,
  LogLevel,
  LogWidget,
  Progress,
  Spinner,
  colors,
  debug,
  src_default as default,
  error,
  fail,
  info,
  injectLogger,
  isUnicodeSupported,
  log,
  logSymbols,
  setLevel,
  success,
  warn,
  withProgress,
  withSpinner,
  writeLine
};
//# sourceMappingURL=index.js.map
