import VideoPlayer from "../components/VideoPlayer";

const Work = ({ video, title, content }) => {
  return (
    <div className="mt-20">
      <div>
        <VideoPlayer videoSrc={video} />
      </div>
      <div className="text-center mt-12 px-12">
        <div>
          <p className="text-4xl font-bold">{title}</p>
        </div>
        <div>
          <p className="mt-5">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
