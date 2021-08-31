import React from "react";

const Header = () => {
    return(
<nav class="navbar navbar-light bg-dark ">
        <a class="navbar-brand ms-3" href="#">
        <img src={process.env.PUBLIC_URL + "/images/Restaurant-icon.png"} width="50" height="50" alt=""/>
        </a>
        </nav>       
    )
   
}

export default Header;