import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className="text-center space-y-6 md:flex justify-between items-center md:p-12">
      <div className="logo">
        <Logo />
      </div>
      <div className="navbar-list-items">
        <ul className="md:grid grid-cols-2 gap-3 space-y-2 md:space-y-0">
          <li>Mukuru</li>
          <li>Tonic</li>
          <li>Hey-Halfway</li>
          <li>Jim Beam</li>
          <li>BOS</li>
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
        <div className="flex justify-center space-x-4 items-center">
          <img src={linkedinIcon} className="cursor-pointer" />
          <img src={behanceIcon} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
