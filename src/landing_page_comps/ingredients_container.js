import React from 'react';
import ChosenIngredients from './your_ingredients_comp/chosen_ingredients';
import ChosenIngredientsButtons from './your_ingredients_comp/chosen_ingredients_buttons';
import "../index.css"

const IngredientsContainer = ({ selectedIngredients, clearIngredients }) => {
    return (
        <div>
            <ChosenIngredientsButtons clearIngredients={clearIngredients} />
            <ChosenIngredients selectedIngredients={selectedIngredients} />
        </div>
    );
};

export default IngredientsContainer;