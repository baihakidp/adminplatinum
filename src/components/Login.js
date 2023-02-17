import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BgMobil from "../assets/BgMobil.png";
import axios from "axios";
import { authAction } from "../redux/actions/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authReducer } = useSelector((state) => state);
  const [isPassword, setIsPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleError = () => {
    setIsError(true);
  };

  const handlePasswordShow = () => {
    setIsPassword(!isPassword);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        email: email,
        password: password,
      };
      const result = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
        payload
      );
      localStorage.setItem("token", result.data.access_token);
      localStorage.setItem("email", result.data.email);
      dispatch(authAction());
    } catch (error) {
      console.log(error.response.data.message);
      handleError();
      setErrorMessage(error.response.data.message);
    }
  };

  const handleRedirect = () => {
    if (!!authReducer.message) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [authReducer.message]);

  return (
    <div className="login-section-bg">
      <div className="login-section">
        <div className="login-left">
          <img src={BgMobil} alt="background" />
        </div>
        <div className="login-right">
          <div className="logo-title-container">
            <div className="login-right-logo"></div>
            <div className="login-right-title">
              <h2>Welcome, Admin BCR</h2>
            </div>
          </div>
          {isError ? (
            <div className="login-error">
              <p>{errorMessage}</p>
            </div>
          ) : null}
          <div className="login-right-input-bg">
            <div className="login-right-title-input">
              <div className="login-right-input-title">
                <p>Email</p>
              </div>
              <div className="login-right-input">
                <input
                  type="email"
                  placeholder="tes@gmail.com"
                  onChange={handleEmail}
                />
              </div>
            </div>
            <div className="login-right-title-input">
              <div className="login-right-input-title">
                <p>Password</p>
              </div>
            </div>
            <div className="login-right-input">
              <input
                type={isPassword ? "text" : "password"}
                placeholder="6+ karakter"
                onChange={handlePassword}
              />
            </div>
            <div className="login-right-button">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
