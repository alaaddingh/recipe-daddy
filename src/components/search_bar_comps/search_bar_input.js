import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; /* search icon from react icons */
import "../../index.css";

// Replace 'YOUR_API_KEY' with your actual Spoonacular API key
// const SPOONACULAR_API_KEY = '376053c399e94573b8ff03c5a97b16dd'; 
// calrosfvargas account
const SPOONACULAR_API_KEY = '5267f1c8f473448da83ecb677cc12a6b'; 
// topartist account
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