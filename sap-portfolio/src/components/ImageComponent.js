const ImageComponent = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        className="w-full h-56 object-cover md:h-72 lg:h-[500px]"
      />
    </div>
  );
};

export default ImageComponent;
