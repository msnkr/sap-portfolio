const ImageItem = ({ script, image }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-80 object-cover"
          src={image}
          alt={`${script}-image`}
        />
        <div className="bg-black w-full h-80 absolute top-0 left-0 opacity-30"></div>
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-bold text-2xl">{script}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
