import React, {useState} from 'react';
import "../../index.css";
import {SearchBarInput} from './search_bar_input';
import {SearchResultsList} from './search_results_list';

// OVERALL WRAPPER FUNCTION
function SearchBarWrapper() {
    const [results, setResults] = useState([]);

    return (
        <div className='search-bar-container'>
            <SearchBarInput setResults={setResults} />
            <SearchResultsList results={results} /> 
        </div>
    );
}

export default SearchBarWrapper;