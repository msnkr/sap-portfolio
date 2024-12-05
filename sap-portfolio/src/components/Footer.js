import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className=" text-center">
      <div className="mt-12">
        <Logo />
      </div>
      <div className="mt-5">
        <ul className="text-center space-y-1 text-lg">
          <li className="cursor-pointer">Jim Beam</li>
          <li className="cursor-pointer">Mukuru</li>
          <li className="cursor-pointer">Bos</li>
          <li className="cursor-pointer">Tonic</li>
          <li className="cursor-pointer">Hey Halfway</li>
        </ul>
      </div>
      <div className="mt-5">
        <div>
          <p className="text-xl">someone@gmail.com</p>
        </div>
        <div className="mt-4">
          <button className="border-2 border-black px-4 py-1 font-bold">
            Resume
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-8">
          <img src={linkedinIcon} />
          <img src={behanceIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
