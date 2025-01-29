import React, { useState } from 'react';
import "../index.css";
import axios from 'axios';

function Upload({ setRecipeListings, setShowRecipeListings }) {
    const [file, setFile] = useState(null);

    const handleFileChange = async (event) => {

        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            // Performs upload as soon as file is selected
            const formData = new FormData();
            formData.append('file', selectedFile);

            console.log("FormData sent:", formData.get("file")); // debugging 

            try {
                const response = await fetch('http://localhost:3001/api/upload', { 
                    method: 'POST',
                    body: formData
                });

                // console.log('Response: ', response.ok);
                if (response.ok) {
                    const result = await response.json();
                    console.log('Upload successful:', result);

                    setRecipeListings(result.recipes);
                    setShowRecipeListings(true); 
                } else {
                    console.error('Upload failed:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div>
            <label htmlFor="myFile">
                <div className='file-upload'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                        </svg>
                    <p>Upload Photo of Food</p>
                </div>
            </label>
            <input 
                type="file" 
                id="myFile" 
                name="file" 
                onChange={handleFileChange}
            />
        </div>
    );
}

export default Upload; 