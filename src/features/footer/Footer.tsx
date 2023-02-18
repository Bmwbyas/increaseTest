import React from 'react';
import s from './Footer.module.scss'

const data=[
    'Пункт 01','Пункт 02','Пункт 03','Пункт 04','Пункт 05','Пункт 06','Пункт 07',
    'Пункт 08','Пункт 09','Пункт 10','Пункт 11','Пункт 12','Пункт 13','Пункт 14',

]
const Footer = () => {
    return (
        <footer className={s.footerContainer}>
             <ul className={s.pointsContainer}>
                 {data.map((d,index)=><li className={s.pointItem} key={index}>{d}</li>)}
             </ul>
             <div className={s.seoContainer}>
                 <ul className={s.seoList}>
                     <li>Поисковое продвижение</li>
                     <li>Тариф "Новый"</li>
                     <li>Тариф "Новый"</li>
                     <li>Тариф "Новый"</li>
                     <li>Тариф "Новый"</li>
                     <li>Тариф "Новый"</li>
                     <li>Тариф "Новый"</li>
                 </ul>
             </div>
             <div className={s.twoBlocks}>
                 <div className={s.block}></div>
                 <div className={s.block}></div>
             </div>

        </footer>
    );
};

export default Footer;
