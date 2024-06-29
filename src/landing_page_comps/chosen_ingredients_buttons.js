import React from 'react';
import "../index.css";

const ChosenIngredientsbuttons = ({ clearIngredients }) => {
    return (
        <div className="chosen-ingreds-text">
            <p>Your ingredients</p> 
            <p onClick={clearIngredients} style={{ cursor: 'pointer', color: 'red' }}>Clear</p>
        </div>
    );
};

export default ChosenIngredientsbuttons;