import ProfilePic from "../../assets/profilepic.png";
import EditTwo from "../../assets/editIconII.png";
import { BsStarFill, BsStar } from "react-icons/bs";

const ProfileInfo = () => {
  return (
    <section className="mb-16">
      <div className="absolute w-full h-20 md:h-40 lg:h-[280px] bg-primary-btn left-0 z-[-1]"></div>
      <div className=" pt-10 md:pt-20 lg:pt-40 flex flex-col lg:flex-row lg:items-end gap-4 md:gap-7">
        <div className="flex items-end justify-between">
        <img src={ProfilePic} alt="logo" className="lg:w-[225px] w-[64px] md:w-32" />
        <div className="flex lg:hidden gap-2 items-center justify-items-end -mb-2 md:mb-0">
          <img src={EditTwo} alt="edit" className="w-4 md:w-7" />
          <p className="text-primary-btn md:text-2xl">Edit</p>
        </div>
        </div>
        <div className="flex gap-2 md:gap-7 h-[90px]">
          <div className="basis-1/3">
            <h2 className="font-bold md:text-3xl text-dark-gray">Ronald Richards</h2>
            <p className="pt-1 text-light-gray text-xs sm:text-base">Lafayette, California</p>
          </div>
          <div className="w-[3px] h-20 bg-light-gray" />
          <div className="md:max-w-[544px] basis-2/3">
            <p className="font-semibold text-sm sm:text-base">
              I am a mobile app developer with expertise in iOS and Android
              platforms.
            </p>
            <div className="flex gap-[3px] items-center pt-1 text-primary-btn">
              <p className="text-light-gray text-sm md:text-base">Rating:</p>
              <BsStarFill /> <BsStarFill />
              <BsStarFill /> <BsStar /> <BsStar />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 items-center justify-items-end mb-8">
          <img src={EditTwo} alt="edit" />
          <p className="text-2xl text-primary-btn">Edit</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
