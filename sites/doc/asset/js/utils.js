const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

// const pathname = window.location.pathname.replaceAll('/', '');
const pathname = window.location.pathname;

// eslint-disable-next-line import/no-mutable-exports
let demoUrl = '';

if (pathname) {
  demoUrl = `${window.location.origin}${pathname}demo.html#`;
} else {
  demoUrl = `${window.location.origin}/demo.html#`;
}

export { isMobile, demoUrl };
