import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import AppStore from "../utils/AppStore";
import Cart from "./Cart";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between shadow-xl bg-pink-100">
      <div className="logo w-56">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items flex items-center mx-4">
        <ul className="flex">
          <li className="pr-4  hover:text-blue-400">
            <Link to="/">
              <nav>Home</nav>
            </Link>
          </li>
          <li className="pr-4  hover:text-blue-400">
            <Link to="/about">
              <nav>About</nav>
            </Link>
          </li>
          <li className="pr-4  hover:text-blue-400">
            <Link to="/contact">
              <nav>Contact</nav>
            </Link>
          </li>
          <li className="pr-4  hover:text-blue-400">
            <Link to="/profile">
              <nav>Profile</nav>
            </Link>
          </li>
          <li className="pr-4  hover:text-blue-400">
            <Link to="/grocery">
              <nav>Grocery</nav>
            </Link>
          </li>
          <li className="pr-4  hover:text-blue-400">
            <Link to="/cart">
              <nav>Cart({cartItems.length})</nav>
            </Link>
          </li>
          <li className="pr-2">Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <button
            className="login pr-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
