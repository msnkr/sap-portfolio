const RightWork = ({ image, title, contentChallenge, contentSolution }) => {
  return (
    <div>
      <div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>The Challenge: {contentChallenge}</p>
        </div>
        <div>
          <p>The Solution: {contentSolution}</p>
        </div>
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default RightWork;
