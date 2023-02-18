import React from 'react';
import {NavLink} from "react-router-dom";

const Page = () => {
    return (
        <div style={{display:"flex",height:'100vh',justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
            <div>Какая-то страница</div>
            <NavLink to={'/main'}> Go to main page</NavLink>
        </div>
    );
};

export default Page;
