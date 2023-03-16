import React from 'react'
import flouride from '../../assests/images/fluoride.png'
import cavity from '../../assests/images/cavity.png'
import teetWhitening from '../../assests/images/whitening.png'

const ServicesSection = () => {
    return (
        <section className='my-16'>
            <div className='container mx-auto text-center'>
                <h5 className="text-md uppercase text-[#19D3AE]">our sevices</h5>
                <h3 className='text-xl '>Sevices We Provide</h3>
            </div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-0'>
                <div className=' flex flex-col  items-center justify-center shadow-md rounded-lg p-6'>
                    <img src={cavity} alt="" className='h-[110px] mb-4' />
                    <h4 className="text-xl">Flouride Treatment</h4>
                    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className=' flex flex-col justify-center items-center shadow-md rounded-lg p-6'>
                    <img src={cavity} alt="" className='h-[110px] mb-4' />
                    <h4 className="text-xl">Flouride Treatment</h4>
                    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className=' flex flex-col justify-center items-center shadow-md rounded-lg p-6'>
                    <img src={cavity} alt="" className='h-[110px] mb-4' />
                    <h4 className="text-xl">Flouride Treatment</h4>
                    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection