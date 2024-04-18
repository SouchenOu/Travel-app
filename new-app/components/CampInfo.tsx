import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

type Element = {
    backgroundImage : string;
    title : string;
    subtitle : string;
    peopleJoined : string;

}

const Site = ({backgroundImage, title, subtitle, peopleJoined} : Element) =>{
    return (
        <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ` }   style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='flex flex-col h-full items-start justify-between'>
                <div className='flex items-center justify-center gap-3 p-10'>
                    <div className='rounded-full  p-4' style={{background : '#013328'}}>
                        <Image src="/folded-map.svg" alt="map" width={28} height={28}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-[18px] font-[700] text-white'>{title}</h4>
                        <p className=' text-[14px] font-[400] text-white'>{subtitle}</p>

                    </div>
                </div>
                <div className='flex items-center justify-center p-[20px] gap-3'>
                    <span className='flex -space-x-4 overflow-hidden '>
                        {PEOPLE_URL.map((elem) =>(
                            <Image className="rounded-full h-10 w-10 " src={elem} key={elem} alt="" width={52} height={52} />
                        ))}

                    </span>
                    <p className='text-xl font-bold text-white'>{peopleJoined}</p>


                </div>
           </div>

        </div>
    )

}

const CampInfo = () => {
  return (
    <section className=' px-[20px]  2xl:mx-auto 2xl:max-w-[1440px] flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 relative'>
        <div className='hide-scrollbar flex h-full w-full items-start justify-start gap-8 overflow-x-auto lg:h-[600px] xl:h-[640px]'>
            <Site backgroundImage='tu.jpg' title="nextLevel Camp" subtitle="Somewhere in Australia" peopleJoined="50+ People"/>
            <Site backgroundImage='/tyy.jpeg' title="Montain view camp" subtitle="Somewhere in Canada" peopleJoined="500+ People"/>
            <Site backgroundImage='/camp.jpg' title="Montain view camp" subtitle="Somewhere in Canada" peopleJoined="500+ People"/>

        </div>
        <div className='flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
            <div className=' flex flex-col p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 w-full overflow-hidden rounded-3xl' style={{background : '#013328'}}>
                <h2 className='text-[24px] font-[400] md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%] capitalize text-white'>
                    <strong>Feelling lost</strong> And not Knowing The way?
                </h2>
                <p className='text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt-5 text-white'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
                <Image src="/quote.svg" alt="" width={186} height={219}/>
            </div>
        </div>

        
    </section>
  )
}

export default CampInfo
