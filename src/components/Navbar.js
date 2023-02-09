import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-background"></div>
          <div>
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
                <p>U</p>
              </div>
              <div className="name-logo">Unis Badri</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
