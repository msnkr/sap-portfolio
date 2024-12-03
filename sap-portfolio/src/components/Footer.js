import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <div className="block lg:hidden">
        <Logo />
      </div>
      <div>
        <ul className="text-center space-y-1 font-custom tracking-tight">
          <li>Tonic</li>
          <li>Noobeing</li>
          <li>BOS</li>
          <li>New Planet</li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div>
        <div className="space-y-6 lg:space-y-2">
          <p className="text-xl font-custom tracking-tight">
            someone@gmail.com
          </p>
          <div>
            <button className="border-2 border-black py-1 px-4 font-semibold scale-95 hover:scale-100 duration-300">
              Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 lg:mt-2 space-x-6">
          <img src={linkedinIcon} className="cursor-pointer" />
          <img src={behanceIcon} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
