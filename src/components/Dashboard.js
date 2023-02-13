import React from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const { navReducer } = useSelector((state) => state);

  const isDashboard = navReducer.current === "dashboard";

  if (isDashboard) {
    return (
      <div className="dashboard-bg">
        <div className="dashboard-container">
          <div className="db-p1">
            <p>DASHBOARD</p>
          </div>
          <div className="db-p2">
            <p>Dashboard</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dashboard-bg">
        <div className="dashboard-container">
          <div>
            <p className="db-p1">Cars</p>
          </div>
          <div className="db-p2">
            <p>List Cars</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
