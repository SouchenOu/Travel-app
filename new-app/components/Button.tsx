import Image from 'next/image';
import React from 'react'

type ButtonProps ={
    type : 'button' | 'submit' | 'reset' | undefined,
    title : string,
    icon?: string;
    variant : 'btn_dark_green' | 'btn_custom_color' | 'btn_green'
}

const Button = ({type, title, icon, variant} : ButtonProps) => {
  return (
    <button  className={` flex items-center justify-center rounded-full border ${variant}`} type={type}>
        {icon && <Image src={icon} alt="user logo" width={24} height={24}/>}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    
    </button>
  )
}

export default Button
