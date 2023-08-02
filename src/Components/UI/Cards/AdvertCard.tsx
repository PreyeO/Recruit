import { FC } from "react";

interface Props {
  title: string;
}

const AdvertCard: FC<Props> = ({ title }) => {
  return <h3 className="">{title}</h3>;
};

export default AdvertCard;
