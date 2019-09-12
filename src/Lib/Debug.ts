import { DEBUG } from "Config";

export function log(...args: any) {
    if (!DEBUG) return;
    // eslint-disable-next-line no-console
    console && console.log(...args);
}

export function error(...args: any) {
    // eslint-disable-next-line no-console
    console && console.error(...args);
}

export function table(...args: any) {
    if (!DEBUG) return;
    // eslint-disable-next-line no-console
    console && console.table(...args);
}

export function warn(...args: any) {
    if (!DEBUG) return;
    // eslint-disable-next-line no-console
    console && console.warn(...args);
}

export function time(...args: any) {
    if (!DEBUG) return;
    // eslint-disable-next-line no-console
    console && console.time(...args);
}

export function timeEnd(...args: any) {
    if (!DEBUG) return;
    // eslint-disable-next-line no-console
    console && console.timeEnd(...args);
}

export default {
    log,
    error,
    table,
    warn,
    time,
    timeEnd,
};
