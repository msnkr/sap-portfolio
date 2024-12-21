const RightWork = ({
  image,
  title,
  brand,
  contentChallenge,
  contentSolution,
  link,
}) => {
  return (
    <div className="mt-12 lg:grid grid-cols-2 items-center">
      <div className="lg:text-end text-center px-12 lg:px-12">
        <div>
          <p className="text-4xl font-bold font-fontTitle">{title}</p>
        </div>
        <div>
          <p>{brand}</p>
        </div>
        <div className="mt-5">
          <span className="font-bold">The Challenge:</span> {contentChallenge}
        </div>
        <div className="mt-4">
          <span className="font-bold">The Solution:</span> {contentSolution}
        </div>
        <div className="mt-4">
          <p className="text-center font-semibold underline underline-offset-4">
            <a href={link} target="_blank" rel="noreferrer">
              View more
            </a>
          </p>
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
