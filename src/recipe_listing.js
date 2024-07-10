import React from "react";

function Recipelisting({ data_prop }) {
    console.log("working with", data_prop);

    return (
        <div>
            <p>{data_prop.title}</p>
            <img src={data_prop.image} alt={data_prop.title} />
            
        </div>
    );
}

export default Recipelisting;