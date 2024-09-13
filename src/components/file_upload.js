import React, { useState } from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';

function Upload() {
    const [file, setFile] = useState(null);

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
            // Replace 'http://localhost:3000' with your backend URL
            const response = await fetch('http://localhost:3000/upload', { 
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Upload successful:', result);
            } else {
                console.error('Upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <form id="upload_form" onSubmit={handleUpload}>
            <label htmlFor="myFile">
                <div className='file-upload'>
                    <img src={uploadImg} width="20px" alt="upload" />
                    <p>Upload Photo of Fridge</p>
                </div>
            </label>
            <input type="file" id="myFile" name="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default Upload;