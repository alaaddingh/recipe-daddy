import React from 'react';
import "../index.css"

function Header() {
    return (
        <nav>
            <header>
                <img src="https://static.vecteezy.com/system/resources/previews/023/527/583/original/spoon-and-fork-black-icon-symbol-sign-design-transparent-background-free-png.png" width="80px" alt="logo" />
                <p className="nav--logotext">Recipe Daddy</p>
                <div className="nav-icons">
                    {/* Replace **USER ICON** and **NAV ICON** placeholders with actual icons */}
                    <span className="user-icon">**USER ICON**</span>
                    <Navbar />
                </div>
            </header>
        </nav>
    );
}

function Navbar() {
    return (
        <div className='hamburger-box'>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
        </div>
    );
}



export default Header;