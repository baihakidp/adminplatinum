import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./Chart.css";

const Chartdb = () => {
  return (
    <div className="chart-container-bg">
      <div className="dashboard-container-bg">
        <div>
          <p>Dashboard</p>
        </div>
        <div>
          <FiChevronRight size={16} />
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
      <div className="rented-car-bg">
        <div className="dashboard-chart-title-icon"></div>
        <div className="dashboard-chart-title">
          <p>Rented Car Data Visualization</p>
        </div>
      </div>
      <div className="dasboard-month-bg">
        <div>
          <p>Month</p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Chartdb;
