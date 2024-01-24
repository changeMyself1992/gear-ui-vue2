/* eslint-disable */
export var isDef = val => val !== undefined && val !== null;

export function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  return isNumeric(value) ? `${value}px` : String(value);
}

export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function stopPropagation(event) {
  // 阻止冒泡
  event.stopPropagation();
}

export function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    /**
     * 阻止默认事件提交,例如 a链接调转， 按钮<input type=”submit”>提交, 这个很好理解，这个属于html的默认事件
     * 
     * 如果父元素在move事件中使用了preventDefault，父元素和子元素的点击事件也会被阻止...,甚至子元素的上下滚动功能也会失效...，基本上所有的事件都被阻止了 
     * 很奇怪不知道为啥，点击事件能算是默认事件？？move事件能算是默认事件？？？跟官网的对preventDefault的解释根本对不上...  只能死记住这么用就行了
     *  */
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function throttle(fn, delay) {
  let flag = true;
  let timer = null;
  return function(...args) {
    const context = this;
    if (!flag) return;

    flag = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, delay);
  };
}

export function raf(fn) {
  return window.requestAnimationFrame(fn);
}

// double raf for animation
export function doubleRaf(fn) {
  raf(() => {
    raf(fn);
  });
}

/** px 转 vw, 375 是设置的屏幕宽度 */
export const px2vw = px => `${Number(px / (375 / 100)).toFixed(3)}vw`;

export const findChildren = (VueComponent, name, resArray = []) => {
  const { $children } = VueComponent;
  if ($children.length > 0) {
    for (let i = 0; i < $children.length; i++) {
      const element = $children[i];
      const { $options } = element;
      if ($options.name === name) {
        resArray.push(element);
      } else {
        findChildren(element, name, resArray);
      }
    }
  }
};
/** 生成唯一id */
export const createUuid = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  const uuid = s.join('');
  return uuid;
};
