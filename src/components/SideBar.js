import React from "react";
import "./Sidebar.css";
import { FiHome, FiTruck } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navAction } from "../redux/actions/navAction";

const SideBar = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar-bg">
      <div className="sidebar-container">
        <div className="logo-bg"></div>
        <NavLink
          to="/dashboard"
          className={"dash-bg"}
          onClick={() => dispatch(navAction("dashboard"))}
        >
          <div className="icon">
            <FiHome size={24} />
          </div>
          <p className="font-dashboard">Dashboard</p>
        </NavLink>
        <NavLink
          to="/carlist"
          className={"dash-bg"}
          onClick={() => dispatch(navAction("cars"))}
        >
          <div className="icon">
            <FiTruck size={24} />
          </div>
          <p className="font-dashboard">Cars</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
