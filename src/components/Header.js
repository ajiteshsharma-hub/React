import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <nav>Home</nav>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <nav>About</nav>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <nav>Contact</nav>
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <nav>Cart</nav>
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <nav>Profile</nav>
            </Link>
          </li>
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
