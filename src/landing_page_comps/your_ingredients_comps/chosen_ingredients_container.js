// This holds the chosen ingredients as well as the buttons: "Your ingredients" and "Clear"

import React from 'react';
import ChosenIngredients from './chosen_ingredients';
import ChosenIngredientsButtons from './chosen_ingredients_buttons';
import "../../index.css"

const ChosenIngredientsContainer = ({ clearIngredients, selectedIngredients, removeIngredient }) => {
    return (
        <div>
            <ChosenIngredientsButtons 
                clearIngredients={clearIngredients} 
            />
            <ChosenIngredients 
                selectedIngredients={selectedIngredients} 
                removeIngredient={removeIngredient}
            />
        </div>
    );
};

export default ChosenIngredientsContainer;