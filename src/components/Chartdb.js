import React from "react";
import ReactApexChart from "react-apexcharts";
import { Form } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";
import chartData from "../const/chartData";
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
        <div className="dashboard-month-title">
          <p>Month</p>
        </div>
        <div className="dashboard-month-select-bg">
          <div className="dashboard-month-select">
            <Form.Group>
              <Form.Select>
                <option>Januari - 2022</option>
                <option>Februari - 2022</option>
                <option>Maret - 2022</option>
                <option>April - 2022</option>
                <option>Mei - 2022</option>
                <option>Juni - 2022</option>
                <option>Juli - 2022</option>
                <option>Agustus - 2022</option>
                <option>September - 2022</option>
                <option>Oktober - 2022</option>
                <option>November - 2022</option>
                <option>Desember - 2022</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="dashboard-month-btn">
            <button>Go</button>
          </div>
        </div>
        <ReactApexChart
          options={chartData}
          series={chartData.series}
          width="96%"
          height="376px"
        />
      </div>
    </div>
  );
};

export default Chartdb;
