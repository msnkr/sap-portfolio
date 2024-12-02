const ImageItem = ({ image, brand, script }) => {
  return (
    <div className="relative">
      <div>
        <img
          src={image}
          className="w-full h-[200px] md:h-[300px] object-cover"
          alt={`${brand}-logo`}
        />
        <div className="absolute top-0 left-0 bg-black w-full h-[200px] opacity-30 md:h-[300px]"></div>
      </div>
      <div>
        <div className="absolute top-1/2 -translate-y-1/2 left-12 text-white">
          <p className="cursor-pointer text-4xl font-semibold">{brand}</p>
          <p className="text-xl">{script}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
