import React from 'react';
import "../index.css";

const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function Findrecipe({ ingredients }) {
    const RecipeFetcher = () => {
        const url = `${API_URL}?ingredients=${encodeURIComponent(ingredients.join(','))}&apiKey=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <button onClick={RecipeFetcher} className="find-a-recipe">
            FIND A RECIPE
        </button>
    );
}

export default Findrecipe;