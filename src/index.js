import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './landing_page_comps/header';
import Footer from './landing_page_comps/footer';
import Upload from './landing_page_comps/file_upload';
import Findrecipe from './landing_page_comps/find_recipe';
import SearchBarWrapper from './landing_page_comps/search_bar_comps/search_bar_wrapper';
import IngredientsContainer from './landing_page_comps/ingredients_container';
import { SearchResultsList } from './landing_page_comps/search_bar_comps/search_results_list';

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

    const clearIngredients = () => {
        setSelectedIngredients(new Set());
    };

    return (
        <div>
            <Header />
            <div className='Mainbody'>
                <div className='sideBar'>
                    <Upload />
                    <Findrecipe />
                    <IngredientsContainer
                        selectedIngredients={[...selectedIngredients]}
                        clearIngredients={clearIngredients}
                    />
                </div>
                <div className='focusArea'>
                    <SearchBarWrapper setResults={setResults} />
                    <SearchResultsList
                        results={results}
                        addIngredient={addIngredient}
                    />

                </div>
            </div>
            <Footer />
        </div>
    );
}

root.render(<Landing />);