import React from "react";

export const SearchResult = ({ result, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{ cursor: 'pointer' }}>
            {result.name}
        </div>
    );
};
