import React from 'react';
import { LOGO_URL } from '../utils/constants';
import{useState} from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className= "header">
            <div className= "logo">
                <img src = {LOGO_URL} alt = "logo" />
            </div>
            <div className= "nav-items">
                <ul>
                    <li><nav>Home</nav></li>
                    <li><nav>About</nav></li>
                    <li><nav>Contact</nav></li>
                    <li><nav>Cart</nav></li>
                    <li><nav>Profile</nav></li>
                    <button className="login"
                    onClick={() =>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
