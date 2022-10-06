const METHOD = {
    DEBUG: 'DEBUG',
    ERROR: 'ERROR',
    INFO: 'INFO',
    LOG: 'LOG',
};

function writeToConsole(scope, method, ...params) {
    console.info(`[${scope}.${method}] `, ...params);
}

class Ledger {
    scope;

    constructor(scope) {
        this.scope = scope;
    }

    setScope(scope) {
        this.scope = scope;
    }

    debug(...params) {
        writeToConsole(this.scope, METHOD.DEBUG, ...params);
    }
    
    error(...params) {
        writeToConsole(this.scope, METHOD.ERROR, ...params);
    }
    
    info(...params) {
        writeToConsole(this.scope, METHOD.INFO, ...params);
    }
    
    log(...params) {
        writeToConsole(this.scope, METHOD.LOG, ...params);
    }
}

module.exports = Ledger;
