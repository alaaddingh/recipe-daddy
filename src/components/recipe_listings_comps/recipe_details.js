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
        <div>
            <a href={recipeDetails.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer">
                <p style={{cursor:'pointer'}}>Recipe link</p>
            </a>
            <p>{recipeDetails.summary.replace(/<[^>]*>?/gm, '')}</p> {/* Remove HTML tags from summary */}
        </div>
    );
}

export default RecipeDetails;












