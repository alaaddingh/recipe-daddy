import React, { useState } from 'react';
import "../index.css";
// import uploadImg from '../images/upload_img.png';
import Recipelisting from './recipe_listings_comps/recipe_listing';

function Upload() {
    const [file, setFile] = useState(null);
    const [recipeListings, setRecipeListings] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Upload successful:', result);

                // Set recipe listings based on the response
                setRecipeListings(result.recipes);
            } else {
                console.error('Upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <form id="upload_form" onSubmit={handleUpload}>
                <label htmlFor="myFile">
                    <div className='file-upload'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                        </svg>
                        <p>Upload Photo of Food</p>
                    </div>
                </label>
                <input type="file" id="myFile" name="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>

            {/* Display recipe listings */}
            {recipeListings.length > 0 && (
                <div className="recipe-listings">
                    {recipeListings.map((recipe) => (
                        <Recipelisting key={recipe.id} data_prop={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Upload;