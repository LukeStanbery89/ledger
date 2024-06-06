/* eslint-disable no-console */

import "jest";
import Logger from "../../src";

describe("Logger", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation();
        jest.spyOn(console, "error").mockImplementation();
        jest.spyOn(console, "warn").mockImplementation();
        jest.spyOn(console, "info").mockImplementation();
        jest.spyOn(console, "debug").mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should log a message", () => {
        Logger.log("This is a log message");
        expect(console.log).toHaveBeenCalledWith("This is a log message");
    });

    it("should log an error message", () => {
        Logger.error("This is an error message");
        expect(console.error).toHaveBeenCalledWith("This is an error message");
    });

    it("should log a warning message", () => {
        Logger.warn("This is a warning message");
        expect(console.warn).toHaveBeenCalledWith("This is a warning message");
    });

    it("should log an info message", () => {
        Logger.info("This is an info message");
        expect(console.info).toHaveBeenCalledWith("This is an info message");
    });

    it("should log a debug message", () => {
        Logger.debug("This is a debug message");
        expect(console.debug).toHaveBeenCalledWith("This is a debug message");
    });
});
