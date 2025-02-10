import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleProject = ({ name, year, align, image, techStack, description, liveLink, githubLink, challenges, improvements }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
  }, []);

  return (
    <>
      <div
        data-aos="flip-left"
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2
            className={`text-xl font-thin text-white font-special sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {year}
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center"
          >
            View More <BsFillArrowUpRightCircleFill />
          </button>
        </div>
        <div
          data-aos="zoom-in"
          className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white"
        >
          <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
          <img src={image} alt="website image" className="w-full h-full" />
        </div>
      </div>

      {/* DaisyUI Modal */}
      {isOpen && (
        <dialog open className="modal modal-open">
          <div className="modal-box bg-white lg:w-[500px] w-[370px] max-w-[500px]">
            <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-circle absolute right-2 top-2">
              ✖
            </button>
            <h2 className="text-2xl font-bold text-orange">{name}</h2>
            <img className="rounded-lg mb-10" src={image} alt="" />
            <p className="text-gray-700">{description}</p>
            <p className="mt-2"><strong className="text-orange">Tech Stack:</strong> {techStack.join(", ")}</p>
            <p className="mt-2"><strong className="text-orange">Challenges:</strong> {challenges}</p>
            <p className="mt-2"><strong className="text-orange">Improvements:</strong> {improvements}</p>
            <div className="mt-4 flex gap-4">
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Live Project</a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub Repo</a>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default SingleProject;
