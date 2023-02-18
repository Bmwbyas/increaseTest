import React, {useState} from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const navData = [
    {title: 'Изготовление сайтов "под ключ"'},
    {title: 'Как мы работаем"'},
    {title: 'Интеграция с amoCrrn'},
    {title: 'Поддержка сайтов'},
    {title: 'Создание сайтов на Wordpress'},
    {title: 'Дизайн сайтов'},
    {title: 'Редизайн сайтов'},
    {title: 'Интернет-магазины'},
    {title: 'Создание логотипов'},
    {title: 'FAQ'},
]

export const Nav = () => {
    const [isShow,setIsShow]=useState(false)
    const showNavHandler=()=>{
        setIsShow(!isShow)
    }
    const navBarClassName=isShow?s.navContent+' '+s.showNav:s.navContent
    return (
        <div className={s.navContainer}>
            <button className={s.navButton} onClick={showNavHandler}>show nav</button>
            <div className={navBarClassName}>
                <h4>Создание сайтов</h4>
                <div className={s.navItemContainer}>
                    {navData.map((n, index) => {
                        const onClickHandler=()=>{
                            setIsShow(false)
                        }
                        return <NavLink className={s.navItem} onClick={onClickHandler} key={index}
                                                        to={'/page'}>{n.title}</NavLink>})}
                </div>
            </div>
        </div>
    );
};

