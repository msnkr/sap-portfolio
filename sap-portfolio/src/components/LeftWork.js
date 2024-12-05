const LeftWork = ({ image, title, contentChallenge, contentSolution }) => {
  return (
    <div className="mt-12">
      <div>
        <img className="w-full h-56 object-cover" src={image} />
      </div>
      <div className="text-center px-2">
        <div className="mt-12">
          <p className="text-4xl font-bold">{title}</p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold">The Challenge:</span> {contentChallenge}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">The Solution:</span> {contentSolution}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftWork;
