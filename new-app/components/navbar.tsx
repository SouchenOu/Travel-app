import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-500  px-16 lg:px-[50] 3xl:px-100  gap-[10px] w-full' style={{background : '#E3DCD2'}}>
        <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={100}/>
           
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
                    {NAV_LINKS.map((elem)=>(
                        <Link className="text-[16px] font-[400] text-gray-50 cursor-pointer hover:font-bold pb-1.5 transition-all flex items-center justify-center" href={elem.href} key={elem.key}>  {elem.label}</Link>
                    ))}
        </ul>
        <div className='lg:flex lg:items-center lg:justify-center'>
            <Button type="button" title="Login" icon="user.svg" variant="btn_custom_color" />
        </div>
        <Image src="menu.svg" alt="menu" width={32} height={32} className='cursor-pointer lg:hidden inline-block'/>
    </div>
  )
}

export default Navbar

// #E3DCD2
// #CC8B65
// #013328
// #100C0D
