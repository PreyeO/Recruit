import { FC } from "react";
import Info from "../../assets/Info.svg";
import Infos from "../../assets/Infos.svg";
// interface Props {
//   label: string;
// }

const MoreInfo: FC = () => {
  return (
    <section className="flex flex-col ">
      <figure className="mt-10">
        <img src={Info} alt="" />
      </figure>
      <figure className="mt-12 mb-12">
        <img src={Infos} alt="" />
      </figure>
    </section>
  );
};

export default MoreInfo;
