import { useState, useEffect, useMemo } from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/blacksweater.png";
import heroImageTwo from "../../assets/images/whitesweater.png";
import heroImageThree from "../../assets/images/crewneck.png";

const Hero = () => {
  const images = useMemo(() => [heroImage, heroImageTwo, heroImageThree], []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="hero">
      <div className="hero__container">
        <div>
          <h2 className="hero__title">Born in Toronto</h2>
          <h2 className="hero__title">Bred in Scarborough</h2>
        </div>
        <div>
          <img
            className="hero__image"
            src={images[currentImageIndex]}
            alt={`hero pic ${currentImageIndex + 1}`}
          />
        </div>
        <div>
          <h2>Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
