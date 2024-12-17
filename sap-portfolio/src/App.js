import Navbar from "./components/Navbar";
import LeftWork from "./components/LeftWork";
import RightWork from "./components/RightWork";
import ImageComponent from "./components/ImageComponent";
import Footer from "./components/Footer";

import jimBeamData from "./data/jim-beam.json";
import jimBeamImage from "./images/jim-beam-2.png";

import mukuruData from "./data/mukuru.json";
import mukuruImage from "./images/mukuru.png";

import bosData from "./data/bos.json";
import bosImage from "./images/bos.png";

import tonicData from "./data/tonic.json";
import tonicImage from "./images/tonic-3.png";

import heyHalfwayData from "./data/hey-halfway.json";
import heyHalfwayImage from "./images/hey-halfway.png";

import cricketSaImage from "./images/cricket-sa.png";
import entelectImage from "./images/entelect.png";
import newPlanetImage from "./images/new-planet.png";
import noobeingImage from "./images/noobeing.png";
import oneDayOnlyImage from "./images/one-day-only.png";
import gameImage from "./images/game.png";

import { Element } from "react-scroll";

export default function App() {
  return (
    <div className="font-fontContent">
      <Element name="home">
        <div className="navbar relative px-8 py-12 lg:px-20 xl:px-40">
          <Navbar />
        </div>
      </Element>
      <div className="opening-section p-12 text-center">
        <div>
          <p className="text-4xl font-bold font-fontTitle mt-24">
            Hello. I'm Kashia!
          </p>
        </div>
        <p className="mt-5 lg:px-40">
          I’m a mid-weight copywriter with over seven years of experience. I
          graduated with honours in Film and TV from Wits and started my career
          in script writing. I then found my love for copywriting and completed
          a short copywriting course from the London University of the Arts. In
          my advertising career, I’ve had the privilege of working with
          incredible people and brands from the conceptual phase to managing and
          nurturing them. There is nothing that I love more about my work than
          solving problems creatively using my writing and thinking skills. I’ve
          got experience in big idea thinking in a team, writing for TV,
          digital, social media to long copy, outdoor, and everything else in
          between. <br /> Thank you for taking the time to check out my work.
          Now, let’s get to the good stuff.
        </p>
      </div>
      <div className="work-section">
        <Element name="jim-beam">
          <LeftWork
            image={jimBeamImage}
            title={jimBeamData.title}
            contentChallenge={jimBeamData.contentChallenge}
            contentSolution={jimBeamData.contentSolution}
          />
        </Element>
        <Element name="mukuru">
          <RightWork
            image={mukuruImage}
            title={mukuruData.title}
            contentChallenge={mukuruData.contentChallenge}
            contentSolution={mukuruData.contentSolution}
          />
        </Element>
        <Element name="bos">
          <LeftWork
            image={bosImage}
            title={bosData.title}
            contentChallenge={bosData.contentChallenge}
            contentSolution={bosData.contentSolution}
          />
        </Element>
        <Element name="tonic">
          <RightWork
            image={tonicImage}
            title={tonicData.title}
            contentChallenge={tonicData.contentChallenge}
            contentSolution={tonicData.contentSolution}
          />
        </Element>
        <Element name="hey-halfway">
          <LeftWork
            image={heyHalfwayImage}
            title={heyHalfwayData.title}
            contentChallenge={heyHalfwayData.contentChallenge}
            contentSolution={heyHalfwayData.contentSolution}
          />
        </Element>
      </div>
      <div className="more-work-section mt-20">
        <div>
          <p className="text-3xl font-bold cursor-pointer text-center font-fontTitle">
            More Work
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2">
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
