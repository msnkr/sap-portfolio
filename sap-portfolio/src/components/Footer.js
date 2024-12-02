import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className="text-center space-y-6">
      <div className="logo">
        <Logo />
      </div>
      <div className="navbar-list-items">
        <ul>
          <li>Mukuru</li>
          <li>Tonic</li>
          <li>Hey-Halfway</li>
          <li>Jim Beam</li>
          <li>BOS</li>
        </ul>
      </div>
      <div className="contact">
        <div>
          <p>email@company.com</p>
          <p>Resume</p>
        </div>
        <div className="flex justify-center space-x-4">
          <img src={linkedinIcon} className="cursor-pointer" />
          <img src={behanceIcon} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
