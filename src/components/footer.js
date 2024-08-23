import React from 'react';
import "../index.css"

function Footer() {
    return (
        <nav>
            <footer>
                <img src="https://static.vecteezy.com/system/resources/previews/023/527/583/original/spoon-and-fork-black-icon-symbol-sign-design-transparent-background-free-png.png" width="80px" alt="logo" />
                <a href='../about_us'>About Us</a>
                <a href='../feedback'>Feedback</a>
                <a href='https://github.com/alaaddingh/recipe-daddy' className='github'>
                    <img src="../images/github-logo.png" width="10px" alt="github logo" />
                    <p>GitHub</p>
                </a>
            </footer>
        </nav>
    );
}

export default Footer;