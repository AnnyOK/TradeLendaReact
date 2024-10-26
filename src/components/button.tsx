import React from 'react';
type ButtonProps={
    color:string;
    icon:React.ReactElement|string;
    onclick:()=>void
}
export const Button:React.FC<ButtonProps>=({color,icon,onclick}) =>{
    return (
        <div className={`${color} rounded-md flex flex-1 mx-2 text-[28px] justify-center items-center px-4 py-3 min-w-[160px]`} onClick={onclick}>
            {icon}
        </div>
    );
}
