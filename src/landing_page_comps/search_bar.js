import React, {useState} from 'react';
import "../index.css";
// import searchIcon from "../images/search_icon.png";
import { FaSearch } from 'react-icons/fa';


export default function SearchBar() {
    return (
        <div className='search-bar-container'>
            <SearchBarInput />
            {/* <SearchBarResults /> */}
        </div>
        // <div className="input-box">
        //     <img src={searchIcon} width = "15px" alt="search icon" className="search-icon" /> 
        //     <input type="text" placeholder="Enter your ingredients.." />
        // </div>
    );
}


export const SearchBarInput = () => {
    const {input, setInput} = useState("")
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
    }
    const handleChange = (value) => {
        setInput(value)
        fetch(value)
    }

    return (
        <div className='input-box'>
            <FaSearch id='search-icon' />
            <input 
            type='text' 
            placeholder='Search for ingredients...' 
            value={input} 
            onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}