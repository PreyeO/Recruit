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
    <section className="flex flex-col mb-20">
      <div className="bg-[#8E9FAA] h-[600px] pt-10">
        <div className="flex-col justify-center text-center">
          <h1 className=" text-4xl pb-10">
            Leverage global world class talented people
          </h1>

          <p>
            Discover the optimal match for your startup and get the best results
            together.
          </p>
        </div>
        <div className="flex justify-around py-20">
          <div className="h-[260px] w-[397px] bg-white rounded-[20px] pt-12 px-10">
            <AiFillStar size={25} />
            <div className="text-2xl pb-5 pt-3">
              <AdvertCard title="80% Faster hiring" />
            </div>
            <AdvertCard title=" No more back and forth find the right qualified candidates" />
          </div>
          <div className="h-[260px] w-[397px] bg-[#1d3f56] rounded-[20px] pt-12 px-10 text-white">
            <BsHandThumbsUp size={25} />
            <div className="text-2xl pb-5 pt-3">
              <AdvertCard title="Decrease spending" />
            </div>
            <AdvertCard title=" Find the right candidates and pay cheaper than market price" />
          </div>
          <div className="h-[260px] w-[397px] bg-white rounded-[20px] pt-12 px-10">
            <BsStars size={25} />
            <div className="text-2xl pb-5 pt-3">
              <AdvertCard title="Top 0.1% candidates" />
            </div>
            <AdvertCard title="Find the right candidates and pay cheaper than market price" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advert;
