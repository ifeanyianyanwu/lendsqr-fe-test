import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./DashBoard.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Users from "../../components/Users/Users";
import ToggleSidebar from "../../components/ToggleSidebar/ToggleSidebar";

const DashBoard = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <div className="dashboard__page-container">
      <Navbar setToggleSidebar={setToggleSidebar} />
      <div className="dashboard__secondary-container">
        <Sidebar />
        {toggleSidebar && <ToggleSidebar setToggleSidebar={setToggleSidebar} />}
        <div className="dashboard__link-content-container">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/user_details" element={"user details"} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
