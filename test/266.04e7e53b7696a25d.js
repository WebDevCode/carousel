(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [266],
  {
    10266: function (e, n, r) {
      r.d(n, {
        i: function () {
          return x;
        },
      });
      var t = r(32735),
        u = r(62967),
        a = r(55206),
        c = r(30581),
        i = r(77303),
        s = r(30423),
        l = r(77514),
        o = r(75246),
        f = r(3890),
        d = r(36962);
      var h = { name: "bjn8wh", styles: "position:relative" },
        m = (0, o.css)(
          "display:flex;width:100%;overflow:hidden;",
          f.Ez,
          ";",
          (0, d.Rk)({ name: "1h8nup8", styles: "overflow:visible" }),
          ";",
          ""
        ),
        v = { name: "1u22emr", styles: "display:flex;transform:translate(0)" },
        p =
          ((0, d.tS)(d.RR.DesktopSmall, {
            name: "1qnycmw",
            styles: "transition:transform 0.03333333s linear",
          }),
          (0, o.css)(
            "position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;pointer-events:none;z-index:",
            f.$y.LEVEL_DROPDOWN - 1,
            ";",
            f.OZ,
            ' &[data-is-hydrated="false"] *{opacity:0;pointer-events:none;}',
            ""
          )),
        M = r(38839),
        b = function (e, n) {
          return {
            normalize: function (n) {
              return Math.max(-1, Math.min(n, e.current + 1));
            },
            diff: function (n, r, t) {
              var u,
                a,
                c = !("type" in t) || "touch" === t.type,
                i = ((u = r), (a = e.current), u <= 0 ? u : Math.max(0, u - a));
              return (
                r - n - i + (c ? Math.sqrt(Math.abs(i) / 12) * Math.sign(i) : 0)
              );
            },
            snap: function (r, t) {
              if ("snap" !== t.name) return r;
              var u = Math.floor(e.current),
                a = e.current - u,
                c = r;
              if (t.initial >= u && a > 0) {
                var i = n.current - 1 + a;
                c = t.initial + Math.max(-i, Math.min(t.offset, i));
              }
              return c <= u
                ? Math.max(0, Math.round(c))
                : c - u < 0.5 * a
                ? u
                : e.current;
            },
          };
        },
        x = function (e) {
          var n = e.arrowContainerCss,
            r = e.contentContainerCss,
            o = e.className,
            f = e.children,
            d = e.eventParams,
            x = t.Children.count(f),
            C = (0, t.useRef)(null),
            w = (0, t.useRef)(null),
            R = (0, t.useRef)(0),
            k = (0, t.useRef)(0),
            y = (0, t.useRef)(0),
            g = (0, t.useRef)(0),
            j = (0, t.useRef)(0),
            E = (0, t.useRef)(0),
            _ = (0, t.useRef)(0),
            N = (0, t.useRef)(null),
            L = (0, t.useRef)(null),
            z = (0, t.useRef)(null),
            D = (0, t.useCallback)(function () {
              var e = 1e-4,
                n = g.current <= e,
                r = g.current >= _.current - e;
              L.current &&
                z.current &&
                ((L.current.disabled = n), (z.current.disabled = r));
            }, []),
            I = (0, t.useMemo)(
              function () {
                return (0, l.P)(D, 200);
              },
              [D]
            );
          (0, c.L)(
            function () {
              return D();
            },
            [D]
          ),
            (0, c.L)(function () {
              N.current && N.current.setAttribute("data-is-hydrated", "true");
            }, []);
          var S = (0, t.useCallback)(
              function (e) {
                g.current = e;
                var n = Math.min(g.current * y.current, k.current),
                  r = "translate(".concat((-n).toFixed(2), "px)");
                w.current && (w.current.style.transform = r), I();
              },
              [I]
            ),
            B = (0, t.useRef)(!1),
            O = (0, t.useCallback)(
              function () {
                !B.current &&
                  d &&
                  ((0, s.p_)(d.screenName, "section", d.params),
                  (B.current = !0));
              },
              [d]
            ),
            P = (0, t.useCallback)(function () {}, []),
            q = (0, t.useCallback)(
              function (e) {
                O(), S(e);
              },
              [S, O]
            ),
            W = (0, t.useMemo)(function () {
              return b(_, E);
            }, []),
            A = (0, t.useCallback)(function (e) {
              var n = Math.abs(e);
              return g.current > _.current || g.current < 0
                ? { easing: i.hl, duration: 360 }
                : {
                    easing: n > 0 ? i.w2 : i.to,
                    duration: Math.max(360 - 120 * n, 240),
                  };
            }, []),
            F = (0, a.Qt)(
              { updateItem: q, updateIsSwiping: P },
              { itemWidth: y, maxSwipeItem: E },
              { animation: A, space: W }
            ),
            Q = F.swipeRef,
            V = F.updateIndex;
          (0, t.useEffect)(
            function () {
              var e = function () {
                var e = C.current,
                  n = w.current,
                  r = null === n || void 0 === n ? void 0 : n.firstElementChild;
                if (e && n && r) {
                  (R.current = e.getBoundingClientRect().width),
                    (k.current = n.getBoundingClientRect().width),
                    (y.current = r.getBoundingClientRect().width),
                    (j.current = Math.max(
                      1,
                      Math.floor(R.current / y.current)
                    )),
                    (E.current = j.current);
                  var t =
                    y.current < R.current
                      ? (R.current % y.current) / y.current
                      : 0;
                  (_.current = x - j.current - t),
                    (_.current =
                      1 === E.current ? Math.ceil(_.current) : _.current),
                    V(Math.max(0, Math.min(Math.round(g.current), _.current)));
                }
              };
              e();
              var n = (0, l.D)(e, 400);
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            },
            [x, V]
          );
          var Z = (0, t.useCallback)(
              function (e) {
                d &&
                  (0, s.vm)(
                    d.screenName,
                    -1 === e ? "scroll_left" : "scroll_right",
                    d.params
                  );
              },
              [d]
            ),
            $ = (0, t.useCallback)(
              function () {
                Z(-1), V(Math.max(Math.round(g.current) - j.current, 0));
              },
              [Z, V]
            ),
            G = (0, t.useCallback)(
              function () {
                Z(1), V(Math.min(Math.round(g.current) + j.current, _.current));
              },
              [Z, V]
            );
          return (0, M.jsxs)("div", {
            css: h,
            className: o,
            children: [
              (0, M.jsx)("div", {
                ref: C,
                css: m,
                children: (0, M.jsx)("div", {
                  ref: Q,
                  children: (0, M.jsx)("ul", {
                    ref: w,
                    css: [v, r, "", ""],
                    children: f,
                  }),
                }),
              }),
              (0, M.jsxs)("div", {
                css: [p, n, "", ""],
                ref: N,
                "data-is-hydrated": "false",
                children: [
                  (0, M.jsx)(u.b, {
                    direction: "left",
                    label: "\uc774\uc804",
                    onClick: $,
                    ref: L,
                  }),
                  (0, M.jsx)(u.b, {
                    direction: "right",
                    label: "\ub2e4\uc74c",
                    onClick: G,
                    ref: z,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
