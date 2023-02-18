import React from 'react';
import s from './SecondBlock.module.scss'

const data=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
]


const SecondBlock = () => {
    return (
        <div className={s.container}>
            {data.map((item,index)=><div key={index} className={s.containerItem}></div>)}
        </div>
    );
};

export default SecondBlock;
