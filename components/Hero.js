import React from 'react';
import NavBar from './NavBar';
import RobotCanvas from './RobotCanvas';
import localFont from 'next/font/local';
import BackgroundEffects from './BackgroundEffects';
import Stats from './Stats';
import Link from 'next/link';

// Load your local font
const roboto = localFont({
  src: '../public/BruceForeverRegular-X3jd2.ttf', // path relative to the file
  display: 'swap',
  variable: '--font-roboto', // optional for CSS variable usage
});

export default function Hero() {
  return (
    <div className='items-center  text-white'>
    <BackgroundEffects/>
    <div className='flex  items-center justify-center'><NavBar/></div>
   <div className='flex min-h-[90vh] mt-10 lg:mt-0 justify-center'>
    <div className='lg:max-w-280 justify-center flex flex-col lg:flex-row items-center'>
      <div className='max-w-120'>
      <p className={`text-white  text-xl lg:text-start text-center lg:text-xl capitalize ${roboto.className}`} >Innovation isn’t coming</p>
      <p className={`text-[#7b807e]  text-center md:text-start  pt-4 ${roboto.className} text-sm`}>Klikly empowers brands through creativity, strategy and cutting-edge digital solutions.</p>


</div>
       <RobotCanvas/>
        <div className='lg:max-w-290 flex flex-col justify-center items-center'><p className={`text-white text-center md:text-current text-xl lg:text-xl capitalize ${roboto.className}`}>we are building it.</p>
        <div className='flex gap-4 pt-6'>
        <Link href="/portfolio" className='bg-[#01ff83] text-xl font-semibold border-t-2 text-center text-[#0f1a11] w-[150px] h-[40px] p-1 rounded-full'>Our work</Link>
         <Link href="/contact" className=' bg-[#091a10]  text-center text-[#379b64] w-[180px] text-xl font-semibold border-t-2 border-b-1 border-b-[#113720] h-[40px] p-1 rounded-full'>Get Started</Link>
         </div>
        </div>
    </div>
    </div>
    <div className='flex md:px-2 md:-translate-y-5 justify-center w-full items-center'>
    <Stats/>
    </div>
    </div>
  )
}
