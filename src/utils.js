/* eslint-disable no-unused-vars */
import React from "react";

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

function animationLibrary(React, exports, module) {
  const { useRef, useCallback, useEffect } = React;

  function linearInterpolation(t) {
    return t;
  }

  function diffAndNormalize(space) {
    return {
      diff: function (start, end) {
        return space.normalize(end - start);
      },
      normalize: space.normalize,
    };
  }

  function wrapAround(space) {
    const midpoint = space.size / 2;

    function normalize(n) {
      return ((n % space.size) + space.size) % space.size;
    }

    function diff(start, end) {
      let distance = normalize(end) - start;
      if (distance > midpoint) {
        distance -= space.size;
      } else if (distance < -midpoint) {
        distance += space.size;
      }
      return distance;
    }

    return {
      normalize,
      diff,
    };
  }

  function useAnimation(callback, options) {
    const position = useRef(options.initialPosition);
    const velocity = useRef(0);
    const lastTime = useRef(performance.now());
    const duration = useRef(options.duration);
    const easingFunction = useRef(options.easing || linearInterpolation);
    const space = useRef(
      options.space || diffAndNormalize({ normalize: linearInterpolation })
    );
    const animationData = useRef({
      start: {
        position,
        time: lastTime,
      },
      difference: {
        position: velocity,
        time: duration,
      },
      space,
      easing: easingFunction,
      tag: null,
    });

    animationData.current.space = space;

    const animationId = useRef(null);

    const updatePosition = useCallback(() => {
      const now = performance.now();
      const elapsed = now - lastTime.current;
      const t =
        duration.current <= 0 ? 1 : Math.min(1, elapsed / duration.current);
      const interpolatedValue = easingFunction.current(t);
      position.current = space.current.normalize(
        position.current + interpolatedValue * velocity.current,
        animationData.current.tag
      );
      lastTime.current = now;
      return t < 1;
    }, []);

    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    const animationFrameCallback = useCallback(() => {
      const shouldContinue = updatePosition();
      callbackRef.current(position.current, animationData.current);
      if (shouldContinue) {
        animationId.current = requestAnimationFrame(animationFrameCallback);
      } else {
        animationId.current = null;
      }
    }, [updatePosition]);

    const startAnimation = useCallback(
      (destination, tag, options = {}) => {
        const {
          duration: newDuration = options.duration,
          easing: newEasing = options.easing,
        } = options;

        velocity.current = space.current.diff(position.current, destination);

        position.current = destination;

        const currentTime = performance.now() - 1000 / 60;
        lastTime.current = Math.max(currentTime, lastTime.current);

        duration.current = newDuration || options.duration;
        easingFunction.current =
          newEasing || options.easing || linearInterpolation;
        animationData.current.tag = tag;

        if (options.immediate) {
          duration.current = 0;
        }

        if (animationId.current === null) {
          animationId.current = requestAnimationFrame(animationFrameCallback);
        }
      },
      [animationFrameCallback]
    );

    useEffect(() => {
      return () => {
        if (animationId.current !== null) {
          cancelAnimationFrame(animationId.current);
          animationId.current = null;
        }
      };
    }, []);

    return startAnimation;
  }
}
