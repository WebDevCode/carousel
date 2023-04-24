import imageList from "./imagelist";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { tweenValue } from "./utils";

function prepareImageList(imageList) {
  return [...imageList, ...imageList.slice(0, 3)];
}

const images = prepareImageList(imageList);

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRef = useRef(null);
  const prevItemRef = useRef(null);
  const enableClick = useRef(true);

  function prevClickHandler() {
    setCurrentIndex(currentIndex - 1);
  }

  function nextClickHandler() {
    if (enableClick) {
      setCurrentIndex(currentIndex + 1);
      console.log("from click", currentIndex);
    }
  }
  useEffect(() => {
    enableClick.current = false;
    if (currentIndex > 0) {
      tweenValue(
        0,
        1,
        400,
        (value) => {
          itemRef.current.style.flexGrow = value;
        },
        () => {
          enableClick.current = true;
        }
      );
      tweenValue(
        1,
        0,
        400,
        (value) => {
          prevItemRef.current.style.flexGrow = value;
        },
        () => {
          enableClick.current = true;
        }
      );
    }
    if (currentIndex === imageList.length) {
      console.log("we are back at the beginning");
      tweenValue(
        0,
        1,
        400,
        (value) => {
          itemRef.current.style.flexGrow = value;
        },
        () => {
          itemRef.current = imageList[0];
          setCurrentIndex(0);
          enableClick.current = true;
        }
      );
    }
  });

  return (
    <section>
      <p>{currentIndex}</p>
      <div className="carousel-wrapper">
        <div className="carousel">
          {images.map((item, index) => (
            <div
              className="carousel-item"
              key={index}
              ref={
                index === currentIndex
                  ? itemRef
                  : index === currentIndex - 1
                  ? prevItemRef
                  : null
              }
              style={{
                backgroundImage: `url(${item.url})`,
                flexGrow: `${index === currentIndex ? 1 : 0}`,
                flexBasis: `${
                  index === currentIndex + 2 || index === currentIndex + 3
                    ? "46px"
                    : 0
                }`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={prevClickHandler}>Prev</button>
        <button onClick={nextClickHandler}>Next</button>
      </div>
    </section>
  );
}

export default App;
