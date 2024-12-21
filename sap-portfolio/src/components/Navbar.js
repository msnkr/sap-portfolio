import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import { Link } from "react-scroll";

import { useState } from "react";
const Navbar = () => {
  const [subMenu, setSubMenu] = useState(false);

  const handleClickSubMenu = () => {
    setSubMenu((prev) => {
      return !prev;
    });
  };

  const cancelSubMenu = () => {
    setSubMenu(false);
  };

  return (
    <div>
      <div>
        <Logo />
      </div>
      <div className="mobile-navbar">
        <ul className="absolute top-16 right-12 text-end">
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
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                Jim Beam
              </li>
            </Link>
            <Link to="mukuru" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                Mukuru
              </li>
            </Link>
            <Link to="bos" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                Bos
              </li>
            </Link>
            <Link to="csa" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                CSA
              </li>
            </Link>
            <Link to="new-planet" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                New Planet
              </li>
            </Link>
            <Link to="tonic" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
                Tonic
              </li>
            </Link>
            <Link to="heyhalfway" smooth={true} duration={800}>
              <li
                className="cursor-pointer scale-95 hover:scale-100 duration-500"
                onClick={cancelSubMenu}
              >
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
