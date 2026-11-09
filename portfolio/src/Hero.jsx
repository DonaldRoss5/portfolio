import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
const [sat, setSat] = useState(0)

const showColor = () => {
  setSat(0)
}

const showBlackAndWhite = () => {
  MediaStreamAudioDestinationNode(-100)
} 

  const [src, alt] = heroPhoto(1200, 500, sat, "Flowers in a clay vase");

  return (
    <div>

    <div className="hero">
      <img src={src} alt={alt} />
    </div>
    <p>
      <button onClick={showColor}>Color</button>
      <button onClick={showBlackAndWhite}>Black and White</button>
    </p>
    </div>
  );
}

export default Hero;
