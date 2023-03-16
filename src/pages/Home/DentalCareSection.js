import React from 'react'
import PrimaryButton from '../shared/Buttons/PrimaryButton'
import treatment from '../../assests/images/treatment.png';
import { Link } from 'react-router-dom';

const DentalCareSection = () => {
  return (
    <div className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 items-center px-4 md:px-0'>
        <div>
             <img src={treatment} alt="" className='rounded-xl'/>
        </div>
        <div className=''>
            <h3 className="text-4xl mb-6">Exceptional Dental Care, on Your Terms</h3>
              <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              <Link to='/appointments'><PrimaryButton>Get started</PrimaryButton></Link>
        </div>
    </div>
  )
}

export default DentalCareSection