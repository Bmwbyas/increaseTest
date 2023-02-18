import React from 'react';
import s from './Main.module.scss'
import FirstBlock from "./firstBlock/FirstBlock";
import SecondBlock from "./secondBlock/SecondBlock";
import ThirdBlock from "./thirdBlock/ThirdBlock";

export const Main = () => {
    return (
        <div className={s.container}>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
        </div>
    );
};


