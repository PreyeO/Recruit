import { useState } from "react";
import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";
import HeroImg from "../../assets/hero.png";
import Carousel1 from "../../assets/caro1.png";
import Carousel2 from "../../assets/caro2.png";
import Carousel3 from "../../assets/caro3.png";
import Carousel4 from "../../assets/caro4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";

type Props = {};

const Hero = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSelection = (selection: string) => {
    console.log(`Selected option: ${selection}`);
  };

  return (
    <section className="my-10 lg:py-14 flex flex-col items-center text-center">
      <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-[160%]">
        Unlocking Opportunities Your Ultimate Talent Spotter and Dream Job
        Finder
      </h1>
      <p className="text-sm lg:text-xl leading-[150%] max-w-[807px] pt-6 pb-10">
        Unleash your limitless potential, embark on an adventure of endless
        possibilities, and let our powerful platform serve as your ultimate
        talent spotter, skillfully connecting you with dream job opportunities
        that align with your aspirations.
      </p>
      <StyledAuthButtton
        width="194px"
        height="48px"
        onClick={handleGetStartedClick}
      >
        <p className="text-xl">Get Started</p>
      </StyledAuthButtton>
      <figure className="-mt-10 lg:-mt-20 hidden md:block">
        <img src={HeroImg} alt="hero" />
      </figure>
      <figure className="md:hidden mt-10 block">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          interval={5000}
          transitionTime={500}
        >
          <img src={Carousel1} alt="carousel1" />
          <img src={Carousel2} alt="carousel2" />
          <img src={Carousel3} alt="carousel3" />
          <img src={Carousel4} alt="carousel4" />
        </Carousel>
      </figure>
      {showModal && (
        <div className="overlay" onClick={handleCloseModal}>
          <Modal onClose={handleCloseModal} onSelection={handleSelection} />
        </div>
      )}
    </section>
  );
};

export default Hero;
