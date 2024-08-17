import React, { useState, useRef, useEffect } from 'react';
import "../../index.css";
import { SearchBarInput } from './search_bar_input';
import { SearchResultsList } from './search_results_list';

// OVERALL WRAPPER FUNCTION
function SearchBarWrapper({ addIngredient }) {
    const [showResultsList, setShowResultsList] = useState(false);
    const [results, setResults] = useState([]);
    const wrapperRef = useRef(null); // Reference for the wrapper element


    // Handle clicks outside the pop-up
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowResultsList(false); // Hide the pop-up if clicked outside
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    return (
        <div className='search-bar-container' ref={wrapperRef}>
            <SearchBarInput
                setResults={setResults}
                setShowResultsList={setShowResultsList}
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