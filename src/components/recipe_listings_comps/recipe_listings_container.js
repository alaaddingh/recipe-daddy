import React, { useState } from "react";
import Recipelisting from "./recipe_listing";
/* 
This file simply maps and shows the given recipe list. 
The recipe list itself (recipeListings) is called/populated in find_recipe.js.
*/


function RecipeListingsContainer({ recipeListings, showRecipeListings }) {
    return (
        // this div should only show up once the find a recipe button has been clicked. 
        <div>
            {showRecipeListings &&
                <div className='recipe-listings-container'>
                    {recipeListings.map((recipe) => (
                        <Recipelisting key={recipe.id} data_prop={recipe} />
                    ))}
                </div>}
        </div>
    );
}

export default RecipeListingsContainer;