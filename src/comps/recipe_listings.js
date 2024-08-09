import React, { useState } from "react";
import { useEffect} from "react";

const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function RecipeListings({ updateRecipeListings, selectedIngredients }) {
    const [recipeListings, setRecipeListings] = useState([]);

    useEffect(() => {
        if (updateRecipeListings) {
            alert('updateRecipeListings boolean set to TRUE.');
            // remove this alert

            fetchRecipes();
        };
    });

    const fetchRecipes = () => {
        // Use alaaddins recipe fetch method to get the recipe listings. 
        // commented out rihgt now just to understand the layout.
        alert('fetching!');
        // const RecipeFetcher = () => {
        //     const url = `${API_URL}?ingredients=${encodeURIComponent(selectedIngredients.join(','))}&apiKey=${API_KEY}`;
        //     fetch(url)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(JSON.stringify(data));
        //             setRecipeListings(data);
        //         })
        //         .catch((error) => {
        //             console.error('Error fetching data:', error);
        //         });
        // };
    };

    return (
        // this div should only show up once the find a recipe button has been clicked. 
        <div>
            🧑🏽‍🍳 RECIPES!! 🧑🏽‍🍳
        </div>
    );


}

export default RecipeListings;