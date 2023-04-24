/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";

function n(a) {
  return a;
}

const createUseIntersectionObserverRef = (context) => (callback) => {
  const observer = React.useContext(context);
  const targetRef = React.useRef(null);
  const isObserving = React.useRef(false);
  const callbackRef = React.useRef(callback);

  // Keep track of the current callback
  callbackRef.current = callback;

  const observe = React.useCallback(
    (target) => {
      if (!isObserving.current) {
        if (target === null) {
          // Stop observing the current target
          if (targetRef.current !== null) {
            if (observer !== null) {
              observer.unobserve(targetRef.current);
            }
            targetRef.current = null;
          }
        } else {
          // Start observing a new target
          if (observer !== null) {
            observer.observe(target, () => {
              isObserving.current = true;
              callbackRef.current();
            });
          }
          targetRef.current = target;
        }
      }
    },
    [observer]
  );

  return observe;
};

function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function sendMessage(text, message) {
  console.log(text, message);
}

function logEvent(e, t, n, r) {
  var i = {
    screenName: e,
    action: t,
    target: n,
  };

  sendMessage("logEvent", i);
}

var sendCustomEvent = function (e, t, n, o) {
  logEvent(e, t, n, o);
};

// Function that returns a new function that sends a custom event with the specified type and arguments
var createCustomEventHandler = function (eventType) {
  return function (arg1, arg2, options = {}) {
    sendCustomEvent(eventType, arg1, arg2, options);
  };
};

// Create a new event handler for the "view" event type
var viewEventHandler = createCustomEventHandler("view");

// const ObserverContext = React.createContext(null);
// var r = n(32735),
//   o = n(30423),
//   i = n(21882),
//   useIntersectionObserverRef =
//     createUseIntersectionObserverRef(ObserverContext), //n(77902)
var s = React.forwardRef(function (props, ref) {
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

const orBelow = (e, t) => Emotion.css`
  @media (max-width: ${e}px) {
    ${t};
  }
`;

function o(e, r, t) {
  t.d(r, {
    U: function () {
      return m;
    },
  });
  var n = t(32735),
    o = t(62967),
    c = t(51813),
    i = t(38802),
    s = t(77514),
    a = t(75246),
    u = t(3890),
    l = t(36962);
  var f = ReactjsxRuntimeorEmotion(
      "position:absolute;top:50%;pointer-events:auto;",
      u.OZ,
      ";",
      ""
    ),
    p = Emotion.css(
      f,
      ";left:0;transform:translate(-50%, -50%);",
      orBelow(l.RR.DesktopSmall, {
        name: "1mkcxqn",
        styles: "left:-16px;transform:none",
      }),
      ";",
      ""
    ),
    d = Emotion.css(
      f,
      ";right:0;transform:translate(50%, -50%);",
      orBelow(l.RR.DesktopSmall, {
        name: "1ng32ve",
        styles: "right:-16px;transform:none",
      }),
      ";",
      ""
    ),
    //g = t(38839),ReactjsxRuntimeorEmotion
    m = function (e) {
      var r = e.onClickPrev,
        t = e.onClickNext,
        a = React.useRef(r),
        u = React.useMemo(function () {
          return throttle(
            function () {
              return a.current();
            },
            200,
            !0
          );
        }, []);
      a.current = r;
      var l = (0, n.useRef)(t),
        f = (0, n.useMemo)(function () {
          return throttle(
            function () {
              return l.current();
            },
            200,
            !0
          );
        }, []);
      l.current = t;
      var m = React.useContext(carouselContext);
      return (0, ReactjsxRuntimeorEmotion.jsxs)(
        ReactjsxRuntimeorEmotion.Fragment,
        {
          children: [
            (0, ReactjsxRuntimeorEmotion.jsx)(c.l, {
              screenName: m.screenName,
              target: "scroll_left",
              params: m.params,
              children: (0, g.jsx)(o.b, {
                css: p,
                direction: "left",
                label: "\uc774\uc804",
                onClick: u,
              }),
            }),
            (0, g.jsx)(c.l, {
              screenName: m.screenName,
              target: "scroll_right",
              params: m.params,
              children: (0, g.jsx)(o.b, {
                css: d,
                direction: "right",
                label: "\ub2e4\uc74c",
                onClick: f,
              }),
            }),
          ],
        }
      );
    };
}
