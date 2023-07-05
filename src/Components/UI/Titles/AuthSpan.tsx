import { FC } from "react";

interface Props {
  title: string;
}

const AuthSpan: FC<Props> = ({ title }) => {
  return <p className="py-1.5 font-extralight">{title}</p>;
};

export default AuthSpan;
