/* eslint-disable no-restricted-globals */
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1421],
  {
    82628: function (e, t, n) {
      n.d(t, {
        _: function () {
          return d;
        },
        K: function () {
          return p;
        },
      });
      var r = n(62796),
        o = n(32735),
        i = n(86432),
        a = n(37108),
        s = n(75246);
      var c,
        u = {
          name: "1b4920d",
          styles: "position:absolute;top:0;left:0;width:100%;height:100%",
        },
        l = n(38839),
        d = (0, r.Z)("div", { target: "eiojbu80" })(u, ""),
        f =
          ((c = d),
          (0, s.css)(
            "position:relative;display:block;&:hover ",
            c,
            "{background:linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);}",
            ""
          )),
        p = (0, i.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = e.index,
              i = void 0 === r ? 0 : r,
              s = (0, o.useContext)(a.U).components,
              c = s.BookAdultIndicator,
              u = s.BookBadgeRenderer,
              d = s.BookCoverDimmer,
              p = s.BookFreebook,
              m = s.BookLink,
              v = s.BookSetbook,
              g = s.BookOriginal,
              h = s.BookPurchaseStatus,
              x = s.BookThumbnail,
              b = s.BookAdultBadge;
            return (0,
            l.jsxs)(m, { css: f, className: t, index: i, children: [(0, l.jsx)(x, {}), (0, l.jsx)(c, {}), (0, l.jsx)(p, {}), (0, l.jsx)(v, {}), (0, l.jsx)(h, {}), (0, l.jsx)(d, {}), (0, l.jsx)(g, {}), (0, l.jsx)(u, {}), (0, l.jsx)(b, {}), n] });
          };
        });
    },
    58971: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
      });
      var r = (0, n(32735).createContext)({});
    },
    37108: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
      });
      var r = (0, n(32735).createContext)({});
    },
    76152: function (e, t, n) {
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var r = n(32735),
        o = n(86432),
        i = n(37108),
        a = n(21829),
        s = n(38839),
        c = (0, o.cd)(
          function (e) {
            var t = e.useSkeleton;
            return function (e) {
              var n = e.className,
                o = e.children,
                c = e.index,
                u = (0, r.useContext)(i.U).components,
                l = u.BookRenderer,
                d = u.BookSkeleton,
                f = (0, r.useState)(!1),
                p = f[0],
                m = f[1],
                v = (0, r.useCallback)(function () {
                  m(!0);
                }, []),
                g = (0, a.W)(v);
              return p
                ? (0, s.jsx)(l, { index: c, children: o })
                : t
                ? (0, s.jsx)(d, { elementRef: g })
                : (0, s.jsx)("div", { className: n, ref: g });
            };
          },
          { useSkeleton: !1 }
        );
    },
    21829: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        Z: function () {
          return a;
        },
      });
      var r = n(32735),
        o = n(92931),
        i = (0, r.createContext)(null),
        a = (0, o.M)(i, { rootMargin: "75px" }),
        s = (0, o.N)(i);
    },
    37687: function (e, t, n) {
      n.d(t, {
        V: function () {
          return h;
        },
        q: function () {
          return x;
        },
      });
      var r = n(31737),
        o = n(32735),
        i = n(51813),
        a = n(3890),
        s = n(12332),
        c = n(86432),
        u = n(58971),
        l = n(37108),
        d = n(69505),
        f = n(75246),
        p = function (e) {
          return (0, f.css)("font-size:", e, "px;", "");
        },
        m = n(38839);
      function v(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = (0, c.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              s = e.className,
              c = e.author,
              d = (0, o.useContext)(u.F),
              f = (0, o.useContext)(l.U);
            if (!c.name) return (0, m.jsx)(m.Fragment, {});
            if (null === c.link)
              return (0, m.jsx)("span", { className: s, children: c.name });
            r = c.link
              ? c.link
              : c.id
              ? "/author/".concat(c.id)
              : "/search?q=".concat(encodeURIComponent(c.name));
            var p = (0, m.jsx)("a", {
              className: s,
              href: r,
              css: a.VV,
              children: c.name,
            });
            if (
              !f.trackingData ||
              (null !== (t = d.trackingOptions) &&
                void 0 !== t &&
                t.disableTrackEvent)
            )
              return p;
            var v = g(
              g(
                { book_id: d.bookId, author_name: c.name, author_id: c.id },
                f.trackingData.params
              ),
              null === (n = d.trackingOptions) || void 0 === n
                ? void 0
                : n.extraParams
            );
            return (0,
            m.jsx)(i.l, { screenName: f.trackingData.screenName, target: "author", params: v, children: p });
          };
        }),
        x = (0, c.cd)(
          function (e) {
            var t = e.textSize,
              n = e.clipBreakPoint,
              r = e.clipCount,
              i = e.excludeTranslators,
              a = (0, c.fn)(p, t);
            return function (e) {
              var t,
                c,
                f = e.className,
                p = (0, o.useContext)(l.U).components,
                v = p.BookAuthorItem,
                h = p.BookDefaultMetadataItem,
                x =
                  null === (t = (0, o.useContext)(u.F).metadata) || void 0 === t
                    ? void 0
                    : t.authors;
              i &&
                (x =
                  null === (c = x) || void 0 === c
                    ? void 0
                    : c.filter(function (e) {
                        return (
                          "translator" !==
                          (null === e || void 0 === e ? void 0 : e.role)
                        );
                      }));
              if (!x || !Array.isArray(x) || 0 === x.length)
                return (0, m.jsx)(m.Fragment, {});
              var b = (0, s.K)(
                x.map(function (e) {
                  var t;
                  return g(
                    g({}, e),
                    {},
                    {
                      role:
                        null !==
                          (t = null === e || void 0 === e ? void 0 : e.role) &&
                        void 0 !== t
                          ? t
                          : "author",
                    }
                  );
                })
              ).map(function (e, t) {
                return (0,
                m.jsx)(v, { author: e }, e.id || "author-".concat(t));
              });
              return (0, m.jsx)(h, {
                className: f,
                css: a,
                children:
                  null !== r && b.length > n
                    ? (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, d.P)(b.slice(0, r), ", "),
                          " \uc678 ".concat(b.length - r, "\uba85"),
                        ],
                      })
                    : (0, d.P)(b.slice(0, n), ", "),
              });
            };
          },
          {
            textSize: [{ value: 12 }],
            clipBreakPoint: 2,
            clipCount: 1,
            excludeTranslators: !0,
          }
        );
    },
    78632: function (e, t, n) {
      n.d(t, {
        cY: function () {
          return B;
        },
        BG: function () {
          return S;
        },
        SQ: function () {
          return O;
        },
        q4: function () {
          return j;
        },
        D: function () {
          return y;
        },
        Nb: function () {
          return w;
        },
      });
      var r = n(32735),
        o = n(18094),
        i = n(53881),
        a = n(82056),
        s = n(86432),
        c = n(58971),
        u = n(37108),
        l = n(75246),
        d = n(29097);
      var f = { name: "6sug3x", styles: "margin-top:3px" },
        p = function (e) {
          return (0, l.css)("font-size:", e, "px;", "");
        },
        m = (0, l.css)(
          "padding:0.3em 0;text-align:left;color:",
          d.NA,
          ";font-weight:normal;",
          ""
        ),
        v = (0, l.css)("color:", d.Fn, ";font-weight:bold;", ""),
        g = (0, l.css)(
          "color:",
          d.re,
          ";font-weight:bold;margin-left:4px;",
          ""
        ),
        h = { name: "uon2nh", styles: "width:0.6em;height:0.8em" },
        x = (0, l.css)("color:", d.NA, ";", ""),
        b = { name: "nvudtm", styles: "padding-left:5px" },
        k = n(38839),
        j = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.percentage,
              r = e.children;
            return (0,
            k.jsxs)("span", { css: g, className: t, children: ["(", "".concat(Math.ceil(n), "%"), (0, k.jsx)(o.FL, { "aria-label": "\ud560\uc778", preserveAspectRatio: "xMidYMid slice", css: h }), ")", r] });
          };
        }),
        y = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children;
            return (0, k.jsx)("span", { css: v, className: t, children: n });
          };
        }),
        O = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children;
            return (0, k.jsx)("span", { css: b, className: t, children: n });
          };
        }),
        B = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.originalPrice;
            return (0,
            k.jsx)("del", { css: x, className: t, children: "".concat((0, a.u)(n), "\uc6d0") });
          };
        }),
        w = (0, s.cd)(
          function (e) {
            var t = e.showAdditionalInfo,
              n = e.showDiscountInfo,
              o = e.textSize,
              i = [m, (0, s.fn)(p, o)];
            return function (e) {
              var o = e.className,
                s = e.children,
                c = e.label,
                l = e.priceData,
                d = e.totalPriceData,
                f = (0, r.useContext)(u.U).components,
                p = f.BookPriceDiscountItem,
                m = f.BookPriceInfoItem,
                v = f.BookPriceAdditionalInfoItem,
                g = f.BookOriginalPriceInfoItem;
              if (
                !l ||
                "number" !==
                  typeof (null === l || void 0 === l
                    ? void 0
                    : l.minSellingPrice) ||
                !Number.isFinite(
                  null === l || void 0 === l ? void 0 : l.minSellingPrice
                ) ||
                (null === l || void 0 === l ? void 0 : l.minSellingPrice) < 0
              )
                return (0, k.jsx)(k.Fragment, {});
              var h = (0, k.jsx)(m, {
                  children:
                    0 === l.minSellingPrice
                      ? "\ubb34\ub8cc"
                      : "".concat((0, a.u)(l.minSellingPrice), "\uc6d0"),
                }),
                x = (0, k.jsx)(k.Fragment, {});
              if (d)
                if (0 !== d.discountPrice && t) {
                  var b,
                    j =
                      void 0 !== d.originalPrice &&
                      (0, k.jsx)(g, { originalPrice: d.originalPrice }),
                    y =
                      null !== (b = d.discountPercentage) && void 0 !== b
                        ? b
                        : 0,
                    O =
                      n &&
                      !!y &&
                      y > 0 &&
                      y <= 100 &&
                      (0, k.jsx)(p, { percentage: y, children: j });
                  x = (0, k.jsxs)(v, {
                    children: [
                      "\uc804\uad8c ".concat(c, " "),
                      d.discountPrice &&
                        (0, k.jsxs)(m, {
                          children: [(0, a.u)(d.discountPrice), "\uc6d0"],
                        }),
                      O,
                    ],
                  });
                } else
                  0 === d.discountPrice &&
                    t &&
                    (x = (0, k.jsxs)(v, {
                      children: [
                        "\uc804\uad8c ".concat(c, " "),
                        (0, k.jsx)(m, { children: "\ubb34\ub8cc" }),
                      ],
                    }));
              else {
                var B,
                  w =
                    null !== (B = l.discountPercentage) && void 0 !== B ? B : 0,
                  S = !!w && w >= 10 && w <= 100,
                  P =
                    void 0 !== l.originalPrice &&
                    (0, k.jsx)(g, { originalPrice: l.originalPrice });
                x = n && S && (0, k.jsx)(p, { percentage: w, children: P });
              }
              return (0, k.jsxs)("p", {
                css: i,
                className: o,
                children: ["".concat(c, " "), h, x, s],
              });
            };
          },
          {
            showAdditionalInfo: !1,
            showDiscountInfo: !1,
            textSize: [{ value: 12 }],
          }
        ),
        S = (0, s.cd)(function () {
          return function (e) {
            var t,
              n,
              o = e.className,
              a = (0, r.useContext)(c.F),
              s = (0, r.useContext)(u.U).components.BookPriceItem,
              l =
                null === (t = a.metadata) ||
                void 0 === t ||
                null === (n = t.extra) ||
                void 0 === n
                  ? void 0
                  : n.price;
            return l &&
              (l.rental ||
                l.setbookTotalRental ||
                l.purchase ||
                l.setbookTotalPurchase)
              ? (0, k.jsxs)("div", {
                  css: f,
                  className: o,
                  children: [
                    (0, k.jsx)("span", {
                      css: i.OT,
                      children: "\uc0c1\uc138 \uac00\uaca9",
                    }),
                    (0, k.jsx)(s, {
                      label: "\ub300\uc5ec",
                      priceData: null === l || void 0 === l ? void 0 : l.rental,
                      totalPriceData:
                        null === l || void 0 === l
                          ? void 0
                          : l.setbookTotalRental,
                    }),
                    (0, k.jsx)(s, {
                      label: "\uc18c\uc7a5",
                      priceData:
                        null === l || void 0 === l ? void 0 : l.purchase,
                      totalPriceData:
                        null === l || void 0 === l
                          ? void 0
                          : l.setbookTotalPurchase,
                    }),
                  ],
                })
              : (0, k.jsx)(k.Fragment, {});
          };
        });
    },
    47919: function (e, t, n) {
      n.d(t, {
        r: function () {
          return g;
        },
        V: function () {
          return v;
        },
      });
      var r = n(32735),
        o = n(82056),
        i = n(86432),
        a = n(58971),
        s = n(37108),
        c = n(75246),
        u = n(29097),
        l = n(75541);
      var d = (0, c.css)(
          "position:relative;top:-1px;display:inline-flex;justify-content:center;align-items:center;height:16px;padding:3px 4px;margin-left:4px;border-radius:3px;background:",
          u.Sn,
          ";color:",
          l.s.white,
          ";font-size:10px;font-weight:bold;",
          ""
        ),
        f = { name: "1pjpfnb", styles: "padding-top:1px" },
        p = { name: "11ohmhr", styles: "line-height:1em;display:inline-block" },
        m = n(38839),
        v = (0, i.cd)(function () {
          return function (e) {
            var t,
              n,
              o,
              i = e.className;
            return null !== (t = (0, r.useContext)(a.F).metadata) &&
              void 0 !== t &&
              null !== (n = t.extra) &&
              void 0 !== n &&
              null !== (o = n.series) &&
              void 0 !== o &&
              o.completion
              ? (0, m.jsx)("span", {
                  className: i,
                  css: d,
                  children: "\uc644\uacb0",
                })
              : (0, m.jsx)(m.Fragment, {});
          };
        }),
        g = (0, i.cd)(function () {
          return function (e) {
            var t,
              n,
              i,
              c = e.className,
              u = (0, r.useContext)(s.U).components,
              l = u.BookDefaultMetadataItem,
              d = u.BookSeriesCompletion,
              v =
                null === (t = (0, r.useContext)(a.F).metadata) ||
                void 0 === t ||
                null === (n = t.extra) ||
                void 0 === n
                  ? void 0
                  : n.series;
            if (!v) return (0, m.jsx)(m.Fragment, {});
            if (
              "number" !== typeof v.total ||
              !Number.isInteger(v.total) ||
              v.total < 1
            )
              return (0, m.jsx)(m.Fragment, {});
            var g = null !== (i = v.unit) && void 0 !== i ? i : "\ud654";
            return (0,
            m.jsxs)(l, { className: c, children: [(0, m.jsxs)("span", { css: p, children: ["\ucd1d ", (0, m.jsx)("span", { css: f, children: (0, o.u)(v.total) }), g] }), (0, m.jsx)(d, {})] });
          };
        });
    },
    8456: function (e, t, n) {
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var r = (0, n(86432).cd)(function () {
        return function (e) {
          return null;
        };
      });
    },
    28943: function (e, t, n) {
      n.d(t, {
        X: function () {
          return l;
        },
        z: function () {
          return g;
        },
      });
      var r = n(32735),
        o = n(86432),
        i = n(37108),
        a = n(75246);
      var s = function (e) {
          return (0, a.css)(
            "display:flex;flex-direction:column;align-items:flex-start;width:",
            e,
            "px;",
            ""
          );
        },
        c = {
          name: "1ahjaby",
          styles: "width:100%;margin-top:6px;&>*{margin-top:3px;}",
        },
        u = n(38839),
        l = (0, o.cd)(
          function (e) {
            var t = e.size,
              n = e.fixedHeight,
              l = (0, o.fn)(s, t),
              d = (0, o.fn)(
                (function (e) {
                  return function (t) {
                    return (0, a.css)(
                      e &&
                        (0, a.css)(
                          "display:flex;align-items:flex-end;height:",
                          Math.floor(1.618 * t - 10),
                          "px;",
                          ""
                        ),
                      ";",
                      ""
                    );
                  };
                })(n),
                t
              );
            return (0, r.memo)(
              (0, r.forwardRef)(function (e, t) {
                var n = e.className,
                  o = e.children,
                  a = e.index,
                  s = (0, r.useContext)(i.U).components,
                  f = s.BookCoverRenderer,
                  p = s.BookMetadataRenderer,
                  m = s.BookViewTracker;
                return (0,
                u.jsx)(m, { children: (0, u.jsxs)("div", { css: l, className: n, ref: t, children: [(0, u.jsx)("div", { css: d, children: (0, u.jsx)(f, { index: a }) }), (0, u.jsxs)("div", { css: c, children: [(0, u.jsx)(p, { index: a }), o] })] }) });
              })
            );
          },
          { size: [{ value: 80 }], fixedHeight: !0 }
        ),
        d = n(31737),
        f = n(98928),
        p = n(58971);
      function m(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, d.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = (0, o.cd)(function () {
        return function (e) {
          var t = e.children,
            n = (0, r.useContext)(p.F),
            o = n.bookId,
            a = n.trackingOptions,
            s = (0, r.useContext)(i.U).trackingData;
          return !(0, r.isValidElement)(t) ||
            !s ||
            (null !== a && void 0 !== a && a.disableTrackEvent)
            ? (0, u.jsx)(u.Fragment, { children: t })
            : (0, u.jsx)(f.B, {
                screenName: s.screenName,
                target: "book",
                params: v(
                  v({ book_id: o }, s.params),
                  null === a || void 0 === a ? void 0 : a.extraParams
                ),
                children: t,
              });
        };
      }, {});
    },
    36567: function (e, t, n) {
      n.d(t, {
        B: function () {
          return l;
        },
        F: function () {
          return d;
        },
      });
      var r = n(32735),
        o = n(37108),
        i = n(36962),
        a = n(86432);
      var s = { name: "p8by59", styles: "margin-top:3px;&>*{margin-top:4px;}" },
        c = n(38839),
        u = [
          { orBelow: i.RR.Large, value: !0 },
          { greaterThan: i.RR.Large, value: !1 },
        ],
        l = (0, a.cd)(function () {
          return function (e) {
            var t = e.children,
              n = e.className,
              i = (0, r.useContext)(o.U).components,
              a = i.BookAuthors,
              s = i.BookGenre,
              l = i.BookMetadataItemGroup,
              d = i.BookPublisher,
              f = i.BookSeries,
              p = i.BookStarRate,
              m = i.BookTranslators;
            return (0,
            c.jsxs)(l, { className: n, collapse: u, children: [(0, c.jsx)(a, {}), (0, c.jsx)(p, {}), (0, c.jsx)(m, {}), (0, c.jsxs)(l, { children: [(0, c.jsx)(d, {}), (0, c.jsx)(s, {})] }), (0, c.jsx)(f, {}), t] });
          };
        }),
        d = (0, a.cd)(function () {
          return function (e) {
            var t = e.children,
              n = e.index,
              i = void 0 === n ? 0 : n,
              a = (0, r.useContext)(o.U).components,
              u = a.BookDescription,
              l = a.BookMetadataItems,
              d = a.BookPrice,
              f = a.BookTitle;
            return (0,
            c.jsxs)(c.Fragment, { children: [(0, c.jsx)(f, { index: i }), (0, c.jsx)(l, { css: s }), (0, c.jsx)(u, { index: i }), (0, c.jsx)(d, {}), t] });
          };
        });
    },
    68436: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
      });
      var r = n(32735),
        o = n(37108),
        i = n(86432);
      var a = { name: "zjik7", styles: "display:flex" },
        s = {
          name: "133i3bx",
          styles: "padding:20px 15px;padding-right:0;flex:0 0 auto",
        },
        c = { name: "15jryr", styles: "padding:20px 15px;flex:1" },
        u = n(38839),
        l = (0, i.cd)(function () {
          return (0, r.forwardRef)(function (e, t) {
            var n = e.className,
              i = e.children,
              l = e.index,
              d = void 0 === l ? 0 : l,
              f = (0, r.useContext)(o.U).components,
              p = f.BookCoverRenderer,
              m = f.BookMetadataRenderer,
              v = f.BookViewTracker;
            return (0,
            u.jsx)(v, { children: (0, u.jsxs)("div", { css: a, className: n, ref: t, children: [(0, u.jsx)("div", { css: s, children: (0, u.jsx)(p, { index: d }) }), (0, u.jsxs)("div", { css: c, children: [(0, u.jsx)(m, { index: d }), i] })] }) });
          });
        });
    },
    95072: function (e, t, n) {
      n.d(t, {
        Jj: function () {
          return R;
        },
        Yo: function () {
          return A;
        },
        RS: function () {
          return F;
        },
        RT: function () {
          return z;
        },
        TR: function () {
          return D;
        },
      });
      var r = n(31737),
        o = n(87196),
        i = n(32735),
        a = n(58971),
        s = n(21829),
        c = n(8456),
        u = n(23340),
        l = n(17529),
        d = n(59610),
        f = n(86432),
        p = n(75246),
        m = n(95552);
      var v = function (e) {
          return (0, p.css)(
            "position:relative;&::after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;border:1px solid ",
            (0, m.m)(e.colors.fillPrimary, 0.06),
            ";border-radius:4px;}",
            ""
          );
        },
        g = function (e) {
          return (0, p.css)(
            "position:relative;overflow:hidden;&::after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:",
            e.colors.dimThumb,
            ";}",
            ""
          );
        },
        h = function (e) {
          return (0, p.css)(
            "display:block;opacity:",
            +e,
            ";@supports (object-fit: contain){object-fit:contain;}",
            ""
          );
        },
        x = { name: "q4dzvk", styles: "width:100%;height:auto" },
        b = { name: "1d3w5wq", styles: "width:100%" },
        k = { name: "reg8qv", styles: "width:auto;height:100%" },
        j = { name: "13udsys", styles: "height:100%" },
        y = { name: "w1atjl", styles: "width:100%;height:100%" },
        O = {
          name: "nbgo5o",
          styles:
            "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);@supports (object-fit: cover){object-fit:cover;width:100%;height:100%;}",
        },
        B = function (e) {
          return (0, p.css)(
            "padding-bottom:",
            (e.height / e.width) * 100,
            "%;",
            ""
          );
        },
        w = {
          name: "1f3gcam",
          styles:
            "position:absolute;top:50%;left:0;transform:translate(0, -50%)",
        },
        S = n(38839);
      function P(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var D = 1.343373494,
        z = 1.5324675325,
        R = (0, f.cd)(
          function (e) {
            var t = e.type,
              n = e.cropMode,
              r = e.lazyload,
              c = (0, l.gE)(
                t.map(function (e) {
                  return N(N({}, e), {}, { value: e.value.width });
                })
              ),
              m = (0, f.Fm)(t);
            return function (e) {
              var P,
                N,
                R,
                A = e.className,
                F = e.children,
                C = (0, i.useContext)(a.F),
                I = (0, i.useState)(null),
                M = I[0],
                T = I[1],
                U = (0, i.useState)("crop" === n),
                E = U[0],
                K = U[1],
                H = (0, i.useState)("none" !== n),
                Z = H[0],
                q = H[1],
                L = (0, i.useState)(!1),
                V = L[0],
                G = L[1],
                Y = (0, i.useState)(!r),
                _ = Y[0],
                Q = Y[1],
                W = (0, u.z)(m.width, _),
                X = W.src,
                J = W.srcSet,
                $ =
                  null === (P = (0, d.x)()) || void 0 === P
                    ? void 0
                    : P.isVerifiedAdult,
                ee =
                  (null === (N = C.cover) || void 0 === N
                    ? void 0
                    : N.isAdultOnly) && !$,
                te = ee ? void 0 : X,
                ne = ee ? void 0 : J,
                re = !te,
                oe = V && !re,
                ie = (0, s.W)(function () {
                  return Q(!0);
                }),
                ae = r ? ie : null,
                se = (0, i.useRef)(null),
                ce = function () {
                  if (se.current) {
                    G(se.current.complete);
                    var e = se.current.naturalHeight / se.current.naturalWidth;
                    T({
                      width: se.current.naturalWidth,
                      height: se.current.naturalHeight,
                    }),
                      "auto" === n &&
                        (D < e && e < z
                          ? (K(!0), q(!0))
                          : e >= z
                          ? (K(!1), q(!0))
                          : e <= D && (K(!1), q(!1)));
                  }
                };
              (0, i.useEffect)(
                function () {
                  re || ce();
                },
                [re, te]
              );
              var ue = (0, o.a)(),
                le = (0, i.useMemo)(
                  function () {
                    var e = [v(ue)],
                      n = [g(ue)],
                      r = [h(oe)],
                      o = M || m,
                      i = o.height / o.width,
                      a = (0, f.fn)(function (e) {
                        var t = i <= e.height / e.width;
                        return E !== t ? x : k;
                      }, t);
                    r.push(a);
                    var s = (0, f.fn)(function (e) {
                      var t = i <= e.height / e.width;
                      return E !== t ? b : j;
                    }, t);
                    n.push(s);
                    var c = a;
                    return (
                      e.push(c),
                      Z &&
                        (e.push(
                          (function (e) {
                            return (0, p.css)(
                              "&::before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:",
                              e.colors.grey100,
                              ";}",
                              ""
                            );
                          })(ue),
                          (0, f.fn)(B, t)
                        ),
                        n.push(w)),
                      E && (n.push(y), r.push(O)),
                      {
                        thumbnailWrapperStyle: e,
                        thumbnailStyle: n,
                        thumbnailImageStyle: r,
                      }
                    );
                  },
                  [ue, E, Z, M, oe]
                );
              return (0, S.jsxs)("div", {
                css: le.thumbnailWrapperStyle,
                className: A,
                ref: ae,
                children: [
                  (0, S.jsx)("div", {
                    css: le.thumbnailStyle,
                    children: (0, S.jsx)("img", {
                      css: le.thumbnailImageStyle,
                      src: null !== te && void 0 !== te ? te : l.m6.src,
                      srcSet: ne,
                      sizes: c,
                      alt: null !== (R = C.title) && void 0 !== R ? R : "",
                      ref: se,
                      onLoad: ce,
                    }),
                  }),
                  F,
                ],
              });
            };
          },
          {
            type: [{ value: { width: 120, height: 174 } }],
            cropMode: "auto",
            lazyload: !0,
          }
        ),
        A = c.S,
        F = c.S;
    },
    70767: function (e, t, n) {
      n.d(t, {
        Qe: function () {
          return m;
        },
        DX: function () {
          return Z;
        },
        R5: function () {
          return k;
        },
        OF: function () {
          return B;
        },
        gJ: function () {
          return j;
        },
        XV: function () {
          return H;
        },
        EU: function () {
          return q;
        },
        $7: function () {
          return S;
        },
        sO: function () {
          return ie;
        },
        XH: function () {
          return N;
        },
        Q1: function () {
          return I;
        },
        sn: function () {
          return M;
        },
        Mh: function () {
          return Q;
        },
        pN: function () {
          return ae;
        },
        AS: function () {
          return T;
        },
        MR: function () {
          return U;
        },
        yQ: function () {
          return re;
        },
        Jj: function () {
          return oe.Jj;
        },
        Yo: function () {
          return oe.Yo;
        },
        RS: function () {
          return oe.RS;
        },
        KJ: function () {
          return E;
        },
      });
      var r = n(8456),
        o = n(32735),
        i = n(79030),
        a = n(86432),
        s = n(58971),
        c = n(35212),
        u = n(75246);
      var l = {
          name: "1k4ispj",
          styles:
            "transform:translate(0, 0.5px);position:absolute;top:0;right:0;color-scheme:only light",
        },
        d = function (e) {
          return (0, u.css)("font-size:", e, "px;", "");
        },
        f = function (e) {
          return (0, u.css)("top:", e, "px;right:", e, "px;", "");
        },
        p = n(38839),
        m = (0, a.cd)(
          function (e) {
            var t = e.iconSize,
              n = e.position,
              r = (0, a.fn)(d, t),
              c = (0, a.fn)(f, n);
            return function (e) {
              var t,
                n = e.className;
              return null !== (t = (0, o.useContext)(s.F).cover) &&
                void 0 !== t &&
                t.isAdultOnly
                ? (0, p.jsx)(i.Y1, {
                    "aria-label":
                      "19\uc138 \ubbf8\ub9cc \uad6c\ub3c5\ubd88\uac00",
                    css: [l, r, c, "", ""],
                    className: n,
                  })
                : (0, p.jsx)(p.Fragment, {});
            };
          },
          {
            iconSize: [{ value: c.KO.BookAdultBadge.iconSize }],
            position: [{ value: c.KO.BookAdultBadge.position }],
          }
        ),
        v = n(62796),
        g = function (e) {
          return (0, u.css)("min-width:", e, "px;height:", e, "px;", "");
        },
        h = function (e) {
          return (0, u.css)("font-size:", e, "px;", "");
        },
        x = function (e) {
          return (0, u.css)("&>svg{font-size:", e, "px;}", "");
        },
        b = (0, v.Z)("div", { target: "e1ca83gv0" })(
          function (e) {
            return (function (e) {
              return (0, u.css)(
                "display:flex;justify-content:center;align-items:center;text-align:center;color:",
                e.colors.white,
                ";font-weight:700;letter-spacing:-0.02em;white-space:nowrap;",
                ""
              );
            })(e.theme);
          },
          ";background:",
          function (e) {
            var t,
              n = e.background;
            return null !== (t = e.theme.colors[n]) && void 0 !== t ? t : n;
          },
          ";"
        ),
        k = (0, a.cd)(
          function (e) {
            var t = e.size,
              n = e.contentSize,
              r = e.iconSize,
              o = [(0, a.fn)(g, t), (0, a.fn)(h, n), (0, a.fn)(x, r)];
            return function (e) {
              var t = e.className,
                n = e.children,
                r = e.background;
              return (0, p.jsx)(b, {
                className: t,
                css: o,
                background: r,
                children: n,
              });
            };
          },
          {
            size: [{ value: c.KO.BookBadge.size }],
            contentSize: [{ value: c.KO.BookBadge.contentSize }],
            iconSize: [{ value: c.KO.BookBadge.iconSize }],
          }
        ),
        j = r.S,
        y = n(37108);
      var O = {
          name: "v8k8x7",
          styles:
            "position:absolute;bottom:0;left:0;border-bottom-left-radius:4px;border-top-right-radius:4px;overflow:hidden;display:flex",
        },
        B = (0, a.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = (0, o.useContext)(y.U).components,
              i = r.BookDiscountBadge,
              a = r.BookFreebookBadge,
              s = r.BookImageBadge,
              c = r.BookNewBadge,
              u = r.BookRentalBadge,
              l = r.BookSelectBadge,
              d = r.BookWaitFreeBadge;
            return (0,
            p.jsxs)("div", { css: O, className: t, children: [(0, p.jsx)(s, {}), (0, p.jsx)(c, {}), (0, p.jsx)(d, {}), (0, p.jsx)(i, {}), (0, p.jsx)(l, {}), (0, p.jsx)(a, {}), (0, p.jsx)(u, {}), n] });
          };
        });
      var w = { name: "1n4pqk6", styles: "padding:0 2.5px" },
        S = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              i = (0, o.useContext)(y.U).components.BookBadge,
              a =
                null === (t = (0, o.useContext)(s.F).cover) ||
                void 0 === t ||
                null === (n = t.badges) ||
                void 0 === n
                  ? void 0
                  : n.discount;
            return a
              ? (0, p.jsxs)(i, {
                  background: "red",
                  css: w,
                  className: r,
                  children: [a, "%"],
                })
              : (0, p.jsx)(p.Fragment, {});
          };
        });
      var P = { name: "x85wbw", styles: "padding:0 5px" },
        N = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              i,
              a,
              c,
              u,
              l = e.className,
              d = (0, o.useContext)(y.U).components.BookBadge,
              f = (0, o.useContext)(s.F),
              m =
                null === (t = f.cover) ||
                void 0 === t ||
                null === (n = t.badges) ||
                void 0 === n
                  ? void 0
                  : n.freeBook,
              v =
                null === (r = f.cover) ||
                void 0 === r ||
                null === (i = r.freeBook) ||
                void 0 === i
                  ? void 0
                  : i.count;
            if (!m || !v) return (0, p.jsx)(p.Fragment, {});
            var g =
                null !==
                  (a =
                    null === (c = f.cover) ||
                    void 0 === c ||
                    null === (u = c.freeBook) ||
                    void 0 === u
                      ? void 0
                      : u.unit) && void 0 !== a
                  ? a
                  : "\uad8c",
              h = g.length >= 2 ? "\ubb34\ub8cc" : "\ubb34";
            return (0,
            p.jsxs)(d, { background: "darkNavy", css: P, className: l, children: [v, g, h] });
          };
        }),
        D = n(31737),
        z = n(87196),
        R = n(53881);
      var A = { name: "reg8qv", styles: "width:auto;height:100%" };
      function F(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                (0, D.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              i = (0, o.useContext)(y.U).components.BookBadge,
              a =
                null === (t = (0, o.useContext)(s.F).cover) ||
                void 0 === t ||
                null === (n = t.badges) ||
                void 0 === n
                  ? void 0
                  : n.image;
            if (!a) return (0, p.jsx)(p.Fragment, {});
            var c = (0, z.a)();
            return (0, p.jsx)(p.Fragment, {
              children: a
                .map(function (e, t) {
                  return C(
                    C({}, e),
                    {},
                    {
                      key: ""
                        .concat(
                          String(null === e || void 0 === e ? void 0 : e.alt),
                          "-"
                        )
                        .concat(t),
                    }
                  );
                })
                .map(function (e) {
                  var t, n, o;
                  return (0, p.jsxs)(
                    i,
                    {
                      className: r,
                      background:
                        null !==
                          (t =
                            null === e ||
                            void 0 === e ||
                            null === (n = e.color) ||
                            void 0 === n
                              ? void 0
                              : n[c.colorScheme]) && void 0 !== t
                          ? t
                          : "transparent",
                      children: [
                        null === e ||
                        void 0 === e ||
                        null === (o = e.images) ||
                        void 0 === o
                          ? void 0
                          : o
                              .map(function (e, t) {
                                return { src: e, key: t };
                              })
                              .map(function (e) {
                                var t = e.src,
                                  n = e.key;
                                return (0,
                                p.jsx)("img", { css: A, src: t, alt: "" }, n);
                              }),
                        (0, p.jsx)("span", {
                          css: R.OT,
                          children: null === e || void 0 === e ? void 0 : e.alt,
                        }),
                      ],
                    },
                    e.key
                  );
                }),
            });
          };
        }, {}),
        M = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              i = (0, o.useContext)(y.U).components.BookBadge;
            return (
              null === (t = (0, o.useContext)(s.F).cover) ||
              void 0 === t ||
              null === (n = t.badges) ||
              void 0 === n
                ? void 0
                : n.newRelease
            )
              ? (0, p.jsx)(i, {
                  background: "mint",
                  className: r,
                  children: "UP",
                })
              : (0, p.jsx)(p.Fragment, {});
          };
        }),
        T = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              i = (0, o.useContext)(y.U).components.BookBadge;
            return (
              null === (t = (0, o.useContext)(s.F).cover) ||
              void 0 === t ||
              null === (n = t.badges) ||
              void 0 === n
                ? void 0
                : n.rental
            )
              ? (0, p.jsx)(i, {
                  background: "darkNavy",
                  className: r,
                  children: "\ub300\uc5ec",
                })
              : (0, p.jsx)(p.Fragment, {});
          };
        }),
        U = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              a = (0, o.useContext)(y.U).components.BookBadge;
            return (
              null === (t = (0, o.useContext)(s.F).cover) ||
              void 0 === t ||
              null === (n = t.badges) ||
              void 0 === n
                ? void 0
                : n.select
            )
              ? (0, p.jsx)(a, {
                  background: "gold",
                  className: r,
                  children: (0, p.jsx)(i.XD, {
                    "aria-label": "\uc140\ub809\ud2b8",
                  }),
                })
              : (0, p.jsx)(p.Fragment, {});
          };
        }),
        E = (0, a.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              a = (0, o.useContext)(y.U).components.BookBadge;
            return (
              null === (t = (0, o.useContext)(s.F).cover) ||
              void 0 === t ||
              null === (n = t.badges) ||
              void 0 === n
                ? void 0
                : n.waitFree
            )
              ? (0, p.jsx)(a, {
                  background: "blue",
                  className: r,
                  children: (0, p.jsx)(i.fv, {
                    "aria-label": "\uae30\ub2e4\ubb34",
                  }),
                })
              : (0, p.jsx)(p.Fragment, {});
          };
        }),
        K = n(82628);
      var H = r.S,
        Z = r.S,
        q = K.K.addStyle({
          name: "mne2k8",
          styles:
            "-webkit-mask-image:-webkit-radial-gradient(white, black);border-radius:4px;overflow:hidden",
        });
      var L = {
          name: "1tivqq7",
          styles:
            "position:absolute;top:0;left:0;max-width:100%;&::before{content:'';display:block;width:100%;padding-bottom:100%;background:linear-gradient(130.07deg, rgba(0, 0, 0, 1) 12.26%, rgba(0, 0, 0, 0) 52.51%);opacity:0.06;}",
        },
        V = function (e) {
          return (0, u.css)("width:", e, "px;", "");
        },
        G = { name: "a4hmbt", styles: "position:absolute" },
        Y = function (e) {
          return (0, u.css)("top:", e.x, "px;left:", e.y, "px;", "");
        },
        _ = function (e) {
          return (0, u.css)("width:", e, "px;", "");
        },
        Q = (0, a.cd)(
          function (e) {
            var t = e.iconSize,
              n = e.iconPosition,
              r = e.gradientHeight,
              c = [G, (0, a.fn)(_, t), (0, a.fn)(Y, n)],
              u = [L, (0, a.fn)(V, r)];
            return function (e) {
              var t,
                n = e.className;
              return (
                null === (t = (0, o.useContext)(s.F).cover) || void 0 === t
                  ? void 0
                  : t.original
              )
                ? (0, p.jsx)("div", {
                    css: u,
                    className: n,
                    children: (0, p.jsx)(i.rA, {
                      css: c,
                      "aria-label": "\uc624\ub9ac\uc9c0\ub110",
                    }),
                  })
                : (0, p.jsx)(p.Fragment, {});
            };
          },
          {
            iconSize: [{ value: c.KO.BookOriginal.iconSize }],
            iconPosition: [{ value: c.KO.BookOriginal.iconPosition }],
            gradientHeight: [{ value: c.KO.BookOriginal.gradientHeight }],
          }
        ),
        W = n(95552),
        X = function (e) {
          return (0, u.css)(
            "background:linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.06) 0%,\n    rgba(0, 0, 0, 0) 5.73%,\n    rgba(0, 0, 0, 0) 94.27%,\n    rgba(0, 0, 0, 0.06) 100%\n  );background-color:",
            (0, W.m)(e.colors.white, 0.87),
            ";box-shadow:",
            (0, W.m)(e.colors.black, 0.15),
            " 0 1px 1px 0;font-weight:700;color:",
            (0, W.m)(e.colors.black, 0.8),
            ";position:absolute;left:0;right:0;text-align:center;&::before,&::after{content:'';display:block;position:absolute;left:0;right:0;height:2px;background:",
            e.colors.darkNavy,
            ";background-clip:content-box;opacity:0.1;}&::before{transform-origin:top;top:0;padding-top:1px;}&::after{transform-origin:bottom;bottom:0;padding-bottom:1px;}",
            ""
          );
        },
        J = function (e) {
          return (0, u.css)(
            "&::before,&::after{transform:scale(",
            e,
            ");}",
            ""
          );
        },
        $ = function (e) {
          return (0, u.css)("padding:", e, ";", "");
        },
        ee = function (e) {
          return (0, u.css)("font-size:", e, "px;", "");
        },
        te = function (e) {
          return (0, u.css)("line-height:", e, "px;", "");
        },
        ne = function (e) {
          return (0, u.css)("bottom:", e, "px;", "");
        },
        re = (0, a.cd)(
          function (e) {
            var t = e.lineSize,
              n = e.textSize,
              r = e.lineHeight,
              i = e.padding,
              c = e.bottom,
              u = [
                X,
                (0, a.fn)($, i),
                (0, a.fn)(J, t),
                (0, a.fn)(ee, n),
                (0, a.fn)(te, r),
                (0, a.fn)(ne, c),
              ];
            return function (e) {
              var t,
                n = e.className,
                r =
                  null === (t = (0, o.useContext)(s.F).cover) || void 0 === t
                    ? void 0
                    : t.setBook,
                i = null === r || void 0 === r ? void 0 : r.count;
              return "number" !== typeof i || !Number.isFinite(i) || i <= 0
                ? (0, p.jsx)(p.Fragment, {})
                : (0, p.jsxs)("span", {
                    css: u,
                    className: n,
                    children: [i, "\uad8c \uc138\ud2b8"],
                  });
            };
          },
          {
            lineSize: [{ value: c.KO.BookSetbook.lineSize }],
            textSize: [{ value: c.KO.BookSetbook.textSize }],
            lineHeight: [{ value: c.KO.BookSetbook.lineHeight }],
            padding: [{ value: c.KO.BookSetbook.padding }],
            bottom: [{ value: c.KO.BookSetbook.bottom }],
          }
        ),
        oe = n(95072),
        ie = r.S,
        ae = r.S;
    },
    92378: function (e, t, n) {
      n.d(t, {
        Cr: function () {
          return d;
        },
        D5: function () {
          return l;
        },
        JO: function () {
          return s;
        },
        N1: function () {
          return f;
        },
        bG: function () {
          return c;
        },
        be: function () {
          return a;
        },
        zc: function () {
          return u;
        },
      });
      var r = n(75246),
        o = n(36962);
      var i = { name: "1b6c22i", styles: "font-size:11px;line-height:13px" },
        a = function (e) {
          return (0, r.css)(
            "color:",
            e.colors.red,
            ";font-weight:400;font-size:13px;line-height:16px;margin-left:2px;",
            (0, o.K2)(o.RR.DesktopSmall, i),
            ";",
            ""
          );
        },
        s = function (e) {
          return (0, r.css)("color:", e.colors.grey500, ";", "");
        },
        c = function (e) {
          return (0, r.css)("color:", e.colors.blue, ";font-weight:400;", "");
        },
        u = function (e) {
          return (0, r.css)(
            "padding:0;letter-spacing:-0.01em;color:",
            e.colors.blue,
            ";",
            ""
          );
        },
        l = function (e) {
          return (0, r.css)(
            "margin-top:",
            e,
            "px;&:first-of-type{margin-top:0;}",
            ""
          );
        },
        d = function (e) {
          return (0, r.css)("line-height:", e, "px;", "");
        },
        f = {
          name: "18ygzdk",
          styles:
            "margin:0;display:flex;flex-direction:column;align-items:flex-start",
        };
    },
    37624: function (e, t, n) {
      n.d(t, {
        v0: function () {
          return g;
        },
        dR: function () {
          return v;
        },
        ej: function () {
          return k;
        },
        iz: function () {
          return R;
        },
        Of: function () {
          return A;
        },
        Kd: function () {
          return F;
        },
        Mx: function () {
          return q;
        },
        rW: function () {
          return K;
        },
        pF: function () {
          return E;
        },
        DG: function () {
          return H;
        },
        Us: function () {
          return Z;
        },
        _D: function () {
          return W;
        },
        Yp: function () {
          return Q;
        },
        Gi: function () {
          return ce;
        },
        iW: function () {
          return se;
        },
        DA: function () {
          return ae;
        },
        zo: function () {
          return pe;
        },
      });
      var r = n(31737),
        o = n(17774),
        i = n(75246),
        a = n(37687),
        s = n(86432),
        c = n(35212);
      var u = {
          name: "715omj",
          styles: "&:hover{text-decoration:none;opacity:0.6;}",
        },
        l = n(38839),
        d = ["lineHeight"],
        f = ["children"];
      function p(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v = (0, s.cd)(
          function (e) {
            var t = e.lineHeight,
              n = (0, o.Z)(e, d),
              r = (0, s.fn)(function (e) {
                return (0, i.css)("line-height:", e, "px;", "");
              }, t),
              c = a.q.withOptions(n);
            return function (e) {
              var t = e.children,
                n = (0, o.Z)(e, f);
              return (0, l.jsx)(c, m(m({ css: r }, n), {}, { children: t }));
            };
          },
          m(
            m({}, a.q.getOptions()),
            {},
            {
              textSize: [{ value: c.KO.BookAuthors.textSize }],
              lineHeight: [{ value: c.KO.BookAuthors.lineHeight }],
            }
          )
        ),
        g = a.V.addStyle(u),
        h = function (e) {
          return (0, i.css)(
            "overflow-wrap:break-word;color:",
            e.colors.fillSecondary,
            ";letter-spacing:-0.01em;",
            ""
          );
        },
        x = function (e) {
          return (0, i.css)("font-size:", e, "px;", "");
        },
        b = function (e) {
          return (0, i.css)("line-height:", e, "px;", "");
        },
        k = (0, s.cd)(
          function (e) {
            var t = e.textSize,
              n = e.lineHeight,
              r = [h, (0, s.fn)(x, t), (0, s.fn)(b, n)];
            return function (e) {
              var t = e.className,
                n = e.children;
              return (0, l.jsx)("p", { css: r, className: t, children: n });
            };
          },
          {
            textSize: [{ value: c.KO.BookDefaultMetadataItem.textSize }],
            lineHeight: [{ value: c.KO.BookDefaultMetadataItem.lineHeight }],
          }
        ),
        j = n(32735),
        y = n(37108),
        O = n(36962);
      var B = { name: "1d3w5wq", styles: "width:100%" },
        w = { name: "6sug3x", styles: "margin-top:3px" },
        S = {
          name: "9iujih",
          styles: "position:relative;display:flex;align-items:center",
        },
        P = (0, i.css)("display:flex;&>*{", S, ";}", ""),
        N = (0, i.css)(
          "&>*+*{&::before{content:'';display:inline-block;background:currentColor;width:2px;height:2px;margin:0 5px;border-radius:100%;",
          (0, O.K2)(O.RR.DesktopSmall, {
            name: "m51uur",
            styles: "width:1.5px;height:1.5px;margin:0 4.5px 0 4px",
          }),
          ";}}",
          ""
        ),
        D = { name: "qdeacm", styles: "flex-direction:column" },
        z = [{ value: !0 }],
        R = (0, s.cd)(function () {
          return function (e) {
            var t = e.collapse,
              n = void 0 === t ? z : t,
              r = e.className,
              o = e.children,
              i = (0, j.useMemo)(
                function () {
                  return [
                    P,
                    (0, s.fn)(function (e) {
                      return e ? D : N;
                    }, n),
                  ];
                },
                [n]
              );
            return (0, l.jsx)("div", { css: i, className: r, children: o });
          };
        }),
        A = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = (0, j.useContext)(y.U).components,
              o = r.BookAuthors,
              i = r.BookStarRate,
              a = r.BookMetadataItemGroup;
            return (0,
            l.jsxs)(a, { className: t, children: [(0, l.jsx)(o, { css: w }), (0, l.jsx)(i, { css: w }), n] });
          };
        }),
        F = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = e.index,
              o = void 0 === r ? 0 : r,
              i = (0, j.useContext)(y.U).components,
              a = i.BookMetadataItems,
              s = i.BookTitle;
            return (0,
            l.jsxs)("div", { css: B, className: t, children: [(0, l.jsx)(s, { index: o }), (0, l.jsx)(a, { children: n })] });
          };
        }),
        C = n(78632),
        I = n(92378),
        M = ["margin", "lineHeight"];
      function T(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.percentage,
              r = e.children;
            return (0,
            l.jsxs)("span", { css: I.be, className: t, children: ["(".concat(Math.ceil(n), "%)"), r] });
          };
        }),
        K = C.SQ,
        H = C.D.addStyle(I.bG),
        Z =
          (C.cY.addStyle(I.JO),
          (0, s.cd)(
            function (e) {
              var t = e.margin,
                n = e.lineHeight,
                r = (0, o.Z)(e, M),
                i = [I.zc, (0, s.fn)(I.D5, t), (0, s.fn)(I.Cr, n)];
              return C.Nb.withOptions(r).addStyle(i);
            },
            U(
              U({}, C.Nb.getOptions()),
              {},
              {
                margin: [{ value: c.KO.BookPriceItem.margin }],
                textSize: [{ value: c.KO.BookPriceItem.textSize }],
                lineHeight: [{ value: c.KO.BookPriceItem.lineHeight }],
              }
            )
          )),
        q = C.BG.addStyle(I.N1),
        L = n(58971),
        V = n(47919),
        G = function (e) {
          return (0, i.css)(
            "background:",
            e.colors.fillSecondary,
            ";color:",
            e.colors.white,
            ";border-radius:2px;padding:0;align-items:center;justify-content:center;margin-left:2px;letter-spacing:-0.02em;top:0;",
            ""
          );
        },
        Y = function (e) {
          return (0, i.css)("line-height:", e, "px;", "");
        },
        _ = function (e) {
          return (0, i.css)(
            e <= 9
              ? "\n    font-size: 0;\n    width: 22px;\n    height: 14px;\n\n    &::after {\n      content: '\uc644\uacb0';\n      font-size: 10px;\n      transform-origin: center center;\n      transform: scale(calc(".concat(
                  e,
                  "/10));\n    }\n  "
                )
              : "\n    font-size: ".concat(
                  e,
                  "px;\n    width: 25px;\n    height: 16px;\n\n    &::after {\n      content: '';\n    }\n  "
                ),
            ";",
            ""
          );
        },
        Q = (0, s.cd)(
          function (e) {
            var t = e.textSize,
              n = e.lineHeight,
              r = [G, (0, s.fn)(_, t), (0, s.fn)(Y, n)];
            return V.V.addStyle(r);
          },
          {
            textSize: [{ value: c.KO.BookSeriesCompletion.textSize }],
            lineHeight: [{ value: c.KO.BookSeriesCompletion.lineHeight }],
          }
        ),
        W = (0, s.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              o = e.className,
              i = e.children,
              a = (0, j.useContext)(y.U).components,
              s = a.BookDefaultMetadataItem,
              c = a.BookSeriesCompletion,
              u =
                null === (t = (0, j.useContext)(L.F).metadata) ||
                void 0 === t ||
                null === (n = t.extra) ||
                void 0 === n
                  ? void 0
                  : n.series;
            if (!u) return (0, l.jsx)(l.Fragment, {});
            if (
              "number" !== typeof u.total ||
              !Number.isInteger(u.total) ||
              u.total < 1
            )
              return (0, l.jsx)(l.Fragment, {});
            var d = null !== (r = u.unit) && void 0 !== r ? r : "\ud654";
            return (0,
            l.jsxs)(s, { className: o, children: [(0, l.jsx)("span", { children: "\ucd1d ".concat(u.total).concat(d) }), (0, l.jsx)(c, {}), i] });
          };
        }),
        X = n(87196),
        J = n(79030),
        $ = n(8456);
      var ee = function (e) {
          return (0, i.css)("font-size:", e, "px;", "");
        },
        te = function (e) {
          return (0, i.css)("line-height:", e, "px;", "");
        },
        ne = { name: "1v19zpd", styles: "margin:1px 1px 2px 0" },
        re = function (e, t) {
          return (0, i.css)(
            "margin:3px 2px 2px 0;color:",
            e ? t.colors.red : t.colors.grey400,
            ";",
            (0, O.K2)(O.RR.DesktopSmall, ne),
            ";",
            ""
          );
        },
        oe = function (e) {
          return (0, i.css)("font-size:", e, "px;", "");
        },
        ie = function (e) {
          return (0, i.css)(
            "margin-left:1px;color:",
            e.colors.fillSecondary,
            ";",
            ""
          );
        },
        ae = (0, s.cd)(
          function (e) {
            var t = e.size,
              n = e.textSize,
              r = e.lineHeight,
              o = (0, s.fn)(oe, t),
              a = (0, s.fn)(ee, n),
              c = (0, s.fn)(te, r);
            return function (e) {
              var t,
                n,
                r,
                s,
                u = e.className,
                d = e.children,
                f = (0, j.useContext)(y.U).components.BookDefaultMetadataItem,
                p = (0, j.useContext)(L.F),
                m =
                  null === (t = p.metadata) ||
                  void 0 === t ||
                  null === (n = t.starRate) ||
                  void 0 === n
                    ? void 0
                    : n.score,
                v =
                  null === (r = p.metadata) ||
                  void 0 === r ||
                  null === (s = r.starRate) ||
                  void 0 === s
                    ? void 0
                    : s.count;
              if ("number" !== typeof m || !Number.isFinite(m))
                return (0, l.jsx)(l.Fragment, {});
              var g = m > 0,
                h = g ? Math.min(5, Math.max(0, m)).toFixed(1) : "0",
                x = g
                  ? "\uad6c\ub9e4\uc790 \ud3c9\uade0 \ubcc4\uc810"
                  : "\ubcc4\uc810 \uc815\ubcf4 \uc5c6\uc74c",
                b = (0, X.a)(),
                k = (function (e, t) {
                  return (0, i.css)(
                    "display:flex;color:",
                    e ? t.colors.red : t.colors.fillSecondary,
                    ";",
                    ""
                  );
                })(g, b),
                O = [re(g, b), o];
              return (0, l.jsxs)(f, {
                css: [a, c, k, "", ""],
                className: u,
                children: [
                  (0, l.jsx)(J.w4, { css: O, "aria-label": x }),
                  h,
                  void 0 !== v &&
                    v > 0 &&
                    (0, l.jsxs)("span", {
                      css: ie,
                      children: ["(", v.toLocaleString(), ")"],
                    }),
                  d,
                ],
              });
            };
          },
          {
            size: [{ value: c.KO.BookStarRate.size }],
            textSize: [{ value: c.KO.BookStarRate.textSize }],
            lineHeight: [{ value: c.KO.BookStarRate.lineHeight }],
          }
        ),
        se = $.S,
        ce = ae,
        ue = n(3890),
        le = function (e) {
          return (0, i.css)(
            "font-weight:500;color:",
            e.colors.fillPrimary,
            ";letter-spacing:-0.01em;",
            ""
          );
        },
        de = function (e) {
          return (0, i.css)("font-size:", e, "px;", "");
        },
        fe = function (e) {
          return function (t) {
            return (0, i.css)(
              (0, ue.Sf)(e, "".concat(t, "px")),
              ";word-break:break-all;",
              ""
            );
          };
        },
        pe = (0, s.cd)(
          function (e) {
            var t = e.textSize,
              n = e.lineHeight,
              r = e.lineCount,
              o = [le, (0, s.fn)(de, t), (0, s.fn)(fe(r), n)];
            return function (e) {
              var t,
                n,
                r = e.children,
                i = e.className,
                a = e.index,
                s = void 0 === a ? 0 : a,
                c = (0, j.useContext)(y.U).components.BookLink,
                u = (0, j.useContext)(L.F),
                d = u.title;
              return d &&
                !1 !==
                  (null === (t = u.metadata) ||
                  void 0 === t ||
                  null === (n = t.title) ||
                  void 0 === n
                    ? void 0
                    : n.showTitle)
                ? (0, l.jsx)("h3", {
                    children: (0, l.jsxs)(c, {
                      css: o,
                      className: i,
                      index: s,
                      children: [d, r],
                    }),
                  })
                : (0, l.jsx)(l.Fragment, {});
            };
          },
          {
            textSize: [{ value: c.KO.BookTitle.textSize }],
            lineHeight: [{ value: c.KO.BookTitle.lineHeight }],
            lineCount: 2,
          }
        );
    },
    60521: function (e, t, n) {
      n.d(t, {
        E: function () {
          return y;
        },
        Q: function () {
          return O;
        },
      });
      var r = n(31737),
        o = n(32735),
        i = n(86432),
        a = n(37108),
        s = n(28943),
        c = n(35212),
        u = n(75246),
        l = n(36962);
      var d = {
          name: "4eliv6",
          styles:
            "position:relative;display:flex;flex-direction:column;align-items:flex-start",
        },
        f = function (e) {
          return (0, u.css)("width:", e.width, "px;", "");
        },
        p = { name: "4p0q5q", styles: "position:relative;align-self:stretch" },
        m = function (e) {
          return (0, u.css)(
            "padding-bottom:",
            (e.height / e.width) * 100,
            "%;",
            ""
          );
        },
        v = {
          name: "1c09zx8",
          styles: "position:absolute;bottom:0;left:0;right:0;max-height:100%",
        },
        g = function (e) {
          return (0, u.css)("margin-top:", e, "px;", "");
        },
        h = function (e) {
          return (0, u.css)("padding-right:", e, "px;", "");
        },
        x = (0, u.css)(
          "position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;",
          (0, l.K2)(l.RR.DesktopSmall, {
            name: "1quw0ni",
            styles: "pointer-events:auto",
          }),
          ";",
          ""
        ),
        b = n(38839);
      function k(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = (0, i.cd)(
          function (e) {
            var t = e.metadataMargin,
              n = e.metadataPaddingRight,
              r = e.type,
              s = [d, (0, i.fn)(f, r)],
              c = [p, (0, i.fn)(m, r)],
              u = [(0, i.fn)(g, t), (0, i.fn)(h, n)];
            return function (e) {
              var t = e.className,
                n = e.children,
                r = e.index,
                i = (0, o.useContext)(a.U).components,
                l = i.BookCoverRenderer,
                d = i.BookMetadataRenderer,
                f = i.BookTouchArea,
                p = i.BookViewTracker;
              return (0, b.jsx)(p, {
                children: (0, b.jsxs)("div", {
                  css: s,
                  className: t,
                  children: [
                    (0, b.jsx)("div", {
                      css: c,
                      children: (0, b.jsx)(l, { css: v, index: r }),
                    }),
                    (0, b.jsx)(d, { css: u, index: r, children: n }),
                    (0, b.jsx)(f, {}),
                  ],
                }),
              });
            };
          },
          j(
            j({}, s.X.getOptions()),
            {},
            {
              type: [{ value: { width: 120, height: 174 } }],
              metadataMargin: [{ value: c.KO.BookRenderer.metadataMargin }],
              metadataPaddingRight: [
                { value: c.KO.BookRenderer.metadataPaddingRight },
              ],
            }
          )
        ),
        O = (0, i.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = e.index,
              i = (0, o.useContext)(a.U).components.BookLink;
            return (0,
            b.jsx)(i, { css: x, className: t, index: r, children: n });
          };
        }, {});
    },
    16118: function (e, t, n) {
      n.d(t, {
        Kx: function () {
          return Z;
        },
        Nf: function () {
          return K;
        },
        Pt: function () {
          return H;
        },
        DU: function () {
          return E;
        },
        hm: function () {
          return G;
        },
        qn: function () {
          return L;
        },
        Nl: function () {
          return V;
        },
        a2: function () {
          return q;
        },
        Hw: function () {
          return _;
        },
        uN: function () {
          return Q;
        },
        J4: function () {
          return W;
        },
        WH: function () {
          return Y;
        },
      });
      var r = n(28405),
        o = n(31737),
        i = n(17774),
        a = n(32735),
        s = n(86432),
        c = n(58971),
        u = n(37108),
        l = n(76152),
        d = n(37624),
        f = n(75246),
        p = n(36962);
      var m = {
          name: "5lsy2s",
          styles:
            "display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",
        },
        v = (0, f.css)(
          m,
          ";margin-top:6px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "6sug3x",
            styles: "margin-top:3px",
          }),
          ";",
          ""
        ),
        g = (0, f.css)(
          "min-height:61px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "12uo2bc",
            styles: "min-height:51px",
          }),
          ";",
          ""
        ),
        h = (0, f.css)(
          "width:180px;height:332px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "1spji2m",
            styles: "width:110px;height:217px",
          }),
          ";",
          ""
        ),
        x = (0, f.css)(
          m,
          ";margin-top:6px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "6sug3x",
            styles: "margin-top:3px",
          }),
          ";",
          ""
        ),
        b = (0, f.css)(
          "margin-top:7px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "1soh0gv",
            styles: "margin-top:4px",
          }),
          ";",
          ""
        ),
        k = (0, f.css)(
          "min-height:84px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "1q86nga",
            styles: "min-height:69px",
          }),
          ";",
          ""
        ),
        j = (0, f.css)(
          "width:180px;height:355px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "141b4it",
            styles: "width:110px;height:249px",
          }),
          ";",
          ""
        ),
        y = (0, f.css)(
          m,
          ";margin-top:6px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "6sug3x",
            styles: "margin-top:3px",
          }),
          ";",
          ""
        ),
        O = (0, f.css)(
          "margin-top:2px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "s079uh",
            styles: "margin-top:2px",
          }),
          ";",
          ""
        ),
        B = (0, f.css)(
          "margin-top:7px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "1soh0gv",
            styles: "margin-top:4px",
          }),
          ";",
          ""
        ),
        w = (0, f.css)(
          "margin-top:6px;",
          (0, p.K2)(p.RR.DesktopSmall, {
            name: "1soh0gv",
            styles: "margin-top:4px",
          }),
          ";",
          ""
        ),
        S = function (e, t) {
          return (0, f.css)(
            "width:180px;height:",
            355 + (e ? 19 : 0) + (t ? 41 : 0),
            "px;",
            (0, p.K2)(
              p.RR.DesktopSmall,
              (0, f.css)(
                "width:110px;height:",
                249 + (e ? 16 : 0) + (t ? 32 : 0),
                "px;",
                ""
              )
            ),
            ";",
            ""
          );
        },
        P = {
          name: "x03941",
          styles: "width:110px;height:174px;margin-bottom:6px",
        },
        N = function (e) {
          return (0, f.css)(
            "background:",
            e.colors.grey100,
            ";width:180px;height:261px;margin-bottom:10px;",
            (0, p.K2)(p.RR.DesktopSmall, P),
            ";",
            ""
          );
        },
        D = { name: "1nuip82", styles: "width:100px;height:16px" },
        z = function (e) {
          return (0, f.css)(
            "background:",
            e.colors.grey100,
            ";width:154px;height:20px;",
            (0, p.K2)(p.RR.DesktopSmall, D),
            ";",
            ""
          );
        },
        R = { name: "g0lgwl", styles: "width:50px;height:13px;margin-top:3px" },
        A = function (e) {
          return (0, f.css)(
            "background:",
            e.colors.grey100,
            ";width:124px;height:16px;margin-top:6px;",
            (0, p.K2)(p.RR.DesktopSmall, R),
            ";",
            ""
          );
        },
        F = { name: "q8lffi", styles: "width:30px;height:13px;margin-top:4px" },
        C = function (e) {
          return (0, f.css)(
            "background:",
            e.colors.grey100,
            ";width:50px;height:16px;margin-top:7px;",
            (0, p.K2)(p.RR.DesktopSmall, F),
            ";",
            ""
          );
        },
        I = n(38839),
        M = ["children"];
      function T(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = (0, s.cd)(function () {
          return function (e) {
            var t = e.elementRef,
              n = e.className;
            return (0,
            I.jsxs)("div", { className: n, css: h, ref: t, children: [(0, I.jsx)("div", { css: N }), (0, I.jsx)("div", { css: z }), (0, I.jsx)("div", { css: A })] });
          };
        }),
        K = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = (0, a.useContext)(u.U).components,
              o = r.BookMetadataItemGroup,
              i = r.BookAuthors;
            return (0,
            I.jsxs)(I.Fragment, { children: [(0, I.jsx)(o, { className: t, children: (0, I.jsx)(i, { css: v }) }), n] });
          };
        }),
        H = d.Kd.addStyle(g),
        Z = l.j.addStyle(h),
        q = (0, s.cd)(function () {
          return function (e) {
            var t = e.elementRef,
              n = e.className;
            return (0,
            I.jsxs)("div", { className: n, css: j, ref: t, children: [(0, I.jsx)("div", { css: N }), (0, I.jsx)("div", { css: z }), (0, I.jsx)("div", { css: A }), (0, I.jsx)("div", { css: C })] });
          };
        }),
        L = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = (0, a.useContext)(u.U).components,
              o = r.BookAuthors,
              i = r.BookStarRate,
              s = r.BookMetadataItemGroup;
            return (0,
            I.jsxs)(I.Fragment, { children: [(0, I.jsxs)(s, { className: t, children: [(0, I.jsx)(o, { css: x }), (0, I.jsx)(i, { css: b })] }), n] });
          };
        }),
        V = d.Kd.addStyle(k),
        G = l.j.addStyle(j),
        Y = (0, s.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              o = e.elementRef,
              i = (0, a.useContext)(c.F).metadata;
            return (0,
            I.jsx)("div", { ref: o, css: S(!(null === i || void 0 === i || null === (t = i.extra) || void 0 === t || !t.series), !(null === i || void 0 === i || null === (n = i.extra) || void 0 === n || !n.price)), className: r });
          };
        }),
        _ = (0, s.cd)(function (e) {
          var t = l.j.withOptions(e);
          return function (e) {
            var n,
              r,
              o = e.children,
              s = (0, i.Z)(e, M),
              u = (0, a.useContext)(c.F).metadata;
            return (0,
            I.jsx)(t, U(U({ css: S(!(null === u || void 0 === u || null === (n = u.extra) || void 0 === n || !n.series), !(null === u || void 0 === u || null === (r = u.extra) || void 0 === r || !r.price)) }, s), {}, { children: o }));
          };
        }, U({}, l.j.getOptions())),
        Q = (0, s.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children,
              r = (0, a.useContext)(u.U).components,
              o = r.BookAuthors,
              i = r.BookSeries,
              s = r.BookStarRate,
              c = r.BookPrice,
              l = r.BookMetadataItemGroup;
            return (0,
            I.jsxs)(I.Fragment, { children: [(0, I.jsxs)(l, { className: t, children: [(0, I.jsx)(o, { css: y }), (0, I.jsx)(i, { css: O }), (0, I.jsx)(s, { css: B }), (0, I.jsx)(c, { css: w })] }), n] });
          };
        }),
        W = (0, s.cd)(function (e) {
          var t = (0, r.Z)({}, e),
            n = d.Kd.withOptions(U({}, t));
          return function (e) {
            var t,
              r,
              o,
              i,
              s = e.className,
              u = e.children,
              l = (0, a.useContext)(c.F).metadata;
            return (0,
            I.jsx)(n, { css: ((o = !(null === l || void 0 === l || null === (t = l.extra) || void 0 === t || !t.series)), (i = !(null === l || void 0 === l || null === (r = l.extra) || void 0 === r || !r.price)), (0, f.css)("min-height:", 84 + (o ? 19 : 0) + (i ? 41 : 0), "px;", (0, p.K2)(p.RR.DesktopSmall, (0, f.css)("min-height:", 69 + (o ? 16 : 0) + (i ? 32 : 0), "px;", "")), ";", "")), className: s, children: u });
          };
        }, U({}, d.Kd.getOptions()));
    },
    35212: function (e, t, n) {
      n.d(t, {
        KO: function () {
          return p;
        },
        x: function () {
          return d;
        },
        VI: function () {
          return s;
        },
        Ir: function () {
          return m;
        },
        tw: function () {
          return u;
        },
        BH: function () {
          return f;
        },
        rn: function () {
          return c;
        },
        n6: function () {
          return v;
        },
        aT: function () {
          return l;
        },
        oY: function () {
          return a;
        },
      });
      var r = n(31737);
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var a = { EXTRA_SMALL: 100, SMALL: 300, DEFAULT: 400, LARGE: 700 },
        s = {
          BookAdultBadge: { iconSize: 16, position: 3 },
          BookOriginal: { iconSize: 41, iconPosition: { x: 2, y: 2 } },
        },
        c = {
          BookStarRate: { size: 11, textSize: 11, lineHeight: 13 },
          BookSetbook: {
            lineSize: 1,
            textSize: 7,
            lineHeight: 8,
            padding: "3px 5px",
            bottom: 14,
          },
        },
        u =
          (i(i({}, s), c),
          {
            BookOriginal: { iconSize: 54, iconPosition: { x: 3, y: 3 } },
            BookSetbook: {
              lineSize: 1.38,
              textSize: 9,
              lineHeight: 11,
              padding: "5px 5px 6px 5px",
              bottom: 20,
            },
          }),
        l = {},
        d =
          (i(i({}, u), l),
          {
            BookAdultBadge: { iconSize: 20, position: 4 },
            BookBadge: { size: 23, contentSize: 9, iconSize: 13 },
            BookOriginal: {
              iconSize: 67,
              iconPosition: { x: 5, y: 7 },
              gradientHeight: 100,
            },
            BookSetbook: {
              lineSize: 1.5,
              textSize: 10,
              lineHeight: 12,
              padding: "6px 5px 5px 5px",
              bottom: 27,
            },
          }),
        f = {
          BookDefaultMetadataItem: { textSize: 11, lineHeight: 13 },
          BookAuthors: { textSize: 12, lineHeight: 14 },
          BookStarRate: { size: 11, textSize: 11, lineHeight: 13 },
          BookTitle: { textSize: 14, lineHeight: 17 },
          BookRenderer: { metadataMargin: 6, metadataPaddingRight: 8 },
          BookSeriesCompletion: { textSize: 9, lineHeight: 11 },
          BookPriceItem: { margin: 2, textSize: 11, lineHeight: 13 },
        },
        p = i(i({}, d), f),
        m = {
          BookAdultBadge: { iconSize: 24, position: 6 },
          BookBadge: { size: 28, contentSize: 11, iconSize: 18 },
          BookOriginal: {
            iconSize: 101,
            iconPosition: { x: 7, y: 10 },
            gradientHeight: 150,
          },
          BookSetbook: {
            lineSize: 2,
            textSize: 13,
            lineHeight: 16,
            padding: "8px",
            bottom: 34,
          },
        },
        v = {
          BookDefaultMetadataItem: { textSize: 13, lineHeight: 16 },
          BookAuthors: { textSize: 14, lineHeight: 17 },
          BookTitle: { textSize: 16, lineHeight: 19 },
          BookRenderer: { metadataMargin: 10, metadataPaddingRight: 10 },
          BookSeriesCompletion: { textSize: 11, lineHeight: 13 },
          BookPriceItem: { margin: 3, textSize: 13, lineHeight: 16 },
        };
      i(i({}, m), v);
    },
    23340: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(32735),
        o = n(58971),
        i = n(17529),
        a = function (e, t) {
          var n,
            a = (0, r.useContext)(o.F),
            s = null === (n = a.cover) || void 0 === n ? void 0 : n.thumbnail,
            c = a.bookId,
            u = (0, r.useMemo)(
              function () {
                return s
                  ? "thumbnailId" in s
                    ? [s.thumbnailId, {}]
                    : [void 0, s]
                  : [c, {}];
              },
              [s, c]
            ),
            l = u[0],
            d = u[1],
            f = (0, r.useMemo)(
              function () {
                if (!t) return [void 0, void 0];
                var n = i.Zs.filter(function (e) {
                  return (
                    "string" ===
                    typeof (null === d || void 0 === d ? void 0 : d[e.type])
                  );
                });
                0 === n.length && (n = i.Zs);
                var r = (0, i.cu)(e, n, l, d);
                return r ? [r, (0, i.Qb)(n, l, d)] : [void 0, void 0];
              },
              [e, t, l, d]
            );
          return { src: f[0], srcSet: f[1] };
        };
    },
    59170: function (e, t, n) {
      n.d(t, {
        fy: function () {
          return d;
        },
        Fd: function () {
          return a.F;
        },
        nK: function () {
          return qt.nK;
        },
        D1: function () {
          return Zt;
        },
        Ux: function () {
          return s.U;
        },
        Zm: function () {
          return ie.Z;
        },
        ST: function () {
          return f.S;
        },
        DK: function () {
          return Vt.D;
        },
        DU: function () {
          return _t.DU;
        },
        a2: function () {
          return _t.a2;
        },
        dR: function () {
          return Yt.dR;
        },
        Ir: function () {
          return Lt.Ir;
        },
        tw: function () {
          return Lt.tw;
        },
        EU: function () {
          return Gt.EU;
        },
        SL: function () {
          return qt.SL;
        },
        og: function () {
          return qt.og;
        },
        rn: function () {
          return Lt.rn;
        },
        x$: function () {
          return qt.x$;
        },
        MS: function () {
          return qt.MS;
        },
        RI: function () {
          return qt._H;
        },
        yQ: function () {
          return Gt.yQ;
        },
        zI: function () {
          return qt.zI;
        },
        oY: function () {
          return Lt.oY;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          BookAdultBadge: function () {
            return Ct;
          },
          BookAdultIndicator: function () {
            return b;
          },
          BookAuthorItem: function () {
            return Pe.V;
          },
          BookAuthors: function () {
            return Pe.q;
          },
          BookBadge: function () {
            return N;
          },
          BookBadgeRenderer: function () {
            return z;
          },
          BookBadgeText: function () {
            return D;
          },
          BookCoverDimmer: function () {
            return Z._;
          },
          BookCoverRenderer: function () {
            return Z.K;
          },
          BookDeductionUnavailableTitleBadge: function () {
            return Ot;
          },
          BookDefaultMetadataItem: function () {
            return ze;
          },
          BookDescription: function () {
            return Te;
          },
          BookDescriptionHTML: function () {
            return Me;
          },
          BookDescriptionText: function () {
            return Ie;
          },
          BookDiscountBadge: function () {
            return C;
          },
          BookFastRenderer: function () {
            return je.j;
          },
          BookFreebook: function () {
            return V;
          },
          BookFreebookBadge: function () {
            return It;
          },
          BookGenre: function () {
            return Ue;
          },
          BookImageBadge: function () {
            return Mt;
          },
          BookLink: function () {
            return Se;
          },
          BookMetadataItemGroup: function () {
            return Ge;
          },
          BookMetadataItems: function () {
            return Le;
          },
          BookMetadataRenderer: function () {
            return qe;
          },
          BookNewBadge: function () {
            return M;
          },
          BookNothing: function () {
            return f.S;
          },
          BookOriginal: function () {
            return Et;
          },
          BookOriginalPriceInfoItem: function () {
            return Ye.cY;
          },
          BookPrice: function () {
            return Ye.BG;
          },
          BookPriceAdditionalInfoItem: function () {
            return Ye.SQ;
          },
          BookPriceDiscountItem: function () {
            return Ye.q4;
          },
          BookPriceInfoItem: function () {
            return Ye.D;
          },
          BookPriceItem: function () {
            return Ye.Nb;
          },
          BookPublisher: function () {
            return We;
          },
          BookPurchaseStatus: function () {
            return Q;
          },
          BookRenderer: function () {
            return At.X;
          },
          BookRentalBadge: function () {
            return U;
          },
          BookSelectBadge: function () {
            return Tt;
          },
          BookSeries: function () {
            return Xe.r;
          },
          BookSeriesCompletion: function () {
            return Xe.V;
          },
          BookSetbook: function () {
            return re;
          },
          BookSkeleton: function () {
            return Ft;
          },
          BookSomedealTitleBadge: function () {
            return wt;
          },
          BookStarRate: function () {
            return vt;
          },
          BookStarRateFull: function () {
            return mt;
          },
          BookStarRateMinimal: function () {
            return pt;
          },
          BookThumbnail: function () {
            return ke;
          },
          BookThumbnailBorder: function () {
            return xe;
          },
          BookThumbnailGradient: function () {
            return be;
          },
          BookTitle: function () {
            return kt;
          },
          BookTitleBadge: function () {
            return Pt;
          },
          BookTitleBadgeRenderer: function () {
            return Dt;
          },
          BookTouchArea: function () {
            return Ut;
          },
          BookTranslators: function () {
            return Rt;
          },
          BookViewTracker: function () {
            return At.z;
          },
          BookWaitFreeBadge: function () {
            return H;
          },
        });
      var o = n(31737),
        i = n(32735),
        a = n(58971),
        s = n(37108),
        c = n(38839);
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = (0, i.memo)(function (e) {
          var t = e.data,
            n = e.children,
            r = e.trackingOptions,
            o = (0, i.useContext)(s.U).components,
            u = (0, i.useMemo)(
              function () {
                return l(l({}, t), {}, { trackingOptions: r });
              },
              [t, r]
            ),
            d = n(o);
          return (0, c.jsx)(a.F.Provider, { value: u, children: d });
        }),
        f = n(8456),
        p = n(75246),
        m = n(79030),
        v = n(86432);
      var g = {
          name: "seicsz",
          styles: "position:absolute;color-scheme:only light",
        },
        h = function (e) {
          return (0, p.css)("width:", e, "px;height:", e, "px;", "");
        },
        x = function (e) {
          return (0, p.css)("top:", e, "px;right:", e, "px;", "");
        },
        b = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = e.offset,
              r = (0, p.css)(
                g,
                ";",
                (0, v.fn)(h, t),
                ";",
                (0, v.fn)(x, n),
                ";",
                ""
              );
            return function (e) {
              var t,
                n,
                o = e.className;
              return null !==
                (t =
                  null === (n = (0, i.useContext)(a.F).cover) || void 0 === n
                    ? void 0
                    : n.isAdultOnly) &&
                void 0 !== t &&
                t
                ? (0, c.jsx)(m.Y1, {
                    "aria-label":
                      "19\uc138 \ubbf8\ub9cc \uad6c\ub3c5\ubd88\uac00",
                    css: r,
                    className: o,
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { size: [{ value: 20 }], offset: [{ value: 3 }] }
        ),
        k = n(17774),
        j = n(62796);
      var y = {
          name: "1gyj62w",
          styles:
            "display:block;position:absolute;left:-7px;top:-7px;line-height:0;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.15)",
        },
        O = {
          name: "cpi93c",
          styles:
            "display:block;position:absolute;top:50%;left:0;width:100%;height:1em;margin-top:-0.5em;color:white;font-weight:700;line-height:1em;letter-spacing:-0.05em;text-align:center",
        },
        B = ["children"];
      function w(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var P = (0, j.Z)("div", { target: "e14q3liz0" })(
          y,
          ";background:",
          function (e) {
            return e.background;
          },
          ";"
        ),
        N = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = (0, v.fn)(function (e) {
                return (0,
                p.css)("width:", e, "px;height:", e, "px;border-radius:", e, "px;", "");
              }, t);
            return function (e) {
              var t = e.className,
                r = e.children,
                o = e.background;
              return (0, c.jsx)(P, {
                className: t,
                css: n,
                background: o,
                children: r,
              });
            };
          },
          { size: [{ value: 34 }] }
        ),
        D = (0, v.cd)(function () {
          return function (e) {
            var t = e.children,
              n = (0, k.Z)(e, B);
            return (0, c.jsx)("span", S(S({ css: O }, n), {}, { children: t }));
          };
        }),
        z = (0, v.cd)(function () {
          return function (e) {
            var t,
              n = e.className,
              r = (0, i.useContext)(a.F),
              o = (0, i.useContext)(s.U).components,
              u = o.BookDiscountBadge,
              l = o.BookNewBadge,
              d = o.BookRentalBadge,
              f = o.BookWaitFreeBadge,
              p =
                null === r ||
                void 0 === r ||
                null === (t = r.cover) ||
                void 0 === t
                  ? void 0
                  : t.badges;
            return null !== p && void 0 !== p && p.newRelease
              ? (0, c.jsx)(l, { className: n })
              : null !== p && void 0 !== p && p.waitFree
              ? (0, c.jsx)(f, { className: n })
              : null !== p && void 0 !== p && p.rental
              ? (0, c.jsx)(d, { className: n })
              : null !== p && void 0 !== p && p.discount
              ? (0, c.jsx)(u, { className: n })
              : (0, c.jsx)(c.Fragment, {});
          };
        }),
        R = n(29097),
        A = function (e) {
          return (0, p.css)("font-size:", e, "px;padding-right:1px;", "");
        },
        F = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        C = (0, v.cd)(
          function (e) {
            var t = e.numberSize,
              n = e.percentSize,
              r = (0, v.fn)(A, t),
              o = (0, v.fn)(F, n);
            return function (e) {
              var t,
                n,
                u = e.className,
                l = (0, i.useContext)(s.U).components,
                d = l.BookBadge,
                f = l.BookBadgeText,
                p =
                  null === (t = (0, i.useContext)(a.F).cover) ||
                  void 0 === t ||
                  null === (n = t.badges) ||
                  void 0 === n
                    ? void 0
                    : n.discount;
              return p
                ? (0, c.jsx)(d, {
                    background: R.OO,
                    className: u,
                    children: (0, c.jsxs)(f, {
                      children: [
                        (0, c.jsx)("span", { css: r, children: p }),
                        (0, c.jsx)("span", { css: o, children: "%" }),
                      ],
                    }),
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { numberSize: [{ value: 16 }], percentSize: [{ value: 10 }] }
        ),
        I = function (e) {
          return (0, p.css)("font-size:", e, "px;margin-top:-0.4em;", "");
        },
        M = (0, v.cd)(
          function (e) {
            var t = e.textSize,
              n = (0, v.fn)(I, t);
            return function (e) {
              var t,
                r,
                o = e.className,
                u = (0, i.useContext)(s.U).components,
                l = u.BookBadge,
                d = u.BookBadgeText;
              return (
                null === (t = (0, i.useContext)(a.F).cover) ||
                void 0 === t ||
                null === (r = t.badges) ||
                void 0 === r
                  ? void 0
                  : r.newRelease
              )
                ? (0, c.jsx)(l, {
                    background: "#3ea590",
                    className: o,
                    children: (0, c.jsx)(d, { css: n, children: "NEW" }),
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { textSize: [{ value: 12 }] }
        ),
        T = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        U = (0, v.cd)(
          function (e) {
            var t = e.textSize,
              n = (0, v.fn)(T, t);
            return function (e) {
              var t,
                r,
                o = e.className,
                u = (0, i.useContext)(s.U).components,
                l = u.BookBadge,
                d = u.BookBadgeText;
              return (
                null === (t = (0, i.useContext)(a.F).cover) ||
                void 0 === t ||
                null === (r = t.badges) ||
                void 0 === r
                  ? void 0
                  : r.rental
              )
                ? (0, c.jsx)(l, {
                    background: "#3ea590",
                    className: o,
                    children: (0, c.jsx)(d, {
                      css: n,
                      children: "\ub300\uc5ec",
                    }),
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { textSize: [{ value: 14 }] }
        ),
        E = n(18094),
        K = function (e) {
          return (0, p.css)(
            "position:absolute;top:50%;left:50%;width:",
            e,
            "px;height:",
            e,
            "px;margin-left:1px;transform:translate(-50%, -50%);",
            ""
          );
        },
        H = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = (0, v.fn)(K, t);
            return function (e) {
              var t,
                r,
                o = e.className,
                u = (0, i.useContext)(s.U).components.BookBadge;
              return (
                null === (t = (0, i.useContext)(a.F).cover) ||
                void 0 === t ||
                null === (r = t.badges) ||
                void 0 === r
                  ? void 0
                  : r.waitFree
              )
                ? (0, c.jsx)(u, {
                    background: R.Fn,
                    className: o,
                    children: (0, c.jsx)(E.st, {
                      css: n,
                      "aria-label": "\uae30\ub2e4\ub9ac\uba74 \ubb34\ub8cc",
                    }),
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { size: [{ value: 20 }] }
        ),
        Z = n(82628);
      var q = {
          name: "1kq26u2",
          styles:
            "position:absolute;height:26px;bottom:0;right:0;padding:7px 6px 5px 6px;border:1px solid rgba(255, 255, 255, 0.4);border-right:0;border-bottom:0;border-radius:3px 0 0 0;background:rgba(0, 0, 0, 0.7);opacity:0.9;font-size:12px;line-height:12px",
        },
        L = { name: "19opvnq", styles: "color:white;font-weight:bold" },
        V = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              o,
              s,
              u = e.className,
              l = (0, i.useContext)(a.F),
              d =
                null === (t = l.cover) ||
                void 0 === t ||
                null === (n = t.freeBook) ||
                void 0 === n
                  ? void 0
                  : n.count,
              f =
                null !==
                  (r =
                    null === (o = l.cover) ||
                    void 0 === o ||
                    null === (s = o.freeBook) ||
                    void 0 === s
                      ? void 0
                      : s.unit) && void 0 !== r
                  ? r
                  : "\uad8c";
            return "number" !== typeof d || !Number.isFinite(d) || d <= 0
              ? (0, c.jsx)(c.Fragment, {})
              : (0, c.jsx)("div", {
                  className: u,
                  css: q,
                  children: (0, c.jsxs)("span", {
                    css: L,
                    children: ["".concat(d).concat(f), " \ubb34\ub8cc"],
                  }),
                });
          };
        });
      var G = {
          name: "1tuqsqo",
          styles: "display:block;position:absolute;left:0;bottom:0;width:100%",
        },
        Y = {
          name: "svja6b",
          styles:
            "display:block;background:rgba(0, 0, 0, 0.8);padding:7px;box-sizing:content-box;color:white;font-size:12px;font-weight:bold;text-align:center",
        },
        _ = {
          purchased: "\uad6c\ub9e4\ud55c \ucc45",
          rent: "\ub300\uc5ec\uc911",
          rent_finished: "\ub300\uc5ec\ud588\ub358 \ucc45",
        },
        Q = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              o = (function (e) {
                return "string" === typeof e && Object.hasOwnProperty.call(_, e)
                  ? _[e]
                  : null;
              })(
                null === (t = (0, i.useContext)(a.F).cover) ||
                  void 0 === t ||
                  null === (n = t.extra) ||
                  void 0 === n
                  ? void 0
                  : n.purchaseStatus
              );
            return "string" !== typeof o
              ? (0, c.jsx)(c.Fragment, {})
              : (0, c.jsx)("p", {
                  css: G,
                  className: r,
                  children: (0, c.jsx)("span", { css: Y, children: o }),
                });
          };
        });
      var W = {
          name: "82s3lh",
          styles:
            "display:block;width:100%;height:100%;position:absolute;left:0;bottom:0",
        },
        X = (0, p.css)(
          "display:block;position:absolute;left:-1px;right:-1px;bottom:21%;width:calc(100% + 2px);padding:1px 0;background:white;box-shadow:0 2px 3px 0 rgba(0, 0, 0, 0.2);text-align:center;&::before{content:'';display:block;width:100%;background:",
          R.Fn,
          ";position:absolute;top:50%;margin-top:-1px;}&::after{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:0;background:linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.2) 0%,\n      rgba(0, 0, 0, 0) 5%,\n      rgba(0, 0, 0, 0) 95%,\n      rgba(0, 0, 0, 0.2) 100%\n    );}",
          ""
        ),
        J = function (e) {
          return (0, p.css)("&::before{height:", e, "px;}", "");
        },
        $ = (0, p.css)(
          "position:relative;display:inline-block;height:1em;background:white;line-height:1em;color:",
          R.P6,
          ";box-sizing:content-box;",
          ""
        ),
        ee = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        te = function (e) {
          return (0, p.css)("padding:", e, ";", "");
        },
        ne = {
          name: "5xnk0u",
          styles:
            "display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.1;border:1px solid #000",
        },
        re = (0, v.cd)(
          function (e) {
            var t = e.textSize,
              n = e.borderSize,
              r = e.padding,
              o = [X, (0, v.fn)(J, n)],
              s = [$, (0, v.fn)(ee, t), (0, v.fn)(te, r)];
            return function (e) {
              var t,
                n = e.className,
                r =
                  null === (t = (0, i.useContext)(a.F).cover) || void 0 === t
                    ? void 0
                    : t.setBook,
                u = null === r || void 0 === r ? void 0 : r.count;
              return "number" !== typeof u || !Number.isFinite(u) || u <= 0
                ? (0, c.jsx)(c.Fragment, {})
                : (0, c.jsx)("span", {
                    css: W,
                    className: n,
                    children: (0, c.jsxs)("span", {
                      css: o,
                      children: [
                        (0, c.jsxs)("span", {
                          css: s,
                          children: [u, "\uad8c \uc138\ud2b8"],
                        }),
                        (0, c.jsx)("span", { css: ne }),
                      ],
                    }),
                  });
            };
          },
          {
            textSize: [{ value: 12 }],
            borderSize: [{ value: 2 }],
            padding: [{ value: "5px 7px" }],
          }
        ),
        oe = n(59610),
        ie = n(21829),
        ae = n(23340),
        se = n(17529);
      var ce = function (e) {
          return (0, p.css)("width:", e, "px;", "");
        },
        ue = {
          name: "mbs6x",
          styles: "display:flex;width:100%;height:100%;position:relative",
        },
        le = (0, p.css)(
          "padding-bottom:142%;height:0;background-image:linear-gradient(147deg, ",
          R.Yi,
          ", #edeff2 55%, ",
          R.Yi,
          ");",
          ""
        ),
        de = function (e) {
          return (0, p.css)(
            "display:block;width:100%;max-height:",
            Math.floor(1.618 * e - 10),
            "px;",
            ""
          );
        },
        fe = {
          name: "t9zd76",
          styles:
            "position:absolute;display:block;width:100%;height:100%;top:0;left:0;border:1px solid black;opacity:0.1",
        },
        pe = {
          name: "jtffqv",
          styles:
            "position:absolute;display:block;width:100%;height:100%;top:0;left:0;border:1px solid transparent;background:linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.2) 0%,\n    rgba(0, 0, 0, 0) 5%,\n    rgba(0, 0, 0, 0) 95%,\n    rgba(0, 0, 0, 0.2) 100%\n  )",
        },
        me = ["children"],
        ve = ["children"];
      function ge(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var xe = (0, v.cd)(function () {
          return function (e) {
            var t = e.children,
              n = (0, k.Z)(e, me);
            return (0,
            c.jsx)("span", he(he({ css: fe }, n), {}, { children: t }));
          };
        }),
        be = (0, v.cd)(function () {
          return function (e) {
            var t = e.children,
              n = (0, k.Z)(e, ve);
            return (0,
            c.jsx)("div", he(he({ css: pe }, n), {}, { children: t }));
          };
        }),
        ke = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = e.lazyload,
              r = (0, v.fn)(ce, t),
              o = (0, v.fn)(de, t),
              u = (0, se.gE)(t),
              l = (0, v.Fm)(t);
            return function (e) {
              var t,
                d,
                f,
                p = e.className,
                m = e.children,
                v = (0, i.useContext)(a.F),
                g = (0, i.useState)(!1),
                h = g[0],
                x = g[1],
                b = (0, i.useState)(!n),
                k = b[0],
                j = b[1],
                y =
                  null === (t = (0, oe.x)()) || void 0 === t
                    ? void 0
                    : t.isVerifiedAdult,
                O =
                  (null === (d = v.cover) || void 0 === d
                    ? void 0
                    : d.isAdultOnly) && !y,
                B = (0, ae.z)(l, k),
                w = B.src,
                S = B.srcSet,
                P = O ? se.aw.src : w,
                N = O ? void 0 : S,
                D = !P,
                z = (0, ie.W)(function () {
                  return j(!0);
                }),
                R = n ? z : null,
                A = (0, i.useRef)(null);
              (0, i.useEffect)(
                function () {
                  var e;
                  x(!(null === (e = A.current) || void 0 === e || !e.complete));
                },
                [P]
              );
              var F = (0, i.useContext)(s.U).components,
                C = F.BookThumbnailGradient,
                I = F.BookThumbnailBorder;
              return (0, c.jsxs)("div", {
                css: r,
                className: p,
                ref: R,
                children: [
                  (0, c.jsxs)("div", {
                    css: ue,
                    children: [
                      (0, c.jsx)("img", {
                        css: [o, (D || !h || !k) && le, "", ""],
                        src: null !== P && void 0 !== P ? P : se.Kw.src,
                        srcSet: N,
                        sizes: u,
                        alt: null !== (f = v.title) && void 0 !== f ? f : "",
                        ref: A,
                        onLoad: function () {
                          return x(!0);
                        },
                      }),
                      (0, c.jsx)(C, {}),
                      (0, c.jsx)(I, {}),
                    ],
                  }),
                  m,
                ],
              });
            };
          },
          { size: [{ value: 80 }], lazyload: !1 }
        ),
        je = n(76152),
        ye = n(51813),
        Oe = n(57836);
      function Be(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Be(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Be(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Se = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              o = e.className,
              u = e.children,
              l = e.component,
              d = void 0 === l ? "span" : l,
              f = e.index,
              p = void 0 === f ? 0 : f,
              m = (0, i.useContext)(s.U),
              v = (0, i.useContext)(a.F),
              g = null === v || void 0 === v ? void 0 : v.bookId,
              h = null === v || void 0 === v ? void 0 : v.link;
            if (null === h || (void 0 === h && void 0 === g))
              return (0, i.createElement)(d, { className: o }, u);
            var x = void 0 !== h ? h : "/books/".concat(g);
            if (
              null !== (t = m.trackingData) &&
              void 0 !== t &&
              t.rdtTrackingURIParams
            ) {
              var b,
                k,
                j,
                y =
                  null === (b = v.trackingOptions) ||
                  void 0 === b ||
                  null === (k = b.rdtTrackingURIParams) ||
                  void 0 === k
                    ? void 0
                    : k.sectionArg;
              x = (0, Oe.WF)(
                x,
                we(
                  we(
                    we(
                      {},
                      null === (j = m.trackingData) || void 0 === j
                        ? void 0
                        : j.rdtTrackingURIParams
                    ),
                    y ? { sectionArg: y } : null
                  ),
                  {},
                  { sectionItemIdx: p }
                )
              );
            }
            var O = (0, c.jsx)("a", { href: x, className: o, children: u });
            if (
              !m.trackingData ||
              (null !== (n = v.trackingOptions) &&
                void 0 !== n &&
                n.disableTrackEvent)
            )
              return O;
            var B = we(
              we({ book_id: v.bookId }, m.trackingData.params),
              null === (r = v.trackingOptions) || void 0 === r
                ? void 0
                : r.extraParams
            );
            return (0,
            c.jsx)(ye.l, { screenName: m.trackingData.screenName, target: "book", params: B, children: O });
          };
        }),
        Pe = n(37687),
        Ne = (0, p.css)(
          "font-weight:normal;line-height:1.2em;overflow-wrap:break-word;color:",
          R.NA,
          ";",
          ""
        ),
        De = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        ze = (0, v.cd)(
          function (e) {
            var t = e.textSize,
              n = [Ne, (0, v.fn)(De, t)];
            return function (e) {
              var t = e.className,
                r = e.children;
              return (0, c.jsx)("p", { css: n, className: t, children: r });
            };
          },
          { textSize: [{ value: 12 }] }
        ),
        Re = n(26598),
        Ae = n(3890);
      var Fe = { name: "13llqis", styles: "display:flex;margin:6px 0" },
        Ce = (0, p.css)(
          "color:",
          R.NA,
          ";overflow-wrap:break-word;font-size:13px;",
          (0, Ae.Sf)(3, "1.5em"),
          ";",
          ""
        ),
        Ie = (0, v.cd)(
          function (e) {
            var t = e.maxChars,
              n = e.ellipsis;
            return function (e) {
              var r,
                o,
                u,
                l = e.className,
                d = e.index,
                f = void 0 === d ? 0 : d,
                p = (0, i.useContext)(s.U).components.BookLink,
                m =
                  null !==
                    (r =
                      null === (o = (0, i.useContext)(a.F).metadata) ||
                      void 0 === o ||
                      null === (u = o.extra) ||
                      void 0 === u
                        ? void 0
                        : u.description) && void 0 !== r
                    ? r
                    : "";
              return m
                ? (0, c.jsx)(p, {
                    css: Fe,
                    index: f,
                    children: (0, c.jsxs)("p", {
                      className: l,
                      css: Ce,
                      children: [m.slice(0, t), m.length > t && n],
                    }),
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { maxChars: 160, ellipsis: "" }
        ),
        Me = (0, v.cd)(
          function (e) {
            var t = e.maxChars,
              n = e.ellipsis;
            return function (e) {
              var r,
                o,
                u,
                l = e.className,
                d = e.index,
                f = void 0 === d ? 0 : d,
                p = (0, i.useContext)(s.U).components.BookLink,
                m =
                  null !==
                    (r =
                      null === (o = (0, i.useContext)(a.F).metadata) ||
                      void 0 === o ||
                      null === (u = o.extra) ||
                      void 0 === u
                        ? void 0
                        : u.description) && void 0 !== r
                    ? r
                    : "";
              if (!m) return (0, c.jsx)(c.Fragment, {});
              var v = (0, i.useMemo)(
                function () {
                  var e = (0, Re.C7)(m);
                  return e.length > t ? e.slice(0, t) + n : e;
                },
                [m]
              );
              return (0, c.jsx)(p, {
                css: Fe,
                index: f,
                children: (0, c.jsx)("p", {
                  className: l,
                  css: Ce,
                  children: v,
                }),
              });
            };
          },
          { maxChars: 160, ellipsis: "" }
        ),
        Te = Me,
        Ue = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              o = (0, i.useContext)(s.U).components.BookDefaultMetadataItem,
              u =
                null === (t = (0, i.useContext)(a.F).metadata) ||
                void 0 === t ||
                null === (n = t.extra) ||
                void 0 === n
                  ? void 0
                  : n.genre;
            return u
              ? (0, c.jsx)(o, { className: r, children: u })
              : (0, c.jsx)(c.Fragment, {});
          };
        });
      var Ee = {
          name: "1qtm54t",
          styles:
            "position:relative;display:flex;align-items:center;white-space:pre-wrap",
        },
        Ke = (0, p.css)("display:flex;&>*{", Ee, ";}", ""),
        He = (0, p.css)(
          "&>*+*{&::before{content:'';display:inline-block;background:",
          R.fw,
          ";width:1px;height:10px;margin:0 8px;}}",
          ""
        ),
        Ze = { name: "qdeacm", styles: "flex-direction:column" },
        qe = (0, v.cd)(function () {
          return function (e) {
            var t = e.children,
              n = e.index,
              r = void 0 === n ? 0 : n,
              o = (0, i.useContext)(s.U).components,
              a = o.BookMetadataItems,
              u = o.BookTitle;
            return (0,
            c.jsxs)(c.Fragment, { children: [(0, c.jsx)(u, { index: r }), (0, c.jsx)(a, { children: t })] });
          };
        }),
        Le = (0, v.cd)(function () {
          return function (e) {
            var t = e.children,
              n = (0, i.useContext)(s.U).components,
              r = n.BookAuthors,
              o = n.BookPrice,
              a = n.BookStarRate,
              u = n.BookSeries;
            return (0,
            c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r, {}), (0, c.jsx)(a, {}), (0, c.jsx)(u, {}), (0, c.jsx)(o, {}), t] });
          };
        }),
        Ve = [{ value: !1 }],
        Ge = (0, v.cd)(function () {
          return function (e) {
            var t = e.collapse,
              n = void 0 === t ? Ve : t,
              r = e.className,
              o = e.children,
              a = (0, i.useMemo)(
                function () {
                  return [
                    Ke,
                    (0, v.fn)(function (e) {
                      return e ? Ze : He;
                    }, n),
                  ];
                },
                [n]
              );
            return (0, c.jsx)("div", { css: a, className: r, children: o });
          };
        }),
        Ye = n(78632);
      function _e(e, t) {
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
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var We = (0, v.cd)(
          function (e) {
            var t = e.showAsLink;
            return function (e) {
              var n,
                r,
                o,
                u = e.className,
                l = (0, i.useContext)(s.U),
                d = l.components.BookDefaultMetadataItem,
                f = l.trackingData,
                p = (0, i.useContext)(a.F),
                m =
                  null === (n = p.metadata) ||
                  void 0 === n ||
                  null === (r = n.extra) ||
                  void 0 === r
                    ? void 0
                    : r.publisher;
              if (!m) return (0, c.jsx)(c.Fragment, {});
              var v = "/search?q=".concat(
                  encodeURIComponent("\ucd9c\ud310\uc0ac:".concat(m))
                ),
                g = t
                  ? (0, c.jsx)("a", { href: v, css: Ae.VV, children: m })
                  : (0, c.jsx)("span", { children: m }),
                h = Qe(
                  Qe(
                    { book_id: p.bookId, publisher_name: m },
                    null === f || void 0 === f ? void 0 : f.params
                  ),
                  null === (o = p.trackingOptions) || void 0 === o
                    ? void 0
                    : o.extraParams
                );
              return (0, c.jsx)(d, {
                className: u,
                children: (function () {
                  var e;
                  return !f ||
                    (null !== (e = p.trackingOptions) &&
                      void 0 !== e &&
                      e.disableTrackEvent) ||
                    !t
                    ? (0, c.jsx)(c.Fragment, { children: g })
                    : (0, c.jsx)(ye.l, {
                        screenName: f.screenName,
                        target: "publisher",
                        params: h,
                        children: g,
                      });
                })(),
              });
            };
          },
          { showAsLink: !0 }
        ),
        Xe = n(47919),
        Je = n(82056);
      var $e = {
          name: "6qciw6",
          styles: "margin-top:4px;display:flex;align-items:center",
        },
        et = {
          name: "1nrevy2",
          styles: "position:relative;display:inline-block",
        },
        tt = function (e) {
          return (0, p.css)("width:", 5 * e, "px;height:", e, "px;", "");
        },
        nt = {
          name: "1n54sli",
          styles: "position:absolute;top:0;left:0;overflow-x:hidden",
        },
        rt = (0, p.css)(nt, ";width:100%;color:", R.Nt, ";", ""),
        ot = function (e) {
          return (0, p.css)("height:", e, "px;", "");
        },
        it = (0, p.css)(nt, ";color:", R.rR, ";", ""),
        at = (0, p.css)(
          "color:",
          R.Tw,
          ";padding-top:1px;margin:0 2px;line-height:1em;",
          ""
        ),
        st = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        ct = (0, p.css)("font-weight:bold;color:", R.rR, ";", ""),
        ut = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        lt = (0, p.css)(
          "color:",
          R.rR,
          ";overflow-x:hidden;margin-right:2px;",
          ""
        ),
        dt = function (e) {
          return (0, p.css)("width:", e, "px;height:", e, "px;", "");
        },
        ft = (0, p.css)(lt, ";color:", R.Nt, ";", ""),
        pt = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = [ct, (0, v.fn)(ut, t)],
              r = [
                lt,
                (0, v.fn)(function (e) {
                  return dt(e - 2);
                }, t),
              ],
              o = [
                ft,
                (0, v.fn)(function (e) {
                  return dt(e - 2);
                }, t),
              ],
              u = [
                at,
                (0, v.fn)(function (e) {
                  return st(e - 1);
                }, t),
              ];
            return function (e) {
              var t,
                l = e.className,
                d = (0, i.useContext)(s.U).components.BookDefaultMetadataItem,
                f =
                  null === (t = (0, i.useContext)(a.F).metadata) || void 0 === t
                    ? void 0
                    : t.starRate;
              if (!f) return (0, c.jsx)(c.Fragment, {});
              var p = f.count,
                m = f.score;
              if ("number" !== typeof m || !Number.isFinite(m))
                return (0, c.jsx)(c.Fragment, {});
              var v = "number" === typeof p && Number.isFinite(p) && p >= 0,
                g = (0, Je.u)(null !== p && void 0 !== p ? p : 0),
                h = Math.min(5, Math.max(0, m)).toFixed(1),
                x = ""
                  .concat(
                    v ? "\ucd1d \ub9ac\ubdf0\uc5b4 ".concat(g, "\uba85, ") : "",
                    "\uad6c\ub9e4\uc790 \ud3c9\uade0 \ubcc4\uc810 "
                  )
                  .concat(h, "\uc810");
              return (0, c.jsxs)(d, {
                css: $e,
                className: l,
                "aria-label": x,
                children: [
                  (0, c.jsx)("span", {
                    css: n,
                    children:
                      m > 0
                        ? (0, c.jsxs)(c.Fragment, {
                            children: [
                              (0, c.jsx)(E.N0, { css: r }),
                              "".concat(h, "\uc810 "),
                            ],
                          })
                        : (0, c.jsx)(E.N0, { css: o }),
                  }),
                  v &&
                    (0, c.jsx)("span", {
                      css: u,
                      children: "(".concat(g, ")"),
                    }),
                ],
              });
            };
          },
          { size: [{ value: 13 }] }
        ),
        mt = (0, v.cd)(
          function (e) {
            var t = e.size,
              n = e.showCountUnit,
              r = e.textSize,
              o = void 0 === r ? t : r,
              u = [et, (0, v.fn)(tt, t)],
              l = [rt, (0, v.fn)(ot, t)],
              d = [it, (0, v.fn)(ot, t)],
              f = [at, (0, v.fn)(st, o)];
            return function (e) {
              var t,
                r = e.className,
                o = (0, i.useContext)(s.U).components.BookDefaultMetadataItem,
                m =
                  null === (t = (0, i.useContext)(a.F).metadata) || void 0 === t
                    ? void 0
                    : t.starRate;
              if (!m) return (0, c.jsx)(c.Fragment, {});
              var v = m.count,
                g = m.score;
              if ("number" !== typeof g || !Number.isFinite(g))
                return (0, c.jsx)(c.Fragment, {});
              var h = (Math.min(5, Math.max(0, g)) / 5) * 100,
                x = "number" === typeof v && Number.isFinite(v) && v >= 0,
                b = (0, Je.u)(null !== v && void 0 !== v ? v : 0),
                k = g.toFixed(1),
                j = ""
                  .concat(
                    x ? "\ucd1d \ub9ac\ubdf0\uc5b4 ".concat(b, "\uba85, ") : "",
                    "\uad6c\ub9e4\uc790 \ud3c9\uade0 \ubcc4\uc810 "
                  )
                  .concat(k, "\uc810");
              return (0, c.jsxs)(o, {
                css: $e,
                className: r,
                "aria-label": j,
                children: [
                  (0, c.jsxs)("span", {
                    css: u,
                    children: [
                      (0, c.jsx)(E.N0, { css: l }),
                      (0, c.jsx)(E.N0, {
                        css: [d, (0, p.css)("width:", h, "%;", ""), "", ""],
                      }),
                    ],
                  }),
                  x &&
                    (0, c.jsxs)("span", {
                      css: f,
                      children: [v, n && "\uba85"],
                    }),
                ],
              });
            };
          },
          {
            size: [{ value: 11 }],
            textSize: [{ value: 11 }],
            showCountUnit: !0,
          }
        ),
        vt = mt;
      var gt = { name: "1em3kqr", styles: "letter-spacing:-0.03em" },
        ht = function (e) {
          return (0, p.css)("font-size:", e, "px;", "");
        },
        xt = (0, p.css)(
          "font-weight:bold;color:",
          R.P6,
          ";",
          (0, Ae.Sf)(2, "1.4em"),
          ";",
          ""
        ),
        bt = (0, p.css)("font-weight:normal;color:", R.NA, ";", ""),
        kt = (0, v.cd)(
          function (e) {
            var t = e.textSize,
              n = e.light,
              r = e.hoverEffect,
              o = [
                xt,
                (0, v.fn)(ht, t),
                (0, v.fn)(function (e) {
                  return (0, p.css)(e && bt, ";", "");
                }, n),
              ];
            return function (e) {
              var t,
                n,
                u = e.className,
                l = e.children,
                d = e.index,
                f = void 0 === d ? 0 : d,
                p = (0, i.useContext)(s.U).components,
                m = p.BookLink,
                v = p.BookTitleBadgeRenderer,
                g = (0, i.useContext)(a.F),
                h = null !== g.link,
                x = g.title;
              return x &&
                !1 !==
                  (null === (t = g.metadata) ||
                  void 0 === t ||
                  null === (n = t.title) ||
                  void 0 === n
                    ? void 0
                    : n.showTitle)
                ? (0, c.jsxs)("h3", {
                    css: gt,
                    children: [
                      (0, c.jsx)(v, {}),
                      (0, c.jsxs)(m, {
                        css: [].concat(o, [r && h && Ae.VV, ""]),
                        className: u,
                        index: f,
                        children: [x, l],
                      }),
                    ],
                  })
                : (0, c.jsx)(c.Fragment, {});
            };
          },
          { textSize: [{ value: 13 }], light: [{ value: !1 }], hoverEffect: !1 }
        );
      var jt = (0, p.css)(
          "background:",
          R._y,
          ";height:20px;line-height:20px;padding:0 5px;vertical-align:top;",
          ""
        ),
        yt = { name: "112hgap", styles: "color:$ colors.lightSteelBlue90" },
        Ot = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              o = e.className,
              u = (0, i.useContext)(s.U).components.BookTitleBadge;
            return (
              null === (t = (0, i.useContext)(a.F).metadata) ||
              void 0 === t ||
              null === (n = t.extra) ||
              void 0 === n ||
              null === (r = n.titleBadge) ||
              void 0 === r
                ? void 0
                : r.isDeductionUnavailable
            )
              ? (0, c.jsx)(u, {
                  css: jt,
                  className: o,
                  children: (0, c.jsx)("span", {
                    css: yt,
                    children: "\ube44\uacf5\uc81c \ub3c4\uc11c",
                  }),
                })
              : (0, c.jsx)(c.Fragment, {});
          };
        });
      var Bt = { name: "1hx7lvw", styles: "background:#e7e9ff;color:#4e55a2" },
        wt = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r,
              o = e.className,
              u = (0, i.useContext)(s.U).components.BookTitleBadge;
            return (
              null === (t = (0, i.useContext)(a.F).metadata) ||
              void 0 === t ||
              null === (n = t.extra) ||
              void 0 === n ||
              null === (r = n.titleBadge) ||
              void 0 === r
                ? void 0
                : r.isSomedeal
            )
              ? (0, c.jsx)(u, {
                  css: Bt,
                  className: o,
                  children: (0, c.jsx)(E.TG, {
                    "aria-label": "\uc378\ub51c\ub3c4\uc11c",
                  }),
                })
              : (0, c.jsx)(c.Fragment, {});
          };
        });
      var St = {
          name: "1rh1ttc",
          styles:
            "display:inline-block;border-radius:3px;color:black;line-height:12px;text-align:center;padding:4px 0",
        },
        Pt = (0, v.cd)(function () {
          return function (e) {
            var t = e.className,
              n = e.children;
            return (0, c.jsx)("p", { css: St, className: t, children: n });
          };
        });
      var Nt = {
          name: "1fuwqkx",
          styles: "display:inline-flex;margin-top:1px",
        },
        Dt = (0, v.cd)(function () {
          return function (e) {
            var t,
              n,
              r = e.className,
              o = (0, i.useContext)(s.U).components,
              u = o.BookDeductionUnavailableTitleBadge,
              l = o.BookSomedealTitleBadge;
            return null !== (t = (0, i.useContext)(a.F).metadata) &&
              void 0 !== t &&
              null !== (n = t.extra) &&
              void 0 !== n &&
              n.titleBadge
              ? (0, c.jsxs)("div", {
                  css: Nt,
                  className: r,
                  children: [(0, c.jsx)(u, {}), (0, c.jsx)(l, {})],
                })
              : (0, c.jsx)(c.Fragment, {});
          };
        }),
        zt = n(69505),
        Rt = (0, v.cd)(
          function (e) {
            var t = e.clipCount,
              n = e.clipBreakPoint;
            return function (e) {
              var r,
                o,
                u,
                l,
                d = e.className,
                f = (0, i.useContext)(s.U).components,
                p = f.BookAuthorItem,
                m = f.BookDefaultMetadataItem,
                v = (0, i.useContext)(a.F),
                g =
                  null === (r = v.metadata) || void 0 === r
                    ? void 0
                    : r.authors,
                h =
                  null === (o = v.metadata) ||
                  void 0 === o ||
                  null === (u = o.extra) ||
                  void 0 === u ||
                  null === (l = u.translators) ||
                  void 0 === l
                    ? void 0
                    : l.showTranslators;
              if (!g || !Array.isArray(g) || !h)
                return (0, c.jsx)(c.Fragment, {});
              var x = g.filter(function (e) {
                return (
                  "translator" ===
                  (null === e || void 0 === e ? void 0 : e.role)
                );
              });
              if (0 === x.length) return (0, c.jsx)(c.Fragment, {});
              var b = x.map(function (e, t) {
                return (0,
                c.jsx)(p, { author: e }, e.id || "translator-".concat(t));
              });
              return (0, c.jsxs)(m, {
                className: d,
                children: [
                  null !== t && b.length > n
                    ? (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, zt.P)(b.slice(0, t), ", "),
                          " \uc678 ".concat(b.length - t, "\uba85"),
                        ],
                      })
                    : (0, zt.P)(b.slice(0, n), ", "),
                  " \uc5ed",
                ],
              });
            };
          },
          { clipCount: 1, clipBreakPoint: 2 }
        ),
        At = n(28943),
        Ft = (0, v.cd)(function () {
          return function (e) {
            var t = e.elementRef,
              n = e.className;
            return (0, c.jsx)("div", { ref: t, className: n });
          };
        }),
        Ct = f.S,
        It = f.S,
        Mt = f.S,
        Tt = f.S,
        Ut = f.S,
        Et = f.S;
      function Kt(e, t) {
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
      function Ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Kt(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Kt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Zt = (0, i.memo)(function (e) {
          var t = e.children,
            n = e.components,
            o = e.presets,
            a = e.trackingData,
            u = (0, i.useMemo)(
              function () {
                return (null !== o && void 0 !== o ? o : []).reduce(function (
                  e,
                  t
                ) {
                  return t(e);
                },
                r);
              },
              [o]
            ),
            l = (0, i.useMemo)(
              function () {
                return Ht(Ht({}, u), n);
              },
              [u, n]
            ),
            d = (0, i.useMemo)(
              function () {
                return { components: l, trackingData: a };
              },
              [l, a]
            );
          return (0, c.jsx)(s.U.Provider, { value: d, children: t });
        }),
        qt = n(64140),
        Lt = n(35212),
        Vt = (n(36567), n(68436)),
        Gt = n(70767),
        Yt = n(37624),
        _t = (n(60521), n(16118));
    },
    64140: function (e, t, n) {
      n.d(t, {
        nK: function () {
          return C;
        },
        SL: function () {
          return S;
        },
        og: function () {
          return R;
        },
        x$: function () {
          return P;
        },
        MS: function () {
          return B;
        },
        _H: function () {
          return N;
        },
        zI: function () {
          return D;
        },
      });
      var r = n(31737),
        o = n(36567),
        i = n(68436);
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = { name: "1lv1yo7", styles: "display:inline-flex" },
        u = function (e) {
          var t = e.BookDefaultMetadataItem,
            n = e.BookStarRateMinimal,
            r = e.BookTitle,
            a = e.BookTitleBadgeRenderer,
            u = e.BookAuthors,
            l = e.BookPriceItem;
          return s(
            s({}, e),
            {},
            {
              BookMetadataRenderer: o.F,
              BookMetadataItems: o.B,
              BookRenderer: i.D,
              BookDefaultMetadataItem: t.withOptions({
                textSize: [{ value: 13 }],
              }),
              BookStarRate: n.withOptions({ size: [{ value: 13 }] }),
              BookPriceItem: l.withOptions({
                showAdditionalInfo: !0,
                textSize: [{ value: 13 }],
              }),
              BookTitle: r.withOptions({
                textSize: [{ value: 14 }],
                hoverEffect: !0,
              }),
              BookTitleBadgeRenderer: a.addStyle(c),
              BookAuthors: u.withOptions({
                textSize: [{ value: 14 }],
                clipCount: 2,
              }),
            }
          );
        };
      function l(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = function (e) {
          var t = e.BookAuthors,
            n = e.BookDefaultMetadataItem,
            r = e.BookStarRateFull,
            o = e.BookPriceItem;
          return d(
            d({}, e),
            {},
            {
              BookAuthors: t.withOptions({ excludeTranslators: !1 }),
              BookDefaultMetadataItem: n.withOptions({
                textSize: [{ value: 12 }],
              }),
              BookStarRate: r.withOptions({ size: [{ value: 11 }] }),
              BookPriceItem: o.withOptions({
                showAdditionalInfo: !1,
                textSize: [{ value: 12 }],
              }),
            }
          );
        },
        p = n(17774),
        m = n(35212),
        v = n(70767),
        g = n(37624),
        h = n(60521),
        x = n(16118),
        b = function (e) {
          return e <= m.oY.EXTRA_SMALL
            ? { cover: m.VI, metadata: m.rn, isDefault: !1 }
            : e <= m.oY.SMALL
            ? { cover: m.tw, metadata: m.aT, isDefault: !1 }
            : e >= m.oY.LARGE
            ? { cover: m.Ir, metadata: m.n6, isDefault: !1 }
            : { cover: m.x, metadata: m.BH, isDefault: !0 };
        },
        k = ["value"];
      function j(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var O = {
          BookAdultBadge: v.Qe,
          BookAdultIndicator: v.DX,
          BookBadge: v.R5,
          BookBadgeRenderer: v.OF,
          BookBadgeText: v.gJ,
          BookCoverDimmer: v.XV,
          BookCoverRenderer: v.EU,
          BookDiscountBadge: v.$7,
          BookFreebook: v.sO,
          BookFreebookBadge: v.XH,
          BookImageBadge: v.Q1,
          BookNewBadge: v.sn,
          BookOriginal: v.Mh,
          BookPurchaseStatus: v.pN,
          BookRentalBadge: v.AS,
          BookSelectBadge: v.MR,
          BookSetbook: v.yQ,
          BookThumbnail: v.Jj,
          BookThumbnailBorder: v.Yo,
          BookThumbnailGradient: v.RS,
          BookWaitFreeBadge: v.KJ,
          BookAuthors: g.dR,
          BookAuthorItem: g.v0,
          BookDefaultMetadataItem: g.ej,
          BookMetadataItems: g.Of,
          BookMetadataItemGroup: g.iz,
          BookMetadataRenderer: g.Kd,
          BookPrice: g.Mx,
          BookPriceItem: g.Us,
          BookPriceInfoItem: g.DG,
          BookPriceDiscountItem: g.pF,
          BookPriceAdditionalInfoItem: g.rW,
          BookSeries: g._D,
          BookSeriesCompletion: g.Yp,
          BookStarRateMinimal: g.DA,
          BookStarRateFull: g.iW,
          BookStarRate: g.Gi,
          BookTitle: g.zo,
          BookRenderer: h.E,
          BookTouchArea: h.Q,
        },
        B = function (e) {
          return y(y({}, e), O);
        },
        w = function (e, t, n) {
          var o = y({}, e);
          return (
            Object.keys(t).forEach(function (e) {
              var i = o[e],
                a = t[e];
              a &&
                (Object.keys(a).forEach(function (e) {
                  i = i.addResponsiveOption(
                    e,
                    y(y({}, n), {}, { value: a[e] })
                  );
                }),
                (o = y(y({}, o), {}, (0, r.Z)({}, e, i))));
            }),
            o
          );
        },
        S = function (e) {
          return function (t) {
            return e.reduce(function (e, t) {
              var n = b(t.value);
              return n.isDefault ? e : w(e, n.cover, t);
            }, y({}, t));
          };
        },
        P = function (e) {
          return function (t) {
            return e.reduce(function (e, t) {
              var n = b(t.value);
              return n.isDefault ? e : w(e, n.metadata, t);
            }, y({}, t));
          };
        },
        N = function (e) {
          return function (t) {
            var n = y({}, t);
            return (
              (n.BookRenderer = n.BookRenderer.withOptions({ type: e })),
              (n.BookThumbnail = n.BookThumbnail.withOptions({ type: e })),
              n
            );
          };
        },
        D = function (e) {
          return function (t) {
            var n = e.map(function (e) {
                var t = e.value.type,
                  n = void 0 === t ? m.oY.DEFAULT : t;
                return y(y({}, (0, p.Z)(e, k)), {}, { value: n });
              }),
              r = S(n)(t),
              o = P(n)(r);
            return N(e)(o);
          };
        },
        z = {
          2: {
            BookSkeleton: x.DU,
            BookMetadataItems: x.Nf,
            BookMetadataRenderer: x.Pt,
            BookFastRenderer: x.Kx,
          },
          3: {
            BookSkeleton: x.a2,
            BookMetadataItems: x.qn,
            BookMetadataRenderer: x.Nl,
            BookFastRenderer: x.hm,
          },
          5: {
            BookSkeleton: x.WH,
            BookMetadataItems: x.uN,
            BookMetadataRenderer: x.J4,
            BookFastRenderer: x.Hw,
          },
        },
        R = function (e) {
          return function (t) {
            var n = y({}, t);
            return (
              (n.BookAuthors = n.BookAuthors.withOptions({
                clipCount: null,
                clipBreakPoint: Number.POSITIVE_INFINITY,
              })),
              (n.BookSkeleton = z[e].BookSkeleton),
              (n.BookMetadataRenderer = z[e].BookMetadataRenderer),
              (n.BookMetadataItems = z[e].BookMetadataItems),
              n
            );
          };
        };
      function A(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = function (e, t) {
        return function (n) {
          var r = "landscape" === e ? u : f,
            o = (function (e) {
              return function (t) {
                var n = "number" === typeof e ? [{ value: e }] : e,
                  r = t.BookThumbnail,
                  o = t.BookRenderer,
                  i = F(
                    F({}, t),
                    {},
                    {
                      BookThumbnail: r.withOptions({ size: n }),
                      BookRenderer: o.withOptions({ size: n }),
                    }
                  );
                return (
                  n.forEach(function (e) {
                    if (e.value <= 60) {
                      var t = i.BookAdultIndicator,
                        n = i.BookBadge,
                        r = i.BookDiscountBadge,
                        o = i.BookNewBadge,
                        a = i.BookRentalBadge,
                        s = i.BookSetbook,
                        c = i.BookTitle;
                      (i.BookAdultIndicator = t
                        .addResponsiveOption(
                          "size",
                          F(F({}, e), {}, { value: 15 })
                        )
                        .addResponsiveOption(
                          "offset",
                          F(F({}, e), {}, { value: 2 })
                        )),
                        (i.BookBadge = n.addResponsiveOption(
                          "size",
                          F(F({}, e), {}, { value: 32 })
                        )),
                        (i.BookDiscountBadge = r
                          .addResponsiveOption(
                            "numberSize",
                            F(F({}, e), {}, { value: 12 })
                          )
                          .addResponsiveOption(
                            "percentSize",
                            F(F({}, e), {}, { value: 10 })
                          )),
                        (i.BookNewBadge = o.addResponsiveOption(
                          "textSize",
                          F(F({}, e), {}, { value: 10 })
                        )),
                        (i.BookRentalBadge = a.addResponsiveOption(
                          "textSize",
                          F(F({}, e), {}, { value: 12 })
                        )),
                        (i.BookSetbook = s.addResponsiveOption(
                          "textSize",
                          F(F({}, e), {}, { value: 11 })
                        )),
                        (i.BookTitle = c
                          .addResponsiveOption(
                            "textSize",
                            F(F({}, e), {}, { value: 12 })
                          )
                          .addResponsiveOption(
                            "light",
                            F(F({}, e), {}, { value: !0 })
                          ));
                    }
                    if (e.value >= 150) {
                      var u = i.BookSetbook;
                      i.BookSetbook = u.addResponsiveOption(
                        "textSize",
                        F(F({}, e), {}, { value: 13 })
                      );
                    }
                    if (e.value >= 160) {
                      var l = i.BookSetbook;
                      i.BookSetbook = l
                        .addResponsiveOption(
                          "textSize",
                          F(F({}, e), {}, { value: 16 })
                        )
                        .addResponsiveOption(
                          "borderSize",
                          F(F({}, e), {}, { value: 3 })
                        )
                        .addResponsiveOption(
                          "padding",
                          F(F({}, e), {}, { value: "10px" })
                        );
                    }
                  }),
                  i
                );
              };
            })(t);
          return r(o(n));
        };
      };
    },
    69505: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      var r = function (e, t) {
        return e.reduce(function (e, n, r, o) {
          return e.push(n), r === o.length - 1 || e.push(t), e;
        }, []);
      };
    },
    17529: function (e, t, n) {
      n.d(t, {
        aw: function () {
          return o;
        },
        Zs: function () {
          return s;
        },
        Kw: function () {
          return i;
        },
        m6: function () {
          return a;
        },
        gE: function () {
          return d;
        },
        Qb: function () {
          return f;
        },
        Jn: function () {
          return u;
        },
        cu: function () {
          return l;
        },
        O3: function () {
          return c;
        },
      });
      var r = n(17285),
        o = {
          src: "https://static.ridicdn.net/_next/static/media/cover_adult.f68f49ef.png",
          height: 450,
          width: 300,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAIBAMAAADD3ygIAAAAJFBMVEXm6Ovm5+vl5+vl5+rk5unj5enj5eji5eji5Ofh4+bg4+bb3uI7/F0dAAAAJ0lEQVR42mMwYDBgYC5mYGDZxsBgkmLAENnlwMDAwMBgbAwUF2IAAEkqBCdTqrKuAAAAAElFTkSuQmCC",
        },
        i = {
          src: "https://static.ridicdn.net/_next/static/media/cover_lazyload.2d6fa979.png",
          height: 450,
          width: 300,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAIBAMAAADD3ygIAAAAHlBMVEXn6ezm6Ovm5+vl5+vl5+rh5Ofh4+fh4+be4OTd4OMZsHfhAAAAIUlEQVR42mNwcXFgEHERYHBkdGAQbxVgEJ8GYkPERJQFAEvsBE0jx7vqAAAAAElFTkSuQmCC",
        },
        a = {
          src: "https://static.ridicdn.net/_next/static/media/cover_transparent.6b10d080.png",
          height: 450,
          width: 300,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAADklEQVR4nGNkwAIGoSAAA5wACY4+a1QAAAAASUVORK5CYII=",
        },
        s = [
          { width: 90, type: "small" },
          { width: 120, type: "small", dpi: "xhdpi" },
          { width: 165, type: "large" },
          { width: 180, type: "small", dpi: "xxhdpi" },
          { width: 220, type: "large", dpi: "xhdpi" },
          { width: 225, type: "xlarge" },
          { width: 300, type: "xlarge", dpi: "xhdpi" },
          { width: 330, type: "large", dpi: "xxhdpi" },
          { width: 450, type: "xlarge", dpi: "xxhdpi" },
          { width: 480, type: "xxlarge" },
          { width: 640, type: "xxlarge", dpi: "xhdpi" },
          { width: 960, type: "xxlarge", dpi: "xxhdpi" },
        ],
        c = function (e, t) {
          var n = e.split("#"),
            o = (0, r.Z)(n, 2),
            i = o[0],
            a = o[1],
            s = void 0 === a ? "" : a,
            c = i.split("?"),
            u = (0, r.Z)(c, 2),
            l = u[0],
            d = u[1],
            f = (void 0 === d ? "" : d)
              .split("&")
              .filter(function (e) {
                return e && !e.startsWith("dpi=");
              })
              .concat(t ? "dpi=".concat(t) : [])
              .join("&");
          return ""
            .concat(l)
            .concat(f ? "?".concat(f) : "")
            .concat(s ? "#".concat(s) : "");
        },
        u = function (e, t, n) {
          var r = null;
          return (
            "string" ===
              typeof (null === n || void 0 === n ? void 0 : n[e.type]) &&
              (r = n[e.type]),
            t &&
              (r = ""
                .concat("https://img.ridicdn.net/cover/")
                .concat(t, "/")
                .concat(e.type, "#1")),
            r ? c(r, e.dpi) : null
          );
        },
        l = function (e, t, n, r) {
          var o =
            t.find(function (t) {
              return t.width >= e;
            }) || t[t.length - 1];
          return u(o, n, r);
        },
        d = function (e) {
          return e
            .map(function (e) {
              var t = [];
              return (
                e.orBelow && t.push("(max-width: ".concat(e.orBelow, "px)")),
                e.greaterThan &&
                  t.push("(min-width: ".concat(e.greaterThan + 1, "px)")),
                t.length
                  ? "".concat(t.join(" and "), " ").concat(e.value, "px")
                  : "".concat(e.value, "px")
              );
            })
            .join(", ");
        },
        f = function (e, t, n) {
          return e
            .map(function (e) {
              return { width: e.width, url: u(e, t, n) };
            })
            .filter(function (e) {
              return !!e.url;
            })
            .filter(function (e, t, n) {
              var r = e.url;
              return (
                n.findIndex(function (e) {
                  return e.url === r;
                }) === t
              );
            })
            .map(function (e) {
              var t = e.width,
                n = e.url;
              return "".concat(n, " ").concat(t, "w");
            })
            .join(", ");
        };
    },
    98928: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      });
      var r = n(32735),
        o = n(30423),
        i = n(21882),
        a = n(77902),
        s = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            s = e.screenName,
            c = e.target,
            u = e.params,
            l = (0, a.G)(function () {
              (0, o.jn)(s, c, u);
            }),
            d = (0, r.useMemo)(
              function () {
                return (0, i.l)([l, t]);
              },
              [t, l]
            );
          return (0, r.cloneElement)(n, { ref: d });
        });
    },
    66674: function (e, t, n) {
      n.d(t, {
        Xu: function () {
          return r.Xu;
        },
      });
      var r = n(55857);
      n(78764);
    },
    75541: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      var r = { white: "white", black: "black" };
    },
    82056: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r.formatNumber;
        },
      });
      var r = n(14805);
    },
    21882: function (e, t, n) {
      n.d(t, {
        l: function () {
          return r;
        },
      });
      var r = function (e) {
        return function (t) {
          e.forEach(function (e) {
            if ("function" === typeof e) e(t);
            else if (e) {
              e.current = t;
            }
          });
        };
      };
    },
    86432: function (e, t, n) {
      n.d(t, {
        Fm: function () {
          return f;
        },
        cd: function () {
          return c;
        },
        fn: function () {
          return d;
        },
      });
      var r = n(21515),
        o = n(31737),
        i = n(38839);
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            c = n,
            u = t(c),
            l = function (e) {
              return (0, i.jsx)(
                u,
                s(s({ css: a }, e), {}, { children: e.children })
              );
            };
          return (
            (l.addStyle = function (n) {
              var o = [].concat((0, r.Z)(a), [n]);
              return e(t, c, o);
            }),
            (l.addResponsiveOption = function (n, i) {
              var u,
                l = s(
                  s({}, c),
                  {},
                  (0, o.Z)(
                    {},
                    n,
                    [].concat(
                      (0, r.Z)(null !== (u = c[n]) && void 0 !== u ? u : []),
                      [i]
                    )
                  )
                );
              return e(t, l, a);
            }),
            (l.withOptions = function (n) {
              var r = s(s({}, c), n);
              return e(t, r, a);
            }),
            (l.getOptions = function () {
              return c;
            }),
            l
          );
        },
        u = n(75246),
        l = n(36962),
        d = function (e, t) {
          return t.length
            ? t
                .map(function (t) {
                  return t.orBelow && t.greaterThan
                    ? (0, l.vX)(t.greaterThan, t.orBelow, e(t.value))
                    : t.orBelow
                    ? (0, l.K2)(t.orBelow, e(t.value))
                    : t.greaterThan
                    ? (0, l.tS)(t.greaterThan, e(t.value))
                    : e(t.value);
                })
                .reduce(function (e, t) {
                  return (0, u.css)(e, ";", t, ";", "");
                })
            : (0, u.css)("", "");
        },
        f = function (e) {
          var t,
            n = e.find(function (e) {
              return !e.orBelow && !e.greaterThan;
            });
          return null !== (t = null === n || void 0 === n ? void 0 : n.value) &&
            void 0 !== t
            ? t
            : e[0].value;
        };
    },
  },
]);
