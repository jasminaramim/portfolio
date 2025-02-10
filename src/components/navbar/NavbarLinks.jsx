import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body 
      lg:relative sm:absolute sm:top-[110%] sm:right-4 sm:left-auto
      sm:w-auto sm:px-6 sm:py-3 sm:text-right
      lg:bg-transparent sm:bg-purple/90 sm:backdrop-blur-md sm:rounded-lg">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            className="cursor-pointer text-white hover:border-b-4 hover:border-purple-400 hover:text-purple-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-purple-900 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
