import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Jasmin, a passionate Front-End Developer from Bangladesh. My programming journey began with a fascination for building interactive websites, and over the years, <br />
      I've honed my skills in HTML, CSS, JavaScript, React, and more. <br />
      I enjoy crafting clean, responsive, and user-friendly web applications that bring ideas to life.

Outside of coding, I love exploring new technologies, playing sports, and spending time with family. I believe in continuous learning and pushing myself to create better solutions while keeping a positive attitude. Let's build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={800}
          offset={-100}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
