import { FC } from "react";
import AuthTitle from "../../Components/UI/Titles/AuthTitle";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";
import AuthSpan from "../../Components/UI/Titles/AuthSpan";
import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";
import USD from "../../assets/usd.png";

// interface Props {
//   label: string;
// }

const JobPost: FC = () => {
  return (
    <section className="flex flex-col pb-8">
      <div className="flex flex-col px-14">
        <div className="flex justify-between py-10">
          <AuthTitle title="Product Manager" />
          <HomeBtn label="Apply" icon="SideArrow" />
        </div>
        <div className="flex gap-6">
          <h4>BiffCo Enterprises LTD.</h4>
          <h4>* Full-Time</h4>
        </div>

        <div className="pt-6 max-w-[760px]">
          <AuthSpan
            title="   Biffco Enterprises Ltd. is seeking a highly skilled and motivated
            Project Manager to join our dynamic team. As a Project Manager, you
            will be responsible for overseeing and delivering various projects
            within our organization."
          />
          <div className="flex gap-4 pt-3 mb-4">
            <figure className="bg-white rounded-[20px]">
              <img src={USD} alt="" />
            </figure>
            <h4>$50K - $60K</h4>
          </div>
          <div className="absolute h-[2px] left-0 bg-[#8e9faa] w-full"></div>
        </div>

        <div className="flex justify-between py-10">
          <AuthTitle title="Photographer" />
          <HomeBtn label="Apply" icon="SideArrow" />
        </div>
        <div className="flex gap-6">
          <h4>Big Kahuna Burger Ltd.</h4>
          <h4>* Contract</h4>
        </div>

        <div className="pt-6 max-w-[760px]">
          <AuthSpan
            title="   Biffco Enterprises Ltd. is seeking a highly skilled and motivated
            Project Manager to join our dynamic team. As a Project Manager, you
            will be responsible for overseeing and delivering various projects
            within our organization."
          />
          <div className="flex gap-4 pt-3 mb-4">
            <figure className="bg-white rounded-[20px]">
              <img src={USD} alt="" />
            </figure>
            <h4>$50K - $60K</h4>
          </div>
          <div className="absolute h-[2px] left-0 bg-[#8e9faa] w-full"></div>
        </div>

        <div className="flex justify-between py-10">
          <AuthTitle title="UI/UX Designer" />
          <HomeBtn label="Apply" icon="SideArrow" />
        </div>
        <div className="flex gap-6">
          <h4>Acme Co.</h4>
          <h4>* Part-Time</h4>
        </div>
        <div className="pt-6 max-w-[760px]">
          <AuthSpan
            title="   Biffco Enterprises Ltd. is seeking a highly skilled and motivated
            Project Manager to join our dynamic team. As a Project Manager, you
            will be responsible for overseeing and delivering various projects
            within our organization."
          />
          <div className="flex gap-4 pt-3 mb-4">
            <figure className="bg-white rounded-[20px]">
              <img src={USD} alt="" />
            </figure>
            <h4>$50K - $60K</h4>
          </div>
        </div>
        <StyledAuthButtton
          width="230px"
          height="60px"
          className="mt-10 self-center"
        >
          <p className="text-2xl font-bold">See More</p>
        </StyledAuthButtton>
      </div>
    </section>
  );
};

export default JobPost;
