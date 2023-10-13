import { useState, useEffect, useMemo } from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/blacksweater.png";
import heroImageTwo from "../../assets/images/whitesweater.png";
import heroImageThree from "../../assets/images/crewneck.png";
import heroImageFour from "../../assets/images/beige.png";
import heroImageFive from "../../assets/images/black.png";
import heroImageSix from "../../assets/images/red.png";
import heroImageSeven from "../../assets/images/bornbredbeige.png";
import heroImageEight from "../../assets/images/scarbblack.png";
import heroImageNine from "../../assets/images/scarbgreen.png";
import heroImageTen from "../../assets/images/scarbwhite.png";
import heroImageEleven from "../../assets/images/torontoblack.png";
import heroImageTwelve from "../../assets/images/torontogreen.png";
import heroImageThirteen from "../../assets/images/torontored.png";
import heroImageFourteen from "../../assets/images/beigetoronto.png";
import heroImageFifteen from "../../assets/images/sbeige.png";

const Hero = () => {
  const images = useMemo(
    () => [
      heroImage,
      heroImageTwo,
      heroImageThree,
      heroImageFour,
      heroImageFive,
      heroImageSix,
      heroImageSeven,
      heroImageEight,
      heroImageNine,
      heroImageTen,
      heroImageEleven,
      heroImageTwelve,
      heroImageThirteen,
      heroImageFourteen,
      heroImageFifteen,
    ],
    []
  );
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
