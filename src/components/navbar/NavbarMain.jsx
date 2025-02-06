import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full lg:px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      {/* Main Navbar */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-purple-900 items-center lg:p-6 p-2 rounded-r-full rounded-l-full border-purple-500 border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden sm:block p-2 lg:p-6 bg-purple-900 items-center justify-center rounded-full border-purple-500 border-[0.5px]">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
