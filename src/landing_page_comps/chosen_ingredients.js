import React from "react";
import "../index.css";
import Ingredient from "./ingredient";

function Choseningredients() {
    return (
        <div>
            <div className="chosen-ingreds-text">
                <p>Your ingredients</p>
                <p>Clear</p>
            </div>
            <div className="chosen-ingreds-list">
                <Ingredient name="salt" />
                <Ingredient name="butter" />
                <Ingredient name="granulated sugar" />
                <Ingredient name="paprika" />
                <Ingredient name="nut" />
            </div>
        </div>
    )
}



export default Choseningredients