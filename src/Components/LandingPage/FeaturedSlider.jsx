import { useEffect, useState } from "react";
import img1 from "../../Assets/LandingPage/Featured/animated-img1.jpg";
function FeaturedSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img1, img1];
  // Code used for animating images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="w-full h-96 md:w-[48%] md:h-full relative overflow-hidden rounded-xl lg:w-[30rem] xl:w-[33.3rem]">
      <img
        loading="lazy"
        src={images[currentImage]}
        className="w-full h-full object-cover filter brightness-90"
        alt="Card Image"
      />
      <div className="w-full absolute bottom-2 flex justify-center gap-3 mt-5">
        {images.map((item, index) => (
          <span
            key={index}
            className={`${
              index === currentImage ? "bg-primary scale-125" : "bg-[#66C366]"
            } w-3 h-3 rounded-full duration-200`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSlider;
