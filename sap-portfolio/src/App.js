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

import csaData from "./data/cricket-sa.json";
import csaImage from "./images/cricket-sa-1.png";

import tonicData from "./data/tonic.json";
import tonicImage from "./images/tonic-3.png";

import newPlanet from "./data/new-planet.json";
import newPlanetImage from "./images/new-planet.png";

import heyHalfwayData from "./data/hey-halfway.json";
import heyHalfwayImage from "./images/hey-halfway.png";

import mukuruGridImage from "./images/mukuru-2.png";
import entelectGridImage from "./images/entelect-2.png";
import cricketSAGridImage from "./images/cricket-sa-2.png";
import noobeingImage from "./images/noobeing.png";
import oneDayOnlyImage from "./images/one-day-only.png";
import gameImage from "./images/game.png";

import { useState } from "react";
import { Element } from "react-scroll";

export default function App() {
  const [navHeight, setNavHeight] = useState(false);

  return (
    <div className="font-fontContent">
      <Element name="home">
        <div className="navbar relative px-8 py-12 lg:px-20 xl:px-40">
          <Navbar />
        </div>
      </Element>
      <div className="opening-section p-12 text-center">
        <div>
          <p
            className={`${
              navHeight ? "mt-28" : "mt-16"
            } text-4xl font-bold font-fontTitle duration-500`}
          >
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
            brand={jimBeamData.brand}
            contentChallenge={jimBeamData.contentChallenge}
            contentSolution={jimBeamData.contentSolution}
            link={jimBeamData.link}
          />
        </Element>
        <Element name="mukuru">
          <RightWork
            image={mukuruImage}
            title={mukuruData.title}
            brand={mukuruData.brand}
            contentChallenge={mukuruData.contentChallenge}
            contentSolution={mukuruData.contentSolution}
            link={mukuruData.link}
          />
        </Element>
        <Element name="bos">
          <LeftWork
            image={bosImage}
            title={bosData.title}
            brand={bosData.brand}
            contentChallenge={bosData.contentChallenge}
            contentSolution={bosData.contentSolution}
            link={bosData.link}
          />
        </Element>
        <Element name="csa">
          <RightWork
            image={csaImage}
            title={csaData.title}
            brand={csaData.brand}
            contentChallenge={csaData.contentChallenge}
            contentSolution={csaData.contentSolution}
            link={csaData.link}
          />
        </Element>
        <Element name="new-planet">
          <LeftWork
            image={newPlanetImage}
            title={newPlanet.title}
            brand={newPlanet.brand}
            contentChallenge={newPlanet.contentChallenge}
            contentSolution={newPlanet.contentSolution}
            link={newPlanet.link}
          />
        </Element>
        <Element name="tonic">
          <RightWork
            image={tonicImage}
            title={tonicData.title}
            brand={tonicData.brand}
            contentChallenge={tonicData.contentChallenge}
            contentSolution={tonicData.contentSolution}
            link={tonicData.link}
          />
        </Element>
        <Element name="heyhalfway">
          <LeftWork
            image={heyHalfwayImage}
            title={heyHalfwayData.title}
            brand={heyHalfwayData.brand}
            contentChallenge={heyHalfwayData.contentChallenge}
            contentSolution={heyHalfwayData.contentSolution}
            link={heyHalfwayData.link}
          />
        </Element>
      </div>
      <div className="more-work-section mt-20">
        <div>
          <p className="text-2xl text-center font-fontTitle">
            Like what you’re seeing? <br /> Check out more of my work here.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2">
          <ImageComponent image={mukuruGridImage} />
          <ImageComponent image={entelectGridImage} />
          <ImageComponent image={cricketSAGridImage} />
          <ImageComponent image={noobeingImage} />
          <ImageComponent image={oneDayOnlyImage} />
          <ImageComponent image={gameImage} />
        </div>
        <div>
          <p className="text-2xl text-center font-fontTitle mt-12">
            Congrats you made it to the end! <br /> The only prize is my
            gratitude.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
