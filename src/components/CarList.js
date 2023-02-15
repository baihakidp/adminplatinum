import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FiChevronRight,
  FiEdit,
  FiPlus,
  FiTrash,
  FiUsers,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./CarList.css";
import { toRp } from "../utils/toRp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Deletecars } from "../redux/actions/carAction";
import rootReducer from "../redux/reducers";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [allCategory, setAllCategory] = useState(false);
  const [smallCategory, setSmallCategory] = useState(false);
  const [mediumCategory, setMediumCategory] = useState(false);
  const [largeCategory, setLargeCategory] = useState(false);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const { Mydelete } = useSelector((rootReducer) => rootReducer.reduceCar);

  // useEffect(() => {
  //   Getcar();
  // },[])

  useEffect(() => {
    Getcar();
  }, [Mydelete]);

  const Getcar = () => {
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
  };

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

  // handle Delete

  const HandleDelete = (id) => {
    Dispatch(Deletecars(id));
  };

  console.log(Mydelete);
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
      <div className="listcar-addcar-container">
        <div>
          <p className="List-p-cars">List Cars</p>
        </div>
        <div>
          <Link to={"/Addcar"}>
            <button className="add-new-car-btn">
              <FiPlus size={18} />
              Add New Car
            </button>
          </Link>
        </div>
      </div>

      <div className="cars-category-btn">
        <button onClick={handleAllCategory} className="button-all">
          all
        </button>
        <div>
          <button onClick={handleSmallCategory} className="button-small">
            small
          </button>
        </div>
        <div>
          <button onClick={handleMediumCategory} className="button-small">
            medium
          </button>
        </div>
        <div>
          <button onClick={handleLargeCategory} className="button-small">
            large
          </button>
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
                <h2>
                  <p>Rp {toRp(item.price)} /hari</p>
                </h2>
                {(() => {
                  if (item.category === "small") {
                    return (
                      <div className="cars-card-category">
                        <div className="cars-card-category-icon">
                          <FiUsers size={20} />
                        </div>
                        <div>
                          <p className="cars-card-category-desc">2 - 4 orang</p>
                        </div>
                      </div>
                    );
                  } else if (item.category === "Medium") {
                    return (
                      <div className="cars-card-category">
                        <div className="cars-card-category-icon">
                          <FiUsers size={20} />
                        </div>
                        <div className="cars-card-category-desc">
                          <p>4 - 6 orang</p>
                        </div>
                      </div>
                    );
                  } else if (item.category === "large") {
                    return (
                      <div className="cars-card-category">
                        <div className="cars-card-category-icon">
                          <FiUsers size={20} />
                        </div>
                        <div className="cars-card-category-desc">
                          <p>6 - 8 orang</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="cars-card-category">
                        <div className="cars-card-category-icon">
                          <FiUsers size={20} />
                        </div>
                        <div className="cars-card-category-desc">
                          <p>-</p>
                        </div>
                      </div>
                    );
                  }
                })()}
                <div>
                  <p>Update at {item.updatedAt}</p>
                </div>
                <div className="div-button">
                  <button
                    className="button-delete"
                    onClick={() => HandleDelete(item.id)}
                  >
                    <FiTrash size={18} />
                    <p className="p-Delete">Delete</p>
                  </button>
                  <Link to={`/Editcar/${item.id}`}>
                    <button className="button-edit">
                      <FiEdit size={18} />
                      <p className="p-Edit">Edit</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarList;
