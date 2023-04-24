import React from "react";

export function MapImagestoChildren({ items, redundancy = 2, children }) {
  if (!redundancy) {
    redundancy = 2;
  }

  const createNewArray = React.useMemo(() => {
    const redundantList = items.slice(0, redundancy).map((item, index) => ({
      ...item,
      index,
      uniqueId: `additional_${item.id}`,
    }));
    return [
      ...items.map((item) => ({ ...item, uniqueId: `0_${item.id}` })),
      ...redundantList,
    ];
  }, [redundancy, items]);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        itemsFilled: createNewArray,
        length: items.length,
      });
    }
  });
  return <React.Fragment>{childrenWithProps}</React.Fragment>;
}
