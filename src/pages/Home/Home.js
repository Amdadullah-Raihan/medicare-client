import React from 'react'
import AppointmentSection from './HomeSections/AppointmentSection'
import ContactSection from './HomeSections/ContactSection'
import DentalCareSection from './HomeSections/DentalCareSection'
import HeroSection from './HomeSections/HeroSection'
import InfoSection from './HomeSections/InfoSection'
import ServicesSection from './HomeSections/ServicesSection'
import TestimonialSection from './HomeSections/TestimonialSection'


const Home = () => {
  return (
    <div className=' mx-auto'>
      <HeroSection/>
      <InfoSection/>
      <ServicesSection/>
      <DentalCareSection/>
      <AppointmentSection/>
      <TestimonialSection/>
      <ContactSection/>
    </div>
  )
}

export default Home