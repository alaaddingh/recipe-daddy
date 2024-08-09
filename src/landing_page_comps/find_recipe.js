import React, { useState } from 'react';
import "../index.css";

function FindRecipe({ setShowRecipeListings }) {
    return (
        <div>
            <button 
                onClick={() => setShowRecipeListings(true)}
                className="find-a-recipe">
                FIND A RECIPE
            </button>
        </div>
    );
}

export default FindRecipe;