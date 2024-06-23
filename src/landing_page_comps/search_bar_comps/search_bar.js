import React, { useState } from 'react';
import "../../index.css";
import {SearchBarInput} from "./search_bar_input.js";
import {SearchResultsList} from './search_results_list.js';


// OVERALL WRAPPER FUNCTION for SEARCH BAR
function SearchBar() {
    const [results, setResults] = useState([]);
    return (
        <div className='search-bar-container'>
            <SearchBarInput setResults={setResults} />
            <SearchResultsList setResults={setResults} />
        </div>
    );
}



export default SearchBar()

