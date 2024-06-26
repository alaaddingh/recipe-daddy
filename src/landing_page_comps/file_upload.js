import React, { useState } from 'react';
import "../index.css";
import uploadImg from '../images/upload_img.png';

export default function Upload({isUploadBoxBig}) {

    return (
        <form action="/action_page.php">
            <label htmlFor="myFile" >
                <div className={isUploadBoxBig ? 'file-upload large' : 'file-upload small'}>
                    <img src={uploadImg} width="20px" alt="upload" />
                    <p>Upload Photo of Fridge</p>
                </div>
            </label>
            <input type="file" id="myFile" name="filename" />
        </form>
    );
}