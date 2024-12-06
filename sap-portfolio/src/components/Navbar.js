import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const handleClickSubMenu = () => {
    setSubMenu((prev) => {
      return !prev;
    });
  };

  const handleClickNavbar = () => {
    setNav((prev) => {
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
          onClick={handleClickNavbar}
        />
      </div>
      <div className={`${nav ? "block" : "hidden"} mobile-navbar`}>
        <ul className="absolute top-28 right-12 text-end">
          <li className="cursor-pointer" onClick={handleClickSubMenu}>
            My Work
          </li>
          <ul
            className={`${
              subMenu
                ? "visible opacity-100 translate-x-0"
                : "invisible opacity-0 -translate-x-1/2"
            } absolute top-0 right-24 duration-500 w-[200px]`}
          >
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Jim Beam
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Mukuru
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Bos
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Tonic
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Hey Halfway
            </li>
            <li className="cursor-pointer font-semibold">View all work</li>
          </ul>
          <li className="cursor-pointer">About</li>
        </ul>
      </div>
      <div className="hidden md:block medium-navbar">
        <ul className="md:flex space-x-4 font-xl absolute top-16 right-16 lg:right-40">
          <li
            className="text-lg cursor-pointer scale-95 hover:scale-100 duration-500"
            onClick={handleClickSubMenu}
          >
            My Work
          </li>
          <ul
            className={`${
              subMenu
                ? "visible opacity-100 translate-x-0"
                : "invisible opacity-0 -translate-x-1/2"
            } absolute top-12 right-20 w-96 text-end duration-500`}
          >
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Jim Beam
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Mukuru
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Bos
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Tonic
            </li>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Hey Halfway
            </li>
            <li className="cursor-pointer font-semibold">View all work</li>
          </ul>
          <li className="text-lg cursor-pointer">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
