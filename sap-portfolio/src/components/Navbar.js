import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";

import { useState } from "react";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => {
      return !prev;
    });
  };

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <Logo />
      </div>
      <div className="relative">
        <div>
          <img
            onClick={handleClick}
            src={hamburgerIcon}
            className="w-10 cursor-pointer md:hidden"
          />
        </div>
        <div>
          <ul
            className={`${
              click ? "block space-x-0" : "hidden"
            } md:flex space-x-12`}
          >
            <a onMouseOver={handleHover}>
              <li className="work-list">My Work</li>
            </a>
            <ul
              onMouseLeave={handleLeave}
              className={`${
                hover ? "visible" : "invisible"
              } absolute top-8 w-full right-0 cursor-pointer`}
            >
              <li>Mukuru</li>
              <li>Tonic</li>
              <li>Hey Halfway</li>
              <li>Jim Beam</li>
              <li>BOS</li>
            </ul>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
