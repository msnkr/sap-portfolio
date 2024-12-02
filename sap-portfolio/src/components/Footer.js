import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className="text-center space-y-6 md:flex justify-between items-center md:p-12 lg:px-28">
      <div className="logo">
        <Logo />
      </div>
      <div className="navbar-list-items">
        <ul className="md:grid grid-cols-2 gap-3 space-y-2 md:space-y-0 font-semibold">
          <li className="cursor-pointer">Mukuru</li>
          <li className="cursor-pointer">Tonic</li>
          <li className="cursor-pointer">Hey-Halfway</li>
          <li className="cursor-pointer">Jim Beam</li>
          <li className="cursor-pointer">BOS</li>
        </ul>
      </div>
      <div className="contact space-y-2">
        <div>
          <p>email@company.com</p>
        </div>
        <div>
          <a>
            <p className="border-2 border-black rounded-xl py-1 md:w-full w-1/3 mx-auto">
              Resume
            </p>
          </a>
        </div>
        <div className="flex justify-center space-x-4 items-center pb-12">
          <img src={linkedinIcon} className="cursor-pointer" />
          <img src={behanceIcon} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
