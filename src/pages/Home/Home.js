import React from 'react'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import ServicesSection from './ServicesSection'


const Home = () => {
  return (
    <div className=' mx-auto'>
      <HeroSection/>
      <InfoSection/>
      <ServicesSection/>

    </div>
  )
}

export default Home