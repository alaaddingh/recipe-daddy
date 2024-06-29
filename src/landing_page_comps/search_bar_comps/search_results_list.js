import React from "react";
import "../../index.css";
import { SearchResult } from "./search_result";

export const SearchResultsList = ({ results, addIngredient }) => {
    return (
        <div className='results-list'>
            {results.map((result, id) => (
                <SearchResult
                    result={result}
                    key={id}
                    onClick={() => addIngredient(result)}
                />
            ))}
        </div>
    );
};