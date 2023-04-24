/* eslint-disable no-restricted-globals */
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5857],
  {
    51813: function (e, n, t) {
      t.d(n, {
        l: function () {
          return a;
        },
      });
      var r = t(89218),
        s = t.n(r),
        o = t(32735),
        i = t(30423),
        c = function (e, n, t, r) {
          var s = e.props;
          return (0, o.cloneElement)(e, {
            onClick: function (e) {
              return (function (e, n, t, r, s) {
                (0, i.vm)(n, t, r), s && s(e);
              })(e, n, t, r, s.onClick);
            },
          });
        },
        a = function (e) {
          var n = e.children,
            t = e.screenName,
            r = e.target,
            a = e.params;
          return n.type === s()
            ? (function (e, n, t, r) {
                var s = e,
                  c = s.props.children,
                  a = c.props;
                return (0, o.cloneElement)(
                  s,
                  void 0,
                  (0, o.cloneElement)(c, {
                    onClick: function (e) {
                      var s;
                      (0, i.vm)(n, t, r),
                        null === (s = a.onClick) ||
                          void 0 === s ||
                          s.call(a, e);
                    },
                  })
                );
              })(n, t, r, a || {})
            : c(n, t, r, a || {});
        };
    },
    55857: function (e, n, t) {
      t.d(n, {
        Xu: function () {
          return $n;
        },
      });
      var r = t(78756),
        s = t(80850),
        o = t.n(s),
        i = t(87196),
        c = t(35837),
        a = t(32735),
        l = t(68487),
        u = t(79030),
        p = t(31737),
        d = t(17285),
        f = t(62796),
        h = t(51813),
        x = t(24384),
        m = t(36962),
        g = t(53881),
        y = t(63820),
        b = t(47784),
        v = t(29763),
        j = t(49148),
        w = t(58266),
        k = t(22150),
        O = t(30423),
        S = t(77514),
        R = t(57836),
        _ = t(25575),
        D = t(60085),
        N = t(21515),
        E = t(37344),
        P = t(8355),
        C = t(75246),
        A = t(3890),
        z = t(81310);
      var K = (0, C.css)("justify-content:space-between;", z.e$, ";", ""),
        I = function (e) {
          return (0, C.css)(z.is(e), ";", "");
        },
        T = { name: "1eb9m24", styles: "padding-bottom:5px" },
        L = {
          name: "12vl3cq",
          styles: "text-align:left;padding:9px 16px;flex:1;min-width:0",
        },
        H = function (e) {
          return (0, C.css)(
            (0, A.Sf)(2, "22px"),
            ";color:",
            e.colors.fillPrimary,
            ";letter-spacing:-0.01em;",
            ""
          );
        },
        M = {
          name: "33gyg1",
          styles:
            "height:40px;width:48px;padding:12px 16px;outline:none;flex:none",
        },
        Z = function (e) {
          return (0, C.css)(
            "color:",
            e.colors.fillSecondary,
            ";font-size:16px;",
            ""
          );
        },
        F = function (e) {
          return (0, C.css)(
            "text-align:center;padding-top:40px;padding-bottom:60px;font-size:15px;line-height:18px;letter-spacing:-0.01em;color:",
            e.colors.grey500,
            ";",
            ""
          );
        },
        q = function (e) {
          return (0, C.css)(
            "display:flex;align-items:center;justify-content:flex-end;border-top:1px solid ",
            e.colors.grey200,
            ";padding:16px 0;margin:0 16px;color:",
            e.colors.fillSecondary,
            ";",
            ""
          );
        },
        U = {
          name: "1tmsrlr",
          styles:
            "font-size:13px;font-weight:500;line-height:16px;letter-spacing:-0.01em;outline:none",
        },
        B = t(38839);
      function Y(e, n) {
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
      function $(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Y(Object(t), !0).forEach(function (n) {
                (0, p.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var V = (0, f.Z)("li", { target: "etn3t2i0" })(
          function (e) {
            return (function (e) {
              return (0, C.css)(
                "display:flex;justify-content:space-between;align-items:center;",
                z.oX(e),
                ";",
                ""
              );
            })(e.theme);
          },
          ";",
          function (e) {
            var n = e.focused,
              t = e.theme;
            return (
              n &&
              (function (e) {
                return (0, C.css)(z.x3(e), ";", "");
              })(t)
            );
          },
          ";"
        ),
        G = function (e) {
          var n = e.className,
            t = e.history,
            r = e.goToSearchResult,
            s = e.focusedIndex,
            o = e.setFocusedIndex,
            i = t.history.length > 0,
            c = (0, x.lO)();
          return (0, B.jsxs)("div", {
            className: n,
            children: [
              (0, B.jsxs)("div", {
                css: K,
                children: [
                  (0, B.jsx)("span", {
                    css: I,
                    children: "\ucd5c\uadfc \uac80\uc0c9\uc5b4",
                  }),
                  i &&
                    t.historyEnabled &&
                    (0, B.jsx)(h.l, {
                      screenName: c.screenName,
                      target: "search_reset_recent_item",
                      params: c.params,
                      children: (0, B.jsx)("button", {
                        css: I,
                        type: "button",
                        onClick: function () {
                          return t.clearHistory();
                        },
                        children: "\uc804\uccb4\uc0ad\uc81c",
                      }),
                    }),
                ],
              }),
              t.historyEnabled && i
                ? (0, B.jsx)("ul", {
                    css: T,
                    children: t.history.map(function (e, n) {
                      return (0, B.jsxs)(
                        V,
                        {
                          focused: n === s,
                          onMouseEnter: function () {
                            return o(n);
                          },
                          onMouseLeave: function () {
                            return o(null);
                          },
                          children: [
                            (0, B.jsx)(h.l, {
                              screenName: c.screenName,
                              target: "search_recent_item",
                              params: $($({}, c.params), {}, { keyword: e }),
                              children: (0, B.jsx)("button", {
                                css: L,
                                type: "button",
                                onClick: function () {
                                  return r(e);
                                },
                                children: (0, B.jsx)("span", {
                                  css: H,
                                  children: e,
                                }),
                              }),
                            }),
                            (0, B.jsx)(h.l, {
                              screenName: c.screenName,
                              target: "search_delete_recent_item",
                              params: $($({}, c.params), {}, { keyword: e }),
                              children: (0, B.jsx)("button", {
                                css: M,
                                type: "button",
                                onClick: function () {
                                  return t.removeHistory(e);
                                },
                                "aria-label": '\uac80\uc0c9\uc5b4 "'.concat(
                                  e,
                                  '" \uc0ad\uc81c'
                                ),
                                children: (0, B.jsx)(u.Fz, { css: Z }),
                              }),
                            }),
                          ],
                        },
                        e
                      );
                    }),
                  })
                : (0, B.jsx)("div", {
                    css: F,
                    children: t.historyEnabled
                      ? "\ucd5c\uadfc \uac80\uc0c9\uc5b4 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."
                      : "\uac80\uc0c9\uc5b4 \uc800\uc7a5\uae30\ub2a5\uc774 \uaebc\uc838\uc788\uc2b5\ub2c8\ub2e4.",
                  }),
              (0, B.jsx)("div", {
                css: q,
                children: (0, B.jsx)(h.l, {
                  screenName: c.screenName,
                  target: "search_toggle_recent_history",
                  params: $(
                    $({}, c.params),
                    {},
                    { new_recent_history: !t.historyEnabled }
                  ),
                  children: (0, B.jsx)("button", {
                    css: U,
                    type: "button",
                    onClick: function () {
                      return t.setHistoryEnabled(!t.historyEnabled);
                    },
                    children: t.historyEnabled
                      ? "\uac80\uc0c9\uc5b4 \uc800\uc7a5 \ub044\uae30"
                      : "\uac80\uc0c9\uc5b4 \uc800\uc7a5 \ucf1c\uae30",
                  }),
                }),
              }),
            ],
          });
        },
        X = t(3487),
        W = t(3819),
        Q = t(12332),
        J = function (e) {
          var n = (0, Q.K)(
            e.filter(function (e) {
              return "translator" !== e.role;
            })
          ).map(function (e) {
            return e.name;
          });
          return 0 === n.length
            ? null
            : n.length > 2
            ? "".concat(n[0], " \uc678 ").concat(n.length - 1, "\uba85")
            : n.join(", ");
        };
      var ee = function (e) {
          return (0, C.css)(
            z.oX(e),
            ";display:flex;align-items:center;justify-content:space-between;padding:9px 16px;padding-bottom:15px;font-size:13px;font-weight:500;line-height:16px;color:",
            e.colors.fillSecondary,
            ";&:active,&:hover,&:focus-within{background-color:transparent;}",
            ""
          );
        },
        ne = function (e) {
          return (0, C.css)(z.e$, ";", z.is(e), ";", "");
        },
        te = { name: "ffhm6p", styles: "list-style-type:none" },
        re = { name: "1qblass", styles: "min-height:40px" },
        se = function (e) {
          return (0, C.css)(z.oX(e), ";", (0, m.K2)(m.RR.Large, re), ";", "");
        },
        oe = function (e) {
          return (0, C.css)(
            "display:flex;align-items:center;color:",
            e.colors.fillPrimary,
            ";height:100%;width:100%;padding:9px 16px;text-align:left;white-space:nowrap;&:focus{outline:none;}&:link,&:visited{color:",
            e.colors.fillPrimary,
            ";}b,strong{color:",
            e.colors.blue,
            ";font-weight:inherit;}",
            ""
          );
        },
        ie = function (e) {
          return (0, C.css)(
            "color:",
            e.colors.fillSecondary,
            ";margin-left:10px;padding-left:1px;font-weight:normal;font-size:13px;line-height:18px;letter-spacing:-0.01em;",
            ""
          );
        },
        ce = {
          name: "cq69ge",
          styles: "flex-wrap:wrap;padding:9px 11px;padding-bottom:6px",
        },
        ae = {
          name: "64jyi",
          styles:
            "display:inline-flex;align-items:center;margin:0 5px;margin-bottom:3px;min-width:0",
        },
        le = {
          name: "1cwfdr7",
          styles:
            "flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",
        },
        ue = (0, C.css)(
          "margin:0 5px;margin-bottom:3px;",
          (0, A.Sf)(2, "22px"),
          ";",
          ""
        ),
        pe = { name: "gplxek", styles: "font-size:13px;line-height:16px" },
        de = {
          name: "b8zvdv",
          styles:
            "display:inline-block;background:currentColor;width:2px;height:2px;border-radius:2px;transform:scale(0.75);line-height:16px;margin:7px 4px;vertical-align:text-top",
        },
        fe = {
          name: "3cg3um",
          styles: "flex:none;display:inline-flex;margin-left:4px",
        },
        he = {
          name: "lh0lf9",
          styles: "font-size:15px;color-scheme:only light",
        },
        xe = function (e) {
          return (0, C.css)(
            "display:block;height:1px;border:none;background:",
            e.colors.grey200,
            ";margin:0 16px;margin-top:4px;",
            ""
          );
        },
        me = {
          name: "1ypiljs",
          styles:
            "flex:none;overflow:hidden;text-overflow:ellipsis;max-width:100%",
        },
        ge = {
          name: "1mh536a",
          styles: "flex:0 1 auto;text-overflow:ellipsis;overflow:hidden",
        };
      function ye(e, n) {
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
      function be(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ye(Object(t), !0).forEach(function (n) {
                (0, p.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ye(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var ve = (0, f.Z)("li", { target: "e1o4ydru0" })(
          function (e) {
            var n = e.theme;
            return se(n);
          },
          ";",
          function (e) {
            var n = e.theme;
            return (
              e.focused &&
              (function (e) {
                return (0, C.css)(z.x3(e), ";", "");
              })(n)
            );
          },
          ";"
        ),
        je = function (e) {
          var n = e.author,
            t = e.keyword,
            r = e.href,
            s = e.focused,
            o = e.onClick,
            i = e.onHover,
            c = e.onLeave,
            a = (0, W.p)(n.highlight.name || ""),
            l = (0, x.lO)();
          return (0, B.jsx)(ve, {
            focused: s,
            children: (0, B.jsx)(h.l, {
              screenName: l.screenName,
              target: "search_instant_author_item",
              params: be(
                be({}, l.params),
                {},
                { item_id: n.id, item_name: n.name, keyword: t }
              ),
              children: (0, B.jsxs)("a", {
                href: r,
                css: oe,
                tabIndex: -1,
                onClick: o,
                onMouseEnter: i,
                onMouseLeave: c,
                children: [
                  n.highlight.name
                    ? (0, B.jsx)("span", be({ css: me }, a))
                    : (0, B.jsx)("span", { css: me, children: n.name }),
                  (0, B.jsxs)("span", {
                    css: [ie, ge, "", ""],
                    children: [
                      n.popular_book_title,
                      n.book_count > 1
                        ? " \uc678 ".concat(n.book_count - 1, "\uad8c")
                        : "",
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        we = function (e) {
          var n,
            t = e.book,
            r = e.keyword,
            s = e.href,
            o = e.focused,
            i = e.onClick,
            c = e.onHover,
            a = e.onLeave,
            l = (0, W.p)(t.highlight.web_title_title || ""),
            p = (0, x.lO)();
          return (0, B.jsx)(ve, {
            focused: o,
            children: (0, B.jsx)(h.l, {
              screenName: p.screenName,
              target: "search_instant_book_item",
              params: be(
                be({}, p.params),
                {},
                { item_id: t.b_id, item_name: t.web_title_title, keyword: r }
              ),
              children: (0, B.jsxs)("a", {
                href: s,
                css: [oe, ce, "", ""],
                tabIndex: -1,
                onClick: i,
                onMouseEnter: c,
                onMouseLeave: a,
                children: [
                  t.highlight.web_title_title
                    ? (0, B.jsx)("span", be({ css: ue }, l))
                    : (0, B.jsx)("span", {
                        css: ue,
                        children: t.web_title_title,
                      }),
                  (0, B.jsxs)("div", {
                    css: [ie, ae, "", ""],
                    children: [
                      (0, B.jsxs)("div", {
                        css: le,
                        children: [
                          (0, B.jsx)("span", {
                            css: pe,
                            children:
                              null !==
                                (n = t.authors_info && J(t.authors_info)) &&
                              void 0 !== n
                                ? n
                                : t.author,
                          }),
                          (0, B.jsx)("div", { css: de }),
                          (0, B.jsx)("span", {
                            css: pe,
                            children: t.publisher,
                          }),
                        ],
                      }),
                      t.age_limit > 18 &&
                        (0, B.jsx)("div", {
                          css: fe,
                          children: (0, B.jsx)(u.Y1, {
                            css: he,
                            "aria-label":
                              "\uc131\uc778 \uc804\uc6a9 \ub3c4\uc11c",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ke = function (e) {
          var n = e.className,
            t = e.keyword,
            r = e.focusedIndex,
            s = e.setFocusedIndex,
            o = e.isAdultExcluded,
            i = e.setIsAdultExcluded,
            c = e.getAuthorUrl,
            a = e.getBookUrl,
            u = e.goToInstantUrl,
            p = (0, l.v9)(v.yd).result,
            d = (0, x.lO)();
          if (!p) return (0, B.jsx)(B.Fragment, {});
          var f = p.book.books,
            h = p.author.authors,
            m = function (e) {
              return function () {
                return s(e);
              };
            },
            g = function () {
              return s(null);
            },
            y = function (e) {
              return function () {
                var n = e < h.length ? c(h[e]) : a(f[e - h.length], e);
                u(n);
              };
            };
          return (0, B.jsxs)("div", {
            className: n,
            children: [
              h.length > 0 &&
                (0, B.jsxs)(B.Fragment, {
                  children: [
                    (0, B.jsx)("span", { css: ne, children: "\uc791\uac00" }),
                    (0, B.jsx)("ul", {
                      css: te,
                      children: h.map(function (e, n) {
                        return (0,
                        B.jsx)(je, { author: e, href: c(e), keyword: t, onClick: y(n), onHover: m(n), onLeave: g, focused: n === r }, e.id);
                      }),
                    }),
                    f.length > 0 && (0, B.jsx)("hr", { css: xe }),
                  ],
                }),
              f.length > 0 &&
                (0, B.jsxs)(B.Fragment, {
                  children: [
                    (0, B.jsx)("span", { css: ne, children: "\uc791\ud488" }),
                    (0, B.jsx)("ul", {
                      css: te,
                      children: f.map(function (e, n) {
                        var s = h.length + n;
                        return (0,
                        B.jsx)(we, { book: e, href: a(e, s), keyword: t, onClick: y(s), onHover: m(s), onLeave: g, focused: s === r }, e.b_id);
                      }),
                    }),
                  ],
                }),
              (0, B.jsxs)("label", {
                css: ee,
                children: [
                  "\uc131\uc778 \uc81c\uc678",
                  (0, B.jsx)(X.r, {
                    checked: o,
                    onChange: function (e) {
                      (0, O.vm)(
                        d.screenName,
                        "search_toggle_adult",
                        be(be({}, d.params), {}, { new_adult_excluded: e })
                      ),
                        i(e);
                    },
                  }),
                ],
              }),
            ],
          });
        },
        Oe = t(95552);
      var Se = {
          name: "1o129hd",
          styles: "display:flex;align-items:flex-start",
        },
        Re = (0, C.css)(
          (0, m.K2)(
            m.RR.DesktopSmall,
            (0, C.css)(
              "position:fixed;left:0;top:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:",
              A.$y.LEVEL_OVERLAY,
              ";touch-action:none;",
              ""
            )
          ),
          ";",
          ""
        ),
        _e = (0, C.css)(
          "display:none;order:4;width:100%;height:53px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "zjik7",
            styles: "display:flex",
          }),
          ";",
          ""
        ),
        De = (0, C.css)(g.qY, ";min-width:0;flex:1;", ""),
        Ne = (0, C.css)(
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "mybplj",
            styles: "padding:0 16px;padding-top:9px;padding-bottom:5px",
          }),
          ";",
          ""
        ),
        Ee = { name: "1gbw87m", styles: "width:100%;padding:0 9px" },
        Pe = function (e) {
          return (0, C.css)(
            "background:",
            e.colors.grey200,
            ";border:1px solid rgba(0, 0, 0, 0.5%);border-radius:8px;display:flex;align-items:center;padding:0 11px;height:40px;",
            (0, m.K2)(m.RR.DesktopSmall, Ee),
            ";",
            ""
          );
        },
        Ce = function (e) {
          return (0, C.css)(
            "flex:1;min-width:0;height:100%;font-size:15px;line-height:18px;letter-spacing:-0.01em;color:",
            e.colors.fillPrimary,
            ";caret-color:",
            e.colors.blue,
            ";&::selection{background:",
            (0, Oe.m)(e.colors.blue, 0.08),
            ";}",
            ""
          );
        },
        Ae = { name: "16h13p7", styles: "font-size:20px;margin-right:10px" },
        ze = function (e) {
          return (0, C.css)(
            "flex:none;color:",
            e.colors.fillSecondary,
            ";font-size:16px;margin-right:12px;opacity:1;",
            (0, m.K2)(m.RR.DesktopSmall, Ae),
            ";",
            ""
          );
        },
        Ke = function (e) {
          return (0, C.css)(
            "flex:none;display:block;font-size:16px;margin:5px;color:",
            e.colors.fillSecondary,
            ";",
            ""
          );
        },
        Ie = (0, C.css)(
          "outline:none;margin-left:7px;margin-right:-5px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1gbnavi",
            styles: "margin-right:-3px",
          }),
          ";",
          ""
        ),
        Te = { name: "8uk93k", styles: "display:block;margin-left:16px" },
        Le = function (e) {
          return (0, C.css)(
            "display:none;flex:none;font-size:15px;line-height:18px;letter-spacing:-0.01em;color:",
            e.colors.fillPrimary,
            ";",
            (0, m.K2)(m.RR.DesktopSmall, Te),
            ";",
            ""
          );
        },
        He = {
          name: "upwg2q",
          styles:
            "position:static;width:100%;margin-top:0;padding-top:0;border-radius:0;border:none;box-shadow:none;opacity:0",
        },
        Me = (0, C.css)(
          (0, m.K2)(m.RR.DesktopSmall, { name: "3ix1vd", styles: "opacity:1" }),
          ";",
          ""
        ),
        Ze = (0, C.css)(
          "margin:-1px;",
          (0, m.K2)(m.RR.DesktopSmall, { name: "ti75j2", styles: "margin:0" }),
          ";",
          ""
        );
      function Fe(e, n) {
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
      function qe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Fe(Object(t), !0).forEach(function (n) {
                (0, p.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Fe(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ue = (0, f.Z)("form", { target: "erwx1ai2" })(
          Se,
          ";",
          function (e) {
            return e.focused && Re;
          },
          ";"
        ),
        Be = (0, f.Z)("div", { target: "erwx1ai1" })(
          Ne,
          ";",
          function (e) {
            var n = e.focused,
              t = e.theme;
            return (
              n &&
              (function (e) {
                return (0, C.css)(
                  (0, m.K2)(
                    m.RR.DesktopSmall,
                    (0, C.css)(
                      "display:flex;align-items:center;padding-top:5px;background-color:",
                      e.colors.bgBase,
                      ";",
                      ""
                    )
                  ),
                  ";",
                  ""
                );
              })(t)
            );
          },
          ";"
        ),
        Ye = (0, f.Z)("div", { target: "erwx1ai0" })(
          function (e) {
            return (function (e) {
              return (0, C.css)(
                "position:absolute;width:464px;margin-top:10px;padding-top:6px;border:1px solid ",
                e.colors.grey200,
                ";border-radius:8px;background:",
                e.colors.bgBase,
                ";overflow:hidden;opacity:1;transition:opacity 0.2s ease-in-out;box-shadow:5px 5px 10px rgba(0, 0, 0, 0.08);z-index:",
                A.$y.LEVEL_OVERLAY,
                ";",
                (0, m.K2)(m.RR.DesktopSmall, He),
                ";",
                ""
              );
            })(e.theme);
          },
          ";",
          function (e) {
            return e.focused && Me;
          },
          ";"
        ),
        $e = (0, a.forwardRef)(function (e, n) {
          var t,
            r = e.className,
            s = e.focusedCss,
            o = (0, x.lO)(),
            i = (0, c.useRouter)(),
            p = (0, l.v9)(b.$4),
            f = (0, a.useMemo)(
              function () {
                return (0, _.qs)(i.query);
              },
              [i.query]
            ),
            C = (0, a.useState)(
              null !== (t = f.keyword) && void 0 !== t ? t : ""
            ),
            A = C[0],
            z = C[1],
            K = (0, D.E)(),
            I = (0, d.Z)(K, 2),
            T = I[0],
            L = I[1],
            H = (0, a.useState)(!1),
            M = H[0],
            Z = H[1],
            F = (0, a.useState)(null),
            q = F[0],
            U = F[1],
            Y = p ? q : null,
            $ = (0, a.useCallback)(
              function (e) {
                p && U(e);
              },
              [p]
            ),
            V = (0, l.v9)(v.yd).result,
            X = V ? V.author.authors.length : 0,
            W = V ? V.book.books.length : 0,
            Q = (function () {
              var e = (0, a.useState)([]),
                n = e[0],
                t = e[1],
                r = (0, a.useState)(!1),
                s = r[0],
                o = r[1],
                i = (0, a.useCallback)(
                  function () {
                    var e = (0, P.wb)(P.dA.INSTANT_SEARCH_HISTORY_ENABLED);
                    return "boolean" === typeof e ? e : s;
                  },
                  [s]
                ),
                c = (0, a.useCallback)(
                  function () {
                    var e = (0, P.wb)(P.dA.INSTANT_SEARCH_HISTORY);
                    return Array.isArray(e) ? e : n;
                  },
                  [n]
                ),
                l = (0, a.useCallback)(function (e) {
                  o(e), (0, P.O2)(P.dA.INSTANT_SEARCH_HISTORY_ENABLED, e);
                }, []),
                u = (0, a.useCallback)(function (e) {
                  t(e), (0, P.O2)(P.dA.INSTANT_SEARCH_HISTORY, e);
                }, []),
                p = (0, a.useCallback)(
                  function (e) {
                    var n = i();
                    if ((l(n), n)) {
                      var t = c(),
                        r = Array.from(new Set([e].concat((0, N.Z)(t)))).slice(
                          0,
                          5
                        );
                      u(r);
                    }
                  },
                  [c, i, u, l]
                ),
                d = (0, a.useCallback)(
                  function (e) {
                    var n = c().filter(function (n) {
                      return n !== e;
                    });
                    u(n);
                  },
                  [c, u]
                ),
                f = (0, a.useCallback)(
                  function () {
                    return u([]);
                  },
                  [u]
                );
              return (
                (0, E.b)(function () {
                  t(c()), o(i());
                }),
                {
                  history: n,
                  addHistory: p,
                  removeHistory: d,
                  clearHistory: f,
                  historyEnabled: s,
                  setHistoryEnabled: l,
                }
              );
            })(),
            J = V ? X + W : Q.history.length,
            ee = (0, a.useCallback)(function (e) {
              window.location.href = e;
            }, []),
            ne = (0, l.v9)(y.p9),
            te = (0, a.useCallback)(
              function (e) {
                var n = e.trim();
                if (n) {
                  var t = (0, _.Hn)({ keyword: n, isAdultExcluded: T }),
                    r = "/search?".concat(t);
                  Q.addHistory(n),
                    document.activeElement instanceof HTMLElement &&
                      document.activeElement.blur(),
                    ne ? i.push(r) : (window.location.href = r);
                }
              },
              [i, T, Q, ne]
            ),
            re = (0, a.useMemo)(
              function () {
                return new URLSearchParams({ _s: "instant", _q: A }).toString();
              },
              [A]
            ),
            se = (0, a.useCallback)(
              function (e) {
                return "/author/".concat(e.id, "?").concat(re);
              },
              [re]
            ),
            oe = (0, a.useCallback)(
              function (e, n) {
                return (0, R.WF)("/books/".concat(e.b_id, "?").concat(re), {
                  sectionId: "search_instant",
                  sectionItemIdx: n,
                  sectionArg: A,
                });
              },
              [re, A]
            ),
            ie = (0, a.useRef)(null);
          (0, a.useImperativeHandle)(n, function () {
            return {
              focus: function () {
                var e;
                return null === (e = ie.current) || void 0 === e
                  ? void 0
                  : e.focus();
              },
            };
          });
          var ce = (0, j.T)(),
            ae = (0, a.useMemo)(
              function () {
                return (0, S.P)(function (e, n) {
                  ce(
                    (0, v.jB)({ reqParams: { keyword: e, isAdultExcluded: n } })
                  );
                }, 1e3);
              },
              [ce]
            );
          (0, a.useEffect)(
            function () {
              "" !== A.trim() ? ae(A, T) : ce((0, v.ZP)());
            },
            [ce, ae, A, T]
          );
          var le = (0, w.F)(m.RR.DesktopSmall);
          (0, a.useEffect)(
            function () {
              var e = document.body.style.overflow;
              return le && M
                ? ((document.body.style.overflow = "hidden"),
                  function () {
                    document.body.style.overflow = e;
                  })
                : function () {};
            },
            [le, M]
          );
          var ue =
            M &&
            ("" !== A && V && 0 !== J
              ? (0, B.jsx)(ke, {
                  css: Ze,
                  keyword: A,
                  getAuthorUrl: se,
                  getBookUrl: oe,
                  goToInstantUrl: ee,
                  focusedIndex: Y,
                  setFocusedIndex: $,
                  isAdultExcluded: T,
                  setIsAdultExcluded: L,
                })
              : (0, B.jsx)(G, {
                  css: Ze,
                  history: Q,
                  goToSearchResult: te,
                  focusedIndex: Y,
                  setFocusedIndex: $,
                }));
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(Ue, {
                className: r,
                css: M && s,
                focused: M,
                role: "search",
                onClick: function (e) {
                  e.target === e.currentTarget && Z(!1);
                },
                onFocus: function () {
                  (0, O.vm)(o.screenName, "search", o.params), Z(!0);
                },
                onBlur: function (e) {
                  var n = e.relatedTarget || document.activeElement;
                  e.currentTarget.contains(n) || Z(!1), $(null);
                },
                onSubmit: function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    (0, O.Nw)(
                      o.screenName,
                      "search",
                      qe(qe({}, o.params), {}, { keyword: A })
                    ),
                    te(A);
                },
                onMouseLeave: function () {
                  return $(null);
                },
                children: (0, B.jsxs)("div", {
                  css: De,
                  tabIndex: -1,
                  children: [
                    (0, B.jsxs)(Be, {
                      focused: M,
                      children: [
                        (0, B.jsxs)("label", {
                          css: Pe,
                          children: [
                            (0, B.jsx)(u.h3, { css: ze }),
                            (0, B.jsx)("span", {
                              css: g.OT,
                              children: "\uc778\uc2a4\ud134\ud2b8 \uac80\uc0c9",
                            }),
                            (0, B.jsx)("input", {
                              ref: ie,
                              css: Ce,
                              type: "text",
                              value: A,
                              onChange: function (e) {
                                var n = e.target.value;
                                return z(n);
                              },
                              onKeyDown: function (e) {
                                var n = null !== Y && void 0 !== Y ? Y : J;
                                switch (e.key) {
                                  case "ArrowDown":
                                  case "Down":
                                    n += 1;
                                    break;
                                  case "ArrowUp":
                                  case "Up":
                                    n -= 1;
                                    break;
                                  case "Enter":
                                    break;
                                  default:
                                    return void $(null);
                                }
                                e.preventDefault(),
                                  e.stopPropagation(),
                                  (n += J + 1),
                                  $((n %= J + 1) === J ? null : n);
                              },
                              onKeyUp: function (e) {
                                if ("Enter" === e.key) {
                                  if (
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    null != Y)
                                  ) {
                                    if ("" === A) {
                                      var n = Q.history[Y];
                                      return (
                                        (0, O.Nw)(
                                          o.screenName,
                                          "search_recent_item",
                                          qe(
                                            qe({}, o.params),
                                            {},
                                            { keyword: n }
                                          )
                                        ),
                                        void te(n)
                                      );
                                    }
                                    if (V && Y < X) {
                                      var t = V.author.authors[Y];
                                      return (
                                        (0, O.Nw)(
                                          o.screenName,
                                          "search_instant_author_item",
                                          qe(
                                            qe({}, o.params),
                                            {},
                                            {
                                              item_id: t.id,
                                              item_name: t.name,
                                              keyword: A,
                                            }
                                          )
                                        ),
                                        void ee(se(t))
                                      );
                                    }
                                    if (V && Y < J) {
                                      var r = V.book.books[Y - X];
                                      return (
                                        (0, O.Nw)(
                                          o.screenName,
                                          "search_instant_book_item",
                                          qe(
                                            qe({}, o.params),
                                            {},
                                            {
                                              item_id: r.b_id,
                                              item_name: r.web_title_title,
                                              keyword: A,
                                            }
                                          )
                                        ),
                                        void ee(oe(r, Y))
                                      );
                                    }
                                  }
                                  "" !== A &&
                                    ((0, O.Nw)(
                                      o.screenName,
                                      "search",
                                      qe(qe({}, o.params), {}, { keyword: A })
                                    ),
                                    te(A));
                                }
                              },
                              maxLength: k.a,
                            }),
                            M &&
                              "" !== A &&
                              (0, B.jsx)(h.l, {
                                screenName: o.screenName,
                                target: "search_reset_keyword",
                                params: qe(
                                  qe({}, o.params),
                                  {},
                                  { keyword: A }
                                ),
                                children: (0, B.jsx)("button", {
                                  type: "button",
                                  onClick: function () {
                                    var e;
                                    z(""),
                                      null === (e = ie.current) ||
                                        void 0 === e ||
                                        e.focus();
                                  },
                                  css: Ie,
                                  children: (0, B.jsx)(u.Hz, {
                                    css: Ke,
                                    "aria-label": "\uc9c0\uc6b0\uae30",
                                  }),
                                }),
                              }),
                          ],
                        }),
                        M &&
                          (0, B.jsx)(h.l, {
                            screenName: o.screenName,
                            target: "search_cancel",
                            params: o.params,
                            children: (0, B.jsx)("button", {
                              type: "button",
                              css: Le,
                              onClick: function () {
                                return Z(!1);
                              },
                              children: "\ucde8\uc18c",
                            }),
                          }),
                      ],
                    }),
                    ue && (0, B.jsx)(Ye, { focused: M, children: ue }),
                  ],
                }),
              }),
              M && (0, B.jsx)("div", { css: _e }),
            ],
          });
        }),
        Ve = t(112),
        Ge = t(55903),
        Xe = t(39591),
        We = t(22880),
        Qe = t(85988),
        Je = t(59610),
        en = t(9971);
      var nn = function (e) {
          return (0, C.css)(
            "width:100%;background:",
            e.colors.bgBase,
            ";position:relative;",
            ""
          );
        },
        tn = (0, C.css)(
          A.UD,
          ";position:relative;padding:0;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1hcx8jb",
            styles: "padding:0",
          }),
          ";",
          ""
        ),
        rn = (0, C.css)(
          "display:flex;justify-content:space-between;align-items:center;padding-top:16px;padding-left:22px;padding-right:18px;padding-bottom:16px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1qqtp3h",
            styles: "padding:6px 0;padding-top:9px;flex-wrap:wrap",
          }),
          ";",
          ""
        ),
        sn = (0, C.css)(
          "width:260px;margin-right:8px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "m7jwh",
            styles: "order:3;width:100%;max-width:100%;margin-right:0",
          }),
          ";",
          ""
        ),
        on = {
          name: "1l4r23c",
          styles: "display:flex;margin:0;margin-right:auto",
        },
        cn = { name: "1lv1yo7", styles: "display:inline-flex" },
        an = (0, C.css)(
          "display:flex;width:auto;height:40px;padding:8px 6px 9px 8px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1rn4lnr",
            styles: "height:42px;padding:13px 5px 14px 16px",
          }),
          ";",
          (0, m.K2)(346, {
            name: "d51y2j",
            styles: "height:32px;padding:10px 4px 10px 16px",
          }),
          ";",
          ""
        ),
        ln = (0, C.css)(
          "height:calc(40px - 8px - 9px);",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1pt7f00",
            styles: "height:calc(42px - 13px - 14px)",
          }),
          ";",
          (0, m.K2)(346, {
            name: "1fdtosi",
            styles: "height:calc(32px - 10px - 10px)",
          }),
          ";",
          ""
        ),
        un = (0, C.css)(
          "display:flex;width:auto;height:40px;padding:8px 8px 9px 0;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "ngc15l",
            styles: "height:42px;padding:13px 0 14px 0",
          }),
          ";",
          (0, m.K2)(346, {
            name: "f41s0o",
            styles: "height:32px;padding:10px 0 10px 0",
          }),
          ";",
          ""
        ),
        pn = (0, C.css)(
          "display:flex;align-items:center;position:relative;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "1oaeivz",
            styles: "margin-right:8px",
          }),
          ";",
          (0, m.K2)(346, { name: "158icaa", styles: "margin-left:4px" }),
          ";",
          ""
        ),
        dn = { name: "s5xdrg", styles: "display:flex;align-items:center" },
        fn = { name: "eivff4", styles: "display:none" },
        hn = function (e) {
          return (0, C.css)(e && (0, m.K2)(m.RR.DesktopSmall, fn), ";", "");
        },
        xn = { name: "zjik7", styles: "display:flex" },
        mn = { name: "b8p7v5", styles: "font-size:24px;margin:0" },
        gn = function (e) {
          return (0, C.css)(
            "display:inline-flex;font-size:28px;margin:0 6px;color:",
            e.colors.fillPrimary,
            ";",
            (0, m.K2)(m.RR.DesktopSmall, mn),
            ";",
            ""
          );
        },
        yn = (0, C.css)(
          "position:relative;display:inline-flex;justify-content:center;align-items:center;border:none;background:transparent;padding:6px;padding-top:7px;padding-bottom:5px;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "ex84zf",
            styles: "padding:9px 8px",
          }),
          ";",
          ""
        ),
        bn = (0, C.css)(yn, ";", ""),
        vn = { name: "1jthb9y", styles: "top:9px;right:8px" },
        jn = function (e) {
          return (0, C.css)(
            "position:absolute;top:7px;right:6px;pointer-events:none;background:",
            e.colors.red,
            ";color:",
            e.colors.white,
            ";",
            (0, m.K2)(m.RR.DesktopSmall, vn),
            ";",
            ""
          );
        },
        wn = function (e) {
          return (0, C.css)(
            "min-width:17px;display:inline-flex;justify-content:center;align-items:center;padding:3px 5px;border-radius:12px;transform:translate(50%, -50%);font-weight:600;font-size:10px;line-height:12px;letter-spacing:-0.01em;text-align:center;",
            jn(e),
            ";",
            ""
          );
        },
        kn = { name: "1y3uo64", styles: "width:3px;height:3px" },
        On = function (e) {
          return (0, C.css)(
            "display:inline-block;width:4px;height:4px;border-radius:2px;",
            jn(e),
            ";",
            (0, m.K2)(m.RR.DesktopSmall, kn),
            ";",
            ""
          );
        },
        Sn = (0, C.css)(
          "&,&>*{-webkit-tap-highlight-color:transparent;}",
          (0, m.tS)(m.RR.DesktopSmall, {
            name: "eivff4",
            styles: "display:none",
          }),
          ";",
          ""
        ),
        Rn = (0, C.css)(
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "78gdkf",
            styles: "position:fixed;top:0;left:0;opacity:0;pointer-events:none",
          }),
          ";",
          ""
        ),
        _n = (0, C.css)(
          "opacity:1!important;pointer-events:auto!important;",
          (0, m.K2)(m.RR.DesktopSmall, {
            name: "z1ewbl",
            styles: "position:fixed!important",
          }),
          ";",
          ""
        ),
        Dn = function (e) {
          return (0, C.css)(
            "display:inline-flex;border:1px solid ",
            e.colors.grey200,
            ";border-radius:15px;padding:0 13px;padding-top:7px;padding-bottom:6px;margin-left:8px;margin-right:8px;color:",
            e.colors.fillPrimary,
            ";font-weight:600;font-size:12px;line-height:14px;letter-spacing:-0.01em;text-align:center;&:link,&:visited{color:",
            e.colors.fillPrimary,
            ";}",
            ""
          );
        },
        Nn = { name: "eivff4", styles: "display:none" },
        En = function (e) {
          return (0, C.css)(
            "position:absolute;right:5px;bottom:-28px;z-index:",
            A.$y.LEVEL_TOOLTIP,
            ";padding-left:12px;padding-right:10px;height:26px;display:inline-flex;align-items:center;background:",
            e.colors.fillSecondary,
            ";border-radius:26px;opacity:1;transition:all 0.2s ease;&::after{content:'';display:inline-block;position:absolute;top:-8px;right:13px;width:0;height:0;border-style:solid;border-width:0 0 8px 8px;border-color:transparent transparent ",
            e.colors.fillSecondary,
            " transparent;}",
            (0, m.tS)(m.RR.DesktopSmall, Nn),
            ";",
            ""
          );
        },
        Pn = {
          name: "iqbisv",
          styles: "opacity:0;visibility:hidden;pointer-events:none",
        },
        Cn = function (e) {
          return (0, C.css)(
            "color:",
            e.colors.white,
            ";font-size:11px;font-weight:500;line-height:13px;letter-spacing:-0.01em;white-space:nowrap;",
            ""
          );
        },
        An = function (e) {
          return (0, C.css)(
            "color:",
            e.colors.white,
            ";font-size:12px;margin-left:4px;",
            ""
          );
        },
        zn = t(38540),
        Kn = t(78764),
        In = function (e, n, t) {
          var r;
          if (!n) return null;
          var s = (function (e, n) {
            var t;
            return n
              ? null !== (t = n[e]) && void 0 !== t
                ? t
                : n.light
              : null;
          })(e, t);
          return null === s ||
            void 0 === s ||
            null ===
              (r = s.find(function (e) {
                return e.title === n;
              })) ||
            void 0 === r
            ? void 0
            : r.image_url;
        },
        Tn = function () {
          var e = (0, en.lO)().screenName,
            n = (0, i.a)().colorScheme,
            t = (0, l.v9)(Ge.s$),
            r = (0, l.v9)(Ge.z0),
            s = (0, a.useMemo)(
              function () {
                var e = In(n, "\ub9ac\ub514", t);
                return e
                  ? (0, B.jsx)("div", {
                      css: an,
                      children: (0, B.jsx)("img", {
                        css: ln,
                        src: e,
                        alt: "\ub9ac\ub514",
                      }),
                    })
                  : (0, B.jsx)(u.P8, { css: an });
              },
              [t, n]
            ),
            o = (0, a.useMemo)(
              function () {
                var e = In(n, null === r || void 0 === r ? void 0 : r.title, t);
                return e
                  ? (0, B.jsx)("div", {
                      css: un,
                      children: (0, B.jsx)("img", {
                        css: ln,
                        src: e,
                        alt: null === r || void 0 === r ? void 0 : r.title,
                      }),
                    })
                  : (0, B.jsx)(B.Fragment, {});
              },
              [null === r || void 0 === r ? void 0 : r.title, t, n]
            );
          return (0, B.jsx)("div", {
            css: on,
            children: (0, B.jsx)(h.l, {
              screenName: e,
              target: "ridibooks",
              children: (0, B.jsxs)(zn.A, {
                css: cn,
                href: "/",
                children: [
                  (0, B.jsxs)("div", { css: on, children: [s, o] }),
                  (0, B.jsx)("span", {
                    css: g.OT,
                    children: "\ub9ac\ub514 \ud648\uc73c\ub85c \uc774\ub3d9",
                  }),
                ],
              }),
            }),
          });
        },
        Ln = function (e) {
          var n = e.className,
            t = e.children,
            r = e.path,
            s = e.label,
            o = e.target,
            i = e.addOn,
            c = (0, en.lO)();
          return (0, B.jsx)("div", {
            css: gn,
            className: n,
            children: (0, B.jsx)(h.l, {
              screenName: c.screenName,
              target: o,
              params: c.params,
              children: (0, B.jsxs)("a", {
                css: bn,
                href: r,
                children: [
                  (0, B.jsx)("span", { css: g.OT, children: s }),
                  t,
                  i,
                ],
              }),
            }),
          });
        },
        Hn = function () {
          var e = (0, Je.x)(),
            n = (0, c.useRouter)(),
            t = (0, l.v9)(Qe.Go),
            r = "/notification" === n.pathname;
          return (0, B.jsx)(Ln, {
            label: "\uc54c\ub9bc",
            path: "/notification",
            target: "notification",
            addOn:
              !!e &&
              !!t &&
              !r &&
              (0, B.jsx)("div", {
                css: On,
                children: (0, B.jsxs)("span", {
                  css: g.OT,
                  children: [t, "\uac1c \uc77d\uc9c0 \uc54a\uc74c"],
                }),
              }),
            children: (0, B.jsx)(u.mE, {}),
          });
        },
        Mn = function () {
          var e = (0, Je.x)(),
            n = (0, l.v9)(Ve.Ri);
          return (0, B.jsx)(Ln, {
            label: "\uce74\ud2b8",
            path: "/cart",
            target: "cart",
            addOn:
              !!e &&
              !!n &&
              (0, B.jsxs)("div", {
                css: wn,
                children: [
                  n,
                  (0, B.jsx)("span", {
                    css: g.OT,
                    children: "\uac1c\uc758 \uc544\uc774\ud15c",
                  }),
                ],
              }),
            children: (0, B.jsx)(u.qw, {}),
          });
        },
        Zn = function () {
          return (0, B.jsx)(Ln, {
            label: "\ub9c8\uc774\ub9ac\ub514",
            path: "/account/myridi",
            target: "myridi",
            children: (0, B.jsx)(u.CL, {}),
          });
        },
        Fn = function () {
          return (0, B.jsx)(Ln, {
            label: "\ub0b4 \uc11c\uc7ac",
            path: "https://library.ridibooks.com",
            target: "library",
            children: (0, B.jsx)(u.Bg, {}),
          });
        },
        qn = function (e) {
          var n = e.className,
            t = e.onClick,
            r = (0, en.lO)();
          return (0, B.jsx)("div", {
            className: n,
            css: gn,
            children: (0, B.jsx)(h.l, {
              screenName: r.screenName,
              target: "search",
              params: r.params,
              children: (0, B.jsxs)("button", {
                type: "button",
                css: yn,
                onClick: t,
                children: [
                  (0, B.jsx)("span", { css: g.OT, children: "\uac80\uc0c9" }),
                  (0, B.jsx)(u.h3, {}),
                ],
              }),
            }),
          });
        },
        Un = function () {
          var e = (0, c.useRouter)(),
            n = (0, en.lO)(),
            t = (0, a.useState)(""),
            r = t[0],
            s = t[1];
          return (
            (0, a.useEffect)(
              function () {
                var n = new URLSearchParams();
                n.append(
                  "return_url",
                  new URL(e.asPath, window.location.href).toString() ||
                    window.location.href
                ),
                  s("/account/login?".concat(n.toString()));
              },
              [e.asPath]
            ),
            (0, B.jsx)(h.l, {
              screenName: n.screenName,
              target: "login",
              params: n.params,
              children: (0, B.jsx)("a", {
                css: Dn,
                href: r,
                children: "\ub85c\uadf8\uc778",
              }),
            })
          );
        },
        Bn = function (e) {
          var n,
            t = e.children,
            r = (0, Je.x)(),
            s = (0, l.v9)(We.oA);
          return (0, B.jsxs)("div", {
            css: pn,
            children: [
              (0, B.jsx)("div", { css: [dn, hn(s), "", ""], children: t }),
              (0, B.jsxs)("div", {
                css: [dn, hn(s || !r), "", ""],
                children: [
                  (0, B.jsx)(Hn, {}),
                  (0, B.jsx)(Mn, {}),
                  (0, B.jsx)(Fn, {}),
                  (0, B.jsx)(Zn, {}),
                ],
              }),
              (0, B.jsx)("div", {
                css: [
                  dn,
                  ((n = !s && !r),
                  (0, C.css)(
                    "display:none;",
                    n && (0, m.K2)(m.RR.DesktopSmall, xn),
                    ";",
                    ""
                  )),
                  "",
                  "",
                ],
                children: (0, B.jsx)(Un, {}),
              }),
            ],
          });
        },
        Yn = function () {
          var e = (0, en.lO)(),
            n = (0, Je.x)(),
            t = (0, l.v9)(Xe.QE).events,
            r = (0, a.useState)(null),
            s = r[0],
            o = r[1];
          (0, a.useEffect)(function () {
            var e = (0, P.wb)(P.dA.CASHCHARGE_TOOLTIP_DISMISSED_AT);
            o(!!e && e + 864e6 > Date.now());
          }, []);
          var i =
            !1 === s &&
            (null === t || void 0 === t ? void 0 : t.double_point) &&
            n;
          return (0, B.jsx)(h.l, {
            screenName: e.screenName,
            target: "charge_cash_tooltip",
            params: e.params,
            children: (0, B.jsxs)("button", {
              css: [En, !i && Pn, "", ""],
              type: "button",
              onClick: function () {
                (0, P.O2)(P.dA.CASHCHARGE_TOOLTIP_DISMISSED_AT, Date.now()),
                  o(!0);
              },
              children: [
                (0, B.jsx)("span", {
                  css: Cn,
                  children:
                    "\uce90\uc2dc\ucda9\uc804\uc740 MY \uc548\uc5d0 \uc788\uc5b4\uc694!",
                }),
                (0, B.jsx)(u.Fz, { css: An, "aria-label": "\ub2eb\uae30" }),
              ],
            }),
          });
        },
        $n = function (e) {
          var n = e.className,
            t = e.showSearch,
            s = void 0 !== t && t,
            i = e.showMyRIDITooltip,
            u = void 0 !== i && i,
            p = (0, l.v9)(b.DN),
            d = (0, Je.x)(),
            f = (0, a.useRef)(null),
            h = (0, a.useCallback)(function () {
              f.current && f.current.focus();
            }, []),
            x = (0, j.T)(),
            m = !!d,
            g = (0, a.useCallback)(
              (0, r.Z)(
                o().mark(function e() {
                  var n;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = []).push(x((0, Xe.TC)({}))),
                            m &&
                              (n.push(x((0, Ve.Ob)({}))),
                              n.push(x((0, Qe.OO)({})))),
                            (e.next = 5),
                            Promise.all(n)
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [x, m]
            );
          return (
            (function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                t = (0, c.useRouter)(),
                r = (0, a.useMemo)(
                  function () {
                    return (0, S.P)(e);
                  },
                  [e]
                );
              (0, a.useEffect)(r, [].concat((0, N.Z)(n), [t.asPath, r]));
            })(g, [g]),
            p
              ? (0, B.jsx)(B.Fragment, {})
              : (0, B.jsxs)(B.Fragment, {
                  children: [
                    (0, B.jsx)(Kn.W, {}),
                    (0, B.jsx)("div", {
                      css: nn,
                      className: n,
                      children: (0, B.jsx)("header", {
                        css: tn,
                        children: (0, B.jsxs)("nav", {
                          css: rn,
                          children: [
                            (0, B.jsx)(Tn, {}),
                            (0, B.jsx)($e, {
                              css: [sn, !s && Rn, "", ""],
                              focusedCss: _n,
                              ref: f,
                            }),
                            (0, B.jsxs)(Bn, {
                              children: [
                                !s && (0, B.jsx)(qn, { css: Sn, onClick: h }),
                                u && (0, B.jsx)(Yn, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
          );
        };
    },
    38540: function (e, n, t) {
      t.d(n, {
        A: function () {
          return l;
        },
      });
      var r = t(89218),
        s = t.n(r),
        o = t(32735),
        i = t(68487),
        c = t(63820),
        a = t(38839),
        l = (0, o.forwardRef)(function (e, n) {
          var t = e.className,
            r = e.children,
            o = e.href,
            l = (0, i.v9)(c.p9),
            u = (0, a.jsx)("a", { className: t, href: o, ref: n, children: r });
          return l
            ? (0, a.jsx)(s(), { href: o, passHref: !0, children: u })
            : u;
        });
    },
    78764: function (e, n, t) {
      t.d(n, {
        W: function () {
          return Z;
        },
      });
      var r = t(31737),
        s = t(35837),
        o = t(32735),
        i = t(68487),
        c = t(79030),
        a = t(51813),
        l = t(36962),
        u = t(55903),
        p = t(39591),
        d = t(22880),
        f = t(49148),
        h = t(59610),
        x = t(58266),
        m = t(86880),
        g = t(24812),
        y = t(24384),
        b = t(38540),
        v = t(75246),
        j = t(3890);
      var w = { name: "bjn8wh", styles: "position:relative" },
        k = (0, v.css)(
          (0, l.K2)(l.RR.DesktopSmall, {
            name: "eivff4",
            styles: "display:none",
          }),
          ";",
          ""
        ),
        O = function (e) {
          return (0, v.css)(
            "background:",
            e.colors.bgBase,
            ";border-bottom:1px solid ",
            e.colors.grey200,
            ";",
            (0, l.K2)(
              l.RR.DesktopSmall,
              (0, v.css)(
                "position:fixed;top:0;left:0;width:100%;background:",
                e.colors.black,
                ";border-color:",
                e.colors.black,
                ";",
                ""
              )
            ),
            ";",
            ""
          );
        },
        S = (0, v.css)(j.UD, ";display:flex;padding:0 18px;", ""),
        R = { name: "36bnqj", styles: "display:flex;flex:1" },
        _ = (0, v.css)(
          "display:flex;flex:0 0 auto;",
          (0, l.K2)(l.RR.DesktopSmall, {
            name: "eivff4",
            styles: "display:none",
          }),
          ";",
          ""
        ),
        D = { name: "s6o6g3", styles: "flex:1;&::after{display:none;}" },
        N = function (e) {
          return (0, v.css)(
            "display:inline-flex;justify-content:center;align-items:center;&::after{content:'';display:inline-block;width:3px;height:3px;margin-top:3px;border-radius:3px;background:",
            e.colors.grey300,
            ";}&:last-of-type::after{display:none;}",
            (0, l.K2)(l.RR.DesktopSmall, D),
            ";",
            ""
          );
        },
        E = function (e) {
          return (0, v.css)(
            "display:inline-flex;padding:12px;padding-top:11px;padding-bottom:10px;font-weight:bold;font-size:14px;line-height:18px;text-align:center;letter-spacing:-0.01em;color:",
            e.colors.fillSecondary,
            ";transition:opacity 0.2s ease;&:hover{opacity:0.4;}&:link,&:visited{color:",
            e.colors.fillSecondary,
            ";}",
            (0, l.K2)(
              l.RR.DesktopSmall,
              (0, v.css)(
                "color:",
                e.colors.white,
                ";padding-top:12px;padding-bottom:10px;line-height:17px;padding-left:1px;padding-right:0;opacity:0.4;&:link,&:visited{color:",
                e.colors.white,
                ";}",
                ""
              )
            ),
            ";",
            ""
          );
        },
        P = function (e) {
          return (0, v.css)(
            "cursor:default;color:",
            e.colors.fillPrimary,
            ";pointer-events:none;&:link,&:visited{color:",
            e.colors.fillPrimary,
            ";}&:hover{opacity:1;}",
            (0, l.K2)(
              l.RR.DesktopSmall,
              (0, v.css)(
                "&:link,&:visited{color:",
                e.colors.white,
                ";}opacity:1;",
                ""
              )
            ),
            ";",
            ""
          );
        },
        C = {
          name: "r9xcey",
          styles: "font-size:18px;align-self:flex-end;margin-left:2px",
        },
        A = (0, v.css)(
          "display:inline-flex;align-items:center;",
          (0, l.tS)(l.RR.DesktopSmall, {
            name: "sy8u7e",
            styles:
              "width:11px;font-size:11px;justify-content:center;margin-left:1px",
          }),
          ";",
          (0, l.K2)(l.RR.DesktopSmall, {
            name: "1i8zpqt",
            styles: "font-size:9px;margin-left:1px",
          }),
          ";",
          ""
        ),
        z = (0, v.css)(
          (0, l.K2)(l.RR.DesktopSmall, {
            name: "1k18kha",
            styles: "height:40px",
          }),
          ";",
          ""
        ),
        K = function (e) {
          return (0, v.css)(
            (0, l.K2)(
              l.RR.DesktopSmall,
              (0, v.css)(
                "position:sticky;justify-content:space-between;display:none;top:0;width:100%;height:16px;margin-bottom:-16px;overflow:hidden;z-index:",
                j.$y.LEVEL_OVERLAY,
                ";&::before,&::after{content:'';display:inline-block;width:32px;height:32px;border-radius:50%;}&::before{box-shadow:-16px -16px 0 0 ",
                e.colors.black,
                ";}&::after{box-shadow:16px -16px 0 0 ",
                e.colors.black,
                ";}@supports (position: sticky){display:flex;}",
                ""
              )
            ),
            ";",
            ""
          );
        },
        I = { name: "je8g23", styles: "pointer-events:none" },
        T = t(38839);
      function L(e, n) {
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
      function H(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? L(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var M = function () {
          var e = (0, s.useRouter)(),
            n = (0, y.lO)(),
            t = (0, i.v9)(p.QE).events,
            r = (0, o.useState)({ login: "", signup: "" }),
            l = r[0],
            u = r[1];
          (0, o.useEffect)(
            function () {
              var n = new URLSearchParams();
              n.append(
                "return_url",
                new URL(e.asPath, window.location.href).toString() ||
                  window.location.href
              ),
                u({
                  login: "/account/login?".concat(n.toString()),
                  signup: "/account/signup?".concat(n.toString()),
                });
            },
            [e.asPath]
          );
          var f = (0, h.x)();
          return (0, i.v9)(d.oA)
            ? (0, T.jsx)(T.Fragment, {})
            : f
            ? (0, T.jsx)("ul", {
                css: _,
                children: (0, T.jsx)("li", {
                  css: N,
                  children: (0, T.jsx)(a.l, {
                    screenName: n.screenName,
                    target: "charge_cash",
                    params: n.params,
                    children: (0, T.jsxs)("a", {
                      href: "/order/checkout/cash",
                      css: E,
                      children: [
                        (0, T.jsx)("span", {
                          children: "\uce90\uc2dc\ucda9\uc804",
                        }),
                        (null === t || void 0 === t
                          ? void 0
                          : t.double_point) &&
                          (0, T.jsx)(c.K0, {
                            css: C,
                            "aria-label":
                              "\ub9ac\ub514 \uce90\uc2dc \ub354\ube14 \ud3ec\uc778\ud2b8 \ucda9\uc804",
                          }),
                      ],
                    }),
                  }),
                }),
              })
            : (0, T.jsxs)("ul", {
                css: _,
                children: [
                  (0, T.jsx)("li", {
                    css: N,
                    children: (0, T.jsx)(a.l, {
                      screenName: n.screenName,
                      target: "signup",
                      params: n.params,
                      children: (0, T.jsx)("a", {
                        href: l.signup,
                        css: E,
                        children: "\ud68c\uc6d0\uac00\uc785",
                      }),
                    }),
                  }),
                  (0, T.jsx)("li", {
                    css: N,
                    children: (0, T.jsx)(a.l, {
                      screenName: n.screenName,
                      target: "login",
                      params: n.params,
                      children: (0, T.jsx)("a", {
                        href: l.login,
                        css: E,
                        children: "\ub85c\uadf8\uc778",
                      }),
                    }),
                  }),
                ],
              });
        },
        Z = function () {
          var e = (0, f.T)(),
            n = (0, y.lO)(),
            t = (0, i.v9)(u.u4),
            r = (0, i.v9)(u.VQ),
            s = (0, i.v9)(u.YG);
          (0, o.useEffect)(
            function () {
              var n;
              s ||
                e(
                  (0, u.AF)(
                    null === (n = (0, m.e)(document.cookie)) || void 0 === n
                      ? void 0
                      : n.ridi_nav
                  )
                );
            },
            [e, s]
          );
          var p = (0, o.useMemo)(
              function () {
                return null === t || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return H(
                        H({}, e),
                        {},
                        {
                          isSelected:
                            null === r || void 0 === r
                              ? void 0
                              : r.some(function (n) {
                                  return n.id === e.id;
                                }),
                          leafNavigation: (0, g.oq)(e, s || new Set()),
                        }
                      );
                    });
              },
              [s, t, r]
            ),
            d = !r,
            h = (0, x.F)(l.RR.DesktopSmall);
          return (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsxs)("div", {
                css: [w, d && k, "", ""],
                children: [
                  (0, T.jsx)("div", {
                    css: O,
                    children: (0, T.jsxs)("div", {
                      css: S,
                      children: [
                        (0, T.jsxs)("ul", {
                          css: R,
                          children: [
                            null === p || void 0 === p
                              ? void 0
                              : p.map(function (e) {
                                  return (0,
                                  T.jsx)("li", { css: N, children: (0, T.jsx)(a.l, { screenName: n.screenName, target: "navigation_top", params: H(H({}, n.params), {}, { navigation_title: e.title, navigation_path: e.path }), children: (0, T.jsx)(b.A, { css: [E, e.isSelected && P, !s && I, "", ""], href: e.leafNavigation.path, children: e.title }) }) }, e.id);
                                }),
                            (0, T.jsx)("li", {
                              css: N,
                              children: (0, T.jsx)(a.l, {
                                screenName: n.screenName,
                                target: "navigation_top",
                                params: H(
                                  H({}, n.params),
                                  {},
                                  {
                                    navigation_title: "\uc140\ub809\ud2b8",
                                    navigation_path:
                                      "https://select.ridibooks.com",
                                  }
                                ),
                                children: (0, T.jsxs)("a", {
                                  href: "https://select.ridibooks.com",
                                  css: E,
                                  children: [
                                    "\uc140\ub809\ud2b8",
                                    (0, T.jsx)(c.CC, {
                                      css: A,
                                      size: 9,
                                      thick: h ? 1.4 : 1,
                                      direction: "right",
                                      "aria-label": "\uc774\ub3d9",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, T.jsx)(M, {}),
                      ],
                    }),
                  }),
                  (0, T.jsx)("div", { css: z }),
                ],
              }),
              !d && (0, T.jsx)("div", { css: K }),
            ],
          });
        };
    },
    9971: function (e, n, t) {
      t.d(n, {
        Mi: function () {
          return i;
        },
        lO: function () {
          return c;
        },
      });
      var r = t(32735),
        s = t(38839),
        o = (0, r.createContext)({ screenName: "", params: void 0 }),
        i = function (e) {
          var n = e.value,
            t = e.children;
          return (0, s.jsx)(o.Provider, { value: n, children: t });
        },
        c = function () {
          return (0, r.useContext)(o);
        };
    },
    24384: function (e, n, t) {
      t.d(n, {
        Mi: function () {
          return r.Mi;
        },
        lO: function () {
          return r.lO;
        },
      });
      var r = t(9971);
    },
    60085: function (e, n, t) {
      t.d(n, {
        E: function () {
          return i;
        },
      });
      var r = t(35837),
        s = t(32735),
        o = t(86880),
        i = function () {
          var e = (0, r.useRouter)(),
            n = (0, s.useState)(!0),
            t = n[0],
            i = n[1],
            c = function (e) {
              (0, o.d)("adult_exclude", e ? "y" : "n", {
                path: "/",
                sameSite: "lax",
              }),
                i(e);
            };
          return (
            (0, s.useEffect)(
              function () {
                if (e.query.adult_exclude) c("y" === e.query.adult_exclude);
                else {
                  var n = (0, o.e)(document.cookie);
                  i(
                    "y" ===
                      (null === n || void 0 === n ? void 0 : n.adult_exclude)
                  );
                }
              },
              [e.query.adult_exclude]
            ),
            [t, c]
          );
        };
    },
    81310: function (e, n, t) {
      t.d(n, {
        e$: function () {
          return a;
        },
        is: function () {
          return l;
        },
        oX: function () {
          return i;
        },
        x3: function () {
          return c;
        },
      });
      var r = t(75246),
        s = t(36962);
      var o = {
          name: "1x4zqvl",
          styles:
            "&:active,&:hover,&:focus-within{background-color:transparent;}",
        },
        i = function (e) {
          return (0, r.css)(
            "outline:none;cursor:pointer;font-size:15px;font-weight:500;line-height:22px;&,button{-webkit-tap-highlight-color:rgba(0, 0, 0, 0.05);}&:active,&:hover,&:focus-within{background-color:",
            e.colors.grey100,
            ";}",
            (0, s.K2)(s.RR.Large, o),
            ";",
            ""
          );
        },
        c = function (e) {
          return (0, r.css)("background-color:", e.colors.grey100, ";", "");
        },
        a = {
          name: "1uzn1mu",
          styles:
            "display:flex;padding:0 16px;padding-top:14px;padding-bottom:6px",
        },
        l = function (e) {
          return (0, r.css)(
            "font-size:13px;font-weight:500;line-height:16px;letter-spacing:-0.01em;color:",
            e.colors.fillSecondary,
            ";",
            ""
          );
        };
    },
    3487: function (e, n, t) {
      t.d(n, {
        r: function () {
          return m;
        },
      });
      var r = t(31737),
        s = t(17774),
        o = t(62796),
        i = t(75246);
      var c = {
          name: "im9lbz",
          styles:
            "display:inline-flex;width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;cursor:pointer",
        },
        a = t(38839),
        l = ["className", "onChange", "checked", "switchIcon"];
      function u(e, n) {
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
      function p(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? u(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var d = (0, o.Z)("span", { target: "ej4s9fr3" })(
          function (e) {
            return (function (e) {
              return (0, i.css)(
                "display:flex;width:50px;height:30px;border:2px solid ",
                e.colors.grey400,
                ";font-size:26px;border-radius:15px;cursor:pointer;transition:0.2s;background:",
                e.colors.grey400,
                ";position:relative;",
                ""
              );
            })(e.theme);
          },
          ";",
          function (e) {
            var n = e.checked,
              t = e.theme;
            return (
              n &&
              (function (e) {
                return (0, i.css)(
                  "background:",
                  e.colors.blue,
                  ";border-color:",
                  e.colors.blue,
                  ";",
                  ""
                );
              })(t)
            );
          },
          ";"
        ),
        f = (0, o.Z)("input", { target: "ej4s9fr2" })(d, ">input&{", c, ";}"),
        h = (0, o.Z)("span", { target: "ej4s9fr1" })(function (e) {
          var n = e.checked;
          return (function (e, n) {
            return (0,
            i.css)("display:flex;justify-content:center;align-items:center;min-width:1em;height:1em;border:none;border-radius:0.5em;background:white;box-shadow:0 2px 3px rgba(0, 0, 0, 0.25);pointer-events:none;transition:0.2s;color:", n ? e.colors.blue : e.colors.grey400, ";", "");
          })(e.theme, n);
        }, ";"),
        x = (0, o.Z)("span", { target: "ej4s9fr0" })(function (e) {
          return (function (e) {
            return (0,
            i.css)("flex-grow:", e ? 1 : 0, ";flex-shrink:1;flex-basis:0;transition:0.2s;", "");
          })(e.checked);
        }, ";"),
        m = function (e) {
          var n = e.className,
            t = e.onChange,
            r = e.checked,
            o = e.switchIcon,
            i = (0, s.Z)(e, l);
          return (0, a.jsxs)(d, {
            className: n,
            checked: r,
            children: [
              (0, a.jsx)(x, { checked: r }),
              (0, a.jsx)(h, { checked: r, children: o }),
              (0, a.jsx)(
                f,
                p(
                  p({}, i),
                  {},
                  {
                    checked: r,
                    onChange: function (e) {
                      null === t || void 0 === t || t(e.target.checked);
                    },
                    type: "checkbox",
                  }
                )
              ),
            ],
          });
        };
    },
    37344: function (e, n, t) {
      t.d(n, {
        b: function () {
          return s;
        },
      });
      var r = t(32735),
        s = function (e) {
          (0, r.useEffect)(e, []);
        };
    },
    58266: function (e, n, t) {
      t.d(n, {
        F: function () {
          return o;
        },
      });
      var r = t(32735),
        s = t(30581),
        o = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = (0, r.useState)(n),
            o = t[0],
            i = t[1];
          return (
            (0, s.L)(
              function () {
                var n = function () {
                  i(window.innerWidth <= e);
                };
                return (
                  window.addEventListener("resize", n),
                  n(),
                  function () {
                    window.removeEventListener("resize", n);
                  }
                );
              },
              [e]
            ),
            o
          );
        };
    },
    3819: function (e, n, t) {
      t.d(n, {
        p: function () {
          return o;
        },
      });
      var r = t(32735),
        s = t(26598),
        o = function (e) {
          return {
            dangerouslySetInnerHTML: {
              __html: (0, r.useMemo)(
                function () {
                  return (0, s.bD)(e);
                },
                [e]
              ),
            },
          };
        };
    },
    12332: function (e, n, t) {
      t.d(n, {
        K: function () {
          return l;
        },
      });
      var r = t(21515),
        s = t(31737);
      function o(e, n) {
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
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(t), !0).forEach(function (n) {
                (0, s.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var c = new Map([
          ["author", "\uc800\uc790"],
          ["story_writer", "\uae00"],
          ["translator", "\ubc88\uc5ed"],
          ["illustrator", "\uadf8\ub9bc"],
          ["original_author", "\uc6d0\uc791"],
          ["author_photo", "\uc0ac\uc9c4"],
          ["planner", "\uae30\ud68d"],
          ["bibliographical_introduction", "\ud574\uc81c"],
          ["compiler", "\uc5ee\uc74c"],
          ["commentator", "\ud574\uc124"],
          ["editor", "\ud3b8\uc9d1"],
          ["supervise", "\uac10\uc218"],
          ["performer", "\uc5f0\uc8fc\uc790"],
          ["original_illustrator", "\uc6d0\ud654"],
        ]),
        a = Array.from(c.keys()).reduce(function (e, n, t) {
          return i(i({}, e), {}, (0, s.Z)({}, n, t));
        }, {}),
        l = function (e) {
          return (0, r.Z)(e).sort(function (e, n) {
            return a[e.role] - a[n.role];
          });
        };
    },
    77514: function (e, n, t) {
      t.d(n, {
        D: function () {
          return r.debounce;
        },
        P: function () {
          return r.throttle;
        },
      });
      var r = t(14805);
    },
    95552: function (e, n, t) {
      t.d(n, {
        m: function () {
          return i;
        },
      });
      var r = t(17285),
        s = (0, t(90307).f)("RGBA"),
        o = function (e) {
          if (
            !(function (e) {
              return /^#[0-9a-fA-F]{3}$/.test(e) || /^#[0-9a-fA-F]{6}$/.test(e);
            })(e)
          )
            return (
              s(
                "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc0c9\uc0c1 \ud45c\uae30\ubc95\uc785\ub2c8\ub2e4: ".concat(
                  e
                )
              ),
              [0, 0, 0]
            );
          var n = e.slice(1);
          if (3 === n.length) {
            var t = n.split("");
            n = t.reduce(function (e, n) {
              return e + n + n;
            }, "");
          }
          var r = n.slice(0, 2),
            o = n.slice(2, 4),
            i = n.slice(4);
          return [parseInt(r, 16), parseInt(o, 16), parseInt(i, 16)];
        },
        i = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            t = o(e),
            s = (0, r.Z)(t, 3),
            i = s[0],
            c = s[1],
            a = s[2];
          return "rgba("
            .concat(i, ", ")
            .concat(c, ", ")
            .concat(a, ", ")
            .concat(n, ")");
        };
    },
  },
]);
