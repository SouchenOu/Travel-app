import Image from 'next/image'
import React from 'react'
import Button from './Button'


// we do flex-wrap = --> flex + flex-col

const MainPart1 = () => {
  return (
   
    <section className='px-6 lg:px-20 3xl:px-100  w-full flex flex-col gap-[20]  py-[300px] lg:py-[300px] pb-32 md:gap-28 xl:flex-row 'style={{background : '#CC8B65'}}>

        <div className='absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60 '></div>
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image className='absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]' src="/camp.svg" alt="camp" width={50} height={50}/>
            <h1 className='text-[52px] font-[700] leading-[120%] lg:bold-88'>We Put the World on Vacation</h1>
            <p className='text-gray-30 mt-6 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app. </p>
            <div className='gap-5 my-11 flex-wrap flex'>
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map((_, index) =>(
                        <Image key={index} src="/star.svg" alt="start" width={24} height={24}/>
                    ))}

                </div>
                <p className='text-[16px] font-[400] lg:bold-20 text-blue-70 cursor-pointer'>194K <span className='text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1 underline cursor-pointer'>Excellent Reviews</span></p>

            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <Button type="button" title="Downland App" icon="" variant="btn_custom_color"/>
                <Button type='button' title="How we work ?" icon="/play.svg" variant="btn_white_text"/>
            </div>
        </div>
       
        <div className='relative flex flex-1 items-start mt-[100px]'>
            <div className='relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                                <p className='text-[16px] font-[400] text-gray-20'>Location</p>
                                <Image src="/close.svg" alt="close" width={24} height={24}/>
                            
                        </div>
                        <p className='items-start text-[20px] font-[700] text-white'> Agues Calientes</p>
                    </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-[16px] font-[400] text-gray-20 block'>Distance</p>
                                <p className='text-[20px] font-[700] text-white'>173.28 mi</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[16px] font-[400] text-gray-20 block'> Elevation</p>
                                <p className='text-[20px] font-[700] text-white '>2.040 Km</p>
                            </div>
                           
                        </div>
                      

                    </div>
            </div>
        
    </section>
   
  )
}

export default MainPart1
