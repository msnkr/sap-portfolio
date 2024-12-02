import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";

import mukuru from "./images/home-page-image/mukuru-1.png";
import tonic from "./images/home-page-image/tonic-1.png";
import heyHalfway from "./images/home-page-image/hey-halfway-1.png";
import jimBeam from "./images/home-page-image/jim-beam-3.png";
import bos from "./images/home-page-image/bos-1.png";

export default function App() {
  return (
    <div>
      <div className="navbar-section p-12">
        <Navbar />
      </div>
      <div className="main-image-section my-12">
        <ImageItem image={mukuru} brand={"Mukuru"} script={"Lorem Ipsum"} />
        <ImageItem image={tonic} brand={"Tonic"} script={"Lorem Ipsum"} />
        <ImageItem
          image={heyHalfway}
          brand={"Hey-Halfway"}
          script={"Lorem Ipsum"}
        />
        <ImageItem image={jimBeam} brand={"Jim Beam"} script={"Lorem Ipsum"} />
        <ImageItem image={bos} brand={"BOS"} script={"Lorem Ipsum"} />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}
