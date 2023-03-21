import React from 'react'
import { Link } from 'react-router-dom'
import sectionBg from '../../../assests/images/chair.png'

const SectionHeader = ({route}) => {
  return (
    <div className='relative bg-cover bg-no-repeat min-h-[300px] flex justify-center items-center' style={{backgroundImage:`url(${sectionBg})`}}>
        <div className="h-full w-full absolute bg-black opacity-40">
        </div>
        <div className='relative z-10 text-white text-3xl'>
              <Link to='/'>Home</Link> <i className="fa-solid fa-angle-right "></i> {route}
        </div>

    </div>
  )
}

export default SectionHeader