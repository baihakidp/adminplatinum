import ColumnGroup from "antd/es/table/ColumnGroup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
