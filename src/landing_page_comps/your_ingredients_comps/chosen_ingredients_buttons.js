import React from 'react';
import "../../index.css";

const ChosenIngredientsButtons = ({ clearIngredients }) => {
    return (
        <div className="chosen-ingreds-text">
            <p>Your ingredients</p> 
            <p onClick={clearIngredients}>Clear</p>
        </div>
    );
};

export default ChosenIngredientsButtons;