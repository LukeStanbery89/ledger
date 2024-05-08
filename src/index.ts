/* eslint-disable no-console */
import { LogArgs } from "./types";

export default class Logger {
    public static log(...message: LogArgs) {
        console.log(...message);
    }

    public static error(...message: LogArgs) {
        console.error(...message);
    }

    public static warn(...message: LogArgs) {
        console.warn(...message);
    }

    public static info(...message: LogArgs) {
        console.info(...message);
    }

    public static debug(...message: LogArgs) {
        console.debug(...message);
    }
}
