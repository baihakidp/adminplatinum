import { Table, Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Form } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";
import chartData from "../const/chartData";
import "./Chart.css";

const Chartdb = () => {
  const [orderList, setOrderList] = useState([]);
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=${currentPage}&pageSize=${pageSize}`,
        config
      )
      .then((res) => {
        const orders = res.data.orders;
        const newOrders = orders.map((item) => {
          return {
            id: item.id,
            email: item.User.email,
            name: item?.Car?.name ?? "",
            start_rent_at: item?.start_rent_at,
            finish_rent_at: item.finish_rent_at,
            price: item?.Car?.price ?? "",
            category: item?.Car?.category ?? "",
          };
        });
        const infoPage = {
          count: res.data.count,
          page: res.data.page,
          pageCount: res.data.pageCount,
          pageSize: res.data.pageSize,
        };
        setOrderList(newOrders);
        setInfo(infoPage);
      });
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Car",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Rent",
      dataIndex: "start_rent_at",
      key: "start_rent_at",
    },
    {
      title: "Finish Rent",
      dataIndex: "finish_rent_at",
      key: "finish_rent_at",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

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
      <div className="dashboard-title-orderlist">
        <h1>Dashboard</h1>
      </div>
      <div className="rented-car-bg">
        <div className="dashboard-chart-title-icon"></div>
        <div className="dashboard-chart-title">
          <p>List Order</p>
        </div>
      </div>
      <Table
        className="coba-table"
        pagination={false}
        columns={columns}
        dataSource={orderList}
      />

      <Pagination
        size="small"
        total={info.count}
        showSizeChanger
        showQuickJumper
        onChange={(e, i) => {
          setCurrentPage(e);
          setPageSize(i);
        }}
      />
    </div>
  );
};

export default Chartdb;
