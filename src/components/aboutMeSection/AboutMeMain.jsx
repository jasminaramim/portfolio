import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

const AboutMeMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing function
    });
  }, []);

  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[50px] lg:mt-[100px] justify-between items-center"
    >
      {/* AboutMeText with AOS animation */}
      <div
        data-aos="fade-right" // Add animation for fade in from the right
        data-aos-delay="200" // Delay for staggered effect
      >
        <AboutMeText />
      </div>
      
      {/* AboutMeImage with AOS animation */}
      <div
        data-aos="fade-left" // Add animation for fade in from the left
        data-aos-delay="200" // Delay for staggered effect
      >
        <AboutMeImage />
      </div>
    </div>
  );
};

export default AboutMeMain;
