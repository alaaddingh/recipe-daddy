import React from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';

function Upload() {
    return (
        <form id="upload_form" action="/action_page.php">
            <label htmlFor="myFile" className="file-upload">
                <div className='file-upload-content'>
                    <img src={uploadImg} width="20px" alt="upload" />
                    <p>Upload Photo of Fridge</p>
                </div>
            </label>
            <input type="file" id="myFile" name="filename" />
        </form>
    );
}



export default Upload