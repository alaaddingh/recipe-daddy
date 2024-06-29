import React from 'react';
import "../index.css";

const ChosenIngredients = ({ selectedIngredients }) => {
    return (
        <div className="chosen-ingreds-list">
            <ul>
                {selectedIngredients.map((ingredientName, index) => (
                    <li key={index} className="ingredient">{ingredientName}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChosenIngredients;