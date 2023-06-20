import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import TextInput from "../ui/TextInput/TextInput";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import Avatar from "../../assets/avatar.png";
import { AiOutlineMenu } from "react-icons/ai";

type IProps = {
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setToggleSidebar }: IProps) => {
  const handleMenuClick = () => {
    setToggleSidebar((v) => !v);
  };

  return (
    <div className="navbar__container">
      <span className="navbar__menu-icon" onClick={handleMenuClick}>
        <AiOutlineMenu />
      </span>
      <span className="navbar__logo-container">
        <img src={Logo} alt="logo" />
      </span>
      <span className="navbar__secondary-container">
        <span className="navbar__input-container">
          <TextInput placeholder="Search for anything">
            <div className="navbar__search-icon">
              <HiOutlineMagnifyingGlass />
            </div>
          </TextInput>
        </span>
        <span className="navbar__mobile-search-icon">
          <HiOutlineMagnifyingGlass />
        </span>
        <span className="navbar__user-info">
          <p>Docs</p>
          <BsBell />
          <img src={Avatar} alt="avatar" className="navbar__avatar_img" />
          <p>Adedeji</p>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
