import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
  href="/images/reusme.pdf" // Access from the public folder
  download="/public/reusme.pdf"
  className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-purple-900 border flex items-center gap-1 bg-gradient-to-r from-purple-900 to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-purple-700"
>
  Download Resume
  <div className="sm:hidden md:block">
    <LuArrowDownRight />
  </div>
</a>

  );
};

export default NavbarBtn;
