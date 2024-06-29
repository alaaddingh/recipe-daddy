import React from 'react';
import "../index.css";

const ChosenIngredients = ({ selectedIngredients }) => {
    return (
        <div className="chosen-ingreds-list">
                {selectedIngredients.map((ingredientName, index) => (
                    <p key={index} className="ingredient">{ingredientName}</p>
                ))}
        </div>
    );
};

export default ChosenIngredients;