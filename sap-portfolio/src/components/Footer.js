import Logo from "./Logo";

import linkedinIcon from "../images/icons-linkedin.svg";
import behanceIcon from "../images/icon-behance.svg";

const Footer = () => {
  return (
    <div className="lg:flex justify-between items-center lg:px-40 py-20 xl:px-80">
      <div className="block lg:hidden">
        <Logo />
      </div>
      <div>
        <ul className="text-center font-custom tracking-tight mt-8 space-y-2">
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
        <div className="mt-8">
          <p className="text-xl font-custom tracking-tight">
            someone@gmail.com
          </p>
          <div>
            <button className="border-2 border-black py-1 px-4 font-semibold scale-95 hover:scale-100 duration-300 mt-4">
              Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <img src={linkedinIcon} className="cursor-pointer" />
          <img src={behanceIcon} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
