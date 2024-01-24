import Vue from 'vue';

export const isServer: boolean = Vue.prototype.$isServer;

export function isAndroid(): boolean {
    /* istanbul ignore next */
    return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS(): boolean {
    /* istanbul ignore next */
    return isServer
        ? false
        : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
