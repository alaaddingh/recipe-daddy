import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './landing_page_comps/header'; 
import Footer from './landing_page_comps/footer'; 
import Upload from './landing_page_comps/file_upload';
import Findrecipe from './landing_page_comps/find_recipe';
import Searchbar from './landing_page_comps/search_bar';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Landing() {
    return (
        <div>
            <Header />
            <div className='Mainbody'>
                <buttons>
                    <div className = "buttons--toprow">
                    <Upload />
                    <Searchbar />
                    </div>
                    <Findrecipe />
                </buttons>
                
            </div>
            <Footer />
        </div>
    );
}

root.render(
    <Landing />
);