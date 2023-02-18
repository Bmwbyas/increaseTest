import React from 'react';
import './App.scss';
import Header from "./features/header/Header";
import Content from "./features/content/Content";
import Footer from "./features/footer/Footer";

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='hr'></div>
            <Content/>
            <div className='hr'></div>
            <Footer/>
        </div>
    );
}

export default App;
