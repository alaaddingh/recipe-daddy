import React, { useState } from "react";
import { useEffect } from "react";
import Recipelisting from "../recipe_listing";


const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function RecipeListings({ ShowRecipeListings, selectedIngredients }) {
    const [recipeListings, setRecipeListings] = useState([]);

    useEffect(() => {
        if (ShowRecipeListings) {
            console.log('ShowRecipeListings boolean set to TRUE.');
            fetchRecipes();
        };
    }, [ShowRecipeListings]);

    const fetchRecipes = () => {
        console.log('fetching data');
        const url = `${API_URL}?ingredients=${encodeURIComponent(selectedIngredients.join(','))}&apiKey=${API_KEY}`;
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

    return (
        // this div should only show up once the find a recipe button has been clicked. 
        <div>
            {ShowRecipeListings &&
                <div className='recipe-listings'>
                    {recipeListings.map((recipe) => (
                        <Recipelisting key={recipe.id} data_prop={recipe} />
                    ))}
                </div>}
        </div>
    );


}

export default RecipeListings;