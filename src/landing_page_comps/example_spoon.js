import React, { useState } from 'react';
import { searchIngredients } from '../services/api';

const IngredientSearch = () => {
    const [query, setQuery] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleSearch = async () => {
        const result = await searchIngredients(query);
        setIngredients(result.results);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for ingredients"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientSearch;