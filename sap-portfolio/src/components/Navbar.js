import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Logo />
      </div>
      <div>
        <img src={hamburgerIcon} className="w-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
