import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../shared/Buttons/PrimaryButton'
import chair from '../../assests/images/chair.png'
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar'

const AppointmentsHeader = () => {
    const [value, onChange] = useState(new Date())
    console.log(value);
  return (
    

        <section className="hero lg:min-h-[600px] z-0 relative bg-no-repeat bg-cover" style={{backgroundImage:`url(${chair})`}}>
              <div className="absolute h-full w-full bg-white opacity-90"></div>
              <div className="hero-content flex flex-col md:flex-row-reverse mx-auto md:mx-24 gap-x-24">
                  <img src={chair} alt='heroImg' className='w-full max-w-[450px]' />
                  <div className='relative z-10 text-gray-700'>
                    <Calendar className='w-full' value={value} onChange={onChange}></Calendar>
                  </div>
              </div>
          </section>
 
  )
}

export default AppointmentsHeader