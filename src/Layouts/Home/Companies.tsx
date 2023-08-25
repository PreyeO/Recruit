import Google from "../../assets/google.png";
import Airbnb from "../../assets/airbnb.png";
import Flutterwave from "../../assets/flutterwave.png";
import Binance from "../../assets/binance.png";
import Tesla from "../../assets/tesla.png";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

const Companies = (props: Props) => {
  const Tcompanies = [Google, Airbnb, Flutterwave, Binance, Tesla];

  return (
    <section className="h-52 flex flex-col justify-center gap-10 mb-10 lg:mb-24">
      <div className="bg-[#060d11] h-52 absolute left-0 w-full -z-10" />
      <div className="text-3xl text-white text-center">Trusted By</div>
      <div className="flex gap-4 md:gap-6 h-[42px] flex-wrap justify-center">
          {Tcompanies.map((company) => (
            <img
              src={company}
              alt={company}
              key={company}
              className="w-[80px] md:w-[120px] lg:w-[150px] object-contain"
            />
          ))}
      </div>
    </section>
  );
};

export default Companies;
