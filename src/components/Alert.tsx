//Building a component that can accept children
//React arrow function export component(rafce type this to generate boilerplate code)
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
