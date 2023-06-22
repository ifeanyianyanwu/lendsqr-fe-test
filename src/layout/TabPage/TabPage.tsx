import { ReactNode } from "react";
import "./TabPage.scss";

interface IProps {
  title: string;

  children: ReactNode;
}

const TabPage = ({ title, children }: IProps) => {
  return (
    <div className="tab-page__container">
      <div className="tab-page__title">
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default TabPage;
