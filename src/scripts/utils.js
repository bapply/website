export function memoize(fn) {
  memoize.cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (memoize.cache[key]) {
      return memoize.cache[key];
    } else {
      const val = fn.apply(this, arguments);
      memoize.cache[key] = val;
      return val;
    }
  };
}
