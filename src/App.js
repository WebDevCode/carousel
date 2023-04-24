import imageList from "./imagelist";
import "./App.css";
import React from "react";
import { MapImagestoChildren } from "./Components/MapImagestoChildren";
import { Carousel } from "./Components/Carousel";

function ChildDiv() {
  return <div>Hello World</div>;
}

function App() {
  return (
    <section>
      <MapImagestoChildren items={imageList} redundancy={3}>
        <Carousel />
      </MapImagestoChildren>
    </section>
  );
}

export default App;
