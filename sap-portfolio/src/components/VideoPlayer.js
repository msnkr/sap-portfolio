const VideoPlayer = ({ videoSrc }) => {
  return (
    <div>
      {" "}
      <video width="640" height="360" controls muted>
        {" "}
        <source src={videoSrc} type="video/mp4" /> Your browser does not support
        the video tag.{" "}
      </video>{" "}
    </div>
  );
};

export default VideoPlayer;
