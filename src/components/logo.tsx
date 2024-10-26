import React from 'react';
import logo from '../assets/trade-lendalogo.png'
export const  Logo= ()=>{
    return (
        <a href='/'>
            <img src={logo} alt="tradeLenda" width={100} height={100} />
        </a>
    );
}
