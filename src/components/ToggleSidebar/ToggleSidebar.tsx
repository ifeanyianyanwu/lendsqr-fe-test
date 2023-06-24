import React from "react";
import "./ToggleSidebar.scss";
import { Links } from "../../helpers/sidebar-data";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../../assets/dashboard.png";
import MainIcon from "../../assets/switch-organization.png";
import Logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

type IProps = {
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSidebar = ({ setToggleSidebar }: IProps) => {
  const handleCloseBtnClick = () => {
    setToggleSidebar((v) => !v);
  };

  return (
    <>
      <div className="toggle_sidebar__container">
        <div className="toggle_sidebar__logo-container">
          <img src={Logo} alt="logo" />
          <HiXMark onClick={handleCloseBtnClick} />
        </div>
        <span className="toggle_sidebar__org">
          <img src={MainIcon} alt="icon" />
          <p>Switch Organization</p>
          <IoIosArrowDown />
        </span>
        <span>
          <img src={DashboardIcon} alt="icon" />
          <p>Dashboard</p>
        </span>
        {Links.map((item) => (
          <div
            key={item.title}
            className="toggle_sidebar__link-group-container"
          >
            <p className="toggle_sidebar__title">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                key={link.name}
                to={`/dashboard/${link.name}`}
                onClick={handleCloseBtnClick}
                className={({ isActive }) =>
                  isActive
                    ? "toggle_sidebar__active-link toggle_sidebar__link"
                    : "toggle_sidebar__link"
                }
              >
                <img src={link.icon} alt="icon" />
                <p>{link.name}</p>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className="toggle_sidebar__overlay"></div>
    </>
  );
};

export default ToggleSidebar;
