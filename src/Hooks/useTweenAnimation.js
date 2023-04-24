import React from "react";
import { easing } from "../utils";

export function useTweenAnimation() {
  const e = React.useRef(0);
  return React.useCallback((t, n) => {
    var r = Date.now(),
      i = e.current;
    e.current = r;
    var s = r - i,
      a = Math.abs(t);
    return s < 50
      ? { easing: easing().w2, duration: 180 }
      : "snap" === n.name || s < 400
      ? { easing: easing().w2, duration: Math.max(180, 560 * (1 - 0.5 * a)) }
      : { easing: easing().rz, duration: 1e3 };
  }, []);
}
