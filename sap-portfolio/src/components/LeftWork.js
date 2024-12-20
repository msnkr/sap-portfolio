const LeftWork = ({
  image,
  title,
  brand,
  contentChallenge,
  contentSolution,
  link,
}) => {
  return (
    <div className="mt-12 lg:grid grid-cols-2 items-center">
      <div>
        <img
          className="w-full h-56 object-cover md:h-[400px] lg:h-[500px]"
          src={image}
          alt={`${title}-image`}
        />
      </div>
      <div className="lg:text-start text-center px-12 lg:px-12">
        <div className="mt-12">
          <p className="text-4xl font-bold font-fontTitle">{title}</p>
        </div>
        <div>
          <p>{brand}</p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold">The Challenge:</span> {contentChallenge}
          </p>
        </div>
        <div>
          <p className="mt-4">
            <span className="font-bold">The Solution:</span> {contentSolution}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-center font-semibold underline underline-offset-4">
            <a href={link} target="_blank" rel="noreferrer">
              View more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftWork;
