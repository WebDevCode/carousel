import React from "react";

export function useItemRefs() {
  const itemRefs = React.useRef([]);
  const refs = React.useRef([]);

  function getItemRef(index) {
    if (!itemRefs.current[index]) {
      itemRefs.current[index] = (ref) => (refs.current[index] = ref);
    }
    return itemRefs.current[index];
  }

  return {
    itemRefs: refs,
    getItemRef,
  };
}
