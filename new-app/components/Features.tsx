import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

type variantTypes = {
  title : string;
  icon : string;
  variant : string;
  description : string;
}
const FeaturesItems = ({title, icon, variant, description} : variantTypes)=>{
  return (
    <li className='flex flex-col w-full flex-1 items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
          <Image src={icon} alt="map" width={28} height={28}/>
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='text-[16px] font-[400] mt-4 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none '>{description}</p>
    </li>
)

}
const Features = () => {
  return (
    <section className='flex items-center justify-center flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='w-full  flex mx-auto max-w-[1440px]  px-6 lg:px-20 3xl:px-0 relative justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src="/phone.png" alt="phone" width={440} height={1000} className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20'/>
        </div>
        <div className='flex flex-col w-full z-20 lg:w-[60%]'>
            <div className='relative'>
              <Image src="/camp.svg" alt="" width={50} height={50}/>
              <h2 className='bold-40 lg:bold-64'>Our Features</h2>
            </div>
            <ul className='mt-10 grid gap-10 md:grid-cols-2  lg:gap-20'>
              {FEATURES.map((elem)=>(
                <FeaturesItems key={elem.title} title={elem.title} icon={elem.icon} variant={elem.variant} description={elem.description}/>
              ))}
            </ul>
        </div>
      </div>

    </section>
  )
}

export default Features
