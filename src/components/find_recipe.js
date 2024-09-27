import React, { useState } from 'react';
import "../index.css";

// const SPOONACULAR_API_KEY = '376053c399e94573b8ff03c5a97b16dd'; // carlosfvargas account
const SPOONACULAR_API_KEY = '5267f1c8f473448da83ecb677cc12a6b'; // topartist account
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function FindRecipe({ setShowRecipeListings, selectedIngredients, setRecipeListings }) {
    const fetchRecipes = () => {
        console.log('fetching data');
        const url = `${API_URL}?ingredients=${encodeURIComponent(selectedIngredients.join(','))}&apiKey=${SPOONACULAR_API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data));
                setRecipeListings(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const returnRecipesFunction = () => {
        setShowRecipeListings(true);
        fetchRecipes();
    }    

    return (
        <div className="find-a-recipe">
            <button 
                onClick={() => returnRecipesFunction()}
                >
                FIND A RECIPE
            </button>
        </div>
    );
}

export default FindRecipe;