import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";

import bos from "./images/home-page-image/bos-1.jpeg";

export default function App() {
  return (
    <div>
      <div className="navbar relative px-8 py-8">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="space-y-6">
          <p className="w-9/12 text-4xl font-bold tracking-wider leading-8 px-8">
            Hi. <br /> I'm Kashia Rees.
          </p>
          <p className="px-8 text-lg tracking-tighter leading-6 font-custom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-4xl z-50 font-bold">
              <p>MAKE-IT-BOS</p>
            </div>
            <div className="bg-black w-full h-64 absolute top-0 left-0 opacity-25"></div>
            <img src={bos} className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
      <div className="work-section pt-8 space-y-8">
        <p className="px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
