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
          className="w-[30px] absolute top-16 right-12 cursor-pointer md:hidden"
          alt="hamburger-icon"
        />
      </div>
      <div className="hidden md:block">
        <ul className="md:flex space-x-4 font-xl absolute top-16 right-16 lg:right-40">
          <li className="text-lg">My Work</li>
          <li className="text-lg">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
