import React, { useCallback, useRef } from "react";

function findMin(e, t, n) {
  return Math.min(n, Math.max(e, t));
}

function calculateFlags(index) {
  return {
    isHidden: index < 0 || index > 2,
    isExpanded: index >= 0 && index < 1,
  };
}

function calculateStyle(index) {
  const t = 1 - Math.abs(findMin(-1, index, 1));
  const n = 46 * findMin(0, index, 1);
  const r = 46 * (3 - findMin(2, index, 3));
  return { grow: t, basis: Math.min(n, r) };
}
function calculateContentStyle(index) {
  return {
    offset: 32 * findMin(-1, index, 0),
    opacity: 1 - Math.abs(findMin(-1, index, 1)),
  };
}

function useTweenAnimation() {
  const firstRef = useRef(0);
  return useCallback(() => {
    const now = Date.now();
    let oldRef = firstRef.current;
    firstRef.current = now;
    const diff = now - oldRef;
    const absoluteDiff = Math.abs(diff);
    return diff < 50 ? { easing: "" } : 0;
  }, []);
}
