import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className=" text-center lg:grid grid-cols-3 items-center lg:mt-20 lg:mb-12">
      <div className="mt-12 lg:mt-0">
        <Logo />
      </div>
      <div className="mt-5 lg:mt-0">
        <ul className="text-center space-y-1">
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
          <a>
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
          <a>
            <img src={behanceIcon} alt="behance-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
