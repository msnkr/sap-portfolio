import VideoPlayer from "../components/VideoPlayer";

const Work = ({ isReversed, image, title, content }) => {
  return (
    <div className="lg:grid grid-cols-2 items-center mt-20">
      <div className="">
        <img
          src={image}
          className={`${
            isReversed ? "col-start-2 col-end-3" : "col-start-1 col-end-2"
          } w-full lg:h-[500px] h-60 object-cover`}
        />
      </div>
      <div className="text-center lg:mt-0 mt-12 px-12">
        <div>
          <p className="text-4xl font-bold">{title}</p>
        </div>
        <div>
          <p className="mt-5">{content}</p>
        </div>
        <div>
          <p className="text-lg font-bold cursor-pointer text-center mt-12 lg:mt-0">
            View More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
