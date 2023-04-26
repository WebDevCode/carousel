/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";

function h(e) {
  return function (n, t) {
    return e.normalize(Math.round(n), t);
  };
}
const y = {
  diff: function (e, n) {
    return n - e;
  },
  normalize: function (e) {
    return e;
  },
  snap: h(s.hw),
};

function i({ updateState, updateIsSwiping }) {
  const elementRef = React.useRef(null);
  const updateStateRef = React.useRef(updateState);
  const updateIsSwipingRef = React.useRef(updateIsSwiping);
  updateStateRef.current = updateState;
  updateIsSwipingRef.current = updateIsSwiping;

  const memoizedUpdateRefs = React.useMemo(() => {
    return {
      updateState: updateStateRef,
      updateIsSwiping: updateIsSwipingRef,
    };
  }, []);

  function useWheelState({ updateState, updateIsSwiping }) {
    const scrollTimeoutRef = React.useRef(null);
    const scrollStartRef = React.useRef(0);
    const scrollDirectionRef = React.useRef(1);
    const setScrollOffset = React.useCallback(
      function (offset) {
        var isCanceled =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        updateState.current({
          offset,
          isFirst: false,
          isFinal: true,
          isCanceled,
          type: "wheel",
        });
        updateIsSwiping.current(false);
        scrollTimeoutRef.current = null;
        scrollStartRef.current = 0;
      },
      [updateIsSwiping, updateState]
    );
    return {
      onWheel: React.useCallback(
        function (event) {
          //user scrolling vertically
          if (!(Math.abs(event.deltaX) < Math.abs(event.deltaY))) {
            event.preventDefault();
            const distance =
              (function getDistance(event) {
                return typeof event.deltaMode === "number" &&
                  event.deltaMode !== 0
                  ? 500
                  : 1;
              })(event) * event.deltaX;
            const direction = Math.sign(distance);
            if (0 !== direction && direction !== scrollDirectionRef.current) {
              if (null !== scrollTimeoutRef.current) {
                setScrollOffset(scrollStartRef.current);
                clearTimeout(scrollTimeoutRef.current);
                scrollTimeoutRef.current = null;
                scrollDirectionRef.current = direction;
              }
            }
            let isFirstEvent = true;
            if (null !== scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
              scrollTimeoutRef.current = null;
              isFirstEvent = false;
            }
            var startOffset = scrollStartRef.current;
            scrollTimeoutRef.current = setTimeout(function () {
              setScrollOffset(startOffset);
            }, 150);
            scrollStartRef.current += distance;
            updateIsSwiping.current(!0);
            updateState.current({
              offset: startOffset,
              isFirst: isFirstEvent,
              isFinal: !1,
              isCanceled: !1,
              type: "wheel",
            });
          }
        },
        [setScrollOffset, updateIsSwiping, updateState]
      ),
      setWheelState: setScrollOffset,
    };
  }
  const onScrollEventHandler = useWheelState(memoizedUpdateRefs);

  function useTouchState({ updateState, updateIsSwiping }) {
    var n = React.useRef(null),
      t = React.useRef(false),
      i = React.useRef(false),
      o = React.useRef({ x: 0, y: 0 }),
      a = React.useRef({ x: 0, y: 0 }),
      s = React.useCallback(
        function (t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          n.current = null;
          i.current = false;
          updateState.current({
            offset: t,
            isFirst: false,
            isFinal: true,
            isCanceled: r,
            type: "touch",
          });
          updateIsSwiping.current(!1);
        },
        [updateIsSwiping, updateState]
      );
    var l = React.useCallback(function (e) {
      if ("mouse" !== e.pointerType) {
        o.current.x = e.clientX;
        o.current.y = e.clientY;
        a.current.x = e.clientX;
        a.current.y = e.clientY;
        n.current = false;
        t.current = (e) =>
          "pageX" in e &&
          (o.current.x > window.innerWidth - 30 || o.current.x < 30);
      }
    }, []);
    var f = React.useCallback(
      function (r) {
        if ("mouse" !== r.pointerType)
          if (!t.current) {
            var s = !1,
              l = Math.abs(r.clientX - o.current.x),
              f = Math.abs(r.clientY - o.current.y);
            if (
              (!1 === n.current &&
                l >= 20 &&
                l > f &&
                ((s = !0),
                (n.current = !0),
                updateIsSwiping.current(!0),
                (o.current.x = r.clientX),
                (o.current.y = r.clientY)),
              n.current)
            ) {
              a.current.x = r.clientX;
              a.current.y = r.clientY;
              var p = o.current.x - r.clientX;
              updateState.current({
                offset: p,
                isFirst: s,
                isCanceled: !1,
                isFinal: !1,
                type: "touch",
              });
              i.current = i.current || Math.atan2(f, l) < (30 / 180) * Math.PI;
            }
          }
      },
      [updateIsSwiping, updateState]
    );
    var p = React.useCallback(
      function (e) {
        if ("mouse" !== e.pointerType && n.current) {
          var t = o.current.x - e.clientX;

          s(t);
        }
      },
      [s]
    );
    var d = React.useCallback(
      function (e) {
        if ("mouse" !== e.pointerType && n.current) {
          var t = o.current.x - a.current.x;

          s(t, !0);
        }
      },
      [s]
    );
    var v = React.useCallback(function (e) {
      i.current && e.preventDefault();
    }, []);
    return React.useMemo(
      function () {
        return {
          onPointerDown: l,
          onPointerMove: f,
          onPointerUp: p,
          onPointerCancel: d,
          onTouchMove: v,
          setPointerState: s,
        };
      },
      [l, f, p, d, v, s]
    );
  }
  const onTouchEventHandler = useTouchState(memoizedUpdateRefs);

  React.useEffect(
    function () {
      if (elementRef.current) {
        var e = elementRef.current.style.touchAction,
          t = elementRef.current;
        return (
          (t.style.touchAction = "pan-y"),
          t.addEventListener("wheel", onScrollEventHandler.onWheel, {
            passive: false,
          }),
          t.addEventListener("touchmove", onTouchEventHandler.onTouchMove, {
            passive: !1,
          }),
          t.addEventListener("pointerup", onTouchEventHandler.onPointerUp),
          t.addEventListener("pointermove", onTouchEventHandler.onPointerMove),
          t.addEventListener("pointerdown", onTouchEventHandler.onPointerDown),
          t.addEventListener(
            "pointercancel",
            onTouchEventHandler.onPointerCancel
          ),
          function () {
            t.style.touchAction = e;
            t.removeEventListener("wheel", onScrollEventHandler.onWheel);
            t.removeEventListener("touchmove", onTouchEventHandler.onTouchMove);
            t.removeEventListener("pointerup", onTouchEventHandler.onPointerUp);
            t.removeEventListener(
              "pointermove",
              onTouchEventHandler.onPointerMove
            );
            t.removeEventListener(
              "pointerdown",
              onTouchEventHandler.onPointerDown
            );
            t.removeEventListener(
              "pointercancel",
              onTouchEventHandler.onPointerCancel
            );
          }
        );
      }
      return function () {};
    },
    [onScrollEventHandler, onTouchEventHandler]
  );
  var l = React.useCallback(
      function (e) {
        var n = updateStateRef.current,
          r = updateIsSwipingRef.current;
        updateIsSwipingRef.current = function () {};
        updateStateRef.current = function () {};
        onScrollEventHandler.setWheelState(e, true);
        onTouchEventHandler.setPointerState(e, !0);
        updateIsSwipingRef.current = r;
        updateStateRef.current = n;
      },
      [onScrollEventHandler, onTouchEventHandler]
    ),
    f = React.useRef(l);
  f.current = l;
  return { swipeRef: elementRef, setSwipeStateRef: f };
}

