import "./Sidebar.scss";
import { Links } from "../../helpers/sidebar-data";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../../assets/dashboard.png";
import MainIcon from "../../assets/switch-organization.png";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <span>
        <img src={MainIcon} alt="icon" />
        <p>Switch Organization</p>
        <IoIosArrowDown />
      </span>
      <span>
        <img src={DashboardIcon} alt="icon" />
        <p>Dashboard</p>
      </span>
      {Links.map((item) => (
        <div key={item.title} className="sidebar__link-group-container">
          <p className="sidebar__title">{item.title}</p>
          {item.links.map((link) => (
            <NavLink
              key={link.name}
              to={`/dashboard/${link.name}`}
              onClick={() => {}}
              className={({ isActive }) =>
                isActive ? "active-link link" : "link"
              }
            >
              <img src={link.icon} alt="icon" />
              <p>{link.name}</p>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
