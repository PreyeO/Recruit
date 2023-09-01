import { FC } from "react";
import { Outlet } from "react-router-dom";

const WithoutNav: FC = () => {
  return <Outlet />;
};

export default WithoutNav;
