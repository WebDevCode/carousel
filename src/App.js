import imgList from "./imagelist";
import "./App.css";
import React, { useRef, useState } from "react";

function prepareImageList(imageList) {
  return [...imageList, ...imageList.slice(0, 3)];
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState(prepareImageList(imgList));
  const itemRef = useRef(null);

  function prevClickHandler() {
    setCurrentIndex(currentIndex - 1);
  }

  function nextClickHandler() {
    setCurrentIndex(currentIndex + 1);
  }

  React.useEffect(() => {
    if (currentIndex === imgList.length) {
      setCurrentIndex(0);
      setImageList(prepareImageList(imgList));
    }
  }, [currentIndex]);

  return (
    <section>
      <div className="carousel-wrapper">
        <div className="carousel">
          {imageList.map((item, index) => (
            <div
              className="carousel-item"
              key={index}
              ref={currentIndex ? itemRef : null}
              style={{
                backgroundImage: `url(${item.url})`,
                flexGrow: `${index === currentIndex ? 1 : 0}`,
                flexBasis: `${
                  index === currentIndex + 1 || index === currentIndex + 2
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
