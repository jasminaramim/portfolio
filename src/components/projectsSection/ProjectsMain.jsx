import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Blood Donation",
    year: "December 2024",
    align: "right",
    image: "/images/bloodDonate.png",
    link: "/projects/vacation-of-africa",
    techStack: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    description: "A Blood Donation Website designed to connect blood donors with donation centers...",
    liveLink: "https://blood-donateion-website.netlify.app/",
    githubLink: "https://github.com/jasminaramim/Blood-donation-website-client-side",
    challenges: "Implementing a real-time booking system and integrating APIs.",
    improvements: "Adding a chatbot for customer support and optimizing performance.",
  },
  {
    name: "Crowd Cube",
    year: "Sept 2024",
    align: "left",
    image: "/images/crodecube.png",
    link: "/projects/moola-app",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    description: "Crowd Cube is a crowdfunding platform that enables users to create, manage, and support fundraising campaigns...",
    liveLink: "https://rococo-zabaione-06675f.netlify.app/",
    githubLink: "https://github.com/jasminaramim/Crowd-cube",
    challenges: "Handling authentication and security for financial data.",
    improvements: "Integrating AI-based financial predictions.",
  },
  {
    name: "Team Website",
    year: "Jan 2025",
    align: "right",
    image: "/images/team.png",
    link: "/projects/tourzania",
    techStack: ["React.js", "Bootstrap", "Tailwind"],
    description: "This Team Website is designed to showcase team members, their roles, and the projects they've worked on...",
    liveLink: "https://curious-pithivier-5a7b0c.netlify.app/",
    githubLink: "https://github.com/jasminaramim/we-are-a-team",
    challenges: "Implementing a recommendation system for tours.",
    improvements: "Adding AI-powered itinerary suggestions.",
  },
];

const ProjectsMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
  }, []);

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <div data-aos="fade-down">
        <ProjectsText />
      </div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <div key={index} >
            <SingleProject {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
