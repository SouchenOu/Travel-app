import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='items-center justify-center '>
      <div className='mx-auto max-w-[1440px] relative flex w-full   justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[900px] 2xl:rounded-5xl'>
        <div className='flex flex-col gap-20 items-start w-full flex-1 z-20 justify-center'>
            <h1 className='text-[60px] font-[400] lg:bold-64 xl:max-w-[320px]'>Get For Free Now!</h1>
            <h2 className='text-[16] font-[400] text-gray-10'>Available on iOS and Android</h2>
        
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button type="button" title="App store" icon="/apple.svg" variant="btn_custom_color" full/>
            <Button type="button" title="PLay store" icon="/android.svg" variant="btn_dark_green_outline" full/>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
            <Image src="/phones.png" alt="phones" width={550} height={870}/>
        </div>

      </div>
      
    </section >
  )
}

export default GetApp
