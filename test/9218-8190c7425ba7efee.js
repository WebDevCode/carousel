/* eslint-disable no-restricted-globals */
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9218],
  {
    33558: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    21997: function (e, t, o) {
      "use strict";
      var n = o(13182);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(58817).Z,
        u = o(12813).Z,
        a = r(o(32735)),
        l = o(33585),
        f = o(22313),
        c = o(3),
        i = o(63700),
        s = o(32463),
        d = o(33558),
        p = o(13464),
        v = "undefined" !== typeof a.default.useTransition,
        y = {};
      function h(e, t, o, n) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, o, n).catch(function (e) {
            0;
          });
          var r =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          y[t + "%" + o + (r ? "%" + r : "")] = !0;
        }
      }
      var b = a.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          b = e.as,
          g = e.children,
          C = e.prefetch,
          _ = e.passHref,
          M = e.replace,
          R = e.soft,
          L = e.shallow,
          m = e.scroll,
          x = e.locale,
          j = e.onClick,
          E = e.onMouseEnter,
          k = e.onTouchStart,
          O = e.legacyBehavior,
          P = void 0 === O ? !0 !== Boolean(!1) : O,
          w = u(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = g),
          !P ||
            ("string" !== typeof o && "number" !== typeof o) ||
            (o = a.default.createElement("a", null, o));
        var T = !1 !== C,
          I = v ? a.default.useTransition() : [],
          S = n(I, 2)[1],
          U = a.default.useContext(c.RouterContext),
          A = a.default.useContext(i.AppRouterContext);
        A && (U = A);
        var B,
          D = a.default.useMemo(
            function () {
              var e = l.resolveHref(U, r, !0),
                t = n(e, 2),
                o = t[0],
                u = t[1];
              return { href: o, as: b ? l.resolveHref(U, b) : u || o };
            },
            [U, r, b]
          ),
          H = D.href,
          K = D.as,
          N = a.default.useRef(H),
          Z = a.default.useRef(K);
        P && (B = a.default.Children.only(o));
        var G = P ? B && "object" === typeof B && B.ref : t,
          q = s.useIntersection({ rootMargin: "200px" }),
          z = n(q, 3),
          F = z[0],
          J = z[1],
          Q = z[2],
          V = a.default.useCallback(
            function (e) {
              (Z.current === K && N.current === H) ||
                (Q(), (Z.current = K), (N.current = H)),
                F(e),
                G &&
                  ("function" === typeof G
                    ? G(e)
                    : "object" === typeof G && (G.current = e));
            },
            [K, G, H, Q, F]
          );
        a.default.useEffect(
          function () {
            var e = J && T && l.isLocalURL(H),
              t = "undefined" !== typeof x ? x : U && U.locale,
              o = y[H + "%" + K + (t ? "%" + t : "")];
            e && !o && h(U, H, K, { locale: t });
          },
          [K, H, J, x, T, U]
        );
        var W = {
          ref: V,
          onClick: function (e) {
            P || "function" !== typeof j || j(e),
              P &&
                B.props &&
                "function" === typeof B.props.onClick &&
                B.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, n, r, u, a, f, c, i) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(o))
                  ) {
                    e.preventDefault();
                    var s = function () {
                      "softPush" in t && "softReplace" in t
                        ? t[
                            u
                              ? r
                                ? "softReplace"
                                : "softPush"
                              : r
                              ? "replace"
                              : "push"
                          ](o)
                        : t[r ? "replace" : "push"](o, n, {
                            shallow: a,
                            locale: c,
                            scroll: f,
                          });
                    };
                    i ? i(s) : s();
                  }
                })(e, U, H, K, M, R, L, m, x, A ? S : void 0);
          },
          onMouseEnter: function (e) {
            P || "function" !== typeof E || E(e),
              P &&
                B.props &&
                "function" === typeof B.props.onMouseEnter &&
                B.props.onMouseEnter(e),
              l.isLocalURL(H) && h(U, H, K, { priority: !0 });
          },
          onTouchStart: function (e) {
            P || "function" !== typeof k || k(e),
              P &&
                B.props &&
                "function" === typeof B.props.onTouchStart &&
                B.props.onTouchStart(e),
              l.isLocalURL(H) && h(U, H, K, { priority: !0 });
          },
        };
        if (!P || _ || ("a" === B.type && !("href" in B.props))) {
          var X = "undefined" !== typeof x ? x : U && U.locale,
            Y =
              U &&
              U.isLocaleDomain &&
              d.getDomainLocale(K, X, U.locales, U.domainLocales);
          W.href = Y || p.addBasePath(f.addLocale(K, X, U && U.defaultLocale));
        }
        return P
          ? a.default.cloneElement(B, W)
          : a.default.createElement("a", Object.assign({}, w, W), o);
      });
      (t.default = b),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    32463: function (e, t, o) {
      "use strict";
      var n = o(13182);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            o = e.rootMargin,
            c = e.disabled || !a,
            i = r.useRef(),
            s = r.useState(!1),
            d = n(s, 2),
            p = d[0],
            v = d[1],
            y = r.useState(null),
            h = n(y, 2),
            b = h[0],
            g = h[1];
          r.useEffect(
            function () {
              if (a) {
                if ((i.current && (i.current(), (i.current = void 0)), c || p))
                  return;
                return (
                  b &&
                    b.tagName &&
                    (i.current = (function (e, t, o) {
                      var n = (function (e) {
                          var t,
                            o = {
                              root: e.root || null,
                              margin: e.rootMargin || "",
                            },
                            n = f.find(function (e) {
                              return e.root === o.root && e.margin === o.margin;
                            });
                          if (n && (t = l.get(n))) return t;
                          var r = new Map(),
                            u = new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  o =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && o && t(o);
                              });
                            }, e);
                          return (
                            (t = { id: o, observer: u, elements: r }),
                            f.push(o),
                            l.set(o, t),
                            t
                          );
                        })(o),
                        r = n.id,
                        u = n.observer,
                        a = n.elements;
                      return (
                        a.set(e, t),
                        u.observe(e),
                        function () {
                          if ((a.delete(e), u.unobserve(e), 0 === a.size)) {
                            u.disconnect(), l.delete(r);
                            var t = f.findIndex(function (e) {
                              return e.root === r.root && e.margin === r.margin;
                            });
                            t > -1 && f.splice(t, 1);
                          }
                        }
                      );
                    })(
                      b,
                      function (e) {
                        return e && v(e);
                      },
                      { root: null == t ? void 0 : t.current, rootMargin: o }
                    )),
                  function () {
                    null == i.current || i.current(), (i.current = void 0);
                  }
                );
              }
              if (!p) {
                var e = u.requestIdleCallback(function () {
                  return v(!0);
                });
                return function () {
                  return u.cancelIdleCallback(e);
                };
              }
            },
            [b, c, o, t, p]
          );
          var C = r.useCallback(function () {
            v(!1);
          }, []);
          return [g, p, C];
        });
      var r = o(32735),
        u = o(63078),
        a = "function" === typeof IntersectionObserver;
      var l = new Map(),
        f = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    63700: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var n = (0, o(58817).Z)(o(32735)),
        r = n.default.createContext(null);
      t.AppRouterContext = r;
      var u = n.default.createContext(null);
      t.LayoutRouterContext = u;
      var a = n.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
    },
    89218: function (e, t, o) {
      e.exports = o(21997);
    },
  },
]);
