import Navbar from "./components/Navbar";
import LeftWork from "./components/LeftWork";
import RightWork from "./components/RightWork";
import ImageComponent from "./components/ImageComponent";
import Footer from "./components/Footer";

import jimBeamData from "./data/jim-beam.json";
import jimBeamImage from "./images/jim-beam.png";

import mukuruData from "./data/mukuru.json";
import mukuruImage from "./images/mukuru.png";

import bosData from "./data/bos.json";
import bosImage from "./images/bos.png";

import tonicData from "./data/tonic.json";
import tonicImage from "./images/tonic.png";

import heyHalfwayData from "./data/hey-halfway.json";
import heyHalfwayImage from "./images/hey-halfway.png";

import cricketSaImage from "./images/cricket-sa.png";
import entelectImage from "./images/entelect.png";
import newPlanetImage from "./images/new-planet.png";
import noobeingImage from "./images/noobeing.png";
import oneDayOnlyImage from "./images/one-day-only.png";
import gameImage from "./images/game.png";

export default function App() {
  return (
    <div className="">
      <div className="navbar relative px-8 py-12 lg:px-20 xl:px-40">
        <Navbar />
      </div>
      <div className="opening-section p-12 text-center">
        <div>
          <p className="text-4xl font-bold">Hello. I'm Kashia!</p>
        </div>
        <p className="mt-5 lg:px-40">
          I’m a mid-weight copywriter with over 7 years of experience in
          writing. I graduated with an honours in Film and TV from Wits and
          started my career in script writing. I then found my love for
          copywriting and have a short copywriting course certificate from
          London University of the Arts. In my advertising career, I’ve had the
          privilege t work with incredible people and brands from conceptual
          phase right to managing and nurturing the brand. There is nothing more
          that I love about my work than solving problems creatively. Using my
          skills in social media writing, TV ads, radio competitions and ads,
          print and outdoor, websites and SEO, chat bots… to find creative ways
          to solv problems. Thank you for taking the time to check out my work.
          Now, let’s get to the goods.
        </p>
        <p className="mt-12 font-bold text-lg cursor-pointer">
          Jump to the work
        </p>
      </div>
      <div className="work-section">
        <LeftWork
          image={jimBeamImage}
          title={jimBeamData.title}
          contentChallenge={jimBeamData.contentChallenge}
          contentSolution={jimBeamData.contentSolution}
        />
        <RightWork
          image={mukuruImage}
          title={mukuruData.title}
          contentChallenge={mukuruData.contentChallenge}
          contentSolution={mukuruData.contentSolution}
        />
        <LeftWork
          image={bosImage}
          title={bosData.title}
          contentChallenge={bosData.contentChallenge}
          contentSolution={bosData.contentSolution}
        />
        <RightWork
          image={tonicImage}
          title={tonicData.title}
          contentChallenge={tonicData.contentChallenge}
          contentSolution={tonicData.contentSolution}
        />
        <LeftWork
          image={heyHalfwayImage}
          title={heyHalfwayData.title}
          contentChallenge={heyHalfwayData.contentChallenge}
          contentSolution={heyHalfwayData.contentSolution}
        />
      </div>
      <div className="more-work-section mt-20">
        <div>
          <p className="text-xl font-bold cursor-pointer text-center">
            More Work
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-3">
          <ImageComponent image={cricketSaImage} />
          <ImageComponent image={entelectImage} />
          <ImageComponent image={newPlanetImage} />
          <ImageComponent image={noobeingImage} />
          <ImageComponent image={oneDayOnlyImage} />
          <ImageComponent image={gameImage} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
