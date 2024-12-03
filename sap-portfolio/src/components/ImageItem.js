const ImageItem = ({ logo, script, image }) => {
  return (
    <div>
      <div className="relative">
        <img src={image} alt={`${script}-image`} />
        <p>{script}</p>
        <img src={logo} alt={`${script}-logo`} />
      </div>
    </div>
  );
};

export default ImageItem;
