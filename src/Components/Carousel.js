/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useItemRefs } from "../Hooks/useItemRefs";
import { useTweenAnimation } from "../Hooks/useTweenAnimation";
import { calculateContentStyle, calculateStyle, moduloFn } from "../utils";

export const Carousel = React.memo(({ itemsFilled, length }) => {
  const itemsLength = itemsFilled.length;
  const animationFrameRef = useRef(null);
  const itemRefs = useItemRefs().itemRefs;
  const getItemRefs = useItemRefs().getItemRef;
  const contentRefs = useItemRefs().itemRefs;
  const getContentRefs = useItemRefs().getItemRef;
  const containerWidth = React.useRef(1279);
  const onAnimationStart = React.useRef(() => {});
  const onAnimationEnd = React.useRef((e) => {});
  const triggerAnimationEnd = React.useCallback((e) => {
    return onAnimationEnd.current(e);
  }, []);

  const updateItemPosition = React.useCallback(
    (e) => {
      onAnimationStart.current();
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const r = index - e;
          const style = calculateStyle(r);
          item.style.setProperty("flex-grow", style.grow);
          item.style.setProperty("flex-basis", `${style.basis}px`);
          const contentRef = contentRefs.current[index];
          if (contentRef) {
            const contentStyle = calculateContentStyle(r);
            contentRef.style.setProperty(
              "transform",
              `translate(${contentStyle.offset}px, 0)`
            );
            contentRef.style.setProprty("opacity", contentStyle.opacity);
          }
        }
      });
    },
    [itemRefs, contentRefs]
  );

  const setItemWidth = React.useCallback(() => {
    itemRefs.current.forEach((itemRef) => {
      if (itemRef) {
        itemRef.style.setProperty("width", `${containerWidth.current}px`);
      }
    });
  }, [itemRefs]);

  React.useLayoutEffect(() => setItemWidth());

  const animate = useTweenAnimation();
  const calculateSpace = React.useMemo(
    function () {
      return moduloFn(itemsLength - 3);
    },
    [itemsLength]
  );

  const maxSwipe = React.useRef(1);
});
