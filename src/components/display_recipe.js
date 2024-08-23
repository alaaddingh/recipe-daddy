import React, { useEffect, useState } from 'react';

function RecipeDetails({ recipeId }) {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
    
    useEffect(() => {
        const fetchRecipeDetails = () => {
            const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;
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
            <h2>{recipeDetails.title}</h2>
            <a href={recipeDetails.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer">
                <img src={recipeDetails.image} alt={recipeDetails.title} style={{ cursor: 'pointer' }} />
            </a>
            <p>{recipeDetails.summary.replace(/<[^>]*>?/gm, '')}</p> {/* Remove HTML tags from summary */}
        </div>
    );
}

export default RecipeDetails;