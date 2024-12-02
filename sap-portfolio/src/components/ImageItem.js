const ImageItem = ({ image, brand, script }) => {
  return (
    <div className="relative">
      <div>
        <img src={image} className="w-full h-[200px]" />
      </div>
      <div>
        <div className="absolute top-1/2 -translate-y-1/2 left-12 text-white text-2xl">
          <p>{brand}</p>
          <p>{script}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
