import Google from "../../assets/google.png";
import Airbnb from "../../assets/airbnb.png";
import Flutterwave from "../../assets/flutterwave.png";
import Binance from "../../assets/binance.png";
import Tesla from "../../assets/tesla.png";

type Props = {};

const Companies = (props: Props) => {
  const Tcompanies = [Google, Airbnb, Flutterwave, Binance, Tesla];

  return (
    <div className="h-52 flex flex-col justify-center gap-10 mb-24">
      <div className="bg-[#060d11] h-52 absolute left-0 w-full -z-10" />
      <div className="text-3xl text-white text-center">Trusted By</div>
      <div className="flex justify-between h-[42px]">
        {Tcompanies.map((company) => (
          <img
            src={company}
            alt={company}
            key={company}
            className="w-48 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
