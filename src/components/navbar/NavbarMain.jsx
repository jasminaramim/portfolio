import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();

  return (
    <nav className="max-w-[1300px] mx-auto w-full lg:px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      {/* Main Navbar */}
      <div
        className={`flex justify-between w-full backdrop-blur-lg max-w-[1200px] mx-auto  items-center lg:p-6 p-2 rounded-r-full rounded-l-full  border-[0.5px] ${menuOpen ? "sm:bg-opacity-70" : ""}`}
      >
        <NavbarLogo />
        
        {/* Navbar Links - Only show on large screens */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        {/* Navbar Button */}
        <NavbarBtn />
      </div>

      {/* Mobile Menu Button - Only show on small devices */}
      <div className="flex lg:hidden backdrop-blur-lg sm:block p-2 lg:p-6 items-center justify-center rounded-full border-purple border-[0.5px]">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
