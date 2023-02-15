import { useEffect, useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [Mymail, setMymail] = useState(false)

  useEffect(() => {
    const email = localStorage.getItem('email')

   if(email) {
    setMymail(email)
   }
   else {
    setMymail();
   }

  })
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
                <p>U</p>
              </div>
             {Mymail ?   <div className="name-logo">{Mymail}</div>
             : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
