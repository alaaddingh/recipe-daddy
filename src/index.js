import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Upload from './components/file_upload';
import FindRecipe from './components/find_recipe';
import SearchBarWrapper from './components/search_bar_comps/search_bar_wrapper';
import ChosenIngredientsContainer from './components/your_ingredients_comps/chosen_ingredients_container';
import CommonIngredientsContainer from './components/common_ingredients_container';
import RecipeListingsContainer from './components/recipe_listings_comps/recipe_listings_container';
// Mother File

const root = ReactDOM.createRoot(document.getElementById('root'));

function Landing() {
    const [selectedIngredients, setSelectedIngredients] = useState(new Set());
    const [showRecipeListings, setShowRecipeListings] = useState(false);
    const [recipeListings, setRecipeListings] = useState([]);

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
        <div className='everything-container'>
            <Header />
            <div className='mainbody-border'>
                <div className='mainbody'>
                    <div className='sideBar'>
                        <Upload
                            setRecipeListings={setRecipeListings}
                            setShowRecipeListings={setShowRecipeListings} />
                        <FindRecipe
                            setShowRecipeListings={setShowRecipeListings}
                            selectedIngredients={[...selectedIngredients]}
                            setRecipeListings={setRecipeListings} />
                        <ChosenIngredientsContainer
                            clearIngredients={clearIngredients}
                            selectedIngredients={[...selectedIngredients]}
                            removeIngredient={removeIngredient}
                        />
                    </div>
                    <div className='focusArea'>
                        {/* <LoadingAnimation /> */}
                        <SearchBarWrapper
                            addIngredient={addIngredient} />
                        <RecipeListingsContainer
                            recipeListings={recipeListings}
                            showRecipeListings={showRecipeListings} />
                        {/* Common ingredients will be added manually */}
                        <CommonIngredientsContainer
                            showRecipeListings={showRecipeListings} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

root.render(<Landing />);