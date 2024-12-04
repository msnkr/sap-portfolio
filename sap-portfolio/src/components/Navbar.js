import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <img
          src={hamburgerIcon}
          className="w-[30px] absolute top-16 right-12 cursor-pointer lg:hidden"
          alt="hamburger-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
