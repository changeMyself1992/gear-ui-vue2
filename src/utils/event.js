
export let supportsPassive = false;
export function on(
    target,
    event,
    handler,
    passive = false
) {

    target.addEventListener(
        event,
        handler,
        supportsPassive ? { capture: false, passive } : false
    );

}

export function off(target, event, handler) {

    target.removeEventListener(event, handler);

}

export function stopPropagation(event) {
    event.stopPropagation();
}
// preventDefault 阻止事件得默认行为
// stopPropagation 作用是阻止目标元素的冒泡事件，但是会不阻止默认行为
export function preventDefault(event, isStopPropagation) {
    // console.log(event.cancelable)
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        // console.log("preventDefault执行")
        event.preventDefault();
    }

    if (isStopPropagation) {
        // console.log("stopPropagation执行")
        stopPropagation(event);
    }
}
