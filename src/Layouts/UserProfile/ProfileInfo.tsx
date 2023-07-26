import ProfilePic from "../../assets/profilepic.png";
import EditTwo from "../../assets/editIconII.png";
import { BsStarFill, BsStar } from "react-icons/bs";

const ProfileInfo = () => {
  return (
    <section className="mb-16">
      <div className="absolute w-full h-[280px] bg-primary-btn left-0 z-[-1]"></div>
      <div className="pt-40 flex items-end gap-7">
        <img src={ProfilePic} alt="logo" className="w-[225px]" />
        <div className="flex gap-7 h-[90px]">
          <div>
            <h2 className="text-3xl text-dark-gray">Ronald Richards</h2>
            <p className="pt-3 text-light-gray">Lafayette, California</p>
          </div>
          <div className="w-[3px] h-20 bg-light-gray" />
          <div className="max-w-[544px]">
            <p className="font-semibold">
              I am a mobile app developer with expertise in iOS and Android
              platforms.
            </p>
            <div className="flex gap-[3px] items-center pt-3 text-primary-btn">
              <p className="text-light-gray">Rating:</p>
              <BsStarFill /> <BsStarFill />
              <BsStarFill /> <BsStar /> <BsStar />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-items-end mb-8">
          <img src={EditTwo} alt="edit" />
          <p className="text-2xl text-primary-btn">Edit</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
