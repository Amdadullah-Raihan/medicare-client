import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from '../../../assests/images/chair.png';
import PrimaryButton from '../../shared/Buttons/PrimaryButton';




const HeroSection = () => {

    const heroStyles = {
        backgroundImage: `url(${heroImg})`,
    }
  return (
      <div className="hero lg:min-h-[600px] z-0 relative bg-no-repeat bg-cover" style={heroStyles}>
        <div className="absolute h-full w-full bg-white opacity-90"></div>
          <div className="hero-content flex-col lg:flex-row-reverse  mx-auto md:mx-24">
              <img src={heroImg} alt='heroImg' className='w-full lg:w-1/2' />
              <div className='relative z-10 text-gray-700'>
                  <h1 className="md:text-4xl text-2xl md:text-xl font-bold">Your New Smile Starts Here</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <Link to='/appointments'><PrimaryButton>Get Started</PrimaryButton></Link>
              </div>
          </div>
      </div>
  )
}

export default HeroSection