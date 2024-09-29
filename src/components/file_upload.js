import React, { useState } from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';

function Upload({ setRecipeListings, setShowRecipeListings }) {
    const [file, setFile] = useState(null);

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            // Performs upload as soon as file is selected
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch('http://localhost:3000/upload', { 
                    method: 'POST',
                    body: formData
                });

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
                    <img src={uploadImg} width="20px" alt="upload" />
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