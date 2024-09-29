import React, { useEffect, useState } from 'react';

function RecipeDetails({ recipeId }) {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

    useEffect(() => {
        const fetchRecipeDetails = () => {
            const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setRecipeDetails(data);
                })
                .catch(error => {
                    console.error('Error fetching recipe details:', error);
                });
        };

        fetchRecipeDetails();
    }, [recipeId]);

    if (!recipeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='recipe-details'>
            <a href={recipeDetails.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer">
                Recipe link
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="auto" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                </svg>
            </a>
            <p>{recipeDetails.summary.replace(/<[^>]*>?/gm, '')}</p> {/* Remove HTML tags from summary */}
        </div>
    );
}

export default RecipeDetails;