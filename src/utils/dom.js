export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
  return Math.max(top, 0)
}



export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

const overflowScrollReg = /scroll|auto|overlay/i;
/** 以el为起点，向上查找，找到允许Y轴滚动的节点 */
export function getScroller(el, root = window) {
  let node = el;

  while (
    node &&
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === 1 &&
    node !== root
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }

  return root;
}

/**get distance from element top to page top  */
export function getElementTop(el, scroller) {
  const scrollTop = getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

export function isElement(node) {
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === 1
  )
}
export function getScrollParent(el, root = window) {
  let node = el
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (/scroll|auto/i.test(overflowY)) {
      return node
    }
    node = node.parentNode
  }
  return root
}

export function isWindow(el) {
  return el === window
}

export function getRect(el) {
  if (isWindow(el)) {
    return {
      top: 0,
      left: 0,
      right: el.innerWidth,
      bottom: el.innerHeight,
      width: el.innerWidth,
      height: el.innerHeight
    }
  }

  if (el && el.getBoundingClientRect) {
    return el.getBoundingClientRect()
  }

  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  }
}

export function isHidden(el) {
  const style = window.getComputedStyle(el);
  const hidden = style.display === 'none';

  // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed
  const parentHidden = el.offsetParent === null && style.position !== 'fixed';

  return hidden || parentHidden;
}

export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
