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

    const removeIngredient = (ingredientName) => {
        setSelectedIngredients((prevIngredients) => 
            prevIngredients.filter(ingredient => ingredient !== ingredientName)
        );
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
                    <ChosenIngredientsContainer
                        clearIngredients={clearIngredients}
                        selectedIngredients={[...selectedIngredients]}
                        removeIngredient={removeIngredient}
                    />
                    <Findrecipe ingredients = {[...selectedIngredients]} /> 
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