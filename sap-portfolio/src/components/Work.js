import VideoPlayer from "../components/VideoPlayer";

const Work = ({ image, title, content }) => {
  return (
    <div className="mt-20 lg:grid grid-cols-2 items-center">
      <div className="flex justify-center">
        <img src={image} className="w-full h-60 object-cover" />
      </div>
      <div className="text-center mt-12 px-12">
        <div>
          <p className="text-4xl font-bold">{title}</p>
        </div>
        <div>
          <p className="mt-5">{content}</p>
        </div>
        <div>
          <p className="text-lg font-bold cursor-pointer text-center mt-12">
            View More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
