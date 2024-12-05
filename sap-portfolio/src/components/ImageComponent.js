const ImageComponent = ({ image }) => {
  return (
    <div>
      <img src={image} className="w-full h-40 object-cover lg:h-96" />
    </div>
  );
};

export default ImageComponent;
