export const searchIngredients = async (query) => {
    const response = await fetch(`http://localhost:5000/search-ingredients?query=${query}`);
    const data = await response.json();
    return data;
};