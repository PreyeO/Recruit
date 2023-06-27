import React, { FC } from "react";
import { StyledAuthButtton } from "../../Styles/Buttons/AuthButton.styled";


interface Props {
  children: React.ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return <StyledAuthButtton>{children}</StyledAuthButtton>;
};

export default Button;
