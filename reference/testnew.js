import React from "react";
const test = {
  slider: function (e, t, n) {
    n.r(t);
    n.d(t, {
      TopCarouselCover: function () {
        return re;
      },
      TopCarouselCoverInner: function () {
        return ne;
      },
      TopCarouselCoverSkeleton: function () {
        return ie.e;
      },
      tests__TopCarouselCover: function () {
        return te;
      },
    });
    var r = n(31737),
      i = n(32735),
      a = n(98928),
      c = n(38802),
      s = n(93978),
      o = n(49842),
      u = n(98172),
      l = n(53736),
      f = n(55206),
      d = n(36962),
      p = n(42530),
      m = n(30581),
      h = n(37344),
      g = n(58266),
      x = n(31861),
      v = n(77303),
      y = n(77514),
      b = n(21882),
      R = n(75246),
      w = n(43604);
    var k = (0, R.iv)(w.sU, ";", w.AZ, ";", ""),
      C = (0, R.iv)(
        "position:relative;margin:0 ",
        -3,
        "px;max-width:",
        1116,
        "px;height:400px;",
        (0, d.K2)(
          d.RR.DesktopSmall,
          (0, R.iv)("margin-right:-", 92, "px;height:343px;", "")
        ),
        ";",
        ""
      ),
      _ = (0, R.iv)(
        "position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;margin:0 ",
        3,
        "px;",
        (0, d.K2)(d.RR.DesktopSmall, (0, R.iv)("right:", 89, "px;", "")),
        ";",
        ""
      ),
      S = {
        name: "11z2bg8",
        styles: "display:flex;width:100%;height:100%;overflow:hidden",
      },
      Z = n(51813),
      D = n(6030),
      I = n(89532),
      O = n(3890);
    var P = (0, R.iv)(
        "width:0;height:400px;[data-is-hydrated='false'] &{flex-grow:0;flex-basis:",
        46,
        "px;&[data-hydrate-expanded='true']{flex-grow:1;}&[data-hydrate-hidden='true']{flex-basis:0;}}",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "r67i2v",
          styles: "height:343px",
        }),
        ";",
        ""
      ),
      j = {
        name: "1a6zonz",
        styles:
          "position:relative;border-radius:6px;margin:0 3px;overflow:hidden;height:100%",
      },
      E = w.F6,
      M = (0, R.iv)(
        "width:100vw;padding:40px;padding-top:0;padding-right:",
        46,
        "px;",
        (0, d.K2)(
          d.RR.DesktopSmall,
          (0, R.iv)(
            "padding:16px;padding-top:0;padding-right:",
            22,
            "px;padding-bottom:22px;",
            ""
          )
        ),
        ";",
        ""
      ),
      N = (0, R.iv)(
        "width:",
        1018,
        "px;height:400px;",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "17fug0j",
          styles: "width:735px;height:343px",
        }),
        ";",
        ""
      ),
      z = { name: "1nv5fft", styles: "height:200px" },
      B = (0, R.iv)(
        "max-width:calc(85% + 40px);",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "ywyji6",
          styles: "max-width:calc(85% + 16px)",
        }),
        ";",
        ""
      ),
      F = (0, R.iv)(
        "flex-basis:calc(85% + 40px);",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "8a5eh6",
          styles: "flex-basis:calc(85% + 16px)",
        }),
        ";",
        ""
      ),
      K = {
        name: "f3a5h6",
        styles:
          "display:flex;justify-content:space-between;align-items:flex-end;align-self:stretch",
      },
      T = (0, R.iv)(
        B,
        ";",
        F,
        ";display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;",
        ""
      ),
      L = (0, R.iv)(
        B,
        ";font-size:24px;",
        (0, O.Sf)(2, "30px"),
        ";white-space:pre-line;",
        (0, d.tS)(
          d.RR.DesktopSmall,
          (0, R.iv)(
            "font-size:32px;",
            (0, O.Sf)(2, "40px"),
            ";white-space:pre-line;",
            ""
          )
        ),
        ";",
        ""
      ),
      U = (0, R.iv)(
        B,
        ";",
        (0, d.tS)(
          d.RR.DesktopSmall,
          (0, R.iv)(
            "font-size:16px;",
            (0, O.Sf)(2, "19px"),
            ";white-space:pre-line;",
            ""
          )
        ),
        ";",
        ""
      ),
      X = { name: "5bhc30", styles: "margin-bottom:8px" },
      q = n(38839),
      W = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemRef,
          r = e.screenName,
          i = void 0 === r ? "genre_home" : r,
          a = e.onItemClick,
          c = e.children;
        return (0,
        q.tZ)(Z.l, { screenName: i, target: "top_carousel_cover", params: t.params, children: (0, q.tZ)("a", { css: P, href: t.contents.landing_url, ref: n, tabIndex: t.initialFlags.isExpanded ? 0 : -1, onClick: a, "data-hydrate-expanded": t.initialFlags.isExpanded, "data-hydrate-hidden": t.initialFlags.isHidden, children: c }) });
      }),
      A = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemRef,
          r = e.onItemClick;
        return (0,
        q.tZ)(W, { item: t, itemRef: n, onItemClick: r, children: (0, q.tZ)("div", { css: [E, j, "", ""] }) });
      }),
      H = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemBackground,
          r = e.itemRef,
          i = e.onItemClick,
          s = e.contentRef,
          o = e.carouselLength,
          u = (0, c.NU)().screenName;
        return (0,
        q.tZ)(W, { screenName: u, item: t, itemRef: r, onItemClick: i, children: (0, q.BX)("div", { css: j, children: [(0, q.tZ)(D.k, { css: N, backgroundUrl: n, gradientColor: t.contents.gradation_color, gradientCss: z }), (0, q.tZ)(a.B, { ref: s, screenName: u, target: "top_carousel_cover", params: t.params, children: (0, q.BX)(I.f9, { css: M, children: [(0, q.tZ)(I.pg, { css: X, badges: t.contents.badges }), (0, q.tZ)(I.mI, { css: L, children: t.contents.title }), (0, q.BX)("div", { css: K, children: [(0, q.BX)("div", { css: T, children: [(0, q.tZ)(I.Wt, { css: U, children: t.contents.hooking_sentence }), (0, q.tZ)(I.hU, { copyrights: t.contents.copyrights })] }), (0, q.tZ)(I.eq, { index: t.index, length: o })] })] }) })] }) });
      });
    function Q(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function G(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Q(Object(n), !0).forEach(function (t) {
              (0, r.Z)(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Q(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var J = function (e, t, n) {
        return Math.min(n, Math.max(e, t));
      },
      V = function (e) {
        return { isHidden: e < 0 || e > 2, isExpanded: e >= 0 && e < 1 };
      },
      Y = function (e) {
        var t = 1 - Math.abs(J(-1, e, 1)),
          n = 46 * J(0, e, 1),
          r = 46 * (3 - J(2, e, 3));
        return { grow: t, basis: Math.min(n, r) };
      },
      $ = function (e) {
        return {
          offset: 32 * J(-1, e, 0),
          opacity: 1 - Math.abs(J(-1, e, 1)),
        };
      },
      ee = function () {
        var e = (0, React.useRef)(0);
        return (0, React.useCallback)(function (t, n) {
          var r = Date.now(),
            i = e.current;
          e.current = r;
          var a = r - i,
            c = Math.abs(t);
          return a < 50
            ? { easing: v.w2, duration: 180 }
            : "snap" === n.name || a < 400
            ? { easing: v.w2, duration: Math.max(180, 560 * (1 - 0.5 * c)) }
            : { easing: v.rz, duration: 1e3 };
        }, []);
      },
      te = {
        calculateFlags: V,
        calculateStyle: Y,
        calculateContentStyle: $,
        useTweenAnimation: ee,
      },
      ne = (0, React.memo)(function (e) {
        var t = e.itemsFilled,
          n = e.length,
          u = t.length,
          v = (0, React.useRef)(null),
          R = (0, p.S)(),
          w = R.itemRefs,
          Z = R.itemRef,
          D = (0, p.S)(),
          I = D.itemRefs,
          O = D.itemRef,
          P = (0, React.useRef)(d.RR.DesktopDefault),
          j = (0, React.useRef)(function (e) {}),
          E = (0, React.useCallback)(function (e) {
            return j.current(e);
          }, []),
          M = (0, React.useRef)(function () {}),
          N = (0, React.useCallback)(
            function (e) {
              M.current(),
                I.current.forEach(function (t, n) {
                  if (t) {
                    var r = n - e,
                      i = Y(r);
                    t.style.setProperty("flex-grow", "".concat(React.grow)),
                      t.style.setProperty(
                        "flex-basis",
                        "".concat(React.basis, "px")
                      );
                    var a = w.current[n];
                    if (a) {
                      var c = $(r);
                      a.style.setProperty(
                        "transform",
                        "translate(".concat(c.offset, "px, 0)")
                      ),
                        a.style.setProperty("opacity", "".concat(c.opacity));
                    }
                  }
                });
            },
            [w, I]
          ),
          z = (0, React.useCallback)(
            function () {
              w.current.forEach(function (e) {
                e && e.style.setProperty("width", "".concat(P.current, "px"));
              });
            },
            [w]
          );
        (0, m.L)(function () {
          return z();
        });
        var B = ee(),
          F = (0, React.useMemo)(
            function () {
              return (0, x.jq)(u - 3);
            },
            [u]
          ),
          K = (0, React.useRef)(1),
          T = (0, f.Qt)(
            { updateItem: N, updateIsSwiping: E },
            { itemWidth: P, maxSwipeItem: K },
            { animation: B, space: F }
          ),
          L = T.swipeRef,
          U = T.indexRef,
          X = T.updateIndex;
        (0, React.useEffect)(
          function () {
            var e = function () {
              v.current && (P.current = v.current.clientWidth - 92), z(), X();
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [N, z, X]
        );
        var W = (0, React.useRef)(!1),
          Q = (0, React.useRef)(!1),
          J = (0, s.y)(function () {
            return X(U.current + 1);
          }).onToggle,
          te = (0, React.useCallback)(
            function () {
              J(!W.current && !Q.current);
            },
            [J]
          );
        j.current = function (e) {
          (Q.current = e), te();
        };
        var ne = (0, React.useCallback)(
            function () {
              (W.current = !0), te();
            },
            [te]
          ),
          re = (0, React.useCallback)(
            function () {
              (W.current = !1), te();
            },
            [te]
          ),
          ie = (0, React.useTransition)()[1],
          ae = (0, React.useState)(!1),
          ce = ae[0],
          se = ae[1];
        (0, h.b)(function () {
          ie(function () {
            return se(!0);
          });
        });
        var oe = (0, React.useMemo)(
            function () {
              return (0, b.l)([v, L]);
            },
            [L]
          ),
          ue = (0, React.useMemo)(
            function () {
              return (0, y.P)(
                function (e) {
                  return X(e);
                },
                200,
                !0
              );
            },
            [X]
          ),
          le = function (e) {
            return function (t) {
              U.current === e || (t.preventDefault(), ue(e));
            };
          };
        M.current = (0, React.useMemo)(
          function () {
            return (0, y.D)(function () {
              I.current.forEach(function (e, t) {
                e && (e.tabIndex = t === U.current ? 0 : -1);
              });
            }, 500);
          },
          [I, U]
        );
        var fe = (0, c.NU)(),
          de = (0, React.useMemo)(
            function () {
              return t
                .map(function (e, t) {
                  return G(
                    G({}, e),
                    {},
                    { initialPosition: (0, l.L)(t, 0, u) }
                  );
                })
                .map(function (e) {
                  return G(
                    G({}, e),
                    {},
                    { initialFlags: V(e.initialPosition) }
                  );
                })
                .map(function (e) {
                  return G(
                    G({}, e),
                    {},
                    {
                      params: G(
                        G({}, fe.params),
                        {},
                        {
                          item_id: e.id,
                          item_title: e.contents.title,
                          item_index: e.index,
                          item_landing_url: e.contents.landing_url,
                        }
                      ),
                    }
                  );
                });
            },
            [t, u, fe.params]
          ),
          pe = (0, g.F)(d.RR.DesktopSmall, !1),
          me = (0, React.useMemo)(
            function () {
              return t.reduce(function (e, t) {
                return G(
                  G({}, e),
                  {},
                  (0, r.Z)(
                    {},
                    t.id,
                    pe
                      ? t.contents.mobile_main_image_url
                      : t.contents.pc_main_image_url
                  )
                );
              }, {});
            },
            [t, pe]
          ),
          he = fe.screenName;
        return (0, q.tZ)(a.B, {
          screenName: he,
          target: "section",
          params: fe.params,
          children: (0, q.tZ)("section", {
            css: k,
            children: (0, q.BX)("div", {
              css: C,
              ref: oe,
              onBlur: ne,
              onFocus: re,
              "data-is-hydrated": ce,
              children: [
                (0, q.tZ)("div", {
                  css: S,
                  children: de.map(function (e, t) {
                    return ce || t < 3
                      ? (0, q.tZ)(
                          H,
                          {
                            item: e,
                            itemBackground: me[e.id],
                            itemRef: O(t),
                            onItemClick: le(t),
                            carouselLength: n,
                            contentRef: Z(t),
                          },
                          e.uniqueId
                        )
                      : (0, q.tZ)(
                          A,
                          { item: e, itemRef: O(t), onItemClick: le(t) },
                          e.uniqueId
                        );
                  }),
                }),
                (0, q.tZ)("div", {
                  css: _,
                  children: (0, q.tZ)(o.U, {
                    onClickPrev: function () {
                      return X(U.current - 1);
                    },
                    onClickNext: function () {
                      return X(U.current + 1);
                    },
                  }),
                }),
              ],
            }),
          }),
        });
      }),
      re = (0, React.memo)(function (e) {
        var t = e.section;
        return (0, q.tZ)(u.z, {
          items: t.items,
          redundancy: 3,
          children: function (e) {
            return (0, q.tZ)(ne, G({}, e));
          },
        });
      }),
      ie = n(16945);
  },
};

export default test;
