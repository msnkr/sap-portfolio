import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";

import bos1 from "./images/home-page-image/bos-1.jpeg";
import bos2 from "./images/home-page-image/bos-2.png";
import newPlanet1 from "./images/home-page-image/new-planet-1.png";
import newBeing1 from "./images/home-page-image/new-being-1.png";
import tonic1 from "./images/home-page-image/tonic-1.png";
import csa1 from "./images/home-page-image/csa-1.png";
import entelect1 from "./images/home-page-image/entelect-1.png";

export default function App() {
  return (
    <div className="">
      <div className="navbar relative">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="lg:grid grid-cols-2">
          <div className="lg:flex flex-col justify-center">
            <p className="text-4xl font-bold tracking-wider leading-8 px-10">
              Hi. <br /> I'm Kashia Rees.
            </p>
            <p className="text-lg tracking-tighter leading-6 font-custom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="relative">
            <div className="bg-black w-full h-64 absolute top-0 left-0 opacity-25"></div>
            <img
              src={bos2}
              className="w-full h-64 object-cover"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="work-section">
        <div className="text-center">
          <p className="text-2xl font-custom ">Write</p>
          <p className="tracking-tighter leading-6 font-custom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <p className="text-2xl font-custom">Previous work</p>
        <div className="md:grid grid-cols-2 lg:grid-cols-3">
          <ImageItem image={newPlanet1} script={"New Planet"} />
          <ImageItem image={tonic1} script={"Tonic"} />
          <ImageItem image={newBeing1} script={"Noobeing"} />
          <ImageItem image={bos1} script={"MAKE-IT-BOS"} />
          <ImageItem image={entelect1} script={"Entelect"} />
          <ImageItem image={csa1} script={"Cricket SA"} />
        </div>
      </div>
      <div>
        <div>
          <p className="text-2xl font-custom">About</p>
          <p className="tracking-tighter leading-6 font-custom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
