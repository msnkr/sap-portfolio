import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

import { useState } from "react";
const Navbar = () => {
  const [subMenu, setSubMenu] = useState(false);

  const handleClick = () => {
    setSubMenu((prev) => {
      return !prev;
    });
  };

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
          <li className="text-lg cursor-pointer" onClick={handleClick}>
            My Work
          </li>
          <ul
            className={`${
              subMenu
                ? "visible opacity-100 translate-x-0"
                : "invisible opacity-0 -translate-x-1/2"
            } absolute top-12 right-20 w-96 text-end duration-500`}
          >
            <li className="cursor-pointer font-semibold">Jim Beam</li>
            <li className="cursor-pointer font-semibold">Mukuru</li>
            <li className="cursor-pointer font-semibold">Bos</li>
            <li className="cursor-pointer font-semibold">Tonic</li>
            <li className="cursor-pointer font-semibold">Hey Halfway</li>
          </ul>
          <li className="text-lg cursor-pointer">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
