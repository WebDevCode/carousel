/* eslint-disable no-unused-vars */
import React from "react";
//Carousel js

const carouselContext = React.createContext({
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
    rdtTrackingURIParams: {
      sectionId: "",
    },
  },
});

const self = [].push([
  [5106],
  {
    65106: function (e, t, n) {
      //var r = n(31737); //_defineProperty Util from babel-preset-env
      //var React = n(32735); //previously was i
      //  s = n(98928); forwardRef
      var ForwardRefComp = React.forwardRef(function (props, ref) {
        const { children, screenName, target, params } = props;

        // var l = useIntersectionObserverRef(function () {
        //     (0, o.jn)(screenName, target, params); //E = m("view"),
        //   }),
        //   d = React.useMemo(
        //     function () {
        //       return (0, i.l)([l, ref]);
        //     },
        //     [ref, l]
        //   );
        return React.cloneElement(children, {
          ref,
        });
      });

      // a = n(38802); carousel Context
      //  c = n(93978),
      // var c = function (e) {
      //   var r = (0, n.useRef)(null),
      //     t = (0, n.useRef)(e);
      //   t.current = e;
      //   var o = (0, n.useCallback)(function () {
      //       t.current(), (r.current = setTimeout(o, 5e3));
      //     }, []),
      //     c = (0, n.useCallback)(
      //       function (e) {
      //         null !== r.current && window.clearTimeout(r.current),
      //           (r.current = e ? setTimeout(o, 5e3) : null);
      //       },
      //       [o]
      //     );
      //   return (
      //     (0, n.useEffect)(
      //       function () {
      //         return (
      //           c(!0),
      //           function () {
      //             return c(!1);
      //           }
      //         );
      //       },
      //       [c]
      //     ),
      //     {
      //       onToggle: c,
      //     }
      //   );
      // };
      function useAutoToggle(e) {
        const autoToggleRef = React.useRef(null);
        const toggleFunctionRef = React.useRef(e);
        toggleFunctionRef.current = e;

        const startAutoToggle = React.useCallback(() => {
          toggleFunctionRef.current();
          autoToggleRef.current = setTimeout(startAutoToggle, 5000);
        }, []);

        const toggleAutoToggle = React.useCallback(
          (autoToggle) => {
            if (autoToggleRef.current !== null) {
              window.clearTimeout(autoToggleRef.current);
            }
            autoToggleRef.current = autoToggle
              ? setTimeout(startAutoToggle, 5000)
              : null;
          },
          [startAutoToggle]
        );

        React.useEffect(() => {
          toggleAutoToggle(true);
          return () => {
            toggleAutoToggle(false);
          };
        }, [toggleAutoToggle]);

        return {
          onToggle: toggleAutoToggle,
        };
      }

      var o = n(49842);

      var u = n(98172);
      //  l = n(53736),
      function calculateCircularDistance(e, r, t) {
        var distance = (e - r + t) % t;
        if (distance > t / 2) {
          distance -= t;
        }
        return distance;
      }
      var f = n(55206),
        d = n(36962);
      //p = n(42530); switched with useItemsRefs Hook

      function useItemRefs() {
        const itemRefs = React.useRef([]);
        const refs = React.useRef([]);

        function getItemRef(index) {
          if (!itemRefs.current[index]) {
            itemRefs.current[index] = function (ref) {
              refs.current[index] = ref;
            };
          }
          return itemRefs.current[index];
        }

        return {
          itemRefs: refs,
          itemRef: getItemRef,
        };
      }
      //var m = n(30581);
      //var h = n(37344),
      //var x = n(58266);
      function useWindowWidth(e, initialState = false) {
        const [state, setState] = React.useState(initialState);

        React.useLayoutEffect(() => {
          const handleResize = () => {
            setState(window.innerWidth <= e);
          };
          window.addEventListener("resize", handleResize);

          // Initialize the state
          handleResize();

          // Remove the event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, [e]);

        return state;
      }
      // g = n(31861), modulefunction

      function createModuloFunction(e) {
        // This function returns a function that takes a number `n` as an argument
        return function (n) {
          // Calculate the remainder of `n` divided by `e`
          // This ensures that the result is always between 0 and `e-1`
          return ((n % e) + e) % e;
        };
      }
      var v = n(77303);
      //y = n(77514), debounce and throttle
      //replace with throttle-debounce npm package.
      function debounce(func, waitTime, immediate = false) {
        let timeoutId = null;

        return (...args) => {
          const isFirstCall = immediate && timeoutId === null;

          if (isFirstCall) {
            func(...args);
          }

          if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }

          timeoutId = setTimeout(() => {
            timeoutId = null;

            if (!isFirstCall) {
              func(...args);
            }
          }, waitTime);
        };
      }

      function throttle(callback, delay = 500, immediate = false) {
        let timeoutId,
          lastArgs,
          lastInvokeTime = 0,
          invokeCount = 0;

        return (...args) => {
          // If there is already a timeout waiting, just update the arguments to be used when the function is invoked
          if (timeoutId) {
            lastArgs = args;
            return;
          }

          // If we want to immediately invoke the function, or if there hasn't been a call within the delay time
          if (immediate && Date.now() - lastInvokeTime > delay) {
            callback(...args);
          } else {
            // Update the time of the last call, and add to the invoke count
            lastInvokeTime = Date.now();
            invokeCount += 1;
          }

          // Set a timeout to invoke the function with the last arguments used
          timeoutId = setTimeout(() => {
            // If there have been multiple calls within the delay time, only invoke the function once with the last arguments used
            if (invokeCount > 0) {
              callback(...lastArgs);
              invokeCount = 0;
            }

            timeoutId = null;
          }, delay);
        };
      }

      //  b = n(21882),
      var Emotion = n(75246);
      //j = n(43604);
      ///------ to be deleted
      // var r = n(75246),
      //   ooo = n(65490);
      // var rrrr,
      //   o000 = {
      //     K2: function () {
      //       return o.orBelow;
      //     },
      //     RR: function () {
      //       return r;
      //     },
      //     Rk: function () {
      //       return o.touchDevice;
      //     },
      //     tS: function () {
      //       return o.greaterThan;
      //     },
      //   };
      // //-----------
      var sectionCSS = (0, Emotion.css)(
        (0, Emotion.css)(
          "max-width:1170px;padding-left:30px;padding-right:30px;margin:0 auto;",
          (0, o.K2)(o.RR.DesktopSmall, {
            //was previously i.K2 and i.RR
            name: "1dw6hj0",
            styles: "padding-left:16px;padding-right:16px",
          }),
          ";",
          ""
        ),
        ";",
        (0, Emotion.css)(
          "margin-top:40px;",
          (0, o.K2)(o.RR.DesktopSmall, {
            name: "1d0nbku",
            styles: "margin-top:24px",
          }),
          ";&:first-of-type{margin-top:0;}",
          ""
        ),
        ";",
        ""
      );
      var sectionfirstDivCSS = (0, Emotion.css)(
        "position:relative;margin:0 ",
        -3,
        "px;max-width:",
        1116,
        "px;height:400px;",
        (0, d.K2)(
          d.RR.DesktopSmall,
          (0, Emotion.css)("margin-right:-", 92, "px;height:343px;", "")
        ),
        ";",
        ""
      );
      var buttonContainerCSS = (0, Emotion.css)(
        "position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;margin:0 ",
        3,
        "px;",
        (0, d.K2)(d.RR.DesktopSmall, (0, Emotion.css)("right:", 89, "px;", "")),
        ";",
        ""
      );
      var imageContainerCSS = {
        name: "11z2bg8",
        styles: "display:flex;width:100%;height:100%;overflow:hidden",
      };
      //function to clone an element. references file 5857
      var cloneElementFunction = n(51813);
      //jsx a element references file 7806
      var D = n(6030);
      //jsx element references file 7806
      var I = n(89532);
      //emotion css configured with tailwindcss used in header text of caption inside image
      var lineClampFunc = {
        Sf: (e, t) => Emotion.css`
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: ${e};
      -webkit-box-orient: vertical;
    
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
      word-wrap: break-word;
      white-space: normal;
    
      /* Fallback for IE */
      max-height: calc(${t} * ${e});
      line-height: ${t};
    `,
      };
      //emotion css for anchor element
      var anchorelementCSS = (0, Emotion.css)(
        "width:0;height:400px;[data-is-hydrated='false'] &{flex-grow:0;flex-basis:",
        46,
        "px;&[data-hydrate-expanded='true']{flex-grow:1;}&[data-hydrate-hidden='true']{flex-basis:0;}}",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "r67i2v",
          styles: "height:343px",
        }),
        ";",
        ""
      );
      var anchorFirstDivCSS = {
        name: "1a6zonz",
        styles:
          "position:relative;border-radius:6px;margin:0 3px;overflow:hidden;height:100%",
      };
      var anchorFirstDivDefaultCSS = (0, Emotion.css)(
        "background:",
        e.colors.grey100,
        ";border-radius:4px;",
        ""
      );
      var captionConatinerCSS = (0, Emotion.css)(
        "width:100vw;padding:40px;padding-top:0;padding-right:",
        46,
        "px;",
        (0, d.K2)(
          d.RR.DesktopSmall,
          (0, Emotion.css)(
            "padding:16px;padding-top:0;padding-right:",
            22,
            "px;padding-bottom:22px;",
            ""
          )
        ),
        ";",
        ""
      );
      var imageDivCSS = (0, Emotion.css)(
        "width:",
        1018,
        "px;height:400px;",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "17fug0j",
          styles: "width:735px;height:343px",
        }),
        ";",
        ""
      );
      var imageGradientCSS = { name: "1nv5fft", styles: "height:200px" };
      var SubTitleContainerDefaultCSS = (0, Emotion.css)(
        "max-width:calc(85% + 40px);",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "ywyji6",
          styles: "max-width:calc(85% + 16px)",
        }),
        ";",
        ""
      );
      var SubTitleContainerCSS = (0, Emotion.css)(
        "flex-basis:calc(85% + 40px);",
        (0, d.K2)(d.RR.DesktopSmall, {
          name: "8a5eh6",
          styles: "flex-basis:calc(85% + 16px)",
        }),
        ";",
        ""
      );
      var SubTitleContanerAddCSS = {
        name: "f3a5h6",
        styles:
          "display:flex;justify-content:space-between;align-items:flex-end;align-self:stretch",
      };
      var subTitleCSS = (0, Emotion.css)(
        SubTitleContainerDefaultCSS,
        ";",
        SubTitleContainerCSS,
        ";display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;",
        ""
      );
      var captionTitleCSS = (0, Emotion.css)(
        SubTitleContainerDefaultCSS,
        ";font-size:24px;",
        (0, lineClampFunc.Sf)(2, "30px"),
        ";white-space:pre-line;",
        (0, d.tS)(
          d.RR.DesktopSmall,
          (0, Emotion.css)(
            "font-size:32px;",
            (0, lineClampFunc.Sf)(2, "40px"),
            ";white-space:pre-line;",
            ""
          )
        ),
        ";",
        ""
      );
      var subTitlespanCSS = (0, Emotion.css)(
        SubTitleContainerDefaultCSS,
        ";",
        (0, d.tS)(
          d.RR.DesktopSmall,
          (0, Emotion.css)(
            "font-size:16px;",
            (0, lineClampFunc.Sf)(2, "19px"),
            ";white-space:pre-line;",
            ""
          )
        ),
        ";",
        ""
      );
      var badgeContainerCSS = { name: "5bhc30", styles: "margin-bottom:8px" };
      var ReactjsxRuntimeorEmotion = n(38839);
      var anchorElement = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemRef,
          r = e.screenName,
          i = void 0 === r ? "genre_home" : r,
          s = e.onItemClick,
          a = e.children;
        return (0,
        ReactjsxRuntimeorEmotion.jsx)(cloneElementFunction.l, { screenName: i, target: "top_carousel_cover", params: t.params, children: (0, ReactjsxRuntimeorEmotion.jsx)("a", { css: anchorelementCSS, href: t.contents.landing_url, ref: n, tabIndex: t.initialFlags.isExpanded ? 0 : -1, onClick: s, "data-hydrate-expanded": t.initialFlags.isExpanded, "data-hydrate-hidden": t.initialFlags.isHidden, children: a }) });
      });
      var anotherAnchorElement = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemRef,
          r = e.onItemClick;
        return (0,
        ReactjsxRuntimeorEmotion.jsx)(anchorElement, { item: t, itemRef: n, onItemClick: r, children: (0, ReactjsxRuntimeorEmotion.jsx)("div", { css: [anchorFirstDivDefaultCSS, anchorFirstDivCSS, "", ""] }) });
      });
      var altAnchorElement = (0, React.memo)(function (e) {
        var t = e.item,
          n = e.itemBackground,
          r = e.itemRef,
          i = e.onItemClick,
          c = e.contentRef,
          o = e.carouselLength,
          u = React.useContext(carouselContext).screenName;
        return (0,
        ReactjsxRuntimeorEmotion.jsx)(anchorElement, { screenName: u, item: t, itemRef: r, onItemClick: i, children: (0, ReactjsxRuntimeorEmotion.jsxs)("div", { css: anchorFirstDivCSS, children: [(0, ReactjsxRuntimeorEmotion.jsx)(D.k, { css: imageDivCSS, backgroundUrl: n, gradientColor: t.contents.gradation_color, gradientCss: imageGradientCSS }), (0, ReactjsxRuntimeorEmotion.jsx)(ForwardRefComp, { ref: c, screenName: u, target: "top_carousel_cover", params: t.params, children: (0, ReactjsxRuntimeorEmotion.jsxs)(I.f9, { css: captionConatinerCSS, children: [(0, ReactjsxRuntimeorEmotion.jsx)(I.pg, { css: badgeContainerCSS, badges: t.contents.badges }), (0, ReactjsxRuntimeorEmotion.jsx)(I.mI, { css: captionTitleCSS, children: t.contents.title }), (0, ReactjsxRuntimeorEmotion.jsxs)("div", { css: SubTitleContanerAddCSS, children: [(0, ReactjsxRuntimeorEmotion.jsxs)("div", { css: subTitleCSS, children: [(0, ReactjsxRuntimeorEmotion.jsx)(I.Wt, { css: subTitlespanCSS, children: t.contents.hooking_sentence }), (0, ReactjsxRuntimeorEmotion.jsx)(I.hU, { copyrights: t.contents.copyrights })] }), (0, ReactjsxRuntimeorEmotion.jsx)(I.eq, { index: t.index, length: o })] })] }) })] }) });
      });

      //next 3 function are from babel-preset-env: https://github.com/babel/babel/discussions/14062
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
          }
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? // eslint-disable-next-line no-loop-func
              ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : // eslint-disable-next-line no-loop-func
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function clamp(x, lower, upper) {
        return Math.min(upper, Math.max(lower, x));
      }
      var calculateFlags = function (e) {
        return { isHidden: e < 0 || e > 2, isExpanded: e >= 0 && e < 1 };
      };
      var calculateStyle = function (e) {
        var t = 1 - Math.abs(clamp(-1, e, 1)),
          n = 46 * clamp(0, e, 1),
          r = 46 * (3 - clamp(2, e, 3));
        return { grow: t, basis: Math.min(n, r) };
      };
      var calculateContentStyle = function (e) {
        return {
          offset: 32 * clamp(-1, e, 0),
          opacity: 1 - Math.abs(clamp(-1, e, 1)),
        };
      };
      var useTweenAnimation = function () {
        var e = (0, React.useRef)(0);
        return (0, React.useCallback)(function (t, n) {
          var r = Date.now(),
            i = e.current;
          e.current = r;
          var s = r - i,
            a = Math.abs(t);
          return s < 50
            ? { easing: v.w2, duration: 180 }
            : "snap" === n.name || s < 400
            ? { easing: v.w2, duration: Math.max(180, 560 * (1 - 0.5 * a)) }
            : { easing: v.rz, duration: 1e3 };
        }, []);
      };
      //doesn't seem to be used
      var te = {
        calculateFlags: calculateFlags,
        calculateStyle: calculateStyle,
        calculateContentStyle: calculateContentStyle,
        useTweenAnimation: useTweenAnimation,
      };
      const Carousel = React.memo(function (e) {
        var itemsFilled = e.itemsFilled, //t
          length = e.length, //n
          itemsFilledLength = itemsFilled.length, //u
          animationFrameRef = React.useRef(null), //v
          itemRefs = useItemRefs().itemRefs, //j
          getItemRef = useItemRefs().itemRef, //S
          contentRefs = useItemRefs().itemRefs, //I
          getContentRef = useItemRefs().itemRef, //O
          containerStyle = React.useRef(d.RR.DesktopDefault), //P
          onAnimationEnd = React.useRef(function (e) {}), //E
          triggerAnimationEnd = React.useCallback(function (e) {
            //M
            return onAnimationEnd.current(e);
          }, []),
          onAnimationStart = React.useRef(function () {}), //N
          updateItemPositions = React.useCallback(
            //z
            function (e) {
              onAnimationStart.current();
              contentRefs.current.forEach(function (t, n) {
                if (t) {
                  var r = n - e,
                    style = calculateStyle(r); //i
                  t.style.setProperty("flex-grow", "".concat(style.grow));
                  t.style.setProperty(
                    "flex-basis",
                    "".concat(style.basis, "px")
                  );
                  var contentRef = itemRefs.current[n];
                  if (contentRef) {
                    var contentStyle = calculateContentStyle(r);
                    contentRef.style.setProperty(
                      "transform",
                      "translate(".concat(contentStyle.offset, "px, 0)")
                    );
                    contentRef.style.setProperty(
                      "opacity",
                      "".concat(contentStyle.opacity)
                    );
                  }
                }
              });
            },
            [itemRefs, contentRefs]
          );
        var setItemWidths = React.useCallback(
          function () {
            itemRefs.current.forEach(function (itemRef) {
              itemRef &&
                itemRef.style.setProperty(
                  "width",
                  "".concat(containerStyle.current, "px")
                );
            });
          },
          [itemRefs]
        );
        React.useLayoutEffect(function () {
          return setItemWidths();
        });
        var animate = useTweenAnimation(); //K
        var calculateSpace = React.useMemo(
            function () {
              return createModuloFunction(itemsFilledLength - 3);
            },
            [itemsFilledLength]
          ),
          maxSwipe = React.useRef(1),
          //This is for mobile swiping. references file 47
          U = (0, f.Qt)(
            {
              updateItem: updateItemPositions,
              updateIsSwiping: triggerAnimationEnd,
            },
            { itemWidth: containerStyle, maxSwipeItem: maxSwipe },
            { animation: animate, space: calculateSpace }
          ),
          B = U.swipeRef,
          q = U.indexRef,
          W = U.updateIndex;
        (0, React.useEffect)(
          function () {
            var e = function () {
              if (animationFrameRef.current) {
                containerStyle.current =
                  animationFrameRef.current.clientWidth - 92;
                setItemWidths();
                W();
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [updateItemPositions, setItemWidths, W]
        );
        var hasStarted = React.useRef(false), //(0, React.useRef)(!1),
          isAnimating = React.useRef(false), //(0, React.useRef)(!1),
          toggleFunction = useAutoToggle(function () {
            return W(q.current + 1);
          }).onToggle,
          toggleAnimation = React.useCallback(
            function () {
              toggleFunction(!hasStarted.current && !isAnimating.current);
            },
            [toggleFunction]
          );
        onAnimationEnd.current = function (e) {
          isAnimating.current = e;
          toggleAnimation();
        };
        var startAnimation = React.useCallback(
            function () {
              hasStarted.current = true;
              toggleAnimation();
            },
            [toggleAnimation]
          ),
          stopAnimation = React.useCallback(
            function () {
              hasStarted.current = false;
              toggleAnimation();
            },
            [toggleAnimation]
          );

        const [_, updateTransition] = React.useTransition();
        // Use the useState hook to track whether the animation is currently running
        const [animating, setAnimating] = React.useState(false);

        React.useEffect(function () {
          updateTransition(function () {
            return setAnimating(true);
          });
        });
        // var oe = (0, React.useMemo)(
        //     function () {
        //       return (0, b.l)([animationFrameRef, B]);
        //     },
        //     [B]
        //   ),
        const memoizedValue1 = React.useMemo(() => {
          return [animationFrameRef, B];
        }, [B]);
        var memoizedValue2 = (0, React.useMemo)(
          function () {
            return throttle(
              function (e) {
                return W(e);
              },
              200,
              true
            );
          },
          [W]
        );
        var handleNavButtonClick = function (index) {
          return function (event) {
            if (q.current !== index) {
              event.preventDefault();
              memoizedValue2(index);
            }
          };
        };
        onAnimationStart.current = React.useMemo(
          function () {
            return debounce(() => {
              contentRefs.current.forEach((contentRef, index) => {
                if (contentRef) {
                  contentRef.tabIndex = index === q.current ? 0 : -1;
                }
              });
            }, 500);
          },
          [contentRefs, q]
        );
        var getContextData = React.useContext(carouselContext);
        var carouselMapper = React.useMemo(
            function () {
              //was t before
              return itemsFilled
                .map((item, index) => ({
                  ...item,
                  initialPosition: calculateCircularDistance(
                    index,
                    0,
                    itemsFilledLength
                  ),
                }))
                .map((item) => ({
                  ...item,
                  initialFlags: calculateFlags(item.initialPosition),
                }))
                .map((item) => ({
                  ...item,
                  params: {
                    ...getContextData.params,
                    item_id: item.id,
                    item_title: item.contents.title,
                    item_index: item.index,
                    item_landing_url: item.contents.landing_url,
                  },
                }));
            },
            //was t before instead of itemsFilled
            [itemsFilled, itemsFilledLength, getContextData.params]
          ),
          windowWidth = useWindowWidth(d.RR.DesktopSmall, false),
          memoizedImages = React.useMemo(
            function () {
              const imageUrls = itemsFilled.reduce((result, item) => {
                return {
                  ...result,
                  [item.id]: windowWidth
                    ? item.contents.mobile_main_image_url
                    : item.contents.pc_main_image_url,
                };
              }, {});

              return imageUrls;
            },
            //was t before instead of itemsfilled
            [itemsFilled, windowWidth]
          ),
          screenName = getContextData.screenName;
        return (0, ReactjsxRuntimeorEmotion.jsx)(ForwardRefComp, {
          screenName: screenName,
          target: "section",
          params: getContextData.params,
          children: (0, ReactjsxRuntimeorEmotion.jsx)("section", {
            css: sectionCSS,
            children: (0, ReactjsxRuntimeorEmotion.jsxs)("div", {
              css: sectionfirstDivCSS,
              ref: memoizedValue1,
              onBlur: startAnimation,
              onFocus: stopAnimation,
              "data-is-hydrated": animating,
              children: [
                (0, ReactjsxRuntimeorEmotion.jsx)("div", {
                  css: imageContainerCSS,
                  children: carouselMapper.map(function (e, t) {
                    return animating || t < 3
                      ? (0, ReactjsxRuntimeorEmotion.jsx)(
                          altAnchorElement,
                          {
                            item: e,
                            itemBackground: memoizedImages[e.id],
                            itemRef: getContentRef(t),
                            onItemClick: handleNavButtonClick(t),
                            carouselLength: length, //was n before
                            contentRef: getItemRef(t),
                          },
                          e.uniqueId
                        )
                      : (0, ReactjsxRuntimeorEmotion.jsx)(
                          anotherAnchorElement,
                          {
                            item: e,
                            itemRef: getContentRef(t),
                            onItemClick: handleNavButtonClick(t),
                          },
                          e.uniqueId
                        );
                  }),
                }),
                (0, ReactjsxRuntimeorEmotion.jsx)("div", {
                  css: buttonContainerCSS,
                  children: (0, ReactjsxRuntimeorEmotion.jsx)(o.U, {
                    onClickPrev: function () {
                      return W(q.current - 1);
                    },
                    onClickNext: function () {
                      return W(q.current + 1);
                    },
                  }),
                }),
              ],
            }),
          }),
        });
      });
      var re = (0, React.memo)(function (e) {
          var t = e.section;
          return (0, ReactjsxRuntimeorEmotion.jsx)(u.z, {
            items: t.items,
            redundancy: 3,
            children: function (e) {
              return (0, ReactjsxRuntimeorEmotion.jsx)(
                Carousel,
                _objectSpread({}, e)
              );
            },
          });
        }),
        ie = n(16945);
    },
  },
]);
