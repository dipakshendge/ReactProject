import React from "react";
import "./header.css";

const Header =() =>{
    return(
        <header>
            <div id="brand">
                <span>Developer Don</span>
            </div>
            <div id="login">
                <button className="">Login</button>
                <button className="">Sign UP</button>
            </div>
        </header>
    )
};



export default Header;