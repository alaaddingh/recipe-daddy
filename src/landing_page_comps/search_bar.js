import React from 'react';
import "../index.css";
import searchIcon from "../images/search_icon.png"



function Searchbar() {
    return (
        <div className="input-box">
            <img src={searchIcon} width = "15px" alt="search icon" className="search-icon" /> 
            <input type="text" placeholder="Enter your ingredients.." />
        </div>
    );
}




export default Searchbar