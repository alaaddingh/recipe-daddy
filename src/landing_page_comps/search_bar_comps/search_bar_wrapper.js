import React, { useState } from 'react';
import "../../index.css";
import { SearchBarInput } from './search_bar_input';

// OVERALL WRAPPER FUNCTION
function SearchBarWrapper({ setResults }) {
    return (
        <div className='search-bar-container'>
            <SearchBarInput setResults={setResults} />
        </div>
    );
}

export default SearchBarWrapper;