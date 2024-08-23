/* individual reciope listing */

import React, { useState } from "react";
import RecipeDetails from "../display_recipe";

function Recipelisting({ data_prop }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="recipe-listing"
            onClick={() => setShowDetails(!showDetails)}
            style={{ cursor: 'pointer' }}>
            <img src={data_prop.image} alt={data_prop.title} />
            <p>{data_prop.title}</p>
            {showDetails && (
                <div>
                    <RecipeDetails recipeId={data_prop.id} />
                </div>
            )}
        </div>
    );
}

export default Recipelisting;