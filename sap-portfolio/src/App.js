import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";

import mukuru from "./images/home-page-image/mukuru-1.png";
import tonic from "./images/home-page-image/tonic-1.png";
import heyHalfway from "./images/home-page-image/hey-halfway-1.png";
import jimBeam from "./images/home-page-image/jim-beam-1.png";
import bos from "./images/home-page-image/bos-1.png";

export default function App() {
  return (
    <div className="select-none">
      <div className="navbar-section py-16 px-8 md:p-20 lg:px-40">
        <Navbar />
      </div>
      <div className="main-image-section my-12 py-8">
        <ImageItem
          image={mukuru}
          brand={"Mukuru"}
          script={"Unleashing possibilities"}
        />
        <ImageItem
          image={tonic}
          brand={"Tonic"}
          script={"Show yourself you care"}
        />
        <ImageItem
          image={heyHalfway}
          brand={"Hey-Halfway"}
          script={"No jokes"}
        />
        <ImageItem
          image={jimBeam}
          brand={"Jim Beam"}
          script={"All together for the music"}
        />
        <ImageItem image={bos} brand={"BOS"} script={"Make it BOS"} />
      </div>
      <div className="footer-section py-16">
        <Footer />
      </div>
    </div>
  );
}
