import React from 'react'
import AppointmentSection from './AppointmentSection'
import DentalCareSection from './DentalCareSection'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import ServicesSection from './ServicesSection'
import TestimonialSection from './TestimonialSection'


const Home = () => {
  return (
    <div className=' mx-auto'>
      <HeroSection/>
      <InfoSection/>
      <ServicesSection/>
      <DentalCareSection/>
      <AppointmentSection/>
      <TestimonialSection/>
    </div>
  )
}

export default Home