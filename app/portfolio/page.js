import BackgroundEffects from '@/components/BackgroundEffects'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function portfolio() {
  return (
    <><div className='flex flex-col min-h-screen'>
      <BackgroundEffects/>
      <div className='flex justify-center'><NavBar/></div>
    </div>
<CTASection/>
<Footer/>
    </>
  )
}
