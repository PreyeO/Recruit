import { FC } from "react";
import AuthTitle from "../../Components/UI/Titles/AuthTitle";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";
import { AiOutlineDollar } from "react-icons/ai";
// import USD from "../../assets/usd.png";

// interface Props {
//   label: string;
// }

const JobPost: FC = () => {
  return (
    <section className="flex flex-col pb-8 md:pb-0">
      <div className="h-[2px] my-10 left-0 bg-[#8e9faa] w-full"></div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <AuthTitle title="Product Manager" />
          <div className="hidden md:block">
            <HomeBtn label="Apply" icon="SideArrow" />
          </div>
        </div>
        <div className="flex gap-6 text-sm md:text-xl py-4 md:py-6 font-bold">
          <p>BiffCo Enterprises LTD.</p>
          <p>*</p>
          <p>Full-Time</p>
        </div>

        <div className="max-w-[760px]">
          <p className="text-sm md:text-xl">
            Biffco Enterprises Ltd. is seeking a highly skilled and motivated
            Project Manager to join our dynamic team. As a Project Manager, you
            will be responsible for overseeing and delivering various projects
            within our organization.
          </p>
        </div>
        <div className="flex gap-3 pt-4 mb-4 items-center">
          <figure>
            <AiOutlineDollar size={20} />
          </figure>
          <h4>$50K - $60K</h4>
        </div>
        <div className="md:hidden block">
            <HomeBtn label="Apply" icon="SideArrow" />
          </div>
      </div>
    </section>
  );
};

export default JobPost;
