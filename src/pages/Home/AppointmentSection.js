import React from 'react'
import { Link } from 'react-router-dom';
import appointmentBg from '../../assests/images/appointment.png';
import doctor from '../../assests/images/doctor.png';
import PrimaryButton from '../shared/Buttons/PrimaryButton';
const AppointmentSection = () => {
    return (
        <section className='bg-no-repeat bg-cover md:mt-32 mb-16' style={{ backgroundImage: `url(${appointmentBg})` }}>
            <div className='container mx-auto md:flex '>
                
                <div className='text-white md:w-[70%] py-6 px-4 md:px-0 w-full'>
                    <h5 className='text-[#19D3AE] text-lg mb-4'>Appointments</h5>
                    <h1 className='text-3xl mb-2'>Make an appointment Today</h1>
                    <p className='mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Link to='appointment' className='text-start'>
                        <PrimaryButton >Get started</PrimaryButton>
                    </Link>
                </div>
                <div className='hidden md:block text-left'>
                    <img src={doctor} alt="" className='mt-[-220px]' />
                </div>
            </div>
        </section>
    )
}

export default AppointmentSection