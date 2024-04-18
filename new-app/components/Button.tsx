import Image from 'next/image';
import React from 'react'

type ButtonProps ={
    type : 'button' | 'submit' | 'reset' | undefined,
    title : string,
    icon?: string;
    variant : 'btn_dark_green' | 'btn_custom_color' | 'btn_white_text' | 'btn_dark_green_outline',
    full? : boolean;
}

const Button = ({type, title, icon, variant, full} : ButtonProps) => {
  return (
    <button  className={` flex items-center justify-center rounded-full border gap-3 ${variant} ${full && 'w-full'}`} type={type}>
        {icon && <Image src={icon} alt="user logo" width={24} height={24}/>}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    
    </button>
  )
}

export default Button
