import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './landing_page_comps/header'; // Corrected import
import Footer from './landing_page_comps/footer'; // Corrected import

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

root.render(
    <Main />
);