import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "../../../public/images/lotti2.json"; // Correct path

const AboutMeText = () => {
  return (
    <div>
        <div className="lg:w-[150px] w-[100px] mb-5 rounded-full lg:items-start lg:ml-0 ml-[150px] items-center ">
          {/* Adjust height and width for a smaller Lottie animation */}
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        
        </div>
      <div className="flex w-full flex-col md:items-start sm:items-center md:text-left sm:text-center">
        {/* About Me Heading with Lottie animation */}
      

        {/* About Me Paragraph */}
        <p className="text-lg max-w-2xl mx-auto">
          Hi, I'm Jasmin, a passionate Front-End Developer from Bangladesh. My programming journey began with a fascination for building interactive websites, and over the years,
          I've honed my skills in HTML, CSS, JavaScript, React, and more. <br />
          I enjoy crafting clean, responsive, and user-friendly web applications that bring ideas to life.
          <br />
          Outside of coding, I love exploring new technologies, playing sports, and spending time with family. I believe in continuous learning and pushing myself to create better solutions while keeping a positive attitude. Let's build something amazing together!
        </p>

        {/* Button */}
        <button className="border lg:block hidden border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={600}
            offset={-200}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
