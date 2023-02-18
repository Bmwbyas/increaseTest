import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.firstContainer}></div>
            <div className={s.secondContainer}></div>
            <div className={s.thirdContainer}>

                    <p>+375 (29) 371-10-41</p>
                    <a href='mailto:info@increase.by' target='_blank'>info@increase.by</a>
                    <a href='https://increase.by/' target='_blank'>www.increase.by</a>

            </div>
        </div>
    );
};

export default Header;
