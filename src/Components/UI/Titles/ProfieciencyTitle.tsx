import { FC } from "react";

interface Props {
  title: string;
}

const AuthTitle: FC<Props> = ({ title }) => {
  return <div className="font-extrabold text-3xl">{title}</div>;
};

export default AuthTitle;
