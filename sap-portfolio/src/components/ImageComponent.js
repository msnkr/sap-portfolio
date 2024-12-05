const ImageComponent = ({ image }) => {
  return (
    <div>
      <img src={image} className="w-full h-40 object-cover" />
    </div>
  );
};

export default ImageComponent;
