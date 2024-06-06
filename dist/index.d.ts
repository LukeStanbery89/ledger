import { LogArgs } from "./types";
export default class Logger {
    static log(...message: LogArgs): void;
    static error(...message: LogArgs): void;
    static warn(...message: LogArgs): void;
    static info(...message: LogArgs): void;
    static debug(...message: LogArgs): void;
}

//# sourceMappingURL=index.d.ts.map
