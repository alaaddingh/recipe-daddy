import React, {useState} from 'react';
import "../../index.css";
import {SearchBarInput} from './search_bar_input';
import {SearchResultsList} from './search_results_list';
import {Upload} from '../file_upload';

// OVERALL WRAPPER FUNCTION
function SearchBarWrapper({onInteraction, focusOnUpload}) {
    const [results, setResults] = useState([]);

    return (
        <div onClick={onInteraction} className={focusOnUpload ? 'search-bar-wrapper focus-on-upload' : 'search-bar-wrapper focus-on-search'}>
            <SearchBarInput setResults={setResults} />
            <SearchResultsList results={results} /> 
        </div>
    );
}   

export default SearchBarWrapper;