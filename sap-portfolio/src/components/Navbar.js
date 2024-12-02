import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <img src={hamburgerIcon} />
      </div>
    </div>
  );
};

export default Navbar;
