import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Background Blur */}
      <div className="absolute rounded-full inset-0 bg-cover bg-center bg-blur bg-[url('../../../public/images/0e29c972-f8aa-41cc-9b75-bdacd5b1f871-removebg-preview.png')] backdrop-blur-lg -z-10"></div>

      {/* Main Image */}
      <motion.img
        src="/images/0e29c972-f8aa-41cc-9b75-bdacd5b1f871-removebg-preview.png"
        alt="Jasmin Ara Mim"
        className="max-h-[550px] sm:max-h-[400px] md:max-h-[550px] rounded-full border shadow-2xl border-purple-500 w-auto"
        whileHover={{ opacity: 0.8 }} // Image opacity change on hover
        transition={{ duration: 0.3 }} // Smooth transition for opacity
      />

      {/* Name Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute text-white bg-purple-500 rounded-lg p-2 text-3xl font-bold"
      >
        Jasmin Ara Mim
      </motion.div>

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        {/* <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" /> */}
      </div>
    </motion.div>
  );
};

export default HeroPic;
