import React, { useState } from 'react';
import "../../index.css";
import { SearchBarInput } from './search_bar_input';
import { SearchResultsList } from './search_results_list';

// OVERALL WRAPPER FUNCTION
function SearchBarWrapper({ addIngredient }) {
    const [showResultsList, setShowResultsList] = useState(true);
    const [results, setResults] = useState([]);

    return (
        <div className='search-bar-container'>
            <SearchBarInput
                setResults={setResults}
            // onFocus={() => setShowResultsList(true)} 
            />
            {showResultsList &&
                <SearchResultsList
                    results={results}
                    addIngredient={addIngredient}
                />
            }
        </div>
    );
}

export default SearchBarWrapper;