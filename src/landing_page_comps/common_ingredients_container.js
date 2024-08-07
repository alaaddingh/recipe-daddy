import React from 'react';
// import CommonIngredientsCategory from './common_ingredients_category';


const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/food/ingredients/search';

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


/* 
============= NOTE: ============== 
We can't search ingredient by category. My solution is to search and store 
every single ingredient in the spoonacular API. Then we can sort the 
ingredient's based off their category. 
The issue is that this uses a SHIT ton of API calls. 
*/

const CommonIngredientsCategory = ({ categoryName }) => {
    const fetchData = (value) => {
        const url = `${API_URL}?query=${categoryName}}&apiKey=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data));
                const results = data.results || [];
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // setResults([]);
            });
    };

    return (
        <div className='common-ingredients-category'>
            <p>{categoryName}</p>
        </div>
    );
};



export default CommonIngredientsContainer;