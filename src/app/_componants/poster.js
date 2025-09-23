import { Starticon } from "../icons/Staricon";

export const Poster = (props) => {
  const { image, title, rate } = props;
  return (
    <div>
      <div className="w-58 h-92 bg-[#F4F4F5]  ">
        <img
          className="w-58 h-70  hover:opacity-20 cursor-pointer"
          src={image}
        ></img>
        <div className="ml-5 flex gap-2 mt-3">
          <Starticon />
          <p>
            {rate}/<span className="text-xs">10</span>
          </p>
        </div>
        <div className="ml-5">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
