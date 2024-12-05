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
        <ul className="text-center space-y-1 text-lg">
          <li className="cursor-pointer">Jim Beam</li>
          <li className="cursor-pointer">Mukuru</li>
          <li className="cursor-pointer">Bos</li>
          <li className="cursor-pointer">Tonic</li>
          <li className="cursor-pointer">Hey Halfway</li>
        </ul>
      </div>
      <div className="mt-5 lg:mt-0">
        <div>
          <p className="text-xl">someone@gmail.com</p>
        </div>
        <div className="mt-4">
          <button className="border-2 border-black px-4 py-1 font-bold">
            Resume
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-8">
          <img src={linkedinIcon} alt="linkedin-icon" />
          <img src={behanceIcon} alt="behance-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
