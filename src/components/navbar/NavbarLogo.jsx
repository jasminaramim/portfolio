import avatar from "../../assets/avatar_15252178.png";

const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-1 group relative">
      {/* Name (hidden by default, shown on hover) */}
      <h1 className="absolute left-16 opacity-0 text-white text-2xl bg-gray-800 px-2 py-1 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
        Jasmin
      </h1>

      {/* Avatar Image */}
      <img className="w-14 h-14 ml-5 rounded-full cursor-pointer" src={avatar} alt="Avatar" />
    </div>
  );
};

export default NavbarLogo;
