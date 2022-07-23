// Author: Ben Hays <benhays42@hexadecimal.blog> 
// This file is licensed under the MIT license
//
// ABOUT:
// This file contains functions that are used to generate log messages printed to STDOUT
// Editing code in this file is relatively harmless and won't break anything
// However, if you break something here, debugging will probably be difficult without good logs
// 
// NOTE: This file depends on some of the configuration settings in config.js
// 
// TODO: Add colors to logging functions

const config = require('./config');

function log(message) {
    console.log("[LOG] " + message);
}

function debug(message) {
    if (config.DEBUG) console.log("[DEBUG] " + message);
}

function warn(message) {
    console.warn("[WARN] " + message);
}

function error(message) {
    console.error("[ERROR] " + message);
}

module.exports = {
    log, debug, warn, error
}