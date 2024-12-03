import Logo from "./Logo";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import { useState } from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <img
          src={hamburgerIcon}
          className="w-[30px] absolute top-12 right-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
