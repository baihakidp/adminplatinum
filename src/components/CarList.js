import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./CarList.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [allCategory, setAllCategory] = useState(false);
  const [smallCategory, setSmallCategory] = useState(false);
  const [mediumCategory, setMediumCategory] = useState(false);
  const [largeCategory, setLargeCategory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios
      .get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10",
        config
      )
      .then((ress) => {
        // console.log(ress.data.cars)
        setCars(ress.data.cars);
        setAllCategory(true);
        setSmallCategory(false);
        setMediumCategory(false);
        setLargeCategory(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleAllCategory = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=&page=1&pageSize=10",
        config
      )
      .then((ress) => {
        setCars(ress.data.cars);
        setAllCategory(true);
        setSmallCategory(false);
        setMediumCategory(false);
        setLargeCategory(false);
      })
      .catch((err) => console.log(err.message));
  };

  const handleSmallCategory = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small&page=1&pageSize=10",
        config
      )
      .then((ress) => {
        setCars(ress.data.cars);
        setAllCategory(false);
        setSmallCategory(true);
        setMediumCategory(false);
        setLargeCategory(false);
      })
      .catch((err) => console.log(err.message));
  };

  const handleMediumCategory = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=Medium&page=1&pageSize=10",
        config
      )
      .then((ress) => {
        setCars(ress.data.cars);
        setAllCategory(false);
        setSmallCategory(false);
        setMediumCategory(true);
        setLargeCategory(false);
      })
      .catch((err) => console.log(err.message));
  };

  const handleLargeCategory = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    axios
      .get(
        "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=large&page=1&pageSize=10",
        config
      )
      .then((ress) => {
        setCars(ress.data.cars);
        setAllCategory(false);
        setSmallCategory(false);
        setMediumCategory(false);
        setLargeCategory(true);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="cars-container-bg">
      <div className="cars-breadcrumbs">
        <div className="div-chevron">
        <div className="p-Cars-breadcrumb">
          <p>Cars</p>
        </div>
        <div className="chevron">
          <FiChevronRight />
        </div>
        <div className="div-listcars">
          <p className="p-listCars">List Cars</p>
        </div>
        </div>
      </div>
      <div>
        <p className="List-p-cars">List Cars</p>
      </div>
      <div className="cars-category-btn">
       <button onClick={handleAllCategory} className="button-all">all</button>
        <div>
          <button onClick={handleSmallCategory} className="button-small">small</button>
        </div>
        <div>
          <button onClick={handleMediumCategory} className="button-small">medium</button>
        </div>
        <div>
          <button onClick={handleLargeCategory} className="button-small">large</button>
        </div>
      </div>
      <div className="car-container">
        {!!cars.length &&
          cars.map((item) => (
            <div>
              <div className="car-card">
                <div className="img-car-card">
                  <img src={item.image} alt="gambar" />
                </div>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarList;
