import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";

import bos1 from "./images/home-page-image/bos-1.jpeg";
import bos2 from "./images/home-page-image/bos-2.png";
import newPlanet1 from "./images/home-page-image/new-planet-1.png";
import newPlanet2 from "./images/home-page-image/new-planet-2.png";
import newPlanet3 from "./images/home-page-image/new-planet-3.png";
import newBeing1 from "./images/home-page-image/new-being-1.png";
import newBeing2 from "./images/home-page-image/new-being-2.png";
import tonic1 from "./images/home-page-image/tonic-1.png";
import tonic2 from "./images/home-page-image/tonic-2.png";
import csa1 from "./images/home-page-image/csa-1.png";
import aynjil1 from "./images/home-page-image/aynjil-1.png";
import entelect1 from "./images/home-page-image/entelect-1.png";
import entelect2 from "./images/home-page-image/entelect-2.png";
import tonicVideo from "./images/home-page-image/Tonic_social_28_July_1x1.mp4";
import heyHalfwayVideo from "./images/home-page-image/HH_Stache It (4x5).mp4";

export default function App() {
  return (
    <div className="">
      <div className="navbar relative px-8 py-12 lg:px-20 xl:px-80">
        <Navbar />
      </div>
      <div className="hero-section mt-20 xl:px-80">
        <div className="lg:grid grid-cols-2 space-y-12">
          <div className="lg:flex flex-col justify-center lg:ml-12 lg:mt-12 space-y-8">
            <p className="text-4xl font-bold tracking-wider leading-8 px-10">
              Hi. <br /> I'm Kashia Rees.
            </p>
            <p className="text-lg tracking-tighter leading-6 font-custom px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="relative">
            <ImageItem image={bos2} />
          </div>
        </div>
      </div>
      <div className="work-section lg:mt-20 xl:px-80">
        <div className="lg:grid grid-cols-2">
          <div className="hidden lg:block">
            <ImageItem image={newPlanet1} />
          </div>
          <div>
            <p className="lg:flex flex-col justify-center text-2xl font-custom mt-20 lg:mt-0 px-10 lg:px-20">
              Write
            </p>
            <p className="tracking-tighter leading-6 font-custom mt-4 px-10 lg:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <p className="text-2xl font-custom mt-20 px-10">Previous work</p>
        <div className="md:grid grid-cols-2 lg:grid-cols-3 mt-4 lg:gap-4">
          <ImageItem image={newPlanet1} script={"New Planet"} />
          <ImageItem image={tonic1} script={"Tonic"} />
          <ImageItem image={newBeing1} script={"Noobeing"} />
          <ImageItem image={bos1} script={"MAKE-IT-BOS"} />
          <ImageItem image={entelect1} script={"Entelect"} />
          <ImageItem image={csa1} script={"Cricket SA"} />
        </div>
      </div>
      <div>
        <div className="mt-20 px-10 lg:px-20 xl:px-80">
          <p className="text-2xl font-custom">About</p>
          <p className="tracking-tighter leading-6 font-custom mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="mt-20 flex justify-center">
          <VideoPlayer videoSrc={heyHalfwayVideo} />
        </div>
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 mt-4 xl:mt-40 lg:gap-4 px-80">
          <ImageItem image={newPlanet2} script={"New Planet"} />
          <ImageItem image={newPlanet3} script={"Tonic"} />
          <ImageItem image={newBeing2} script={"Noobeing"} />
          <ImageItem image={aynjil1} script={"Anyjil"} />
          <ImageItem image={entelect2} script={"Entelect"} />
          <ImageItem image={tonic2} script={"Tonic"} />
        </div>
        <div className="text-center mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
