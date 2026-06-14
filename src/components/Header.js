import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header
