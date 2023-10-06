import LandingBtn from "../../Components/UI/Buttons/LandingBtn";
import JobAdImg from "../../assets/jobAd.png";
import { Link } from "react-router-dom";

// type Props = {};

const JobAds = () => {
  return (
    <section className="flex gap-16 flex-col md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl md:text-2xl lg:text-6xl font-bold leading-[140%]">
          We’re always here. Employees come and go
        </h2>
        <p className="text-sm lg:text-xl leading-[160%] py-6 lg:pb-14">
          Discover the optimal match for your startup and get the best results
          together.
        </p>
        <Link to="/joblisting">
          {" "}
          <LandingBtn label="Learn More" />
        </Link>
      </div>
      <div className="flex-1 bg-[#8e9faa] rounded-[20px]">
        <img src={JobAdImg} alt="" />
      </div>
    </section>
  );
};

export default JobAds;
