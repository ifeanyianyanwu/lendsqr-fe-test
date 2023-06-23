import { ReactNode } from "react";

import "./Button.scss";

type IProps = {
  children: ReactNode;
  color: "red-invert" | "accent-invert" | "accent" | "transparent";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, color, type, onClick }: IProps) => {
  return (
    <button
      className={`button ${color}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
