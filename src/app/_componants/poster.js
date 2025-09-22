export const Poster = (props) => {
  const { image, icon, title } = props;
  return (
    <div>
      <div className="w-58 h-92 bg-[#F4F4F5]  ">
        <img
          className="w-58 h-70  hover:opacity-20 cursor-pointer"
          src={image}
        ></img>
        <div className="ml-5 flex gap-2 mt-3">
          {icon}
          <p>
            6.9/<span className="text-xs">10</span>
          </p>
        </div>
        <div className="ml-5">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