function s(easingFn, { duration, easing, space }) {
  const currentPosition = React.useRef(0);
  const positionDifference = React.useRef(0);
  const startPosition = React.useRef(0);
  const a = React.useRef(0);
  const lastFrameTimestamp = React.useRef(performance.now());
  const l = React.useRef(duration);
  const f = React.useRef(easing);
  const v = React.useRef(null);
  const easingFnRef = React.useRef(easingFn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const p =
    null !== space && undefined !== space
      ? space
      : {
          diff: function (e, n) {
            return n - e;
          },
          normalize: function (e) {
            return e;
          },
        };
  const d = React.useRef({
    start: { position: startPosition, time: a },
    difference: { position: positionDifference, time: l },
    space: p,
    easing: f,
    tag: null,
  });

  const animationCallback = React.useCallback(function () {
    const now = performance.now();
    const timeDiff = now - a.current;
    const progress = l.current <= 0 ? 1 : Math.min(1, timeDiff / l.current);
    const easedProgress = f.current(progress);

    currentPosition.current = d.current.space.normalize(
      startPosition.current + easedProgress * positionDifference.current,
      d.current.tag
    );
    lastFrameTimestamp.current = now;
    return progress < 1;
  }, []);

  const y = React.useCallback(
      function () {
        const e = animationCallback();
        easingFnRef.current(currentPosition.current, d.current);
        v.current = e ? requestAnimationFrame(y) : null;
      },
      [animationCallback]
    ),
    b = React.useCallback(
      function (e, t, m = {}) {
        positionDifference.current = p.diff(currentPosition.current, e, t);
        startPosition.current = currentPosition.current;
        var h = performance.now() - 1e3 / 60;
        a.current = Math.max(h, lastFrameTimestamp.current);
        l.current =
          null !== m.duration && undefined !== m.duration
            ? m.duration
            : duration;
        f.current =
          null !== m.easing && undefined !== m.easing ? m.easing : easing;
        if (m.immediate) {
          l.current = 0;
        }
        if (null === v.current) {
          v.current = requestAnimationFrame(y);
        }
      },
      [p, duration, easing, y]
    );
  React.useEffect(function () {
    return function () {
      if (null !== v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }
    };
  }, []);
  return b;
}

export function useGesture({ updateItem, updateIsSwiping }, n, t) {
  const u = React.useRef(0);
  const c = React.useRef(0);
  const o = React.useRef(0);
  const f = React.useRef(Array.from({ length: 4 }).fill(0));
  const b = React.useRef(Array.from({ length: 4 }).fill(0));
  const w = React.useRef(0);
  const g = React.useRef(() => {});
  const x = React.useRef((e, n) => {});

  const S = React.useCallback(
    (easingFn, obj) => {
      u.current = easingFn;
      updateItem(u.current, obj);
    },
    [updateItem]
  );
  const P = React.useMemo(
      function () {
        var r = null !== t.space && undefined !== t.space ? t.space : y;
        return {
          ...r,
          snap: null !== r.snap && undefined !== r.snap ? r.snap : h(r),
        };
      },
      [t.space]
    ),
    M = s(S, { easing: (e) => e, duration: 0, space: P }),
    C = React.useCallback(
      function (e) {
        var t = e.offset,
          r = e.isFirst,
          i = e.isFinal,
          a = e.type,
          s = Date.now();
        if (r)
          return (
            M(u.current, { name: "freeze" }, { immediate: !0 }),
            (c.current = u.current),
            (o.current = 0),
            ((f.current = Array.from({ length: 4 }).fill(t)),
            (b.current = Array.from({ length: 4 })
              .fill(s)
              .map(function (e, n, t) {
                return e - 50 * (t.length - n);
              })),
            void (w.current = 0))
          );
        if (b.current[o.current] + 200 < s) {
          f.current[o.current] = t;
          b.current[o.current] = s;
          o.current = (o.current + 1) % 4;
        }
        var p = o.current;
        w.current = (t - f.current[p]) / (s - b.current[p]);
        var m = t / n.itemWidth.current;
        i
          ? x.current(m, e)
          : M(
              c.current + m,
              { name: "swipe", type: a },
              { duration: 32, easing: (e) => e }
            );
      },
      [M, n.itemWidth]
    ),
    j = i({ updateState: C, updateIsSwiping: updateIsSwiping }),
    k = j.swipeRef,
    E = j.setSwipeStateRef;
  g.current = function () {
    return E.current(0);
  };
  var D = React.useRef(t.animation);
  D.current = t.animation;
  x.current = function (e, t) {
    var r,
      u,
      i,
      o,
      a =
        "touch" === t.type &&
        null !==
          (r =
            null === (u = n.maxSwipeItem) || void 0 === u
              ? void 0
              : u.current) &&
        void 0 !== r
          ? r
          : 1 / 0,
      s = n.itemWidth.current,
      l = t.isCanceled ? 0 : 4e3,
      f = e + (w.current / s) * l,
      p = Math.max(-a, Math.min(f, a)),
      v = { name: "snap", type: t.type, initial: c.current, offset: p },
      m = P.snap(c.current + p, v),
      h = D.current(w.current, v);
    M(m, null !== (i = h.tag) && void 0 !== i ? i : v, h);
    g.current();
    // d("Snap", {
    //   offset: e,
    //   compensation: f,
    //   nextIndex: m,
    //   easing: h.easing.name,
    //   duration: h.duration,
    //   tag: null !== (o = h.tag) && void 0 !== o ? o : v,
    // });
  };
  var I = React.useCallback(
      function () {
        return P.snap(u.current, {
          name: "snap",
          type: "general",
          initial: u.current,
          offset: 0,
        });
      },
      [P]
    ),
    F = React.useCallback(
      function (e, n) {
        var t,
          r = null !== n && void 0 !== n ? n : { name: "updateIndex" },
          u = D.current(0, r);
        M(
          null !== e && void 0 !== e ? e : I(),
          null !== (t = u.tag) && void 0 !== t ? t : r,
          u
        );
        g.current();
      },
      [M, I]
    ),
    L = React.useMemo(
      function () {
        return {
          get current() {
            return I();
          },
          set current(e) {
            F(e);
          },
        };
      },
      [I, F]
    );
  return (
    React.useLayoutEffect(
      function () {
        F();
      },
      [F]
    ),
    { swipeRef: k, indexRef: L, updateIndex: F }
  );
}
