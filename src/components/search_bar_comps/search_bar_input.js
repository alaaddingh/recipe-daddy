import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; /* search icon from react icons */
import "../../index.css";

const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const API_URL = 'https://api.spoonacular.com/food/ingredients/search';

export const SearchBarInput = ({ setResults, setShowResultsList }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        if (value.trim() === "") {
            setResults([]);
            return;
        }

        const url = `${API_URL}?query=${encodeURIComponent(value)}&apiKey=${SPOONACULAR_API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(JSON.stringify(data));
                const results = data.results || [];
                setResults(results);
                console.log(results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setResults([]);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='input-box'>
            <FaSearch id='search-icon' />
            <input
                type='text'
                placeholder='Search for ingredients...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => setShowResultsList(true)}
            />
        </div>
    );
};