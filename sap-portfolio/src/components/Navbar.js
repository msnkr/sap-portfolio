import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const handleHover = () => {
    setSubMenu(true);
  };

  const handleExit = () => {
    setSubMenu(false);
  };

  const handleClick = () => {
    setNavbar(true);
  };

  const handleClose = () => {
    setNavbar(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <img
            onClick={handleClick}
            src={hamburgerIcon}
            alt="burger-icon"
            className="w-12 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`${
          navbar ? "block" : "hidden"
        } bg-black w-full h-screen absolute top-0 left-0 z-50`}
      >
        <div className=" absolute top-14 right-4 w-12">
          <img
            src={closeIcon}
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div>
          <ul className="absolute top-1/4 -translate-y-1/2 right-8 text-white text-xl text-end">
            <li className="cursor-pointer" onMouseOver={handleHover}>
              My Work
            </li>
            <li>About</li>
          </ul>
          <ul
            className={`${
              subMenu ? "visible" : "invisible"
            } text-white text-end absolute top-1/4 -translate-y-1/2 left-1/2 text-xl`}
            onMouseLeave={handleExit}
          >
            <li className="cursor-pointer">Mukuru</li>
            <li className="cursor-pointer">Tonic</li>
            <li className="cursor-pointer">Hey-halfway</li>
            <li className="cursor-pointer">Jim Beam</li>
            <li className="cursor-pointer">BOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
