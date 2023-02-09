import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  function DashboardSide(props) {
    if (props.dashboard === true) {
      return (
        <div>
          <div>
            <p>DASHBOARD</p>
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <p>CARS</p>
          </div>
          <div>
            <p>ListCars</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="dashboard-bg">
      <DashboardSide />
    </div>
  );
};

export default Dashboard;
