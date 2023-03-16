import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../shared/Buttons/PrimaryButton'
import chair from '../../assests/images/chair.png'
import CalendarContainer from '../shared/Calendar/CalendarContainer'

const AppointmentsHeader = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
  return (
    

        <section className="hero lg:min-h-[600px] z-0 relative bg-no-repeat bg-cover" style={{backgroundImage:`url(${chair})`}}>
              <div className="absolute h-full w-full bg-white opacity-90"></div>
              <div className="hero-content grid grid-cols-1  md:grid-cols-2 mx-auto md:mx-24">
                  <div className='relative z-10 text-gray-700'>
                    <CalendarContainer value={value} onChange={onChange}></CalendarContainer>
                  </div>
                  <img src={chair} alt='heroImg' className='w-[90%]' />
              </div>
          </section>
 
  )
}

export default AppointmentsHeader