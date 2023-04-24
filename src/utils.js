export function clamp(x, lower, upper) {
  return Math.min(upper, Math.max(lower, x));
}
export function calculateFlags(e) {
  return { isHidden: e < 0 || e > 2, isExpanded: e >= 0 && e < 1 };
}
export function calculateStyle(e) {
  var t = 1 - Math.abs(clamp(-1, e, 1)),
    n = 46 * clamp(0, e, 1),
    r = 46 * (3 - clamp(2, e, 3));
  return { grow: t, basis: Math.min(n, r) };
}
export function calculateContentStyle(e) {
  return {
    offset: 32 * clamp(-1, e, 0),
    opacity: 1 - Math.abs(clamp(-1, e, 1)),
  };
}

export function easing() {
  const u = (e) => (n) => Math.pow(n, e);
  const c = (e) => (n) => 1 - Math.pow(1 - n, e);
  const i = (e) => (n) =>
    n < 0.5
      ? Math.pow(2, e - 1) * Math.pow(n, e)
      : 1 - Math.pow(-2 * n + 2, e) / 2;

  const s = (i(3), u(3), c(3));
  const l = (i(5), u(5), c(5));

  return { w2: s, rz: l };
}

export function moduloFn(e) {
  // This function returns a function that takes a number `n` as an argument
  return function (n) {
    // Calculate the remainder of `n` divided by `e`
    // This ensures that the result is always between 0 and `e-1`
    return ((n % e) + e) % e;
  };
}
