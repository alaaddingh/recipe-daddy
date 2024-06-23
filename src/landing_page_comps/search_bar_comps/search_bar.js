import React, { useState } from 'react';
import "../index.css";
// import searchIcon from "../images/search_icon.png";
import { FaSearch } from 'react-icons/fa'; /* search icon from react icons */


// OVERALL WRAPPER FUNCTION
export default function SearchBar() {
    const [results, setResults] = useState([]);

    return (
        <div className='search-bar-container'>
            <SearchBarInput setResults={setResults} />
            <SearchBarResults results={results} />
        </div>
    );
}


export const SearchBarInput = ({ setResults }) => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(json => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };

    return (
        <div className='input-box'>
            <FaSearch id='search-icon' />
            <input
                type='text'
                placeholder='Search for ingredients...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};


export const SearchBarResults = () => {
    return (
        <div className='results-list'>
            {results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            })}
        </div>
    );
};