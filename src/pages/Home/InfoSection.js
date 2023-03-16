import React from 'react'

const InfoSection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 px-4 md:px-0'>
          <div className='h-[190px] bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-lg text-white flex gap-6  justify-center items-center px-4'>
            <div>
                  <i className="fa-regular fa-clock text-5xl"></i>
            </div>
            <div>
                <h4 className='text-2xl'>Openning Hours</h4>
                <p className='opacity-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
          <div className='h-[190px] bg-[#3A4256] rounded-lg text-white flex gap-6 justify-center items-center px-4'>
              <div>
                  <i className="fa-solid fa-location-dot text-5xl"></i>
              </div>
              <div>
                  <h4 className='text-2xl'>Visit Our Location </h4>
                  <p className='opacity-100'>Brooklyn, NY 10036, United States </p>
              </div>
        </div>
          <div className='h-[190px] bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-lg text-white flex gap-6 justify-center items-center px-4'>
              <div>
                  <i className="fa-solid fa-phone-volume text-5xl"></i>
              </div>
              <div>
                  <h4 className='text-2xl'>Contact Us Now</h4>
                  <p className='opacity-100'>+000 123 456789</p>
              </div>
          </div>
       
    </div>
  )
}

export default InfoSection