import React from "react";
import "./Sidebar.css";
import { FiHome, FiTruck } from "react-icons/fi";

const SideBar = (props) => {
  return (
    <div className="sidebar-bg">
      <div className="sidebar-container">
        <div className="sidebar-left">
          <div className="logo-bg"></div>
          <div className="icon">
            <FiHome size={24} />
            <p>Dashboard</p>
          </div>
          <div className="icon">
            <FiTruck size={24} />
            <p>Cars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
