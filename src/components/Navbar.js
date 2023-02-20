import { Dropdown } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Searchinput } from "../redux/actions/authAction";


const Navbar = () => {
  const [Mymail, setMymail] = useState(false);
  const [Name, setName] = useState('');
  const navigate = useNavigate('');
  const Dispatch = useDispatch();

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      setMymail(email);
    } else {
      setMymail();
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const items = [
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: "0",
    },
  ];

  const Handlesearch = (e) => {
    setName(e.target.value)
  }
  
 const HandlebuttonSearch = () => {
   navigate('/carlist') 
   Dispatch(Searchinput(Name))
}
  return (
    <div className="navbar-bg">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-background"></div>
          <div className>
            <FiMenu size={24} />
          </div>
        </div>
        <div>
          <div className="navbar-right">
            <div className="search-container">
              <FiSearch size={18} />
              <input placeholder="Search" onChange={Handlesearch}/>
            </div>
            <div className="button-container">
              <button onClick={HandlebuttonSearch}>Search</button>
            </div>
            <div className="profile-container">
              <div className="profile-logo">
                <p>{Mymail[0]?.toUpperCase() ?? "X"}</p>
              </div>
              {Mymail ? <div className="name-logo">{Mymail}</div> : null}
            </div>
            <div className="dropdown-menu-logout">
              <Dropdown menu={{ items }} trigger={["click"]}>
                <FiChevronDown />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
