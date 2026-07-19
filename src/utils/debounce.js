/**
 * Delays calling `fn` until `delay` ms have passed since the last call.
 * Used so the API isn't hit on every single keystroke while typing.
 */
export const debounce = (fn, delay = 500) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};