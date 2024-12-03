const ImageItem = ({ logo, script, image }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-96 object-cover"
          src={image}
          alt={`${script}-image`}
        />
        <div className="bg-black w-full h-96 absolute top-0 left-0 opacity-30"></div>
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-bold text-4xl">{script}</p>
          <img className="w-12" src={logo} alt={`${script}-logo`} />
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
