import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [Mymail, setMymail] = useState(false);

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
              <input placeholder="Search" />
            </div>
            <div className="button-container">
              <button>Search</button>
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
