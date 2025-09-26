export const HeroImage = (props) => {
  const { rate, title, Image } = props;

  return (
    <div className="flex text-white-50 text-white flex-col justify-center w-280 pl-20 gap-5 absolute">
      <div className="w-36">
        <p className="text-base">Now Playing:</p>
        <p className="text-4xl">Wicked</p>
        <p></p>
      </div>

      <div className="w-100 text-base">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the // Land
        of Oz. After an encounter with the Wonderful Wizard of Oz, // their
        friendship reaches a crossroads.
      </div>

      <button className="h-10 w-36 bg-emerald-100 cursor-pointer rounded-xl">
        <p className="text-black">Watch Trailer</p>
      </button>
    </div>
  );
};
