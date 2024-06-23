import React, {useState} from 'react';
import "../../index.css";


export const SearchResultsList = () => {
    return (
        <div className='results-list'>
            {results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            })}
        </div>
    );
};