import React from 'react'

export default function Stats() {
  return (
    <div className='md:max-w-280 w-full   h-25 p-2 flex items-center justify-between bg-gradient-to-b from-black/2  via-[#051d13] to-black/2 '>
      <div className='lg:min-w-90 flex justify-center text-sm md:text-xl font-serif px-5 text-center'>Total Clients 67+</div>
      <div className='md:min-w-90  justify-center text-sm md:text-xl font-serif px-5 border-l-2 text-center h-full items-center flex [border-image:linear-gradient(to_bottom,_black,_#2e7450,_black)_1] '>Satisfied Clients 100%</div>
      <div className='md:min-w-90  justify-center text-sm md:text-xl font-serif px-5 border-l-2 h-full text-center items-center flex [border-image:linear-gradient(to_bottom,_black,_#2e7450,_black)_1] '>Total Projects 100+</div>
    </div>
  )
} 
