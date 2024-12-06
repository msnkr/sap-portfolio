import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" text-center lg:grid grid-cols-3 items-center lg:mt-20 lg:mb-12">
      <Link to="home" smooth={true} duration={800}>
        <div className="mt-12 lg:mt-0">
          <Logo />
        </div>
      </Link>
      <div className="mt-5 lg:mt-0">
        <ul className="text-center space-y-1">
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
          <Link to="tonic" smooth={true} duration={800}>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Tonic
            </li>
          </Link>
          <Link to="hey-halfway" smooth={true} duration={800}>
            <li className="cursor-pointer scale-95 hover:scale-100 duration-500">
              Hey Halfway
            </li>
          </Link>
          <li className="cursor-pointer font-semibold underline underline-offset-4">
            View all work
          </li>
        </ul>
      </div>
      <div className="mt-5 lg:mt-0">
        <div>
          <p className="text-xl">someone@gmail.com</p>
        </div>
        <div className="flex justify-center mt-4 mb-8">
          <a href="https://linkedin.com">
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
          <a href="https://behance.net">
            <img src={behanceIcon} alt="behance-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
