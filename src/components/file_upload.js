import React, { useState } from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';
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
                        <img src={uploadImg} width="20px" alt="upload" />
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