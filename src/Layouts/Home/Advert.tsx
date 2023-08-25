import { FC } from "react";
import AdvertCard from "../../Components/UI/Cards/AdvertCard";
import { AiFillStar } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

import { BsHandThumbsUp } from "react-icons/bs";
// interface Props {
//   label: string;
// }

const Advert: FC = () => {
  return (
    <section className="flex flex-col my-10 rounded-md bg-[#8E9FAA] py-10 px-4 md:py-28 md:px-10">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl lg:w-[571px] pb-6 mx-auto leading-[140%] font-bold">
          Leverage global world class talented people
        </h1>
        <p className="text-sm md:text-base">
          Discover the optimal match for your startup and get the best results
          together.
        </p>
      </div>
      <div className="flex justify-around flex-col md:flex-row gap-6 pt-14">
        <AdvertCard
          title="80% Faster hiring"
          desc="No more back and forth find the right qualified candidates"
          icon={<AiFillStar size={25} />}
        />
        <AdvertCard
          title="Decrease spending"
          desc="Find the right candidates and pay cheaper than market price"
          icon={<BsHandThumbsUp size={25} />}
        />
        <AdvertCard
          title="Top 0.1% candidates"
          desc="Find the right candidates and pay cheaper than market price"
          icon={<BsStars size={25} />}
        />
      </div>
    </section>
  );
};

export default Advert;
