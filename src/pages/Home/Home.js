import React from 'react'
import DentalCareSection from './DentalCareSection'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import ServicesSection from './ServicesSection'


const Home = () => {
  return (
    <div className=' mx-auto'>
      <HeroSection/>
      <InfoSection/>
      <ServicesSection/>
      <DentalCareSection/>

    </div>
  )
}

export default Home