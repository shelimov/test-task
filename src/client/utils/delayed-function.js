export default function delayedFunction(fn, delay) {
  let to = 0;
  return (...args) => {
    if (to)
      clearTimeout(to);
    to = setTimeout(() => fn(...args), delay);
  }
}