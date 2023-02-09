import React from "react";
import SideBar from "./SideBar";
import "./Layoutwrapper.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Layoutwrapper = ({ children }) => {
  return (
    <>
      <div className="layoutwrapper-bg">
        <SideBar />
        <Dashboard />
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layoutwrapper;
