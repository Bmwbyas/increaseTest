import React from 'react';
import s from './Content.module.scss'


import {Nav} from "../nav/Nav";
import {Main} from "../main/Main";
import {Route, Routes} from "react-router-dom";
import Page from "../page/Page";


const Content = () => {
    return (
        <div className={s.container}>
            <Nav/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/page' element={<Page/>}/>
            </Routes>
        </div>
    );
};

export default Content;
