//Implementing Button feature from bootstrap
import React from "react";
//making the butoon dynamic
interface Props {
  children: string;
  color?: "primary" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
