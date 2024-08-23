/* individual reciope listing */

import React, { useState } from "react";
import RecipeDetails from "./display_recipe";

function Recipelisting({ data_prop }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleDetailsClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <div onClick={handleDetailsClick} style={{ cursor: 'pointer' }}>
                <p>{data_prop.title}</p>
                <img src={data_prop.image} alt={data_prop.title} />
            </div>
            {showDetails && (
                <div>
                    <RecipeDetails recipeId={data_prop.id} />
                </div>
            )}
        </div>
    );
}

export default Recipelisting;