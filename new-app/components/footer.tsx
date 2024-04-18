import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-2 border-red-700 flex items-center justify-center mb-24'>
        <div className='w-full px-6 lg:px-20 3xl:px-0 flex flex-col gap-14 mx-auto max-w-[1440px] '>
          <div className='flex flex-col items-start'>
            <Link href="/" className=''>
              <Image src="hilink-logo.svg" alt="" width={74} height={29}/>
            </Link>

          </div>
        </div>
    </footer>
  )
}

export default Footer
