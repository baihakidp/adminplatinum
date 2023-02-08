import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../redux/actions/authAction";
import "./Login.css";
import BgMobil from "../assets/BgMobil.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authReducer } = useSelector((state) => state);
  const [isPassword, setIsPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordShow = () => {
    setIsPassword(!isPassword);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    dispatch(authAction(payload));
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
          <div>
            <div className="login-right-logo"></div>
            <div className="login-right-title">
              <h2>Welcome, Admin BCR</h2>
            </div>
          </div>

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
