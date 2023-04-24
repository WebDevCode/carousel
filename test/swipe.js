/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
// eslint-disable-next-line no-unused-vars
function swiper(e, n, t) {
  t.d(n, {
    Qt: function () {
      return b;
    },
  });
  t(9338);
  var r = t(32735),
    c = (30 / 180) * Math.PI,
    i = function (e) {
      var n = React.useRef(null);
      var t = React.useRef(e.updateState);
      var i = React.useRef(e.updateIsSwiping);

      // Update the `current` property of the `t` and `i` variables with the corresponding `updateState` and `updateIsSwiping` functions from the `e` object
      t.current = e.updateState;
      i.current = e.updateIsSwiping;
      var o = React.useMemo(function () {
          return {
            updateState: t,
            updateIsSwiping: i,
          };
        }, []),
        a = (function (e) {
          var n = React.useRef(null),
            t = React.useRef(0),
            u = React.useRef(1),
            c = React.useCallback(
              function (r) {
                var u =
                  arguments.length > 1 &&
                  undefined !== arguments[1] &&
                  arguments[1];
                if (null !== n.current) {
                  clearTimeout(n.current);
                  e.updateState.current({
                    offset: r,
                    isFirst: !1,
                    isFinal: !0,
                    isCanceled: u,
                    type: "wheel",
                  });
                  e.updateIsSwiping.current(!1);
                  n.current = null;
                  t.current = 0;
                }
              },
              [e]
            );
          return {
            onWheel: React.useCallback(
              function (r) {
                if (!(Math.abs(r.deltaX) < Math.abs(r.deltaY))) {
                  r.preventDefault();
                  var i =
                      (function (e) {
                        return "number" === typeof e.deltaMode &&
                          0 !== e.deltaMode
                          ? 500
                          : 1;
                      })(r) * r.deltaX,
                    o = Math.sign(i);
                  if (0 !== o && o !== u.current && null !== n.current) {
                    c(t.current);
                    clearTimeout(n.current);
                    n.current = null;
                    u.current = o;
                  }

                  var a = true;
                  if (null !== n.current) {
                    clearTimeout(n.current);
                    n.current = null;
                    a = false;
                  }

                  var s = t.current;
                  n.current = setTimeout(function () {
                    c(s);
                  }, 150);
                  t.current += i;
                  e.updateIsSwiping.current(true);
                  e.updateState.current({
                    offset: s,
                    isFirst: a,
                    isFinal: !1,
                    isCanceled: !1,
                    type: "wheel",
                  });
                }
              },
              [e, c]
            ),
            setWheelState: c,
          };
        })(o),
        s = (function (e) {
          var n = React.useRef(null),
            t = React.useRef(false),
            i = React.useRef(false),
            o = React.useRef({
              x: 0,
              y: 0,
            }),
            a = React.useRef({
              x: 0,
              y: 0,
            }),
            setPointerState = React.useCallback(
              function (t) {
                var r =
                  arguments.length > 1 &&
                  undefined !== arguments[1] &&
                  arguments[1];
                n.current = null;
                i.current = false;
                e.updateState.current({
                  offset: t,
                  isFirst: !1,
                  isFinal: !0,
                  isCanceled: r,
                  type: "touch",
                });
                e.updateIsSwiping.current(!1);
              },
              [e]
            ),
            onPointerDown = React.useCallback(function (e) {
              if ("mouse" !== e.pointerType) {
                o.current.x = e.clientX;
                o.current.y = e.clientY;
                a.current.x = e.clientX;
                a.current.y = e.clientY;
                n.current = !1;
                t.current = (e) =>
                  ("pageX" in e && o.current.x > window.innerWidth - 30) ||
                  o.current.x < 30;
              }
            }, []),
            onPointerMove = React.useCallback(
              function (r) {
                if ("mouse" !== r.pointerType) {
                  if (!t.current) {
                    var s = false,
                      l = Math.abs(r.clientX - o.current.x),
                      f = Math.abs(r.clientY - o.current.y);
                    if (!n.current && l >= 20 && l > f) {
                      s = true;
                      n.current = true;
                      e.updateIsSwiping.current(true);
                      o.current.x = r.clientX;
                      o.current.y = r.clientY;
                    }

                    if (n.current) {
                      a.current.x = r.clientX;
                      a.current.y = r.clientY;
                      var p = o.current.x - r.clientX;
                      e.updateState.current({
                        offset: p,
                        isFirst: s,
                        isCanceled: false,
                        isFinal: false,
                        type: "touch",
                      });
                      i.current = i.current || Math.atan2(f, l) < c;
                    }
                  }
                }
              },
              [e]
            ),
            onPointerUp = React.useCallback(
              function (e) {
                if ("mouse" !== e.pointerType && n.current) {
                  var t = o.current.x - e.clientX;

                  setPointerState(t);
                }
              },
              [setPointerState]
            ),
            onPointerCancel = React.useCallback(
              function (e) {
                if ("mouse" !== e.pointerType && n.current) {
                  var t = o.current.x - a.current.x;

                  setPointerState(t, true);
                }
              },
              [setPointerState]
            ),
            onTouchMove = React.useCallback(function (e) {
              i.current && e.preventDefault();
            }, []);
          return React.useMemo(
            function () {
              return {
                onPointerDown,
                onPointerMove,
                onPointerUp,
                onPointerCancel,
                onTouchMove,
                setPointerState,
              };
            },
            [
              onPointerDown,
              onPointerMove,
              onPointerUp,
              onPointerCancel,
              onTouchMove,
              setPointerState,
            ]
          );
        })(o);
      React.useEffect(
        function () {
          if (n.current) {
            const element = n.current;
            const initialTouchAction = element.style.touchAction;

            element.style.touchAction = "pan-y";
            element.addEventListener("wheel", a.onWheel, {
              passive: false,
            });
            element.addEventListener("touchmove", s.onTouchMove, {
              passive: false,
            });
            element.addEventListener("pointerup", s.onPointerUp);
            element.addEventListener("pointermove", s.onPointerMove);
            element.addEventListener("pointerdown", s.onPointerDown);
            element.addEventListener("pointercancel", s.onPointerCancel);
            return function () {
              element.style.touchAction = initialTouchAction;
              element.removeEventListener("wheel", a.onWheel);
              element.removeEventListener("touchmove", s.onTouchMove);
              element.removeEventListener("pointerup", s.onPointerUp);
              element.removeEventListener("pointermove", s.onPointerMove);
              element.removeEventListener("pointerdown", s.onPointerDown);
              element.removeEventListener("pointercancel", s.onPointerCancel);
            };
          }
          return function () {};
        },
        [a, s]
      );
      var l = React.useCallback(
          function (e) {
            var n = t.current,
              r = i.current;
            i.current = function () {};
            t.current = function () {};
            a.setWheelState(e, true);
            s.setPointerState(e, true);
            i.current = r;
            t.current = n;
          },
          [a, s]
        ),
        f = React.useRef(null);
      f.current = l;
      return {
        swipeRef: n,
        setSwipeStateRef: f,
      };
    },
    s = {
      hw: {
        diff: function (e, n) {
          return n - e;
        },
        normalize: function (e) {
          return e;
        },
      },
    };
  function useAnimate(easingFn, { duration, space, easing }) {
    const [currentPosition, setCurrentPosition] = React.useState(0);
    const startPosition = React.useRef(0);
    const difference = React.useRef(0);
    const spaceRef = React.useRef(space);
    const startTime = React.useRef(performance.now());
    const animationDuration = React.useRef(duration);
    const easingRef = React.useRef(easingFn);
    const requestRef = React.useRef(null);

    spaceRef.current = space;

    const animate = React.useCallback(() => {
      const currentTime = performance.now();
      const timeElapsed = currentTime - startTime.current;
      const progress =
        animationDuration.current <= 0
          ? 1
          : Math.min(1, timeElapsed / animationDuration.current);
      const easedProgress = easingRef.current(progress);

      const newPosition = spaceRef.current.normalize(
        startPosition.current + easedProgress * difference.current
      );
      setCurrentPosition(newPosition);

      startTime.current = currentTime;

      if (progress < 1) {
        return true;
      } else {
        return false;
      }
    }, []);

    const animateRef = React.useRef(easing);
    animateRef.current = easing;

    const animateWrapper = React.useCallback(() => {
      const shouldContinue = animate();
      animateRef.current(currentPosition, {
        start: {
          position: startPosition.current,
          time: startTime.current,
        },
        difference: {
          position: difference.current,
          time: animationDuration.current,
        },
        space: spaceRef.current,
        easing: easingRef.current,
        tag: null,
      });

      if (shouldContinue) {
        requestRef.current = requestAnimationFrame(animateWrapper);
      } else {
        requestRef.current = null;
      }
    }, [animate, currentPosition]);

    const startAnimation = React.useCallback(
      (endPosition, tag, options = {}) => {
        difference.current = spaceRef.current.diff(
          currentPosition,
          endPosition,
          tag
        );
        startPosition.current = currentPosition;
        startTime.current = performance.now() - 1000 / 60;

        animationDuration.current = options.animationDuration || duration;
        easingRef.current = options.easing || easingFn;
        spaceRef.current = options.space || space;
        if (options.immediate) {
          animationDuration.current = 0;
        }

        if (!requestRef.current) {
          requestRef.current = requestAnimationFrame(animateWrapper);
        }
      },
      [animateWrapper, duration, currentPosition, easingFn, space]
    );

    React.useEffect(() => {
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
          requestRef.current = null;
        }
      };
    }, []);

    return startAnimation;
  }

  var l = t(77303);

  var d = function () {},
    v = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return Array.from({
        length: 4,
      }).fill(e);
    },
    m = v(),
    h = function (e) {
      return function (n, t) {
        return e.normalize(Math.round(n), t);
      };
    },
    y = { ...s.hw, snap: h(s.hw) },
    b = function (e, n, t) {
      var u = (0, r.useRef)(0),
        c = (0, r.useRef)(0),
        o = (0, r.useRef)(0),
        f = (0, r.useRef)(m),
        b = (0, r.useRef)(m),
        w = (0, r.useRef)(0),
        g = (0, r.useRef)(function () {}),
        x = (0, r.useRef)(function (e, n) {}),
        R = e.updateItem,
        O = e.updateIsSwiping,
        S = (0, r.useCallback)(
          function (e, n) {
            u.current = e;
            R(u.current, n);
          },
          [R]
        ),
        P = (0, r.useMemo)(
          function () {
            var e,
              n,
              r = null !== (e = t.space) && void 0 !== e ? e : y;
            return {
              ...r,
              snap: null !== (n = r.snap) && void 0 !== n ? n : h(r),
            };
          },
          [t.space]
        ),
        M = useAnimate(S, {
          easing: l.Ny,
          duration: 0,
          space: P,
        }),
        C = (0, r.useCallback)(
          function (e) {
            var t = e.offset,
              r = e.isFirst,
              i = e.isFinal,
              a = e.type,
              s = Date.now();
            if (r)
              return (
                M(
                  u.current,
                  {
                    name: "freeze",
                  },
                  {
                    immediate: !0,
                  }
                ),
                (c.current = u.current),
                (o.current = 0),
                (f.current = v(t)),
                (b.current = v(s).map(function (e, n, t) {
                  return e - 50 * (t.length - n);
                })),
                void (w.current = 0)
              );
            b.current[o.current] + 200 < s &&
              ((f.current[o.current] = t),
              (b.current[o.current] = s),
              (o.current = (o.current + 1) % 4));
            var p = o.current;
            w.current = (t - f.current[p]) / (s - b.current[p]);
            var m = t / n.itemWidth.current;
            i
              ? x.current(m, e)
              : M(
                  c.current + m,
                  {
                    name: "swipe",
                    type: a,
                  },
                  {
                    duration: 32,
                    easing: l.Ny,
                  }
                ),
              d("Swipe", {
                windowOffset: f.current.join(","),
                velocityWindowed: w.current,
                offset: m,
              });
          },
          [M, n.itemWidth]
        ),
        j = i({
          updateState: C,
          updateIsSwiping: O,
        }),
        k = j.swipeRef,
        E = j.setSwipeStateRef;
      g.current = function () {
        return E.current(0);
      };
      var D = (0, r.useRef)(t.animation);
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
          v = {
            name: "snap",
            type: t.type,
            initial: c.current,
            offset: p,
          },
          m = P.snap(c.current + p, v),
          h = D.current(w.current, v);
        M(m, null !== (i = h.tag) && void 0 !== i ? i : v, h),
          g.current(),
          d("Snap", {
            offset: e,
            compensation: f,
            nextIndex: m,
            easing: h.easing.name,
            duration: h.duration,
            tag: null !== (o = h.tag) && void 0 !== o ? o : v,
          });
      };
      var I = (0, r.useCallback)(
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
        F = (0, r.useCallback)(
          function (e, n) {
            var t,
              r =
                null !== n && void 0 !== n
                  ? n
                  : {
                      name: "updateIndex",
                    },
              u = D.current(0, r);
            M(
              null !== e && void 0 !== e ? e : I(),
              null !== (t = u.tag) && void 0 !== t ? t : r,
              u
            ),
              g.current();
          },
          [M, I]
        ),
        L = (0, r.useMemo)(
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
        {
          swipeRef: k,
          indexRef: L,
          updateIndex: F,
        }
      );
    };
}
