import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";
import HeroImg from "../../assets/hero.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-14 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold leading-[160%]">
        Unlocking Opportunities Your Ultimate Talent Spotter and Dream Job
        Finder
      </h1>
      <p className="text-xl leading-[150%] max-w-[807px] pt-6 pb-10">
        Unleash your limitless potential, embark on an adventure of endless
        possibilities, and let our powerful platform serve as your ultimate
        talent spotter, skillfully connecting you with dream job opportunities
        that align with your aspirations.
      </p>
      <StyledAuthButtton width="194px" height="48px">
        <p className="text-xl">Get Started</p>
      </StyledAuthButtton>
      <div className="-mt-20">
      <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
