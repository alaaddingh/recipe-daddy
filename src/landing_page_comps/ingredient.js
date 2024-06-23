import React from "react";
import "../index.css"

/*
this needs to be upgraded to incorporate all the api stuff from spoontacular.
*/

function Ingredient({name}) {
    return (
        <button className="ingredient">
            <p>{name}</p>
        </button>
    )
}




export default Ingredient