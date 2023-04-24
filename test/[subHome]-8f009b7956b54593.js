// eslint-disable-next-line no-unused-vars
const subHome = [].push([
  [721],
  {
    58285: function (e, n, t) {
      t.d(n, {
        $: function () {
          return r.$;
        },
      });
      var r = t(51987);
    },
    88837: function (e, n, t) {
      t.d(n, {
        b: function () {
          return g;
        },
      });
      var r,
        i = t(32735);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function s(e) {
        return i.createElement(
          "svg",
          o(
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 30 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r ||
            (r = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.582 13.436a.8.8 0 01-1.164-1.098l9-9.54a.8.8 0 011.164 0l9 9.54a.8.8 0 11-1.164 1.098L15.8 5.36v20.483a.8.8 0 11-1.6 0V5.36l-7.618 8.075z",
              fill: "currentColor",
            }))
        );
      }
      var c = t(51813),
        a = t(24384),
        l = t(75246),
        u = t(3890),
        p = t(36962),
        d = t(95552);
      var f = {
          name: "8ugr8e",
          styles:
            "&[data-is-hidden='true']{opacity:0;pointer-events:none;transform:translate(0, calc(100% + 50px));}",
        },
        h = {
          name: "io4m6s",
          styles:
            "position:sticky;right:unset;width:44px;height:44px;bottom:32px;margin-top:-94px;margin-right:16px;font-size:18px",
        },
        x = function (e) {
          return (0, l.css)(
            "position:fixed;width:58px;height:58px;bottom:30px;right:0;z-index:",
            u.$y.LEVEL_HEADER,
            ";margin-left:auto;margin-right:30px;color:",
            e.colors.fillPrimary,
            ";font-size:30px;display:flex;justify-content:center;align-items:center;background:",
            (0, d.m)(e.colors.bgBase, 0.9),
            ";border:1px solid ",
            e.colors.grey300,
            ";cursor:pointer;outline:none;border-radius:29px;opacity:1;pointer-events:auto;transition:opacity 0.4s ease,pointer-events 0.4s ease,transform 0.4s ease;",
            (0, p.K2)(p.RR.DesktopSmall, h),
            ";",
            (0, p.K2)(p.RR.DesktopMedium, (0, l.css)(f, ";", "")),
            ";",
            (0, p.Rk)(f),
            ";",
            ""
          );
        },
        m = t(38839),
        g = function (e) {
          var n = e.threshold,
            t = void 0 === n ? 200 : n,
            r = e.reverseScrollThreshold,
            o = void 0 === r ? 200 : r,
            l = (0, i.useState)(!1),
            u = l[0],
            p = l[1],
            d = (0, i.useRef)(null);
          (0, i.useEffect)(function () {
            var e = d.current;
            if (e) {
              var n = new IntersectionObserver(
                function (e) {
                  var n = e.some(function (e) {
                    return e.isIntersecting;
                  });
                  p(n);
                },
                { rootMargin: "50px 0px" }
              );
              return (
                n.observe(e),
                function () {
                  return n.disconnect();
                }
              );
            }
          }, []);
          var f = (0, i.useState)(!1),
            h = f[0],
            g = f[1],
            v = (0, i.useState)(!1),
            b = v[0],
            y = v[1];
          (0, i.useEffect)(
            function () {
              var e = window.scrollY,
                n = 1,
                r = window.scrollY,
                i = function () {
                  var i = window.scrollY;
                  g(i >= t);
                  var s = Math.sign(i - e);
                  n !== s && ((n = s), (r = i)),
                    y(-1 === s || i - r < o),
                    (e = i);
                };
              return (
                window.addEventListener("scroll", i, { passive: !0 }),
                function () {
                  return window.removeEventListener("scroll", i);
                }
              );
            },
            [t, o]
          );
          var j = (h && b) || u,
            k = (0, a.lO)(),
            w = k.screenName,
            R = k.params;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("div", { ref: d }),
              (0, m.jsx)(c.l, {
                screenName: w,
                target: "top_button",
                params: R,
                children: (0, m.jsx)("button", {
                  css: x,
                  type: "button",
                  onClick: function () {
                    return window.scrollTo({ top: 0 });
                  },
                  "data-is-hidden": !j,
                  children: (0, m.jsx)(s, {
                    "aria-label": "\ub9e8 \uc704\ub85c \uc2a4\ud06c\ub864",
                  }),
                }),
              }),
            ],
          });
        };
    },
    82947: function (e, n, t) {
      t.d(n, {
        F4: function () {
          return r;
        },
        Hr: function () {
          return h;
        },
        Ip: function () {
          return d;
        },
        Ls: function () {
          return a;
        },
        M8: function () {
          return s;
        },
        MZ: function () {
          return i;
        },
        TU: function () {
          return u;
        },
        Tm: function () {
          return o;
        },
        _O: function () {
          return p;
        },
        g: function () {
          return l;
        },
        nc: function () {
          return c;
        },
        we: function () {
          return f;
        },
      });
      var r = 180,
        i = 261,
        o = 120,
        s = 174,
        c = r,
        a = 355,
        l = o,
        u = 249,
        p = r,
        d = 332,
        f = o,
        h = 231;
    },
    21663: function (e, n, t) {
      t.d(n, {
        wo: function () {
          return g;
        },
        bs: function () {
          return m;
        },
        qj: function () {
          return v;
        },
        gT: function () {
          return h;
        },
        $c: function () {
          return c;
        },
        Wg: function () {
          return a;
        },
        _G: function () {
          return r;
        },
      });
      var r = t(82947),
        i = t(32735),
        o = t(59170),
        s = t(38839),
        c = (0, i.memo)(function (e) {
          var n = e.book,
            t = e.index,
            r = (0, i.useMemo)(
              function () {
                return { extraParams: { book_index: t } };
              },
              [t]
            );
          return (0, s.jsx)(o.fy, {
            data: n,
            trackingOptions: r,
            children: function (e) {
              var n = e.BookFastRenderer;
              return (0, s.jsx)(n, { index: t });
            },
          });
        }),
        a = function (e) {
          var n = e.item,
            t = e.index;
          return (0, s.jsx)(c, { book: n.contents.book, index: t });
        },
        l = t(31737),
        u = t(75246),
        p = t(36962);
      function d(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function f(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? d(Object(t), !0).forEach(function (n) {
                (0, l.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var h = [
          o.MS,
          (0, o.zI)([
            {
              greaterThan: p.RR.DesktopSmall,
              value: { width: r.F4, height: r.MZ, type: 700 },
            },
            {
              orBelow: p.RR.DesktopSmall,
              value: { width: r.Tm, height: r.M8, type: 400 },
            },
          ]),
        ],
        x = [
          (0, o.og)(2),
          function (e) {
            return f(
              f({}, e),
              {},
              {
                BookFastRenderer: e.BookFastRenderer.addStyle(
                  (0, u.css)(
                    "width:",
                    r._O,
                    "px;height:",
                    r.Ip,
                    "px;",
                    (0, p.K2)(
                      p.RR.DesktopSmall,
                      (0, u.css)("width:", r.we, "px;height:", r.Hr, "px;", "")
                    ),
                    ";",
                    ""
                  )
                ),
              }
            );
          },
        ],
        m = [
          (0, o.og)(3),
          function (e) {
            return f(
              f({}, e),
              {},
              {
                BookFastRenderer: e.BookFastRenderer.addStyle(
                  (0, u.css)(
                    "width:",
                    r.nc,
                    "px;height:",
                    r.Ls,
                    "px;",
                    (0, p.K2)(
                      p.RR.DesktopSmall,
                      (0, u.css)("width:", r.g, "px;height:", r.TU, "px;", "")
                    ),
                    ";",
                    ""
                  )
                ),
              }
            );
          },
        ],
        g = [].concat(h, x),
        v = [].concat(h, m);
    },
    21335: function (e, n, t) {
      t.d(n, {
        U: function () {
          return r;
        },
        f: function () {
          return i;
        },
      });
      var r = (0, t(32735).createContext)({ seed: "" }),
        i = r.Provider;
    },
    78529: function (e, n, t) {
      t.d(n, {
        GY: function () {
          return G;
        },
        x_: function () {
          return F;
        },
        FO: function () {
          return T;
        },
      });
      var r = t(31737),
        i = t(32735),
        o = t(59170),
        s = t(36962),
        c = t(58266),
        a = t(12332),
        l = t(86432),
        u = t(21663),
        p = t(75246),
        d = t(43604);
      var f = function (e) {
          return (0, p.css)(
            "position:relative;display:flex;height:100%;background-color:",
            e.colors.bgBase,
            ";",
            ""
          );
        },
        h = (0, p.css)(
          "display:flex;flex-direction:column;align-items:stretch;justify-content:center;width:",
          80,
          "px;",
          (0, s.K2)(s.RR.DesktopSmall, (0, p.css)("width:", 60, "px;", "")),
          ";",
          ""
        ),
        x = (0, p.css)(
          "width:",
          80,
          "px;height:100%;display:flex;justify-content:center;align-items:center;",
          (0, s.K2)(s.RR.DesktopSmall, (0, p.css)("width:", 60, "px;", "")),
          ";",
          ""
        ),
        m = { name: "1qnfxuk", styles: "font-size:15px;line-height:18px" },
        g = function (e) {
          return (0, p.css)(
            "font-weight:500;font-size:18px;line-height:21px;letter-spacing:-0.01em;color:",
            e.colors.fillPrimary,
            ";",
            (0, s.K2)(s.RR.DesktopSmall, m),
            ";",
            ""
          );
        },
        v = (0, p.css)(
          "width:",
          184,
          "px;height:100%;margin-right:",
          26,
          "px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;",
          (0, s.K2)(s.RR.DesktopSmall, (0, p.css)("width:", 181, "px;", "")),
          ";",
          ""
        ),
        b = {
          name: "3ogmk7",
          styles:
            "display:block;white-space:nowrap;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis",
        },
        y = (0, p.css)(
          "margin-top:6px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "6sug3x",
            styles: "margin-top:3px",
          }),
          ";",
          ""
        ),
        j = { name: "ou8xsw", styles: "flex:0 0 auto" },
        k = (0, p.css)(
          "font-size:14px;line-height:17px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "1dmkk28",
            styles: "font-size:12px;line-height:14px",
          }),
          ";",
          ""
        ),
        w = (0, p.css)(
          "margin-top:7px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "1soh0gv",
            styles: "margin-top:4px",
          }),
          ";",
          ""
        ),
        R = (0, p.css)(
          "display:flex;width:370px;height:116px;margin-bottom:6px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "813svz",
            styles: "width:327px;height:87px",
          }),
          ";&:nth-of-type(n + 7){margin-bottom:0px;}",
          ""
        ),
        S = {
          name: "1hdxqwv",
          styles: "width:60px;height:87px;margin-right:60px",
        },
        O = function (e) {
          return (0, p.css)(
            (0, d.F6)(e),
            ";width:80px;height:100%;margin-right:80px;",
            (0, s.K2)(s.RR.DesktopSmall, S),
            ";",
            ""
          );
        },
        D = (0, p.css)(
          "height:100%;padding-top:24px;padding-right:60px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "1l6kvhi",
            styles: "padding-top:15px;padding-right:87px",
          }),
          ";",
          ""
        ),
        P = {
          name: "goena4",
          styles: "width:120px;height:16px;margin-bottom:4px",
        },
        K = function (e) {
          return (0, p.css)(
            (0, d.F6)(e),
            ";width:150px;height:19px;margin-bottom:6px;",
            (0, s.K2)(s.RR.DesktopSmall, P),
            ";",
            ""
          );
        },
        B = {
          name: "1tatoyj",
          styles: "width:80px;height:13px;margin-bottom:10px",
        },
        _ = function (e) {
          return (0, p.css)(
            (0, d.F6)(e),
            ";width:100px;height:16px;margin-bottom:12px;",
            (0, s.K2)(s.RR.DesktopSmall, B),
            ";",
            ""
          );
        },
        Z = { name: "1e3q1j0", styles: "width:30px;height:14px" },
        C = function (e) {
          return (0, p.css)(
            (0, d.F6)(e),
            ";width:50px;height:16px;",
            (0, s.K2)(s.RR.DesktopSmall, Z),
            ";",
            ""
          );
        },
        V = t(38839);
      function E(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function N(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? E(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var z = [{ value: !1 }];
      function M(e, n) {
        if ("number" !== typeof e)
          throw new Error(
            "Assertion failed: ".concat(n || "value is not a number")
          );
      }
      var A = (0, l.cd)(function () {
          return function (e) {
            var n = e.index,
              t = (0, i.useContext)(o.Ux).components,
              r = t.BookCoverRenderer,
              s = t.BookMetadataRenderer,
              c = t.BookTouchArea,
              a = t.BookViewTracker;
            return (
              M(n, "GridOrderedBookRenderer index is not number"),
              (0, V.jsx)(a, {
                children: (0, V.jsxs)("div", {
                  css: f,
                  children: [
                    (0, V.jsx)("div", {
                      css: h,
                      children: (0, V.jsx)(r, { index: n }),
                    }),
                    (0, V.jsx)("div", {
                      css: x,
                      children: (0, V.jsx)("div", { css: g, children: n + 1 }),
                    }),
                    (0, V.jsx)("div", {
                      css: v,
                      children: (0, V.jsx)(s, { index: n }),
                    }),
                    (0, V.jsx)(c, {}),
                  ],
                }),
              })
            );
          };
        }),
        I = (0, l.cd)(function (e) {
          var n = o.dR.withOptions(
              N(N({}, e), {}, { clipCount: 1, clipBreakPoint: 1 })
            ),
            t = o.dR.withOptions(
              N(
                N({}, e),
                {},
                { clipCount: null, clipBreakPoint: Number.POSITIVE_INFINITY }
              )
            );
          return function (e) {
            var r,
              l,
              u,
              p,
              d = (0, i.useContext)(o.Fd),
              f = !(null === (r = d.cover) || void 0 === r || !r.freeBook),
              h =
                null === (l = d.metadata) || void 0 === l ? void 0 : l.authors,
              x =
                null ===
                  (u = (0, a.K)(h).find(function (e) {
                    return (
                      "translator" !==
                      (null === e || void 0 === e ? void 0 : e.role)
                    );
                  })) ||
                void 0 === u ||
                null === (p = u.name) ||
                void 0 === p
                  ? void 0
                  : p.length,
              m = (0, c.F)(s.RR.DesktopSmall);
            if (!x) return (0, V.jsx)(V.Fragment, {});
            return (f ? (m ? x >= 10 : x >= 7) : m ? x >= 15 : x >= 14)
              ? (0, V.jsx)(t, N({}, e))
              : (0, V.jsx)(n, N({}, e));
          };
        }, o.dR.getOptions()),
        L = (0, l.cd)(function () {
          return function () {
            var e,
              n,
              t,
              r,
              s = (0, i.useContext)(o.Ux).components,
              c = s.BookAuthors,
              a = s.BookStarRate,
              l = s.BookMetadataItemGroup,
              u = s.BookDefaultMetadataItem,
              p = (0, i.useContext)(o.Fd).cover,
              d =
                null !==
                  (e =
                    null === p ||
                    void 0 === p ||
                    null === (n = p.freeBook) ||
                    void 0 === n
                      ? void 0
                      : n.count) && void 0 !== e
                  ? e
                  : 0;
            return (0,
            V.jsxs)(V.Fragment, { children: [(0, V.jsxs)(l, { collapse: z, css: y, children: [(0, V.jsx)(c, { css: b }), d > 0 && (0, V.jsx)(u, { css: j, children: (0, V.jsxs)("span", { css: k, children: [d, null !== (t = null === p || void 0 === p || null === (r = p.freeBook) || void 0 === r ? void 0 : r.unit) && void 0 !== t ? t : "\ud654", " \ubb34\ub8cc"] }) })] }), (0, V.jsx)(l, { css: w, children: (0, V.jsx)(a, {}) })] });
          };
        }),
        T = (0, l.cd)(function () {
          return function (e) {
            var n = e.elementRef;
            return (0,
            V.jsxs)("div", { css: R, ref: n, children: [(0, V.jsx)("div", { css: O }), (0, V.jsxs)("div", { css: D, children: [(0, V.jsx)("div", { css: K }), (0, V.jsx)("div", { css: _ }), (0, V.jsx)("div", { css: C })] })] });
          };
        }),
        F = [
          o.MS,
          (0, o.SL)([
            { orBelow: s.RR.DesktopSmall, value: o.oY.EXTRA_SMALL },
            { greaterThan: s.RR.DesktopSmall, value: o.oY.SMALL },
          ]),
          (0, o.x$)([
            { orBelow: s.RR.DesktopSmall, value: o.oY.EXTRA_SMALL },
            { greaterThan: s.RR.DesktopSmall, value: o.oY.LARGE },
          ]),
          (0, o.RI)([
            { orBelow: s.RR.DesktopSmall, value: { width: 60, height: 87 } },
            {
              greaterThan: s.RR.DesktopSmall,
              value: { width: 80, height: 116 },
            },
          ]),
          function (e) {
            var n = N({}, e);
            return (
              (n.BookAuthors = I.withOptions(n.BookAuthors.getOptions())),
              (n.BookBadgeRenderer = n.BookNothing),
              (n.BookTitle = n.BookTitle.withOptions({ lineCount: 1 })),
              (n.BookAdultBadge = n.BookAdultBadge.withOptions({
                iconSize: [
                  { value: 20 },
                  { value: 16, orBelow: s.RR.DesktopSmall },
                ],
                position: [
                  { value: 4 },
                  { value: 3, orBelow: s.RR.DesktopSmall },
                ],
              })),
              (n.BookSkeleton = T),
              (n.BookMetadataItems = L),
              (n.BookRenderer = A),
              n
            );
          },
        ],
        G = u.Wg;
    },
    27225: function (e, n, t) {
      t.d(n, {
        A: function () {
          return f;
        },
        x: function () {
          return d;
        },
      });
      var r = t(78529),
        i = t(60444),
        o = t(75246),
        s = t(3890),
        c = t(36962);
      var a = (0, o.css)(
          s.UD,
          ";padding:0;",
          (0, c.K2)(c.RR.DesktopSmall, {
            name: "1fe7eha",
            styles: "padding:0 16px",
          }),
          ";",
          ""
        ),
        l = (0, o.css)(
          "width:1170px;display:flex;flex-wrap:wrap;",
          (0, c.K2)(c.RR.DesktopSmall, {
            name: "1cr1vx9",
            styles: "width:981px",
          }),
          ";",
          ""
        ),
        u = t(38839),
        p = Array.from({ length: 9 }, function (e, n) {
          return n;
        }),
        d = function () {
          return (0, u.jsx)(i.hx, {
            children: (0, u.jsx)("div", {
              css: l,
              children: p.map(function (e) {
                return (0, u.jsx)(r.FO, {}, e);
              }),
            }),
          });
        },
        f = function () {
          return (0, u.jsx)("div", {
            css: a,
            children: (0, u.jsx)("div", {
              css: l,
              children: p.map(function (e) {
                return (0, u.jsx)(r.FO, {}, e);
              }),
            }),
          });
        };
    },
    3503: function (e, n, t) {
      t.d(n, {
        tW: function () {
          return h;
        },
        dM: function () {
          return d;
        },
      });
      var r = t(59170),
        i = t(60444),
        o = t(75246),
        s = t(36962);
      var c = (0, o.css)(
          "display:flex;padding-bottom:20px;",
          (0, s.K2)(s.RR.DesktopSmall, {
            name: "1u53ekv",
            styles: "padding-bottom:16px",
          }),
          ";",
          ""
        ),
        a = {
          name: "avjb9e",
          styles: "margin-right:6px;&:last-of-type{margin:0px;}",
        },
        l = t(38839),
        u = Array.from({ length: 6 }, function (e, n) {
          return n;
        }),
        p = function (e) {
          var n = e.className;
          return (0, l.jsx)("ul", {
            css: c,
            className: n,
            children: u.map(function (e) {
              return (0, l.jsx)(r.a2, { css: a }, e);
            }),
          });
        },
        d = function () {
          return (0, l.jsx)(i.hx, { children: (0, l.jsx)(p, {}) });
        },
        f = function (e) {
          var n = e.className;
          return (0, l.jsx)("ul", {
            css: c,
            className: n,
            children: u.map(function (e) {
              return (0, l.jsx)(r.DU, { css: a }, e);
            }),
          });
        },
        h = function () {
          return (0, l.jsx)(i.hx, { children: (0, l.jsx)(f, {}) });
        };
    },
    34188: function (e, n, t) {
      t.d(n, {
        n: function () {
          return m;
        },
      });
      var r = t(60444),
        i = t(75246),
        o = t(36962);
      var s = { name: "zjik7", styles: "display:flex" },
        c = (0, i.css)(
          "width:calc((100% - 12px) / 3);height:100%;margin-right:6px;display:flex;flex-direction:column;align-items:center;&:last-of-type{margin-right:0;}",
          (0, o.K2)(o.RR.DesktopSmall, {
            name: "iktc7d",
            styles:
              "width:100%;margin:0px;&:not(:first-of-type){display:none;}",
          }),
          ";",
          ""
        ),
        a = { name: "18uqayh", styles: "margin-bottom:16px" },
        l = function (e) {
          return (0, i.css)(
            "width:100%;height:140px;margin-bottom:20px;background-color:",
            e.colors.grey100,
            ";border-radius:4px;",
            (0, o.K2)(o.RR.DesktopSmall, a),
            ";",
            ""
          );
        },
        u = {
          name: "17xtwq1",
          styles: "width:160px;height:17px;margin-bottom:2px",
        },
        p = function (e) {
          return (0, i.css)(
            "width:220px;height:19px;margin-bottom:6px;background-color:",
            e.colors.grey100,
            ";",
            (0, o.K2)(o.RR.DesktopSmall, u),
            ";",
            ""
          );
        },
        d = { name: "1vlk8o6", styles: "width:70px;height:14px" },
        f = function (e) {
          return (0, i.css)(
            "width:100px;height:16px;background-color:",
            e.colors.grey100,
            ";",
            (0, o.K2)(o.RR.DesktopSmall, d),
            ";",
            ""
          );
        },
        h = t(38839),
        x = Array.from({ length: 3 }, function (e, n) {
          return n;
        }),
        m = function () {
          return (0, h.jsx)(r.hx, {
            children: (0, h.jsx)("ul", {
              css: s,
              children: x.map(function (e) {
                return (0,
                h.jsxs)("li", { css: c, children: [(0, h.jsx)("div", { css: l }), (0, h.jsx)("div", { css: p }), (0, h.jsx)("div", { css: p }), (0, h.jsx)("div", { css: f })] }, e);
              }),
            }),
          });
        };
    },
    65373: function (e, n, t) {
      t.d(n, {
        AZ: function () {
          return o.AZ;
        },
        L$: function () {
          return m;
        },
        LD: function () {
          return h;
        },
        M_: function () {
          return c;
        },
        Om: function () {
          return g;
        },
        W4: function () {
          return a;
        },
        _v: function () {
          return d;
        },
        d1: function () {
          return p;
        },
        hK: function () {
          return s;
        },
        kp: function () {
          return l;
        },
        pQ: function () {
          return o.pQ;
        },
        sU: function () {
          return o.sU;
        },
      });
      var r = t(75246),
        i = t(36962),
        o = t(43604);
      var s = (0, r.css)(
          "padding-bottom:30px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1u53ekv",
            styles: "padding-bottom:16px",
          }),
          ";",
          ""
        ),
        c = (0, r.css)(
          "height:48px;padding-top:6px;padding-bottom:16px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1on3rs0",
            styles: "height:36px;padding-top:5px;padding-bottom:11px",
          }),
          ";",
          ""
        ),
        a = {
          name: "42m2oi",
          styles:
            "display:flex;justify-content:space-between;width:100%;height:100%",
        },
        l = {
          name: "f794wb",
          styles:
            "display:flex;align-items:center;min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:-2px",
        },
        u = { name: "vnyf77", styles: "font-size:17px;line-height:20px" },
        p = function (e) {
          return (0, r.css)(
            "font-size:22px;font-weight:700;line-height:26px;letter-spacing:-0.01em;color:",
            e.colors.grey600,
            ";min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
            (0, i.K2)(i.RR.DesktopSmall, u),
            ";",
            ""
          );
        },
        d = {
          name: "za0kxg",
          styles: "display:flex;align-items:center;flex-shrink:0",
        },
        f = { name: "1j560p1", styles: "margin:0px 11px" },
        h = function (e) {
          return (0, r.css)(
            "margin:0px 16px;width:1px;height:16px;background-color:",
            e.colors.grey100,
            ";",
            (0, i.K2)(i.RR.DesktopSmall, f),
            ";",
            ""
          );
        },
        x = {
          name: "1s07gty",
          styles: "font-size:13px;line-height:16px;margin-top:-1px",
        },
        m = function (e) {
          return (0, r.css)(
            "color:",
            e.colors.grey500,
            ";letter-spacing:-0.01em;font-size:16px;font-weight:500;line-height:19px;",
            (0, i.K2)(i.RR.DesktopSmall, x),
            ";",
            ""
          );
        },
        g = (0, i.Rk)(
          (0, r.css)(
            "padding-left:30px;padding-right:30px;",
            (0, i.K2)(i.RR.DesktopSmall, {
              name: "1dw6hj0",
              styles: "padding-left:16px;padding-right:16px",
            }),
            ";",
            ""
          )
        );
    },
    60444: function (e, n, t) {
      t.d(n, {
        _U: function () {
          return l;
        },
        hC: function () {
          return u;
        },
        hx: function () {
          return v;
        },
      });
      var r = t(32735),
        i = t(51813),
        o = t(98928),
        s = t(38802),
        c = t(65373),
        a = t(38839),
        l = (0, r.memo)(function (e) {
          var n = e.link,
            t = e.title,
            r = e.children,
            o = e.onLinkClick,
            l = (0, s.NU)();
          return (0, a.jsxs)("div", {
            css: c.W4,
            children: [
              (0, a.jsx)("div", {
                css: c.kp,
                children: (0, a.jsx)("h2", { css: c.d1, children: t }),
              }),
              (0, a.jsxs)("div", {
                css: c._v,
                children: [
                  r,
                  r && (0, a.jsx)("div", { css: c.LD }),
                  n &&
                    (0, a.jsx)(i.l, {
                      screenName: l.screenName,
                      target: "section_header",
                      params: l.params,
                      children: (0, a.jsx)("a", {
                        css: c.L$,
                        href: n,
                        onClick: function () {
                          return null === o || void 0 === o ? void 0 : o();
                        },
                        children: "\ub354\ubcf4\uae30",
                      }),
                    }),
                ],
              }),
            ],
          });
        }),
        u = function (e) {
          var n = e.children,
            t = e.extraCss,
            r = e.horizontal,
            i = void 0 === r || r,
            u = e.paddingBottom,
            p = void 0 === u || u,
            d = e.link,
            f = e.title,
            h = e.sectionHeadChildren,
            x = e.onLinkClick,
            m = [i ? c.pQ : c.sU, c.AZ, p && c.hK, t],
            g = [c.M_, i && c.Om],
            v = (0, s.NU)();
          return (0, a.jsx)(o.B, {
            screenName: v.screenName,
            target: "section",
            params: v.params,
            children: (0, a.jsxs)("section", {
              css: m,
              children: [
                (0, a.jsx)("div", {
                  css: g,
                  children: (0, a.jsx)(l, {
                    link: d,
                    title: f,
                    onLinkClick: x,
                    children: h,
                  }),
                }),
                n,
              ],
            }),
          });
        },
        p = t(75246),
        d = t(3890),
        f = t(36962),
        h = t(43604);
      var x = (0, p.css)(
          d.UD,
          ";display:flex;flex-direction:column;padding-bottom:20px;margin-top:40px;",
          (0, f.K2)(f.RR.DesktopSmall, {
            name: "1u53ekv",
            styles: "padding-bottom:16px",
          }),
          ";",
          ""
        ),
        m = {
          name: "bcfuls",
          styles: "width:100px;height:19px;margin:6px 0 11px",
        },
        g = function (e) {
          return (0, p.css)(
            "width:166px;height:26px;margin:6px 0 16px;",
            (0, h.F6)(e),
            ";",
            (0, f.K2)(f.RR.DesktopSmall, m),
            ";",
            ""
          );
        },
        v = function (e) {
          var n = e.children;
          return (0, a.jsxs)("section", {
            css: x,
            children: [(0, a.jsx)("header", { css: g }), n],
          });
        };
    },
    45786: function (e, n, t) {
      t.d(n, {
        NU: function () {
          return d;
        },
        wK: function () {
          return p;
        },
      });
      var r = t(31737),
        i = t(32735),
        o = t(24384),
        s = t(57836),
        c = t(38839);
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var u = (0, i.createContext)({
          screenName: "",
          params: {
            section_id: -1,
            section_title: "",
            section_landing_url: void 0,
            section_layout: "",
            section_type: void 0,
          },
          bookDefinition: {
            screenName: "",
            params: {
              section_id: -1,
              section_title: "",
              section_landing_url: void 0,
              section_layout: "",
              section_type: void 0,
            },
            rdtTrackingURIParams: { sectionId: "" },
          },
        }),
        p = function (e) {
          var n,
            t = e.section,
            r = e.children,
            a = (0, o.lO)(),
            p = a.screenName,
            d = a.params,
            f = (0, i.useMemo)(
              function () {
                var e;
                return l(
                  l({}, d),
                  {},
                  {
                    section_id: t.id,
                    section_title: t.title,
                    section_layout: t.layout,
                    section_type: t.type,
                    section_landing_url:
                      (null === (e = t.more_details) || void 0 === e
                        ? void 0
                        : e.path) || void 0,
                  }
                );
              },
              [
                d,
                t.id,
                t.title,
                t.layout,
                null === (n = t.more_details) || void 0 === n ? void 0 : n.path,
                t.type,
              ]
            ),
            h = (0, s.W)(),
            x = t.layout.replace(/(^|[a-z])([A-Z])/g, function (e, n, t) {
              return (n ? "".concat(n, "_") : "") + t.toLowerCase();
            }),
            m = (0, i.useMemo)(
              function () {
                return {
                  screenName: p,
                  params: f,
                  bookDefinition: {
                    screenName: p,
                    params: f,
                    rdtTrackingURIParams: { sectionId: "".concat(h).concat(x) },
                  },
                };
              },
              [p, f, x, h]
            );
          return (0, c.jsx)(u.Provider, { value: m, children: r });
        },
        d = function () {
          return (0, i.useContext)(u);
        };
    },
    38802: function (e, n, t) {
      t.d(n, {
        NU: function () {
          return r.NU;
        },
        wK: function () {
          return r.wK;
        },
      });
      var r = t(45786);
    },
    96955: function (e, n, t) {
      t.d(n, {
        j: function () {
          return p;
        },
      });
      var r = t(60444),
        i = t(75246),
        o = t(36962);
      var s = { name: "5kov97", styles: "display:flex;flex-wrap:wrap" },
        c = (0, i.css)(
          "width:132px;height:34px;margin-bottom:6px;&:first-of-type,&:nth-of-type(3),&:nth-of-type(4){width:66px;}&:not(:last-of-type){margin-right:6px;}",
          (0, o.K2)(o.RR.DesktopSmall, {
            name: "ky7yqg",
            styles:
              "width:125px;height:32px;&:first-of-type,&:nth-of-type(3),&:nth-of-type(4){width:62px;}",
          }),
          ";",
          ""
        ),
        a = function (e) {
          return (0, i.css)(
            "width:100%;height:100%;border-radius:4px;background-color:",
            e.colors.grey100,
            ";",
            ""
          );
        },
        l = t(38839),
        u = Array.from({ length: 5 }, function (e, n) {
          return n;
        }),
        p = function () {
          return (0, l.jsx)(r.hx, {
            children: (0, l.jsx)("ul", {
              css: s,
              children: u.map(function (e) {
                return (0,
                l.jsx)("li", { css: c, children: (0, l.jsx)("div", { css: a }) }, e);
              }),
            }),
          });
        };
    },
    61974: function (e, n, t) {
      t.d(n, {
        g: function () {
          return f;
        },
      });
      var r = t(75246),
        i = t(36962);
      var o = (0, r.css)(
          "display:flex;justify-content:center;margin:30px 0 40px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1nm7kzq",
            styles:
              "justify-content:flex-start;padding-left:16px;margin:16px 0 24px",
          }),
          ";",
          ""
        ),
        s = (0, r.css)(
          "&:not(:first-of-type){margin-left:20px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1a2afmv",
            styles: "margin-left:10px",
          }),
          ";}",
          ""
        ),
        c = { name: "81adqn", styles: "width:56px;height:56px" },
        a = function (e) {
          return (0, r.css)(
            "width:70px;height:70px;border-radius:100%;background-color:",
            e.colors.grey100,
            ";",
            (0, i.K2)(i.RR.DesktopSmall, c),
            ";",
            ""
          );
        },
        l = { name: "kxpave", styles: "width:46px;height:13px" },
        u = function (e) {
          return (0, r.css)(
            "width:60px;height:16px;margin:8px auto 0;border-radius:4px;background-color:",
            e.colors.grey100,
            ";",
            (0, i.K2)(i.RR.DesktopSmall, l),
            ";",
            ""
          );
        },
        p = t(38839),
        d = Array.from({ length: 8 }, function (e, n) {
          return n;
        }),
        f = function () {
          return (0, p.jsx)("section", {
            css: o,
            children: d.map(function (e) {
              return (0,
              p.jsxs)("div", { css: s, children: [(0, p.jsx)("div", { css: a }), (0, p.jsx)("div", { css: u })] }, e);
            }),
          });
        };
    },
    65750: function (e, n, t) {
      t.d(n, {
        U: function () {
          return d;
        },
      });
      var r = t(60444),
        i = t(75246),
        o = t(36962);
      var s = { name: "zjik7", styles: "display:flex" },
        c = {
          name: "1x10sxu",
          styles: "&:not(:first-of-type){margin-left:6px;}",
        },
        a = { name: "1vialda", styles: "width:165px;height:330px" },
        l = function (e) {
          return (0, i.css)(
            "width:217px;height:434px;background-color:",
            e.colors.grey100,
            ";border-radius:4px;",
            (0, o.K2)(o.RR.DesktopSmall, a),
            ";",
            ""
          );
        },
        u = t(38839),
        p = Array.from({ length: 5 }, function (e, n) {
          return n;
        }),
        d = function () {
          return (0, u.jsx)(r.hx, {
            children: (0, u.jsx)("ul", {
              css: s,
              children: p.map(function (e) {
                return (0,
                u.jsx)("li", { css: c, children: (0, u.jsx)("div", { css: l }) }, e);
              }),
            }),
          });
        };
    },
    56883: function (e, n, t) {
      t.d(n, {
        G: function () {
          return l;
        },
      });
      var r = t(75246),
        i = t(36962);
      var o = (0, r.css)(
          "display:flex;max-width:1170px;padding:0 30px;margin:0 auto 30px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1fe7eha",
            styles: "padding:0 16px",
          }),
          ";",
          ""
        ),
        s = {
          name: "1o65rp1",
          styles:
            "&:not(:first-of-type){display:none;}width:343px;height:200px",
        },
        c = function (e) {
          return (0, r.css)(
            "width:552px;height:330px;background-color:",
            e.colors.grey100,
            ";border-radius:4px;&:first-of-type{margin-right:6px;}",
            (0, i.K2)(i.RR.DesktopSmall, s),
            ";",
            ""
          );
        },
        a = t(38839),
        l = function () {
          return (0, a.jsxs)("section", {
            css: o,
            children: [
              (0, a.jsx)("div", { css: c }),
              (0, a.jsx)("div", { css: c }),
            ],
          });
        };
    },
    76478: function (e, n, t) {
      t.d(n, {
        v: function () {
          return f;
        },
      });
      var r = t(75246),
        i = t(36962);
      var o = (0, r.css)(
          "max-width:1170px;margin:0 auto 30px;padding:0 30px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1hcx8jb",
            styles: "padding:0",
          }),
          ";",
          ""
        ),
        s = {
          name: "1cblpio",
          styles:
            "height:200px;padding-top:37px;padding-left:16px;margin-bottom:27px;border-radius:0;overflow:visible",
        },
        c = function (e) {
          return (0, r.css)(
            "display:flex;width:100%;height:364px;padding-top:53px;padding-left:93px;background-color:",
            e.colors.grey300,
            ";border-radius:4px;overflow:hidden;",
            (0, i.K2)(i.RR.DesktopSmall, s),
            ";",
            ""
          );
        },
        a = { name: "4bd2r9", styles: "margin-right:6px" },
        l = { name: "x7dccq", styles: "width:120px;height:174px" },
        u = function (e) {
          return (0, r.css)(
            "width:180px;height:261px;background-color:",
            e.colors.grey100,
            ";border-radius:4px;z-index:999;",
            (0, i.K2)(i.RR.DesktopSmall, l),
            ";",
            ""
          );
        },
        p = t(38839),
        d = Array.from({ length: 6 }, function (e, n) {
          return n;
        }),
        f = function () {
          return (0, p.jsx)("section", {
            css: o,
            children: (0, p.jsx)("ul", {
              css: c,
              children: d.map(function (e) {
                return (0,
                p.jsx)("li", { css: a, children: (0, p.jsx)("div", { css: u }) }, e);
              }),
            }),
          });
        };
    },
    16945: function (e, n, t) {
      t.d(n, {
        e: function () {
          return p;
        },
      });
      var r = t(75246),
        i = t(36962);
      var o = (0, r.css)(
          "max-width:1170px;padding:0 30px;margin:0 auto 16px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "1xqiwg1",
            styles: "padding:0 16px;margin:0 auto 16px",
          }),
          ";",
          ""
        ),
        s = (0, r.css)(
          "display:flex;height:400px;",
          (0, i.K2)(i.RR.DesktopSmall, {
            name: "q980de",
            styles: "min-width:375px;height:343px",
          }),
          ";",
          ""
        ),
        c = { name: "1i127sx", styles: "width:343px" },
        a = function (e) {
          return (0, r.css)(
            "width:100%;max-width:1018px;height:100%;border-radius:6px;background-color:",
            e.colors.grey100,
            ";",
            (0, i.K2)(i.RR.DesktopSmall, c),
            ";",
            ""
          );
        },
        l = function (e) {
          return (0, r.css)(
            "width:40px;margin-left:6px;border-radius:6px;background-color:",
            e.colors.grey100,
            ";",
            ""
          );
        },
        u = t(38839),
        p = function () {
          return (0, u.jsx)("section", {
            css: o,
            children: (0, u.jsxs)("ul", {
              css: s,
              children: [
                (0, u.jsx)("li", { css: a }),
                (0, u.jsx)("li", { css: l }),
                (0, u.jsx)("li", { css: l }),
              ],
            }),
          });
        };
    },
    43604: function (e, n, t) {
      t.d(n, {
        AZ: function () {
          return d;
        },
        F6: function () {
          return c;
        },
        Wu: function () {
          return l;
        },
        pQ: function () {
          return a;
        },
        sU: function () {
          return s;
        },
        vQ: function () {
          return u;
        },
        xf: function () {
          return p;
        },
      });
      var r = t(75246),
        i = t(3890),
        o = t(36962);
      var s = i.UD,
        c = function (e) {
          return (0, r.css)(
            "background:",
            e.colors.grey100,
            ";border-radius:4px;",
            ""
          );
        },
        a = (0, r.css)(
          s,
          ";",
          (0, o.Rk)({
            name: "127vvv2",
            styles: "padding-left:0;padding-right:0",
          }),
          ";",
          ""
        ),
        l = (0, o.Rk)({
          name: "1fdbk32",
          styles: "margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)",
        }),
        u = (0, o.Rk)(
          (0, r.css)(
            "padding-left:calc((100vw - 1110px) / 2);padding-right:calc((100vw - 1110px) / 2);",
            (0, o.K2)(o.RR.DesktopMedium, {
              name: "1tjjrhb",
              styles: "padding-left:30px;padding-right:30px",
            }),
            " ",
            (0, o.K2)(o.RR.DesktopSmall, {
              name: "1dw6hj0",
              styles: "padding-left:16px;padding-right:16px",
            }),
            ";",
            ""
          )
        ),
        p = (0, r.css)(
          "width:calc(100% + 40px);padding:0;margin:0 -20px;",
          (0, o.K2)(o.RR.DesktopSmall, {
            name: "xwf54",
            styles: "width:calc(100% + 32px);margin:0 -16px",
          }),
          ";",
          ""
        ),
        d = (0, r.css)(
          "margin-top:40px;",
          (0, o.K2)(o.RR.DesktopSmall, {
            name: "1d0nbku",
            styles: "margin-top:24px",
          }),
          ";&:first-of-type{margin-top:0;}",
          ""
        );
    },
    14472: function (e, n, t) {
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return on;
          },
          default: function () {
            return sn;
          },
        });
      var r = t(87196),
        i = t(75246),
        o = t(46582),
        s = t.n(o),
        c = t(32735),
        a = t(68487),
        l = t(88680),
        u = t(59170),
        p = t(58285),
        d = t(66674),
        f = t(24384),
        h = t(65951),
        x = t(88837),
        m = t(21335),
        g = t(31737),
        v = t(82070),
        b = t.n(v),
        y = t(27225),
        j = t(3503),
        k = t(34188),
        w = t(60444),
        R = t(36962);
      var S,
        O,
        D = { name: "zjik7", styles: "display:flex" },
        P = {
          name: "5mfn95",
          styles: "&:not(:last-of-type){margin-right:6px;}",
        },
        K = { name: "1i127sx", styles: "width:343px" },
        B = function (e) {
          return (0, i.css)(
            "width:366px;height:90px;background-color:",
            e.colors.grey100,
            ";border-radius:4px;",
            (0, R.K2)(R.RR.DesktopSmall, K),
            ";",
            ""
          );
        },
        _ = t(38839),
        Z = Array.from({ length: 3 }, function (e, n) {
          return n;
        }),
        C = function () {
          return (0, _.jsx)(w.hx, {
            children: (0, _.jsx)("ul", {
              css: D,
              children: Z.map(function (e) {
                return (0,
                _.jsx)("li", { css: P, children: (0, _.jsx)("div", { css: B }) }, e);
              }),
            }),
          });
        },
        V = t(96955),
        E = t(61974),
        N = t(65750),
        z = t(56883),
        M = t(76478),
        A = t(16945),
        I = t(62995),
        L = t(22880),
        T = t(49148),
        F = t(59610),
        G = t(99345),
        U = t(38802);
      function H(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function q(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? H(Object(t), !0).forEach(function (n) {
                (0, g.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var W = function (e) {
          var n = (0, c.useState)(function () {
              return new Set();
            })[0],
            t = (0, c.useRef)(e),
            r = (0, c.useRef)({
              initialValue: e,
              bindUpdate: function (e) {
                return (
                  e(t.current),
                  n.add(e),
                  function () {
                    return n.delete(e);
                  }
                );
              },
            });
          return (
            (0, c.useEffect)(
              function () {
                (t.current = e),
                  0 !== n.size &&
                    n.forEach(function (n) {
                      return n(e);
                    });
              },
              [n, e]
            ),
            r
          );
        },
        Y = function (e) {
          var n = (0, c.useState)(e.current.initialValue),
            t = n[0],
            r = n[1];
          return (
            (0, c.useEffect)(
              function () {
                return e.current.bindUpdate(r);
              },
              [e]
            ),
            t
          );
        },
        Q = function (e) {
          return function (n) {
            var t = n.sectionSignal,
              r = n.sectionIndex,
              i = n.itemsSignal,
              o = n.fallback,
              s = Y(t),
              a = Y(i);
            return (0, c.useMemo)(
              function () {
                return a.defaultLoaderSpec && a.isFetching
                  ? o
                  : null === s.items
                  ? (0, _.jsx)(_.Fragment, {})
                  : (0, _.jsx)(e, { section: s, sectionIndex: r });
              },
              [s, r, o, a.defaultLoaderSpec, a.isFetching]
            );
          };
        },
        $ = b()(
          function () {
            return Promise.all([t.e(5923), t.e(1797)])
              .then(t.bind(t, 21797))
              .then(function (e) {
                return e.AiRecommendation;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [21797];
              },
            },
          }
        ),
        X = b()(
          function () {
            return Promise.all([
              t.e(108),
              t.e(47),
              t.e(266),
              t.e(9627),
              t.e(4194),
            ])
              .then(t.bind(t, 14194))
              .then(function (e) {
                return e.BestSeller;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [14194];
              },
            },
          }
        ),
        J = b()(
          function () {
            return Promise.all([t.e(47), t.e(266), t.e(2791), t.e(5126)])
              .then(t.bind(t, 35126))
              .then(function (e) {
                return e.EventHorizontal;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [35126];
              },
            },
          }
        ),
        ee = b()(
          function () {
            return Promise.all([t.e(47), t.e(266), t.e(2791), t.e(8017)])
              .then(t.bind(t, 18017))
              .then(function (e) {
                return e.EventVertical;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [18017];
              },
            },
          }
        ),
        ne = b()(
          function () {
            return Promise.all([t.e(5923), t.e(8650), t.e(3377)])
              .then(t.bind(t, 43377))
              .then(function (e) {
                return e.Group;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [43377];
              },
            },
          }
        ),
        te = b()(
          function () {
            return t
              .e(2078)
              .then(t.bind(t, 82078))
              .then(function (e) {
                return e.Keyword;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [82078];
              },
            },
          }
        ),
        re = b()(
          function () {
            return Promise.all([t.e(5923), t.e(6508)])
              .then(t.bind(t, 76508))
              .then(function (e) {
                return e.NewRelease;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [76508];
              },
            },
          }
        ),
        ie = b()(
          function () {
            return Promise.all([t.e(5923), t.e(6464)])
              .then(t.bind(t, 96464))
              .then(function (e) {
                return e.QuickMenu;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [96464];
              },
            },
          }
        ),
        oe = b()(
          function () {
            return Promise.all([t.e(47), t.e(266), t.e(5587)])
              .then(t.bind(t, 85587))
              .then(function (e) {
                return e.ReadingBook;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [85587];
              },
            },
          }
        ),
        se = b()(
          function () {
            return Promise.all([t.e(5923), t.e(1010)])
              .then(t.bind(t, 1010))
              .then(function (e) {
                return e.Selection;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [1010];
              },
            },
          }
        ),
        ce = b()(
          function () {
            return Promise.all([t.e(47), t.e(266), t.e(2791), t.e(2001)])
              .then(t.bind(t, 42001))
              .then(function (e) {
                return e.SelectionCarousel;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [42001];
              },
            },
          }
        ),
        ae = b()(
          function () {
            return Promise.all([t.e(5923), t.e(7387)])
              .then(t.bind(t, 17387))
              .then(function (e) {
                return e.SelectionCover;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [17387];
              },
            },
          }
        ),
        le = b()(
          function () {
            return Promise.all([t.e(5923), t.e(6876)])
              .then(t.bind(t, 56876))
              .then(function (e) {
                return e.SelectionHookingSentence;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [56876];
              },
            },
          }
        ),
        ue = b()(
          function () {
            return t
              .e(3958)
              .then(t.bind(t, 63958))
              .then(function (e) {
                return e.SelectionMultiline;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [63958];
              },
            },
          }
        ),
        pe = b()(
          function () {
            return t
              .e(5996)
              .then(t.bind(t, 95996))
              .then(function (e) {
                return e.SelectionOriginal;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [95996];
              },
            },
          }
        ),
        de = b()(
          function () {
            return Promise.all([t.e(47), t.e(7806), t.e(2640)])
              .then(t.bind(t, 2640))
              .then(function (e) {
                return e.TopCarouselBanner;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [2640];
              },
            },
          }
        ),
        fe = b()(
          function () {
            return Promise.all([t.e(5923), t.e(9641)])
              .then(t.bind(t, 89641))
              .then(function (e) {
                return e.TopCarouselBook;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [89641];
              },
            },
          }
        ),
        he = b()(
          function () {
            return Promise.all([t.e(47), t.e(7806), t.e(5106)])
              .then(t.bind(t, 65106))
              .then(function (e) {
                return e.TopCarouselCover;
              })
              .then(Q)
              .then(function (e) {
                return { default: e };
              });
          },
          {
            suspense: !0,
            loadableGenerated: {
              webpack: function () {
                return [65106];
              },
            },
          }
        ),
        xe =
          ((S = {}),
          (0, g.Z)(S, G.jV.AiRecommendation, $),
          (0, g.Z)(S, G.jV.BestSeller, X),
          (0, g.Z)(S, G.jV.EventHorizontal, J),
          (0, g.Z)(S, G.jV.EventVertical, ee),
          (0, g.Z)(S, G.jV.Group, ne),
          (0, g.Z)(S, G.jV.Keyword, te),
          (0, g.Z)(S, G.jV.NewRelease, re),
          (0, g.Z)(S, G.jV.QuickMenu, ie),
          (0, g.Z)(S, G.jV.ReadingBook, oe),
          (0, g.Z)(S, G.jV.Selection, se),
          (0, g.Z)(S, G.jV.SelectionCarousel, ce),
          (0, g.Z)(S, G.jV.SelectionCover, ae),
          (0, g.Z)(S, G.jV.SelectionHookingSentence, le),
          (0, g.Z)(S, G.jV.SelectionMultiline, ue),
          (0, g.Z)(S, G.jV.SelectionOriginal, pe),
          (0, g.Z)(S, G.jV.TopCarouselBanner, de),
          (0, g.Z)(S, G.jV.TopCarouselBook, fe),
          (0, g.Z)(S, G.jV.TopCarouselCover, he),
          S),
        me =
          ((O = {}),
          (0, g.Z)(O, G.jV.AiRecommendation, j.tW),
          (0, g.Z)(O, G.jV.BestSeller, y.x),
          (0, g.Z)(O, G.jV.EventHorizontal, C),
          (0, g.Z)(O, G.jV.EventVertical, C),
          (0, g.Z)(O, G.jV.Keyword, V.j),
          (0, g.Z)(O, G.jV.NewRelease, j.tW),
          (0, g.Z)(O, G.jV.QuickMenu, E.g),
          (0, g.Z)(O, G.jV.ReadingBook, y.x),
          (0, g.Z)(O, G.jV.Selection, j.dM),
          (0, g.Z)(O, G.jV.SelectionCarousel, k.n),
          (0, g.Z)(O, G.jV.SelectionCover, N.U),
          (0, g.Z)(O, G.jV.SelectionHookingSentence, j.tW),
          (0, g.Z)(O, G.jV.TopCarouselBook, M.v),
          (0, g.Z)(O, G.jV.TopCarouselBanner, z.G),
          (0, g.Z)(O, G.jV.TopCarouselCover, A.e),
          O),
        ge = function (e) {
          var n = e.sectionFrame,
            t = me[n.layout] || c.Fragment;
          return (0, _.jsx)(t, {});
        },
        ve = (0, c.memo)(function (e) {
          var n = e.layout,
            t = e.sectionSignal,
            r = e.sectionIndex,
            i = e.itemsSignal,
            o = e.fallback,
            s = xe[n] || c.Fragment;
          return (0,
          _.jsx)(c.Suspense, { fallback: o, children: (0, _.jsx)(s, { sectionSignal: t, sectionIndex: r, itemsSignal: i, fallback: o }) });
        }),
        be = (0, c.memo)(function (e) {
          var n = e.sectionFrame,
            t = e.sectionIndex,
            r = (0, c.useMemo)(
              function () {
                return (0, _.jsx)(ge, { sectionFrame: n });
              },
              [n]
            ),
            i = (0, a.v9)(function (e) {
              return (0, I.Vl)(e, n.id);
            }),
            o = (0, a.v9)(function (e) {
              return (0, I.pu)(e, n.id);
            }),
            s = (0, c.useMemo)(
              function () {
                return q(q({}, n), {}, { contents: o, items: i.items });
              },
              [n, i.items, o]
            ),
            l = W(s),
            u = W(i);
          return (
            (function (e, n) {
              var t = (0, T.T)(),
                r = !!(0, F.x)(),
                i = (0, a.v9)(L.oA),
                o = Array.isArray(n.items) && 0 === n.items.length;
              (0, c.useEffect)(
                function () {
                  n.isFetching && n.defaultLoaderSpec
                    ? n.defaultLoaderSpec.needLogin
                      ? r
                        ? t(
                            (0, I.p9)({
                              reqParams: {
                                sectionId: e,
                                endPoint: n.defaultLoaderSpec.resourceUrl,
                              },
                            })
                          )
                        : i || r || t((0, I.Zu)({ sectionId: e }))
                      : t(
                          (0, I.p9)({
                            reqParams: {
                              sectionId: e,
                              endPoint: n.defaultLoaderSpec.resourceUrl,
                            },
                          })
                        )
                    : o && t((0, I.Zu)({ sectionId: e }));
                },
                [t, r, o, i, e, n.isFetching, n.defaultLoaderSpec]
              );
            })(n.id, i),
            (0, _.jsx)(U.wK, {
              section: s,
              children: (0, _.jsx)(ve, {
                layout: s.layout,
                sectionSignal: l,
                sectionIndex: t,
                itemsSignal: u,
                fallback: r,
              }),
            })
          );
        }),
        ye = t(17285),
        je = t(89218),
        ke = t.n(je),
        we = t(79030),
        Re = t(51813),
        Se = t(55903),
        Oe = t(3890),
        De = t(53881);
      var Pe = function (e) {
          return (0, i.css)(
            "background:",
            e.colors.bgBase,
            ";position:relative;",
            ""
          );
        },
        Ke = (0, i.css)(
          Oe.UD,
          ";padding-left:0;padding-right:0;",
          (0, R.K2)(R.RR.DesktopSmall, {
            name: "jtsdtn",
            styles: "padding-left:0;padding-right:0;margin-top:-10px",
          }),
          ";",
          ""
        ),
        Be = { name: "zjik7", styles: "display:flex" },
        _e = { name: "1lv1yo7", styles: "display:inline-flex" },
        Ze = { name: "mlsake", styles: "margin-left:0;margin-right:0" },
        Ce = function (e) {
          return (0, i.css)(
            "height:1px;background:",
            e.colors.grey100,
            ";border:none;margin:0 30px;margin-top:-1px;",
            (0, R.K2)(R.RR.DesktopSmall, Ze),
            ";",
            ""
          );
        },
        Ve = (0, i.css)(
          "padding:0 18px;padding-right:30px;",
          (0, R.K2)(R.RR.DesktopSmall, {
            name: "1qu8ll8",
            styles: "padding:0 8px",
          }),
          ";",
          ""
        ),
        Ee = {
          name: "1ecv9s2",
          styles:
            "padding:0 8px;padding-top:12px;padding-bottom:13px;font-size:16px;line-height:19px",
        },
        Ne = function (e) {
          return (0, i.css)(
            "display:inline-flex;justify-content:center;align-items:center;padding:0 12px;padding-top:14px;padding-bottom:17px;font-weight:700;font-size:24px;line-height:29px;letter-spacing:-0.01em;color:",
            e.colors.fillPrimary,
            ";transition:opacity 0.2s ease;",
            (0, R.K2)(R.RR.DesktopSmall, Ee),
            ";&:hover{opacity:0.6;}",
            ""
          );
        },
        ze = function (e) {
          return (0, i.css)(
            "color:",
            e.colors.blue,
            ";cursor:default;pointer-events:none;&:hover{opacity:1;}",
            ""
          );
        },
        Me = {
          name: "1whgcgm",
          styles: "display:inline-flex;align-items:center;margin-left:auto",
        },
        Ae = {
          name: "wjzj4i",
          styles:
            "padding-top:10px;padding-bottom:10px;padding-left:8px;padding-right:8px",
        },
        Ie = function (e) {
          return (0, i.css)(
            "display:inline-flex;align-items:center;color:",
            e.colors.fillPrimary,
            ";padding:12px 8px;padding-right:1px;",
            (0, R.K2)(R.RR.DesktopSmall, Ae),
            ";",
            ""
          );
        },
        Le = (0, i.css)(
          "font-size:26px;margin-right:6px;",
          (0, R.K2)(R.RR.DesktopSmall, {
            name: "1fvggzl",
            styles: "font-size:24px;margin-right:0",
          }),
          ";",
          ""
        ),
        Te = (0, i.css)(
          "font-size:14px;font-weight:600;line-height:17px;letter-spacing:-0.02em;",
          (0, R.K2)(R.RR.DesktopSmall, De.OT),
          ";",
          ""
        ),
        Fe = (0, i.css)(
          "padding:7px 28px;overflow:auto;",
          (0, R.K2)(R.RR.DesktopSmall, {
            name: "1y1ptu4",
            styles: "padding:12px;padding-bottom:10px;padding-top:8px",
          }),
          ";",
          ""
        ),
        Ge = {
          name: "1mzuiz5",
          styles: "height:30px;margin:0;font-size:14px;line-height:17px",
        },
        Ue = function (e) {
          return (0, i.css)(
            "display:inline-flex;justify-content:center;align-items:center;height:34px;border-radius:40px;margin:6px 2px;padding:0 10px;color:",
            e.colors.fillPrimary,
            ";font-size:16px;font-weight:500;line-height:19px;letter-spacing:-0.01em;transition:all 0.2s ease-in-out;",
            (0, R.K2)(R.RR.DesktopSmall, Ge),
            ";&:hover{opacity:0.4;}",
            ""
          );
        },
        He = function (e) {
          return (0, i.css)(
            "background:",
            e.colors.blue,
            ";color:",
            e.colors.white,
            ";font-weight:700;cursor:default;pointer-events:none;&:hover{opacity:1;}",
            ""
          );
        };
      function qe(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function We(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? qe(Object(t), !0).forEach(function (n) {
                (0, g.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : qe(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ye = function (e) {
          var n = e.items,
            t = e.itemCss,
            r = e.itemActiveCss,
            i = e.selectedId,
            o = e.target,
            s = e.className,
            c = e.children,
            a = (0, f.lO)();
          return (0, _.jsxs)("ul", {
            className: s,
            css: Be,
            children: [
              n.map(function (e) {
                return (0,
                _.jsx)("li", { css: _e, children: (0, _.jsx)(Re.l, { screenName: a.screenName, target: o, params: We(We({}, a.params), {}, { path: e.path, title: e.title }), children: (0, _.jsx)(ke(), { href: e.path, passHref: !0, children: (0, _.jsx)("a", { href: e.path, css: [t, e.id === i && r, "", ""], children: e.title }) }, e.id) }) }, "navigation-".concat(e.id));
              }),
              c,
            ],
          });
        },
        Qe = function (e) {
          var n = e.className,
            t = e.children,
            r = (0, a.v9)(Se.VQ),
            i = null !== r && void 0 !== r ? r : [],
            o = (0, ye.Z)(i, 4),
            s = o[1],
            c = o[2],
            l = o[3],
            u = null === s || void 0 === s ? void 0 : s.children,
            p = null === c || void 0 === c ? void 0 : c.children,
            d = (0, f.lO)();
          return (0, _.jsx)("div", {
            css: Pe,
            children: (0, _.jsxs)("div", {
              css: Ke,
              className: n,
              children: [
                u &&
                  c &&
                  (0, _.jsx)(Ye, {
                    css: Ve,
                    items: u,
                    itemCss: Ne,
                    itemActiveCss: ze,
                    selectedId: c.id,
                    target: "tab",
                    children: (0, _.jsx)(
                      "li",
                      {
                        css: Me,
                        children: (0, _.jsx)(Re.l, {
                          screenName: d.screenName,
                          target: "all_categories",
                          params: d.params,
                          children: (0, _.jsxs)("a", {
                            href: "/category/list",
                            css: Ie,
                            children: [
                              (0, _.jsx)(we.Bz, { css: Le }),
                              (0, _.jsx)("span", {
                                css: Te,
                                children:
                                  "\uc804\uccb4 \uce74\ud14c\uace0\ub9ac",
                              }),
                            ],
                          }),
                        }),
                      },
                      "all-categories"
                    ),
                  }),
                (0, _.jsx)("hr", { css: Ce }),
                p &&
                  l &&
                  (0, _.jsx)(Ye, {
                    css: Fe,
                    items: p,
                    itemCss: Ue,
                    itemActiveCss: He,
                    selectedId: l.id,
                    target: "subtab",
                  }),
                t,
              ],
            }),
          });
        },
        $e = t(86880),
        Xe = {
          "/webtoon/recommendation": "\ub9ac\ub514 \uc6f9\ud230",
          "/webtoon/romance": "\ub9ac\ub514 \ub85c\ub9e8\uc2a4 \uc6f9\ud230",
          "/webtoon/bl": "\ub9ac\ub514 BL \uc6f9\ud230",
          "/comics/ebook": "\ub9ac\ub514 \ub9cc\ud654",
          "/comics/bl": "\ub9ac\ub514 BL \ub9cc\ud654",
          "/comics/serial":
            "\ub9ac\ub514 \uc77c\ubcf8\ub9cc\ud654 \uc5f0\uc7ac",
          "/romance/webnovel":
            "\ub9ac\ub514 \ub85c\ub9e8\uc2a4 \uc6f9\uc18c\uc124",
          "/romance/ebook": "\ub9ac\ub514 \ub85c\ub9e8\uc2a4 \uc18c\uc124",
          "/romance-fantasy/webnovel":
            "\ub9ac\ub514 \ub85c\ud310 \uc6f9\uc18c\uc124",
          "/romance-fantasy/ebook": "\ub9ac\ub514 \ub85c\ud310 \uc18c\uc124",
          "/fantasy/webnovel":
            "\ub9ac\ub514 \ud310\ud0c0\uc9c0 \uc6f9\uc18c\uc124",
          "/fantasy/ebook": "\ub9ac\ub514 \ud310\ud0c0\uc9c0 \uc18c\uc124",
          "/bl/webnovel": "\ub9ac\ub514 BL \uc6f9\uc18c\uc124",
          "/bl/ebook": "\ub9ac\ub514 BL \uc18c\uc124",
          "/ebook/recommendation":
            "\ub9ac\ub514 \uc804\uc790\ucc45 \ucd94\ucc9c",
          "/ebook/event": "\ub9ac\ub514 \uc804\uc790\ucc45 \uae30\ud68d\uc804",
        },
        Je = {
          "/bl/webnovel":
            "\uc2e0\uc791\ubd80\ud130 \ubca0\uc2a4\ud2b8 \uc791\ud488\uae4c\uc9c0, BL \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/bl/ebook":
            "\uc2e0\uc791\ubd80\ud130 \ubca0\uc2a4\ud2b8 \uc791\ud488\uae4c\uc9c0, BL \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/romance/webnovel":
            "\ub098\uc758 \ubaa8\ub4e0 \ub85c\ub9dd\uc774 \ub2f4\uae34 \ub85c\ub9e8\uc2a4 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/romance/ebook":
            "\ub098\uc758 \ubaa8\ub4e0 \ub85c\ub9dd\uc774 \ub2f4\uae34 \ub85c\ub9e8\uc2a4 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/romance-fantasy/webnovel":
            "\ud604\uc2e4\ubcf4\ub2e4 \uc544\ub984\ub2e4\uc6b4 \ud310\ud0c0\uc9c0 \uc18d \ub85c\ub9e8\uc2a4. \ub85c\ud310 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/romance-fantasy/ebook":
            "\ud604\uc2e4\ubcf4\ub2e4 \uc544\ub984\ub2e4\uc6b4 \ud310\ud0c0\uc9c0 \uc18d \ub85c\ub9e8\uc2a4. \ub85c\ud310 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/fantasy/webnovel":
            "\uc815\ud1b5 \ud310\ud0c0\uc9c0\ubd80\ud130 \ube59\uc758\ubb3c\uae4c\uc9c0, \ud310\ud0c0\uc9c0 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
          "/fantasy/ebook":
            "\uc815\ud1b5 \ud310\ud0c0\uc9c0\ubd80\ud130 \ube59\uc758\ubb3c\uae4c\uc9c0, \ud310\ud0c0\uc9c0 \uc18c\uc124\ub3c4 \ub9ac\ub514\uc5d0\uc11c",
        },
        en = t(24812);
      var nn = {
          name: "gza11e",
          styles:
            "position:absolute;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(0px 0px 99.9% 99.9%);clip-path:inset(0px 0px 99.9% 99.9%);overflow:hidden;height:1px;width:1px;padding:0;border:0",
        },
        tn = function (e) {
          return (0, i.css)(
            "background:",
            e.colors.bgBase,
            ";overflow:hidden;position:relative;",
            ""
          );
        },
        rn = (0, i.css)(Oe.tD, ";position:relative;", ""),
        on = !0,
        sn = function (e) {
          var n = e.title,
            t = e.seed,
            o = e.mainHome,
            g = e.subHome,
            v = (0, a.v9)(I.F),
            b = (0, a.v9)(I.sp),
            y = (0, a.v9)(Se.Nv),
            j = (0, c.useMemo)(
              function () {
                return { screenName: "genrehome", params: { view_path: y } };
              },
              [y]
            ),
            k = (0, T.T)(),
            w = (0, a.v9)(Se.YG),
            S = (0, a.v9)(Se.re),
            O = (0, c.useMemo)(
              function () {
                return (y && Xe[y]) || "\ub9ac\ub514";
              },
              [y]
            );
          (0, c.useEffect)(
            function () {
              w &&
                (S
                  ? (0, $e.d)(l.Js, (0, en.IZ)(w), {
                      path: "/",
                      maxAge: 31536e3,
                    })
                  : k((0, Se.OH)()));
            },
            [k, w, S]
          );
          var D = (0, c.useMemo)(
              function () {
                return { seed: t };
              },
              [t]
            ),
            P = (0, r.a)(),
            K = n
              ? "".concat(n, " - \ub9ac\ub514")
              : (null === v || void 0 === v ? void 0 : v.title) ||
                "\ub9ac\ub514";
          "webtoon" === o &&
            "recommendation" === g &&
            (K =
              "\ub9ac\ub514 - \uc6f9\ud230 \uc6f9\uc18c\uc124 \uc804\uc790\ucc45");
          var B = (0, c.useRef)(null),
            Z = (0, c.useState)(!1),
            C = Z[0],
            V = Z[1];
          (0, c.useEffect)(function () {
            var e = B.current;
            if (e) {
              var n = new IntersectionObserver(
                function (e) {
                  var n = e.some(function (e) {
                    return e.isIntersecting;
                  });
                  V(n);
                },
                { rootMargin: "100px 0px" }
              );
              return (
                n.observe(e),
                function () {
                  return n.disconnect();
                }
              );
            }
          }, []);
          var E = (0, c.useState)(null),
            N = E[0],
            z = E[1];
          return (
            (0, c.useEffect)(
              function () {
                return (
                  z(
                    C
                      ? null
                      : (function (e) {
                          return (0, i.css)(
                            (0, R.K2)(
                              R.RR.DesktopSmall,
                              (0, i.css)(
                                "html,body,#__next{background-color:",
                                e.colors.black,
                                ";}",
                                ""
                              )
                            ),
                            ";",
                            ""
                          );
                        })(P)
                  ),
                  function () {
                    return z(null);
                  }
                );
              },
              [P, C]
            ),
            (0, _.jsx)(f.Mi, {
              value: j,
              children: (0, _.jsxs)(m.f, {
                value: D,
                children: [
                  (0, _.jsx)(i.Global, { styles: N }),
                  (0, _.jsx)(h.y, {
                    title: K,
                    disableTitleSuffix: !0,
                    canonicalPath: "/".concat(o, "/").concat(g),
                    description: Je["/".concat(o, "/").concat(g)],
                  }),
                  (0, _.jsx)(s(), {
                    children: (0, _.jsx)("meta", {
                      name: "theme-color",
                      content: P.colors.black,
                    }),
                  }),
                  (0, _.jsx)("h1", { css: nn, children: O }),
                  (0, _.jsx)(d.Xu, { showSearch: !0, showMyRIDITooltip: !0 }),
                  (0, _.jsx)(Qe, {}),
                  (0, _.jsx)("main", {
                    css: tn,
                    children: (0, _.jsx)(u.Zm, {
                      children: b.map(function (e, n) {
                        return (0,
                        _.jsx)(be, { sectionFrame: e, sectionIndex: n }, e.id);
                      }),
                    }),
                  }),
                  (0, _.jsx)("div", { ref: B }),
                  (0, _.jsx)(p.$, { css: rn }),
                  (0, _.jsx)(x.b, {}),
                ],
              }),
            })
          );
        };
    },
    10636: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[mainHome]/[subHome]",
        function () {
          return t(14472);
        },
      ]);
    },
    28405: function (e, n, t) {
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var n = function (n) {
      return e((e.s = n));
    };
    e.O(0, [9218, 8094, 3890, 5857, 1987, 1421, 9774, 2888, 179], function () {
      return n(93979), n(10636);
    });
    var t = e.O();
    _N_E = t;
  },
]);
