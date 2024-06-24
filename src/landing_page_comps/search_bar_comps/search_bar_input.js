import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; /* search icon from react icons */
import "../../index.css";

export const SearchBarInput = ({setResults}) => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    )
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

