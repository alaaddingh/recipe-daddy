import React, { useState } from "react";
import "../../index.css";
import { SearchResult } from "./search_result";

export const SearchResultsList = ({ results }) => {
    const [selectedIngredients, setSelectedIngredients] = useState(new Set());

    const addIngredient = (ingredient) => {
        setSelectedIngredients((prevIngredients) => new Set(prevIngredients).add(ingredient.name));
    };


    console.log(selectedIngredients);
    return (
        <div className='results-list'>
            {results.map((result, id) => (
                <SearchResult
                    result={result}
                    key={id}
                    onClick={() => addIngredient(result)}
                />
            ))}
            <div>
                <ul>
                    {[...selectedIngredients].map((ingredientName, index) => (
                        <li key={index}>{ingredientName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

