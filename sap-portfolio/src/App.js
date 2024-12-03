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
      <div className="navbar relative px-10 py-8">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="space-y-12">
          <p className="w-9/12 text-4xl font-bold tracking-wider leading-8 px-10">
            Hi. <br /> I'm Kashia Rees.
          </p>
          <p className="px-10 text-lg tracking-tighter leading-6 font-custom md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
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
      <div className="work-section pt-8 ">
        <p className="px-10 text-2xl font-custom mb-4">Write</p>
        <p className="px-10 tracking-tighter leading-6 font-custom mb-8 md:w-9/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="px-8 text-2xl font-custom mb-2">Previous work</p>
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
          <p className="px-10 text-2xl font-custom mb-4 mt-12">About</p>
          <p className="px-10 tracking-tighter leading-6 font-custom md:w-9/12">
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
        <div className="p-12 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
