import React from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';

function Upload() {
    return (
        <form id="upload_form" action="/action_page.php">
            <label htmlFor="myFile" className="file-upload">
                <img src={uploadImg} width="20px" alt="upload" />
                Upload Photo of Fridge
            </label>
            <input type="file" id="myFile" name="filename" />
        </form>
    );
}



export default Upload