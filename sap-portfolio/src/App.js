import Navbar from "./components/Navbar";
import ImageItem from "./components/ImageItem";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="relative px-8 py-8">
        <Navbar />
      </div>
      <div className="px-8 space-y-8">
        <p className="w-9/12 text-4xl font-bold tracking-wider leading-8">
          Hi. <br /> I'm Kashia Rees.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </div>
  );
}
