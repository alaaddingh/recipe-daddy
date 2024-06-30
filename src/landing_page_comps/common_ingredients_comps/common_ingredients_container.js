import React from 'react';
import CommonIngredientsCategory from './common_ingredients_category';

function CommonIngredientsContainer() {
    return (
        <div className='common-ingredients-container'>
            <CommonIngredientsCategory categoryName={"Fruit"}/>
            <CommonIngredientsCategory categoryName={"Pantry"}/>
            <CommonIngredientsCategory categoryName={"Baking"}/>
            <CommonIngredientsCategory categoryName={"Meats"}/>
            <CommonIngredientsCategory categoryName={"Eats"}/>
            <CommonIngredientsCategory categoryName={"Meats"}/>
        </div>
    );
};

export default CommonIngredientsContainer;