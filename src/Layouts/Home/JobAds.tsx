import LandingBtn from "../../Components/UI/Buttons/LandingBtn";
import JobAdImg from "../../assets/jobAd.png";

type Props = {};

const JobAds = (props: Props) => {
  return (
    <section className="flex gap-16">
      <div className="flex-1">
        <h2 className="text-6xl font-bold leading-[140%]">
          We’re always here. Employees come and go
        </h2>
        <p className="text-xl leading-[160%] pt-6 pb-14">
          Discover the optimal match for your startup and get the best results
          together.
        </p>
        <LandingBtn label="Learn More" />
      </div>
      <div className="flex-1 bg-[#8e9faa] rounded-[20px]">
        <img src={JobAdImg} alt="" />
      </div>
    </section>
  );
};

export default JobAds;
