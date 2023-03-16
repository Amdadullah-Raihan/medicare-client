import React from 'react'
import people from '../../assests/images/people2.png';
import qoute from '../../assests/icons/quote.svg';

const TestimonialSection = () => {
    return (
        <section className='container mx-auto mb-16'>
            {/* title */}
            <div className='mb-12 flex justify-between px-4 md:px-0'>
                <div>
                    <h5 className='text-[#19D3AE]'>Testimonials</h5>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img src={qoute} alt="" className='w-44' />
                </div>

            </div>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6  px-4 md:px-0'>
                {/* cards */}
                <div className='shadow-lg p-4'>
                    <div className='mb-6'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={people} alt="" className='border rounded-full border-teal-500 border-2 w-14 mr-4' />
                        <div>
                            <h4>Winson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-4'>
                    <div className='mb-6'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={people} alt="" className='border rounded-full border-teal-500 border-2 w-14 mr-4' />
                        <div>
                            <h4>Winson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-4'>
                    <div className='mb-6'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={people} alt="" className='border rounded-full border-teal-500 border-2 w-14 mr-4' />
                        <div>
                            <h4>Winson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default TestimonialSection