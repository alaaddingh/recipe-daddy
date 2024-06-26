import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './landing_page_comps/header';
import Footer from './landing_page_comps/footer';
import Upload from './landing_page_comps/file_upload';
import Findrecipe from './landing_page_comps/find_recipe';
import SearchBarWrapper from './landing_page_comps/search_bar_comps/search_bar_wrapper';
import Choseningredients from './landing_page_comps/chosen_ingredients';
import Ingredientscontainer from './landing_page_comps/ingredients_container';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Landing() {
    const [userInterestedInUpload, setUserInterestedInUpload] = useState(true);

    return (
        <div>
            <Header />
            <div className='Mainbody'>
                <div className='sideBar'>
                    <Findrecipe />
                    <Choseningredients />
                </div>
                <div className={userInterestedInUpload ? 'focus-area focusOnUpload' : 'focus-area focus-on-search'} >
                    <Upload isUploadBoxBig={userInterestedInUpload} />
                    <SearchBarWrapper onInteraction={() => {setUserInterestedInUpload(false)}} focusOnUpload={userInterestedInUpload} />
                    <Ingredientscontainer />
                </div>
            </div>
            <Footer />
        </div>
    );
}

root.render(
    <Landing />
);