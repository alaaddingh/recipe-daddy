import React from 'react';
import "../../index.css";

const ChosenIngredients = ({ selectedIngredients, removeIngredient }) => {
    console.log(selectedIngredients);
    return (
        <div className="chosen-ingreds-list">
            {selectedIngredients.map((ingredientName, index) => (
                <p
                    key={index}
                    className="ingredient"
                    onClick={() => removeIngredient(ingredientName)}
                >
                    {ingredientName}
                </p>
            ))}
        </div>
    );
};

export default ChosenIngredients;