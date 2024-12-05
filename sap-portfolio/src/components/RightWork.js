const RightWork = ({ image, title, contentChallenge, contentSolution }) => {
  return (
    <div className="mt-12 lg:grid grid-cols-2 items-center">
      <div className="lg:text-start text-center px-12 lg:px-12">
        <div>
          <p className="text-4xl font-bold font-fontTitle">{title}</p>
        </div>
        <div className="mt-5">
          <span className="font-bold">The Challenge:</span> {contentChallenge}
        </div>
        <div className="mt-4">
          <span className="font-bold">The Solution:</span> {contentSolution}
        </div>
      </div>
      <div className="mt-12">
        <img
          className="w-full h-56 object-cover md:h-[400px] lg:h-[500px]"
          src={image}
          alt={`${title}-image`}
        />
      </div>
    </div>
  );
};

export default RightWork;
