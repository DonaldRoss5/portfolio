import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const photos = [
    "photo-1794136278466-43e7a45d723d",

    "photo-1794259917067-039df98cf3e8",

    "photo-1794436302258-637318a9a365",
  ];
  const descriptions = [
    "Flowers in a clay vase",
    "A river valley at sunrise",
    "A hiker above forested hills",
  ];

  const [index, setIndex] = useState(0);

  const [sat, setSat] = useState(0);

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showColor = () => {
    setSat(0);
  };
  const showBlackAndWhite = () => {
    setSat(-100);
  };

  const [src, alt] = heroPhoto(
    photos[index],
    1200,
    500,
    sat,
    descriptions[index],
  );

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p>
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>

        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>
    </div>
  );
}

export default Hero;
