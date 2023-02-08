import React from "react";
import SideBar from "./SideBar";
import "./Layoutwrapper.css";
import Navbar from "./Navbar";

const Layoutwrapper = ({ children }) => {
  return (
    <>
      <div className="layoutwrapper-bg">
        <SideBar />
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layoutwrapper;
