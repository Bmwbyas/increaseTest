import React from 'react';
import s from './FirstBlock.module.scss'

const blockData=[
    {header:'number', text:'- нумерация блоков (номера блоков верстать не нужно)'},
    {header:'text', text:'- текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное расстояние 22 пикселя)'},
    {header:'head', text:'- шапка сайта'},
    {header:'content', text:'- контентная область, которая в свою очередь делится на left и center'},

]


const FirstBlock = () => {
    return (
        <div className={s.container}>
            <h2>PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:</h2>
            <ul>
                {blockData.map((b,index)=><li key={index} ><span>{b.header}</span>{b.text}</li>)}
            </ul>
            <p>Текстовое описание задания и требования.</p>
        </div>
    );
};

export default FirstBlock;
