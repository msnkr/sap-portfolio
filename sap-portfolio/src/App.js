import Navbar from "./components/Navbar";
import Work from "./components/Work";

// import jimBeamData from "./data/jim-beam.json";

import bosData from "./data/bos.json";
import bosVideo from "./images/bos.mp4";

import tonicData from "./data/tonic.json";
import tonicVideo from "./images/tonic.mp4";

import heyHalfwayData from "./data/hey-halfway.json";
import heyHalfwayVideo from "./images/heyhalfway.mp4";

export default function App() {
  return (
    <div>
      <div className="navbar relative px-8 py-12">
        <Navbar />
      </div>
      <div className="opening-section p-12 text-center">
        <div>
          <p className="text-4xl font-bold">Hello. I'm Kashia!</p>
        </div>
        <p className="mt-5">
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
        <Work
          video={bosVideo}
          title={bosData.title}
          content={bosData.content}
        />
        <Work
          video={tonicVideo}
          title={tonicData.title}
          content={tonicData.content}
        />
        <Work
          video={heyHalfwayVideo}
          title={heyHalfwayData.title}
          content={heyHalfwayData.content}
        />
      </div>
      <div className="more-work-section"></div>
    </div>
  );
}
