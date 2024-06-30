import React from 'react';


const API_KEY = '376053c399e94573b8ff03c5a97b16dd';
const API_URL = 'https://api.spoonacular.com/food/ingredients/search';

export const IngredientCategory = ({ categoryName }) => {
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


export default IngredientCategory;