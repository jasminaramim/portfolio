// import { Lottie } from "lottie-react";
import Lottie from "lottie-react";
import aboutMeAnimation from "../../../public/lotti.json"; // Path to your Lottie JSON file

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <Lottie
          animationData={aboutMeAnimation} // Pass the animation data here
          loop={true} // Set to true if you want it to loop
          autoplay={true} // Set to true if you want it to autoplay
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
