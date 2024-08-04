import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './landing_page_comps/header';
import Footer from './landing_page_comps/footer';
import Upload from './landing_page_comps/file_upload';
import Findrecipe from './landing_page_comps/find_recipe';
import SearchBarWrapper from './landing_page_comps/search_bar_comps/search_bar_wrapper';
import ChosenIngredientsContainer from './landing_page_comps/your_ingredients_comps/chosen_ingredients_container';
import { SearchResultsList } from './landing_page_comps/search_bar_comps/search_results_list';
import CommonIngredientsContainer from './landing_page_comps/common_ingredients_container';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Landing() {
    const [selectedIngredients, setSelectedIngredients] = useState(new Set());
    const [results, setResults] = useState([]);

    const addIngredient = (ingredient) => {
        setSelectedIngredients((prevIngredients) => {
            const newIngredients = new Set(prevIngredients);
            newIngredients.add(ingredient.name);
            return newIngredients;
        });
    };

    // This function removes selected ingredients on click by passing the
    // ingredient name to the removeIngredient function (name comes from chosen_ingredients.js)
    // then we create a new Set from the old items, and then delete the given ingredient.
    // Then pass the newIngredients Set to the setter function. 
    const removeIngredient = (ingredientName) => {
        setSelectedIngredients((prevIngredients) => {
            const newIngredients = new Set(prevIngredients);
            newIngredients.delete(ingredientName); // Remove the ingredient by name
            return newIngredients; // Return the updated Set to the setter function
        });
    };

    const clearIngredients = () => {
        setSelectedIngredients(new Set());
    };

    return (
        <div>
            <Header />
            <div className='Mainbody'>
                <div className='sideBar'>
                    <Upload />
                    <Findrecipe ingredients={[...selectedIngredients]} />
                    <ChosenIngredientsContainer
                        clearIngredients={clearIngredients}
                        selectedIngredients={[...selectedIngredients]}
                        removeIngredient={removeIngredient}
                    />
                </div>
                <div className='focusArea'>
                    <SearchBarWrapper setResults={setResults} />
                    <SearchResultsList
                        results={results}
                        addIngredient={addIngredient}
                    />
                    <CommonIngredientsContainer />
                </div>
            </div>
            <Footer />
        </div>
    );
};

root.render(<Landing />);