import React from "react";
import "../../index.css";
import { SearchResult } from "./search_result";

export const SearchResultsList = ({ results }) => {
    return (
        <div className='results-list'>
            {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
            })}
        </div>
    );
};