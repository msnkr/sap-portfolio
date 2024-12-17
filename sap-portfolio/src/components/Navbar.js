import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import { Link } from "react-scroll";

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
          className={`${
            nav ? "hidden" : ""
          } w-[30px] absolute top-16 right-12 cursor-pointer md:hidden`}
          alt="hamburger-icon"
          onClick={handleClickNavbar}
        />
      </div>
      <div>
        <img
          src={closeIcon}
          className={`${
            nav ? "block" : "hidden"
          } w-[30px] absolute top-16 right-12 cursor-pointer md:hidden`}
          alt="close-icon"
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
            <Link to="jim-beam" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Jim Beam
              </li>
            </Link>
            <Link to="mukuru" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Mukuru
              </li>
            </Link>
            <Link to="bos" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Bos
              </li>
            </Link>
            <Link to="csa" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                CSA
              </li>
            </Link>
            <Link to="new-planet" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                New Planet
              </li>
            </Link>
            <Link to="tonic" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Tonic
              </li>
            </Link>
            <Link to="heyhalfway" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                HeyHalfway
              </li>
            </Link>
            <li className="cursor-pointer font-semibold">
              <a
                href="https://www.behance.net/kashiarees"
                target="_blank"
                rel="noreferrer"
              >
                View more work
              </a>
            </li>
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
            <Link to="jim-beam" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Jim Beam
              </li>
            </Link>
            <Link to="mukuru" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Mukuru
              </li>
            </Link>
            <Link to="bos" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Bos
              </li>
            </Link>
            <Link to="csa" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                CSA
              </li>
            </Link>
            <Link to="new-planet" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                New Planet
              </li>
            </Link>
            <Link to="tonic" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                Tonic
              </li>
            </Link>
            <Link to="heyhalfway" smooth={true} duration={800}>
              <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
                HeyHalfway
              </li>
            </Link>
            <li className="cursor-pointer font-semibold">
              {" "}
              <a
                href="https://www.behance.net/kashiarees"
                target="_blank"
                rel="noreferrer"
              >
                View more work
              </a>
            </li>
          </ul>
          <li className="text-lg cursor-pointer">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
