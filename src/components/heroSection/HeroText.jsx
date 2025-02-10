import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>

      {/* Typewriter effect for name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        <TypeAnimation
          sequence={[
            "Jasmin Ara Mim",  // First text
            2000,              // Pause for 2 seconds
            "",                // Clear text
            1000,              // Pause for 1 second
          ]}
          wrapper="span"
          speed={50}           // Typing speed
          repeat={Infinity}    // Repeat the animation infinitely from the start
        />
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-lg mt-4"
      >
        A passionate web developer from Bangladesh, <br />
        dedicated to creating innovative and responsive web applications. <br />
        Constantly learning and evolving with the latest technologies.
      </motion.p>

      {/* Social Media Links */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        <div className="flex lg:justify-start justify-center gap-6 mb-4">
          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 rounded-full text-2xl sm:text-lg font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
          >
            <SingleContactSocial
              link="https://www.linkedin.com/in/jasmin-ara-mim-52567b335/"
              Icon={FaLinkedinIn}
            />
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 rounded-full text-2xl sm:text-lg font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
          >
            <SingleContactSocial
              link="https://github.com/jasminaramim"
              Icon={FiGithub}
            />
          </motion.div>

          {/* Facebook */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 rounded-full text-2xl sm:text-lg font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
          >
            <SingleContactSocial
              link="https://www.facebook.com/jasmin.ara.mim.2024"
              Icon={FaFacebookF}
            />
          </motion.div>
        </div>

      </motion.p>
    </div>
  );
};

export default HeroText;
