import React from 'react';
import ChosenIngredients from './chosen_ingredients';
import ChosenIngredientsbuttons from './chosen_ingredients_buttons';
import "../index.css"

const IngredientsContainer = ({ selectedIngredients, clearIngredients }) => {
    return (
        <div>
           
            <ChosenIngredientsbuttons clearIngredients={clearIngredients} />
            <ChosenIngredients selectedIngredients={selectedIngredients} />
        </div>
    );
};

export default IngredientsContainer;