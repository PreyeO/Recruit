import React, { FC } from "react";
import { StyledButtton } from "../../Styles/Buttons/Button.styled";

interface Props {
  children: React.ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return <StyledButtton>{children}</StyledButtton>;
};

export default Button;
