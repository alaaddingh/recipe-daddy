import React, { useState } from 'react';
import "../index.css";
import Recipelisting from '../recipe_listing';

const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function Findrecipe({ ingredients }) {
    const [recipes, setRecipes] = useState([]);

    const RecipeFetcher = () => {
        const url = `${API_URL}?ingredients=${encodeURIComponent(ingredients.join(','))}&apiKey=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data));
                setRecipes(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <button onClick={RecipeFetcher} className="find-a-recipe">
                FIND A RECIPE
            </button>
            <div className='recipe-listings'>
                {recipes.map((recipe) => (
                    <Recipelisting key={recipe.id} data_prop={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Findrecipe;